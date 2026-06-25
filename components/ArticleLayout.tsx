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
  sections: ArticleSection[];
  related?: RelatedLink[];
  enHref: string;
  frHref: string;
}

export function ArticleLayout({
  lang, eyebrow, title, intro, sections, related, enHref, frHref,
}: ArticleLayoutProps) {
  const isFr = lang === 'fr';
  const programmeHref = isFr ? '/fr/programme-crp' : '/programme-crp';
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

      <section style={{ marginTop: '102px', background: '#f9fafb', borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
        <div className="px-6 md:px-10 lg:px-[70px] pt-14 md:pt-20 pb-12 md:pb-16">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <Link href={programmeHref} className="inline-flex items-center gap-2 text-[13px] mb-8" style={{ color: '#6b7280' }}>
              <span style={{ color: '#ff7f2a' }}>←</span>{backLabel}
            </Link>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '20px' }}>{eyebrow}</p>
            <h1 style={{ fontWeight: 300, fontSize: 'clamp(34px, 6vw, 60px)', lineHeight: 1.04, letterSpacing: '-0.01em', color: '#0A1628', marginBottom: '20px' }}>{title}</h1>
            <p style={{ fontWeight: 300, fontSize: 'clamp(18px, 2.2vw, 25px)', lineHeight: 1.35, color: '#0A1628' }}>{intro}</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-[70px] pt-14 md:pt-20 pb-16 md:pb-24">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
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
