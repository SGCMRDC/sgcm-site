import Image from 'next/image';

type Lang = 'en' | 'fr';

type ServiceItem = { title: string; desc: string };

type Intro = { before: string; strong: string; after: string };

type Content = {
  eyebrow: string;
  title: string;
  intro: Intro;
  items: ServiceItem[];
  link: string;
};

const CONTENT: Record<Lang, Content> = {
  fr: {
    eyebrow: 'Services',
    title: 'Nos prestations',
    intro: {
      before: "Trois domaines d'intervention, un seul protocole : ",
      strong: 'structurer, documenter, valider.',
      after: " Chaque prestation produit un dossier vérifiable, opposable aux exigences des acheteurs et des régulateurs.",
    },
    items: [
      {
        title: 'Structuration multi-minéraux de la conformité',
        desc: "Audit et mise en conformité de bout en bout des chaînes minières (or, cobalt, coltan, cuivre), depuis la production certifiée jusqu'à la documentation export. Chaque maillon est tracé, documenté, vérifiable.",
      },
      {
        title: 'Interface institutionnelle',
        desc: "SGCM dialogue avec les régulateurs RDC, les autorités douanières, le CEEC, le SAEMAPE et les institutions internationales de conformité, pour anticiper les exigences, sécuriser les documents et représenter les intérêts compliance de ses clients.",
      },
      {
        title: 'Provenance vérifiable',
        desc: "Les acheteurs internationaux et les raffineries accèdent directement à l'origine documentée et à la chaîne de traçabilité de chaque lot structuré par SGCM, de la coopérative au point d'exportation.",
      },
    ],
    link: 'En savoir plus',
  },
  en: {
    eyebrow: 'Services',
    title: 'Our services',
    intro: {
      before: 'Three areas of intervention, a single protocol: ',
      strong: 'structuring, documenting, validating.',
      after: ' Each service produces a verifiable dossier that stands up to the requirements of buyers and regulators.',
    },
    items: [
      {
        title: 'Multi-mineral compliance structuring',
        desc: 'End-to-end audit and compliance for mining supply chains (gold, cobalt, coltan, copper), from certified production to export documentation. Every link traced, documented, verifiable.',
      },
      {
        title: 'Institutional interface',
        desc: 'SGCM engages with DRC regulators, customs authorities, CEEC, SAEMAPE and international compliance institutions, to anticipate requirements, secure documentation and represent the compliance interests of its clients.',
      },
      {
        title: 'Verifiable provenance',
        desc: 'International buyers and refineries gain direct, auditable visibility into the documented origin and chain of custody of every lot structured through SGCM, from the cooperative to the export point.',
      },
    ],
    link: 'Find out more',
  },
};

export function ServicesSplit({ lang }: { lang: Lang }) {
  const c = CONTENT[lang];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow + heading — same values as the About block */}
        <p className="text-[#5F5E5A] text-xs font-semibold uppercase tracking-widest mb-4">
          {c.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10 md:mb-14">
          {c.title}
        </h2>

        {/* Split: image left / text right, same geometry as the About block */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[14px]">

          {/* Text column, gray bg (right on desktop) */}
          <div className="bg-gray-100 px-8 md:px-10 py-10 md:py-14 flex flex-col justify-center">
            <p className="text-gray-600 leading-relaxed mb-8">
              {c.intro.before}
              <span className="font-medium text-navy">{c.intro.strong}</span>
              {c.intro.after}
            </p>

            <ol className="border-t border-gray-200">
              {c.items.map((item, i) => (
                <li key={item.title} className="border-b border-gray-200 py-6">
                  <p className="text-xs font-medium tracking-widest text-navy tabular-nums mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>

            <a href="#platform" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-900 group w-fit">
              {c.link}
              <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Image column: left on desktop, above the text on mobile; navy shows while loading */}
          <div aria-hidden="true" className="order-first relative h-[220px] md:h-full bg-navy">
            <Image
              src="/images/services-mineral.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 616px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
