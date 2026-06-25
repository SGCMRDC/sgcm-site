'use client';
import { SiteHeader } from '../../../components/SiteHeader';
import { ProgramPage } from '../../../components/ProgramPage';
import { SiteFooter } from '../../../components/SiteFooter';

export default function PartenairesInstitutionnelsPageFR() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="fr" enHref="/partenaires-institutionnels" frHref="/fr/partenaires-institutionnels" />

      <ProgramPage
        breadcrumbLabel="Partenaires Institutionnels"
        title="Partenaires Institutionnels"
        baseline="Relier les institutions, les opérateurs et les marchés autour d'une même preuve de conformité."
        heroImage="/kin-rdc-sgcm.webp"
        heroLink1={{ label: 'Notre écosystème', href: '#standard' }}
        heroLink2={{ label: '→ Le cadre de conformité', href: '/fr/cadre-de-conformite' }}
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
      />

      <SiteFooter lang="fr" />
    </main>
  );
}
