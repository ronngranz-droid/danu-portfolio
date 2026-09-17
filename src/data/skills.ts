import { SkillCategory } from '@/types/project';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    description: 'Building accessible, high-performance, and responsive user interfaces with modern web standards.',
    skills: [
      { name: 'HTML5 Semantic', level: 'Used in Projects', note: 'Clean structure & accessible markup' },
      { name: 'CSS3 / Modern Styling', level: 'Used in Projects', note: 'Flexbox, Grid, Clamp typography' },
      { name: 'JavaScript (ES6+)', level: 'Used in Projects', note: 'DOM, Async/Await, Web APIs' },
      { name: 'React', level: 'Used in Projects', note: 'Hooks, Component Lifecycle, State' },
      { name: 'Next.js (App Router)', level: 'Used in Projects', note: 'Server & Client components, Routing' },
      { name: 'Tailwind CSS', level: 'Used in Projects', note: 'Utility-first rapid prototyping' },
      { name: 'Responsive Web Design', level: 'Used in Projects', note: 'Mobile-first fluid layouts' },
    ],
  },
  {
    category: 'Backend & Server Logic',
    description: 'Writing backend logic, handling requests, structuring RESTful APIs, and managing session auth.',
    skills: [
      { name: 'Node.js runtime', level: 'Used in Projects', note: 'Event-driven server runtime' },
      { name: 'REST API Design', level: 'Used in Projects', note: 'HTTP methods, status codes, JSON payload' },
      { name: 'Authentication & Security', level: 'Comfortable With', note: 'JWT, password hashing (bcrypt)' },
      { name: 'Server-Side Business Logic', level: 'Used in Projects', note: 'Input validation, transactions' },
      { name: 'Express.js', level: 'Comfortable With', note: 'Lightweight routing & middleware' },
    ],
  },
  {
    category: 'Database & Data Modeling',
    description: 'Designing normalized relational databases, writing queries, and handling data integrity.',
    skills: [
      { name: 'MySQL', level: 'Used in Projects', note: 'Relational tables, foreign keys, indexing' },
      { name: 'Database Design & ERD', level: 'Used in Projects', note: 'Entity-relationship modeling, 3NF' },
      { name: 'CRUD Operations', level: 'Used in Projects', note: 'Create, Read, Update, Delete workflows' },
      { name: 'SQL Querying', level: 'Comfortable With', note: 'Joins, Aggregations, Transactions' },
      { name: 'phpMyAdmin', level: 'Used in Projects', note: 'Visual schema & table administration' },
    ],
  },
  {
    category: 'Software Engineering & Practices',
    description: 'Core software engineering methodologies, version control, and verification habits.',
    skills: [
      { name: 'Git Version Control', level: 'Used in Projects', note: 'Branching, committing, merge hygiene' },
      { name: 'GitHub Collaboration', level: 'Used in Projects', note: 'Pull requests, issues, repo management' },
      { name: 'Debugging & DevTools', level: 'Used in Projects', note: 'Breakpoints, network analysis, profiling' },
      { name: 'Testing & Verification', level: 'Comfortable With', note: 'Unit checks, edge-case coverage' },
      { name: 'API Integration', level: 'Used in Projects', note: 'Fetch, Axios, error boundaries' },
    ],
  },
  {
    category: 'Deployment & Environments',
    description: 'Ship code to production reliably with proper configuration and environment separation.',
    skills: [
      { name: 'Vercel Deployment', level: 'Used in Projects', note: 'Continuous deployment with Git triggers' },
      { name: 'Netlify', level: 'Comfortable With', note: 'Static site hosting & serverless functions' },
      { name: 'Environment Variables', level: 'Used in Projects', note: 'Secret isolation (.env.local vs prod)' },
      { name: 'Production Build & Optimization', level: 'Used in Projects', note: 'Asset compression, code-splitting' },
    ],
  },
  {
    category: 'Development Tools & Workspace',
    description: 'Tools that keep the daily engineering workflow fast, disciplined, and organized.',
    skills: [
      { name: 'VS Code', level: 'Used in Projects', note: 'Extensions, linting, debugging configs' },
      { name: 'Figma', level: 'Comfortable With', note: 'Wireframing, UI layout planning, asset export' },
      { name: 'XAMPP / Local Server', level: 'Used in Projects', note: 'Apache & MySQL local dev stack' },
    ],
  },
  {
    category: 'AI-Assisted Development',
    description: 'Leveraging AI tools as a multiplier for architecture planning, refactoring, and code comprehension.',
    skills: [
      { name: 'AI Coding Agents', level: 'Used in Projects', note: 'Pair programming, automated scaffolds' },
      { name: 'Prompt Engineering for Code', level: 'Used in Projects', note: 'Structured contextual prompts' },
      { name: 'AI API Integration', level: 'Currently Learning', note: 'OpenAI, Anthropic & Gemini API wrappers' },
      { name: 'AI-assisted Development', level: 'Used in Projects', note: 'Rapid iteration, testing generation' },
    ],
  },
];

export const currentlyLearningItems = [
  {
    title: 'Advanced JavaScript & TypeScript',
    description: 'Deepening understanding of asynchronous concurrency, AST transforms, and strict type gymnastics.',
    tag: 'Language Mastery',
  },
  {
    title: 'Backend Architecture & Microservices',
    description: 'Exploring clean architecture, domain-driven design, and event-driven patterns in Node.js and Go.',
    tag: 'Backend',
  },
  {
    title: 'Relational Database Optimization',
    description: 'Query execution plans (EXPLAIN), B-Tree indexing strategies, and multi-tenant schema isolation.',
    tag: 'Database',
  },
  {
    title: 'Software Architecture Patterns',
    description: 'MVC, Hexagonal architecture, and decoupling business rules from presentation layers.',
    tag: 'Engineering',
  },
  {
    title: 'Design Systems & UI Engineering',
    description: 'Creating accessible headless UI primitives, design tokens, and fluid component libraries.',
    tag: 'UI/UX',
  },
  {
    title: 'AI Integration & Agentic Workflows',
    description: 'Building multi-step autonomous workflows and Retrieval-Augmented Generation (RAG) pipelines.',
    tag: 'AI Engineering',
  },
];
