import React from 'react';
import { Pill } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Pill className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-lg font-bold text-gray-900">YoctoMed</span>
        </div>
        <button className="p-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">👤</span>
          </div>
        </button>
      </div>
    </header>
  );
}