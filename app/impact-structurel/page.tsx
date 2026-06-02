'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '../../components/SiteHeader';
import { ProgramPage } from '../../components/ProgramPage';

export default function ImpactStructurelPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <SiteHeader variant="light" activeLang="en" enHref="/impact-structurel" frHref="/fr/impact-structurel" />

      <ProgramPage
        breadcrumbLabel="Structural Impact"
        title="Structural Impact"
        baseline="Documented, verifiable and lasting compliance, in service of a transformed sector."
        heroImage="/images/IMPACT-STRUCTUREL.png"
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
