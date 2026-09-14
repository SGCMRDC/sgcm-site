'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { JOBS, type Job } from '../data/careers';

const CAREERS_EMAIL = 'careers@sgcm-mining.com';

const LABELS = {
  en: {
    careers: 'Careers',
    heroAlt: 'Reception area with the SGCM logo',
    back: '← All positions',
    role: 'The role',
    responsibilities: 'Responsibilities',
    qualifications: 'Qualifications',
    niceToHave: 'Nice to have',
    process: 'Recruitment process',
    applyLabel: 'Send your application',
    apply: 'Apply by email',
    subjectPrefix: 'Application - ',
    otherPositions: 'Other positions',
  },
  fr: {
    careers: 'Carrières',
    heroAlt: 'Espace d\'accueil avec le logo SGCM',
    back: '← Toutes les offres',
    role: 'Le rôle',
    responsibilities: 'Responsabilités',
    qualifications: 'Qualifications',
    niceToHave: 'Atouts appréciés',
    process: 'Processus de recrutement',
    applyLabel: 'Envoyer votre candidature',
    apply: 'Postuler par e-mail',
    subjectPrefix: 'Candidature - ',
    otherPositions: 'Autres postes',
  },
} as const;

const INSET = 'clamp(16px, 5vw, 70px)';
const EYEBROW = { fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '12px' } as const;
const BODY = { fontSize: '16px', color: '#374151', lineHeight: 1.75 } as const;
const DIVIDER = { borderTop: '0.5px solid rgba(0,0,0,0.12)', marginTop: '48px', paddingTop: '28px' } as const;

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3" style={BODY}>
          <span style={{ color: '#5F5E5A', flexShrink: 0 }}>-</span>
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
  const homeHref = lang === 'fr' ? '/fr' : '/';
  const mailto = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(t.subjectPrefix + c.title)}`;
  const [lede, ...roleBody] = c.roleIntro;
  const others = JOBS.filter(j => j.slug !== job.slug);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans" style={{ display: 'flow-root' }}>

      <SiteHeader
        variant="dark"
        solid={true}
        activeLang={lang}
        enHref={`/careers/${job.slug}`}
        frHref={`/fr/careers/${job.slug}`}
        activeLabel=""
      />

      {/* ── HERO ── */}
      <div
        className="relative rounded-[18px] overflow-hidden bg-[#0A1628] h-[max(400px,calc(100vw_-_2*clamp(16px,5vw,70px)))] md:h-[clamp(440px,60vh,640px)]"
        style={{
          marginTop: '170px',
          marginLeft: INSET,
          marginRight: INSET,
        }}
      >
        <Image
          src="/sgcm-careers-v1.jpeg"
          alt={t.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,22,40,.55) 0%, rgba(10,22,40,.12) 35%, rgba(10,22,40,.82) 100%)',
          }}
        />

        {/* Breadcrumb */}
        <div
          className="absolute flex items-center gap-2 top-5 md:top-[clamp(22px,4vh,46px)]"
          style={{
            left: 'clamp(20px, 4vw, 52px)',
          }}
        >
          <Link href={homeHref} aria-label="SGCM" className="flex items-center">
            <Image
              src="/symbol_SGCM-5.png"
              alt="SGCM"
              width={48}
              height={48}
              style={{ height: 'clamp(34px, 4.5vw, 48px)', width: 'auto' }}
            />
          </Link>
          <span className="text-white/55 text-base">›</span>
          <Link
            href={listHref}
            className="text-white tracking-wide"
            style={{ fontSize: 'clamp(13px, 1.6vw, 15px)' }}
          >
            {t.careers}
          </Link>
        </div>

        {/* Bottom content */}
        <div
          className="absolute bottom-7 md:bottom-[clamp(40px,8vh,96px)]"
          style={{
            left: 'clamp(20px, 4vw, 52px)',
            right: 'clamp(20px, 4vw, 52px)',
            maxWidth: 'min(760px, 92%)',
          }}
        >
          <h1
            className="text-white"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(30px, 4.6vw, 52px)',
              lineHeight: 1.06,
              letterSpacing: '-0.01em',
            }}
          >
            {c.title}
          </h1>
          <p
            className="text-white/80 mt-4"
            style={{ fontWeight: 300, fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.4 }}
          >
            {c.experience} · {c.employmentType} · {c.location}
          </p>
          <div
            className="flex items-center"
            style={{
              flexWrap: 'wrap',
              gap: 'clamp(16px, 4vw, 46px)',
              marginTop: 'clamp(22px, 4vh, 40px)',
            }}
          >
            <a
              href={mailto}
              className="flex items-center gap-3 text-white text-sm font-medium tracking-wide group"
            >
              {t.apply}
              <span
                className="flex items-center justify-center w-11 h-11 rounded-full transition-colors group-hover:bg-white group-hover:text-[#0A1628]"
                style={{ border: '1.5px solid rgba(255,255,255,0.65)' }}
              >
                →
              </span>
            </a>
            <Link
              href={listHref}
              className="text-white/80 text-sm tracking-wide transition-colors hover:text-white"
            >
              {t.back}
            </Link>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <section className="px-6 md:px-10 lg:px-[70px] pt-14 md:pt-20 pb-16 md:pb-24">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <p style={{ ...EYEBROW, fontSize: '11px', letterSpacing: '0.14em', marginBottom: '24px' }}>{t.role}</p>
          <p style={{ fontWeight: 300, fontSize: 'clamp(18px, 2.2vw, 25px)', lineHeight: 1.4, color: '#0A1628', marginBottom: roleBody.length ? '24px' : '48px' }}>
            {lede}
          </p>
          {roleBody.map((para, i) => (
            <p key={i} style={{ ...BODY, marginBottom: '14px' }}>{para}</p>
          ))}

          <div style={{ marginTop: '36px' }}>
            <p style={EYEBROW}>{t.responsibilities}</p>
            <BulletList items={c.responsibilities} />
          </div>

          <div style={{ marginTop: '36px' }}>
            <p style={EYEBROW}>{t.qualifications}</p>
            <BulletList items={c.qualifications} />
          </div>

          <div style={{ marginTop: '36px' }}>
            <p style={EYEBROW}>{t.niceToHave}</p>
            <BulletList items={c.niceToHave} />
          </div>

          <div style={{ marginTop: '36px' }}>
            <p style={EYEBROW}>{t.process}</p>
            <p style={BODY}>{c.process}</p>
          </div>

          {/* Apply */}
          <div style={DIVIDER}>
            <p style={{ ...EYEBROW, fontSize: '11px', letterSpacing: '0.14em', marginBottom: '18px' }}>{t.applyLabel}</p>
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

          {/* Other positions */}
          <div style={DIVIDER}>
            <p style={{ ...EYEBROW, fontSize: '11px', letterSpacing: '0.14em', marginBottom: '18px' }}>{t.otherPositions}</p>
            <div className="flex flex-col gap-3">
              {others.map(other => (
                <Link key={other.slug} href={`${listHref}/${other.slug}`} style={{ fontSize: '16px', color: '#0A1628' }}>
                  <span aria-hidden="true" style={{ marginRight: '8px' }}>→</span>{other[lang].title}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <SiteFooter lang={lang} />

    </main>
  );
}
