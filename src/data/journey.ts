import { JourneyMilestone } from '@/types/project';

export const developmentJourney: JourneyMilestone[] = [
  {
    step: '01',
    title: 'HTML & CSS Fundamentals',
    description:
      'Started by understanding the foundational building blocks of the web: semantic markup, document flow, the CSS box model, and typographic styling.',
    focus: 'Semantic markup, Flexbox, CSS Grid',
    badge: 'Foundations',
  },
  {
    step: '02',
    title: 'Responsive Web Design',
    description:
      'Learned how to make websites adapt fluidly to any screen size using viewport meta tags, relative units, media queries, and mobile-first principles.',
    focus: 'Mobile-first layout, Fluid typography, Media queries',
    badge: 'Responsiveness',
  },
  {
    step: '03',
    title: 'JavaScript & DOM Manipulation',
    description:
      'Transitioned from static layouts to dynamic, interactive applications: event listeners, DOM mutation, asynchronous fetch calls, and modern ES6+ syntax.',
    focus: 'Event loop, Promises, Fetch API, ES6+',
    badge: 'Core Programming',
  },
  {
    step: '04',
    title: 'React & Next.js Frameworks',
    description:
      'Adopted component-driven architecture: thinking in reusable components, state hooks, props flow, and routing with Next.js App Router.',
    focus: 'Component decomposition, Hooks, Server vs Client components',
    badge: 'Modern Frontend',
  },
  {
    step: '05',
    title: 'Git Version Control & GitHub',
    description:
      'Incorporated disciplined engineering version control: commit hygiene, feature branching, merge conflict resolution, and remote code collaboration.',
    focus: 'Git CLI, GitHub workflows, Feature branches',
    badge: 'Engineering Discipline',
  },
  {
    step: '06',
    title: 'API Development & Integration',
    description:
      'Understood the client-server boundary: authoring RESTful endpoints, consuming JSON APIs, handling HTTP error codes, and structuring server middleware.',
    focus: 'REST principles, Request/Response cycle, Auth headers',
    badge: 'Integration',
  },
  {
    step: '07',
    title: 'Databases & MySQL Relational Modeling',
    description:
      'Designed persistent structured data systems: Entity-Relationship Diagrams (ERD), normalization (3NF), primary/foreign keys, and SQL queries.',
    focus: 'Database schema design, SQL CRUD, Constraints, phpMyAdmin',
    badge: 'Data Layer',
  },
  {
    step: '08',
    title: 'Production Deployment & DevOps Basics',
    description:
      'Learned the path from localhost to a live URL: environment variables isolation, automated continuous deployment (Vercel/Netlify), and build verification.',
    focus: 'Environment variables, CI/CD with Git triggers, DNS basics',
    badge: 'Deployment',
  },
  {
    step: '09',
    title: 'AI-Assisted Development',
    description:
      'Integrated AI coding agents and LLM APIs into the engineering toolkit: speeding up test creation, exploring unfamiliar architectures, and refactoring cleanly.',
    focus: 'Prompt engineering, Agentic workflows, LLM API integration',
    badge: 'Modern Tooling',
  },
  {
    step: '10',
    title: 'Building Complete Software Products',
    description:
      'Unifying the entire RPL / Software Engineering curriculum into full-cycle products: from problem definition and database schemas to intuitive UIs and iteration.',
    focus: 'End-to-end product delivery (Kelana, DANATRAIL, ClassHub)',
    badge: 'Product Engineering',
  },
];
