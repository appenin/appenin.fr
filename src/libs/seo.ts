import type { DefaultSeoProps } from 'next-seo';

const title = `Appenin, l'assurance au bon endroit au bon moment`;
const description = `L'assurance sur mesure pour vos clients.`;

export const seo: DefaultSeoProps = {
  title,
  description,
  canonical: 'https://www.appenin.fr/',
  openGraph: {
    url: 'https://www.appenin.fr/',
    title,
    description,
    images: [
      {
        url: '/assets/photos/appenin-home.png',
        width: 1499,
        height: 768,
        alt: title,
      },
    ],
  },
};
