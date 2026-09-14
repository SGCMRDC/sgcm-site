import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | SGCM',
  description: 'Careers at SGCM. Explore our open positions and join a team structuring compliance and traceability across mineral supply chains, from the DRC to international markets.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
