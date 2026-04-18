import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SGCM',
  description: 'How SGCM SARL collects, processes and protects personal data across sgcm-mining.com.',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
