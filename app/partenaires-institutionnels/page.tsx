'use client';
import { SiteHeader } from '../../components/SiteHeader';
import { ProgramPage } from '../../components/ProgramPage';
import { SiteFooter } from '../../components/SiteFooter';

export default function PartenairesInstitutionnelsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="en" enHref="/partenaires-institutionnels" frHref="/fr/partenaires-institutionnels" />

      <ProgramPage
        breadcrumbLabel="Institutional Partners"
        title="Institutional Partners"
        baseline="Connecting institutions, operators and markets around a single proof of compliance."
        heroImage="/kin-rdc-sgcm.webp"
        heroLink1={{ label: 'Our ecosystem', href: '#standard' }}
        heroLink2={{ label: '→ The compliance framework', href: '/cadre-de-conformite' }}
        bodyEyebrow="DISCOVER THE ECOSYSTEM"
        cardCta="LEARN MORE →"
        lede="SGCM provides a single, coordinated interface between Congolese regulators, mining operators and international buyers. By bringing these actors together around documented, shared compliance, SGCM enables dialogue and trust, each retaining its full role and authority."
        subsections={[
          {
            eyebrow: 'THE CONGOLESE INSTITUTIONS',
            text: 'The system articulates with the competent state services. The Centre for Expertise, Evaluation and Certification, the Service for Assistance and Oversight of Artisanal and Small-Scale Mining, and the Ministry of Mines carry out the oversight, evaluation and certification missions conferred on them by the 2018 Mining Code. SGCM provides them with structured support for monitoring and formalising the sector, without ever substituting for their authority.',
          },
          {
            eyebrow: 'THE INTERNATIONAL REFERENCES',
            text: "The framework's credibility rests on its alignment with the standards that hold authority in responsible sourcing. The OECD Due Diligence Guidance, the LBMA Responsible Gold Guidance and the regional certification mechanism of the International Conference on the Great Lakes Region are the references on which compliance is built and made legible.",
          },
          {
            eyebrow: 'THE DOWNSTREAM ACTORS',
            text: 'Accredited refiners, European importers subject to Regulation (EU) 2017/821, industrial groups and financial institutions expect a verifiable assurance of origin. SGCM provides them with documented, enforceable compliance, without ever intervening in the commercial transaction or in price setting.',
          },
          {
            eyebrow: 'INTERNATIONAL TRACEABILITY',
            text: 'Established compliance can be published to international traceability standards, in the form of a digital product passport. SGCM remains the internal system of record, ensuring the continuity of proof from production to its reading by the markets.',
          },
          {
            eyebrow: 'A COORDINATING ROLE',
            text: 'SGCM connects, structures and documents. The program substitutes for none of its partners. It provides the common infrastructure that allows institutions to exercise their mandate, operators to prove their compliance, and markets to extend their trust, around a single source of truth.',
          },
        ]}
      />

      <SiteFooter lang="en" />
    </main>
  );
}
