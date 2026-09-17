export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  iconName: 'Mail' | 'Github' | 'Linkedin' | 'Instagram';
  isExternal: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:ronngranz@gmail.com',
    handle: 'ronngranz@gmail.com',
    iconName: 'Mail',
    isExternal: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ronngranz-droid',
    handle: 'github.com/ronngranz-droid',
    iconName: 'Github',
    isExternal: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nu-quincy',
    handle: 'Nu Quincy',
    iconName: 'Linkedin',
    isExternal: true,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/nuureacher',
    handle: '@nuureacher',
    iconName: 'Instagram',
    isExternal: true,
  },
];

export const personalInfo = {
  name: 'DANU SAKTI ADITYA PERMANA',
  brandName: 'DANU SAKTI ADITYA PERMANA',
  role: 'Frontend Developer',
  avatarUrl: '/images/profile.jpg',
  identity: 'Software Engineering Student / RPL Student',
  location: 'Indonesia',
  statusBadge: 'Available for collaboration',
  cvPath: '/resume/danu-sakti-cv.pdf',
  tagline: 'I design and build web products focused on learning, productivity, and digital experiences.',
  secondaryTagline:
    'Currently exploring Web Development, Frontend Engineering, and AI-assisted development.',
  aboutLong:
    "I'm a Software Engineering student who enjoys turning ideas into functional digital products. I focus on web development. Instead of only learning through theory, I like building real projects, solving problems, testing ideas, and continuously improving the products I create.",
};
