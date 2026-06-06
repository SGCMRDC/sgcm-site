'use client';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader variant="dark" solid={true} activeLang="en" enHref="/contact" frHref="/contact/fr" activeLabel="CONTACT" />

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <div className="relative h-64 sm:h-80 md:h-[520px] overflow-hidden flex items-end" style={{ marginTop: '102px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.88) 40%, rgba(0,0,0,0.3) 100%), url("/SGCM Electrorefining plant.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative z-10 px-6 md:px-12 pb-8 md:pb-16 max-w-2xl">
          <p style={{ color: '#5F5E5A', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px]"
            style={{ fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '20px' }}>
            Get in touch<br />with SGCM
          </h1>
          <p className="hidden md:block" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '480px' }}>
            Whether you are an industrial buyer, a certified producer, or an institutional partner — our team is ready to support your facilitation and compliance needs.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Office info */}
        <section className="pt-12 md:pt-16">
          <div className="flex justify-between items-center pb-6 border-b border-gray-200">
            <h2 className="text-2xl md:text-[28px]" style={{ fontWeight: 400 }}>SGCM — Kinshasa Office</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-10 md:py-12 border-b border-gray-200">
            <div className="md:pr-12 md:border-r md:border-gray-200">
              <p style={{ color: '#5F5E5A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Head Office</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#111', marginBottom: '8px' }}>SGCM</p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75, marginBottom: '16px' }}>Kinshasa, Democratic Republic of Congo</p>
              <a href="mailto:contact@sgcm-mining.com" style={{ display: 'block', color: '#1A1F2C', fontSize: '13px', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px', marginBottom: '8px' }}>
                ✉ contact@sgcm-mining.com
              </a>
              <a href="mailto:verify@sgcm-mining.com" style={{ display: 'block', color: '#555', fontSize: '12px', textDecoration: 'none' }}>
                verify@sgcm-mining.com
              </a>
            </div>
            <div className="md:px-12 md:border-r md:border-gray-200">
              <p style={{ color: '#5F5E5A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Quick Links</p>
              {['About SGCM', 'Our Commercial Ecosystem', 'SGCM Certified™ Standard'].map((item) => (
                <a key={item} href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#111', textDecoration: 'none', marginBottom: '12px' }}>
                  <span style={{ color: '#1A1F2C' }}>→</span>{item}
                </a>
              ))}
            </div>
            <div className="md:pl-12">
              <p style={{ color: '#5F5E5A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Connect</p>
              {[
                { label: 'LinkedIn', href: '#' /* TODO: replace with real LinkedIn company page URL (e.g. https://www.linkedin.com/company/sgcm-sarl) */ },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#111', textDecoration: 'none', marginBottom: '12px' }}>
                  <span style={{ color: '#1A1F2C' }}>→</span>{item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-12 md:py-14 border-b border-gray-200">
          {[
            { title: 'Communications & Partnerships', desc: 'For press inquiries, institutional communication, or partnership proposals, please reach out directly to our communications team.', email: 'contact@sgcm-mining.com' },
            { title: 'Commercial & Buyer Relations', desc: 'For commercial inquiries, off-take discussions, or buyer onboarding, contact our commercial team directly.', email: 'contact@sgcm-mining.com' },
            { title: 'Compliance & Documentation', desc: 'For mandate verification, KYC documentation requests, or SGCM Certified™ inquiries, use our dedicated verification channel.', email: 'verify@sgcm-mining.com' },
          ].map((dept, i) => (
            <div key={dept.title} className={`${i > 0 ? 'md:pl-12' : ''} ${i < 2 ? 'md:pr-12 md:border-r md:border-gray-200' : ''}`}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#111', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(26,31,44,0.15)', display: 'inline-block' }}>{dept.title}</p>
              <p style={{ fontSize: '13px', lineHeight: 1.75, color: '#555', marginBottom: '12px', marginTop: '8px' }}>{dept.desc}</p>
              <a href={`mailto:${dept.email}`} style={{ fontSize: '12px', fontWeight: 600, color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Send an inquiry →
              </a>
            </div>
          ))}
        </div>

        {/* Careers */}
        <div className="py-12 md:py-14 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
            <div>
              <p style={{ color: '#5F5E5A', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Careers</p>
              <h3 style={{ fontSize: '24px', fontWeight: 400, color: '#111', marginBottom: '12px' }}>Join the SGCM team</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7 }}>SGCM is currently accepting applications from Congolese professionals committed to building responsible and transparent mineral supply chains in the DRC.</p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: 'Compliance & Documentation Officer', location: 'Kinshasa, DRC · Full-time' },
                { title: 'Supply Chain Coordinator', location: 'Kinshasa / Kolwezi, DRC · Full-time' },
                { title: 'Logistics & Export Specialist', location: 'Kinshasa, DRC · Full-time' },
              ].map((job) => (
                <div key={job.title} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-5 border border-gray-200">
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#111', marginBottom: '4px' }}>{job.title}</p>
                    <p style={{ fontSize: '12px', color: '#555' }}>{job.location}</p>
                  </div>
                  <a href={`mailto:contact@sgcm-mining.com?subject=Application: ${job.title}`}
                    className="shrink-0"
                    style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A1F2C', textDecoration: 'none', border: '1px solid rgba(26,31,44,0.4)', padding: '8px 16px' }}>
                    Apply
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <SiteFooter lang="en" className="mt-16 md:mt-[72px]" />

    </main>
  );
}
