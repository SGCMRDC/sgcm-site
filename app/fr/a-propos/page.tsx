'use client';
import Link from 'next/link';
import { SiteHeader } from '../../../components/SiteHeader';
import { SiteFooter } from '../../../components/SiteFooter';

const HERO_SRC = '/images/about-us-sgcm.webp';

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader variant="light" activeLang="fr" enHref="/about" frHref="/fr/a-propos" activeLabel="À PROPOS" />

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
              alt="Strates géologiques minérales et visualisation de données de la chaîne d'approvisionnement"
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
            <span style={{ color: 'white', letterSpacing: '0.04em', fontSize: 'clamp(13px, 1.6vw, 15px)' }}>À propos de SGCM</span>
          </div>
          <div style={{
            position: 'absolute',
            bottom: 'clamp(48px, 9vh, 118px)',
            left: 'clamp(20px, 4vw, 52px)',
            right: 'clamp(20px, 4vw, 52px)',
            maxWidth: 'min(680px, 86%)',
          }}>
            <h1 style={{ fontWeight: 300, fontSize: 'clamp(34px, 6vw, 66px)', lineHeight: 1.04, letterSpacing: '-0.01em', color: 'white', marginBottom: '20px' }}>
              À propos de SGCM
            </h1>
            <p style={{ fontWeight: 300, fontSize: 'clamp(17px, 2.4vw, 26px)', lineHeight: 1.3, maxWidth: 'min(520px, 92%)', color: 'rgba(255,255,255,0.85)' }}>
              Une approche structurée de la conformité minérale.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(20px, 4vw, 46px)', marginTop: 'clamp(28px, 5vh, 46px)' }}>
              <Link
                href="/fr/programme-crp"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 500, letterSpacing: '0.04em' }}
              >
                Le Programme CRP
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.65)', flexShrink: 0 }}>→</span>
              </Link>
              <Link href="/contact/fr" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.04em' }}>
                → Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* ── CE QUE NOUS FAISONS — white ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '24px' }}>
                  CE QUE NOUS FAISONS
                </p>
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, color: '#0A1628' }}>
                  Ce que nous faisons
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  SGCM est un intégrateur de conformité pour les chaînes d&apos;approvisionnement minérales artisanales. Nous structurons, documentons et validons la conformité des coopératives minières et des opérateurs artisanaux de la République Démocratique du Congo, de la mine au marché international.
                </p>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  SGCM n&apos;achète ni ne vend aucun minerai : nous structurons, documentons et validons. Notre rôle est de produire, maintenir et rendre opposable la preuve de conformité, sans intervenir dans la transaction commerciale ni dans la fixation des prix.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── POURQUOI NOUS LE FAISONS — grey ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)', background: '#f9fafb' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '24px' }}>
                  POURQUOI NOUS LE FAISONS
                </p>
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, color: '#0A1628' }}>
                  Pourquoi nous le faisons
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  Les marchés internationaux de minerais imposent des exigences de traçabilité et de diligence raisonnée sans précédent. Les acheteurs industriels, les raffineurs et les importateurs européens doivent désormais prouver l&apos;origine responsable de leur approvisionnement, sous peine d&apos;exclusion commerciale ou de sanction réglementaire.
                </p>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  Or, la grande majorité de la production artisanale congolaise reste documentée de manière insuffisante pour accéder à ces marchés. L&apos;écart entre la réalité productive du secteur et les exigences formelles des chaînes internationales constitue le problème fondamental auquel SGCM apporte une réponse structurée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMENT NOUS LE FAISONS — white ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '24px' }}>
                  COMMENT NOUS LE FAISONS
                </p>
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, color: '#0A1628' }}>
                  Comment nous le faisons
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  Le Programme CRP, Certified Responsible Partner, est le dispositif opérationnel par lequel SGCM structure, documente et valide la conformité des opérateurs engagés. Il traduit les référentiels internationaux en exigences opérables pour le contexte congolais.
                </p>
                <div style={{ borderLeft: '2px solid #0A1628', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', color: '#0A1628', textTransform: 'uppercase', marginBottom: '8px' }}>01&nbsp;&nbsp;Cartographier</p>
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.78 }}>
                      Identifier les coopératives, les opérateurs, les flux et les risques propres à chaque zone de production.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', color: '#0A1628', textTransform: 'uppercase', marginBottom: '8px' }}>02&nbsp;&nbsp;Vérifier</p>
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.78 }}>
                      Documenter les conditions de production, la traçabilité et les pratiques de gestion selon les standards OCDE, LBMA RGG V9 et ICGLR.
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', color: '#0A1628', textTransform: 'uppercase', marginBottom: '8px' }}>03&nbsp;&nbsp;Valider</p>
                    <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.78 }}>
                      Consolider, analyser et rendre opposable la preuve de conformité, avec une validation humaine et traçable à chaque étape.
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  L&apos;intelligence artificielle accélère le traitement et la classification de la documentation sans se substituer à la validation humaine. Chaque décision reste traçable, attribuable et auditable.
                </p>
                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.78 }}>
                  La certification au sens réglementaire demeure la prérogative du Centre d&apos;Expertise, d&apos;Évaluation et de Certification (CEEC), du Service d&apos;Assistance et d&apos;Encadrement de l&apos;Exploitation Minière Artisanale et à Petite Échelle (SAEMAPE) et du Ministère des Mines. SGCM prépare et sécurise la substance sur laquelle ces autorités fondent leurs décisions, sans jamais se substituer à elles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SGCM EN BREF — grey ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)', background: '#f9fafb' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '56px' }}>
              SGCM EN BREF
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
              {[
                { label: 'Constituée en',           value: '2026',                         sub: 'Kinshasa, RDC'                       },
                { label: 'Identifiants légaux',      value: 'RCCM CD/KNG/RCCM/26-B-01360', sub: 'ID. Nat. 01-B0500-N98100N'          },
                { label: 'Présence opérationnelle',  value: 'Kinshasa · Bruxelles',         sub: null                                  },
                { label: 'Référentiels',             value: '4 référentiels',               sub: 'OCDE · LBMA RGG V9 · ICGLR · CEEC' },
                { label: 'Rôle',                     value: 'Intégrateur de conformité',    sub: 'Jamais négociant, ni acheteur, ni vendeur' },
                { label: 'Marque',                   value: 'SGCM Certified™',              sub: 'Marque et programme propriétaires'   },
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

        {/* ── NOTRE PERSPECTIVE — white ── */}
        <section style={{ padding: 'clamp(64px, 9vw, 112px) clamp(16px, 5vw, 70px)' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '24px' }}>
                  NOTRE PERSPECTIVE
                </p>
                <h2 style={{ fontWeight: 300, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, color: '#0A1628' }}>
                  Notre perspective
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  La conformité minérale n&apos;est pas une contrainte administrative : c&apos;est la condition de la confiance. Sans preuve, sans traçabilité, sans documentation opposable, les productions artisanales congolaises restent exclues des chaînes d&apos;approvisionnement responsables, quelle que soit la réalité de leurs pratiques.
                </p>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  SGCM a été constitué pour combler cet écart. Nous partons d&apos;un constat simple : le secteur artisanal congolais dispose d&apos;un potentiel productif considérable, mais manque d&apos;une infrastructure documentaire capable de le rendre lisible pour les marchés internationaux. C&apos;est cette infrastructure que nous construisons.
                </p>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
                  Notre perspective est celle de la durabilité documentaire : une conformité maintenue dans le temps, vérifiable à tout moment, qui s&apos;améliore avec les pratiques. Pas une attestation ponctuelle, mais un état documenté, parce que la confiance se construit acte par acte, preuve par preuve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION · VISION · PRÉSENCE · DOMAINES — navy ── */}
        <section style={{ padding: 'clamp(56px, 8vw, 96px) clamp(16px, 5vw, 70px)', background: '#0A1628' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', marginBottom: '12px' }}>MISSION</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                  Structurer la conformité des chaînes minérales artisanales de la RDC, de la mine au marché international, par la documentation, la traçabilité et la validation.
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', marginBottom: '12px' }}>VISION</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                  Un secteur artisanal congolais reconnu, tracé et intégré aux chaînes d&apos;approvisionnement responsables qui alimentent les industries mondiales.
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', marginBottom: '12px' }}>PRÉSENCE</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                  Kinshasa (RDC) et Bruxelles (Belgique)
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', marginBottom: '12px' }}>DOMAINES</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                  Intégration de conformité · Programme CRP · Cadre de conformité · Traçabilité · Conseil institutionnel
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <SiteFooter lang="fr" />
    </main>
  );
}
