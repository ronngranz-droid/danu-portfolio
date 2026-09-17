import { Certificate } from '@/types/project';

// Clean extensible structure for authentic certifications.
// New certificates can be appended here as they are earned.
export const certificates: Certificate[] = [
  {
    id: 'cert-web-dev',
    name: 'Dasar Pemrograman Web',
    provider: 'Dicoding Academy',
    date: '2024',
    category: 'Web Development',
    credentialUrl: '', // Add credential URL when available
    skillsLearned: ['HTML5 Semantic', 'CSS3 Layout', 'Responsive Design', 'Web Accessibility'],
  },
  {
    id: 'cert-js',
    name: 'Belajar Dasar Pemrograman JavaScript',
    provider: 'Dicoding Academy',
    date: '2024',
    category: 'JavaScript',
    credentialUrl: '',
    skillsLearned: ['Data Structures', 'Functions & OOP', 'Functional Programming', 'Async & Promises'],
  },
  {
    id: 'cert-fe',
    name: 'Belajar Membuat Front-End Web untuk Pemula',
    provider: 'Dicoding Academy',
    date: '2024',
    category: 'Frontend Development',
    credentialUrl: '',
    skillsLearned: ['BOM & DOM Manipulation', 'Event Handling', 'Web Storage API'],
  },
  {
    id: 'cert-git',
    name: 'Belajar Dasar Git dengan GitHub',
    provider: 'Dicoding Academy',
    date: '2024',
    category: 'Git / GitHub',
    credentialUrl: '',
    skillsLearned: ['Version Control', 'Branching & Merging', 'Pull Requests', 'Collaboration'],
  },
  {
    id: 'cert-db',
    name: 'Relational Database Fundamentals & SQL',
    provider: 'Vocational High School Curriculum / RPL',
    date: '2024',
    category: 'Database',
    credentialUrl: '',
    skillsLearned: ['Database Normalization (1NF-3NF)', 'Entity Relationship Diagrams', 'SQL DDL & DML'],
  },
  {
    id: 'cert-se',
    name: 'Software Engineering Fundamentals (RPL)',
    provider: 'Rekayasa Perangkat Lunak',
    date: '2024',
    category: 'Software Engineering',
    credentialUrl: '',
    skillsLearned: ['Software Development Life Cycle (SDLC)', 'Agile Basics', 'Testing & Documentation'],
  },
];
