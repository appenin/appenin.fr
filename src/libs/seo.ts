import type { DefaultSeoProps } from 'next-seo';

const title = `Appenin, L'assurance au bon endroit au bon moment`;
const description = `L'assurance sur mesure pour vos clients.`;

export const seo: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    title,
    type: 'website',
    url: `https://www.appenin.fr`,
    site_name: title,
    images: [
      {
        url: 'https://www.appenin.fr/assets/photos/appenin-home.png',
        width: 1499,
        height: 768,
        alt: title,
      },
    ],
  },
};
