import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="mt-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search medicines..."
          className="w-full bg-white h-12 rounded-xl pl-12 pr-4 text-gray-900 placeholder-gray-500 border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}