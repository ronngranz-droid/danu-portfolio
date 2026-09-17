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
  name: 'ronngranz',
  brandName: 'ronngranz',
  role: 'Web Developer & Frontend Engineer',
  avatarUrl: '/images/profile.jpg',
  identity: 'Web Developer & Frontend Engineer',
  location: 'Indonesia',
  statusBadge: 'Available for collaboration',
  cvPath: '/resume/danu-sakti-cv.pdf',
  tagline: 'I design and build web products focused on learning, productivity, and digital experiences.',
  secondaryTagline:
    'Currently exploring Web Development, Modern Frontend Engineering, and AI-assisted tools.',
  aboutLong:
    "I'm a Web Developer and Frontend Engineer who enjoys turning ideas into functional digital products. Instead of only learning through theory, I focus on building real projects, solving problems, crafting intuitive interfaces, and continuously improving web applications.",
};
