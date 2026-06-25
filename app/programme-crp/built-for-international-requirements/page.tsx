import { ArticleLayout } from '../../../components/ArticleLayout';

export const metadata = {
  title: 'Responsible origin, the new condition of market access | SGCM',
  description: 'Why proof of responsible origin has become a condition of access to international markets.',
};

export default function Page() {
  return (
    <ArticleLayout
      lang="en"
      eyebrow={`Market access`}
      title={`Responsible origin, the new condition of market access`}
      intro={`For a long time, the responsible origin of a mineral was a matter of voluntary commitment, a reputational argument more than an enforceable requirement. That era is over. Under the combined effect of European regulation and refiners' requirements, proof of origin has become a condition of market access. Not being able to establish it means seeing the doors of the most demanding supply chains gradually close.`}
      sections={[
        { heading: `A regulatory shift`, paragraphs: [
          `The turning point is first legal. Since 1 January 2021, European importers are legally required to ensure that the minerals they buy come from responsible sources. This obligation is not limited to a statement of principle, it presupposes management systems, an assessment of risks linked to conflict-affected and high-risk areas, an independent audit and public communication. Due diligence is no longer a virtue, it is a verifiable obligation.`,
        ]},
        { heading: `Pressure from downstream`, paragraphs: [
          `The most structuring mechanism lies in the way this requirement propagates upstream. European importers must identify the smelters and refiners present in their chain and verify that they apply sound due diligence practices. Nor can they stop at their direct supplier, they must trace the chain back to their suppliers' suppliers. In turn, refiners on the LBMA Good Delivery List may only sell metal on the market whose responsible sourcing is established, on pain of removal from the List. Step by step, the requirement descends to the production site. Production that cannot document its origin becomes a risk the chain seeks to set aside.`,
        ]},
        { heading: `A standard-based market`, paragraphs: [
          `The logic taking shape is clear, access to the European market is increasingly conditioned on respecting recognised frameworks. Those who meet the standards enter the market, those who do not find themselves gradually excluded. The Critical Raw Materials Act reinforces this movement by providing for the Commission to recognise sustainability certification schemes. Compliance is no longer one differentiating advantage among others, it becomes the threshold of entry.`,
        ]},
        { heading: `Proof of origin, the centrepiece`, paragraphs: [
          `At the heart of this framework lies a notion that has become central, proof of origin. Version 9 of the Responsible Gold Guidance now details examples of supporting evidence of origin for mined, recycled or grandfathered gold. The expected transparency keeps growing, public disclosure obligations are strengthening, and the identity of actors located in risk areas must now be communicated. Documenting origin is no longer an add-on, it is the core of the file.`,
        ]},
        { heading: `From claim to proof`, paragraphs: [
          `A claim is a statement a company makes about a product or its operations, for example "this metal was sourced responsibly". Making it is easy, proving it is the whole challenge. A claim only has value if it is supported by data, audits and verifiable documentation. In other words, a claim is a promise, and a promise is only worth the proof that backs it.`,
          `To be credible, a claim must answer four simple questions: where does the material come from, that is its origin and its journey through the chain, what is its real impact, how is it proven, through audit, certification or chain of custody, and what exactly does the claim cover, the whole product or a single link. Production able to answer these four questions transparently moves from the register of the promise to that of the established fact. It is this shift, from claim to proof, that today separates production eligible for demanding markets from production that remains shut out.`,
        ]},
        { heading: `A premium today, a norm tomorrow`, paragraphs: [
          `This requirement could first turn into value. Reflections are under way, notably within the G7, around a standard-based market in which minerals whose origin and production conditions are guaranteed would command a premium, much like certified-origin products for which a willingness to pay more exists. Rigorously documented production could thus not only gain market access but be better valued there.`,
          `This advantage is nonetheless bound to evolve. As these practices become widespread, traceability and ESG criteria cease to be a differentiating factor and become the norm. Value then no longer lies in a premium, but in risk avoided. Compliant production protects itself from market exclusion, reputational risk and litigation risk. Those who engage early may earn more today, but above all they will lose less tomorrow. Compliance is not a short-term bet, it is a lasting investment.`,
        ]},
        { heading: `What this changes for Congolese production`, paragraphs: [
          `For Congolese artisanal production, the consequence is direct and double-edged. Being lawful is no longer enough, it must also be possible to prove it, in a verifiable and auditable way. Failing that, production finds itself excluded from the most rewarding markets, whatever its intrinsic quality. Conversely, production whose origin is rigorously documented gains access to a demand that values precisely this traceability. The regulatory constraint, seen from this angle, is also an opportunity.`,
        ]},
        { heading: `Proof as an advantage`, paragraphs: [
          `This is the conviction that drives SGCM. Responsible origin is not only a requirement to be endured, it is a competitive advantage for Congolese production, provided it is supported by solid and defensible proof. And that proof must rest on solid foundations. Traceability technology, on its own, guarantees nothing, it produces value only when robust institutional governance, clearly established responsibilities and regulatory alignment are already in place. Without that foundation, traceability remains symbolic. Certification of origin, in the regulatory sense, remains the prerogative of the competent Congolese authorities. The role of a compliance integrator is to prepare and secure its substance, on that institutional foundation and not on technology alone, so as to open Congolese production a durable access to global markets, built on proof rather than on promise.`,
        ]},
      ]}
      related={[
        { label: `From informal to formal`, href: `/programme-crp/from-informal-to-formal` },
        { label: `To global standards`, href: `/programme-crp/to-global-standards` },
      ]}
      enHref={`/programme-crp/built-for-international-requirements`}
      frHref={`/fr/programme-crp/pour-les-exigences-internationales`}
    />
  );
}
