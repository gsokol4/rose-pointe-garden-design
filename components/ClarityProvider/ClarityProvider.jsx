'use client';
import { useEffect } from 'react';

export default function ClarityProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      import('clarity-js').then((m) => {
        m.clarity.init('rnczxzjf3d');
      });
    }
  }, []);

  return null;
}