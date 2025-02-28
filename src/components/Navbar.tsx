import React, { useState } from 'react';
import { Github, BookOpen, Plus, Gift } from 'lucide-react';
import SubmitResourceForm from './SubmitResourceForm';
import SubmitSuccess from './SubmitSuccess';

const Navbar: React.FC = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmitSuccess = () => {
    setShowSubmitForm(false);
    setShowSuccessMessage(true);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FreeRack</span>
          </div>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <button 
              onClick={() => setShowSubmitForm(true)}
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              <Plus className="h-4 w-4 mr-1" />
              Submit Resource
            </button>
            <a 
              href="https://education.github.com/pack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              <Gift className="h-4 w-4 mr-1" />
              Claim Github Student Pack
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowSubmitForm(true)}
              className="md:hidden text-blue-600 hover:text-blue-800 p-1"
            >
              <Plus className="h-6 w-6" />
            </button>
            <a 
              href="https://education.github.com/pack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:hidden text-green-600 hover:text-green-800 p-1"
            >
              <Gift className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {showSubmitForm && (
        <SubmitResourceForm 
          onClose={() => setShowSubmitForm(false)}
          onSuccess={handleSubmitSuccess}
        />
      )}

      {showSuccessMessage && (
        <SubmitSuccess onClose={() => setShowSuccessMessage(false)} />
      )}
    </header>
  );
};

export default Navbar;