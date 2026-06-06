'use client';
import { SiteHeader } from '../../../components/SiteHeader';
import { SiteFooter } from '../../../components/SiteFooter';


export default function FrCareersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={true} activeLang="fr" enHref="/careers" frHref="/fr/careers" activeLabel="" />

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Rejoignez SGCM</p>
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
            Carrières
          </h1>
          <p className="text-white/40 text-sm mt-3">Construire des chaînes d&apos;approvisionnement minérales responsables depuis la RDC</p>
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
          Opportunités à venir
        </h2>
        <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
          SGCM développe son équipe de spécialistes en conformité des chaînes d&apos;approvisionnement
          minérales, traçabilité, diligence raisonnable et services de conseil à travers la RDC
          et les marchés internationaux.
        </p>
        <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
          Nous ne publions pas de postes ouverts pour le moment, mais nous encourageons les
          candidatures spontanées de professionnels motivés qui partagent notre engagement
          en faveur d&apos;un approvisionnement minéral responsable et conforme.
        </p>

        <div style={{
          borderTop: '1px solid #f0f0f0',
          paddingTop: '40px',
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5F5E5A] mb-4">Envoyer votre candidature</p>
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
      <SiteFooter lang="fr" />

    </main>
  );
}
