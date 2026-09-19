import { MetadataRoute } from 'next'
import { JOBS } from '../data/careers'
import { getNewsList } from '../sanity/lib/news'

// Refresh the article list at the same pace as the news pages.
export const revalidate = 600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await getNewsList()
  const newsEntries = news.flatMap(item => [
    { url: `https://sgcm-mining.com/news/${item.slugEn}`, lastModified: new Date(item.publishedAt) },
    { url: `https://sgcm-mining.com/fr/actualites/${item.slugFr}`, lastModified: new Date(item.publishedAt) },
  ]).map(entry => ({ ...entry, changeFrequency: 'monthly' as const, priority: 0.6 }))

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
    {
      url: 'https://sgcm-mining.com/news',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://sgcm-mining.com/fr/actualites',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...newsEntries,
  ]
}
