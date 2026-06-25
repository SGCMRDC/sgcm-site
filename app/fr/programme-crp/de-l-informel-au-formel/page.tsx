import { ArticleLayout } from '../../../../components/ArticleLayout';

export const metadata = {
  title: "De l'informel au formel | SGCM",
  description: "Comprendre l'economie miniere artisanale en RDC, de la subsistance a la formalisation.",
};

export default function Page() {
  return (
    <ArticleLayout
      lang="fr"
      breadcrumbLabel={`De l'informel au formel`}
      eyebrow={`Cadre économique`}
      title={`De l'informel au formel : comprendre l'économie minière artisanale en RDC`}
      intro={`L'exploitation minière artisanale n'est pas un phénomène marginal en République Démocratique du Congo. Elle constitue l'un des piliers de l'économie réelle du pays. Selon la Banque mondiale, l'activité fait vivre environ dix millions de personnes en RDC et représente dix à vingt pour cent de la production minière nationale. Elle est le deuxième secteur d'emploi du pays après l'agriculture. Comprendre cette économie, c'est comprendre les conditions de vie de millions de foyers et les enjeux de toute une filière placée sous une observation internationale croissante.`}
      sections={[
        { heading: `Une économie de subsistance, et d'opportunité`, paragraphs: [
          `L'exploitation artisanale se développe d'abord là où les alternatives économiques manquent. Les barrières à l'entrée sont faibles, l'activité résiste aux situations de fragilité, et elle génère souvent des revenus supérieurs à ceux de l'agriculture de subsistance. Les minerais concernés sont principalement l'or, le coltan, la cassitérite et le cobalt, dans des provinces comme l'Ituri, le Sud-Kivu, le Maniema ou l'ancien Katanga. Cette réalité explique pourquoi la question minière artisanale est indissociable des politiques de développement, de stabilité et de gouvernance en RDC.`,
        ]},
        { heading: `Un cadre légal de formalisation`, paragraphs: [
          `La formalisation n'est pas une idée abstraite, elle repose sur un cadre juridique précis. Le Code minier de 2018 définit l'exploitant artisanal selon des critères stricts. Il doit être une personne majeure de nationalité congolaise, titulaire d'une carte d'exploitant artisanal valide, membre d'une coopérative minière et travaillant au sein d'une zone d'exploitation artisanale. Ces zones, dites ZEA, sont en principe établies là où l'exploitation industrielle ou semi-industrielle n'est pas possible.`,
          `L'architecture institutionnelle qui encadre cette activité est clairement répartie. Le SAEMAPE assure l'assistance et l'encadrement technique des exploitants artisanaux et des coopératives sur le site minier, tandis que le Cadastre minier enregistre les titres dans la base nationale. La Division provinciale des Mines gère le quotidien du secteur, et le CEEC intervient sur l'évaluation et la certification. La coopérative agréée est la structure légale autour de laquelle s'organise le passage de l'informel au formel. Elle doit notamment être enregistrée, affectée à une ZEA, et à jour de ses taxes et redevances.`,
        ]},
        { heading: `L'écart entre le droit et le terrain`, paragraphs: [
          `Connaître le cadre, c'est aussi en mesurer les limites. La promesse de formalisation est ancienne, l'État s'y était déjà engagé en 2002. Or, plus de vingt ans plus tard, sa traduction concrète reste partielle. L'allocation des zones d'exploitation artisanale prévue par le Code de 2018 pour le cuivre et le cobalt ne s'est pas matérialisée à l'échelle attendue, et de nombreux gisements de valeur demeurent attribués aux opérateurs industriels. Beaucoup d'exploitants continuent donc de travailler en marge du cadre légal, faute d'espace formalisé accessible. Cet écart entre le texte et la réalité de terrain est précisément ce qui rend la question de la traçabilité et de la preuve documentaire aussi déterminante.`,
        ]},
        { heading: `Inclure, plutôt qu'exclure`, paragraphs: [
          `Une crainte légitime accompagne la montée de ces exigences, celle que les standards ne favorisent que les grands opérateurs industriels et n'excluent de fait l'exploitation artisanale. Or, un système de traçabilité bien conçu peut produire l'effet inverse. Plutôt que d'écarter les exploitants artisanaux, il peut les intégrer, et leur ouvrir par là même un chemin vers la formalisation et un meilleur accès au marché. Pour une économie où l'exploitation artisanale est une source de revenus majeure, l'enjeu n'est pas de choisir entre conformité et inclusion, mais de concevoir la conformité comme un outil d'inclusion.`,
          `L'inclusion suppose une approche progressive. Pour un petit opérateur, la conformité ne s'atteint pas d'un seul coup, elle commence par des étapes maîtrisables. Concentrer d'abord les efforts sur les risques les plus graves, comme le travail des enfants ou les conditions de travail dangereuses. S'appuyer sur des coopératives et des initiatives collectives pour ne pas porter seul cette charge. Commencer par une documentation rigoureuse et une bonne tenue des registres avant d'envisager des outils plus sophistiqués. La formalisation est un chemin que l'on parcourt par étapes, non un seuil que l'on franchit d'un coup.`,
        ]},
        { heading: `Une formalisation aux conditions congolaises`, paragraphs: [
          `Cette exigence soulève une question d'appropriation. De nombreux pays producteurs africains défendent l'idée qu'ils devraient jouer un rôle plus fort dans la manière dont les standards de durabilité s'appliquent à leur secteur minier, car beaucoup de ces référentiels ont été conçus en dehors des régions où les minerais sont extraits. L'enjeu est de trouver l'équilibre, entre des cadres internationaux qui garantissent la traçabilité et la responsabilité, et une flexibilité régionale qui reflète les réalités locales et les priorités de développement du pays. La formalisation la plus solide n'est pas celle qui est subie, mais celle qui est portée depuis le terrain congolais.`,
        ]},
        { heading: `La preuve comme condition d'accès`, paragraphs: [
          `Le passage de l'informel au formel ne se décrète pas, il se documente. Pour qu'une production artisanale soit reconnue par des marchés exigeants, il ne suffit pas qu'elle soit licite, encore faut-il pouvoir l'établir, de manière vérifiable et auditable. La conformité documentaire transforme une activité de subsistance en participation reconnue à une chaîne d'approvisionnement responsable.`,
          `C'est la conviction qui guide SGCM. La formalisation n'a de valeur durable que si elle est étayée par une preuve solide et opposable. La certification d'origine, au sens réglementaire, demeure la prérogative des autorités congolaises compétentes. Le rôle d'un intégrateur de conformité n'est pas de s'y substituer, mais d'en préparer et d'en sécuriser la substance, afin que la production congolaise puisse s'ancrer durablement dans les marchés mondiaux par la rigueur, et non malgré l'informalité.`,
        ]},
      ]}
      related={[
        { label: `Vers les standards mondiaux`, href: `/fr/programme-crp/vers-les-standards-mondiaux` },
        { label: `Pour les exigences internationales`, href: `/fr/programme-crp/pour-les-exigences-internationales` },
      ]}
      enHref={`/programme-crp/from-informal-to-formal`}
      frHref={`/fr/programme-crp/de-l-informel-au-formel`}
    />
  );
}
