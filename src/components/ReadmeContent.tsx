import React from "react";
import { ExternalLink, Gift } from "lucide-react";

const ReadmeContent: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Welcome to FreeRack
      </h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          "You can learn anything from the Internet and become anything except
          Doctor."
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          What is FreeRack?
        </h2>
        <p className="text-gray-700 mb-4">
          FreeRack is a platform that aggregates and organizes free educational
          resources for computer science, programming, and related fields. We
          believe that knowledge should be accessible to all, and our goal is to
          help students and self-learners find the best free resources available
          online.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          How to Use FreeRack
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            <strong>Browse by Category:</strong> Use the sidebar to explore
            resources by topic categories.
          </li>
          <li>
            <strong>Filter by Type:</strong> Filter resources by content type
            (books, videos, courses, etc.).
          </li>
          <li>
            <strong>Search:</strong> Use the search bar to find specific
            resources.
          </li>
          <li>
            <strong>Submit Resources:</strong> Help grow our collection by
            submitting new free resources.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          For Students
        </h2>
        <p className="text-gray-700 mb-4">
          If you're a student, don't forget to check out the GitHub Student
          Developer Pack - it provides students with access to the best
          developer tools for free, add your college mail to your GitHub account
          and make sure you apply while at college because GitHub verifies your
          location.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Gift className="h-6 w-6 text-green-600 mt-1 mr-3" />
            <div>
              <h3 className="font-semibold text-green-800">
                GitHub Student Developer Pack
              </h3>
              <p className="text-green-700 mb-2">
                Get access to premium developer tools and services for free as a
                student.
              </p>
              <a
                href="https://education.github.com/pack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
              >
                Claim your pack
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Contribute
        </h2>
        <p className="text-gray-700 mb-4">
          FreeRack is a community-driven project. If you know of a great free
          resource that's not listed here, please submit it using the "Submit
          Resource" button in the navigation bar.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-700">
            <strong>Note:</strong> All submitted resources are reviewed before
            being added to the collection to ensure quality and relevance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadmeContent;
