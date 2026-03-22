'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

interface Slide {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    label: 'COPPER CATHODE FACILITATION',
    title: 'Structuring Responsible Mineral Supply Chains from the DRC.',
    subtitle: 'Learn more',
    image: '/SGCM Electrorefining plant.png',
  },
  {
    label: 'COMPLIANCE & TRACEABILITY',
    title: 'End-to-End Compliance Integration for the DRC.',
    subtitle: 'Discover our platform',
    image: '/sgcm-africa-tracability.jpg',
  },
  {
    label: 'INSTITUTIONAL PARTNERSHIPS',
    title: 'Building Long-Term Industrial Partnerships.',
    subtitle: 'Our network',
    image: '/dar-es-salaam.jpg',
  },
  {
    label: 'LOCAL IMPACT',
    title: <>Congolese Expertise.<br />Structured for International Markets.</>,
    subtitle: 'Our social commitment',
    image: '/SGCM-community.jpg',
  },
];

const navItems = [
  { label: 'ABOUT US', href: '#aboutus'  },
  { label: 'PLATFORM', href: '#platform' },
  { label: 'SERVICES', href: '#services' },
  { label: 'NETWORK',  href: '#network'  },
  { label: 'INSIGHTS', href: '#insights' },
  { label: 'CONTACT',  href: '/contact'  },
];

const aboutCards = [
  { label: 'Mission',  text: 'Formalize and structure mineral supply chains in the DRC' },
  { label: 'Vision',   text: 'Become the reference compliance integrator in Central Africa' },
  { label: 'Presence', text: 'Kinshasa · Kolwezi (DRC) and Brussels (Belgium)' },
  { label: 'Focus',    text: 'Copper cathodes, gold, cobalt, and strategic minerals, responsibly sourced and fully traceable.' },
];

const services = [
  {
    title: 'Strategic Mineral Facilitation',
    desc: 'Buyer–producer matching and compliance verification for LME-grade copper cathodes, gold, cobalt, and other strategic minerals from certified DRC sources.',
  },
  {
    title: 'Logistics & Export Coordination',
    desc: 'Inland transport planning, export documentation, shipment preparation, and collaboration with authorized logistics entities.',
  },
  {
    title: 'Compliance & Documentation',
    desc: 'Regulatory alignment with DRC, OECD, and EU-aligned frameworks. KYC/AML-style due diligence and administrative transparency.',
  },
  {
    title: 'Multi-Mineral Supply Chain Structuring',
    desc: 'End-to-end structuring for gold, cobalt, coltan, and copper supply chains — from certified sourcing to export readiness and documentation integrity.',
  },
  {
    title: 'Institutional Interface',
    desc: 'Structured communication with regulatory bodies, customs authorities, and international compliance institutions.',
  },
  {
    title: 'Strategic Mining Advisory',
    desc: 'Executive-level advisory on supply chain structuring, risk allocation, traceability frameworks, and long-term industrial partnership development in the DRC mineral sector.',
  },
];

const platformItems = [
  { title: 'SGCM Certified™',           desc: 'Full documentary verification of every operator and production unit in our network.' },
  { title: 'Compliance Framework',      desc: 'DRC, OECD, and EU-aligned regulatory alignment protocols' },
  { title: 'Traceability & Digital Chain-of-Custody', desc: 'End-to-end mineral traceability with immutable audit trails' },
  { title: 'Transaction Structuring',   desc: 'Contractual risk allocation and deal documentation support' },
];

const networkItems = [
  { title: 'Mining Producers',     desc: 'Certified copper and gold production facilities in the DRC' },
  { title: 'Logistics Partners',   desc: 'Authorized inland and export logistics operators' },
  { title: 'Legal Advisors',       desc: 'Congolese legal experts in DRC mining law, regulatory frameworks, and export compliance.' },
  { title: 'International Buyers', desc: 'Industrial smelters, refiners, and off-takers' },
];

// ─────────────────────────────────────────────
// NAV ITEM
// ─────────────────────────────────────────────

function NavItem({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4px 14px',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.72)',
        textDecoration: 'none',
        transition: 'color 0.2s',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
      <span
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: '14px',
          right: '14px',
          height: '1.5px',
          background: '#C94010',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.25s ease',
          borderRadius: '1px',
        }}
      />
    </a>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────

