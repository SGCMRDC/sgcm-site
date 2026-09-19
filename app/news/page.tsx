import { NewsList } from '../../components/news/NewsList';
import { newsListMetadata } from '../../components/news/metadata';
import { getNewsList } from '../../sanity/lib/news';

// Articles published in the Studio appear within 10 minutes, without a redeploy.
export const revalidate = 600;

export const metadata = newsListMetadata('en');

export default async function NewsPage() {
  const items = await getNewsList();
  return <NewsList lang="en" items={items} />;
}
