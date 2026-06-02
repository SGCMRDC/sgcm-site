'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../../components/SiteHeader';
import { ProgramPage } from '../../../components/ProgramPage';

export default function ProgrammeCRPPageFR() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="fr" enHref="/programme-crp" frHref="/fr/programme-crp" />

      <ProgramPage
        breadcrumbLabel="Programme CRP"
        title="Programme CRP"
        baseline="Structurer la conformité. Documenter la preuve. Valider l'éligibilité."
        heroImage="/images/CRP-WEB.png"
        heroLink1={{ label: 'Le standard CRP', href: '#standard' }}
        heroLink2={{ label: '→ Le cadre de conformité', href: '/fr/cadre-de-conformite' }}
        bodyEyebrow="DÉCOUVRIR LE PROGRAMME"
        lede="Le programme CRP, pour Certified Responsible Partner, établit le standard selon lequel une coopérative minière artisanale est structurée, documentée et validée pour intégrer les chaînes d'approvisionnement responsables. Il constitue le socle de conformité qui relie la production de terrain aux exigences des marchés internationaux."
        subsections={[
          {
            eyebrow: 'POURQUOI LE CRP',
            text: "La demande mondiale en minerais critiques s'accompagne d'une exigence sans précédent de traçabilité et de diligence raisonnable. Acheteurs industriels, raffineries et importateurs doivent aujourd'hui prouver l'origine responsable de leurs approvisionnements, sous l'effet du Guide OCDE, du Responsible Gold Guidance du LBMA et du Règlement (UE) 2017/821. Sans cadre de conformité robuste, une production légitime demeure exclue de ces marchés. Le CRP répond à cet écart en transformant la conformité en un actif vérifiable.",
          },
          {
            eyebrow: 'NOTRE AMBITION',
            text: "Le programme vise à faire de chaque coopérative engagée un partenaire éligible, traçable et reconnu. L'objectif n'est pas de contrôler la filière mais de lui donner les moyens de sa crédibilité : une documentation normalisée, une évaluation rigoureuse des risques et une preuve de conformité opposable aux interlocuteurs les plus exigeants.",
          },
          {
            eyebrow: "À QUI S'ADRESSE LE CRP",
            text: "Le programme s'adresse aux coopératives et aux entités de production artisanale qui recherchent l'accès aux marchés responsables. En aval, il parle aux raffineries accréditées, aux importateurs européens, aux groupes industriels et aux institutions financières qui conditionnent leurs engagements à la diligence raisonnable. En République Démocratique du Congo, il offre aux autorités compétentes un appui structuré au suivi et à la formalisation du secteur.",
          },
          {
            eyebrow: 'NOTRE APPROCHE',
            text: "Le CRP s'appuie sur une infrastructure numérique de conformité. La documentation, l'évaluation des risques et la validation y sont conduites de manière systématique, l'intelligence artificielle accélérant le traitement tout en préservant l'exigence d'une validation humaine et traçable. La conformité établie peut ensuite être publiée vers les standards internationaux de traçabilité, SGCM en conservant le système de référence. La certification, au sens réglementaire, demeure la prérogative des autorités congolaises compétentes ; le CRP en prépare et en sécurise la matière.",
          },
          {
            eyebrow: 'UNE PORTÉE NATIONALE ET INTERNATIONALE',
            text: "En formalisant l'économie minière artisanale, le CRP renforce la visibilité fiscale et la traçabilité des flux, conditions d'une meilleure captation de valeur pour la RDC. Il consolide la place du pays dans des chaînes d'approvisionnement de plus en plus scrutées, à l'heure où l'Union européenne et les grands acheteurs industriels font de l'origine durable un critère d'accès. Plus que la conformité, le programme porte une ambition : ancrer la production congolaise dans les marchés mondiaux par la preuve, et faire de la rigueur documentaire un levier de développement.",
          },
        ]}
        cards={[
          {
            title: "De l'informel au formel",
            body: "SGCM relie l'économie minière artisanale aux exigences des marchés responsables, transformant des opérateurs informels en partenaires éligibles, traçables et reconnus.",
            href: '#',
          },
          {
            title: 'Aux standards du monde',
            body: 'Aligné sur la diligence raisonnable OCDE en cinq étapes, le LBMA RGG V9, la CIRGL et le Règlement UE 2017/821. Une conformité documentée, vérifiable et défendable.',
            href: '#',
          },
          {
            title: 'Conçu pour les exigences internationales',
            body: "En intégrant l'IA à la documentation, SGCM répond aux standards mondiaux et accélère le traitement des dossiers. Cette capacité offre aux institutions congolaises un outil de cartographie et de suivi des coopératives.",
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
              <p className="text-[11px] font-medium tracking-widests uppercase text-white/30 mb-4">Contact</p>
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
