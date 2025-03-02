import React from 'react';
import { ExternalLink } from 'lucide-react';

const HowToUse = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        How to Use FreeRack
      </h1>

      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Navigating the Platform
        </h2>
        <p className="text-gray-700 mb-4">
          FreeRack is organized into categories to help you find resources quickly:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li className="mb-2">Use the sidebar to browse resources by category</li>
          <li className="mb-2">Use the search bar to find specific resources</li>
          <li className="mb-2">Filter resources by type (YouTube, GitHub, Books, etc.)</li>
          <li className="mb-2">For programming language resources, you can filter by specific languages</li>
          <li className="mb-2">For YouTube resources, you can filter by regional languages</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Resource Types
        </h2>
        <p className="text-gray-700 mb-4">
          FreeRack includes various types of resources:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li className="mb-2"><strong>GitHub Repositories</strong>: Open-source projects, learning resources, and code examples</li>
          <li className="mb-2"><strong>YouTube Channels</strong>: Educational channels focused on programming and computer science</li>
          <li className="mb-2"><strong>Playlists</strong>: Curated collections of videos on specific topics</li>
          <li className="mb-2"><strong>Books</strong>: Free and paid programming books</li>
          <li className="mb-2"><strong>Courses</strong>: Structured learning paths and tutorials</li>
          <li className="mb-2"><strong>Websites</strong>: Interactive learning platforms and documentation</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Contributing Resources
        </h2>
        <p className="text-gray-700 mb-4">
          To submit a new resource:
        </p>
        <ol className="list-decimal pl-6 mb-4 text-gray-700">
          <li className="mb-2">Click the "Submit Resource" button in the navigation bar</li>
          <li className="mb-2">Fill out the form with details about the resource</li>
          <li className="mb-2">Select appropriate categories and add relevant tags</li>
          <li className="mb-2">Submit the form for review</li>
        </ol>
        <p className="text-gray-700 mb-4">
          All submissions are reviewed before being added to ensure quality and relevance.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Using Roadmap.sh
        </h2>
        <p className="text-gray-700 mb-4">
          Roadmap.sh is a community-driven platform that provides learning paths for various tech roles:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li className="mb-2">Find step-by-step guides for becoming a frontend, backend, or full-stack developer</li>
          <li className="mb-2">Explore roadmaps for DevOps, Android, iOS, and more</li>
          <li className="mb-2">Use the interactive UI to track your progress</li>
          <li className="mb-2">Access curated resources for each step in your learning journey</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Click the "Roadmap" button in the navigation bar to access Roadmap.sh.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-700">
            <strong>Tip:</strong> Bookmark resources you find useful in your browser for quick access later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;