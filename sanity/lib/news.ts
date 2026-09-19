import type { ComponentProps } from 'react';
import { defineQuery, type PortableText } from 'next-sanity';
import { client } from './client';

export type Lang = 'en' | 'fr';

export type NewsImage = {
  asset?: { _ref: string; _type?: string };
  hotspot?: { x: number; y: number; height?: number; width?: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
  captionFr?: string;
  captionEn?: string;
};

type Body = ComponentProps<typeof PortableText>['value'];

export type NewsItem = {
  _id: string;
  slugFr: string;
  slugEn: string;
  publishedAt: string;
  location?: string;
  categories?: string[];
  featured?: boolean;
  titleFr: string;
  titleEn: string;
  excerptFr?: string;
  excerptEn?: string;
  coverImage?: NewsImage;
};

export type NewsArticle = NewsItem & { bodyFr?: Body; bodyEn?: Body };

const FIELDS = `_id, "slugFr": slugFr.current, "slugEn": slugEn.current, publishedAt, location, categories, featured,
  titleFr, titleEn, excerptFr, excerptEn, coverImage`;

// Only complete, already-dated articles are listed (a future date schedules publication).
const LIST_QUERY = defineQuery(`*[_type == "article" && defined(slugFr.current) && defined(slugEn.current)
  && defined(titleFr) && defined(titleEn) && defined(publishedAt) && publishedAt <= now()]
  | order(publishedAt desc)[0...60]{ ${FIELDS} }`);

const ARTICLE_FR_QUERY = defineQuery(`*[_type == "article" && slugFr.current == $slug && publishedAt <= now()][0]{ ${FIELDS}, bodyFr, bodyEn }`);
const ARTICLE_EN_QUERY = defineQuery(`*[_type == "article" && slugEn.current == $slug && publishedAt <= now()][0]{ ${FIELDS}, bodyFr, bodyEn }`);

// Keep in sync with the `revalidate` literal exported by the news routes.
const REVALIDATE_SECONDS = 600;

export async function getNewsList(): Promise<NewsItem[]> {
  if (!client) return [];
  try {
    return await client.fetch<NewsItem[]>(LIST_QUERY, {}, { next: { revalidate: REVALIDATE_SECONDS } });
  } catch (error) {
    console.error('[news] list fetch failed', error);
    return [];
  }
}

export async function getNewsArticle(lang: Lang, slug: string): Promise<NewsArticle | null> {
  if (!client) return null;
  try {
    return await client.fetch<NewsArticle | null>(
      lang === 'fr' ? ARTICLE_FR_QUERY : ARTICLE_EN_QUERY,
      { slug },
      { next: { revalidate: REVALIDATE_SECONDS } },
    );
  } catch (error) {
    console.error('[news] article fetch failed', error);
    return null;
  }
}

export function formatNewsDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Kinshasa',
  }).format(new Date(iso));
}

export function localize(item: NewsItem, lang: Lang) {
  return lang === 'fr'
    ? { title: item.titleFr, excerpt: item.excerptFr, slug: item.slugFr, caption: item.coverImage?.captionFr }
    : { title: item.titleEn, excerpt: item.excerptEn, slug: item.slugEn, caption: item.coverImage?.captionEn };
}

export function newsHref(item: NewsItem, lang: Lang): string {
  return lang === 'fr' ? `/fr/actualites/${item.slugFr}` : `/news/${item.slugEn}`;
}
