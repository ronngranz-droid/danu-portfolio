import { Experiment } from '@/types/project';

export const experiments: Experiment[] = [
  {
    id: 'exp-hangul',
    title: 'Hangul Jamo Syllable Assembler',
    category: 'JavaScript Experiments',
    description:
      'A standalone algorithmic module that combines initial, medial, and final Korean Jamo keystrokes into combined Unicode syllable blocks in real time.',
    tech: ['TypeScript', 'Unicode Math', 'Regex'],
    status: 'Merged into Kelana',
    githubUrl: 'https://github.com/ronngranz-droid/hangul-assembler-lab',
  },
  {
    id: 'exp-fluid-type',
    title: 'CSS Clamp() Fluid Typography Generator',
    category: 'UI Experiments',
    description:
      'A small utility to calculate linear interpolation formulas (`clamp(min, preferred, max)`) for scalable, responsive typography without breakpoints.',
    tech: ['HTML', 'Tailwind CSS', 'CSS Math'],
    status: 'Prototype',
    githubUrl: 'https://github.com/ronngranz-droid/fluid-type-lab',
  },
  {
    id: 'exp-sse-stream',
    title: 'SSE Streaming Response Reader',
    category: 'AI Experiments',
    description:
      'Testing Server-Sent Events with readable stream decoders to render token streams incrementally without UI flickering or race conditions.',
    tech: ['Next.js', 'ReadableStream', 'SSE API'],
    status: 'Completed',
    githubUrl: 'https://github.com/ronngranz-droid/sse-stream-lab',
  },
  {
    id: 'exp-booking-validator',
    title: 'Date-Range Collision Algorithm',
    category: 'Database Experiments',
    description:
      'A SQL benchmark and validation script simulating concurrent gear rental reservations across overlapping calendar ranges to test transaction locks.',
    tech: ['MySQL', 'Node.js', 'Transaction Locks'],
    status: 'Completed',
    githubUrl: 'https://github.com/ronngranz-droid/booking-collision-lab',
  },
  {
    id: 'exp-accessible-modal',
    title: 'Focus-Trapping Accessible Modal Primitive',
    category: 'UI Experiments',
    description:
      'Headless modal component built from scratch featuring focus trapping, ESC key dismiss, backdrop blur, and restore-focus-on-exit according to WAI-ARIA standards.',
    tech: ['React', 'WAI-ARIA', 'Keyboard Events'],
    status: 'Prototype',
    githubUrl: 'https://github.com/ronngranz-droid/accessible-modal-lab',
  },
  {
    id: 'exp-weather-cache',
    title: 'In-Memory API Rate Limiter & Cache',
    category: 'API Experiments',
    description:
      'A lightweight caching layer for third-party weather API calls with TTL expiration and stale-while-revalidate semantics.',
    tech: ['Node.js', 'Map Cache', 'REST API'],
    status: 'Prototype',
    githubUrl: 'https://github.com/ronngranz-droid/api-cache-lab',
  },
];
