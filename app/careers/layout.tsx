import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | SGCM',
  description: 'Open positions within the SGCM engineering team. Join the team building the Certified Cooperative Readiness Program (CRP™) platform.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
