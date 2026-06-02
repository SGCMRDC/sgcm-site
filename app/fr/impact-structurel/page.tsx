'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../../components/SiteHeader';
import { ProgramPage } from '../../../components/ProgramPage';

export default function ImpactStructurelPageFR() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="fr" enHref="/impact-structurel" frHref="/fr/impact-structurel" />

      <ProgramPage
        breadcrumbLabel="Impact Structurel"
        title="Impact Structurel"
        baseline="Une conformité documentée, vérifiable et durable, au service d'un secteur transformé."
        heroImage="/images/IMPACT-STRUCTUREL.png"
        heroLink1={{ label: 'Notre impact', href: '#standard' }}
        heroLink2={{ label: '→ Le programme CRP', href: '/fr/programme-crp' }}
        bodyEyebrow="DÉCOUVRIR L'IMPACT"
        lede="L'Impact Structurel désigne la transformation durable que le programme CRP produit dans le secteur minier artisanal. Au delà de la conformité ponctuelle, il installe une infrastructure de preuve qui formalise les opérateurs, sécurise la traçabilité et ancre la production congolaise dans les chaînes d'approvisionnement responsables."
        subsections={[
          {
            eyebrow: 'UNE CONFORMITÉ DURABLE',
            text: "La diligence raisonnable n'est pas un contrôle isolé mais un processus continu d'amélioration. Le cadre établit un système de gestion, de documentation et de suivi qui perdure dans le temps et qui élève progressivement les pratiques des coopératives engagées. La conformité devient un état entretenu, vérifiable à tout moment, plutôt qu'une attestation figée.",
          },
          {
            eyebrow: 'LA FORMALISATION DU SECTEUR',
            text: "En structurant et en documentant ce qui demeurait dispersé, le programme fait passer des opérateurs informels au statut de partenaires reconnus. Cette formalisation ouvre l'accès aux marchés exigeants, renforce la sécurité juridique des coopératives et consolide leur place dans une filière organisée.",
          },
          {
            eyebrow: 'UNE VALEUR POUR LA RÉPUBLIQUE DÉMOCRATIQUE DU CONGO',
            text: "La traçabilité des flux et la lisibilité documentaire renforcent la visibilité du secteur pour l'État, conditions d'une meilleure captation de valeur. À l'heure où l'Union européenne et les grands acheteurs font de l'origine responsable un critère d'accès, le cadre consolide la position de la production congolaise dans des chaînes d'approvisionnement de plus en plus scrutées.",
          },
          {
            eyebrow: 'LA TRAÇABILITÉ COMME ACTIF',
            text: "La preuve établie ne se perd pas. Documentée et conservée, elle peut être publiée vers les standards internationaux de traçabilité sous la forme d'un passeport numérique de produit, SGCM en demeurant le système de référence interne. La donnée de conformité devient un actif durable, lisible par les marchés et opposable dans le temps.",
          },
          {
            eyebrow: 'UN IMPACT RESPONSABLE',
            text: "Le programme structure, documente et valide. Il prépare une matière sur laquelle les autorités compétentes fondent leurs décisions, sans jamais se substituer à leur rôle ni intervenir dans la transaction. L'impact recherché est durable et responsable : faire de la rigueur documentaire un levier de développement pour le secteur et pour le pays.",
          },
        ]}
        cards={[
          {
            title: 'Une conformité durable',
            body: "Un système de preuve entretenu dans le temps, vérifiable à tout moment, plutôt qu'une attestation figée.",
            href: '#',
          },
          {
            title: 'La formalisation du secteur',
            body: "Des opérateurs informels devenus partenaires reconnus, avec un accès consolidé aux marchés exigeants.",
            href: '#',
          },
          {
            title: 'Une valeur nationale',
            body: "Traçabilité des flux et lisibilité documentaire au service de la captation de valeur pour la RDC.",
            href: '#',
          },
        ]}
      />

      <footer className="bg-[#0A1628] text-white px-6 md:px-12 pt-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
              <Image src="/sgcm-logo.png" alt="SGCM" width={100} height={32} className="h-8 w-auto mb-4" />
              <p className="text-white/40 text-xs leading-relaxed max-w-[200px]">
                Société de Gestion et Consultation Minières.<br />Kinshasa · Kolwezi · Brussels.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">Programmes</p>
              <ul className="space-y-2">
                {['Programme CRP', 'Cadre de Conformité', 'Intégration Traçabilité', 'Vérification des Partenaires', 'Conseil Institutionnel'].map(item => (
                  <li key={item}><Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">À Propos</p>
              <ul className="space-y-2">
                {['Mission', 'Vision', 'Présence'].map(item => (
                  <li key={item}><Link href="/fr/#aboutus" className="text-white/50 text-sm hover:text-white transition-colors">{item}</Link></li>
                ))}
                <li><Link href="/fr/careers" className="text-white/50 text-sm hover:text-white transition-colors">Carrières</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">Contact</p>
              <ul className="space-y-2">
                <li><a href="mailto:contact@sgcm-mining.com" className="text-white/50 text-sm hover:text-white transition-colors">contact@sgcm-mining.com</a></li>
                <li><a href="mailto:verify@sgcm-mining.com" className="text-white/50 text-sm hover:text-white transition-colors">verify@sgcm-mining.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-white/25 text-xs">© {new Date().getFullYear()} SGCM · Société de Gestion et Consultation Minières</p>
            <div className="flex gap-6">
              <Link href="/fr/privacy" className="text-white/25 text-xs hover:text-white/50 transition">Confidentialité</Link>
              <Link href="/fr/legal" className="text-white/25 text-xs hover:text-white/50 transition">Juridique</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
