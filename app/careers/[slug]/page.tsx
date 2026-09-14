import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JobDetail } from '../../../components/JobDetail';
import { JOBS } from '../../../data/careers';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return JOBS.map(job => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find(j => j.slug === slug);
  if (!job) return {};
  const c = job.en;
  return {
    title: `${c.title} | SGCM`,
    description: `Open position within the SGCM engineering team: ${c.title} (${c.employmentType.toLowerCase()}, ${c.location}).`,
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = JOBS.find(j => j.slug === slug);
  if (!job) notFound();
  return <JobDetail job={job} lang="en" />;
}
