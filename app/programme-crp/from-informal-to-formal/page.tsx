import { ArticleLayout } from '../../../components/ArticleLayout';

export const metadata = {
  title: 'From informal to formal | SGCM',
  description: 'Understanding the artisanal mining economy in the DRC, from subsistence to formalisation.',
};

export default function Page() {
  return (
    <ArticleLayout
      lang="en"
      breadcrumbLabel={`From informal to formal`}
      eyebrow={`Economic context`}
      title={`From informal to formal: understanding the artisanal mining economy in the DRC`}
      intro={`Artisanal mining is not a marginal phenomenon in the Democratic Republic of the Congo. It is one of the pillars of the country's real economy. According to the World Bank, the activity provides a livelihood for around ten million people in the DRC and accounts for ten to twenty percent of national mining production. It is the country's second largest source of employment after agriculture. To understand this economy is to understand the living conditions of millions of households, and the stakes of an entire sector under growing international scrutiny.`}
      sections={[
        { heading: `A subsistence economy, and one of opportunity`, paragraphs: [
          `Artisanal mining develops first where economic alternatives are scarce. Barriers to entry are low, the activity is resilient in fragile contexts, and it often generates higher incomes than subsistence farming. The minerals involved are mainly gold, coltan, cassiterite and cobalt, in provinces such as Ituri, South Kivu, Maniema and the former Katanga. This reality is why artisanal mining is inseparable from the policies of development, stability and governance in the DRC.`,
        ]},
        { heading: `A legal framework for formalisation`, paragraphs: [
          `Formalisation is not an abstract idea, it rests on a precise legal framework. The 2018 Mining Code defines the artisanal miner according to strict criteria. They must be an adult of Congolese nationality, holding a valid artisanal miner's card, a member of a mining cooperative and working within an artisanal exploitation zone. These zones, known as ZEAs, are in principle established where industrial or semi-industrial exploitation is not viable.`,
          `The institutional architecture governing this activity is clearly distributed. SAEMAPE provides technical assistance and supervision to artisanal miners and cooperatives at the mining site, while the Mining Cadastre records titles in the national registry. The Provincial Mining Division handles the day-to-day management of the sector, and CEEC intervenes on evaluation and certification. The approved cooperative is the legal structure around which the move from informal to formal is organised. It must in particular be registered, allocated to a ZEA, and up to date with its taxes and royalties.`,
        ]},
        { heading: `The gap between law and the field`, paragraphs: [
          `To know the framework is also to measure its limits. The promise of formalisation is an old one, the State had already committed to it in 2002. Yet more than twenty years later, its concrete translation remains partial. The allocation of artisanal exploitation zones provided for by the 2018 Code for copper and cobalt has not materialised at the expected scale, and many valuable deposits remain attributed to industrial operators. Many miners therefore continue to work outside the legal framework, for lack of accessible formalised space. This gap between the text and the reality on the ground is precisely what makes the question of traceability and documentary proof so decisive.`,
        ]},
        { heading: `Include, rather than exclude`, paragraphs: [
          `A legitimate concern accompanies the rise of these requirements, that standards favour only large industrial operators and effectively exclude artisanal mining. Yet a well-designed traceability system can produce the opposite effect. Rather than pushing artisanal miners aside, it can bring them in, and thereby open a path towards formalisation and better market access. For an economy in which artisanal mining is a major source of income, the issue is not to choose between compliance and inclusion, but to design compliance as a tool for inclusion.`,
          `Inclusion calls for a gradual approach. For a small operator, compliance is not achieved all at once, it begins with manageable steps. Focusing first on the most serious risks, such as child labour or unsafe working conditions. Relying on cooperatives and collective initiatives so as not to bear the burden alone. Starting with rigorous documentation and sound record-keeping before considering more sophisticated tools. Formalisation is a path travelled in stages, not a threshold crossed in a single step.`,
        ]},
        { heading: `Formalisation on Congolese terms`, paragraphs: [
          `This requirement raises a question of ownership. Many African producing countries argue that they should play a stronger role in how sustainability standards are applied to their mining sector, since many of these frameworks were designed outside the regions where minerals are actually extracted. The challenge is to strike a balance, between international frameworks that guarantee traceability and responsibility, and a regional flexibility that reflects local realities and the country's development priorities. The most solid formalisation is not the one that is imposed, but the one that is driven from the Congolese field.`,
        ]},
        { heading: `Proof as a condition of access`, paragraphs: [
          `The move from informal to formal is not decreed, it is documented. For artisanal production to be recognised by demanding markets, it is not enough that it be lawful, it must also be possible to establish this in a verifiable and auditable way. Documentary compliance turns a subsistence activity into a recognised participation in a responsible supply chain.`,
          `This is the conviction that guides SGCM. Formalisation only holds lasting value when it is supported by solid and defensible proof. Certification of origin, in the regulatory sense, remains the prerogative of the competent Congolese authorities. The role of a compliance integrator is not to substitute for them, but to prepare and secure its substance, so that Congolese production can anchor itself durably in global markets through rigour, and not despite informality.`,
        ]},
      ]}
      related={[
        { label: `To global standards`, href: `/programme-crp/to-global-standards` },
        { label: `Built for international requirements`, href: `/programme-crp/built-for-international-requirements` },
      ]}
      enHref={`/programme-crp/from-informal-to-formal`}
      frHref={`/fr/programme-crp/de-l-informel-au-formel`}
    />
  );
}
