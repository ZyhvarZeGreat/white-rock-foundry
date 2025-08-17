import React from 'react';

export function VeridantAddress() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-600 pb-2">Our Headquarters</h3>
      <address className="text-center not-italic text-gray-700 space-y-1">
        <p className="font-semibold text-lg">Verdant lam Ltd.</p>
        <p>Renshaw, Falkner Street</p>
        <p>Edge Hill, Liverpool</p>
        <p>England</p>
        <p className="font-mono bg-gray-100 px-2 py-1 rounded inline-block mt-2">L8 7RF</p>
        <p className="pt-2 text-gray-800">United Kingdom</p>
      </address>
    </div>
  );
}
