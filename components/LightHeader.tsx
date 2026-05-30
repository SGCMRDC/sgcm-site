'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useHideOnScroll } from './useHideOnScroll';

const NAV_ITEMS = [
  { label: 'À PROPOS',   href: '/fr/#aboutus'  },
  { label: 'PLATEFORME', href: '/fr/#platform'  },
  { label: 'SERVICES',   href: '/fr/#services'  },
  { label: 'RÉSEAU',     href: '/fr/#network'   },
  { label: 'ACTUALITÉS', href: '/fr/#insights'  },
  { label: 'CONTACT',    href: '/contact/fr'    },
];

interface LightHeaderProps {
  activeLabel?: string;
}

export function LightHeader({ activeLabel = 'PLATEFORME' }: LightHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,1)',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.09)' : '0 1px 0 rgba(0,0,0,0.06)',
        transform: headerHidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: reducedMotion
          ? 'box-shadow 0.3s ease'
          : 'box-shadow 0.3s ease, transform 0.3s ease',
        willChange: 'transform',
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
          {NAV_ITEMS.map(item => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontSize: '12px', letterSpacing: '0.07em', textDecoration: 'none',
                padding: '8px 14px', display: 'inline-flex', alignItems: 'center',
                color: item.label === activeLabel ? '#ff7f2a' : '#1F2937',
                fontWeight: item.label === activeLabel ? 600 : 500,
                borderBottom: item.label === activeLabel ? '2px solid #ff7f2a' : '2px solid transparent',
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
            {NAV_ITEMS.map(item => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '18px', fontWeight: item.label === activeLabel ? 600 : 400,
                  color: item.label === activeLabel ? '#ff7f2a' : '#1F2937',
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
  );
}
