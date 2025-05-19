// utils/analytics.js

export const GA_MEASUREMENT_ID = 'G-4N5C3C25ZJ';

// Track page views (useful for SPA navigation if you add client-side routing)
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_location: url,
    });
  }
};

// Track custom events in Google Analytics
export const trackEvent = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Pre-defined analytics events for your garden company
export const trackContactForm = () => {
  trackEvent({
    action: 'contact_form_submission',
    category: 'engagement',
    label: 'contact_us',
  });
};

export const trackQuoteRequest = () => {
  trackEvent({
    action: 'quote_request',
    category: 'conversion',
    label: 'landing_page',
  });
};

export const trackServiceInquiry = (serviceName) => {
  trackEvent({
    action: 'service_inquiry',
    category: 'engagement',
    label: serviceName,
  });
};

export const trackPhoneView = () => {
  trackEvent({
    action: 'phone_number_view',
    category: 'engagement',
    label: 'contact_info',
  });
};

export const trackEmailClick = () => {
  trackEvent({
    action: 'email_click',
    category: 'engagement',
    label: 'contact_info',
  });
};