import {
  Code,
  Database,
  Network,
  Layers,
  BookOpen,
  Youtube,
  FileText,
  Github,
  Cpu,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Terminal,
  PenTool,
  BrainCircuit,
  Puzzle,
  Info,
  Bot,
} from "lucide-react";
import { Category } from "../types";

// Main category groups
export const categoryGroups = [
  {
    id: "readme",
    name: "Read Me",
    categories: ["readme"],
  },
  {
    id: "programming",
    name: "Programming & Development",
    categories: [
      "programming-languages",
      "web-development",
      "mobile-development",
    ],
  },
  {
    id: "data",
    name: "Data & Algorithms",
    categories: ["data-structures", "leetcode", "databases"],
  },
  {
    id: "cs",
    name: "Computer Science & System Design",
    categories: ["system-design", "computer-science", "machine-learning-ai"],
  },
  {
    id: "networking",
    name: "Networking & Cloud",
    categories: ["networking", "devops"],
  },
  {
    id: "skills",
    name: "Technical & Soft Skills",
    categories: ["aptitude"],
  },
  {
    id: "tools",
    name: "Tools & Design",
    categories: ["tools", "design"],
  },
];

export const categories: Category[] = [
  {
    id: "readme",
    name: "Read Me",
    icon: <Info className="h-5 w-5" />,
    description: "About FreeRack and how to use this resource collection",
  },
  {
    id: "programming-languages",
    name: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    description:
      "Resources for various programming languages including JavaScript, Python, Java, C++, and more",
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    description: "Frontend and backend web development resources",
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    icon: <Smartphone className="h-5 w-5" />,
    description:
      "Resources for iOS, Android, and cross-platform mobile development",
  },
  {
    id: "data-structures",
    name: "Data Structures & Algorithms",
    icon: <Layers className="h-5 w-5" />,
    description:
      "Learn about data structures, algorithms, and problem-solving techniques",
  },
  {
    id: "leetcode",
    name: "LeetCode Collection",
    icon: <Puzzle className="h-5 w-5" />,
    description:
      "Curated collection of LeetCode problems, solutions, and strategies",
  },
  {
    id: "aptitude",
    name: "Aptitude",
    icon: <BrainCircuit className="h-5 w-5" />,
    description:
      "Resources for improving logical, mathematical, and reasoning skills",
  },
  {
    id: "databases",
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    description: "SQL, NoSQL, and database design resources",
  },
  {
    id: "networking",
    name: "Networking",
    icon: <Network className="h-5 w-5" />,
    description: "Computer networking, protocols, and infrastructure resources",
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: <Cloud className="h-5 w-5" />,
    description:
      "DevOps practices, cloud platforms, and infrastructure as code",
  },
  {
    id: "system-design",
    name: "System Design",
    icon: <Server className="h-5 w-5" />,
    description: "Architecture patterns, scalability, and distributed systems",
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: <Cpu className="h-5 w-5" />,
    description: "Fundamental computer science concepts and theory",
  },
  {
    id: "machine-learning-ai",
    name: "Machine Learning & AI",
    icon: <Bot className="h-5 w-5" />,
    description: "Resources for artificial intelligence, machine learning, and deep learning",
  },
  {
    id: "tools",
    name: "Developer Tools",
    icon: <Terminal className="h-5 w-5" />,
    description: "Tools and utilities for software development",
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: <PenTool className="h-5 w-5" />,
    description: "User interface and experience design resources",
  },
];

// Content type categories - these will be used for filtering but not shown in the sidebar
export const contentTypeCategories: Category[] = [
  {
    id: "books",
    name: "Books",
    icon: <BookOpen className="h-5 w-5" />,
    description: "Programming and computer science books",
  },
  {
    id: "youtube",
    name: "YouTube Channels",
    icon: <Youtube className="h-5 w-5" />,
    description: "Educational YouTube channels for developers",
  },
  {
    id: "github-repos",
    name: "GitHub Repositories",
    icon: <Github className="h-5 w-5" />,
    description: "Useful GitHub repositories for learning and reference",
  },
  {
    id: "tutorials",
    name: "Tutorials & Courses",
    icon: <FileText className="h-5 w-5" />,
    description: "Step-by-step tutorials and comprehensive courses",
  },
];

// All categories combined (for the resource submission form)
export const allCategories = [...categories.filter(cat => cat.id !== "readme"), ...contentTypeCategories];