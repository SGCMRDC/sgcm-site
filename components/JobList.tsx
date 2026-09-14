import Image from 'next/image';
import Link from 'next/link';
import { CAREERS_INTRO, JOBS } from '../data/careers';

const LABELS = {
  en: {
    eyebrow: 'Join SGCM',
    heroAlt: 'Kinshasa, Democratic Republic of the Congo',
    heroLink1: 'View open positions',
    heroLink2: '→ Recruitment process',
    positionsId: 'positions',
    openings: 'Open positions',
    view: 'View position',
    processId: 'recruitment',
    processEyebrow: 'Recruitment',
    processTitle: 'Recruitment process',
    steps: [
      { title: 'Introductory conversation', text: 'A first exchange by video call on Microsoft Teams.' },
      { title: 'Technical interview', text: 'A technical interview, also on Microsoft Teams.' },
      { title: 'In-person meeting', text: 'A meeting in person in Kinshasa.' },
    ],
    processNote: 'For the DevOps / Infrastructure engagement, the process consists of the first two steps.',
  },
  fr: {
    eyebrow: 'Rejoignez SGCM',
    heroAlt: 'Kinshasa, République Démocratique du Congo',
    heroLink1: 'Voir les postes ouverts',
    heroLink2: '→ Processus de recrutement',
    positionsId: 'postes',
    openings: 'Postes ouverts',
    view: 'Voir le poste',
    processId: 'recrutement',
    processEyebrow: 'Recrutement',
    processTitle: 'Processus de recrutement',
    steps: [
      { title: 'Premier échange', text: 'Un premier échange en visioconférence sur Microsoft Teams.' },
      { title: 'Entretien technique', text: 'Un entretien technique, également sur Microsoft Teams.' },
      { title: 'Rencontre en présentiel', text: 'Une rencontre en présentiel à Kinshasa.' },
    ],
    processNote: 'Pour la mission DevOps / Infrastructure, le processus comprend les deux premières étapes.',
  },
} as const;

const INSET = 'clamp(16px, 5vw, 70px)';

export function JobList({ lang }: { lang: 'en' | 'fr' }) {
  const intro = CAREERS_INTRO[lang];
  const t = LABELS[lang];
  const baseHref = lang === 'fr' ? '/fr/careers' : '/careers';
  const homeHref = lang === 'fr' ? '/fr' : '/';

  return (
    <div className="bg-white" style={{ display: 'flow-root' }}>

      {/* ── HERO ── */}
      <div
        className="relative rounded-[18px] overflow-hidden bg-[#0A1628]"
        style={{
          marginTop: '170px',
          marginLeft: INSET,
          marginRight: INSET,
          height: 'clamp(460px, 64vh, 740px)',
        }}
      >
        <Image
          src="/kin-rdc-sgcm.webp"
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
              'linear-gradient(180deg, rgba(10,22,40,.55) 0%, rgba(10,22,40,.12) 35%, rgba(10,22,40,.78) 100%)',
          }}
        />

        {/* Breadcrumb */}
        <div
          className="absolute flex items-center gap-2"
          style={{
            top: 'clamp(22px, 4vh, 46px)',
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
          <span
            className="text-white tracking-wide"
            style={{ fontSize: 'clamp(13px, 1.6vw, 15px)' }}
          >
            {intro.heading}
          </span>
        </div>

        {/* Bottom content */}
        <div
          className="absolute"
          style={{
            bottom: 'clamp(48px, 9vh, 118px)',
            left: 'clamp(20px, 4vw, 52px)',
            right: 'clamp(20px, 4vw, 52px)',
            maxWidth: 'min(680px, 86%)',
          }}
        >
          <h1
            className="text-white"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(34px, 6vw, 66px)',
              lineHeight: 1.04,
              letterSpacing: '-0.01em',
            }}
          >
            {intro.heading}
          </h1>
          <div
            className="flex items-center"
            style={{
              flexWrap: 'wrap',
              gap: 'clamp(20px, 4vw, 46px)',
              marginTop: 'clamp(28px, 5vh, 46px)',
            }}
          >
            <a
              href={`#${t.positionsId}`}
              className="flex items-center gap-3 text-white text-sm font-medium tracking-wide group"
            >
              {t.heroLink1}
              <span
                className="flex items-center justify-center w-11 h-11 rounded-full transition-colors group-hover:bg-white group-hover:text-[#0A1628]"
                style={{ border: '1.5px solid rgba(255,255,255,0.65)' }}
              >
                →
              </span>
            </a>
            <a
              href={`#${t.processId}`}
              className="text-white/80 text-sm tracking-wide transition-colors hover:text-white"
            >
              {t.heroLink2}
            </a>
          </div>
        </div>
      </div>

      {/* ── LEDE ── */}
      <section className="px-4 md:px-10 lg:px-[70px] pt-20 md:pt-28 pb-16 md:pb-24">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="text-[11px] font-medium tracking-[0.14em] text-[#6b7280] uppercase mb-8">
            {t.eyebrow}
          </p>
          <p
            className="text-[#0A1628] font-light"
            style={{ fontSize: 'clamp(18px, 2.2vw, 25px)', lineHeight: 1.4 }}
          >
            {intro.body}
          </p>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section
        id={t.positionsId}
        className="px-4 md:px-10 lg:px-[70px] pb-20 md:pb-28"
        style={{ scrollMarginTop: '96px' }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <h2
            className="text-[#0A1628]"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: 'clamp(28px, 4vw, 44px)',
            }}
          >
            {t.openings}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 md:gap-8">
            {JOBS.map(job => {
              const c = job[lang];
              return (
                <article
                  key={job.slug}
                  className="flex flex-col"
                  style={{ borderTop: '1px solid rgba(10,22,40,0.15)', paddingTop: '24px' }}
                >
                  <p className="text-[11px] font-medium tracking-[0.14em] text-[#6b7280] uppercase mb-3">
                    {c.employmentType}
                  </p>
                  <h3 className="text-[19px] font-medium text-[#0A1628] mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-[14px] text-[#6b7280] leading-relaxed flex-1 mb-5">
                    {c.experience}
                    <br />
                    {c.location}
                  </p>
                  <Link
                    href={`${baseHref}/${job.slug}`}
                    className="self-start"
                    style={{ fontSize: '15px', color: '#0A1628' }}
                  >
                    <span aria-hidden="true" style={{ marginRight: '8px' }}>→</span>
                    {t.view}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RECRUITMENT PROCESS ── */}
      <section
        id={t.processId}
        className="rounded-[18px] bg-[#0A1628]"
        style={{
          marginLeft: INSET,
          marginRight: INSET,
          marginBottom: 'clamp(64px, 9vw, 112px)',
          padding: 'clamp(40px, 7vw, 72px) clamp(24px, 5vw, 56px)',
          scrollMarginTop: '96px',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <p className="text-[11px] font-medium tracking-[0.14em] text-white/60 uppercase mb-5">
            {t.processEyebrow}
          </p>
          <h2
            className="text-white"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: 'clamp(28px, 4vw, 44px)',
            }}
          >
            {t.processTitle}
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {t.steps.map((step, i) => (
              <li key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: '22px' }}>
                <p className="font-mono text-[13px] text-white/50 mb-4">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-[19px] font-medium text-white mb-2 leading-snug">{step.title}</h3>
                <p className="text-[15px] text-white/60 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-[14px] text-white/50 leading-relaxed mt-10">{t.processNote}</p>
        </div>
      </section>

    </div>
  );
}
