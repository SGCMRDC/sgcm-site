'use client';
import Link from 'next/link';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import type { Job } from '../data/careers';

const CAREERS_EMAIL = 'careers@sgcm-mining.com';

const LABELS = {
  en: {
    eyebrow: 'Careers',
    back: '← All positions',
    role: 'The role',
    responsibilities: 'Responsibilities',
    qualifications: 'Qualifications',
    niceToHave: 'Nice to have',
    process: 'Recruitment process',
    applyLabel: 'Send your application',
    apply: 'Apply by email',
    subjectPrefix: 'Application - ',
  },
  fr: {
    eyebrow: 'Carrières',
    back: '← Toutes les offres',
    role: 'Le rôle',
    responsibilities: 'Responsabilités',
    qualifications: 'Qualifications',
    niceToHave: 'Atouts appréciés',
    process: 'Processus de recrutement',
    applyLabel: 'Envoyer votre candidature',
    apply: 'Postuler par e-mail',
    subjectPrefix: 'Candidature - ',
  },
} as const;

const H2 = 'text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-gray-500 leading-relaxed">
          <span style={{ color: '#5F5E5A', flexShrink: 0, marginTop: '2px' }}>-</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function JobDetail({ job, lang }: { job: Job; lang: 'en' | 'fr' }) {
  const c = job[lang];
  const t = LABELS[lang];
  const listHref = lang === 'fr' ? '/fr/careers' : '/careers';
  const mailto = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(t.subjectPrefix + c.title)}`;

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <SiteHeader
        variant="dark"
        solid={true}
        activeLang={lang}
        enHref={`/careers/${job.slug}`}
        frHref={`/fr/careers/${job.slug}`}
        activeLabel=""
      />

      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
            {c.title}
          </h1>
          <p className="text-white/40 text-sm mt-3">
            {c.experience} · {c.employmentType} · {c.location}
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <Link
          href={listHref}
          className="inline-block text-sm mb-10"
          style={{ color: '#1A1F2C', textDecoration: 'underline', textUnderlineOffset: '3px' }}
        >
          {t.back}
        </Link>

        <section className="mb-10">
          <h2 className={H2}>{t.role}</h2>
          {c.roleIntro.map((para, i) => (
            <p key={i} className={`text-gray-500 leading-relaxed${i < c.roleIntro.length - 1 ? ' mb-4' : ''}`}>
              {para}
            </p>
          ))}
        </section>

        <section className="mb-10">
          <h2 className={H2}>{t.responsibilities}</h2>
          <BulletList items={c.responsibilities} />
        </section>

        <section className="mb-10">
          <h2 className={H2}>{t.qualifications}</h2>
          <BulletList items={c.qualifications} />
        </section>

        <section className="mb-10">
          <h2 className={H2}>{t.niceToHave}</h2>
          <BulletList items={c.niceToHave} />
        </section>

        <section className="mb-10">
          <h2 className={H2}>{t.process}</h2>
          <p className="text-gray-500 leading-relaxed">{c.process}</p>
        </section>

        <div className="text-center" style={{
          borderTop: '1px solid #f0f0f0',
          paddingTop: '40px',
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5F5E5A] mb-4">{t.applyLabel}</p>
          <a
            href={mailto}
            style={{
              display: 'inline-block',
              background: '#0A1628',
              color: 'white',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              padding: '14px 32px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0D1F36')}
            onMouseLeave={e => (e.currentTarget.style.background = '#0A1628')}
          >
            {t.apply}
          </a>
        </div>

      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <SiteFooter lang={lang} />

    </main>
  );
}
