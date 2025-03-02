import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Contact Us
      </h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-600" />
              Email
            </h2>
            <p className="text-gray-700 mb-2">
              For general inquiries and resource submissions:
            </p>
            <a 
              href="mailto:contact@freerack.edu" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              contact@freerack.edu
            </a>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <Github className="h-5 w-5 mr-2 text-gray-800" />
              GitHub
            </h2>
            <p className="text-gray-700 mb-2">
              Contribute to FreeRack or report issues:
            </p>
            <a 
              href="https://github.com/freerack/freerack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              github.com/freerack/freerack
            </a>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Contribute to FreeRack
        </h2>
        <p className="text-gray-700 mb-4">
          FreeRack is a community-driven project. Here's how you can contribute:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Submit new resources using the "Submit Resource" button</li>
          <li className="mb-2">Suggest improvements or report issues on our GitHub repository</li>
          <li className="mb-2">Help us categorize and tag resources more effectively</li>
          <li className="mb-2">Share FreeRack with your friends and colleagues</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-700">
            <strong>Note:</strong> We aim to respond to all inquiries within 48 hours. For urgent matters, please mention "URGENT" in your email subject.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;