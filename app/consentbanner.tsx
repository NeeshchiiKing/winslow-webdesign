'use client';

import { useEffect, useState } from 'react';

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const checkGeo = async () => {
      const consentStatus = localStorage.getItem('gdpr-consent');
      if (consentStatus) return;

      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const eaaCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'CH'];
        if (eaaCountries.includes(data.country_code)) {
          setShowBanner(true);
        }
      } catch {
        setShowBanner(true);
      }
    };
    checkGeo();
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 border-t border-blue-500 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div>
          <h3 className="font-bold">Privacy & Cookies</h3>
          <p className="text-sm text-slate-300">We use cookies and ads to improve your experience.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { localStorage.setItem('gdpr-consent', 'reject'); setShowBanner(false); }} className="px-4 py-2 bg-slate-700 rounded text-sm">Reject</button>
          <button onClick={() => { localStorage.setItem('gdpr-consent', 'accept'); setShowBanner(false); }} className="px-4 py-2 bg-blue-600 rounded text-sm">Accept</button>
        </div>
      </div>
    </div>
  );
}