import React from 'react';
import { Project } from '@/types/project';

export const PersonJsonLd: React.FC = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Danu Sakti Aditya Permana',
    alternateName: ['Danu Sakti', 'KUZE3EZ', 'ronngranz'],
    url: 'https://kuze3ez.is-a.dev',
    jobTitle: 'Software Engineering Student & Frontend Developer',
    description:
      'Software Engineering (RPL) student focused on frontend development, web platforms, and interactive digital products.',
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'MySQL',
      'UI/UX Design',
    ],
    sameAs: [
      'https://github.com/ronngranz-droid',
      'https://linkedin.com/in/danusakti',
      'https://instagram.com/nuureacher',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const WebSiteJsonLd: React.FC = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Danu Sakti Portfolio OS',
    alternateName: 'KUZE3EZ Portfolio',
    url: 'https://kuze3ez.is-a.dev',
    description:
      'Portfolio Danu Sakti, Software Engineering student focused on frontend development, web development, UI/UX, databases, and building digital products.',
    author: {
      '@type': 'Person',
      name: 'Danu Sakti Aditya Permana',
    },
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

interface ProjectJsonLdProps {
  project: Project;
}

export const ProjectJsonLd: React.FC<ProjectJsonLdProps> = ({ project }) => {
  const baseUrl = 'https://kuze3ez.is-a.dev';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    applicationCategory: project.category,
    operatingSystem: 'Web Browser',
    description: project.description,
    url: `${baseUrl}/projects/${project.slug}`,
    author: {
      '@type': 'Person',
      name: 'Danu Sakti Aditya Permana',
    },
    image: `${baseUrl}${project.imageUrl}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    applicationSubCategory: project.category,
    softwareRequirements: project.technologies.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
