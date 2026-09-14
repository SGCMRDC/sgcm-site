import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JobDetail } from '../../../../components/JobDetail';
import { JOBS } from '../../../../data/careers';

type Props = { params: Promise<{ slug: string }> };

const SHARE_IMAGE = 'https://sgcm-mining.com/sgcm-careers-v1.jpeg';

export function generateStaticParams() {
  return JOBS.map(job => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find(j => j.slug === slug);
  if (!job) return {};
  const c = job.fr;
  const title = `${c.title} | SGCM`;
  const description = `Poste ouvert au sein de l'équipe d'ingénierie de SGCM : ${c.title} (${c.employmentType.toLowerCase()}, ${c.location}).`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://sgcm-mining.com/fr/careers/${job.slug}`,
      siteName: 'SGCM',
      images: [{ url: SHARE_IMAGE, width: 1376, height: 768, alt: 'Espace d\'accueil avec le logo SGCM' }],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: [SHARE_IMAGE] },
  };
}

export default async function FrCareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = JOBS.find(j => j.slug === slug);
  if (!job) notFound();
  return <JobDetail job={job} lang="fr" />;
}
