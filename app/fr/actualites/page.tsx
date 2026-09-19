import { NewsList } from '../../../components/news/NewsList';
import { newsListMetadata } from '../../../components/news/metadata';
import { getNewsList } from '../../../sanity/lib/news';

// Articles published in the Studio appear within 10 minutes, without a redeploy.
export const revalidate = 600;

export const metadata = newsListMetadata('fr');

export default async function FrActualitesPage() {
  const items = await getNewsList();
  return <NewsList lang="fr" items={items} />;
}
