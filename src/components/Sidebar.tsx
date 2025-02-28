import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        <ul className="space-y-1">
          <li>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${
                selectedCategory === null
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onSelectCategory(null)}
            >
              All Resources
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => onSelectCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;