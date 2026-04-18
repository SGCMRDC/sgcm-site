'use client';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'À PROPOS',    href: '/fr#aboutus'    },
  { label: 'PLATEFORME',  href: '/fr#platform'   },
  { label: 'SERVICES',    href: '/fr#services'   },
  { label: 'RÉSEAU',      href: '/fr#network'    },
  { label: 'ACTUALITÉS',  href: '/fr#insights'   },
  { label: 'CONTACT',     href: '/contact/fr'    },
];

function NavItem({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.7)',
        textDecoration: 'none',
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '0.08em',
        padding: '8px 14px',
        position: 'relative',
        transition: 'color 0.2s',
        display: 'inline-block',
      }}
    >
      {label}
      <span style={{
        position: 'absolute',
        bottom: 0, left: '14px', right: '14px',
        height: '2px',
        background: '#C94010',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.25s ease',
      }} />
    </a>
  );
}

export default function FrLegalPage() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
          HEADER
      ══════════════════════════════════════════════ */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
        background: scrolled || menuOpen ? 'rgba(8,8,8,0.97)' : '#080808',
      }}>
        {/* Top bar */}
        <div className="px-4 md:px-8 lg:px-12" style={{
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          letterSpacing: '0.04em',
          borderBottom: '1px solid rgba(255,255,255,0.09)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <a href="/fr/legal" style={{ fontSize: '12px', letterSpacing: '0.07em', color: 'white', textDecoration: 'none', padding: '0 4px', fontWeight: 600 }}>FR</a>
            <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '11px' }}>|</span>
            <a href="/legal" style={{
              fontSize: '12px', letterSpacing: '0.07em',
              color: 'rgba(255,255,255,0.42)', textDecoration: 'none',
              padding: '0 4px', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}>
              EN
            </a>
          </div>
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.4)' }}>
            <span style={{ fontSize: '11px' }}>Kinshasa · Kolwezi · Bruxelles</span>
          </div>
        </div>

        {/* Main navbar */}
        <div className="px-4 md:px-8 lg:px-12" style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s ease',
        }}>
          <div className="hidden lg:flex items-center" style={{ gap: '36px' }}>
            <button onClick={() => setSearchOpen(o => !o)} aria-label="Rechercher" style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center',
              padding: 0, transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {navItems.map((item) => (
                <NavItem key={item.label} label={item.label} href={item.href} />
              ))}
            </nav>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '4px' }}>
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

          <a href="/fr" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img src="/sgcm-logo.png" alt="SGCM"
              className="object-contain"
              style={{ width: '140px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>

        {/* Search dropdown */}
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
            <input autoFocus={searchOpen} placeholder="Rechercher SGCM..." style={{
              background: 'none', border: 'none', outline: 'none', color: 'white',
              fontSize: '14px', flex: 1, fontFamily: 'inherit',
            }} />
            <button onClick={() => setSearchOpen(false)} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer', fontSize: '18px',
            }}>×</button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col" style={{ background: 'rgba(8,8,8,0.98)', paddingTop: '102px' }}>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none', fontSize: '13px', fontWeight: 500,
                  letterSpacing: '0.18em', textTransform: 'uppercase' as const,
                }}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-6 mt-auto mb-12">
            <a href="/fr/legal" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600 }}>FR</a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <a href="/legal" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em' }}>EN</a>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-3">Juridique</p>
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
            Mentions Légales
          </h1>
          <p className="text-white/40 text-sm mt-3">Dernière mise à jour : 17 avril 2026</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Identification de l&apos;éditeur</h2>
          <p className="text-gray-700 font-medium leading-relaxed mb-4">
            SOCIÉTÉ DE GESTION ET CONSULTATION MINIÈRES SARL (SGCM SARL)
          </p>
          <div className="space-y-2 text-gray-500 leading-relaxed">
            <p>
              <span className="text-gray-700 font-medium">Forme juridique : </span>
              Société à Responsabilité Limitée pluripersonnelle
            </p>
            <p>
              <span className="text-gray-700 font-medium">Siège social : </span>
              644 Immeuble Massamba, 3ème étage, Rond-Point Kin-Mazière, Quartier Commerce,
              Commune de la Gombe, Kinshasa, République Démocratique du Congo
            </p>
            <p><span className="text-gray-700 font-medium">RCCM : </span>CD/KNG/RCCM/26-B-01360</p>
            <p><span className="text-gray-700 font-medium">Identification Nationale : </span>01-B0500-N98100N</p>
            <p><span className="text-gray-700 font-medium">Direction Juridique &amp; Conformité : </span>Monsieur Elvis Mwamba N&apos;Se Sombamanya</p>
            <p>
              <span className="text-gray-700 font-medium">Contact : </span>
              <a href="mailto:legal@sgcm-mining.com" style={{ color: '#C94010', textDecoration: 'none' }}>
                legal@sgcm-mining.com
              </a>
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Hébergement</h2>
          <p className="text-gray-500 leading-relaxed">
            Le site sgcm-mining.com est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, États-Unis d&apos;Amérique.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Propriété intellectuelle</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            L&apos;ensemble des contenus publiés sur ce site, notamment les textes, visuels, le logo
            SGCM, l&apos;architecture du site ainsi que la marque SGCM Certified®, constituent la
            propriété exclusive de SGCM SARL et sont protégés par les lois applicables en matière
            de propriété intellectuelle en République Démocratique du Congo et à l&apos;international.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Toute reproduction, représentation ou diffusion, totale ou partielle, est strictement
            interdite sans autorisation écrite préalable de SGCM SARL.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Limitation de responsabilité</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            SGCM s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur le site mais ne
            peut garantir leur exhaustivité ni leur actualité permanente. Les informations
            fournies ne constituent ni une offre commerciale, ni un engagement contractuel.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            SGCM agit exclusivement en qualité de facilitateur et d&apos;intégrateur de conformité
            dans le cadre de chaînes d&apos;approvisionnement minérales, et non en qualité de trader
            ou d&apos;acheteur/vendeur de minerais pour compte propre.
          </p>
          <p className="text-gray-500 leading-relaxed">
            SGCM décline toute responsabilité quant aux dommages directs ou indirects résultant
            de l&apos;utilisation du site ou de l&apos;impossibilité d&apos;y accéder.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Droit applicable et juridiction</h2>
          <p className="text-gray-500 leading-relaxed">
            Le présent site et les relations qui en découlent sont régis par le droit de la
            République Démocratique du Congo. Tout litige relatif à l&apos;utilisation du site
            sera soumis aux juridictions compétentes de Kinshasa.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Contact</h2>
          <p className="text-gray-500 leading-relaxed">
            Pour toute question relative aux présentes mentions légales :{' '}
            <a href="mailto:legal@sgcm-mining.com" style={{ color: '#C94010', textDecoration: 'none' }}>
              legal@sgcm-mining.com
            </a>
          </p>
        </section>

      </div>

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
              Facilitateur de chaînes d&apos;approvisionnement minérales. Structuration de flux minéraux conformes, traçables et responsables depuis la RDC vers les marchés internationaux.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Kinshasa · Kolwezi · Bruxelles</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Company</p>
            {[['About Us', 'aboutus'], ['Platform', 'platform'], ['Network', 'network'], ['Insights', 'insights']].map(([label, anchor]) => (
              <a key={label} href={`/fr#${anchor}`} className="text-white/40 text-xs hover:text-white transition-colors">{label}</a>
            ))}
            <a href="/fr/careers" className="text-white/40 text-xs hover:text-white transition-colors">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            {['Copper Cathode', 'Gold Supply Chain', 'Compliance', 'Logistics', 'Advisory'].map((item) => (
              <a key={item} href="/fr#services" className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Connect</p>
            <a href="mailto:contact@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">contact@sgcm-mining.com</a>
            <a href="mailto:verify@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">verify@sgcm-mining.com</a>
            {/* TODO: replace with real LinkedIn company page URL (e.g. https://www.linkedin.com/company/sgcm-sarl) */}
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/25 text-xs">Bureau de Kinshasa</span>
            <span className="text-white/25 text-xs">Bureau de Bruxelles</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Legal</p>
            <a href="/fr/privacy" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="/fr/legal" className="text-white/40 text-xs hover:text-white transition-colors">Legal Notice</a>
            <a href="https://sgcm-mining.com/verify" target="_blank" rel="noopener noreferrer"
              className="text-white/70 text-xs hover:text-white transition-colors inline-flex items-center gap-2 mt-2 border border-white/20 px-3 py-2 hover:border-[#C94010] transition-all w-fit">
              <span>Verify a Mandate →</span>
            </a>
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
              <span>RCCM : CD/KNG/RCCM/26-B-01360</span>
              <span className="text-white/20">|</span>
              <span>ID. Nat. : 01-B0500-N98100N</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
