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
  NetworkIcon,
  Info,
  Waypoints,
  Bot,
  Map,
  Mail,
} from "lucide-react";
import { Category } from "../types";

// Main category groups
export const categoryGroups = [
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
    categories: ["system-design", "computer-science"],
  },
  {
    id: "ai",
    name: "AI & ML",
    categories: ["machine-learning", "ml-algorithms", "neural-netowrks"],
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
  {
    id: "about",
    name: "About",
    categories: ["about", "how-to-use", "roadmap", "contact"],
  },
];

export const categories: Category[] = [
  {
    id: "about",
    name: "About",
    icon: <Info className="h-5 w-5" />,
    description: "About FreeRack and how to use this resource collection",
  },
  {
    id: "how-to-use",
    name: "How to Use",
    icon: <BookOpen className="h-5 w-5" />,
    description: "Learn how to use FreeRack effectively",
  },
  {
    id: "roadmap",
    name: "Roadmap",
    icon: <Map className="h-5 w-5" />,
    description: "Future plans and development roadmap for FreeRack",
  },
  {
    id: "contact",
    name: "Contact",
    icon: <Mail className="h-5 w-5" />,
    description: "Get in touch with the FreeRack team",
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
    id: "machine-learning",
    name: "Machine Learning",
    icon: <Bot className="h-5 w-5" />,
    description:
      "Resources for artificial intelligence, machine learning, and deep learning",
  },
  {
    id: "ml-algorithms",
    name: "ML Algorithms",
    icon: <NetworkIcon className="h-5 w-5" />,
    description: "Resources for  ML Algorithms, and deep learning",
  },
  {
    id: "neural-netowrks",
    name: "Neural Networks",
    icon: <Waypoints className="h-5 w-5" />,
    description: "Resources for Neural Networks",
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

// Programming language categories for filtering
export const programmingLanguageCategories = [
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "java", name: "Java" },
  { id: "csharp", name: "C#" },
  { id: "cpp", name: "C++" },
  { id: "go", name: "Go" },
  { id: "rust", name: "Rust" },
  { id: "ruby", name: "Ruby" },
  { id: "php", name: "PHP" },
  { id: "swift", name: "Swift" },
  { id: "kotlin", name: "Kotlin" },
  { id: "typescript", name: "TypeScript" },
];

// All categories combined (for the resource submission form)
export const allCategories = [
  ...categories.filter(
    (cat) =>
      cat.id !== "about" &&
      !["how-to-use", "roadmap", "contact"].includes(cat.id)
  ),
  ...contentTypeCategories,
];
