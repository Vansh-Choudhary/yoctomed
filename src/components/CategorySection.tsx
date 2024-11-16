import React from 'react';

interface Category {
  id: number;
  name: string;
  image: string;
  items: number;
}

interface CategorySectionProps {
  title: string;
  categories: Category[];
}

export default function CategorySection({ title, categories }: CategorySectionProps) {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold">{category.name}</h3>
              <p className="text-gray-600 text-xs">{category.items} items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}