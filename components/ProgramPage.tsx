'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface ProgramCard {
  title: string;
  body: string;
  image?: string;
  href?: string;
}

export interface ProgramSubsection {
  eyebrow: string;
  text: string;
}

export interface ProgramPageProps {
  breadcrumbLabel: string;
  title: string;
  baseline: string;
  heroImage: string;
  lede: string;
  /** Two body columns; each column is an array of paragraphs. */
  columns?: [string[], string[]];
  /** Intro paragraph above subsections (rendered between columns and subsection list). */
  subsectionIntro?: string;
  /** Subsections with labeled eyebrows — appended after columns when both are present. */
  subsections?: ProgramSubsection[];
  /** Primary hero link (circled arrow button). Defaults to "Le standard CRP" → #standard. */
  heroLink1?: { label: string; href: string };
  /** Secondary hero link (plain text). Defaults to "→ Le cadre de conformité" → #conformite. */
  heroLink2?: { label: string; href: string };
  /** Top eyebrow above the lede. Defaults to "DÉCOUVRIR LE PROGRAMME". */
  bodyEyebrow?: string;
  /** CTA label on cards. Defaults to "EN SAVOIR PLUS →". EN pages pass "LEARN MORE →". */
  cardCta?: string;
  cards: [ProgramCard, ProgramCard, ProgramCard];
}

export function ProgramPage({
  breadcrumbLabel, title, baseline, heroImage, lede, columns, subsectionIntro, subsections,
  heroLink1 = { label: 'Le standard CRP', href: '#standard' },
  heroLink2 = { label: '→ Le cadre de conformité', href: '#conformite' },
  bodyEyebrow = 'DÉCOUVRIR LE PROGRAMME',
  cardCta = 'EN SAVOIR PLUS →',
  cards,
}: ProgramPageProps) {
  const [heroFailed, setHeroFailed] = useState(false);

  return (
    <div className="bg-white" style={{ display: 'flow-root' }}>
      {/* ── HERO ──
          mt-[138px] = 102px nav height + 36px deliberate gap below nav.
          mx gives the inset; rounded-[18px] per mockup. */}
      <div
        className="relative rounded-[18px] overflow-hidden bg-[#0A1628]"
        style={{
          marginTop: '138px',
          marginLeft: 'clamp(16px, 5vw, 70px)',
          marginRight: 'clamp(16px, 5vw, 70px)',
          height: 'clamp(460px, 64vh, 740px)',
        }}
      >
        {!heroFailed && (
          <Image
            src={heroImage}
            alt="Site minier — Programme CRP"
            fill
            priority
            className="object-cover"
            onError={() => setHeroFailed(true)}
          />
        )}

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,22,40,.55) 0%, rgba(10,22,40,.12) 35%, rgba(10,22,40,.78) 100%)',
          }}
        />

        {/* Breadcrumb */}
        <div
          className="absolute flex items-center gap-2"
          style={{
            top: 'clamp(22px, 4vh, 46px)',
            left: 'clamp(20px, 4vw, 52px)',
          }}
        >
          <Image
            src="/symbol_SGCM-5.png"
            alt="SGCM"
            width={48}
            height={48}
            style={{ height: 'clamp(34px, 4.5vw, 48px)', width: 'auto' }}
          />
          <span className="text-white/55 text-base">›</span>
          <span
            className="text-white tracking-wide"
            style={{ fontSize: 'clamp(13px, 1.6vw, 15px)' }}
          >
            {breadcrumbLabel}
          </span>
        </div>

        {/* Bottom content */}
        <div
          className="absolute"
          style={{
            bottom: 'clamp(48px, 9vh, 118px)',
            left: 'clamp(20px, 4vw, 52px)',
            right: 'clamp(20px, 4vw, 52px)',
            maxWidth: 'min(680px, 86%)',
          }}
        >
          <h1
            className="text-white mb-5"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(34px, 6vw, 66px)',
              lineHeight: 1.04,
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </h1>
          <p
            className="text-white/90"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(17px, 2.4vw, 26px)',
              lineHeight: 1.3,
              maxWidth: 'min(520px, 92%)',
            }}
          >
            {baseline}
          </p>
          <div
            className="flex items-center"
            style={{
              flexWrap: 'wrap',
              gap: 'clamp(20px, 4vw, 46px)',
              marginTop: 'clamp(28px, 5vh, 46px)',
            }}
          >
            <Link
              href={heroLink1.href}
              className="flex items-center gap-3 text-white text-sm font-medium tracking-wide group"
            >
              {heroLink1.label}
              <span
                className="flex items-center justify-center w-11 h-11 rounded-full transition-colors group-hover:bg-white group-hover:text-[#0A1628]"
                style={{ border: '1.5px solid rgba(255,255,255,0.65)' }}
              >
                →
              </span>
            </Link>
            <Link
              href={heroLink2.href}
              className="text-white/80 text-sm tracking-wide transition-colors hover:text-white"
            >
              {heroLink2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* ── LEDE + BODY ── */}
      <section className="px-4 md:px-10 lg:px-[70px] pt-20 md:pt-28 pb-16 md:pb-24">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="text-[11px] font-medium tracking-[0.14em] text-[#6b7280] uppercase mb-8">
            {bodyEyebrow}
          </p>
          <p
            className="text-[#0A1628] font-light leading-snug mb-14"
            style={{ fontSize: '25px' }}
          >
            {lede}
          </p>

          {columns && (
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ maxWidth: '920px', gap: '54px' }}
            >
              {columns.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-5">
                  {col.map((para, pIdx) => (
                    <p key={pIdx} className="text-[15px] text-[#6b7280]" style={{ lineHeight: 1.78 }}>
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {subsections && (
            <div style={{ marginTop: columns ? '56px' : '0' }}>
              {subsectionIntro && (
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.75, marginBottom: '28px' }}>
                  {subsectionIntro}
                </p>
              )}
              <div className="flex flex-col" style={{ gap: '28px' }}>
                {subsections.map((s, i) => (
                  <div key={i}>
                    <p
                      className="font-medium uppercase text-[#6b7280] mb-3"
                      style={{ fontSize: '12px', letterSpacing: '.12em' }}
                    >
                      {s.eyebrow}
                    </p>
                    <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.75 }}>
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CARDS ── */}
      <section id="standard" className="px-4 md:px-10 lg:px-[70px] pb-24 md:pb-32">
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {cards.map((card, i) => (
              <article key={i} className="flex flex-col">
                <div
                  className="relative rounded-[14px] overflow-hidden bg-[#0A1628] mb-5 flex-shrink-0"
                  style={{ height: '190px' }}
                >
                  {card.image && (
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  )}
                </div>
                <h3 className="text-[19px] font-medium text-[#0A1628] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#6b7280] leading-relaxed flex-1 mb-5">
                  {card.body}
                </p>
                <Link
                  href={card.href ?? '#'}
                  className="text-[12px] font-medium tracking-widest uppercase self-start"
                  style={{ color: '#ff7f2a' }}
                >
                  {cardCta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
