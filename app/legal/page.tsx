'use client';
import { SiteHeader } from '../../components/SiteHeader';

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={true} activeLang="en" enHref="/legal" frHref="/fr/legal" activeLabel="" />

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
            Legal Notice
          </h1>
          <p className="text-white/40 text-sm mt-3">Last updated: April 17, 2026</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Publisher Identification</h2>
          <p className="text-gray-700 font-medium leading-relaxed mb-4">
            SOCIÉTÉ DE GESTION ET CONSULTATION MINIÈRES SARL (SGCM SARL)
          </p>
          <div className="space-y-1 text-gray-500 leading-relaxed">
            <p><span className="text-gray-700 font-medium">Legal form:</span> Multi-member limited liability company (SARL pluripersonnelle)</p>
            <p><span className="text-gray-700 font-medium">Registered office:</span> 644 Immeuble Massamba, 3rd Floor, Rond-Point Kin-Mazière, Quartier Commerce, Commune de la Gombe, Kinshasa, Democratic Republic of the Congo</p>
            <p><span className="text-gray-700 font-medium">RCCM:</span> CD/KNG/RCCM/26-B-01360</p>
            <p><span className="text-gray-700 font-medium">National Identification:</span> 01-B0500-N98100N</p>
            <p><span className="text-gray-700 font-medium">Legal &amp; Compliance Department:</span> Mr. Elvis Mwamba N&apos;Se Sombamanya</p>
            <p>
              <span className="text-gray-700 font-medium">Contact: </span>
              <a href="mailto:legal@sgcm-mining.com" style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                legal@sgcm-mining.com
              </a>
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Hosting</h2>
          <p className="text-gray-500 leading-relaxed">
            The website sgcm-mining.com is hosted by Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, United States of America.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Intellectual Property</h2>
          <p className="text-gray-500 leading-relaxed">
            All content published on this website, including but not limited to texts, visuals,
            the SGCM logo, site architecture, and the SGCM Certified® mark, is the exclusive
            property of SGCM SARL and is protected under applicable intellectual property laws
            in the Democratic Republic of the Congo and internationally.
          </p>
          <p className="text-gray-500 leading-relaxed mt-4">
            Any reproduction, representation, or distribution, in whole or in part, is strictly
            prohibited without the prior written authorisation of SGCM SARL.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Limitation of Liability</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            SGCM endeavours to ensure the accuracy of the information published on this website
            but cannot guarantee its completeness or permanent currency. The information provided
            does not constitute a commercial offer or a contractual commitment.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            SGCM acts exclusively as a facilitator and compliance integrator within mineral supply
            chains, and not as a trader or buyer/seller of minerals for its own account.
          </p>
          <p className="text-gray-500 leading-relaxed">
            SGCM accepts no liability for direct or indirect damages resulting from the use of
            this website or from any inability to access it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Governing Law and Jurisdiction</h2>
          <p className="text-gray-500 leading-relaxed">
            This website and any relations arising from it are governed by the laws of the
            Democratic Republic of the Congo. Any dispute relating to the use of this website
            shall be submitted to the competent courts of Kinshasa.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Contact</h2>
          <p className="text-gray-500 leading-relaxed">
            For any enquiry relating to this legal notice, please contact:{' '}
            <a href="mailto:legal@sgcm-mining.com" style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              legal@sgcm-mining.com
            </a>
          </p>
        </section>

      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-2">
            <img src="/sgcm-logo.png" alt="SGCM"
              className="object-contain"
              style={{ width: '220px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
            <p style={{ marginTop: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: '1.7' }}>
              Compliance integrator for responsible mineral supply chains. Structuring documentation, traceability, and regulatory alignment from the DRC to international markets.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Kinshasa · Kolwezi · Brussels</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Company</p>
            {['About Us', 'Platform', 'Network', 'Insights'].map((item) => (
              <a key={item} href={`/#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
            <a href="/careers" className="text-white/40 text-xs hover:text-white transition-colors">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            {['CRP Program', 'Compliance Framework', 'Traceability Integration', 'Partner Verification', 'Institutional Advisory'].map((item) => (
              <a key={item} href="/#services" className="text-white/40 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Connect</p>
            <a href="mailto:contact@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">contact@sgcm-mining.com</a>
            <a href="mailto:verify@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">verify@sgcm-mining.com</a>
            {/* TODO: replace with real LinkedIn company page URL (e.g. https://www.linkedin.com/company/sgcm-sarl) */}
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/25 text-xs">Kinshasa Office</span>
            <span className="text-white/25 text-xs">Brussels Office</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">Legal</p>
            <a href="/privacy" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="/legal" className="text-white/40 text-xs hover:text-white transition-colors">Legal Notice</a>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span>© 2026 SGCM SARL</span>
              <span className="text-white/20">|</span>
              <a href="/privacy" className="hover:text-white/70 transition">Privacy</a>
              <span className="text-white/20">|</span>
              <a href="/legal" className="hover:text-white/70 transition">Legal</a>
              <span className="text-white/20">|</span>
              <span>SGCM Certified®</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/40">
              <span>RCCM: CD/KNG/RCCM/26-B-01360</span>
              <span className="text-white/20">|</span>
              <span>ID. Nat.: 01-B0500-N98100N</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
