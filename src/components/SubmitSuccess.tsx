import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SubmitSuccessProps {
  onClose: () => void;
}

const SubmitSuccess: React.FC<SubmitSuccessProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-end p-2">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6 text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500 w-14 h-14" />
          <h3 className="mb-5 text-lg font-normal text-gray-800">
            Thank you for your submission!
          </h3>
          <p className="mb-5 text-sm text-gray-600">
            Your resource has been submitted successfully and is pending review. 
            Once approved, it will appear in the resource list.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitSuccess;