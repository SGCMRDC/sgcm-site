'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../components/SiteHeader';
import { ProgramPage } from '../../components/ProgramPage';

export default function CadreDeConformitePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="en" enHref="/cadre-de-conformite" frHref="/fr/cadre-de-conformite" />

      <ProgramPage
        breadcrumbLabel="Compliance Framework"
        title="Compliance Framework"
        baseline="Aligning Congolese production with the world's due diligence standards."
        heroImage="/images/CADRE-CONFORMITE.png"
        heroLink1={{ label: 'The reference standards', href: '#standard' }}
        heroLink2={{ label: '→ The CRP program', href: '/programme-crp' }}
        bodyEyebrow="DISCOVER THE FRAMEWORK"
        cardCta="LEARN MORE →"
        lede="The Compliance Framework is the reference on which the CRP program rests. It translates international due diligence standards into operable requirements for mining operators in the Democratic Republic of the Congo, and sets the method by which compliance is structured, documented and validated across the chain."
        subsections={[
          {
            eyebrow: 'A FOUNDATION OF RECOGNISED STANDARDS',
            text: 'The framework draws on the leading references that govern responsible mineral sourcing today. The OECD Due Diligence Guidance is its central reference. It is complemented by the LBMA Responsible Gold Guidance in its ninth version, the regional certification mechanism of the International Conference on the Great Lakes Region, and Regulation (EU) 2017/821, applicable since 2021 to Union importers. Nationally, it articulates with the 2018 Mining Code and the oversight of the competent Congolese state services.',
          },
          {
            eyebrow: 'RISK-BASED DUE DILIGENCE IN FIVE STEPS',
            text: 'The OECD method structures the entire system. It rests on five steps: establishing a strong management system, identifying and assessing risks in the supply chain, designing and implementing a strategy to respond to those risks, carrying out an independent third-party audit at identified points, and reporting regularly on the due diligence performed. This risk-based approach applies to all actors, from production to end user.',
          },
          {
            eyebrow: 'FROM STANDARD TO PROOF',
            text: 'The Compliance Framework turns these requirements into proof. Provenance, production conditions, transport and stakeholders are documented in a standardised format that establishes the chain of custody. Risks specific to conflict-affected or high-risk areas are mapped and addressed. Artificial intelligence accelerates the processing and classification of this documentation, while validation remains human and traceable, in line with the principle that governs the entire system.',
          },
          {
            eyebrow: 'AN ENFORCEABLE COMPLIANCE',
            text: 'For downstream actors, accredited refiners, European importers subject to their regulatory thresholds, industrial groups and financial institutions, the framework produces compliance that is documented, verifiable and defensible. It offers an assurance of origin aligned with the expectations of the most demanding markets and with internationally recognised due diligence schemes.',
          },
          {
            eyebrow: 'ALIGNMENT AND RESPONSIBILITY',
            text: 'The Compliance Framework aligns, structures and documents. It prepares the substance on which the competent authorities base their decisions. Certification, in the regulatory sense, remains their prerogative. SGCM guarantees its rigour, traceability and legibility, without ever substituting for the authority of the state or intervening in the commercial transaction.',
          },
        ]}
        cards={[
          {
            title: 'The reference standards',
            body: 'OECD, LBMA RGG V9, ICGLR and Regulation (EU) 2017/821 brought together in a single reference, articulated with the 2018 Mining Code.',
            href: '#',
          },
          {
            title: 'Due diligence in five steps',
            body: 'From the management system to public reporting, the risk-based process that governs every case.',
            href: '#',
          },
          {
            title: 'An enforceable proof',
            body: 'A documented and verifiable chain of custody, defensible before buyers and regulators alike.',
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
