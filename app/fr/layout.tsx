import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://sgcm-mining.com'),
  title: 'SGCM — Facilitateur de Chaînes d\'Approvisionnement Minérales',
  description: 'La Société de Gestion et Consultation Minières (SGCM) est un facilitateur de chaînes d\'approvisionnement minérales basé à Kinshasa, structurant des flux minéraux conformes, traçables et responsables depuis la RDC vers les marchés internationaux.',
  keywords: ['SGCM', 'chaîne d\'approvisionnement minérale', 'RDC', 'cathode de cuivre', 'conformité', 'traçabilité', 'Kinshasa', 'Congo'],
  openGraph: {
    title: 'SGCM – Facilitateur de Chaînes d\'Approvisionnement Minérales',
    description: 'Structuration de chaînes d\'approvisionnement minérales responsables depuis la RDC. Conformité, traçabilité et logistique pour le cuivre, l\'or et le cobalt certifiés.',
    url: 'https://sgcm-mining.com/fr',
    siteName: 'SGCM',
    images: [
      {
        url: 'https://sgcm-mining.com/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'SGCM – Chaînes Minérales Certifiées',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
