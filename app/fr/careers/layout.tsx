import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrières | SGCM',
  description: 'Carrières chez SGCM. Découvrez nos postes ouverts et rejoignez une équipe qui structure la conformité et la traçabilité des chaînes d\'approvisionnement minérales, de la RDC aux marchés internationaux.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