export default function Home() {
  const [current, setCurrent]   = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ══════════════════════════════════════════════
          HEADER
          ══════════════════════════════════════════════ */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.4s ease, box-shadow 0.4s ease',
          background: scrolled || menuOpen
            ? 'rgba(8,8,8,0.97)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 100%)',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
        }}
      >
        {/* ── TOP BAR ── */}
        <div
          className="px-4 md:px-8 lg:px-12"
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.09)',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <a href="/fr" style={{
              fontSize: '12px', letterSpacing: '0.07em',
              color: 'rgba(255,255,255,0.42)', textDecoration: 'none',
              padding: '0 4px', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}>
              FR
            </a>
            <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '11px' }}>|</span>
            <a href="/" style={{
              fontSize: '12px', letterSpacing: '0.07em',
              color: 'white', textDecoration: 'none',
              padding: '0 4px', fontWeight: 600,
            }}>
              EN
            </a>
          </div>
          {/* Locations — hidden on mobile */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.42)', letterSpacing: '0.07em' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Kinshasa</span>
            <span style={{ color: 'rgba(255,255,255,0.20)' }}>·</span>
            <span>Kolwezi</span>
            <span style={{ color: 'rgba(255,255,255,0.20)' }}>·</span>
            <span>Brussels</span>
          </div>
        </div>

        {/* ── MAIN NAVBAR ── */}
        <div
          className="px-4 md:px-8 lg:px-12"
          style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Desktop: search + nav */}
          <div className="hidden lg:flex items-center" style={{ gap: '36px' }}>
            <button
              onClick={() => setSearchOpen(o => !o)}
              aria-label="Search"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center',
                padding: 0, transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {navItems.map((item) => (
                <NavItem key={item.label} label={item.label} href={item.href} />
              ))}
            </nav>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'white', padding: '4px',
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src="/sgcm-logo.png"
              alt="SGCM"
              className="object-contain"
              style={{ width: '140px', height: 'auto', filter: 'brightness(0) invert(1)' }}
            />
          </a>
        </div>

        {/* ── SEARCH DROPDOWN ── */}
        <div style={{
          overflow: 'hidden',
          maxHeight: searchOpen ? '72px' : '0',
          transition: 'max-height 0.3s ease',
          borderTop: searchOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
          background: 'rgba(0,0,0,0.94)',
        }}>
          <div className="px-4 md:px-12" style={{ padding: '14px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.30)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              autoFocus={searchOpen}
              type="text"
              placeholder="Search SGCM…"
              style={{
                background: 'none', border: 'none', outline: 'none',
                color: 'white', fontSize: '14px',
                letterSpacing: '0.04em', width: '100%',
                fontFamily: 'inherit',
              }}
            />
            <button onClick={() => setSearchOpen(false)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.4)', fontSize: '20px',
              lineHeight: 1, padding: '0 4px',
            }}>×</button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col"
          style={{ background: 'rgba(8,8,8,0.98)', paddingTop: '102px' }}
        >
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-6 mt-auto mb-12">
            <a href="/fr" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em' }}>FR</a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600 }}>EN</a>
          </div>
        </div>
      )}


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
              alt={slide.label}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          </div>
        ))}

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-40 md:pb-36">
          <div className="max-w-4xl">
            <p className="text-white/55 text-xs font-semibold uppercase tracking-widest mb-3 md:mb-4">
              {slides[current].label}
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 md:mb-8"
              style={{ fontWeight: 300 }}
            >
              {slides[current].title}
            </h1>
            <a href="#services" className="inline-flex items-center gap-3 text-white text-sm group">
              <span>{slides[current].subtitle}</span>
              <span className="w-9 h-9 rounded-full border border-white/55 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12L12 2M12 2H4M12 2V10"/>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Slide nav bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`text-left px-3 py-4 md:px-6 md:py-5 border-r border-white/10 last:border-r-0 transition-colors ${
                index === current ? 'bg-black/25' : 'bg-transparent hover:bg-black/10'
              }`}
            >
              {/* Label — hidden on mobile */}
              <div className="hidden sm:flex items-center gap-2 mb-3">
                {index < current && (
                  <span className="text-white/35 text-xs">←</span>
                )}
                <p className={`text-xs uppercase tracking-widest font-medium truncate ${
                  index === current ? 'text-white' : 'text-white/38'
                }`}>
                  {slide.label}
                </p>
              </div>
              {/* Progress bar */}
              <div className="h-px w-full bg-white/18">
                {index === current && (
                  <div
                    className="h-px bg-[#C94010]"
                    style={{ width: `${progress}%`, transition: 'none' }}
                  />
                )}
                {index < current && (
                  <div className="h-px bg-white/38 w-full" />
                )}
              </div>
            </button>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          ABOUT
          ══════════════════════════════════════════════ */}
      <section id="aboutus" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-4">
              About SGCM
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              A structured approach to mineral facilitation
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Société de Gestion et Consultation Minières (SGCM) is a structured intermediary
              headquartered in Kinshasa, connecting certified DRC producers of copper cathodes,
              gold, and cobalt with international industrial buyers.
            </p>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              We do not trade. We structure.
            </p>
            <p className="text-gray-500 leading-relaxed">
              SGCM integrates compliance, traceability, and logistics coordination — aligned with
              OECD Due Diligence Guidance — to ensure every supply chain is verifiable,
              documented, and export-ready.
            </p>
          </div>
          <div className="flex md:grid md:grid-cols-2 overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {aboutCards.map((item) => (
              <div
                key={item.label}
                className="flex-none w-[80%] snap-start md:w-auto bg-gray-50 p-5 md:p-6 border-l-2 border-transparent hover:border-[#C94010] transition-colors duration-200"
              >
                <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          SERVICES
          ══════════════════════════════════════════════ */}
      <section id="services" className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-16 max-w-xl">
            What we do for our partners
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-gray-200">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 md:p-8 hover:bg-gray-50 transition-colors group cursor-default"
              >
                <h3 className="text-base font-semibold mb-3 group-hover:text-[#C94010] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="text-[#C94010] text-xs uppercase tracking-widest">
                  Learn more →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          PLATFORM
          ══════════════════════════════════════════════ */}
      <section id="platform" className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-4">
            Platform
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-12 lg:mb-0">
            <div className="flex flex-col gap-4 lg:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-light">
                SGCM Certified™ <br />Our verification standard
              </h2>
              <p className="text-gray-500 leading-relaxed mb-3">
                SGCM Certified™ is our internal verification standard. Before engaging any production
                unit or economic operator, SGCM conducts a full documentary review against primary
                international norms ensuring that every partner presented to our buyers holds complete,
                compliant, and verifiable documentation.
              </p>
              <p className="text-gray-500 leading-relaxed mb-3">
                SGCM Certified™ protocols are aligned with the OECD Due Diligence Guidance for
                Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designed to prepare cooperatives for international supply chain eligibility.
              </p>
            </div>
            <img
              src="/sgcm-certified.png"
              alt="SGCM Certified"
              className="block object-contain lg:ml-20 w-40 sm:w-56 md:w-64 lg:w-[420px] flex-shrink-0 mx-auto md:mx-0"
              style={{ height: 'auto' }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-200">
            {platformItems.map((item) => (
              <div key={item.title} className="pt-6 md:pt-8 pr-4 md:pr-8 pb-6 md:pb-0">
                <div className="w-8 h-px bg-[#C94010] mb-4 md:mb-6" />
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          NETWORK
          ══════════════════════════════════════════════ */}
      <section id="network" className="py-16 md:py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-4">
            Network
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-16 max-w-xl text-white">
            A trusted network of verified partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {networkItems.map((item) => (
              <div key={item.title} className="bg-gray-900 p-6 md:p-8">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          CONTACT CTA
          ══════════════════════════════════════════════ */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-[#C94010]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to structure your supply chain?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you are a producer, buyer, or institutional partner, SGCM is ready to
            support your compliance and facilitation needs.
          </p>
          <a
            href="mailto:contact@sgcm-mining.com"
            className="inline-block bg-white text-[#C94010] px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-gray-100 transition-colors"
          >
            Contact Us
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
              Mineral supply chain facilitator. Structuring compliant, traceable, and responsible mineral flows from the DRC to international markets.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Kinshasa · Kolwezi · Brussels</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Company</p>
            {['About Us', 'Platform', 'Network', 'Insights', 'Careers'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            {['Copper Cathode', 'Gold Supply Chain', 'Compliance', 'Logistics', 'Advisory'].map((item) => (
              <a key={item} href="#services" className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Connect</p>
            <a href="mailto:contact@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">contact@sgcm-mining.com</a>
            <a href="mailto:verify@sogecom-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">verify@sogecom-mining.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/25 text-xs">Kinshasa Office</span>
            <span className="text-white/25 text-xs">Brussels Office</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Legal</p>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Legal Notice</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Terms of Use</a>
            <a href="https://sogecom-mining.com/verify" target="_blank" rel="noopener noreferrer"
              className="text-white/70 text-xs hover:text-white transition-colors inline-flex items-center gap-2 mt-2 border border-white/20 px-3 py-2 hover:border-[#C94010] transition-all w-fit">
              <span>Verify a Mandate →</span>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white/25 text-xs">© 2026 Société de Gestion et Consultation Minières. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/25 text-xs hover:text-white transition-colors">Privacy</a>
              <span className="text-white/10">|</span>
              <a href="#" className="text-white/25 text-xs hover:text-white transition-colors">Legal</a>
              <span className="text-white/10">|</span>
              <span className="text-white/25 text-xs">SGCM Certified™</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
