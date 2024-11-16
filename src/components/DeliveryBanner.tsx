import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface DeliveryBannerProps {
  address: string;
  onAddressChange: (address: string) => void;
}

export default function DeliveryBanner({ address, onAddressChange }: DeliveryBannerProps) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold mb-2">Delivery in 8 minutes</h1>
      <button 
        className="flex items-center text-gray-600 text-sm"
        onClick={() => {/* Handle address change */}}
      >
        <MapPin className="h-4 w-4 mr-1" />
        <span className="truncate">{address}</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
}