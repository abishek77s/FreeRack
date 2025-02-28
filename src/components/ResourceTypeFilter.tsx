import React from 'react';
import { contentTypeCategories } from '../data/categories';

interface ResourceTypeFilterProps {
  selectedType: string | null;
  onSelectType: (typeId: string | null) => void;
}

const ResourceTypeFilter: React.FC<ResourceTypeFilterProps> = ({ 
  selectedType, 
  onSelectType 
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Type</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 py-1.5 rounded-full text-sm font-medium ${
            selectedType === null
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => onSelectType(null)}
        >
          All Types
        </button>
        
        {contentTypeCategories.map((type) => (
          <button
            key={type.id}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${
              selectedType === type.id
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => onSelectType(type.id)}
          >
            <span className="mr-1.5">{type.icon}</span>
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResourceTypeFilter;