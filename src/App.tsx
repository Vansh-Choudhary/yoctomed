import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import SearchBar from './components/SearchBar';
import CategoryGrid from './components/CategoryGrid';
import DeliveryBanner from './components/DeliveryBanner';
import PromoBanner from './components/PromoBanner';

function App() {
  const [address, setAddress] = useState('LGF, B 85, B Block, East of Kailash, New Delhi');

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-20">
        <div className="px-4 py-4">
          <DeliveryBanner address={address} onAddressChange={setAddress} />
          <SearchBar />
          <PromoBanner />
          <CategoryGrid />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;