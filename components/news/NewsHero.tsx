import Image from 'next/image';
import Link from 'next/link';
import type { Lang } from '../../sanity/lib/news';
import { NEWS_LABELS } from './labels';

const INSET = 'clamp(16px, 5vw, 70px)';

// Navy band shared by the list and article pages: breadcrumb, optional heading.
export function NewsHero({ lang, heading, intro, linkToList = false }: {
  lang: Lang;
  heading?: string;
  intro?: string;
  linkToList?: boolean;
}) {
  const t = NEWS_LABELS[lang];
  return (
    <div
      className="relative rounded-[18px] overflow-hidden bg-[#0A1628]"
      style={{ marginTop: '170px', marginLeft: INSET, marginRight: INSET, padding: 'clamp(22px, 4vh, 46px) clamp(20px, 4vw, 52px)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(120% 140% at 100% 0%, rgba(201,64,16,0.22) 0%, rgba(10,22,40,0) 55%)' }}
      />
      <nav aria-label="Breadcrumb" className="relative flex items-center gap-2">
        <Link href={lang === 'fr' ? '/fr' : '/'} aria-label="SGCM" className="flex items-center">
          <Image src="/symbol_SGCM-5.png" alt="SGCM" width={48} height={48} style={{ height: 'clamp(34px, 4.5vw, 48px)', width: 'auto' }} />
        </Link>
        <span className="text-white/55 text-base">›</span>
        {linkToList ? (
          <Link href={t.listHref} className="text-white/80 hover:text-white tracking-wide transition-colors" style={{ fontSize: 'clamp(13px, 1.6vw, 15px)' }}>
            {t.title}
          </Link>
        ) : (
          <span className="text-white tracking-wide" style={{ fontSize: 'clamp(13px, 1.6vw, 15px)' }}>{t.title}</span>
        )}
      </nav>
      {heading && (
        <div className="relative" style={{ marginTop: 'clamp(56px, 12vh, 140px)', maxWidth: 'min(760px, 100%)' }}>
          <h1 className="text-white" style={{ fontWeight: 300, fontSize: 'clamp(38px, 6vw, 66px)', lineHeight: 1.04, letterSpacing: '-0.01em' }}>
            {heading}
          </h1>
          {intro && (
            <p className="text-white/75" style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.5, marginTop: '18px', fontWeight: 300 }}>
              {intro}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
