import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrières | SGCM',
  description: 'Carrières chez SGCM. Découvrez nos postes ouverts et rejoignez une équipe qui structure la conformité et la traçabilité des chaînes d\'approvisionnement minérales, de la RDC aux marchés internationaux.',
  openGraph: {
    title: 'Carrières | SGCM',
    description: 'Rejoignez SGCM : découvrez nos postes ouverts au sein d\'une équipe qui structure la conformité et la traçabilité des chaînes d\'approvisionnement minérales.',
    url: 'https://sgcm-mining.com/fr/careers',
    siteName: 'SGCM',
    images: [
      {
        url: 'https://sgcm-mining.com/sgcm-careers-v1.jpeg',
        width: 1376,
        height: 768,
        alt: 'Espace d\'accueil avec le logo SGCM',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carrières | SGCM',
    description: 'Rejoignez SGCM : découvrez nos postes ouverts au sein d\'une équipe qui structure la conformité et la traçabilité des chaînes d\'approvisionnement minérales.',
    images: ['https://sgcm-mining.com/sgcm-careers-v1.jpeg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
