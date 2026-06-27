'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Coller ici l'URL .m3u8 (ou .mp4) de la video SGCM. Vide = fond sombre de secours.
const HLS_SRC = '';

type Stage = { tag: string; h2: string; p: string; meta?: string; cap: string; img?: string };
type Content = {
  h1: string; sub: string; cue: string;
  threadLabel: string; proofLead: string; refLabel: string; stepsLabel: string;
  states: string[]; refs: string[];
  ticks: { name: string; sub: string }[];
  stages: Stage[];
  principleLabel: string; principleA: string; principleB: string; note: string; cta: string;
};

const FR: Content = {
  h1: 'La matière première, rendue prouvable.',
  sub: "Le programme CRP structure et documente la conformité des coopératives minières, jusqu'à la rendre recevable par les marchés les plus exigeants.",
  cue: 'Faites défiler',
  threadLabel: 'Le dossier de preuve',
  proofLead: 'La preuve',
  refLabel: 'Référence ajoutée :',
  stepsLabel: '/ 4 étapes',
  states: ['structurée', 'vérifiée', 'rendue lisible', 'transmise'],
  refs: ["Données d'origine", 'CEEC · SAEMAPE', 'OCDE · LBMA · UE 2017/821', 'Passeport numérique de produit'],
  ticks: [
    { name: 'Origine', sub: 'La mine' },
    { name: 'Vérification', sub: 'Le comptoir' },
    { name: 'Standards', sub: 'La raffinerie' },
    { name: 'Marché', sub: 'Le client final' },
  ],
  stages: [
    { tag: "À l'origine · la mine", h2: 'La preuve naît à la source', p: "Dès l'unité de production, le programme capte et structure les données d'origine. Identité de la coopérative, périmètre d'exploitation, premières pièces du dossier. La conformité commence là où commence la production.", cap: 'Visuel · Origine', img: '/images/ORIGINE.png' },
    { tag: 'La vérification · le comptoir', h2: 'Confrontée aux autorités', p: "Le dossier est recoupé avec les référentiels et les autorités compétentes. SGCM prépare et sécurise la matière documentaire ; la certification d'origine demeure la prérogative des autorités congolaises.", meta: 'CEEC · SAEMAPE · Ministère des Mines', cap: 'Visuel · Vérification', img: '/images/VERIFICATION.png' },
    { tag: 'Les standards · la raffinerie', h2: 'Lisible par les marchés', p: "Documentée et structurée, la conformité se lit au regard des standards internationaux. Une preuve défendable, vérifiable à chaque étape, qui résiste à l'examen le plus exigeant.", meta: 'OCDE 5 étapes · LBMA RGG V9 · CIRGL · Règlement UE 2017/821', cap: 'Visuel · Standards', img: '/images/STANDARDS.png' },
    { tag: 'Le marché · le client final', h2: 'Transmise, et durable', p: "La conformité établie peut être publiée vers les standards internationaux de traçabilité, sous la forme d'un passeport numérique de produit. SGCM en demeure le système de référence. La preuve ne se perd pas : elle accompagne la production jusqu'au client final.", cap: 'Visuel · Marché', img: '/images/MARCHE.png' },
  ],
  principleLabel: 'Le principe',
  principleA: "L'intelligence artificielle propose.",
  principleB: 'SGCM valide.',
  note: 'Chaque décision porte un nom et une date. De la rigueur documentaire, un levier de développement.',
  cta: 'Le programme CRP',
};

const EN: Content = {
  h1: 'Raw material, made provable.',
  sub: 'The CRP programme structures and documents the compliance of mining cooperatives, until it can be recognised by the most demanding markets.',
  cue: 'Scroll',
  threadLabel: 'The evidence file',
  proofLead: 'The evidence is',
  refLabel: 'Reference added:',
  stepsLabel: '/ 4 steps',
  states: ['structured', 'verified', 'made legible', 'transmitted'],
  refs: ['Origin data', 'CEEC · SAEMAPE', 'OECD · LBMA · EU 2017/821', 'Digital product passport'],
  ticks: [
    { name: 'Origin', sub: 'The mine' },
    { name: 'Verification', sub: 'The trading post' },
    { name: 'Standards', sub: 'The refinery' },
    { name: 'Market', sub: 'The end customer' },
  ],
  stages: [
    { tag: 'At the source · the mine', h2: 'Evidence begins at the source', p: 'From the production unit onward, the programme captures and structures origin data. Cooperative identity, area of operation, first documents in the file. Compliance begins where production begins.', cap: 'Visual · Origin', img: '/images/ORIGINE.png' },
    { tag: 'Verification · the trading post', h2: 'Tested against the authorities', p: 'The file is cross-checked against the reference frameworks and the competent authorities. SGCM prepares and secures the documentary substance; certification of origin remains the prerogative of the Congolese authorities.', meta: 'CEEC · SAEMAPE · Ministry of Mines', cap: 'Visual · Verification', img: '/images/VERIFICATION.png' },
    { tag: 'Standards · the refinery', h2: 'Legible to the markets', p: 'Documented and structured, compliance is read against the international standards. Defensible evidence, verifiable at every step, that withstands the most demanding scrutiny.', meta: 'OECD five steps · LBMA RGG V9 · ICGLR · EU Regulation 2017/821', cap: 'Visual · Standards', img: '/images/STANDARDS.png' },
    { tag: 'The market · the end customer', h2: 'Transmitted, and lasting', p: 'Established compliance can be published to international traceability standards, in the form of a digital product passport. SGCM remains the system of record. The evidence is not lost: it accompanies production through to the end customer.', cap: 'Visual · Market', img: '/images/MARCHE.png' },
  ],
  principleLabel: 'The principle',
  principleA: 'Artificial intelligence proposes.',
  principleB: 'SGCM validates.',
  note: 'Every decision carries a name and a date. Documentary rigour, turned into a lever for development.',
  cta: 'The CRP programme',
};

