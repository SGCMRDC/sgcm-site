import Link from 'next/link';
import { PortableText, type PortableTextComponents } from 'next-sanity';
import { SiteHeader } from '../SiteHeader';
import { SiteFooter } from '../SiteFooter';
import { hotspotPosition, imageSrc } from '../../sanity/lib/image';
import { localize, type Lang, type NewsArticle as Article, type NewsItem } from '../../sanity/lib/news';
import { NEWS_LABELS } from './labels';
import { CategoryPills, NewsCard, NewsMeta } from './NewsCard';
import { NewsHero } from './NewsHero';
import { SanityImage } from './SanityImage';

const BODY = { fontSize: '17px', color: '#374151', lineHeight: 1.8 } as const;

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p style={{ ...BODY, marginTop: '22px' }}>{children}</p>,
    h2: ({ children }) => (
      <h2 className="text-[#0A1628]" style={{ fontSize: 'clamp(22px, 2.6vw, 28px)', fontWeight: 400, lineHeight: 1.25, marginTop: '52px' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[#0A1628]" style={{ fontSize: '19px', fontWeight: 500, lineHeight: 1.35, marginTop: '36px' }}>{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="text-[#0A1628]"
        style={{ borderLeft: '3px solid #C94010', paddingLeft: '22px', margin: '36px 0', fontSize: 'clamp(19px, 2.2vw, 23px)', fontWeight: 300, lineHeight: 1.5 }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc" style={{ ...BODY, paddingLeft: '22px', marginTop: '18px' }}>{children}</ul>,
    number: ({ children }) => <ol className="list-decimal" style={{ ...BODY, paddingLeft: '22px', marginTop: '18px' }}>{children}</ol>,
  },
  listItem: ({ children }) => <li style={{ marginTop: '8px' }}>{children}</li>,
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 600, color: '#0A1628' }}>{children}</strong>,
    link: ({ value, children }) => {
      const href: string = value?.href ?? '#';
      const external = /^https?:\/\//.test(href) && !href.includes('sgcm-mining.com');
      return (
        <a
          href={href}
          className="underline decoration-[#C94010]/50 underline-offset-4 hover:decoration-[#C94010]"
          style={{ color: '#0A1628' }}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export function NewsArticle({ article, lang, others }: { article: Article; lang: Lang; others: NewsItem[] }) {
  const t = NEWS_LABELS[lang];
  const c = localize(article, lang);
  const body = lang === 'fr' ? article.bodyFr : article.bodyEn;
  const src = imageSrc(article.coverImage);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans" style={{ display: 'flow-root' }}>
      <SiteHeader
        variant="dark"
        solid={true}
        activeLang={lang}
        enHref={`/news/${article.slugEn}`}
        frHref={`/fr/actualites/${article.slugFr}`}
        activeLabel={t.nav}
      />

      <NewsHero lang={lang} linkToList />

      <article className="px-4 md:px-10 lg:px-[70px] pt-14 md:pt-20">
        <header style={{ maxWidth: '760px', margin: '0 auto' }}>
          <NewsMeta item={article} lang={lang} />
          <h1
            className="text-[#0A1628]"
            style={{ fontWeight: 300, fontSize: 'clamp(32px, 4.6vw, 54px)', lineHeight: 1.08, letterSpacing: '-0.01em', marginTop: '18px' }}
          >
            {c.title}
          </h1>
          {c.excerpt && (
            <p className="text-[#0A1628] font-light" style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.5, marginTop: '24px' }}>
              {c.excerpt}
            </p>
          )}
          <div style={{ marginTop: '24px' }}><CategoryPills item={article} lang={lang} /></div>
        </header>

        {src && (
          <figure style={{ maxWidth: '1180px', margin: 'clamp(40px, 6vw, 64px) auto 0' }}>
            <div className="relative overflow-hidden rounded-[16px]" style={{ aspectRatio: '16 / 9' }}>
              <SanityImage
                src={src}
                alt={article.coverImage?.alt ?? ''}
                sizes="(min-width: 1320px) 1180px, 100vw"
                objectPosition={hotspotPosition(article.coverImage)}
                priority
              />
            </div>
            {c.caption && (
              <figcaption style={{ fontSize: '13px', color: '#6b7280', marginTop: '12px', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
                {c.caption}
              </figcaption>
            )}
          </figure>
        )}

        <div style={{ maxWidth: '760px', margin: '0 auto', paddingTop: 'clamp(20px, 3vw, 32px)' }}>
          {body && <PortableText value={body} components={components} />}
          <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.12)', marginTop: '56px', paddingTop: '24px' }}>
            <Link href={t.listHref} className="text-[#0A1628] hover:text-[#C94010] transition-colors" style={{ fontSize: '14px', fontWeight: 500 }}>
              {t.back}
            </Link>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="px-4 md:px-10 lg:px-[70px] pt-20 md:pt-28 pb-20 md:pb-28">
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <h2
              className="text-[#0A1628]"
              style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.6vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: 'clamp(28px, 4vw, 44px)' }}
            >
              {t.more}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {others.map(item => <NewsCard key={item._id} item={item} lang={lang} />)}
            </div>
          </div>
        </section>
      )}
      {others.length === 0 && <div className="pb-20 md:pb-28" />}

      <SiteFooter lang={lang} />
    </main>
  );
}
