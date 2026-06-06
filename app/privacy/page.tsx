'use client';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={true} activeLang="en" enHref="/privacy" frHref="/fr/privacy" activeLabel="" />

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm mt-3">Last updated: April 17, 2026</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Introduction</h2>
          <p className="text-gray-500 leading-relaxed">
            SGCM SARL attaches the highest importance to protecting the personal data of its visitors,
            partners, and counterparties. This policy describes the conditions under which SGCM
            collects, uses, and protects information gathered via the website sgcm-mining.com.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Data Controller</h2>
          <p className="text-gray-700 font-medium leading-relaxed mb-3">
            SOCIÉTÉ DE GESTION ET CONSULTATION MINIÈRES SARL (SGCM SARL)
          </p>
          <p className="text-gray-500 leading-relaxed mb-1">
            Registered office: 644 Immeuble Massamba, 3rd Floor, Rond-Point Kin-Mazière,
            Quartier Commerce, Commune de la Gombe, Kinshasa, Democratic Republic of the Congo
          </p>
          <p className="text-gray-500 leading-relaxed mb-1">RCCM: CD/KNG/RCCM/26-B-01360</p>
          <p className="text-gray-500 leading-relaxed mb-1">National Identification: 01-B0500-N98100N</p>
          <p className="text-gray-500 leading-relaxed mt-4">
            Compliance contact:{' '}
            <a href="mailto:compliance@sgcm-mining.com" style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              compliance@sgcm-mining.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Data Collected</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            SGCM may collect the following categories of personal data:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Contact form submissions (name, email address, company, message)
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Browsing data (technical cookies, server logs)
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Documents submitted in the context of due diligence processes
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Processing Purposes</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Responding to information and partnership requests
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              SGCM Certified® due diligence processes
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Compliance with applicable legal obligations (OECD, LBMA, LME, CRMA, DRC Mining Code)
            </li>
            <li className="flex gap-3 text-gray-500 leading-relaxed">
              <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
              Improvement of the website and its services
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Legal Basis</h2>
          <p className="text-gray-500 leading-relaxed">
            Processing is based on the performance of pre-contractual measures, compliance with
            legal obligations applicable to SGCM, and SGCM&apos;s legitimate interests in operating
            a compliant mineral supply chain facilitation business.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Recipients</h2>
          <p className="text-gray-500 leading-relaxed">
            Data is processed exclusively by SGCM&apos;s Legal and Compliance Department. Where required
            by applicable law or by the scope of a specific compliance process, data may be shared
            with regulatory authorities (including CENAREF, OECD-designated bodies, or other
            competent institutions) within the strict applicable legal framework.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Retention Period</h2>
          <p className="text-gray-500 leading-relaxed">
            Personal data is retained in accordance with the obligations of the DRC Mining Code
            and applicable OECD standards. Due diligence files are kept for a minimum of five years
            from the date of the last transaction or the end of the business relationship.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Rights of Data Subjects</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            In accordance with applicable data protection regulations, you have the right to access,
            rectify, erase, object to, and port your personal data. You also have the right to
            restrict processing in certain circumstances.
          </p>
          <p className="text-gray-500 leading-relaxed">
            To exercise any of these rights, please contact:{' '}
            <a href="mailto:compliance@sgcm-mining.com" style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              compliance@sgcm-mining.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Cookies</h2>
          <p className="text-gray-500 leading-relaxed">
            This site uses technical cookies only, strictly necessary for its correct operation.
            No marketing tracking or advertising cookies are deployed at this time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">Changes to This Policy</h2>
          <p className="text-gray-500 leading-relaxed">
            SGCM reserves the right to update this policy at any time to reflect changes in
            applicable regulations or operational practices. The date of last update displayed
            at the top of this page constitutes the reference version.
          </p>
        </section>

      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <SiteFooter lang="en" />

    </main>
  );
}
