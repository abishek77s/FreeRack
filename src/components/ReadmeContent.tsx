import React from "react";
import { ExternalLink, Gift, Phone, Map } from "lucide-react";

interface ReadmeContentProps {
  selectedCategory: string | null;
}

const ReadmeContent: React.FC<ReadmeContentProps> = ({ selectedCategory }) => {
  // Render different content based on the selected category
  if (selectedCategory === "how-to-use") {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          How to Use FreeRack
        </h1>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Getting Started
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
              <strong>Programming Language Filter:</strong> Filter resources by specific programming languages.
            </li>
            <li>
              <strong>Submit Resources:</strong> Help grow our collection by
              submitting new free resources.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Tips for Effective Use
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Combine filters to narrow down your search</li>
            <li>Check resource tags for additional context</li>
            <li>Bookmark your favorite resources for quick access</li>
            <li>Submit resources you find valuable to help others</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700">
              <strong>Note:</strong> All submitted resources are reviewed before
              being added to the collection to ensure quality and relevance.
            </p>
          </div>
        </div>
      </div>
    );
  } else if (selectedCategory === "roadmap") {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          FreeRack Roadmap
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            We're constantly working to improve FreeRack. Here's what we're planning for the future:
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Short-term Goals (Next 3 Months)
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Expand resource collection across all categories</li>
            <li>Improve search functionality with advanced filters</li>
            <li>Add user accounts for saving favorite resources</li>
            <li>Implement resource ratings and reviews</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Mid-term Goals (6-12 Months)
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Create personalized learning paths</li>
            <li>Add community discussion forums</li>
            <li>Develop mobile app versions</li>
            <li>Integrate with learning management systems</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Long-term Vision
          </h2>
          <p className="text-gray-700 mb-4">
            Our ultimate goal is to make FreeRack the most comprehensive and accessible platform for free educational resources in computer science and programming, helping learners worldwide achieve their goals without financial barriers.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
            <div className="flex items-start">
              <Map className="h-6 w-6 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold text-green-800">
                  Help Shape Our Future
                </h3>
                <p className="text-green-700 mb-2">
                  Have suggestions for our roadmap? We'd love to hear from you! Use the contact form to share your ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (selectedCategory === "contact") {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            We'd love to hear from you! Whether you have suggestions, feedback, or questions, please feel free to reach out.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-blue-600 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold text-blue-800">
                  Get in Touch
                </h3>
                <p className="text-blue-700 mb-2">
                  Email us at: <a href="mailto:contact@freerack.edu" className="text-blue-600 hover:underline">contact@freerack.edu</a>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Join Our Community
          </h2>
          <p className="text-gray-700 mb-4">
            Connect with us and other learners on social media:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Twitter</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">GitHub</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Discord</a></li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Contribute
          </h2>
          <p className="text-gray-700 mb-4">
            Interested in contributing to FreeRack? We welcome contributions in the following areas:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Resource submissions</li>
            <li>Code contributions</li>
            <li>Documentation</li>
            <li>Translations</li>
          </ul>
        </div>
      </div>
    );
  }

  // Default About content
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
          Our Mission
        </h2>
        <p className="text-gray-700 mb-4">
          Our mission is to break down barriers to education by providing a comprehensive, 
          organized collection of free learning resources. We aim to empower learners 
          worldwide to acquire valuable skills without financial constraints.
        </p>

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