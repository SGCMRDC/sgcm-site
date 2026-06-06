'use client';
import { SiteHeader } from '../../components/SiteHeader';
import { ProgramPage } from '../../components/ProgramPage';
import { SiteFooter } from '../../components/SiteFooter';

export default function ImpactStructurelPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="en" enHref="/impact-structurel" frHref="/fr/impact-structurel" />

      <ProgramPage
        breadcrumbLabel="Structural Impact"
        title="Structural Impact"
        baseline="Documented, verifiable and lasting compliance, in service of a transformed sector."
        heroImage="/images/IMPACT-STRUCTUREL.webp"
        heroLink1={{ label: 'Our impact', href: '#standard' }}
        heroLink2={{ label: '→ The CRP program', href: '/programme-crp' }}
        bodyEyebrow="DISCOVER THE IMPACT"
        cardCta="LEARN MORE →"
        lede="Structural Impact refers to the lasting transformation that the CRP program produces in the artisanal mining sector. Beyond one-off compliance, it installs an infrastructure of proof that formalises operators, secures traceability and anchors Congolese production in responsible supply chains."
        subsections={[
          {
            eyebrow: 'A LASTING COMPLIANCE',
            text: 'Due diligence is not an isolated check but a continuous process of improvement. The framework establishes a system of management, documentation and monitoring that endures over time and progressively raises the practices of engaged cooperatives. Compliance becomes a maintained state, verifiable at any time, rather than a fixed attestation.',
          },
          {
            eyebrow: 'FORMALISING THE SECTOR',
            text: 'By structuring and documenting what remained scattered, the program moves informal operators to the status of recognised partners. This formalisation opens access to demanding markets, strengthens the legal security of cooperatives and consolidates their place in an organised sector.',
          },
          {
            eyebrow: 'VALUE FOR THE DEMOCRATIC REPUBLIC OF THE CONGO',
            text: 'The traceability of flows and documentary legibility strengthen the sector\'s visibility for the state, conditions for better value capture. At a time when the European Union and major buyers make responsible origin a condition of access, the framework consolidates the position of Congolese production in supply chains under growing scrutiny.',
          },
          {
            eyebrow: 'TRACEABILITY AS AN ASSET',
            text: 'Established proof is not lost. Documented and preserved, it can be published to international traceability standards in the form of a digital product passport, with SGCM remaining the internal system of record. Compliance data becomes a lasting asset, legible to the markets and enforceable over time.',
          },
          {
            eyebrow: 'A RESPONSIBLE IMPACT',
            text: 'The program structures, documents and validates. It prepares substance on which the competent authorities base their decisions, without ever substituting for their role or intervening in the transaction. The intended impact is lasting and responsible: to make documentary rigour a lever for development, for the sector and for the country.',
          },
        ]}
        cards={[
          {
            title: 'A lasting compliance',
            body: 'A system of proof maintained over time, verifiable at any moment, rather than a fixed attestation.',
            href: '#',
          },
          {
            title: 'Formalising the sector',
            body: 'Informal operators become recognised partners, with consolidated access to demanding markets.',
            href: '#',
          },
          {
            title: 'A national value',
            body: 'Traceability of flows and documentary legibility in service of value capture for the DRC.',
            href: '#',
          },
        ]}
      />

      <SiteFooter lang="en" />
    </main>
  );
}
