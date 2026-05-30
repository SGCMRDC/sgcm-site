'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProgramPage } from '../../components/ProgramPage';

const navItems = [
  { label: 'À PROPOS',   href: '/fr/#aboutus'  },
  { label: 'PLATEFORME', href: '/fr/#platform', active: true },
  { label: 'SERVICES',   href: '/fr/#services'  },
  { label: 'RÉSEAU',     href: '/fr/#network'   },
  { label: 'ACTUALITÉS', href: '/fr/#insights'  },
  { label: 'CONTACT',    href: '/contact/fr'    },
];

export default function ImpactStructurelPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ══════════════════════════════════════════════
          LIGHT HEADER
          ══════════════════════════════════════════════ */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: 'rgba(255,255,255,1)',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.09)' : '0 1px 0 rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Top bar */}
        <div
          className="px-4 md:px-8 lg:px-12"
          style={{
            height: '38px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0,0,0,0.07)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Link href="/fr" style={{ fontSize: '12px', letterSpacing: '0.07em', color: '#1F2937', textDecoration: 'none', padding: '0 4px', fontWeight: 600 }}>
              FR
            </Link>
            <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '11px' }}>|</span>
            <Link href="/" style={{ fontSize: '12px', letterSpacing: '0.07em', color: 'rgba(31,41,55,0.45)', textDecoration: 'none', padding: '0 4px' }}>
              EN
            </Link>
          </div>
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(31,41,55,0.5)', letterSpacing: '0.07em' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(31,41,55,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Kinshasa</span>
            <span style={{ color: 'rgba(0,0,0,0.15)' }}>·</span>
            <span>Kolwezi</span>
            <span style={{ color: 'rgba(0,0,0,0.15)' }}>·</span>
            <span>Brussels</span>
          </div>
        </div>

        {/* Main navbar */}
        <div
          className="px-4 md:px-8 lg:px-12"
          style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: '2px' }}>
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: '12px', letterSpacing: '0.07em', textDecoration: 'none',
                  padding: '8px 14px', display: 'inline-flex', alignItems: 'center',
                  color: item.active ? '#ff7f2a' : '#1F2937',
                  fontWeight: item.active ? 600 : 500,
                  borderBottom: item.active ? '2px solid #ff7f2a' : '2px solid transparent',
                  transition: 'color 0.18s, border-color 0.18s',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1F2937', padding: '4px' }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>

          {/* Logo */}
          <Link href="/fr" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/sgcm-logo.png"
              alt="SGCM"
              width={100}
              height={32}
              className="h-8 w-auto"
              style={{ filter: 'invert(1)' }}
            />
          </Link>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col pt-[102px] px-6 overflow-y-auto">
            <nav className="flex flex-col">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: '18px', fontWeight: item.active ? 600 : 400,
                    color: item.active ? '#ff7f2a' : '#1F2937',
                    padding: '14px 0', textDecoration: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-6 mt-auto mb-12">
              <Link href="/fr" style={{ color: '#1F2937', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600 }}>FR</Link>
              <span style={{ color: 'rgba(0,0,0,0.2)' }}>|</span>
              <Link href="/" style={{ color: 'rgba(31,41,55,0.4)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em' }}>EN</Link>
            </div>
          </div>
        )}
      </header>

      {/* ══════════════════════════════════════════════
          PAGE CONTENT
          ══════════════════════════════════════════════ */}
      <ProgramPage
        breadcrumbLabel="Impact Structurel"
        title="Impact Structurel"
        baseline="Une conformité documentée, vérifiable et durable, au service d'un secteur transformé."
        heroImage="/IMPACT-STRUCTUREL.png"
        heroLink1={{ label: 'Notre impact', href: '#standard' }}
        heroLink2={{ label: '→ Le programme CRP', href: '/programme-crp' }}
        bodyEyebrow="DÉCOUVRIR L'IMPACT"
        lede="L'Impact Structurel désigne la transformation durable que le programme CRP produit dans le secteur minier artisanal. Au delà de la conformité ponctuelle, il installe une infrastructure de preuve qui formalise les opérateurs, sécurise la traçabilité et ancre la production congolaise dans les chaînes d'approvisionnement responsables."
        subsections={[
          {
            eyebrow: 'UNE CONFORMITÉ DURABLE',
            text: "La diligence raisonnable n'est pas un contrôle isolé mais un processus continu d'amélioration. Le cadre établit un système de gestion, de documentation et de suivi qui perdure dans le temps et qui élève progressivement les pratiques des coopératives engagées. La conformité devient un état entretenu, vérifiable à tout moment, plutôt qu'une attestation figée.",
          },
          {
            eyebrow: 'LA FORMALISATION DU SECTEUR',
            text: "En structurant et en documentant ce qui demeurait dispersé, le programme fait passer des opérateurs informels au statut de partenaires reconnus. Cette formalisation ouvre l'accès aux marchés exigeants, renforce la sécurité juridique des coopératives et consolide leur place dans une filière organisée.",
          },
          {
            eyebrow: 'UNE VALEUR POUR LA RÉPUBLIQUE DÉMOCRATIQUE DU CONGO',
            text: "La traçabilité des flux et la lisibilité documentaire renforcent la visibilité du secteur pour l'État, conditions d'une meilleure captation de valeur. À l'heure où l'Union européenne et les grands acheteurs font de l'origine responsable un critère d'accès, le cadre consolide la position de la production congolaise dans des chaînes d'approvisionnement de plus en plus scrutées.",
          },
          {
            eyebrow: 'LA TRAÇABILITÉ COMME ACTIF',
            text: "La preuve établie ne se perd pas. Documentée et conservée, elle peut être publiée vers les standards internationaux de traçabilité sous la forme d'un passeport numérique de produit, SGCM en demeurant le système de référence interne. La donnée de conformité devient un actif durable, lisible par les marchés et opposable dans le temps.",
          },
          {
            eyebrow: 'UN IMPACT RESPONSABLE',
            text: "Le programme structure, documente et valide. Il prépare une matière sur laquelle les autorités compétentes fondent leurs décisions, sans jamais se substituer à leur rôle ni intervenir dans la transaction. L'impact recherché est durable et responsable : faire de la rigueur documentaire un levier de développement pour le secteur et pour le pays.",
          },
        ]}
        cards={[
          {
            title: 'Une conformité durable',
            body: "Un système de preuve entretenu dans le temps, vérifiable à tout moment, plutôt qu'une attestation figée.",
            href: '#',
          },
          {
            title: 'La formalisation du secteur',
            body: "Des opérateurs informels devenus partenaires reconnus, avec un accès consolidé aux marchés exigeants.",
            href: '#',
          },
          {
            title: 'Une valeur nationale',
            body: "Traçabilité des flux et lisibilité documentaire au service de la captation de valeur pour la RDC.",
            href: '#',
          },
        ]}
      />

      {/* ══════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════ */}
      <footer className="bg-[#0A1628] text-white px-6 md:px-12 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
              <Image src="/sgcm-logo.png" alt="SGCM" width={100} height={32} className="h-8 w-auto mb-4" />
              <p className="text-white/40 text-xs leading-relaxed max-w-[200px]">
                Société de Gestion et Consultation Minières.<br />Kinshasa · Kolwezi · Brussels.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">Programmes</p>
              <ul className="space-y-2">
                {['Programme CRP', 'Cadre de Conformité', 'Intégration Traçabilité', 'Vérification des Partenaires', 'Conseil Institutionnel'].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widests uppercase text-white/30 mb-4">À Propos</p>
              <ul className="space-y-2">
                {['Mission', 'Vision', 'Présence'].map(item => (
                  <li key={item}>
                    <Link href="/fr/#aboutus" className="text-white/50 text-sm hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/fr/careers" className="text-white/50 text-sm hover:text-white transition-colors">Carrières</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">Contact</p>
              <ul className="space-y-2">
                <li><a href="mailto:contact@sgcm-mining.com" className="text-white/50 text-sm hover:text-white transition-colors">contact@sgcm-mining.com</a></li>
                <li><a href="mailto:verify@sgcm-mining.com" className="text-white/50 text-sm hover:text-white transition-colors">verify@sgcm-mining.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-white/25 text-xs">© {new Date().getFullYear()} SGCM · Société de Gestion et Consultation Minières</p>
            <div className="flex gap-6">
              <Link href="/fr/privacy" className="text-white/25 text-xs hover:text-white/50 transition">Confidentialité</Link>
              <Link href="/fr/legal" className="text-white/25 text-xs hover:text-white/50 transition">Juridique</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
