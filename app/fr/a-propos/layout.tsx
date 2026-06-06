import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de SGCM | Intégrateur de conformité minérale',
  description:
    'SGCM structure, documente et valide la conformité des chaînes minérales en RDC. Découvrez notre mission, notre approche et le programme CRP.',
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
