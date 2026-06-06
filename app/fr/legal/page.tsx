'use client';
import { SiteHeader } from '../../../components/SiteHeader';
import { SiteFooter } from '../../../components/SiteFooter';

export default function FrLegalPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={true} activeLang="fr" enHref="/legal" frHref="/fr/legal" activeLabel="" />

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Juridique</p>
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
              <a href="mailto:legal@sgcm-mining.com" style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
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
            <a href="mailto:legal@sgcm-mining.com" style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              legal@sgcm-mining.com
            </a>
          </p>
        </section>

      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <SiteFooter lang="fr" />

    </main>
  );
}
