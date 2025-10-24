import { supabase } from "@/integrations/supabase/client";

// Helper to get a cookie value by name
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

// Get user data including cookies
function getUserData() {
  return {
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc'),
    eventSourceUrl: typeof window !== 'undefined' ? window.location.href : '',
  };
}

// Send a custom event to Meta Conversions API
export async function sendMetaEvent(
  eventName: string,
  eventData?: Record<string, any>,
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
  }
) {
  try {
    const baseUserData = getUserData();
    
    const payload = {
      eventName,
      eventData: eventData || {},
      userData: {
        ...baseUserData,
        ...userData,
      },
    };

    console.log('Sending meta event:', eventName);

    const { data, error } = await supabase.functions.invoke('meta-conversion', {
      body: payload,
    });

    if (error) {
      console.error('Error sending meta event:', error);
      throw error;
    }

    console.log('Meta event sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send meta event:', error);
    throw error;
  }
}

// Track a lead event
export async function trackLead(leadData: {
  email?: string;
  phone?: string;
  firstName?: string;
  name?: string;
}) {
  const firstName = leadData.firstName || leadData.name?.split(' ')[0];
  
  return sendMetaEvent(
    'Lead',
    {
      content_name: 'Lead Form Submission',
      content_category: 'Contact',
    },
    {
      email: leadData.email,
      phone: leadData.phone,
      firstName,
    }
  );
}

// Track a contact event
export async function trackContact(contactData: {
  email?: string;
  phone?: string;
  firstName?: string;
  name?: string;
  message?: string;
}) {
  const firstName = contactData.firstName || contactData.name?.split(' ')[0];
  
  return sendMetaEvent(
    'Contact',
    {
      content_name: 'Contact Form Submission',
      content_category: 'Contact',
    },
    {
      email: contactData.email,
      phone: contactData.phone,
      firstName,
    }
  );
}
