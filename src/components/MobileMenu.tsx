import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Category } from '../types';
import { contentTypeCategories } from '../data/categories';

interface MobileMenuProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    onSelectCategory(categoryId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex">
          <div className="bg-white w-64 h-full overflow-y-auto shadow-xl">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
              <button
                onClick={toggleMenu}
                className="p-1 text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      selectedCategory === null
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => handleCategorySelect(null)}
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
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;