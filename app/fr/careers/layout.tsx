import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrières | SGCM',
  description: 'Postes ouverts au sein de l\'équipe d\'ingénierie de SGCM. Rejoignez la construction de la plateforme du programme Certified Cooperative Readiness (CRP™).',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
