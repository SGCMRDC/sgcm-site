import Link from 'next/link';
import { CAREERS_INTRO, JOBS } from '../data/careers';

const LABELS = {
  en: { eyebrow: 'Join SGCM', openings: 'Open positions', view: 'View position' },
  fr: { eyebrow: 'Rejoignez SGCM', openings: 'Postes ouverts', view: 'Voir le poste' },
} as const;

export function JobList({ lang }: { lang: 'en' | 'fr' }) {
  const intro = CAREERS_INTRO[lang];
  const t = LABELS[lang];
  const baseHref = lang === 'fr' ? '/fr/careers' : '/careers';

  return (
    <>
      {/* ══════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a]" style={{ marginTop: '102px', paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">{t.eyebrow}</p>
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontWeight: 300 }}>
            {intro.heading}
          </h1>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <p className="text-gray-500 leading-relaxed mb-12">{intro.body}</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-100">{t.openings}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
            {JOBS.map(job => {
              const c = job[lang];
              return (
                <article
                  key={job.slug}
                  className="flex flex-col"
                  style={{ border: '1px solid rgba(26,31,44,0.2)', padding: '28px' }}
                >
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
                    className="text-[12px] font-medium tracking-widest uppercase self-start"
                    style={{ color: '#0A1628' }}
                  >
                    {t.view} →
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

      </div>
    </>
  );
}
