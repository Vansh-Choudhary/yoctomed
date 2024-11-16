import React from 'react';

export default function PromoBanner() {
  return (
    <div className="mt-6 bg-blue-600 rounded-xl p-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">₹200 OFF</h3>
          <p className="text-sm mt-1">On your first order</p>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">
          Order Now
        </button>
      </div>
    </div>
  );
}