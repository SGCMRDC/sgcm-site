import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NewsArticle } from '../../../components/news/NewsArticle';
import { newsArticleMetadata } from '../../../components/news/metadata';
import { getNewsArticle, getNewsList } from '../../../sanity/lib/news';

type Props = { params: Promise<{ slug: string }> };

// Route params arrive percent-encoded (e.g. accented slugs typed in the Studio).
const decodeSlug = (slug: string) => { try { return decodeURIComponent(slug); } catch { return slug; } };

export const revalidate = 600;

export async function generateStaticParams() {
  const items = await getNewsList();
  return items.map(item => ({ slug: item.slugEn }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle('en', decodeSlug(slug));
  return article ? newsArticleMetadata(article, 'en') : {};
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const [article, items] = await Promise.all([getNewsArticle('en', decodeSlug(slug)), getNewsList()]);
  if (!article) notFound();
  const others = items.filter(item => item._id !== article._id).slice(0, 3);
  return <NewsArticle article={article} lang="en" others={others} />;
}
