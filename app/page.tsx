'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CardCarousel } from '../components/CardCarousel';
import { SiteHeader } from '../components/SiteHeader';
import { PlatformScrollSection } from '../components/PlatformScrollSection';
import { Layers, Landmark, TrendingUp } from 'lucide-react';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

interface Slide {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
  body?: string;
  alt?: string;
  ctaHref?: string;
}

const slides: Slide[] = [
  {
    label: 'COMPLIANCE INFRASTRUCTURE',
    title: 'Compliance infrastructure for DRC mineral supply chains.',
    body: 'SGCM structures, documents and validates — independently of any transaction.',
    subtitle: 'About SGCM',
    ctaHref: '#about',
    image: '/SGCM-HOME-V1.jpg',
    alt: 'SGCM compliance infrastructure — DRC mineral supply chain',
  },
  {
    label: 'THE CRP FRAMEWORK',
    title: 'The Certified Responsible Partner framework.',
    body: 'A proprietary standard for evaluating and validating DRC production units.',
    subtitle: 'Explore the Program',
    ctaHref: '#platform',
    image: '/images/CRP-WEB.png',
    alt: 'SGCM Certified Responsible Partner framework',
  },
  {
    label: 'INTERNATIONAL ALIGNMENT',
    title: 'Aligned with international due diligence.',
    body: 'OECD · LBMA · ICGLR · EU 2017/821 · DRC Mining Code 2018',
    subtitle: 'Regulatory Framework',
    ctaHref: '#services',
    image: '/images/diligence-crp.png',
    alt: 'International due diligence frameworks alignment',
  },
  {
    label: 'STRUCTURAL IMPACT',
    title: 'Formalization that lasts. Compliance that compounds.',
    body: 'Structural conditions for international market access — and for lasting local value.',
    subtitle: 'Structural Outcomes',
    ctaHref: '#contact',
    image: '/images/IMPACT-STRUCTUREL.png',
    alt: 'Congolese artisanal miners — ASM operation structured by SGCM',
  },
];

const services = [
  {
    title: 'Multi-mineral compliance structuring',
    desc: 'End-to-end audit and compliance for mining supply chains (gold, cobalt, coltan, copper), from certified production to export documentation. Every link traced, documented, verifiable.',
    Icon: Layers,
  },
  {
    title: 'Institutional Interface',
    desc: 'SGCM engages with DRC regulators, customs authorities, CEEC, SAEMAPE and international compliance institutions, to anticipate requirements, secure documentation and represent the compliance interests of its clients.',
    Icon: Landmark,
  },
  {
    title: 'Strategic Mining Advisory',
    desc: 'Drawing on data collected through its audits, SGCM advises industrial buyers, investment funds and public institutions on the structuring of their DRC partnerships: risk mapping, operator selection, contractual engineering, operational monitoring.',
    Icon: TrendingUp,
  },
];


// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────

