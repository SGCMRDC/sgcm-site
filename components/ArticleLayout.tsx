import Link from 'next/link';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

export type ArticleSection = { heading: string; paragraphs: string[] };
export type RelatedLink = { label: string; href: string };

export interface ArticleLayoutProps {
  lang: 'en' | 'fr';
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbLabel?: string;
  sections: ArticleSection[];
  related?: RelatedLink[];
  enHref: string;
  frHref: string;
}

export function ArticleLayout({
  lang, eyebrow, title, intro, breadcrumbLabel, sections, related, enHref, frHref,
}: ArticleLayoutProps) {
  const isFr = lang === 'fr';
  const programmeHref = isFr ? '/fr/programme-crp' : '/programme-crp';
  const homeHref = isFr ? '/fr' : '/';
  const crumbCurrent = breadcrumbLabel ?? title;
  const backLabel = isFr ? 'Programme CRP' : 'CRP Program';
  const activeLabel = isFr ? 'PROGRAMME CRP' : 'CRP PROGRAM';
  const relatedLabel = isFr ? 'Lire aussi' : 'Read also';

  return (
    <>
      <SiteHeader
        variant="dark"
        solid={true}
        activeLang={lang}
        enHref={enHref}
        frHref={frHref}
        activeLabel={activeLabel}
      />

      <div style={{ marginTop: '170px', padding: '0 clamp(16px, 5vw, 70px)' }}>
        <div style={{
          position: 'relative',
          borderRadius: '18px',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.12) 35%, rgba(10,22,40,0.82) 100%), #0A1628',
          padding: 'clamp(40px, 7vw, 72px) clamp(24px, 5vw, 56px)',
        }}>
          <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '13px', marginBottom: '26px' }}>
            <Link href={homeHref} aria-label="SGCM" style={{ display: 'inline-flex', alignItems: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/symbol_SGCM-5.png" alt="SGCM" style={{ height: '20px', width: 'auto', display: 'block' }} />
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <Link href={programmeHref} style={{ color: 'rgba(255,255,255,0.65)' }}>{backLabel}</Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <span style={{ color: '#ffffff' }}>{crumbCurrent}</span>
          </nav>
          <h1 style={{ fontWeight: 300, fontSize: 'clamp(30px, 4.6vw, 48px)', lineHeight: 1.04, letterSpacing: '-0.01em', color: '#ffffff', maxWidth: '820px' }}>{title}</h1>
        </div>
      </div>

      <section className="px-6 md:px-10 lg:px-[70px] pt-14 md:pt-20 pb-16 md:pb-24">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '24px' }}>{eyebrow}</p>
          <p style={{ fontWeight: 300, fontSize: 'clamp(18px, 2.2vw, 25px)', lineHeight: 1.4, color: '#0A1628', marginBottom: '48px' }}>{intro}</p>

          {sections.map((section, i) => (
            <div key={i} style={{ marginTop: i === 0 ? 0 : '36px' }}>
              <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '12px' }}>{section.heading}</p>
              {section.paragraphs.map((para, j) => (
                <p key={j} style={{ fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '14px' }}>{para}</p>
              ))}
            </div>
          ))}

          {related && related.length > 0 && (
            <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.12)', marginTop: '48px', paddingTop: '28px' }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '18px' }}>{relatedLabel}</p>
              <div className="flex flex-col gap-3">
                {related.map((link, k) => (
                  <Link key={k} href={link.href} style={{ fontSize: '16px', color: '#0A1628' }}>
                    <span style={{ color: '#ff7f2a', marginRight: '8px' }}>→</span>{link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SiteFooter lang={lang} />
    </>
  );
}
