import React, { useState } from 'react';
import { Menu, X, Gift, ChevronDown, ChevronRight } from 'lucide-react';
import { Category } from '../types';
import { categoryGroups } from '../data/categories';

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
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    readme: true,
    programming: true,
    data: false,
    cs: false,
    networking: false,
    skills: false,
    tools: false
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const handleCategorySelect = (categoryId: string | null) => {
    onSelectCategory(categoryId);
    setIsOpen(false);
  };

  const getCategoryById = (id: string) => {
    return categories.find(cat => cat.id === id);
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
                
                {categoryGroups.map((group) => (
                  <li key={group.id} className="mt-2">
                    <div 
                      className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-50 rounded-md"
                      onClick={() => toggleGroup(group.id)}
                    >
                      <span>{group.name}</span>
                      {expandedGroups[group.id] ? 
                        <ChevronDown className="h-4 w-4 text-gray-500" /> : 
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                      }
                    </div>
                    
                    {expandedGroups[group.id] && (
                      <ul className="ml-2 mt-1 space-y-1">
                        {group.categories.map((categoryId) => {
                          const category = getCategoryById(categoryId);
                          if (!category) return null;
                          
                          return (
                            <li key={categoryId}>
                              <button
                                className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                                  selectedCategory === categoryId
                                    ? 'bg-blue-50 text-blue-700 font-medium'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                                onClick={() => handleCategorySelect(categoryId)}
                              >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a 
                  href="https://education.github.com/pack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md text-green-600 hover:bg-green-50"
                >
                  <Gift className="h-5 w-5 mr-2" />
                  <span className="font-medium">Claim Github Student Pack</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;