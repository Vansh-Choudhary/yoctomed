import React from 'react';
import { Home, Search, FileText, User, ShoppingCart } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-around h-16">
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900">
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900">
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">Search</span>
        </button>
        
        <button className="flex items-center justify-center -mt-8 bg-blue-600 text-white p-4 rounded-full shadow-lg">
          <FileText className="h-6 w-6" />
        </button>
        
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900">
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
        
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900">
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs mt-1">Cart</span>
        </button>
      </div>
    </nav>
  );
}