'use client';
import { useEffect } from 'react';

export default function ClarityProvider() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Check if Clarity is already initialized
    if (window.clarity) {
      console.log('Clarity already initialized');
      return;
    }

    // Microsoft Clarity initialization code
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rnczxzjf3d");
  }, []);

  return null;
}