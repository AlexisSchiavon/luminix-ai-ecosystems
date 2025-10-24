const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Helper function to hash data using SHA-256
async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    console.log('Received Cal.com webhook:', JSON.stringify(payload, null, 2));

    // Extract booking data from Cal.com webhook
    // Cal.com sends data in different formats, we'll try to extract the relevant fields
    const responses = payload.responses || {};
    const email = responses.email || payload.email || '';
    const name = responses.name || payload.name || '';
    const phone = responses.phone || payload.phone || '';

    if (!email) {
      console.warn('No email found in webhook payload');
      return new Response(
        JSON.stringify({ success: true, message: 'No email to process' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // Get Meta access token from environment
    const accessToken = Deno.env.get('META_ACCESS_TOKEN');
    if (!accessToken) {
      throw new Error('META_ACCESS_TOKEN not configured');
    }

    // Extract IP and User Agent from request headers
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';
    const clientUserAgent = req.headers.get('user-agent') || '';

    // Prepare user_data with hashed PII
    const userDataPayload: any = {
      client_ip_address: clientIp,
      client_user_agent: clientUserAgent,
      em: await hashData(email.toLowerCase().trim()),
    };

    // Hash phone if provided
    if (phone) {
      const cleanPhone = phone.replace(/\D/g, '');
      userDataPayload.ph = await hashData(cleanPhone);
    }

    // Hash first name if provided
    if (name) {
      const firstName = name.split(' ')[0];
      userDataPayload.fn = await hashData(firstName.toLowerCase().trim());
    }

    // Prepare the payload for Meta Conversions API
    const metaPayload = {
      data: [{
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: payload.metadata?.videoCallUrl || 'https://cal.com/booking',
        user_data: userDataPayload,
        custom_data: {
          content_name: 'Cal.com Booking',
          content_category: 'Appointment',
        },
      }],
    };

    console.log('Sending Lead event to Meta for:', { email, name });

    // Send to Meta Conversions API
    const metaResponse = await fetch(
      `https://graph.facebook.com/v18.0/2514954642209428/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metaPayload),
      }
    );

    const responseData = await metaResponse.json();

    if (!metaResponse.ok) {
      console.error('Meta API error:', responseData);
      throw new Error(`Meta API error: ${JSON.stringify(responseData)}`);
    }

    console.log('Meta API success:', responseData);

    return new Response(
      JSON.stringify({ success: true, data: responseData }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in cal-webhook function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
