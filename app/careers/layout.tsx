import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | SGCM',
  description: 'Join SGCM SARL — careers and opportunities in mineral supply chain compliance, facilitation, and advisory.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
