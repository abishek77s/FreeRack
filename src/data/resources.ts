import { Resource } from '../types';



export const resources: Resource[] = [
  
  // GitHub Repositories
  {
    id: '1',
    title: 'The Algorithms',
    description: 'Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language',
    url: 'https://github.com/TheAlgorithms',
    type: 'github',
    categories: ['github-repos', 'data-structures', 'programming-languages'],
    stars: 245000,
    dateAdded: '2023-01-15'
  },
  {
    id: '2',
    title: 'Free Programming Books',
    description: 'Freely available programming books in multiple languages',
    url: 'https://github.com/EbookFoundation/free-programming-books',
    type: 'github',
    categories: ['github-repos', 'books', 'programming-languages'],
    stars: 302000,
    dateAdded: '2023-01-10'
  },
  {
    id: '3',
    title: 'Developer Roadmap',
    description: 'Interactive roadmaps, guides and other educational content to help developers grow in their careers',
    url: 'https://github.com/kamranahmedse/developer-roadmap',
    type: 'github',
    categories: ['github-repos', 'web-development', 'programming-languages'],
    stars: 254000,
    dateAdded: '2023-02-05'
  },
  {
    id: '4',
    title: 'System Design Primer',
    description: 'Learn how to design large-scale systems. Prep for the system design interview',
    url: 'https://github.com/donnemartin/system-design-primer',
    type: 'github',
    categories: ['github-repos', 'system-design', 'computer-science'],
    stars: 232000,
    dateAdded: '2023-01-20'
  },
  {
    id: '5',
    title: 'Public APIs',
    description: 'A collective list of free APIs for use in software and web development',
    url: 'https://github.com/public-apis/public-apis',
    type: 'github',
    categories: ['github-repos', 'web-development', 'tools'],
    stars: 260000,
    dateAdded: '2023-02-10'
  },
  
  // YouTube Channels
  {
    id: '6',
    title: 'Fireship',
    description: 'High-intensity code tutorials and tech news to help you build apps faster',
    url: 'https://www.youtube.com/c/Fireship',
    type: 'youtube',
    categories: ['youtube', 'web-development', 'programming-languages'],
    author: 'Jeff Delaney',
    dateAdded: '2023-01-25'
  },
  {
    id: '7',
    title: 'freeCodeCamp',
    description: 'Learn to code for free with thousands of videos on computer science and programming',
    url: 'https://www.youtube.com/c/freeCodeCamp',
    type: 'youtube',
    categories: ['youtube', 'programming-languages', 'web-development'],
    dateAdded: '2023-01-18'
  },
  {
    id: '8',
    title: 'Traversy Media',
    description: 'Web development and programming tutorials for all levels',
    url: 'https://www.youtube.com/c/TraversyMedia',
    type: 'youtube',
    categories: ['youtube', 'web-development', 'programming-languages'],
    author: 'Brad Traversy',
    dateAdded: '2023-02-01'
  },
  {
    id: '9',
    title: 'The Net Ninja',
    description: 'Black-belt your web development skills with tutorials on modern JavaScript, Node.js, React, Vue.js, and more',
    url: 'https://www.youtube.com/c/TheNetNinja',
    type: 'youtube',
    categories: ['youtube', 'web-development', 'programming-languages'],
    author: 'Shaun Pelling',
    dateAdded: '2023-01-22'
  },
  {
    id: '10',
    title: 'CS Dojo',
    description: 'Learn computer science, coding interviews, and algorithms',
    url: 'https://www.youtube.com/c/CSDojo',
    type: 'youtube',
    categories: ['youtube', 'data-structures', 'computer-science'],
    author: 'YK Sugishita',
    dateAdded: '2023-02-08'
  },
  
 
  {
    id: '12',
    title: 'Eloquent JavaScript',
    description: 'A modern introduction to programming with JavaScript',
    url: 'https://eloquentjavascript.net/',
    type: 'book',
    categories: ['books', 'programming-languages', 'web-development'],
    author: 'Marijn Haverbeke',
    dateAdded: '2023-01-30'
  },
  {
    id: '13',
    title: 'You Don\'t Know JS',
    description: 'A book series diving deep into the core mechanisms of the JavaScript language',
    url: 'https://github.com/getify/You-Dont-Know-JS',
    type: 'book',
    categories: ['books', 'programming-languages', 'web-development'],
    author: 'Kyle Simpson',
    dateAdded: '2023-02-03'
  },
  {
    id: '14',
    title: 'Designing Data-Intensive Applications',
    description: 'The big ideas behind reliable, scalable, and maintainable systems',
    url: 'https://dataintensive.net/',
    type: 'book',
    categories: ['books', 'system-design', 'databases'],
    author: 'Martin Kleppmann',
    dateAdded: '2023-01-28'
  },
  
  // Courses
  {
    id: '16',
    title: 'CS50: Introduction to Computer Science',
    description: 'Harvard University\'s introduction to the intellectual enterprises of computer science and the art of programming',
    url: 'https://cs50.harvard.edu/x/',
    type: 'course',
    categories: ['tutorials', 'computer-science', 'programming-languages'],
    author: 'David J. Malan',
    dateAdded: '2023-01-14'
  },
  {
    id: '17',
    title: 'The Odin Project',
    description: 'A free, open-source curriculum for learning full-stack web development',
    url: 'https://www.theodinproject.com/',
    type: 'course',
    categories: ['tutorials', 'web-development', 'programming-languages'],
    dateAdded: '2023-02-07'
  },
  {
    id: '18',
    title: 'Full Stack Open',
    description: 'Deep dive into modern web development with React, Redux, Node.js, MongoDB, GraphQL and TypeScript',
    url: 'https://fullstackopen.com/en/',
    type: 'course',
    categories: ['tutorials', 'web-development', 'programming-languages'],
    author: 'University of Helsinki',
    dateAdded: '2023-01-19'
  },
  {
    id: '19',
    title: 'MIT OpenCourseWare: Introduction to Algorithms',
    description: 'A comprehensive introduction to algorithms for solving computational problems',
    url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/',
    type: 'course',
    categories: ['tutorials', 'data-structures', 'computer-science'],
    author: 'MIT',
    dateAdded: '2023-02-02'
  },
  {
    id: '20',
    title: 'Scrimba - Learn React for free',
    description: 'Interactive coding screencasts to learn React',
    url: 'https://scrimba.com/learn/learnreact',
    type: 'course',
    categories: ['tutorials', 'web-development', 'programming-languages'],
    author: 'Bob Ziroll',
    dateAdded: '2023-01-26'
  },
  
  // PDFs and other resources
  {
    id: '21',
    title: 'Teach Yourself Computer Science',
    description: 'A self-study guide for aspiring computer scientists',
    url: 'https://teachyourselfcs.com/',
    type: 'website',
    categories: ['computer-science', 'programming-languages', 'tutorials'],
    dateAdded: '2023-02-09'
  },
  {
    id: '22',
    title: 'JavaScript Info',
    description: 'The Modern JavaScript Tutorial: from the basics to advanced topics with simple, but detailed explanations',
    url: 'https://javascript.info/',
    type: 'website',
    categories: ['programming-languages', 'web-development', 'tutorials'],
    dateAdded: '2023-01-17'
  },
  {
    id: '23',
    title: 'MDN Web Docs',
    description: 'Resources for developers, by developers',
    url: 'https://developer.mozilla.org/',
    type: 'website',
    categories: ['web-development', 'programming-languages', 'tutorials'],
    author: 'Mozilla',
    dateAdded: '2023-01-23'
  },
  {
    id: '24',
    title: 'Refactoring Guru',
    description: 'Design patterns and refactoring techniques explained with easy-to-understand examples',
    url: 'https://refactoring.guru/',
    type: 'website',
    categories: ['programming-languages', 'system-design', 'tutorials'],
    author: 'Alexander Shvets',
    dateAdded: '2023-02-11'
  },
  {
    id: '25',
    title: 'Roadmap.sh',
    description: 'Community-driven roadmaps, articles, guides, and quizzes for developers to help them grow',
    url: 'https://roadmap.sh/',
    type: 'website',
    categories: ['web-development', 'programming-languages', 'tutorials'],
    dateAdded: '2023-01-29'
  },
  {
    "id": "1",
    "title": "GeeksforGeeks Programming",
    "description": "Comprehensive tutorials and practice problems across various programming languages.",
    "url": "https://www.geeksforgeeks.org/programming/",
    "type": "website",
    "categories": ["programming", "tutorials", "practice"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "2",
    "title": "Exercism",
    "description": "Free coding practice and mentorship in over 70 programming languages.",
    "url": "https://exercism.org/",
    "type": "website",
    "categories": ["programming", "practice", "mentorship"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "3",
    "title": "freeCodeCamp",
    "description": "Self-paced coding tutorials and exercises covering web development, algorithms, and more.",
    "url": "https://www.freecodecamp.org/",
    "type": "website",
    "categories": ["programming", "tutorials", "web development"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "4",
    "title": "LeetCode",
    "description": "Extensive collection of coding problems and contests for technical interview preparation.",
    "url": "https://leetcode.com/",
    "type": "website",
    "categories": ["programming", "practice", "interview preparation"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "5",
    "title": "CodeBasics",
    "description": "Free online programming courses with interactive coding environments.",
    "url": "https://code-basics.com/",
    "type": "website",
    "categories": ["programming", "courses", "interactive"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "6",
    "title": "Apti4All",
    "description": "Free online preparation for aptitude exams with practice questions and study materials.",
    "url": "https://apti4all.com/",
    "type": "website",
    "categories": ["aptitude", "practice", "study materials"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "7",
    "title": "CS Circles",
    "description": "In-browser Python course offering interactive lessons and exercises for beginners.",
    "url": "https://cscircles.cemc.uwaterloo.ca/",
    "type": "website",
    "categories": ["programming", "Python", "tutorials"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "8",
    "title": "Thonny",
    "description": "Free and open-source integrated development environment (IDE) for Python, designed for beginners.",
    "url": "https://thonny.org/",
    "type": "website",
    "categories": ["programming", "Python", "IDE"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "9",
    "title": "Codecademy",
    "description": "Interactive coding tutorials covering various programming languages and topics.",
    "url": "https://www.codecademy.com/",
    "type": "website",
    "categories": ["programming", "tutorials", "interactive"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "10",
    "title": "The Odin Project",
    "description": "Free, open-source curriculum for learning web development from scratch.",
    "url": "https://www.theodinproject.com/",
    "type": "website",
    "categories": ["programming", "web development", "curriculum"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "11",
    "title": "EbookFoundation/free-programming-books",
    "description": "A comprehensive collection of free programming books covering various languages and topics.",
    "url": "https://github.com/EbookFoundation/free-programming-books",
    "type": "github",
    "categories": ["programming", "books", "resources"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "12",
    "title": "Practice Aptitude Tests",
    "description": "Free practice aptitude tests with questions and answers written by experts.",
    "url": "https://www.practiceaptitudetests.com/",
    "type": "website",
    "categories": ["aptitude", "practice", "tests"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "13",
    "title": "AssessmentDay",
    "description": "Free online practice aptitude tests with expert tips and guides.",
    "url": "https://www.assessmentday.com/",
    "type": "website",
    "categories": ["aptitude", "practice", "guides"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "14",
    "title": "Graduates First",
    "description": "Free aptitude test practice questions with worked solutions and expert insights.",
    "url": "https://www.graduatesfirst.com/psychometrics/aptitude-test",
    "type": "website",
    "categories": ["aptitude", "practice", "solutions"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "15",
    "title": "MIT OpenCourseWare",
    "description": "Free lecture notes, exams, and videos from MIT covering a wide range of subjects.",
    "url": "https://ocw.mit.edu/",
    "type": "website",
    "categories": ["education", "lectures", "resources"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "16",
    "title": "Khan Academy",
    "description": "Free online courses, lessons, and practice in various subjects including math and computing.",
    "url": "https://www.khanacademy.org/",
    "type": "website",
    "categories": ["education", "courses", "practice"],
    "dateAdded": "2025-02-28"
  },
  {
    "id": "17",
    "title": "Coursera",
    "description": "Free and paid courses from top universities and companies in various subjects.",
    "url": "https://www.coursera.org/",
    "type": "website",
    "categories": ["education", "courses", "certificates"],
    "dateAdded": "2025-02-28"
  },
  // Database resources
  {
    id: '26',
    title: 'Database Design for Mere Mortals',
    description: 'A step-by-step approach to database design for beginners',
    url: 'https://www.amazon.com/Database-Design-Mere-Mortals-Hands/dp/0321884493',
    type: 'book',
    categories: ['databases', 'books'],
    author: 'Michael J. Hernandez',
    dateAdded: '2023-02-04'
  },
  {
    id: '27',
    title: 'SQL Zoo',
    description: 'Learn SQL using interactive exercises',
    url: 'https://sqlzoo.net/',
    type: 'website',
    categories: ['databases', 'tutorials'],
    dateAdded: '2023-01-16'
  },
  {
    id: '28',
    title: 'Use the Index, Luke!',
    description: 'A guide to database performance for developers',
    url: 'https://use-the-index-luke.com/',
    type: 'website',
    categories: ['databases', 'tutorials'],
    author: 'Markus Winand',
    dateAdded: '2023-01-24'
  },
  
  // Networking resources
  {
    id: '29',
    title: 'Computer Networking: A Top-Down Approach',
    description: 'A comprehensive introduction to computer networking',
    url: 'https://www.amazon.com/Computer-Networking-Top-Down-Approach-7th/dp/0133594149',
    type: 'book',
    categories: ['networking', 'books', 'computer-science'],
    author: 'James Kurose & Keith Ross',
    dateAdded: '2023-01-27'
  },
  {
    id: '30',
    title: 'Beej\'s Guide to Network Programming',
    description: 'A beginner\'s guide to socket programming in C',
    url: 'https://beej.us/guide/bgnet/',
    type: 'pdf',
    categories: ['networking', 'programming-languages', 'tutorials'],
    author: 'Brian "Beej" Hall',
    dateAdded: '2023-02-06'
  },
  
  // LeetCode resources
  {
    id: '31',
    title: 'LeetCode Patterns',
    description: 'A curated list of LeetCode questions grouped by their common patterns',
    url: 'https://seanprashad.com/leetcode-patterns/',
    type: 'website',
    categories: ['leetcode', 'data-structures', 'programming-languages'],
    author: 'Sean Prashad',
    dateAdded: '2023-03-01'
  },
  {
    id: '32',
    title: 'Blind 75 LeetCode Questions',
    description: 'A list of 75 frequently asked LeetCode questions to prepare for technical interviews',
    url: 'https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions',
    type: 'website',
    categories: ['leetcode', 'data-structures'],
    dateAdded: '2023-03-05'
  },
  {
    id: '33',
    title: 'NeetCode',
    description: 'Video solutions to popular LeetCode problems with explanations',
    url: 'https://neetcode.io/',
    type: 'website',
    categories: ['leetcode', 'data-structures', 'tutorials'],
    dateAdded: '2023-03-10'
  },
  
  // Aptitude resources
  {
    id: '34',
    title: 'GeeksforGeeks Aptitude',
    description: 'Practice questions and tutorials for aptitude tests and interviews',
    url: 'https://www.geeksforgeeks.org/aptitude-gq/',
    type: 'website',
    categories: ['aptitude', 'tutorials'],
    dateAdded: '2023-03-15'
  },
  {
    id: '35',
    title: 'IndiaBIX',
    description: 'Comprehensive collection of aptitude questions with solutions',
    url: 'https://www.indiabix.com/',
    type: 'website',
    categories: ['aptitude', 'tutorials'],
    dateAdded: '2023-03-20'
  },
  {
    id: '36',
    title: 'Aptitude Questions and Answers',
    description: 'Collection of aptitude questions with detailed solutions for competitive exams',
    url: 'https://www.tutorialspoint.com/quantitative_aptitude/index.htm',
    type: 'website',
    categories: ['aptitude', 'tutorials'],
    author: 'TutorialsPoint',
    dateAdded: '2023-03-25'
  }
];