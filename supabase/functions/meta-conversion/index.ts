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
    const { eventName, eventData, userData } = await req.json();

    if (!eventName) {
      throw new Error('eventName is required');
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
    };

    // Hash email if provided
    if (userData?.email) {
      userDataPayload.em = await hashData(userData.email.toLowerCase().trim());
    }

    // Hash phone if provided
    if (userData?.phone) {
      const cleanPhone = userData.phone.replace(/\D/g, '');
      userDataPayload.ph = await hashData(cleanPhone);
    }

    // Hash first name if provided
    if (userData?.firstName) {
      userDataPayload.fn = await hashData(userData.firstName.toLowerCase().trim());
    }

    // Include fbp and fbc cookies if provided
    if (userData?.fbp) {
      userDataPayload.fbp = userData.fbp;
    }
    if (userData?.fbc) {
      userDataPayload.fbc = userData.fbc;
    }

    // Prepare the payload for Meta Conversions API
    const metaPayload = {
      data: [{
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: userData?.eventSourceUrl || '',
        user_data: userDataPayload,
        custom_data: eventData || {},
      }],
    };

    console.log('Sending event to Meta:', { eventName, userDataKeys: Object.keys(userDataPayload) });

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
    console.error('Error in meta-conversion function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
