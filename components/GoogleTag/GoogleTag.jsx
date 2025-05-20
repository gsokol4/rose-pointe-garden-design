'use client';

import Script from 'next/script';
import React from 'react';

export default function GoogleTag() {
  // Function to handle call conversion when the phone number is clicked
  const handleCallConversion = () => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      // Use the correct conversion label for your "Purchase" conversion action
      window.gtag('event', 'conversion', {
        'send_to': 'AW-412695016/s2HICOu748caEOjz5MQB',
        'value': 1.0,  // Match the $1 value you set in Google Ads
        'currency': 'USD',
        'transaction_id': `call_${Date.now()}` // Generate a unique transaction ID with prefix
      });
      console.log('Call conversion tracked'); // Helpful for debugging
    }
  };

  // Attach the event listener to all phone links on the page after component mounts
  React.useEffect(() => {
    // Wait a short moment to ensure the DOM is fully loaded
    setTimeout(() => {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      console.log(`Found ${phoneLinks.length} phone links to track`);
      
      phoneLinks.forEach(link => {
        link.addEventListener('click', handleCallConversion);
      });
    }, 1000);

    // Clean up event listeners when component unmounts
    return () => {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach(link => {
        link.removeEventListener('click', handleCallConversion);
      });
    };
  }, []);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-412695016"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-412695016');
        `}
      </Script>
    </>
  );
}