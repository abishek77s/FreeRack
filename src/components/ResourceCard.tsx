import React, { useState } from "react";
import {
  Github,
  Youtube,
  BookOpen,
  FileText,
  Database,
  Globe,
  Tag,
  PlaySquare,
} from "lucide-react";
import { Resource } from "../types";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const [showTags, setShowTags] = useState(false);

  const getResourceTypeIcon = () => {
    switch (resource.type) {
      case "github":
        return <Github className="h-5 w-5 text-gray-700" />;
      case "youtube":
        return <Youtube className="h-5 w-5 text-red-600" />;
      case "book":
        return <BookOpen className="h-5 w-5 text-blue-600" />;
      case "pdf":
        return <FileText className="h-5 w-5 text-orange-600" />;
      case "course":
        return <BookOpen className="h-5 w-5 text-green-600" />;
      case "database":
        return <Database className="h-5 w-5 text-purple-600" />;
      case "playlist":
        return <PlaySquare className="h-5 w-5 text-red-600" />;
      default:
        return <Globe className="h-5 w-5 text-gray-600" />;
    }
  };

  const toggleTags = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTags(!showTags);
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            {getResourceTypeIcon()}
            <span className="ml-2 text-sm font-medium text-gray-500 uppercase">
              {resource.type}
            </span>
            {resource.language && (
              <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full">
                {resource.language}
              </span>
            )}
          </div>
          {resource.tags && resource.tags.length > 0 && (
            <button
              onClick={toggleTags}
              className="text-gray-400 hover:text-blue-600 transition-colors"
              title={showTags ? "Hide tags" : "Show tags"}
            >
              <Tag className={`h-4 w-4 ${showTags ? "text-blue-600" : ""}`} />
            </button>
          )}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-900 line-clamp-2">
          {resource.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {resource.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {resource.categories.slice(0, 3).map((categoryId) => {
            const category = categoryId.split(":")[0]; // Just use the first part for display
            return (
              <span
                key={categoryId}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {category}
              </span>
            );
          })}
          {resource.categories.length > 3 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{resource.categories.length - 3} more
            </span>
          )}
        </div>

        {showTags && resource.tags && resource.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {resource.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {resource.author && `By ${resource.author}`}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;