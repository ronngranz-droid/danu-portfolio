import { Principle } from '@/types/project';

export const principles: Principle[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Simple Over Complicated',
    summary: 'Avoid premature abstraction and unnecessary dependencies.',
    description:
      'The cleanest code is the code you did not have to write. Before introducing a heavyweight library or a convoluted design pattern, I verify whether a native web API or a simple modular function solves the root problem effectively.',
  },
  {
    id: 'p2',
    number: '02',
    title: 'Function Before Decoration',
    summary: 'Visual appeal means nothing if the underlying feature fails.',
    description:
      'Flawless animations cannot rescue broken validation or sluggish database queries. I build the data structures, core workflows, and error states first, then craft an interface that clarifies the workflow.',
  },
  {
    id: 'p3',
    number: '03',
    title: 'User Experience Matters',
    summary: 'Speed, responsiveness, and zero friction for real users.',
    description:
      'Whether a user is on a high-end desktop or a low-spec phone with 3G connection in an Indonesian classroom, applications should load fast, communicate state clearly, and respond predictably to every touch.',
  },
  {
    id: 'p4',
    number: '04',
    title: 'Build, Test, Improve',
    summary: 'Engineering progress comes from shipping, observing, and iterating.',
    description:
      'Theory only becomes understanding when applied to working software. I build prototypes early, test them with real edge cases, gather feedback from peers and mentors, and systematically refine the implementation.',
  },
  {
    id: 'p5',
    number: '05',
    title: 'Every Project Should Solve a Problem',
    summary: 'Technology is an instrument to solve concrete operational pain points.',
    description:
      'I don’t build clone apps just to tick off a checklist. Kelana solves Korean keyboard barriers; DANATRAIL fixes double-booking in rental shops; ClassHub cures lost assignment deadlines. Purpose drives better architectural decisions.',
  },
  {
    id: 'p6',
    number: '06',
    title: 'Good Software Should Be Understandable',
    summary: 'Readable code, disciplined schemas, and clear mental models.',
    description:
      'Code is read far more often than it is written. Clean variable naming, modular folder structures, descriptive commit messages, and well-typed data models make software maintainable for myself and other collaborators.',
  },
  {
    id: 'p7',
    number: '07',
    title: 'Design Should Support Functionality',
    summary: 'Visual hierarchy exists to guide user action, not distract from it.',
    description:
      'Typography, contrast, whitespace, and micro-interactions must serve navigation and cognitive clarity. Design should never be an afterthought, nor should it obscure the utility of the tool.',
  },
];
