'use client';

import Script from 'next/script';
import React from 'react';

export default function GoogleTag() {
  // Function to handle call conversion when the phone number is clicked
  const handleCallConversion = () => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-412695016/s2HICOu748caEOjz5MQB',
        'transaction_id': Date.now().toString() // Generate a unique transaction ID
      });
    }
  };

  // Attach the event listener to all phone links on the page after component mounts
  React.useEffect(() => {
    const phoneLinks = document.querySelectorAll('[href^="tel:"]');
    phoneLinks.forEach(link => {
      link.addEventListener('click', handleCallConversion);
    });

    // Clean up event listeners when component unmounts
    return () => {
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