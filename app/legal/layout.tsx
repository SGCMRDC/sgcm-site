import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice | SGCM',
  description: 'Legal information and identification of SGCM SARL, Société de Gestion et Consultation Minières.',
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
