'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { label: 'À PROPOS',   href: '/fr/#aboutus'  },
  { label: 'PLATEFORME', href: '/fr/#platform'  },
  { label: 'SERVICES',   href: '/fr/#services'  },
  { label: 'RÉSEAU',     href: '/fr/#network'   },
  { label: 'ACTUALITÉS', href: '/fr/#insights'  },
  { label: 'CONTACT',    href: '/contact/fr'    },
];

function NavItem({ label, href, active, onClick }: { label: string; href: string; active?: boolean; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: active ? 'white' : hovered ? 'white' : 'rgba(255,255,255,0.7)',
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
        transform: hovered || active ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.25s ease',
      }} />
    </a>
  );
}

export default function ContactPageFr() {
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
            <a href="/contact/fr" style={{ fontSize: '12px', letterSpacing: '0.07em', color: 'white', textDecoration: 'none', padding: '0 4px', fontWeight: 600 }}>FR</a>
            <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '11px' }}>|</span>
            <a href="/contact" style={{
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
          background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s ease',
        }}>
          {/* Desktop nav */}
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
                <NavItem key={item.label} label={item.label} href={item.href} active={item.href === '/contact/fr'} />
              ))}
            </nav>
          </div>

          {/* Mobile hamburger */}
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
            <input autoFocus={searchOpen} placeholder="Rechercher sur SGCM…" style={{
              background: 'none', border: 'none', outline: 'none', color: 'white',
              fontSize: '14px', flex: 1,
            }} />
            <button onClick={() => setSearchOpen(false)} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer', fontSize: '18px',
            }}>×</button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col" style={{ background: 'rgba(8,8,8,0.98)', paddingTop: '102px' }}>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                style={{
                  color: item.href === '/contact/fr' ? 'white' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none', fontSize: '13px',
                  fontWeight: item.href === '/contact/fr' ? 600 : 500,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-6 mt-auto mb-12">
            <a href="/contact/fr" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600 }}>FR</a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <a href="/contact" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em' }}>EN</a>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <div className="relative h-64 sm:h-80 md:h-[520px] overflow-hidden flex items-end" style={{ marginTop: '102px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.88) 40%, rgba(0,0,0,0.3) 100%), url("/SGCM Electrorefining plant.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative z-10 px-6 md:px-12 pb-8 md:pb-16 max-w-2xl">
          <p style={{ color: '#C94010', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px]"
            style={{ fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '20px' }}>
            Contactez<br />SGCM
          </h1>
          <p className="hidden md:block" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '480px' }}>
            Que vous soyez acheteur industriel, producteur certifié ou partenaire institutionnel — notre équipe est prête à accompagner vos besoins en matière de facilitation et de conformité.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENU
      ══════════════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Informations bureau */}
        <section className="pt-12 md:pt-16">
          <div className="flex justify-between items-center pb-6 border-b border-gray-200">
            <h2 className="text-2xl md:text-[28px]" style={{ fontWeight: 400 }}>SGCM — Bureau de Kinshasa</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-10 md:py-12 border-b border-gray-200">
            <div className="md:pr-12 md:border-r md:border-gray-200">
              <p style={{ color: '#C94010', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Siège social</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#111', marginBottom: '8px' }}>SGCM</p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75, marginBottom: '16px' }}>Kinshasa, République Démocratique du Congo</p>
              <a href="mailto:contact@sgcm-mining.com" style={{ display: 'block', color: '#C94010', fontSize: '13px', fontWeight: 600, textDecoration: 'none', marginBottom: '8px' }}>
                ✉ contact@sgcm-mining.com
              </a>
              <a href="mailto:verify@sogecom-mining.com" style={{ display: 'block', color: '#555', fontSize: '12px', textDecoration: 'none' }}>
                verify@sogecom-mining.com
              </a>
            </div>
            <div className="md:px-12 md:border-r md:border-gray-200">
              <p style={{ color: '#C94010', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Liens rapides</p>
              {['À propos de SGCM', 'Notre écosystème commercial', 'Standard SGCM Certified™'].map((item) => (
                <a key={item} href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#111', textDecoration: 'none', marginBottom: '12px' }}>
                  <span style={{ color: '#C94010' }}>→</span>{item}
                </a>
              ))}
            </div>
            <div className="md:pl-12">
              <p style={{ color: '#C94010', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Nous suivre</p>
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Portail de vérification', href: 'https://sogecom-mining.com/verify' },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#111', textDecoration: 'none', marginBottom: '12px' }}>
                  <span style={{ color: '#C94010' }}>→</span>{item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Départements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-12 md:py-14 border-b border-gray-200">
          {[
            { title: 'Communication & Partenariats', desc: 'Pour toute demande presse, communication institutionnelle ou proposition de partenariat, contactez directement notre équipe communication.', email: 'contact@sogecom-mining.com' },
            { title: 'Commercial & Relations acheteurs', desc: 'Pour toute demande commerciale, discussion offtake ou intégration acheteur, contactez directement notre équipe commerciale.', email: 'contact@sgcm-mining.com' },
            { title: 'Conformité & Documentation', desc: 'Pour la vérification de mandat, les demandes de documentation KYC ou les questions relatives au standard SGCM Certified™, utilisez notre canal de vérification dédié.', email: 'verify@sogecom-mining.com' },
          ].map((dept, i) => (
            <div key={dept.title} className={`${i > 0 ? 'md:pl-12' : ''} ${i < 2 ? 'md:pr-12 md:border-r md:border-gray-200' : ''}`}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#111', marginBottom: '12px', paddingBottom: '12px', borderBottom: '2px solid #C94010', display: 'inline-block' }}>{dept.title}</p>
              <p style={{ fontSize: '13px', lineHeight: 1.75, color: '#555', marginBottom: '12px', marginTop: '8px' }}>{dept.desc}</p>
              <a href={`mailto:${dept.email}`} style={{ fontSize: '12px', fontWeight: 600, color: '#C94010', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Envoyer une demande →
              </a>
            </div>
          ))}
        </div>

        {/* Carrières */}
        <div className="py-12 md:py-14 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
            <div>
              <p style={{ color: '#C94010', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Carrières</p>
              <h3 style={{ fontSize: '24px', fontWeight: 400, color: '#111', marginBottom: '12px' }}>Rejoignez l'équipe SGCM</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7 }}>SGCM accepte actuellement les candidatures de professionnels congolais engagés dans la construction de chaînes d'approvisionnement minérales responsables et transparentes en RDC.</p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Chargé(e) de conformité & documentation', location: 'Kinshasa, RDC · Temps plein' },
                { title: 'Coordinateur(trice) de chaîne d\'approvisionnement', location: 'Kinshasa / Kolwezi, RDC · Temps plein' },
                { title: 'Spécialiste logistique & export', location: 'Kinshasa, RDC · Temps plein' },
              ].map((job) => (
                <div key={job.title} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-5 border border-gray-200">
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#111', marginBottom: '4px' }}>{job.title}</p>
                    <p style={{ fontSize: '12px', color: '#555' }}>{job.location}</p>
                  </div>
                  <a href={`mailto:contact@sgcm-mining.com?subject=Candidature: ${job.title}`}
                    className="shrink-0"
                    style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C94010', textDecoration: 'none', border: '1px solid #C94010', padding: '8px 16px' }}>
                    Postuler
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="bg-[#0a0a0a] text-white mt-16 md:mt-[72px]">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-2">
            <img src="/sgcm-logo.png" alt="SGCM"
              className="object-contain"
              style={{ width: '220px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
            <p style={{ marginTop: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: '1.7' }}>
              Facilitateur de chaînes d'approvisionnement minérales. Structurer des flux minéraux conformes, traçables et responsables depuis la RDC vers les marchés internationaux.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Kinshasa · Kolwezi · Bruxelles</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Entreprise</p>
            {[
              { label: 'À propos',   href: '/fr/#aboutus' },
              { label: 'Plateforme', href: '/fr/#platform' },
              { label: 'Réseau',     href: '/fr/#network' },
              { label: 'Actualités', href: '/fr/#insights' },
              { label: 'Carrières',  href: '#' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-white/40 text-xs hover:text-white transition-colors">{item.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            {['Cathode de cuivre', 'Chaîne or', 'Conformité', 'Logistique', 'Conseil'].map((item) => (
              <a key={item} href="/fr/#services" className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Contact</p>
            <a href="mailto:contact@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">contact@sgcm-mining.com</a>
            <a href="mailto:verify@sogecom-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">verify@sogecom-mining.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/25 text-xs">Bureau de Kinshasa</span>
            <span className="text-white/25 text-xs">Bureau de Bruxelles</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#C94010] text-xs font-semibold uppercase tracking-widest mb-2">Juridique</p>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="https://sogecom-mining.com/verify" target="_blank" rel="noopener noreferrer"
              className="text-white/70 text-xs hover:text-white transition-colors inline-flex items-center gap-2 mt-2 border border-white/20 px-3 py-2 hover:border-[#C94010] transition-all w-fit">
              <span>Vérifier un mandat →</span>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white/25 text-xs">© 2026 Société de Gestion et Consultation Minières. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/25 text-xs hover:text-white transition-colors">Confidentialité</a>
              <span className="text-white/10">|</span>
              <a href="#" className="text-white/25 text-xs hover:text-white transition-colors">Juridique</a>
              <span className="text-white/10">|</span>
              <span className="text-white/25 text-xs">SGCM Certified™</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
