'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../components/SiteHeader';
import { ProgramPage } from '../../components/ProgramPage';

export default function ProgrammeCRPPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="en" enHref="/programme-crp" frHref="/fr/programme-crp" />

      <ProgramPage
        breadcrumbLabel="CRP Program"
        title="CRP Program"
        baseline="Structuring compliance. Documenting proof. Validating eligibility."
        heroImage="/images/CRP-WEB.png"
        heroLink1={{ label: 'The CRP standard', href: '#standard' }}
        heroLink2={{ label: '→ The compliance framework', href: '/cadre-de-conformite' }}
        bodyEyebrow="DISCOVER THE PROGRAM"
        cardCta="LEARN MORE →"
        lede="The CRP program, for Certified Responsible Partner, sets the standard by which an artisanal mining cooperative is structured, documented and validated to enter responsible supply chains. It is the compliance foundation that connects field production to the requirements of international markets."
        subsections={[
          {
            eyebrow: 'WHY CRP',
            text: 'Global demand for critical minerals comes with an unprecedented requirement for traceability and due diligence. Industrial buyers, refiners and importers must now prove the responsible origin of their supply, under the OECD Guidance, the LBMA Responsible Gold Guidance and Regulation (EU) 2017/821. Without a robust compliance framework, legitimate production remains excluded from these markets. CRP closes that gap by turning compliance into a verifiable asset.',
          },
          {
            eyebrow: 'OUR AMBITION',
            text: 'The program aims to make every engaged cooperative an eligible, traceable and recognised partner. The objective is not to control the sector but to give it the means of its credibility: standardised documentation, rigorous risk assessment and a proof of compliance that holds up before the most demanding counterparties.',
          },
          {
            eyebrow: 'WHO CRP IS FOR',
            text: 'The program addresses cooperatives and artisanal production entities seeking access to responsible markets. Downstream, it speaks to accredited refiners, European importers, industrial groups and financial institutions that condition their commitments on due diligence. In the Democratic Republic of the Congo, it offers the competent authorities structured support for monitoring and formalising the sector.',
          },
          {
            eyebrow: 'OUR APPROACH',
            text: 'CRP relies on a digital compliance infrastructure. Documentation, risk assessment and validation are carried out systematically, with artificial intelligence accelerating processing while preserving the requirement of a human, traceable validation. Established compliance can then be published to international traceability standards, with SGCM remaining the system of record. Certification, in the regulatory sense, remains the prerogative of the competent Congolese authorities; CRP prepares and secures its substance.',
          },
          {
            eyebrow: 'A NATIONAL AND INTERNATIONAL REACH',
            text: 'By formalising the artisanal mining economy, CRP strengthens fiscal visibility and the traceability of flows, conditions for better value capture for the DRC. It consolidates the country\'s place in supply chains under growing scrutiny, at a time when the European Union and major industrial buyers make responsible origin a condition of access. Beyond compliance, the program carries an ambition: to anchor Congolese production in global markets through proof, and to make documentary rigour a lever for development.',
          },
        ]}
        cards={[
          {
            title: 'From informal to formal',
            body: 'SGCM connects the artisanal mining economy to the requirements of responsible markets, turning informal operators into eligible, traceable and recognised partners.',
            href: '#',
          },
          {
            title: 'To global standards',
            body: 'Aligned with the OECD five-step due diligence, the LBMA RGG V9, the ICGLR and Regulation (EU) 2017/821. Documented, verifiable and defensible compliance.',
            href: '#',
          },
          {
            title: 'Built for international requirements',
            body: 'By integrating AI into documentation, SGCM meets global standards and accelerates case processing. This capability gives Congolese institutions a tool to map and monitor cooperatives.',
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
