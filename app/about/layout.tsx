import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SGCM | Mineral Compliance Integrator',
  description:
    'SGCM structures, documents and validates mineral supply chain compliance in the DRC. Learn about our mission, approach and the CRP programme.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
