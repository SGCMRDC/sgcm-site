'use client';
import Link from 'next/link';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

// Hero image pending confirmation — navy placeholder until a path is set.
// Replace HERO_SRC with the confirmed image path to activate the hero image.
const HERO_SRC = '';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader variant="light" activeLang="en" enHref="/about" frHref="/fr/a-propos" activeLabel="ABOUT US" />

      <div style={{ display: 'flow-root' }}>

        {/* ── HERO ── */}
        <div
          style={{
            marginTop: '150px',
            marginLeft: 'clamp(16px, 5vw, 70px)',
            marginRight: 'clamp(16px, 5vw, 70px)',
            borderRadius: '18px',
            overflow: 'hidden',
            background: '#0A1628',
            height: 'clamp(460px, 64vh, 740px)',
            position: 'relative',
          }}
        >
          {HERO_SRC && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={HERO_SRC}
              alt="About SGCM"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'linear-gradient(180deg, rgba(10,22,40,.65) 0%, rgba(10,22,40,.18) 38%, rgba(10,22,40,.88) 100%)',
            }}
          />
          <div style={{ position: 'absolute', top: 'clamp(22px, 4vh, 46px)', left: 'clamp(20px, 4vw, 52px)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/symbol_SGCM-5.png" alt="SGCM" style={{ height: 'clamp(34px, 4.5vw, 48px)', width: 'auto' }} />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px' }}>›</span>
            <span style={{ color: 'white', letterSpacing: '0.04em', fontSize: 'clamp(13px, 1.6vw, 15px)' }}>About SGCM</span>
          </div>
          <div style={{
            position: 'absolute',
            bottom: 'clamp(48px, 9vh, 118px)',
            left: 'clamp(20px, 4vw, 52px)',
            right: 'clamp(20px, 4vw, 52px)',
            maxWidth: 'min(680px, 86%)',
          }}>
            <h1 style={{ fontWeight: 300, fontSize: 'clamp(34px, 6vw, 66px)', lineHeight: 1.04, letterSpacing: '-0.01em', color: 'white', marginBottom: '20px' }}>
              About SGCM
            </h1>
            <p style={{ fontWeight: 300, fontSize: 'clamp(17px, 2.4vw, 26px)', lineHeight: 1.3, maxWidth: 'min(520px, 92%)', color: 'rgba(255,255,255,0.85)' }}>
              A structured approach to mineral compliance.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(20px, 4vw, 46px)', marginTop: 'clamp(28px, 5vh, 46px)' }}>
              <Link
                href="/programme-crp"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '0.04em' }}
              >
                The CRP Programme
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.65)', flexShrink: 0 }}>→</span>
              </Link>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.04em' }}>
                → Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* ── WHAT WE DO — white ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '24px' }}>
                  WHAT WE DO
                </p>
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, color: '#0A1628' }}>
                  What we do
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  SGCM is a compliance integrator for artisanal mineral supply chains. We structure, document and validate the compliance of mining cooperatives and artisanal operators in the Democratic Republic of the Congo, from the mine to the international market.
                </p>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  SGCM neither buys nor sells any mineral: we structure, document and validate. Our role is to produce, maintain and make enforceable the proof of compliance, not to intervene in the commercial transaction or in price setting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY WE DO IT — grey ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)', background: '#f9fafb' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '24px' }}>
                  WHY WE DO IT
                </p>
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, color: '#0A1628' }}>
                  Why we do it
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  International mineral markets impose unprecedented traceability and due diligence requirements. Industrial buyers, refiners and European importers must now prove the responsible origin of their supply, at the risk of commercial exclusion or regulatory sanction.
                </p>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  Yet the vast majority of Congolese artisanal production remains inadequately documented to access these markets. The gap between the productive reality of the sector and the formal requirements of international chains is the fundamental problem to which SGCM provides a structured response.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE DO IT — white ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '24px' }}>
                  HOW WE DO IT
                </p>
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, color: '#0A1628' }}>
                  How we do it
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  The CRP Programme, Certified Responsible Partner, is the operational framework through which SGCM structures, documents and validates the compliance of engaged operators. It translates international standards into operable requirements for the Congolese context.
                </p>
                <div style={{ borderLeft: '2px solid #0A1628', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', color: '#0A1628', textTransform: 'uppercase', marginBottom: '8px' }}>01&nbsp;&nbsp;Map</p>
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.78 }}>
                      Identify cooperatives, operators, flows and risks specific to each production zone.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', color: '#0A1628', textTransform: 'uppercase', marginBottom: '8px' }}>02&nbsp;&nbsp;Verify</p>
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.78 }}>
                      Document production conditions, traceability chains and management practices against OECD, LBMA RGG V9 and ICGLR standards.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', color: '#0A1628', textTransform: 'uppercase', marginBottom: '8px' }}>03&nbsp;&nbsp;Validate</p>
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.78 }}>
                      Consolidate, analyse and make enforceable the proof of compliance, with human and traceable validation at each step.
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  Artificial intelligence accelerates the processing and classification of documentation without replacing human validation. Each decision remains traceable, attributable and auditable.
                </p>
                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.78 }}>
                  Certification in the regulatory sense remains the prerogative of the Centre for Expertise, Evaluation and Certification (CEEC), the Service for Assistance and Oversight of Artisanal and Small-Scale Mining (SAEMAPE) and the Ministry of Mines. SGCM prepares and secures the substance on which these authorities base their decisions, without ever substituting for them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SGCM AT A GLANCE — grey ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)', background: '#f9fafb' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '56px' }}>
              SGCM AT A GLANCE
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
              {[
                { label: 'Incorporated in',     value: '2026',                         sub: 'Kinshasa, DRC'                        },
                { label: 'Legal identifiers',    value: 'RCCM CD/KNG/RCCM/26-B-01360', sub: 'ID. Nat. 01-B0500-N98100N'           },
                { label: 'Operational presence', value: 'Kinshasa · Brussels',          sub: null                                   },
                { label: 'Reference standards',  value: '4 frameworks',                 sub: 'OECD · LBMA RGG V9 · ICGLR · CEEC'  },
                { label: 'Role',                 value: 'Compliance integrator',        sub: 'Never trader, buyer or seller'        },
                { label: 'Brand',                value: 'SGCM Certified™',              sub: 'Proprietary brand and programme'      },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '8px' }}>{item.label}</p>
                  <p style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 500, color: '#0A1628', lineHeight: 1.2, marginBottom: '4px' }}>{item.value}</p>
                  {item.sub && <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.55 }}>{item.sub}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR PERSPECTIVE — white ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '24px' }}>
                  OUR PERSPECTIVE
                </p>
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, color: '#0A1628' }}>
                  Our perspective
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  Mineral compliance is not an administrative constraint: it is the condition of trust. Without proof, without traceability, without enforceable documentation, Congolese artisanal production remains excluded from responsible supply chains, whatever the reality of its practices.
                </p>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  SGCM was established to close this gap. We start from a simple observation: the Congolese artisanal sector has considerable productive potential, but lacks a documentary infrastructure capable of making it legible to international markets. That infrastructure is what we are building.
                </p>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  Our perspective is one of documentary sustainability: compliance maintained over time, verifiable at any moment, improving with practices. Not a one-off attestation, but a documented state, because trust is built act by act, proof by proof.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION · VISION · PRESENCE · DOMAINS — navy ── */}
        <section style={{ padding: 'clamp(56px, 8vw, 96px) clamp(16px, 5vw, 70px)', background: '#0A1628' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', marginBottom: '12px' }}>MISSION</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                  Structuring compliance in artisanal mineral supply chains from the DRC, from mine to international market, through documentation, traceability and validation.
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', marginBottom: '12px' }}>VISION</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                  A Congolese artisanal sector recognised, traced and integrated into the responsible supply chains that supply global industries.
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', marginBottom: '12px' }}>PRESENCE</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                  Kinshasa (DRC) and Brussels (Belgium)
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', marginBottom: '12px' }}>DOMAINS</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                  Compliance integration · CRP Programme · Compliance framework · Traceability · Institutional advisory
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <SiteFooter lang="en" />
    </main>
  );
}
