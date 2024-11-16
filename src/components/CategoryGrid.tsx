import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Must haves',
    image: 'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png',
    bgColor: 'bg-blue-50'
  },
  {
    id: 2,
    name: 'Diabetes Care',
    image: 'https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png',
    bgColor: 'bg-blue-50'
  },
  {
    id: 3,
    name: 'Healthcare Devices',
    image: 'https://onemg.gumlet.io/4e4b7cd8-0885-42c2-8915-65b7355fc1d8.png',
    bgColor: 'bg-blue-50'
  },
  {
    id: 4,
    name: 'Supplements',
    image: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&q=80&w=400',
    bgColor: 'bg-blue-50'
  },
  {
    id: 5,
    name: 'Ayurvedic',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400',
    bgColor: 'bg-blue-50'
  },
  {
    id: 6,
    name: 'Pain Relief',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    bgColor: 'bg-blue-50'
  },
  {
    id: 7,
    name: 'First Aid',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400',
    bgColor: 'bg-blue-50'
  },
  {
    id: 8,
    name: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400',
    bgColor: 'bg-blue-50'
  }
];

export default function CategoryGrid() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Shop by category</h2>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.bgColor} rounded-xl overflow-hidden shadow-sm`}
          >
            <div className="aspect-[4/3] relative">
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}