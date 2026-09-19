import type { Lang } from '../../sanity/lib/news';

export const NEWS_LABELS: Record<Lang, {
  nav: string; title: string; latest: string; readMore: string; kind: string;
  empty: string; back: string; more: string; listHref: string;
}> = {
  fr: {
    nav: 'ACTUALITÉS',
    title: 'Actualités',
    latest: 'Dernières actualités',
    readMore: 'Lire la suite',
    kind: 'Actualité',
    empty: 'Aucune actualité publiée pour le moment.',
    back: '← Toutes les actualités',
    more: 'Autres actualités',
    listHref: '/fr/actualites',
  },
  en: {
    nav: 'NEWS',
    title: 'News',
    latest: 'Latest news',
    readMore: 'Read more',
    kind: 'News',
    empty: 'No news published yet.',
    back: '← All news',
    more: 'More news',
    listHref: '/news',
  },
};

export const CATEGORY_LABELS: Record<string, Record<Lang, string>> = {
  partnerships: { fr: 'Partenariats', en: 'Partnerships' },
  'crp-program': { fr: 'Programme CRP™', en: 'CRP™ Program' },
  institutional: { fr: 'Institutionnel', en: 'Institutional' },
  compliance: { fr: 'Conformité', en: 'Compliance' },
  corporate: { fr: "Vie de l'entreprise", en: 'Company news' },
};
