import Image from 'next/image';
import Link from 'next/link';
import { hotspotPosition, imageSrc } from '../../sanity/lib/image';
import { formatNewsDate, localize, newsHref, type Lang, type NewsItem } from '../../sanity/lib/news';
import { CATEGORY_LABELS, NEWS_LABELS } from './labels';
import { SanityImage } from './SanityImage';

// Neutral visual used when an article has no cover image.
export function NewsPlaceholder({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0A1628]" aria-hidden="true">
      <Image
        src="/symbol_SGCM-5.png"
        alt=""
        width={96}
        height={96}
        style={{ width: size === 'lg' ? 'clamp(64px, 8vw, 96px)' : '56px', height: 'auto', opacity: 0.35 }}
      />
    </div>
  );
}

export function NewsMeta({ item, lang, light = false }: { item: NewsItem; lang: Lang; light?: boolean }) {
  const parts = [NEWS_LABELS[lang].kind, item.location, formatNewsDate(item.publishedAt, lang)].filter(Boolean);
  return (
    <p
      className="uppercase"
      style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: light ? 'rgba(255,255,255,0.7)' : '#6b7280' }}
    >
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <span style={{ margin: '0 8px', color: '#C94010' }}>|</span>}
          {p}
        </span>
      ))}
    </p>
  );
}

export function CategoryPills({ item, lang }: { item: NewsItem; lang: Lang }) {
  const cats = (item.categories ?? []).filter(c => CATEGORY_LABELS[c]);
  if (cats.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {cats.map(c => (
        <span
          key={c}
          className="rounded-full"
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em', color: '#0A1628', border: '1px solid rgba(10,22,40,0.2)', padding: '4px 10px' }}
        >
          {CATEGORY_LABELS[c][lang]}
        </span>
      ))}
    </div>
  );
}

export function NewsCard({ item, lang }: { item: NewsItem; lang: Lang }) {
  const c = localize(item, lang);
  const src = imageSrc(item.coverImage);
  return (
    <article className="group flex flex-col">
      <Link href={newsHref(item, lang)} className="flex flex-col h-full" style={{ textDecoration: 'none' }}>
        <div className="relative overflow-hidden rounded-[14px]" style={{ aspectRatio: '16 / 10' }}>
          {src ? (
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
              <SanityImage
                src={src}
                alt={item.coverImage?.alt ?? ''}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                objectPosition={hotspotPosition(item.coverImage)}
              />
            </div>
          ) : (
            <NewsPlaceholder />
          )}
        </div>
        <div className="flex flex-col flex-1" style={{ paddingTop: '20px' }}>
          <NewsMeta item={item} lang={lang} />
          <h3
            className="text-[#0A1628] transition-colors group-hover:text-[#C94010]"
            style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.3, marginTop: '12px' }}
          >
            {c.title}
          </h3>
          {c.excerpt && (
            <p className="line-clamp-3" style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.6, marginTop: '10px' }}>
              {c.excerpt}
            </p>
          )}
          <span className="mt-auto text-[#0A1628]" style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', paddingTop: '18px' }}>
            {NEWS_LABELS[lang].readMore} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
