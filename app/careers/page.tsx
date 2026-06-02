'use client';
import { SiteHeader } from '../../components/SiteHeader';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={true} activeLang="en" enHref="/careers" frHref="/fr/careers" activeLabel="" />

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Join SGCM</p>
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
            Careers
          </h1>
          <p className="text-white/40 text-sm mt-3">Building responsible mineral supply chains from the DRC</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px', height: '64px',
          border: '1px solid rgba(26,31,44,0.2)',
          marginBottom: '32px',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
          </svg>
        </div>

        <h2 className="text-2xl md:text-3xl text-gray-900 mb-6" style={{ fontWeight: 300 }}>
          Opportunities Coming Soon
        </h2>
        <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
          SGCM is growing its team of specialists in mineral supply chain compliance, traceability,
          due diligence, and advisory services across the DRC and international markets.
        </p>
        <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
          We are not currently advertising open positions, but we welcome unsolicited applications
          from motivated professionals who share our commitment to responsible and compliant
          mineral sourcing.
        </p>

        <div style={{
          borderTop: '1px solid #f0f0f0',
          paddingTop: '40px',
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5F5E5A] mb-4">Send your application</p>
          <a
            href="mailto:careers@sgcm-mining.com"
            style={{
              display: 'inline-block',
              background: '#0A1628',
              color: 'white',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              padding: '14px 32px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0D1F36')}
            onMouseLeave={e => (e.currentTarget.style.background = '#0A1628')}
          >
            careers@sgcm-mining.com
          </a>
        </div>

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
              Compliance integrator for responsible mineral supply chains. Structuring documentation, traceability, and regulatory alignment from the DRC to international markets.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Kinshasa · Kolwezi · Brussels</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Company</p>
            {['About Us', 'Platform', 'Network', 'Insights'].map((item) => (
              <a key={item} href={`/#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
            <a href="/careers" className="text-white/40 text-xs hover:text-white transition-colors">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            {['CRP Program', 'Compliance Framework', 'Traceability Integration', 'Partner Verification', 'Institutional Advisory'].map((item) => (
              <a key={item} href="/#services" className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
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
