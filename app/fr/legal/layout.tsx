import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | SGCM',
  description: 'Informations légales et identification de SGCM SARL, Société de Gestion et Consultation Minières.',
};

export default function FrLegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
