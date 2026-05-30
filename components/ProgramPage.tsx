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
  /** Subsections with labeled eyebrows — replaces columns when provided. */
  subsections?: ProgramSubsection[];
  cards: [ProgramCard, ProgramCard, ProgramCard];
}

export function ProgramPage({
  breadcrumbLabel, title, baseline, heroImage, lede, columns, subsections, cards,
}: ProgramPageProps) {
  const [heroFailed, setHeroFailed] = useState(false);

  return (
    <>
      {/* ── HERO ──
          mt-[138px] = 102px nav height + 36px deliberate gap below nav.
          mx gives the inset; rounded-[18px] per mockup. */}
      <div
        className="relative mx-4 md:mx-10 lg:mx-[70px] rounded-[18px] overflow-hidden bg-[#0A1628]"
        style={{ marginTop: '138px', height: 'clamp(460px, 55vw, 740px)' }}
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
          style={{ top: '46px', left: '52px' }}
        >
          <Image
            src="/symbol_SGCM-5.png"
            alt="SGCM"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-white/55 text-base">›</span>
          <span className="text-white tracking-wide" style={{ fontSize: '15px' }}>
            {breadcrumbLabel}
          </span>
        </div>

        {/* Bottom content */}
        <div
          className="absolute max-w-3xl"
          style={{ bottom: '118px', left: '52px', right: '52px' }}
        >
          <h1
            className="text-5xl md:text-[66px] text-white tracking-tight mb-5 leading-tight"
            style={{ fontWeight: 300 }}
          >
            {title}
          </h1>
          <p
            className="text-white/90 text-xl md:text-[26px] mb-10 leading-snug"
            style={{ fontWeight: 300 }}
          >
            {baseline}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="#standard"
              className="flex items-center gap-3 text-white text-sm font-medium tracking-wide group"
            >
              Le standard CRP
              <span
                className="flex items-center justify-center w-11 h-11 rounded-full transition-colors group-hover:bg-white group-hover:text-[#0A1628]"
                style={{ border: '1.5px solid rgba(255,255,255,0.65)' }}
              >
                →
              </span>
            </Link>
            <Link
              href="#conformite"
              className="text-white/80 text-sm tracking-wide transition-colors hover:text-white"
            >
              → Le cadre de conformité
            </Link>
          </div>
        </div>
      </div>

      {/* ── LEDE + BODY ── */}
      <section className="px-4 md:px-10 lg:px-[70px] pt-20 md:pt-28 pb-16 md:pb-24">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="text-[11px] font-medium tracking-[0.14em] text-[#6b7280] uppercase mb-8">
            DÉCOUVRIR LE PROGRAMME
          </p>
          <p
            className="text-[#0A1628] font-light leading-snug mb-14"
            style={{ fontSize: '25px' }}
          >
            {lede}
          </p>

          {subsections && (
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
          )}

          {!subsections && columns && (
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
                  EN SAVOIR PLUS →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
