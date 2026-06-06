'use client';
import { SiteHeader } from '../../../components/SiteHeader';
import { SiteFooter } from '../../../components/SiteFooter';

export default function FrPrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={true} activeLang="fr" enHref="/privacy" frHref="/fr/privacy" activeLabel="" />

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Juridique</p>
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
            Politique de Confidentialité
          </h1>
          <p className="text-white/40 text-sm mt-3">Dernière mise à jour : 17 avril 2026</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Introduction</h2>
          <p className="text-gray-500 leading-relaxed">
            SGCM SARL accorde la plus haute importance à la protection des données personnelles
            de ses visiteurs, partenaires et contreparties. La présente politique décrit les
            conditions dans lesquelles SGCM collecte, utilise et protège les informations
            recueillies via le site sgcm-mining.com.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Responsable du traitement</h2>
          <p className="text-gray-700 font-medium leading-relaxed mb-3">
            SOCIÉTÉ DE GESTION ET CONSULTATION MINIÈRES SARL (SGCM SARL)
          </p>
          <div className="space-y-1 text-gray-500 leading-relaxed">
            <p>
              Siège social : 644 Immeuble Massamba, 3ème étage, Rond-Point Kin-Mazière,
              Quartier Commerce, Commune de la Gombe, Kinshasa, République Démocratique du Congo
            </p>
            <p>RCCM : CD/KNG/RCCM/26-B-01360</p>
            <p>Identification Nationale : 01-B0500-N98100N</p>
          </div>
          <p className="text-gray-500 leading-relaxed mt-4">
            Contact conformité :{' '}
            <a href="mailto:compliance@sgcm-mining.com" style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              compliance@sgcm-mining.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Données collectées</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            SGCM est susceptible de collecter les catégories de données suivantes :
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Formulaires de contact (nom, adresse email, société, message)
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Données de navigation (cookies techniques, logs serveur)
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Documents transmis dans le cadre de processus de due diligence
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Finalités du traitement</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Réponse aux demandes d&apos;information et de partenariat
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Processus de Due Diligence SGCM Certified®
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Conformité aux obligations légales applicables (OCDE, LBMA, LME, CRMA, Code Minier RDC)
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Amélioration du site et de ses services
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Base légale</h2>
          <p className="text-gray-500 leading-relaxed">
            Les traitements sont fondés sur l&apos;exécution de mesures précontractuelles, le respect
            des obligations légales applicables à SGCM, et l&apos;intérêt légitime de SGCM dans
            l&apos;exploitation d&apos;une activité de facilitation de chaînes d&apos;approvisionnement
            minérales conforme aux réglementations en vigueur.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Destinataires</h2>
          <p className="text-gray-500 leading-relaxed">
            Les données sont traitées exclusivement par la Direction Juridique et Conformité de
            SGCM. Lorsque la loi applicable ou le périmètre d&apos;un processus de conformité
            spécifique l&apos;exige, les données peuvent être transmises aux autorités régulatrices
            compétentes (notamment le CENAREF, les organes désignés par l&apos;OCDE, ou toute autre
            institution habilitée) dans le strict cadre légal applicable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Durée de conservation</h2>
          <p className="text-gray-500 leading-relaxed">
            Les données personnelles sont conservées conformément aux obligations du Code Minier
            de la République Démocratique du Congo et aux standards OCDE applicables. Les dossiers
            de due diligence sont conservés pendant une durée minimale de cinq ans à compter de
            la dernière transaction ou de la fin de la relation d&apos;affaires.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Droits des personnes concernées</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Conformément à la réglementation applicable en matière de protection des données,
            vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition
            et de portabilité de vos données personnelles. Vous disposez également d&apos;un droit
            à la limitation du traitement dans certaines circonstances.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Pour exercer l&apos;un de ces droits, veuillez adresser votre demande à :{' '}
            <a href="mailto:compliance@sgcm-mining.com" style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              compliance@sgcm-mining.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Cookies</h2>
          <p className="text-gray-500 leading-relaxed">
            Ce site utilise uniquement des cookies techniques, strictement nécessaires à son
            bon fonctionnement. Aucun cookie de suivi marketing ou publicitaire n&apos;est déployé
            à ce stade.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Modifications de la politique</h2>
          <p className="text-gray-500 leading-relaxed">
            SGCM se réserve le droit de modifier la présente politique à tout moment afin de
            refléter les évolutions réglementaires ou opérationnelles applicables. La date de
            dernière mise à jour affichée en haut de cette page fait foi.
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
