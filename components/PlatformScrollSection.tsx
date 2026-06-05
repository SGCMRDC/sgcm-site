'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Chapter {
  number: string;
  title: string;
  body: string;
}

export interface PlatformScrollSectionProps {
  eyebrow: string;
  heading: string;
  intro: string;
  chapters: [Chapter, Chapter, Chapter];
  normes: string;
  ctaLabel: string;
  ctaHref: string;
}

export function PlatformScrollSection({
  eyebrow,
  heading,
  intro,
  chapters,
  normes,
  ctaLabel,
  ctaHref,
}: PlatformScrollSectionProps) {
  const [reducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const handle = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const el = wrapperRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
        setActive(progress < 1 / 3 ? 0 : progress < 2 / 3 ? 1 : 2);
      });
    };

    window.addEventListener('scroll', handle, { passive: true });
    return () => {
      window.removeEventListener('scroll', handle);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  const leftContent = (
    <div className="flex flex-col gap-6">
      <p className="text-[#5F5E5A] text-xs font-semibold uppercase tracking-widest">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-gray-900">{heading}</h2>
      <p className="text-sm leading-relaxed text-gray-500 max-w-sm">{intro}</p>
      <Image
        src="/SGCM-CRP-LOGO-BLACK.png"
        alt="SGCM Certified — Société de Gestion et Consultation Minières"
        width={320}
        height={96}
        className="w-full max-w-[240px] h-auto"
        priority
      />
    </div>
  );

  const footerContent = (
    <div className="pt-5 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center gap-4">
      <p className="text-[11px] text-gray-500 font-medium tracking-wide flex-1">{normes}</p>
      <Link
        href={ctaHref}
        className="inline-flex items-center bg-[#0A1628] text-white rounded-[8px] px-6 py-3 text-sm font-medium hover:bg-[#1A2940] transition-colors whitespace-nowrap"
      >
        {ctaLabel}
      </Link>
    </div>
  );

  return (
    <div id="platform">

      {/* Static version: always on mobile; on desktop only if prefers-reduced-motion */}
      <section
        className={`${reducedMotion ? 'block' : 'md:hidden'} py-16 md:py-24 px-6 md:px-10 bg-white`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10">
            {leftContent}
            <div className="flex flex-col gap-2 md:border-l md:border-gray-200 md:pl-8">
              {chapters.map((ch) => (
                <div key={ch.number} className="rounded-[14px] px-4 py-5">
                  <p className="text-4xl font-light text-gray-300 mb-3">{ch.number}</p>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{ch.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{ch.body}</p>
                </div>
              ))}
              <div className="mt-4">{footerContent}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated version: desktop only, no prefers-reduced-motion */}
      {!reducedMotion && (
        <div
          ref={wrapperRef}
          className="hidden md:block relative bg-white"
          style={{ height: '200vh' }}
        >
          <div className="sticky top-0 h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10">

                {leftContent}

                <div className="flex flex-col border-l border-gray-200 pl-8">

                  {/* Progress bar — 3 segments, decorative */}
                  <div className="flex gap-1.5 mb-8" aria-hidden="true">
                    {chapters.map((ch, i) => (
                      <div
                        key={ch.number}
                        className="h-[2px] flex-1 rounded-full"
                        style={{
                          backgroundColor: i <= active ? '#0A1628' : '#E5E7EB',
                          transition: 'background-color 300ms ease',
                        }}
                      />
                    ))}
                  </div>

                  {/* Chapters — ch01 at relative (holds height), ch02/03 absolute overlay */}
                  <div className="relative">
                    {chapters.map((ch, i) => {
                      const isActive = i === active;
                      return (
                        <div
                          key={ch.number}
                          aria-hidden={!isActive}
                          className="rounded-[14px] px-4 py-5"
                          style={{
                            position: (i === 0 ? 'relative' : 'absolute') as 'relative' | 'absolute',
                            ...(i !== 0 ? { top: 0, left: 0, right: 0 } : {}),
                            opacity: isActive ? 1 : 0,
                            transform: i === 0 ? undefined : (isActive ? 'translateY(0)' : 'translateY(16px)'),
                            transition: 'opacity 250ms ease, transform 250ms ease',
                            pointerEvents: isActive ? undefined : 'none',
                          }}
                        >
                          <p
                            className="text-4xl font-light mb-3"
                            style={{
                              color: isActive ? '#0A1628' : '#D1D5DB',
                              transition: 'color 250ms ease',
                            }}
                          >
                            {ch.number}
                          </p>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">{ch.title}</h3>
                          <p className="text-sm leading-relaxed text-gray-500">{ch.body}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer — always visible, outside animated zone */}
                  <div className="mt-6">{footerContent}</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
