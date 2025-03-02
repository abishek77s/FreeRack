import React from 'react';
import { Globe } from 'lucide-react';

interface NoResourcesMessageProps {
  language: string | null;
  onSwitchToEnglish: () => void;
}

const NoResourcesMessage: React.FC<NoResourcesMessageProps> = ({ language, onSwitchToEnglish }) => {
  const getLanguageName = (languageId: string | null) => {
    if (!languageId) return 'selected language';
    
    const languages = {
      hindi: 'Hindi',
      tamil: 'Tamil',
      telugu: 'Telugu',
      malayalam: 'Malayalam',
      kannada: 'Kannada',
      bengali: 'Bengali',
      marathi: 'Marathi',
      punjabi: 'Punjabi',
      gujarati: 'Gujarati'
    };
    
    return languages[languageId as keyof typeof languages] || languageId;
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="bg-blue-50 rounded-full p-4 mb-4">
        <Globe className="h-12 w-12 text-blue-500" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        No resources found in {getLanguageName(language)}
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Resources in {getLanguageName(language)} will show up soon as we continue to expand our collection.
      </p>
      <button
        onClick={onSwitchToEnglish}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Switch to English
      </button>
    </div>
  );
};

export default NoResourcesMessage;