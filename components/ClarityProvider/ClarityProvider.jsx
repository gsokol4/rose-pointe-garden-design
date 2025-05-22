'use client';
import { useEffect } from 'react';
import { clarity } from 'clarity-js';

export default function ClarityProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      clarity.init('rnczxzjf3d');
    }
  }, []);

  return null;
}