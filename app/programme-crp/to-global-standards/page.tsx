import { ArticleLayout } from '../../../components/ArticleLayout';

export const metadata = {
  title: 'International due diligence standards for minerals | SGCM',
  description: 'The architecture of due diligence standards governing access to international mineral markets.',
};

export default function Page() {
  return (
    <ArticleLayout
      lang="en"
      eyebrow={`Regulatory framework`}
      title={`International due diligence standards for minerals`}
      intro={`Access to international markets for minerals no longer depends on product quality alone. It depends on an architecture of due diligence standards that has grown denser over the past decade. For any production from sensitive areas, the DRC included, understanding this architecture is not a theoretical exercise, it is the precondition for commercial eligibility.`}
      sections={[
        { heading: `The foundation: the OECD Guidance and its five steps`, paragraphs: [
          `The whole construction rests on a founding text, the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. It sets out a five-step framework that has become the universal reference: establishing strong management systems, identifying and assessing the risks in the chain, designing a strategy to respond to those risks, having an independent third-party audit carried out, and reporting publicly. The European Regulation indeed requires importers to follow this five-step framework established by the OECD. The standards that follow do not reinvent this foundation, they translate it into specific regulatory or sectoral contexts.`,
        ]},
        { heading: `The regulatory translation: EU Regulation 2017/821`, paragraphs: [
          `EU Regulation 2017/821 turns these principles into a binding legal obligation. In force since June 2017, it has applied on a binding basis since 1 January 2021, imposing a duty of due diligence on European importers of tin, tantalum, tungsten and gold, the so-called 3TG minerals. It requires companies to ensure they import these minerals and metals only from responsible sources. The Commission maintains and updates an indicative list of conflict-affected and high-risk areas, and its framework continues to evolve. The first review of its functioning was adopted on 24 September 2024, and on 16 October 2025 the Commission recognised, for the first time, a due diligence scheme as equivalent to the Regulation's requirements.`,
        ]},
        { heading: `A new generation of texts: the Critical Raw Materials Act`, paragraphs: [
          `The regulatory architecture keeps expanding. The Critical Raw Materials Act, EU Regulation 2024/1252, entered into force on 23 May 2024 to secure Europe's supply of critical and strategic raw materials. Beyond its capacity targets, it carries a logic that is decisive for producing countries. The Commission may recognise certification schemes addressing the sustainability of critical raw materials, and the Union pursues strategic partnerships with third countries, notably to support their own economic development. The European market is thus being built as a standard-based market, where respecting recognised frameworks becomes the condition of access. To this is added a broader wave, from the European Battery Regulation and its digital product passport to corporate due diligence obligations, which is generalising the requirement of traceability across the chain.`,
        ]},
        { heading: `The refiners' requirement: the LBMA Responsible Gold Guidance`, paragraphs: [
          `For gold, the market's reference standard is the LBMA Responsible Gold Guidance. Its version 9, finalised in November 2021, structures the responsible sourcing requirements of every refiner producing Good Delivery bars, and remains aligned with the OECD five-step framework. The requirement is tangible. Every refiner on the Good Delivery List must undergo, every twelve months, an independent third-party audit, and any failure may lead to removal from the List. From 1 January 2026, refiners must additionally disclose publicly the identity of the refiner and the local exporter in so-called red-flag locations, a sign of a transparency requirement that strengthens year after year.`,
        ]},
        { heading: `The regional dimension: the ICGLR mechanism`, paragraphs: [
          `At the scale of the Great Lakes, the ICGLR's regional certification mechanism completes this framework. It aims to trace and certify the region's minerals in order to exclude conflict financing, and forms a regional link consistent with the requirements of the OECD and the European Union. For the DRC, it represents the regional anchoring of a requirement that has become global.`,
        ]},
        { heading: `Standards, the backbone of credibility`, paragraphs: [
          `If these frameworks converge, it is because they fulfil a common function, turning a statement into a verifiable fact. Without a standard, a claim rests only on the word of the one making it, which opens the door to greenwashing. A good standard defines what must be measured and reported, how the supply chain must be managed, and what an independent auditor must verify. This is what makes a claim comparable, checkable and defensible. To this logic is added that of the digital product passport, promoted notably by the European Battery Regulation. Where the standard creates trust in the data, the passport ensures its visibility across the chain, from the extraction site to the final product.`,
        ]},
        { heading: `A convergence towards proof`, paragraphs: [
          `These standards are not competing, they converge. All require the same thing in different forms, documented, verifiable and auditable due diligence. This convergence also calls for interoperability. As supply chains are global, international initiatives seek to make traceability systems communicate with one another, so that they speak across borders rather than operating in silos. This is precisely the reading that guides SGCM. Mastering this architecture is not optional for Congolese production, it is the grammar of its market access. Certification of origin, in the regulatory sense, remains the prerogative of the competent Congolese authorities. The role of a compliance integrator is to prepare and secure its substance, so that documentary rigour becomes a lever for access, and not an obstacle.`,
        ]},
      ]}
      related={[
        { label: `From informal to formal`, href: `/programme-crp/from-informal-to-formal` },
        { label: `Built for international requirements`, href: `/programme-crp/built-for-international-requirements` },
      ]}
      enHref={`/programme-crp/to-global-standards`}
      frHref={`/fr/programme-crp/vers-les-standards-mondiaux`}
    />
  );
}
