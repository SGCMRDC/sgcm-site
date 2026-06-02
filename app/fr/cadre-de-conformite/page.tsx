'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../../components/SiteHeader';
import { ProgramPage } from '../../../components/ProgramPage';

export default function CadreDeConformitePageFR() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="fr" enHref="/cadre-de-conformite" frHref="/fr/cadre-de-conformite" />

      <ProgramPage
        breadcrumbLabel="Cadre de Conformité"
        title="Cadre de Conformité"
        baseline="Aligner la production congolaise sur les standards mondiaux de diligence raisonnable."
        heroImage="/images/CADRE-CONFORMITE.png"
        heroLink1={{ label: 'Les standards de référence', href: '#standard' }}
        heroLink2={{ label: '→ Le programme CRP', href: '/fr/programme-crp' }}
        bodyEyebrow="DÉCOUVRIR LE CADRE"
        lede="Le Cadre de Conformité constitue le référentiel sur lequel repose le programme CRP. Il traduit les standards internationaux de diligence raisonnable en exigences opérables pour les opérateurs miniers de la République Démocratique du Congo, et établit la méthode par laquelle la conformité est structurée, documentée et validée tout au long de la chaîne."
        subsections={[
          {
            eyebrow: 'UN SOCLE DE STANDARDS RECONNUS',
            text: "Le cadre s'appuie sur les principaux référentiels qui gouvernent aujourd'hui l'approvisionnement responsable en minerais. Le Guide OCDE sur le devoir de diligence en constitue la référence centrale. Il est complété par le Responsible Gold Guidance du LBMA dans sa neuvième version, par le mécanisme régional de certification de la Conférence Internationale sur la Région des Grands Lacs, et par le Règlement (UE) 2017/821 applicable depuis 2021 aux importateurs de l'Union. À l'échelle nationale, il s'articule avec le Code minier de 2018 et l'encadrement des services compétents de l'État congolais.",
          },
          {
            eyebrow: 'LA DILIGENCE RAISONNABLE EN CINQ ÉTAPES',
            text: "La méthode de l'OCDE structure l'ensemble du dispositif. Elle repose sur cinq étapes : l'établissement d'un système de gestion solide, l'identification et l'évaluation des risques dans la chaîne d'approvisionnement, la conception et la mise en œuvre d'une stratégie de réponse, la conduite d'un audit indépendant par un tiers aux points identifiés, et la publication d'un rapport régulier sur la diligence exercée. Cette approche fondée sur le risque vaut pour tous les acteurs, de la production à l'utilisateur final.",
          },
          {
            eyebrow: 'DE LA NORME À LA PREUVE',
            text: "Le Cadre de Conformité transforme ces exigences en preuve. La provenance, les conditions de production, le transport et les parties prenantes sont documentés selon un format normalisé qui établit la chaîne de traçabilité. Les risques propres aux zones de conflit ou à haut risque sont cartographiés et traités. L'intelligence artificielle accélère le traitement et le classement de cette documentation, tandis que la validation demeure humaine et traçable, conformément au principe qui gouverne l'ensemble du dispositif.",
          },
          {
            eyebrow: 'UNE CONFORMITÉ OPPOSABLE',
            text: "Pour les acteurs de l'aval, raffineries accréditées, importateurs européens soumis à leurs seuils réglementaires, groupes industriels et institutions financières, le cadre produit une conformité documentée, vérifiable et défendable. Il offre une assurance d'origine alignée sur les attentes des marchés les plus exigeants et sur les schémas de diligence reconnus à l'échelle internationale.",
          },
          {
            eyebrow: 'ALIGNEMENT ET RESPONSABILITÉ',
            text: "Le Cadre de Conformité aligne, structure et documente. Il prépare la matière sur laquelle les autorités compétentes fondent leurs décisions. La certification, au sens réglementaire, demeure leur prérogative. SGCM en garantit la rigueur, la traçabilité et la lisibilité, sans jamais se substituer à l'autorité de l'État ni intervenir dans la transaction commerciale.",
          },
        ]}
        cards={[
          {
            title: 'Les standards de référence',
            body: 'OCDE, LBMA RGG V9, CIRGL et Règlement UE 2017/821 réunis en un référentiel unique, articulé avec le Code minier 2018.',
            href: '#',
          },
          {
            title: 'La diligence en cinq étapes',
            body: 'Du système de gestion au rapport public, le processus fondé sur le risque qui gouverne chaque dossier.',
            href: '#',
          },
          {
            title: 'Une preuve opposable',
            body: 'Une chaîne de traçabilité documentée et vérifiable, défendable devant les acheteurs comme devant les régulateurs.',
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
