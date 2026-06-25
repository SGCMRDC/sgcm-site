import Image from 'next/image';

// Lucide v1.17.0 doesn't include Linkedin — inline SVG matches the Lucide path exactly.
const LinkedinIcon = ({ size = 24, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

type SocialEntry = {
  name: string;
  href: string;
  icon: typeof LinkedinIcon;
  ariaLabel: { en: string; fr: string };
};

// Socials row renders only when at least one entry is active.
const SOCIALS: SocialEntry[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sgcm-drc/',
    icon: LinkedinIcon,
    ariaLabel: { en: 'SGCM on LinkedIn', fr: 'SGCM sur LinkedIn' },
  },
  // { name: 'X',       href: 'https://x.com/sgcm',       ariaLabel: { en: 'SGCM on X',       fr: 'SGCM sur X'       } },
  // { name: 'YouTube', href: 'https://youtube.com/@sgcm', ariaLabel: { en: 'SGCM on YouTube', fr: 'SGCM sur YouTube' } },
];

const DATA = {
  en: {
    baseline: 'Structuring mineral supply chain compliance, from the DRC to international markets.',
    city: 'Kinshasa · Kolwezi · Brussels',
    company: 'Company',
    aboutHref: '/about',
    about: 'About Us',
    careersHref: '/careers',
    careers: 'Careers',
    servicesLabel: 'Services',
    services: [
      { label: 'CRP Program',             href: '/#services' },
      { label: 'Compliance Framework',     href: '/#services' },
      { label: 'Traceability Integration', href: '/#services' },
      { label: 'Institutional Advisory',   href: '/#services' },
    ],
    contactLabel: 'Contact',
    officeA: 'Kinshasa Office',
    officeB: 'Brussels Office',
    legalLabel: 'Legal',
    privacyHref: '/privacy',
    privacy: 'Privacy Policy',
    legalHref: '/legal',
    legal: 'Legal Notice',
    barPrivacy: 'Privacy',
    barLegal: 'Legal',
  },
  fr: {
    baseline: "Structurer la conformité des chaînes minières, de la RDC aux marchés internationaux.",
    city: 'Kinshasa · Kolwezi · Bruxelles',
    company: 'Entreprise',
    aboutHref: '/fr/a-propos',
    about: 'À propos',
    careersHref: '/fr/careers',
    careers: 'Carrières',
    servicesLabel: 'Services',
    services: [
      { label: 'Programme CRP',            href: '/fr/#services' },
      { label: 'Cadre de conformité',      href: '/fr/#services' },
      { label: 'Intégration tracabilité',  href: '/fr/#services' },
      { label: 'Conseil institutionnel',   href: '/fr/#services' },
    ],
    contactLabel: 'Contact',
    officeA: 'Bureau de Kinshasa',
    officeB: 'Bureau de Bruxelles',
    legalLabel: 'Juridique',
    privacyHref: '/fr/privacy',
    privacy: 'Politique de confidentialité',
    legalHref: '/fr/legal',
    legal: 'Mentions légales',
    barPrivacy: 'Confidentialité',
    barLegal: 'Juridique',
  },
} as const;

interface SiteFooterProps {
  lang: 'en' | 'fr';
  className?: string;
}

export function SiteFooter({ lang, className }: SiteFooterProps) {
  const d = DATA[lang];

  return (
    <footer className={`bg-[#0a0a0a] text-white${className ? ` ${className}` : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-14 items-start">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col">
          <Image
            src="/sgcm-logo.png"
            alt="SGCM"
            width={220}
            height={60}
            className="object-contain w-[220px] h-auto mb-8"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: '1.7' }}>
            {d.baseline}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>{d.city}</p>
          {SOCIALS.length > 0 && (
            <div className="flex gap-2 mt-1">
              {SOCIALS.map(({ name, href, icon: Icon, ariaLabel }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel[lang]}
                  className="w-7 h-7 flex items-center justify-center rounded border border-white/15 text-white/40 hover:text-white hover:border-white/40 transition-colors"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Company / Entreprise */}
        <div className="flex flex-col gap-4">
          <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">{d.company}</p>
          <a href={d.aboutHref} className="text-white/40 text-xs hover:text-white transition-colors">{d.about}</a>
          <a href={d.careersHref} className="text-white/40 text-xs hover:text-white transition-colors">{d.careers}</a>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">{d.servicesLabel}</p>
          {d.services.map(({ label, href }) => (
            <a key={label} href={href} className="text-white/40 text-xs hover:text-white transition-colors">{label}</a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">{d.contactLabel}</p>
          <a href="mailto:contact@sgcm-mining.com" className="text-white/40 text-xs hover:text-white transition-colors">contact@sgcm-mining.com</a>
          <span className="text-white/25 text-xs">{d.officeA}</span>
          <span className="text-white/25 text-xs">{d.officeB}</span>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mb-2">{d.legalLabel}</p>
          <a href={d.privacyHref} className="text-white/40 text-xs hover:text-white transition-colors">{d.privacy}</a>
          <a href={d.legalHref} className="text-white/40 text-xs hover:text-white transition-colors">{d.legal}</a>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 px-6 py-6 md:py-7 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>© 2026 SGCM SARL</span>
            <span className="text-white/20">|</span>
            <a href={d.privacyHref} className="hover:text-white/70 transition">{d.barPrivacy}</a>
            <span className="text-white/20">|</span>
            <a href={d.legalHref} className="hover:text-white/70 transition">{d.barLegal}</a>
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
  );
}
