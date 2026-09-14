import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | SGCM',
  description: 'Careers at SGCM. Explore our open positions and join a team structuring compliance and traceability across mineral supply chains, from the DRC to international markets.',
  openGraph: {
    title: 'Careers | SGCM',
    description: 'Join SGCM: explore our open positions within a team structuring compliance and traceability across mineral supply chains.',
    url: 'https://sgcm-mining.com/careers',
    siteName: 'SGCM',
    images: [
      {
        url: 'https://sgcm-mining.com/sgcm-careers-v1.jpeg',
        width: 1376,
        height: 768,
        alt: 'Reception area with the SGCM logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | SGCM',
    description: 'Join SGCM: explore our open positions within a team structuring compliance and traceability across mineral supply chains.',
    images: ['https://sgcm-mining.com/sgcm-careers-v1.jpeg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
