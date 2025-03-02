import React, { useState } from "react";
import { Plus, Gift } from "lucide-react";
import SubmitResourceForm from "./SubmitResourceForm";
import SubmitSuccess from "./SubmitSuccess";

const Navbar: React.FC = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmitSuccess = () => {
    setShowSubmitForm(false);
    setShowSuccessMessage(true);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="119"
              height="90"
              fill="none"
              viewBox="0 0 119 90"
              className="h-8 w-8"
            >
              <path
                fill="#0EB270"
                d="M.24 90V.656h59.264V16.4H19.44v20.48h35.84v15.744H19.44V90H.24Z"
              />
              <path
                fill="#000"
                d="M73.662 90H54.718V.656h34.56c4.352 0 8.235.683 11.648 2.048 3.413 1.28 6.272 3.157 8.576 5.632 2.389 2.475 4.181 5.461 5.376 8.96 1.195 3.499 1.792 7.424 1.792 11.776 0 6.315-1.365 11.733-4.096 16.256s-6.613 7.51-11.648 8.96L118.462 90H97.47L82.494 56.848h-8.832V90ZM84.67 42c4.523 0 7.637-.853 9.344-2.56 1.792-1.707 2.688-4.523 2.688-8.448v-3.84c0-3.925-.896-6.741-2.688-8.448-1.707-1.707-4.821-2.56-9.344-2.56H73.662V42H84.67Z"
              />
            </svg>

            <span className="ml-2 text-xl font-bold text-gray-900">
              FreeRack
            </span>
          </div>

          <nav className="hidden md:flex space-x-4 lg:space-x-4">
            <button
              onClick={() => setShowSubmitForm(true)}
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              <Plus className="h-4 w-4 mr-1" />
              Submit Resource
            </button>
          </nav>

          <div className="flex items-center space-x-2 lg:hidden">
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