export default function CrpStandard({ lang }: { lang: 'en' | 'fr' }) {
  const c = lang === 'fr' ? FR : EN;
  const videoRef = useRef<HTMLVideoElement>(null);
  const flowRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<HTMLSpanElement>(null);
  const refRef = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLElement>(null);

  // Hero HLS (ne se declenche que si HLS_SRC est renseigne)
  useEffect(() => {
    const v = videoRef.current;
    if (!HLS_SRC || !v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (v.canPlayType('application/vnd.apple.mpegurl')) {
      v.src = HLS_SRC; v.play().catch(() => {});
    } else {
      import('hls.js').then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const h = new Hls({ maxBufferLength: 20 });
          h.loadSource(HLS_SRC); h.attachMedia(v); v.play().catch(() => {});
        }
      });
    }
  }, []);

  // Fil de preuve (remplissage + etat) lie au scroll
  useEffect(() => {
    const flow = flowRef.current, fill = fillRef.current;
    if (!flow || !fill) return;
    const ticks = Array.from(flow.querySelectorAll<HTMLElement>('.crp-tick'));
    const onScroll = () => {
      const r = flow.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, (-r.top) / Math.max(total, 1)));
      fill.style.transform = 'scaleY(' + p + ')';
      const idx = Math.max(0, Math.min(3, Math.floor(p * 3.999)));
      ticks.forEach((t, i) => t.classList.toggle('on', i <= idx));
      if (stateRef.current) stateRef.current.textContent = c.states[idx];
      if (refRef.current) refRef.current.textContent = c.refs[idx];
      if (countRef.current) countRef.current.textContent = String(idx + 1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [c]);

  // Apparitions de contenu
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.25 }
    );
    document.querySelectorAll('.crp-stage .rise').forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = (i % 4 * 0.06) + 's';
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const programmeHref = lang === 'fr' ? '/fr/programme-crp' : '/programme-crp';

  return (
    <div className="crp">
      <header className="crp-lead">
        <video ref={videoRef} className="crp-bgvideo" muted loop playsInline autoPlay preload="auto" style={HLS_SRC ? { display: 'block' } : undefined} />
        <div className="crp-scrim" />
        <h1 className="rise in">
          {(() => {
            const i = c.h1.indexOf(',');
            if (i === -1) return c.h1;
            const first = c.h1.slice(0, i + 1);
            const rest = c.h1.slice(i + 1).trim();
            return (
              <>
                {first} <span className="crp-h1-keep">{rest}</span>
              </>
            );
          })()}
        </h1>
        <p className="crp-sub rise in" style={{ animationDelay: '.12s' }}>{c.sub}</p>
        <div className="crp-cue label"><span className="ln" />{c.cue}</div>
      </header>

      <section className="crp-flow" ref={flowRef}>
        <div className="crp-flow-grid">
          <aside className="crp-thread">
            <div className="crp-thread-head">
              <span className="label">{c.threadLabel}</span>
              <div className="crp-state-big">{c.proofLead} <span ref={stateRef}>{c.states[0]}</span></div>
              <div className="crp-state-sub">{c.refLabel} <b ref={refRef}>{c.refs[0]}</b></div>
              <div className="crp-count"><b ref={countRef}>1</b> {c.stepsLabel}</div>
            </div>
            <div className="crp-rail">
              <div className="crp-track"><div className="crp-fill" ref={fillRef} /></div>
              <div className="crp-ticks">
                {c.ticks.map((t, i) => (
                  <div className="crp-tick" key={i}>{t.name}<small>{t.sub}</small></div>
                ))}
              </div>
            </div>
          </aside>

          <div className="crp-stages">
            {c.stages.map((s, i) => (
              <article className="crp-stage" key={i}>
                <div className="crp-stage-tag label rise">{s.tag}</div>
                <h2 className="rise">{s.h2}</h2>
                <p className="rise">{s.p}</p>
                {s.meta && <div className="crp-stage-meta mono rise">{s.meta}</div>}
                <div className="crp-visual rise">
                  {s.img ? (
                    <Image
                      src={s.img}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 840px"
                      className="crp-visual-img"
                    />
                  ) : (
                    <div className="frame" />
                  )}
                  <span className="cap label">{s.cap}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crp-coda">
        <div className="label">{c.principleLabel}</div>
        <h2>{c.principleA} <b>{c.principleB}</b></h2>
        <p className="note">{c.note}</p>
        <a className="crp-cta mono" href={programmeHref}>{c.cta} <span aria-hidden="true">{'→'}</span></a>
      </section>
    </div>
  );
}
