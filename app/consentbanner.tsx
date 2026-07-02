'use client';

import { useEffect, useState } from 'react';

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem('gdpr-consent');
    if (consentStatus) {
      setShowBanner(false);
      return;
    }

    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const country = data.country_code;

      const eaaCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'CH'];

      if (eaaCountries.includes(country)) {
        setShowBanner(true);
      }
    } catch (error) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (choice: 'accept' | 'reject') => {
    localStorage.setItem('gdpr-consent', choice);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-2xl border-t border-blue-500 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold mb-2">Privacy & Cookies</h3>
          <p className="text-sm text-slate-300">We use cookies and ads to improve your experience.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => handleConsent('reject')} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm font-semibold">Reject</button>
          <button onClick={() => handleConsent('accept')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold">Accept</button>
        </div>
      </div>
    </div>
  );
}