import Link from 'next/link';
import { SiteHeader } from '../SiteHeader';
import { SiteFooter } from '../SiteFooter';
import { hotspotPosition, imageSrc } from '../../sanity/lib/image';
import { localize, newsHref, type Lang, type NewsItem } from '../../sanity/lib/news';
import { NEWS_LABELS } from './labels';
import { CategoryPills, NewsCard, NewsMeta, NewsPlaceholder } from './NewsCard';
import { NewsHero } from './NewsHero';
import { SanityImage } from './SanityImage';

const INTRO = {
  fr: 'Partenariats, avancées du Programme CRP™ et vie de l\'entreprise : suivez l\'actualité de SGCM.',
  en: 'Partnerships, CRP™ Program milestones and company news: follow the latest from SGCM.',
} as const;

function FeaturedNews({ item, lang }: { item: NewsItem; lang: Lang }) {
  const c = localize(item, lang);
  const src = imageSrc(item.coverImage);
  return (
    <article className="group">
      <Link href={newsHref(item, lang)} className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center" style={{ textDecoration: 'none' }}>
        <div className="relative overflow-hidden rounded-[16px] lg:col-span-7" style={{ aspectRatio: '16 / 10' }}>
          {src ? (
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
              <SanityImage
                src={src}
                alt={item.coverImage?.alt ?? ''}
                sizes="(min-width: 1024px) 55vw, 100vw"
                objectPosition={hotspotPosition(item.coverImage)}
                priority
              />
            </div>
          ) : (
            <NewsPlaceholder size="lg" />
          )}
        </div>
        <div className="lg:col-span-5">
          <NewsMeta item={item} lang={lang} />
          <h2
            className="text-[#0A1628] transition-colors group-hover:text-[#C94010]"
            style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.15, letterSpacing: '-0.01em', marginTop: '16px' }}
          >
            {c.title}
          </h2>
          {c.excerpt && (
            <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: 1.7, marginTop: '16px' }}>{c.excerpt}</p>
          )}
          <div style={{ marginTop: '20px' }}><CategoryPills item={item} lang={lang} /></div>
          <span className="inline-flex items-center gap-3 text-[#0A1628]" style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.04em', marginTop: '28px' }}>
            {NEWS_LABELS[lang].readMore}
            <span
              className="flex items-center justify-center w-11 h-11 rounded-full transition-colors group-hover:bg-[#0A1628] group-hover:text-white"
              style={{ border: '1.5px solid rgba(10,22,40,0.35)' }}
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function NewsList({ lang, items }: { lang: Lang; items: NewsItem[] }) {
  const t = NEWS_LABELS[lang];
  // "À la une": the most recent featured article, otherwise the most recent article.
  const featured = items.find(i => i.featured) ?? items[0];
  const rest = items.filter(i => i !== featured);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans" style={{ display: 'flow-root' }}>
      <SiteHeader variant="dark" solid={true} activeLang={lang} enHref="/news" frHref="/fr/actualites" activeLabel={t.nav} />

      <NewsHero lang={lang} heading={t.title} intro={INTRO[lang]} />

      <section className="px-4 md:px-10 lg:px-[70px] pt-16 md:pt-24 pb-20 md:pb-28">
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {!featured ? (
            <p style={{ fontSize: '17px', color: '#6b7280' }}>{t.empty}</p>
          ) : (
            <>
              <FeaturedNews item={featured} lang={lang} />
              {rest.length > 0 && (
                <>
                  <h2
                    className="text-[#0A1628]"
                    style={{
                      fontWeight: 300, fontSize: 'clamp(26px, 3.6vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.01em',
                      marginTop: 'clamp(64px, 9vw, 110px)', marginBottom: 'clamp(28px, 4vw, 44px)',
                      paddingTop: 'clamp(40px, 6vw, 64px)', borderTop: '1px solid rgba(10,22,40,0.12)',
                    }}
                  >
                    {t.latest}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                    {rest.map(item => <NewsCard key={item._id} item={item} lang={lang} />)}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