export default function Home() {
  const [current, setCurrent]   = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(0);
    const duration = 5000;
    const interval = 50;
    let elapsed = 0;
    const progressTimer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) clearInterval(progressTimer);
    }, interval);
    const slideTimer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => { clearInterval(progressTimer); clearTimeout(slideTimer); };
  }, [current]);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={false} activeLang="en" enHref="/" frHref="/fr" activeLabel="" />



      {/* ══════════════════════════════════════════════
          HERO CAROUSEL
          ══════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt ?? slide.label}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          </div>
        ))}

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-[102px] pb-24">
          <div className="max-w-4xl">
            <p className="text-white/55 text-xs font-semibold uppercase tracking-widest mb-3 md:mb-4">
              {slides[current].label}
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6"
              style={{ fontWeight: 300 }}
            >
              {slides[current].title}
            </h1>
            {slides[current].body && (
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mb-6 md:mb-8">
                {slides[current].body}
              </p>
            )}
            <a href={slides[current].ctaHref ?? '#services'} className="inline-flex items-center gap-3 text-white text-sm group">
              <span>{slides[current].subtitle}</span>
              <span className="w-9 h-9 rounded-full border border-white/55 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12L12 2M12 2H4M12 2V10"/>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Slide indicator — pills + labels on desktop, pills only on mobile */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex gap-1.5 px-6 md:px-16 pb-5">
          {slides.map((slide, index) => {
            const isActive = index === current;
            const isPast   = index < current;
            return (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={slide.label}
                className="text-left p-0 border-0 outline-none bg-transparent overflow-hidden"
                style={{
                  flex: isActive ? 3 : 1,
                  transition: 'flex 600ms cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                {/* Label — desktop only */}
                <p
                  className="hidden sm:block text-xs uppercase tracking-widest font-medium truncate mb-2 text-white"
                  style={{
                    opacity: isActive ? 0.85 : 0.28,
                    transition: 'opacity 500ms ease',
                  }}
                >
                  {slide.label}
                </p>
                {/* Pill */}
                <div
                  className="relative h-[3px] w-full rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.18)' }}
                >
                  {isActive && (
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: `${progress}%`,
                        transition: 'none',
                        background: 'rgba(255,255,255,0.9)',
                      }}
                    />
                  )}
                  {isPast && (
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.55)' }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          DISCOVER SGCM
          ══════════════════════════════════════════════ */}
      <section
        aria-labelledby="discover-heading"
        style={{ background: '#F4F4F1' }}
        className="px-6 md:px-14 pt-16 pb-14 md:pt-24 md:pb-20"
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="mb-12 md:mb-16" style={{ maxWidth: '640px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5F5E5A', fontWeight: 500, marginBottom: '24px' }}>
              DISCOVER SGCM
            </p>
            <p id="discover-heading" className="text-[19px] md:text-[22px]"
              style={{ lineHeight: 1.45, color: '#1A1F2C', fontWeight: 400 }}>
              We structure the eligibility of DRC mineral supply chains to international
              due diligence standards. SGCM designs, deploys and operates the compliance
              framework that gives mining operators access to demanding markets.
            </p>
          </div>
          <CardCarousel>

            <Link href="/programme-crp" aria-label="Learn more about the CRP Program"
              className="group relative aspect-[4/5] overflow-hidden block rounded-[14px] flex-none snap-start w-[82%] sm:w-[46%] lg:w-[23.5%]">
              <Image src="/images/DRC-MINER-ASM.png" alt="Artisanal mining operator in DRC" fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} aria-hidden="true" />
              <div className="absolute inset-0" aria-hidden="true"
                style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.92) 100%)' }} />
              <div className="absolute top-5 left-5 right-5 text-[11px] font-medium tracking-[0.14em] text-white/90 uppercase">01 — PROGRAMME</div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-medium text-white leading-tight mb-2">CRP Program</h3>
                <p className="text-sm text-white/70 leading-snug mb-4">The SGCM standard for audit and classification of mining operators.</p>
                <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">Learn more →</span>
              </div>
            </Link>

            <Link href="/cadre-de-conformite" aria-label="Learn more about the Compliance Framework"
              className="group relative aspect-[4/5] overflow-hidden block rounded-[14px] flex-none snap-start w-[82%] sm:w-[46%] lg:w-[23.5%]">
              <Image src="/images/CADRE-CONFORMITE.png" alt="Cadre de Conformité" fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} aria-hidden="true" />
              <div className="absolute inset-0" aria-hidden="true"
                style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.92) 100%)' }} />
              <div className="absolute top-5 left-5 right-5 text-[11px] font-medium tracking-[0.14em] text-white/90 uppercase">02 — FRAMEWORK</div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-medium text-white leading-tight mb-2">Compliance Framework</h3>
                <p className="text-sm text-white/70 leading-snug mb-4">Aligned with OECD, LBMA, ICGLR and EU 2017/821.</p>
                <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">Learn more →</span>
              </div>
            </Link>

            <Link href="/partenaires-institutionnels" aria-label="Learn more about Institutional Partners"
              className="group relative aspect-[4/5] overflow-hidden block rounded-[14px] flex-none snap-start w-[82%] sm:w-[46%] lg:w-[23.5%]">
              <Image src="/kin-rdc-sgcm.jpg" alt="Kinshasa, institutional capital" fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} aria-hidden="true" />
              <div className="absolute inset-0" aria-hidden="true"
                style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.92) 100%)' }} />
              <div className="absolute top-5 left-5 right-5 text-[11px] font-medium tracking-[0.14em] text-white/90 uppercase">03 — PARTNERS</div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-medium text-white leading-tight mb-2">Institutional Partners</h3>
                <p className="text-sm text-white/70 leading-snug mb-4">Single point of contact for regulators, mining operators and international buyers.</p>
                <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">Learn more →</span>
              </div>
            </Link>

            <Link href="/impact-structurel" aria-label="Learn more about Structural Impact"
              className="group relative aspect-[4/5] overflow-hidden block rounded-[14px] flex-none snap-start w-[82%] sm:w-[46%] lg:w-[23.5%]">
              <Image src="/images/IMPACT-STRUCTUREL.png" alt="Impact Structurel" fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} aria-hidden="true" />
              <div className="absolute inset-0" aria-hidden="true"
                style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.92) 100%)' }} />
              <div className="absolute top-5 left-5 right-5 text-[11px] font-medium tracking-[0.14em] text-white/90 uppercase">04 — IMPACT</div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-medium text-white leading-tight mb-2">Structural Impact</h3>
                <p className="text-sm text-white/70 leading-snug mb-4">Documented, verifiable, lasting compliance.</p>
                <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">Learn more →</span>
              </div>
            </Link>

          </CardCarousel>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          ABOUT
          ══════════════════════════════════════════════ */}
      <section id="aboutus" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Eyebrow + heading — above the split */}
          <p className="text-[#5F5E5A] text-xs font-semibold uppercase tracking-widest mb-4">
            About SGCM
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10 md:mb-14">
            A structured approach to mining compliance
          </h2>

          {/* Split: text left / photo right */}
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[14px]">

            {/* Left column — gray bg */}
            <div className="bg-gray-100 px-8 md:px-10 py-10 md:py-14 flex flex-col justify-center">
              <p className="text-gray-500 leading-relaxed mb-4">
                Société de Gestion et Consultation Minières (SGCM) is a Congolese company
                based in Kinshasa, specialized in structuring the compliance of mineral supply
                chains. We support mining operators, institutions and international buyers in
                implementing the due diligence standards applicable to the extractive sector.
              </p>
              <p className="font-medium leading-relaxed mb-4" style={{ color: '#0A1628' }}>
                Our role: structuring, documenting, validating.
              </p>
              <p className="hidden md:block text-gray-500 leading-relaxed mb-6">
                SGCM integrates documentary compliance, traceability and operational audit,
                aligned with OECD guidelines, to deliver to international buyers complete,
                verifiable and auditable due diligence dossiers.
              </p>
              <a href="#platform" className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 group w-fit">
                Find out more
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Right column — photo (above text on mobile) */}
            <div className="order-first md:order-last relative h-[220px] md:h-full">
              <Image
                src="/images/about-mineral-structure.png"
                alt="Mineral supply chain compliance — SGCM"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SERVICES
          ══════════════════════════════════════════════ */}
      <section id="services" className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#5F5E5A] text-xs font-semibold uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-16 max-w-xl">
            Our services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {services.map((service) => {
              const ServiceIcon = service.Icon;
              return (
                <div
                  key={service.title}
                  className="bg-white border border-gray-200 rounded-[14px] p-6 md:p-8 hover:bg-gray-50 transition-colors group flex flex-col"
                >
                  <ServiceIcon
                    size={32}
                    strokeWidth={1.5}
                    className="mb-5 text-gray-400 group-hover:text-[#0A1628] transition-colors"
                  />
                  <h3 className="text-base font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500 flex-1">{service.desc}</p>
                  <a
                    href="#platform"
                    className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-gray-900"
                  >
                    Learn more <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          PLATFORM
          ══════════════════════════════════════════════ */}
      <PlatformScrollSection
        eyebrow="PLATFORM"
        heading="CRP, the SGCM operator validation standard"
        intro="Every production unit assessed under a single, documented and auditable protocol."
        chapters={[
          {
            number: '01',
            title: 'A documentary verification standard, augmented by AI',
            body: 'Before engaging any production unit or economic operator, SGCM conducts a full documentary review against primary international norms, combining artificial intelligence for document processing and human SGCM validation for every decision.',
          },
          {
            number: '02',
            title: 'Aligned with OECD due diligence',
            body: 'SGCM Certified™ protocols are aligned with the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.',
          },
          {
            number: '03',
            title: 'Designed for international eligibility',
            body: 'Designed to prepare cooperatives and operators for integration into compliant international supply chains.',
          },
        ]}
        normes="OECD 5-Step · LBMA RGG V9 · ICGLR RCM · CEEC"
        ctaLabel="DISCOVER THE STANDARD →"
        ctaHref="/sgcm-certified"
      />



      {/* ══════════════════════════════════════════════
          CONTACT CTA
          ══════════════════════════════════════════════ */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            SGCM structures, documents and validates the mineral chains of the DRC in alignment with international due diligence standards.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            A compliance infrastructure serving mining operators, public institutions and industrial partners.
          </p>
          <a
            href="mailto:contact@sgcm-mining.com"
            className="inline-block bg-transparent text-white border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            Contact SGCM
          </a>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════ */}
      <footer className="bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-2">
            <img
              src="/sgcm-logo.png"
              alt="SGCM"
              className="object-contain"
              style={{ width: '220px', height: 'auto', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ marginTop: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: '1.7' }}>
              Compliance integrator for responsible mineral supply chains. Structuring documentation, traceability, and regulatory alignment from the DRC to international markets.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Kinshasa · Kolwezi · Brussels</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Company</p>
            {['About Us', 'Platform', 'Insights'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
            <a href="/careers" className="text-white/40 text-xs hover:text-white transition-colors">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            {['CRP Program', 'Compliance Framework', 'Traceability Integration', 'Partner Verification', 'Institutional Advisory'].map((item) => (
              <a key={item} href="#services" className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Connect</p>
            <a href="mailto:contact@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">contact@sgcm-mining.com</a>
            <a href="mailto:verify@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">verify@sgcm-mining.com</a>
            {/* TODO: replace with real LinkedIn company page URL (e.g. https://www.linkedin.com/company/sgcm-sarl) */}
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/25 text-xs">Kinshasa Office</span>
            <span className="text-white/25 text-xs">Brussels Office</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Legal</p>
            <a href="/privacy" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="/legal" className="text-white/40 text-xs hover:text-white transition-colors">Legal Notice</a>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span>© 2026 SGCM SARL</span>
              <span className="text-white/20">|</span>
              <a href="/privacy" className="hover:text-white/70 transition">Privacy</a>
              <span className="text-white/20">|</span>
              <a href="/legal" className="hover:text-white/70 transition">Legal</a>
              <span className="text-white/20">|</span>
              <span>SGCM Certified®</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/40">
              <span>RCCM: CD/KNG/RCCM/26-B-01360</span>
              <span className="text-white/20">|</span>
              <span>ID. Nat.: 01-B0500-N98100N</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
