'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../components/SiteHeader';
import { ProgramPage } from '../../components/ProgramPage';

export default function PartenairesInstitutionnelsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="en" enHref="/partenaires-institutionnels" frHref="/fr/partenaires-institutionnels" />

      <ProgramPage
        breadcrumbLabel="Institutional Partners"
        title="Institutional Partners"
        baseline="Connecting institutions, operators and markets around a single proof of compliance."
        heroImage="/kin-rdc-sgcm.jpg"
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
        cards={[
          {
            title: 'The Congolese institutions',
            body: 'CEEC, SAEMAPE and the Ministry of Mines, in the exercise of their oversight and certification missions.',
            href: '#',
          },
          {
            title: 'The international standards',
            body: 'OECD, LBMA and ICGLR, the references on which the legibility of compliance rests.',
            href: '#',
          },
          {
            title: 'The downstream markets',
            body: 'Refiners, importers, industrial groups and financiers, recipients of a verifiable assurance of origin.',
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
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">Programs</p>
              <ul className="space-y-2">
                {['CRP Program', 'Compliance Framework', 'Traceability Integration', 'Partner Verification', 'Institutional Advisory'].map(item => (
                  <li key={item}><Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-white/30 mb-4">About</p>
              <ul className="space-y-2">
                {['Mission', 'Vision', 'Presence'].map(item => (
                  <li key={item}><Link href="/#aboutus" className="text-white/50 text-sm hover:text-white transition-colors">{item}</Link></li>
                ))}
                <li><Link href="/careers" className="text-white/50 text-sm hover:text-white transition-colors">Careers</Link></li>
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
              <Link href="/privacy" className="text-white/25 text-xs hover:text-white/50 transition">Privacy</Link>
              <Link href="/legal" className="text-white/25 text-xs hover:text-white/50 transition">Legal</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
