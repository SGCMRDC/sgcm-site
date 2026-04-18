import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | SGCM',
  description: 'Modalités de collecte, de traitement et de protection des données personnelles par SGCM SARL.',
};

export default function FrPrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
