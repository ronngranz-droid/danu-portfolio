import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Danu Sakti Aditya Permana - Portfolio OS',
    short_name: 'KUZE3EZ',
    description:
      'Portfolio of Danu Sakti, Software Engineering student focused on frontend development, web platforms, and digital products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}