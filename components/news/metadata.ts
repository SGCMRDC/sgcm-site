import type { Metadata } from 'next';
import { ogImageUrl } from '../../sanity/lib/image';
import { localize, type Lang, type NewsArticle } from '../../sanity/lib/news';

const SITE = 'https://sgcm-mining.com';
const DEFAULT_IMAGE = { url: `${SITE}/preview.jpg`, width: 1200, height: 630 };

const LIST = {
  en: {
    title: 'News | SGCM',
    description: 'SGCM news: partnerships, CRP™ Program milestones and company announcements.',
    path: '/news',
    locale: 'en_US',
  },
  fr: {
    title: 'Actualités | SGCM',
    description: 'Actualités de SGCM : partenariats, avancées du Programme CRP™ et annonces de l\'entreprise.',
    path: '/fr/actualites',
    locale: 'fr_FR',
  },
} as const;

export function newsListMetadata(lang: Lang): Metadata {
  const m = LIST[lang];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `${SITE}${m.path}`, languages: { en: `${SITE}/news`, fr: `${SITE}/fr/actualites` } },
    openGraph: { title: m.title, description: m.description, url: `${SITE}${m.path}`, siteName: 'SGCM', images: [DEFAULT_IMAGE], locale: m.locale, type: 'website' },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description, images: [DEFAULT_IMAGE.url] },
  };
}

export function newsArticleMetadata(article: NewsArticle, lang: Lang): Metadata {
  const c = localize(article, lang);
  const title = `${c.title} | SGCM`;
  const description = c.excerpt ?? LIST[lang].description;
  const path = lang === 'fr' ? `/fr/actualites/${article.slugFr}` : `/news/${article.slugEn}`;
  const og = ogImageUrl(article.coverImage);
  const image = og ? { url: og, width: 1200, height: 630, alt: article.coverImage?.alt ?? c.title } : DEFAULT_IMAGE;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE}${path}`,
      languages: { en: `${SITE}/news/${article.slugEn}`, fr: `${SITE}/fr/actualites/${article.slugFr}` },
    },
    openGraph: {
      title, description, url: `${SITE}${path}`, siteName: 'SGCM', images: [image],
      locale: LIST[lang].locale, type: 'article', publishedTime: article.publishedAt,
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  };
}
