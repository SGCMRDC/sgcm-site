'use client';
import { SiteHeader } from '../../../components/SiteHeader';

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
      <footer className="bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-2">
            <img src="/sgcm-logo.png" alt="SGCM"
              className="object-contain"
              style={{ width: '220px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
            <p style={{ marginTop: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: '1.7' }}>
              Intégrateur de conformité pour des chaînes d'approvisionnement minérales responsables. Structurer la documentation, la traçabilité et l'alignement réglementaire depuis la RDC vers les marchés internationaux.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Kinshasa · Kolwezi · Bruxelles</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Entreprise</p>
            {[['À propos', 'aboutus'], ['Plateforme', 'platform'], ['Réseau', 'network'], ['Actualités', 'insights']].map(([label, anchor]) => (
              <a key={label} href={`/fr#${anchor}`} className="text-white/40 text-xs hover:text-white transition-colors">{label}</a>
            ))}
            <a href="/fr/careers" className="text-white/40 text-xs hover:text-white transition-colors">Carrières</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            {['Programme CRP', 'Cadre de Conformité', 'Intégration Traçabilité', 'Vérification des Partenaires', 'Conseil Institutionnel'].map((item) => (
              <a key={item} href="/fr#services" className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Contact</p>
            <a href="mailto:contact@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">contact@sgcm-mining.com</a>
            <a href="mailto:verify@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">verify@sgcm-mining.com</a>
            {/* TODO: replace with real LinkedIn company page URL (e.g. https://www.linkedin.com/company/sgcm-sarl) */}
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/25 text-xs">Bureau de Kinshasa</span>
            <span className="text-white/25 text-xs">Bureau de Bruxelles</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Juridique</p>
            <a href="/fr/privacy" className="text-white/40 text-xs hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="/fr/legal" className="text-white/40 text-xs hover:text-white transition-colors">Mentions légales</a>
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
