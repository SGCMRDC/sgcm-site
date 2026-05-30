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

export default function ProgrammeCRPPage() {
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
          LIGHT HEADER (variant="light")
          White bg · dark nav items · PLATEFORME orange+border
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

          {/* Logo — right, inverted to black on white bg */}
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
        breadcrumbLabel="Programme CRP"
        title="Programme CRP"
        baseline="Structurer la conformité. Documenter la preuve. Valider l'éligibilité."
        heroImage="/CRP-PROGRAMME.png"
        lede="Le programme CRP transforme les coopératives minières artisanales en participants pleinement structurés, documentés et éligibles aux chaînes d'approvisionnement responsables."
        columns={[
          [
            "En République Démocratique du Congo, le Code minier de 2018 impose à l'exploitation artisanale de s'organiser en coopératives opérant à l'intérieur de zones d'exploitation artisanale officiellement délimitées, sous l'encadrement des services de l'État. Cette exigence crée un besoin structurel. Doter ces coopératives d'une capacité de gestion, de documentation et de preuve qui réponde aux attentes des marchés exigeants. C'est précisément l'espace qu'occupe SGCM, non comme acteur commercial de la filière, mais comme intégrateur de conformité.",
            "Le programme CRP articule les obligations nationales avec les référentiels internationaux de diligence raisonnable. Le Guide OCDE sur le devoir de diligence pour des chaînes d'approvisionnement responsables en minerais en constitue la colonne vertébrale, avec son processus en cinq étapes. S'y ajoutent le Responsible Gold Guidance du LBMA dans sa neuvième version, le mécanisme régional de certification de la CIRGL, et pour l'aval européen le Règlement (UE) 2017/821 encadrant les obligations des importateurs de l'Union.",
          ],
          [
            "Chaque coopérative engagée fait l'objet d'une structuration administrative, d'une collecte documentaire normalisée et d'une évaluation des risques selon des critères pondérés. L'intelligence artificielle intervient en appui de cette documentation. Elle accélère le traitement et le classement des pièces, met en évidence les écarts, et ramène à quelques jours un travail qui mobilisait jusqu'ici plusieurs semaines.",
            "La rigueur prime sur la rapidité. Aucune évaluation n'est arrêtée sans la validation d'un agent SGCM identifié et traçable, conformément au principe qui gouverne l'ensemble du dispositif. La certification, au sens réglementaire, demeure la prérogative des autorités congolaises compétentes. SGCM en prépare la matière. Une conformité documentée, vérifiable et défendable devant les acheteurs les plus exigeants.",
          ],
        ]}
        cards={[
          {
            title: "De l'informel au formel",
            body: "SGCM relie l'économie minière artisanale aux exigences des marchés responsables, transformant des opérateurs informels en partenaires éligibles, traçables et reconnus.",
            href: '#',
          },
          {
            title: "Aux standards du monde",
            body: "Aligné sur la diligence raisonnable OCDE en cinq étapes, le LBMA RGG V9, la CIRGL et le Règlement UE 2017/821. Une conformité documentée, vérifiable et défendable.",
            href: '#',
          },
          {
            title: "Conçu pour les exigences internationales",
            body: "En intégrant l'IA à la documentation, SGCM répond aux standards mondiaux et accélère le traitement des dossiers. Cette capacité offre aux institutions congolaises un outil de cartographie et de suivi des coopératives.",
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
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">À Propos</p>
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
