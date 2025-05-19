
// components/GoogleAnalytics/GoogleAnalytics.js
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-4N5C3C25ZJ';

  return (
    <>
      {/* Google Analytics tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}