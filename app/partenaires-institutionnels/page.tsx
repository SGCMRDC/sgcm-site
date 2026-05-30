'use client';
import Image from 'next/image';
import Link from 'next/link';
import { LightHeader } from '../../components/LightHeader';
import { ProgramPage } from '../../components/ProgramPage';

export default function PartenairesInstitutionnelsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <LightHeader />

      {/* ══════════════════════════════════════════════
          PAGE CONTENT
          ══════════════════════════════════════════════ */}
      <ProgramPage
        breadcrumbLabel="Partenaires Institutionnels"
        title="Partenaires Institutionnels"
        baseline="Relier les institutions, les opérateurs et les marchés autour d'une même preuve de conformité."
        heroImage="/kin-rdc-sgcm.jpg"
        heroLink1={{ label: 'Notre écosystème', href: '#standard' }}
        heroLink2={{ label: '→ Le cadre de conformité', href: '/cadre-de-conformite' }}
        bodyEyebrow="DÉCOUVRIR L'ÉCOSYSTÈME"
        lede="SGCM offre une interface unique et coordonnée entre les régulateurs congolais, les opérateurs miniers et les acheteurs internationaux. En réunissant ces acteurs autour d'une conformité documentée et partagée, SGCM facilite le dialogue et la confiance, chacun conservant pleinement son rôle et son autorité."
        subsections={[
          {
            eyebrow: 'LES INSTITUTIONS CONGOLAISES',
            text: "Le dispositif s'articule avec les services compétents de l'État. Le Centre d'Expertise, d'Évaluation et de Certification, le Service d'Assistance et d'Encadrement de l'Exploitation Minière Artisanale et à Petite Échelle, et le Ministère des Mines exercent les missions d'encadrement, d'évaluation et de certification que leur confère le Code minier de 2018. SGCM leur apporte un appui structuré au suivi et à la formalisation du secteur, sans jamais se substituer à leur autorité.",
          },
          {
            eyebrow: 'LES RÉFÉRENTIELS INTERNATIONAUX',
            text: "La crédibilité du cadre repose sur son alignement avec les standards qui font autorité dans l'approvisionnement responsable. Le Guide OCDE sur le devoir de diligence, le Responsible Gold Guidance du LBMA et le mécanisme régional de certification de la Conférence Internationale sur la Région des Grands Lacs constituent les références sur lesquelles la conformité est construite et rendue lisible.",
          },
          {
            eyebrow: "LES ACTEURS DE L'AVAL",
            text: "Raffineries accréditées, importateurs européens soumis au Règlement (UE) 2017/821, groupes industriels et institutions financières attendent une assurance d'origine vérifiable. SGCM leur fournit une conformité documentée et opposable, sans jamais intervenir dans la transaction commerciale ni dans la fixation des prix.",
          },
          {
            eyebrow: 'LA TRAÇABILITÉ INTERNATIONALE',
            text: "La conformité établie peut être publiée vers les standards internationaux de traçabilité, sous la forme d'un passeport numérique de produit. SGCM en demeure le système de référence interne, garantissant la continuité de la preuve depuis la production jusqu'à sa lecture par les marchés.",
          },
          {
            eyebrow: 'UN RÔLE DE COORDINATION',
            text: "SGCM relie, structure et documente. Le programme ne se substitue à aucun de ses partenaires. Il fournit l'infrastructure commune qui permet aux institutions d'exercer leur mandat, aux opérateurs de prouver leur conformité, et aux marchés d'accorder leur confiance, autour d'une même source de vérité.",
          },
        ]}
        cards={[
          {
            title: 'Les institutions congolaises',
            body: "CEEC, SAEMAPE et Ministère des Mines, dans l'exercice de leurs missions d'encadrement et de certification.",
            href: '#',
          },
          {
            title: 'Les standards internationaux',
            body: "OCDE, LBMA et CIRGL, références sur lesquelles repose la lisibilité de la conformité.",
            href: '#',
          },
          {
            title: "Les marchés de l'aval",
            body: "Raffineries, importateurs, industriels et financiers, destinataires d'une assurance d'origine vérifiable.",
            href: '#',
          },
        ]}
      />

      {/* ══════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════ */}
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
                  <li key={item}>
                    <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">À Propos</p>
              <ul className="space-y-2">
                {['Mission', 'Vision', 'Présence'].map(item => (
                  <li key={item}>
                    <Link href="/fr/#aboutus" className="text-white/50 text-sm hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/fr/careers" className="text-white/50 text-sm hover:text-white transition-colors">Carrières</Link>
                </li>
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
