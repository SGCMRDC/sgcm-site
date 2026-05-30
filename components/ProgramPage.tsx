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

export interface ProgramPageProps {
  breadcrumbLabel: string;
  title: string;
  baseline: string;
  heroImage: string;
  lede: string;
  paragraphs: [string, string];
  cards: [ProgramCard, ProgramCard, ProgramCard];
}

export function ProgramPage({
  breadcrumbLabel, title, baseline, heroImage, lede, paragraphs, cards,
}: ProgramPageProps) {
  const [heroFailed, setHeroFailed] = useState(false);

  return (
    <>
      {/* ── HERO ── */}
      <div
        className="relative mx-4 md:mx-8 lg:mx-12 mt-24 md:mt-28 rounded-2xl overflow-hidden bg-[#0A1628]"
        style={{ height: 'clamp(480px, 60vw, 760px)' }}
      >
        {!heroFailed && (
          <Image
            src={heroImage}
            alt={title}
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
        <div className="absolute top-10 left-10 md:left-12 flex items-center gap-2">
          <Image src="/symbol_SGCM-5.png" alt="SGCM" width={30} height={30} className="h-[30px] w-auto" />
          <span className="text-white/55 text-sm">›</span>
          <span className="text-white text-sm tracking-wide">{breadcrumbLabel}</span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-16 md:bottom-24 left-10 md:left-12 right-10 md:right-12 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium text-white tracking-tight mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-white/90 text-lg md:text-[26px] font-light mb-10 leading-snug">
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

      {/* ── LEDE ── */}
      <section className="px-4 md:px-8 lg:px-12 pt-20 md:pt-28 pb-16 md:pb-24">
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <p className="text-[11px] font-medium tracking-[0.14em] text-gray-500 uppercase mb-8">
            DÉCOUVRIR LE PROGRAMME
          </p>
          <p
            className="text-[#0A1628] font-light leading-snug mb-14"
            style={{ fontSize: 'clamp(20px, 2vw, 26px)', maxWidth: '680px' }}
          >
            {lede}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12" style={{ maxWidth: '760px' }}>
            <p className="text-[15px] text-gray-600" style={{ lineHeight: 1.75 }}>
              {paragraphs[0]}
            </p>
            <p className="text-[15px] text-gray-600" style={{ lineHeight: 1.75 }}>
              {paragraphs[1]}
            </p>
          </div>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section id="standard" className="px-4 md:px-8 lg:px-12 pb-24 md:pb-32">
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {cards.map((card, i) => (
              <article key={i} className="flex flex-col">
                <div
                  className="relative rounded-xl overflow-hidden bg-[#0A1628] mb-5 flex-shrink-0"
                  style={{ height: '190px' }}
                >
                  {card.image && (
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  )}
                </div>
                <h3 className="text-[19px] font-medium text-[#0A1628] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed flex-1 mb-5">
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
