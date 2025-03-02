import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Category } from "../types";
import { categoryGroups } from "../data/categories";

interface SidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {
      about: false,
      programming: false,
      data: false,
      cs: false,
      ai: false,
      networking: false,
      skills: false,
      tools: false,
    }
  );

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const getCategoryById = (id: string) => {
    return categories.find((cat) => cat.id === id);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        <ul className="space-y-1">
          <li>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${
                selectedCategory === null
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => onSelectCategory(null)}
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
                {expandedGroups[group.id] ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
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
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => onSelectCategory(categoryId)}
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
      </div>
    </aside>
  );
};

export default Sidebar;