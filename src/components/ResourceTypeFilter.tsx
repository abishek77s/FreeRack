import React, { useState } from 'react';
import { contentTypeCategories } from '../data/categories';
import { ChevronDown } from 'lucide-react';

interface ResourceTypeFilterProps {
  selectedType: string | null;
  onSelectType: (typeId: string | null) => void;
}

const ResourceTypeFilter: React.FC<ResourceTypeFilterProps> = ({ 
  selectedType, 
  onSelectType 
}) => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  
  const indianLanguages = [
    { id: 'hindi', name: 'Hindi' },
    { id: 'tamil', name: 'Tamil' },
    { id: 'telugu', name: 'Telugu' },
    { id: 'malayalam', name: 'Malayalam' },
    { id: 'kannada', name: 'Kannada' },
    { id: 'bengali', name: 'Bengali' },
    { id: 'marathi', name: 'Marathi' },
    { id: 'punjabi', name: 'Punjabi' },
    { id: 'gujarati', name: 'Gujarati' }
  ];
  
  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };
  
  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId === selectedLanguage ? null : languageId);
    setShowLanguageDropdown(false);
  };
  
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
      
      {selectedType === 'youtube' && (
        <div className="mt-4 relative">
          <div className="flex items-center">
            <h4 className="text-sm font-medium text-gray-700 mr-2">Regional Languages:</h4>
            <button
              onClick={toggleLanguageDropdown}
              className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              {selectedLanguage ? indianLanguages.find(l => l.id === selectedLanguage)?.name : 'Select Language'}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          
          {showLanguageDropdown && (
            <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {indianLanguages.map((language) => (
                <button
                  key={language.id}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedLanguage === language.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleLanguageSelect(language.id)}
                >
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResourceTypeFilter;