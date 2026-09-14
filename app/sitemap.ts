import { MetadataRoute } from 'next'
import { JOBS } from '../data/careers'

export default function sitemap(): MetadataRoute.Sitemap {
  const jobEntries = JOBS.flatMap(job => [
    `https://sgcm-mining.com/careers/${job.slug}`,
    `https://sgcm-mining.com/fr/careers/${job.slug}`,
  ]).map(url => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: 'https://sgcm-mining.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://sgcm-mining.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://sgcm-mining.com/careers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://sgcm-mining.com/fr/careers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...jobEntries,
  ]
}
