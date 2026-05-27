'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    label: 'INFRASTRUCTURE DE CONFORMITÉ',
    title: 'Infrastructure de conformité pour les chaînes minières RDC.',
    body: 'SGCM structure, documente et valide — indépendamment de toute transaction.',
    subtitle: 'À propos de SGCM',
    ctaHref: '#about',
    image: '/SGCM Electrorefining plant.png',
    alt: 'Infrastructure de conformité SGCM — chaîne d\'approvisionnement minier RDC',
  },
  {
    label: 'LE CADRE CRP',
    title: 'Le cadre Certified Responsible Partner.',
    body: 'Un standard propriétaire d\'évaluation et de validation des unités de production RDC.',
    subtitle: 'Découvrir le Programme',
    ctaHref: '#platform',
    image: '/sgcm-africa-tracability.jpg',
    alt: 'Cadre Certified Responsible Partner de SGCM',
  },
  {
    label: 'ALIGNEMENT INTERNATIONAL',
    title: 'Aligné sur les standards internationaux de diligence.',
    body: 'OCDE · LBMA · ICGLR · Règlement UE 2017/821 · Code Minier RDC 2018',
    subtitle: 'Cadre Réglementaire',
    ctaHref: '#services',
    image: '/dar-es-salaam.jpg',
    alt: 'Alignement sur les cadres internationaux de diligence raisonnable',
  },
  {
    label: 'IMPACT STRUCTUREL',
    title: 'Une formalisation qui dure. Une conformité qui se renforce.',
    body: 'Des conditions structurelles d\'accès aux marchés internationaux — et de valeur locale durable.',
    subtitle: 'Résultats Structurels',
    ctaHref: '#network',
    image: '/SGCM-community.jpg',
    alt: 'Impact structurel de l\'intégration de la conformité dans le secteur minier RDC',
  },
];

const navItems = [
  { label: 'À PROPOS',    href: '#aboutus'    },
  { label: 'PLATEFORME',  href: '#platform'   },
  { label: 'SERVICES',    href: '#services'   },
  { label: 'RÉSEAU',      href: '#network'    },
  { label: 'ACTUALITÉS',  href: '#insights'   },
  { label: 'CONTACT',     href: '/contact/fr' },
];

const aboutCards = [
  { label: 'Mission',   text: 'Structurer la conformité des opérateurs miniers de la RDC selon les standards internationaux' },
  { label: 'Vision',    text: 'Devenir l\'intégrateur de conformité de référence en Afrique centrale' },
  { label: 'Présence',  text: 'Kinshasa · Kolwezi (RDC) et Bruxelles (Belgique)' },
  { label: 'Domaines',  text: 'Minéraux stratégiques de la RDC, intégrés dans des chaînes auditées et conformes aux standards internationaux.' },
];

const services = [
  {
    title: 'Structuration multi-minéraux de la conformité',
    desc: "Audit et mise en conformité de bout en bout des chaînes minières — or, cobalt, coltan, cuivre — depuis la production certifiée jusqu'à la documentation export. Chaque maillon est tracé, documenté, vérifiable.",
  },
  {
    title: 'Interface institutionnelle',
    desc: "SGCM dialogue avec les régulateurs RDC, les autorités douanières, le CEEC, le SAEMAPE et les institutions internationales de conformité — pour anticiper les exigences, sécuriser les documents et représenter les intérêts compliance de ses clients.",
  },
  {
    title: 'Conseil stratégique minier',
    desc: "Sur la base des données collectées dans nos audits, SGCM oriente acheteurs industriels, fonds d'investissement et institutions publiques sur la structuration de leurs partenariats RDC : cartographie des risques, sélection des opérateurs, ingénierie contractuelle, suivi opérationnel.",
  },
];

const networkItems = [
  { title: 'OPÉRATEURS MINIERS',        desc: "Unités de production minière en RDC ayant complété ou intégré le programme d'audit CRP." },
  { title: 'INSTITUTIONS PUBLIQUES',    desc: 'CEEC, SAEMAPE, Ministère des Mines, autorités douanières, organismes de conformité.' },
  { title: 'CONSEIL JURIDIQUE',         desc: 'Cabinets et experts en droit minier RDC, conformité internationale et contentieux extractif.' },
  { title: 'TRAÇABILITÉ TECHNOLOGIQUE', desc: "Infrastructures blockchain et solutions documentaires donnant aux acheteurs internationaux accès à l'audit des chaînes minières." },
];


