import React from 'react';

const Address = ({ className = '' }: { className?: string }) => {
  return (
    <address className={`not-italic ${className}`}>
      <p className="font-medium text-gray-900">Verdant Lam Ltd.</p>
      <p>Renshaw, Falkner Street</p>
      <p>Edge Hill, Liverpool</p>
      <p>England</p>
      <p>L8 7RF</p>
      <p>United Kingdom</p>
    </address>
  );
};

export default Address;
