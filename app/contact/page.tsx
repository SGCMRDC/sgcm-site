'use client';
import Link from 'next/link';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

// lucide-react v1.17.0 doesn't include Linkedin — inline SVG matches the Lucide path exactly.
const LinkedinIcon = ({ size = 24, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={true} activeLang="en" enHref="/contact" frHref="/contact/fr" activeLabel="CONTACT" />

      <section style={{ marginTop: '102px', background: '#f9fafb', borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
        <div className="px-6 md:px-12 py-16 md:py-24 text-center" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '22px' }}>Contact</p>
          <h1 style={{ fontWeight: 300, fontSize: 'clamp(34px, 6vw, 60px)', lineHeight: 1.04, letterSpacing: '-0.01em', color: '#0A1628', marginBottom: '20px' }}>Get in touch with SGCM</h1>
          <p style={{ fontWeight: 300, fontSize: 'clamp(17px, 2.4vw, 22px)', lineHeight: 1.4, color: '#374151', maxWidth: '560px', margin: '0 auto' }}>Whether you are an industrial buyer, a mining operator, or an institutional partner, our team supports your facilitation and compliance needs.</p>
        </div>
      </section>

      <div className="px-6 md:px-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontWeight: 300, fontSize: 'clamp(24px, 3vw, 32px)', color: '#0A1628', padding: '36px 0 24px' }}>SGCM Kinshasa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
            <div>
              <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>SGCM<br />Kinshasa<br />Democratic Republic of the Congo</p>
              <a href="mailto:contact@sgcm-mining.com" style={{ display: 'inline-block', marginTop: '16px', fontSize: '15px', color: '#FF7F2A' }}>Email us</a>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/about" style={{ fontSize: '15px', color: '#0A1628' }}><span style={{ color: '#FF7F2A', marginRight: '8px' }}>→</span>About SGCM</Link>
              <a href="#" style={{ fontSize: '15px', color: '#0A1628' }}><span style={{ color: '#FF7F2A', marginRight: '8px' }}>→</span>Our commercial ecosystem</a>
              <a href="#" style={{ fontSize: '15px', color: '#0A1628' }}><span style={{ color: '#FF7F2A', marginRight: '8px' }}>→</span>SGCM Certified™ Standard</a>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '12px' }}>Follow us</p>
              <a href="https://www.linkedin.com/company/sgcm-drc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ display: 'inline-flex', width: '40px', height: '40px', border: '1px solid #FF7F2A', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', color: '#FF7F2A' }}><LinkedinIcon size={19} strokeWidth={1.5} /></a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ padding: '36px 0' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#0A1628', marginBottom: '12px' }}>Communications &amp; Partnerships</h3>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.6, marginBottom: '16px' }}>For press, institutional communications or partnership proposals.</p>
            <a href="mailto:contact@sgcm-mining.com" style={{ fontSize: '14px', color: '#FF7F2A' }}>Email us</a>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#0A1628', marginBottom: '12px' }}>Buyer &amp; Institutional Relations</h3>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.6, marginBottom: '16px' }}>For international buyers and institutions seeking access to compliance and traceability dossiers.</p>
            <a href="mailto:contact@sgcm-mining.com" style={{ fontSize: '14px', color: '#FF7F2A' }}>Email us</a>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#0A1628', marginBottom: '12px' }}>Compliance &amp; Documentation</h3>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.6, marginBottom: '16px' }}>For documentation requests, KYC files or questions about the SGCM Certified&trade; Standard.</p>
            <a href="mailto:contact@sgcm-mining.com" style={{ fontSize: '14px', color: '#FF7F2A' }}>Email us</a>
          </div>
        </section>

        <section style={{ borderTop: '0.5px solid rgba(0,0,0,0.12)', borderBottom: '0.5px solid rgba(0,0,0,0.12)', padding: '28px 0', display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 300, fontSize: 'clamp(22px, 2.6vw, 28px)', color: '#0A1628' }}>SGCM Brussels</span>
          <span style={{ fontSize: '14px', color: '#9ca3af' }}>Liaison office &middot; Belgium</span>
        </section>
      </div>

      <section style={{ background: '#f9fafb' }}>
        <div className="px-6 md:px-12" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 0' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '14px' }}>Careers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 style={{ fontWeight: 300, fontSize: 'clamp(24px, 3vw, 32px)', color: '#0A1628', marginBottom: '14px' }}>Join the SGCM team</h2>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.78 }}>SGCM welcomes applications from Congolese professionals committed to building responsible and transparent mineral supply chains in the DRC.</p>
            </div>
            <div style={{ fontSize: '16px', color: '#374151', lineHeight: 1.78 }}>
              For Congolese applicants
              <a href="mailto:careers@sgcm-mining.com" style={{ display: 'block', marginTop: '10px', fontSize: '15px', color: '#FF7F2A' }}>careers@sgcm-mining.com</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter lang="en" className="mt-16 md:mt-[72px]" />

    </main>
  );
}
