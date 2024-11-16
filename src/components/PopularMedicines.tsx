import React from 'react';

const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    price: "$5.99",
    description: "Pain reliever and fever reducer"
  },
  {
    id: 2,
    name: "Vitamin C 1000mg",
    image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&q=80&w=400",
    price: "$8.99",
    description: "Immune system support"
  },
  {
    id: 3,
    name: "First Aid Kit",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400",
    price: "$24.99",
    description: "Complete emergency kit"
  },
  {
    id: 4,
    name: "Digital Thermometer",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400",
    price: "$12.99",
    description: "Accurate temperature reading"
  }
];

export default function PopularMedicines() {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Popular Medicines</h2>
      <div className="grid grid-cols-2 gap-4">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative pb-[75%]">
              <img
                src={medicine.image}
                alt={medicine.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold mb-1">{medicine.name}</h3>
              <p className="text-gray-600 text-xs mb-2">{medicine.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-bold text-sm">{medicine.price}</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 text-sm">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}