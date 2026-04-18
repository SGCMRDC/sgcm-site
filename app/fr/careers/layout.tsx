import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrières | SGCM',
  description: 'Rejoignez SGCM SARL — opportunités de carrière dans la conformité, la facilitation et le conseil en chaînes d\'approvisionnement minérales.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
