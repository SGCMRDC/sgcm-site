'use client';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useHideOnScroll } from './useHideOnScroll';

const NAV_EN = [
  { label: 'ABOUT US',  href: '/#aboutus'  },
  { label: 'PLATFORM',  href: '/#platform' },
  { label: 'SERVICES',  href: '/#services' },
  { label: 'INSIGHTS',  href: '/#insights' },
  { label: 'CONTACT',   href: '/contact'   },
];

const NAV_FR = [
  { label: 'À PROPOS',   href: '/fr/#aboutus'  },
  { label: 'PLATEFORME', href: '/fr/#platform' },
  { label: 'SERVICES',   href: '/fr/#services' },
  { label: 'ACTUALITÉS', href: '/fr/#insights' },
  { label: 'CONTACT',    href: '/contact/fr'   },
];

export interface SiteHeaderProps {
  variant?: 'light' | 'dark';
  activeLang?: 'fr' | 'en';
  frHref?: string;
  enHref?: string;
  activeLabel?: string;
  /** dark only: true = always solid #1F2937, false = transparent→solid on scroll */
  solid?: boolean;
}

export function SiteHeader({
  variant = 'light',
  activeLang = 'fr',
  frHref = '/fr',
  enHref = '/',
  activeLabel,
  solid = false,
}: SiteHeaderProps) {
  const navItems = activeLang === 'en' ? NAV_EN : NAV_FR;
  const effectiveActiveLabel = activeLabel !== undefined ? activeLabel : (activeLang === 'en' ? 'PLATFORM' : 'PLATEFORME');
  const logoHref = activeLang === 'en' ? '/' : '/fr';
  const isLight = variant === 'light';
  const city2 = activeLang === 'fr' ? 'Bruxelles' : 'Brussels';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const hidden = useHideOnScroll();
  const headerHidden = hidden && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  useEffect(() => { setMounted(true); }, []);

  // ── COLOR TOKENS ──────────────────────────────
  const topBarBorder  = isLight ? '1px solid rgba(0,0,0,0.07)'       : '1px solid rgba(255,255,255,0.09)';
  const locationsColor = isLight ? 'rgba(31,41,55,0.5)'              : 'rgba(255,255,255,0.42)';
  const dotColor       = isLight ? 'rgba(0,0,0,0.15)'                : 'rgba(255,255,255,0.20)';
  const pinStroke      = isLight ? 'rgba(31,41,55,0.4)'              : 'rgba(255,255,255,0.35)';
  const langActive     = isLight ? '#1F2937'                          : 'white';
  const langInactive   = isLight ? 'rgba(31,41,55,0.45)'             : 'rgba(255,255,255,0.42)';
  const divider        = isLight ? 'rgba(0,0,0,0.2)'                 : 'rgba(255,255,255,0.18)';
  const hamburgerColor = isLight ? '#1F2937'                          : 'white';
  const navBase        = isLight ? '#1F2937'                          : 'rgba(255,255,255,0.7)';

  // ── HEADER BACKGROUND ─────────────────────────
  let headerBg: string;
  if (isLight) {
    headerBg = 'rgba(255,255,255,1)';
  } else if (solid) {
    headerBg = scrolled ? 'rgba(31,41,55,0.97)' : '#1F2937';
  } else {
    headerBg = scrolled || menuOpen
      ? 'rgba(31,41,55,0.97)'
      : 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.0) 100%)';
  }

  const boxShadow = isLight
    ? (scrolled ? '0 1px 0 rgba(0,0,0,0.09)' : '0 1px 0 rgba(0,0,0,0.06)')
    : (scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none');

  const closeLabel = activeLang === 'en' ? 'Close menu' : 'Fermer le menu';
  const openLabel  = activeLang === 'en' ? 'Open menu'  : 'Ouvrir le menu';

  return (
  <>
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: headerBg,
      boxShadow,
      transform: headerHidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: reducedMotion
        ? 'background 0.4s ease, box-shadow 0.3s ease'
        : 'background 0.4s ease, box-shadow 0.3s ease, transform 0.3s ease',
      willChange: 'transform',
    }}>
      {/* Dark non-solid: mobile gets solid before scroll threshold via overlay */}
      {!isLight && !solid && (
        <div
          className={`absolute inset-0 transition-colors duration-200 pointer-events-none ${scrolled || menuOpen ? 'bg-[#1F2937] lg:bg-transparent' : 'bg-transparent'}`}
          aria-hidden="true"
        />
      )}

      {/* TOP BAR */}
      <div style={{
        height: scrolled ? '0' : '38px',
        opacity: scrolled ? 0 : 1,
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: scrolled ? 'none' : topBarBorder,
        paddingLeft: 'clamp(16px, 5vw, 70px)',
        paddingRight: 'clamp(16px, 5vw, 70px)',
        transition: 'height 0.25s ease, opacity 0.2s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Link href={frHref} style={{
            fontSize: '12px', letterSpacing: '0.07em', textDecoration: 'none', padding: '0 4px',
            color: activeLang === 'fr' ? langActive : langInactive,
            fontWeight: activeLang === 'fr' ? 600 : 400,
          }}>FR</Link>
          <span style={{ color: divider, fontSize: '11px' }}>|</span>
          <Link href={enHref} style={{
            fontSize: '12px', letterSpacing: '0.07em', textDecoration: 'none', padding: '0 4px',
            color: activeLang === 'en' ? langActive : langInactive,
            fontWeight: activeLang === 'en' ? 600 : 400,
          }}>EN</Link>
        </div>
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '6px', fontSize: '12px', color: locationsColor, letterSpacing: '0.07em' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={pinStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Kinshasa</span>
          <span style={{ color: dotColor }}>·</span>
          <span>Kolwezi</span>
          <span style={{ color: dotColor }}>·</span>
          <span>{city2}</span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div style={{
        height: scrolled ? '64px' : '108px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingLeft: 'clamp(16px, 5vw, 70px)',
        paddingRight: 'clamp(16px, 5vw, 70px)',
        position: 'relative', zIndex: 1,
        transition: 'height 0.25s ease',
      }}>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: '2px' }}>
          {navItems.map(item => {
            const isActive = effectiveActiveLabel !== '' && item.label === effectiveActiveLabel;
            return (
              <Link key={item.label} href={item.href} style={{
                fontSize: '12px', letterSpacing: '0.07em', textDecoration: 'none',
                padding: '8px 14px', display: 'inline-flex', alignItems: 'center',
                color: isActive ? '#ff7f2a' : navBase,
                fontWeight: isActive ? 600 : 500,
                borderBottom: isActive ? '2px solid #ff7f2a' : '2px solid transparent',
                transition: 'color 0.18s, border-color 0.18s',
              }}>{item.label}</Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? closeLabel : openLabel}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: hamburgerColor, padding: '4px' }}
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
        <Link href={logoHref} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src="/sgcm-logo.png"
            alt="SGCM"
            style={{
              height: scrolled ? '40px' : 'clamp(60px, 8vw, 80px)', width: 'auto',
              filter: isLight ? 'none' : 'brightness(0) invert(1)',
              transition: 'height 0.25s ease',
            }}
          />
        </Link>
      </div>

    </header>

    {mounted && menuOpen && createPortal(
      <div
        className="lg:hidden"
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: '#0A1628',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* X close button */}
        <button
          onClick={closeMenu}
          aria-label={closeLabel}
          style={{
            position: 'absolute', top: '18px', right: 'clamp(16px, 5vw, 70px)',
            background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '4px',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Nav links */}
        <nav
          style={{
            flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto',
            paddingTop: '134px', paddingLeft: 'clamp(16px, 5vw, 70px)', paddingRight: 'clamp(16px, 5vw, 70px)',
          }}
        >
          {navItems.map(item => {
            const isActive = effectiveActiveLabel !== '' && item.label === effectiveActiveLabel;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                style={{
                  fontSize: '22px', fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#ff7f2a' : 'white',
                  padding: '18px 0', textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  letterSpacing: '0.03em',
                }}
              >{item.label}</Link>
            );
          })}
        </nav>

        {/* Bottom: FR/EN + locations */}
        <div style={{ marginTop: 'auto', paddingLeft: 'clamp(16px, 5vw, 70px)', paddingRight: 'clamp(16px, 5vw, 70px)', paddingBottom: '48px' }}>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '20px', marginBottom: '12px',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <Link href={frHref} onClick={closeMenu} style={{
              color: activeLang === 'fr' ? 'white' : 'rgba(255,255,255,0.4)',
              fontWeight: activeLang === 'fr' ? 600 : 400,
              textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em',
            }}>FR</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link href={enHref} onClick={closeMenu} style={{
              color: activeLang === 'en' ? 'white' : 'rgba(255,255,255,0.4)',
              fontWeight: activeLang === 'en' ? 600 : 400,
              textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em',
            }}>EN</Link>
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.07em' }}>
            Kinshasa · Kolwezi · {city2}
          </div>
        </div>
      </div>,
      document.body
    )}
  </>
  );
}