// ─────────────────────────────────────────────
// NAV ITEM
// ─────────────────────────────────────────────

function NavItem({ label, href, onClick, pathname }: { label: string; href: string; onClick?: () => void; pathname: string }) {
  const [hovered, setHovered] = useState(false);
  const isActive = pathname === href;
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
        color: isActive ? '#FF7F2A' : hovered ? 'rgba(255,127,42,0.4)' : 'rgba(255,255,255,0.72)',
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
          background: '#FF7F2A',
          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
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
  const pathname = usePathname();

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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            ? 'rgba(31,41,55,0.97)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 100%)',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className={`absolute inset-0 transition-colors duration-200 ${scrolled || menuOpen ? 'bg-[#1F2937] lg:bg-transparent' : 'bg-transparent'}`} />
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
              color: 'white', textDecoration: 'none',
              padding: '0 4px', fontWeight: 600,
            }}>FR</a>
            <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '11px' }}>|</span>
            <a href="/" style={{
              fontSize: '12px', letterSpacing: '0.07em',
              color: 'rgba(255,255,255,0.42)', textDecoration: 'none',
              padding: '0 4px', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}>
              EN
            </a>
          </div>
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
            <span>Bruxelles</span>
          </div>
        </div>

        {/* ── MAIN NAVBAR ── */}
        <div
          className="px-4 md:px-8 lg:px-12"
          style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <div className="hidden lg:flex items-center" style={{ gap: '36px' }}>
            <button
              onClick={() => setSearchOpen(o => !o)}
              aria-label="Rechercher"
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
                <NavItem key={item.label} label={item.label} href={item.href} pathname={pathname} />
              ))}
            </nav>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '4px' }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>

          <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img src="/sgcm-logo.png" alt="SGCM"
              className="object-contain"
              style={{ width: '140px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
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
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input autoFocus={searchOpen} type="text" placeholder="Rechercher sur SGCM…"
              style={{ background: 'none', border: 'none', outline: 'none', color: 'white', fontSize: '14px', letterSpacing: '0.04em', width: '100%', fontFamily: 'inherit' }} />
            <button onClick={() => setSearchOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', fontSize: '20px', lineHeight: 1, padding: '0 4px' }}>×</button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col" style={{ background: 'rgba(8,8,8,0.98)', paddingTop: '102px' }}>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-6 mt-auto mb-12">
            <a href="/fr" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600 }}>FR</a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em' }}>EN</a>
          </div>
        </div>
      )}


      {/* ══════════════════════════════════════════════
          HERO CAROUSEL
          ══════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={slide.image} alt={slide.alt ?? slide.label} fill className="object-cover" priority={index === 0} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          </div>
        ))}

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-[102px] pb-24">
          <div className="max-w-4xl">
            <p className="text-white/55 text-xs font-semibold uppercase tracking-widest mb-3 md:mb-4">
              {slides[current].label}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 md:mb-6" style={{ fontWeight: 300 }}>
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
          DÉCOUVRIR SGCM
          ══════════════════════════════════════════════ */}
      <section
        aria-labelledby="discover-heading"
        style={{ background: '#F4F4F1' }}
        className="px-6 md:px-14 pt-16 pb-14 md:pt-24 md:pb-20"
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="mb-12 md:mb-16" style={{ maxWidth: '640px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5F5E5A', fontWeight: 500, marginBottom: '24px' }}>
              DÉCOUVRIR SGCM
            </p>
            <p id="discover-heading" className="text-[19px] md:text-[22px]"
              style={{ lineHeight: 1.45, color: '#1A1F2C', fontWeight: 400 }}>
              Nous structurons l'éligibilité des chaînes minières RDC aux standards
              internationaux de diligence raisonnable. SGCM conçoit, déploie et opère
              le cadre de conformité qui permet aux opérateurs miniers d'accéder
              aux marchés exigeants.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            <a href="#program" aria-label="En savoir plus sur le Programme CRP"
              className="group relative aspect-[4/5] overflow-hidden block rounded-[14px]">
              <Image src="/DRC-MINER-ASM.png" alt="Opérateur minier artisanal en RDC" fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} aria-hidden="true" />
              <div className="absolute inset-0" aria-hidden="true"
                style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.92) 100%)' }} />
              <div className="absolute top-5 left-5 right-5 text-[11px] font-medium tracking-[0.14em] text-white/90 uppercase">01 — PROGRAMME</div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-medium text-white leading-tight mb-2">Programme CRP</h3>
                <p className="text-sm text-white/70 leading-snug mb-4">Le standard SGCM d'audit et de classification des opérateurs miniers.</p>
                <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">EN SAVOIR PLUS →</span>
              </div>
            </a>

            <a href="#framework" aria-label="En savoir plus sur le Cadre de Conformité"
              className="group relative aspect-[4/5] overflow-hidden block rounded-[14px]">
              <Image src="/PANAFRICANISME.png" alt="Cadre panafricain de conformité" fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} aria-hidden="true" />
              <div className="absolute inset-0" aria-hidden="true"
                style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.92) 100%)' }} />
              <div className="absolute top-5 left-5 right-5 text-[11px] font-medium tracking-[0.14em] text-white/90 uppercase">02 — FRAMEWORK</div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-medium text-white leading-tight mb-2">Cadre de Conformité</h3>
                <p className="text-sm text-white/70 leading-snug mb-4">Aligné sur l'OCDE, la LBMA, l'ICGLR et le Règlement UE 2017/821.</p>
                <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">EN SAVOIR PLUS →</span>
              </div>
            </a>

            <a href="#partners" aria-label="En savoir plus sur les Partenaires Institutionnels"
              className="group relative aspect-[4/5] overflow-hidden block rounded-[14px]">
              <Image src="/kin-rdc-sgcm.jpg" alt="Kinshasa, capitale institutionnelle" fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} aria-hidden="true" />
              <div className="absolute inset-0" aria-hidden="true"
                style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.92) 100%)' }} />
              <div className="absolute top-5 left-5 right-5 text-[11px] font-medium tracking-[0.14em] text-white/90 uppercase">03 — PARTENAIRES</div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-medium text-white leading-tight mb-2">Partenaires Institutionnels</h3>
                <p className="text-sm text-white/70 leading-snug mb-4">Interlocuteur unique des régulateurs, des opérateurs miniers et des acheteurs internationaux.</p>
                <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">EN SAVOIR PLUS →</span>
              </div>
            </a>

            <a href="#impact" aria-label="En savoir plus sur l'Impact Structurel"
              className="group relative aspect-[4/5] overflow-hidden block rounded-[14px]">
              <Image src="/trace-sgcm.jpg" alt="SGCM documentary traceability" fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} aria-hidden="true" />
              <div className="absolute inset-0" aria-hidden="true"
                style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.92) 100%)' }} />
              <div className="absolute top-5 left-5 right-5 text-[11px] font-medium tracking-[0.14em] text-white/90 uppercase">04 — IMPACT</div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-lg font-medium text-white leading-tight mb-2">Impact Structurel</h3>
                <p className="text-sm text-white/70 leading-snug mb-4">Une conformité documentée, vérifiable, durable.</p>
                <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">EN SAVOIR PLUS →</span>
              </div>
            </a>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          À PROPOS
          ══════════════════════════════════════════════ */}
      <section id="aboutus" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[#5F5E5A] text-xs font-semibold uppercase tracking-widest mb-4">À propos de SGCM</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Une approche structurée de la conformité minière</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Société de Gestion et Consultation Minières (SGCM) est une société congolaise
              basée à Kinshasa, spécialisée dans la structuration de la conformité des chaînes
              minières. Nous accompagnons les opérateurs miniers, les institutions et les
              acheteurs internationaux dans la mise en œuvre des standards de diligence
              raisonnable applicables au secteur extractif.
            </p>
            <p className="text-gray-700 font-medium leading-relaxed mb-4">
              Notre rôle : structurer, documenter, valider.
            </p>
            <p className="text-gray-500 leading-relaxed">
              SGCM intègre conformité documentaire, traçabilité et audit opérationnel —
              en alignement avec les lignes directrices OCDE — pour livrer aux acheteurs
              internationaux des dossiers de diligence raisonnable complets, vérifiables
              et auditables.
            </p>
          </div>
          <div className="flex md:grid md:grid-cols-2 overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {aboutCards.map((item) => (
              <div key={item.label} className="group relative flex-none w-[80%] snap-start md:w-auto bg-gray-50 p-5 md:p-6">
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-0.75 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'linear-gradient(180deg, #FF7F2A 0%, #F7B500 100%)' }}
                />
                <p className="text-[#5F5E5A] text-xs font-semibold uppercase tracking-widest mb-2">{item.label}</p>
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
          <p className="text-[#5F5E5A] text-xs font-semibold uppercase tracking-widest mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-16 max-w-xl">Nos prestations</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-gray-200">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 md:p-8 hover:bg-gray-50 transition-colors group cursor-default flex flex-col h-full">
                <h3 className="text-base font-semibold mb-3 group-hover:text-[#1A1F2C] transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="text-[#1A1F2C] underline underline-offset-[3px] text-xs uppercase tracking-widest mt-auto">En savoir plus →</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          PLATEFORME
          ══════════════════════════════════════════════ */}
      <section
        id="platform"
        style={{ background: '#FFFFFF' }}
        className="py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-16">

            {/* Colonne gauche : eyebrow + barre d'ancrage + logo + doctrine */}
            <div>
              <div className="text-[11px] font-medium text-[#5F5E5A] tracking-[0.16em] uppercase mb-3">
                PLATEFORME
              </div>
              <div className="w-6 h-0.5 bg-[#1F2937] mb-6" />
              <Image
                src="/SGCM-CRP-LOGO-BLACK.png"
                alt="SGCM Certified — Société de Gestion et Consultation Minières"
                width={260}
                height={78}
                className="w-full max-w-65 h-auto mb-8"
                priority
              />
              <p className="text-[10px] font-medium text-[#5F5E5A] tracking-[0.14em] uppercase mb-4">
                Approche SGCM
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-sm text-gray-600">
                  <span className="font-semibold text-[#0A1628]">Cartographier</span> chaque unité de production.
                </li>
                <li className="text-sm text-gray-600">
                  <span className="font-semibold text-[#0A1628]">Vérifier</span> chaque document.
                </li>
                <li className="text-sm text-gray-600">
                  <span className="font-semibold text-[#0A1628]">Valider</span> chaque opérateur.
                </li>
              </ul>
            </div>

            {/* Colonne droite : 3 chapitres */}
            <div className="flex flex-col gap-6">

              {/* Chapitre 01 */}
              <div className="grid grid-cols-[24px_1fr] gap-4">
                <div className="text-[11px] font-medium text-[#5F5E5A] pt-1">01</div>
                <div>
                  <h3 className="text-sm md:text-base font-medium text-[#1A1F2C] mb-2">
                    Un standard de vérification documentaire, augmenté par l&apos;IA
                  </h3>
                  <p className="text-sm text-[#1A1F2C] leading-relaxed">
                    Avant tout engagement avec une unité de production ou un opérateur économique, SGCM procède à une revue documentaire complète au regard des normes internationales primaires — combinant intelligence artificielle pour le traitement documentaire et validation humaine SGCM pour chaque décision.
                  </p>
                </div>
              </div>

              {/* Chapitre 02 */}
              <div className="grid grid-cols-[24px_1fr] gap-4">
                <div className="text-[11px] font-medium text-[#5F5E5A] pt-1">02</div>
                <div>
                  <h3 className="text-sm md:text-base font-medium text-[#1A1F2C] mb-2">
                    Aligné sur la diligence raisonnable OCDE
                  </h3>
                  <p className="text-sm text-[#1A1F2C] leading-relaxed">
                    Les protocoles SGCM Certified™ sont alignés sur le Guide OCDE sur le devoir de diligence pour des chaînes d&apos;approvisionnement responsables en minéraux provenant de zones de conflit ou à haut risque.
                  </p>
                </div>
              </div>

              {/* Chapitre 03 */}
              <div className="grid grid-cols-[24px_1fr] gap-4">
                <div className="text-[11px] font-medium text-[#5F5E5A] pt-1">03</div>
                <div>
                  <h3 className="text-sm md:text-base font-medium text-[#1A1F2C] mb-2">
                    Conçu pour l&apos;éligibilité internationale
                  </h3>
                  <p className="text-sm text-[#1A1F2C] leading-relaxed">
                    Conçu pour préparer coopératives et opérateurs à l&apos;intégration dans des chaînes minières internationales conformes.
                  </p>
                </div>
              </div>

            </div>

            {/* Pied partagé : référentiels + CTA */}
            <div className="col-span-full mt-6 pt-5 border-t border-gray-200 grid grid-cols-1 md:grid-cols-[0.85fr_1fr] gap-y-3 md:gap-12 items-center">
              <p className="text-[11px] text-gray-500 font-medium tracking-wide">
                OCDE 5-Step · LBMA RGG V9 · ICGLR RCM · CEEC
              </p>
              <div>
                <Link
                  href="/fr/sgcm-certified"
                  className="text-[11px] font-medium text-[#1A1F2C] tracking-widest uppercase hover:underline"
                >
                  DÉCOUVRIR LE STANDARD →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          RÉSEAU
          ══════════════════════════════════════════════ */}
      <section id="network" className="py-16 md:py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Réseau</p>
          <h2 className="text-3xl md:text-4xl font-light mb-10 md:mb-16 max-w-xl text-white">
            Un réseau de confiance de partenaires vérifiés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {networkItems.map((item) => (
              <div key={item.title} className="bg-gray-900 p-6 md:p-8">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          CONTACT CTA
          ══════════════════════════════════════════════ */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            SGCM structure, documente et valide les chaînes minières de la RDC selon les standards internationaux de diligence raisonnable.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Une infrastructure de conformité au service des opérateurs miniers, des institutions publiques et des partenaires industriels.
          </p>
          <a href="mailto:contact@sgcm-mining.com"
            className="inline-block bg-transparent text-white border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors">
            Contacter SGCM
          </a>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════ */}
      <footer className="bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-2">
            <img src="/sgcm-logo.png" alt="SGCM"
              className="object-contain"
              style={{ width: '220px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
            <p style={{ marginTop: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: '1.7' }}>
              Intégrateur de conformité pour des chaînes d'approvisionnement minérales responsables. Structurer la documentation, la traçabilité et l'alignement réglementaire depuis la RDC vers les marchés internationaux.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Kinshasa · Kolwezi · Bruxelles</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Entreprise</p>
            {[
              { label: 'À propos',   href: '#aboutus' },
              { label: 'Plateforme', href: '#platform' },
              { label: 'Réseau',     href: '#network' },
              { label: 'Actualités', href: '#insights' },
              { label: 'Carrières',  href: '/fr/careers' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-white/40 text-xs hover:text-white transition-colors">{item.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            {['Programme CRP', 'Cadre de Conformité', 'Intégration Traçabilité', 'Vérification des Partenaires', 'Conseil Institutionnel'].map((item) => (
              <a key={item} href="#services" className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Contact</p>
            <a href="mailto:contact@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">contact@sgcm-mining.com</a>
            <a href="mailto:verify@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">verify@sgcm-mining.com</a>
            {/* TODO: replace with real LinkedIn company page URL (e.g. https://www.linkedin.com/company/sgcm-sarl) */}
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/25 text-xs">Bureau de Kinshasa</span>
            <span className="text-white/25 text-xs">Bureau de Bruxelles</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Juridique</p>
            <a href="/fr/privacy" className="text-white/40 text-xs hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="/fr/legal" className="text-white/40 text-xs hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span>© 2026 SGCM SARL</span>
              <span className="text-white/20">|</span>
              <a href="/fr/privacy" className="hover:text-white/70 transition">Confidentialité</a>
              <span className="text-white/20">|</span>
              <a href="/fr/legal" className="hover:text-white/70 transition">Juridique</a>
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
