import { defineArrayMember, defineField, defineType } from 'sanity';

// Page addresses without accents or punctuation: "SGCM reçue à Anvers" -> "sgcm-recue-a-anvers".
const slugify = (input: string) =>
  input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['\u2019]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96);

export const NEWS_CATEGORIES = [
  { title: 'Partenariats / Partnerships', value: 'partnerships' },
  { title: 'Programme CRP™ / CRP™ Program', value: 'crp-program' },
  { title: 'Institutionnel / Institutional', value: 'institutional' },
  { title: 'Conformité / Compliance', value: 'compliance' },
  { title: "Vie de l'entreprise / Company news", value: 'corporate' },
];

// Editorial rules of the SGCM site, surfaced as warnings in the Studio (publishing stays possible).
function editorialWarnings(value: unknown, { french }: { french: boolean }): true | string {
  const text = typeof value === 'string'
    ? value
    : Array.isArray(value)
      ? JSON.stringify(value)
      : '';
  if (!text) return true;
  if (french && text.includes('\u2014')) return 'Pas de tiret cadratin dans les textes français.';
  if (/\bCRP\b(?!™)/.test(text)) return 'Écrire « CRP™ » avec le signe TM.';
  return true;
}

const frRule = (rule: { custom: (fn: (v: unknown) => true | string) => { warning: () => unknown } }) =>
  rule.custom((v) => editorialWarnings(v, { french: true })).warning();
const enRule = (rule: { custom: (fn: (v: unknown) => true | string) => { warning: () => unknown } }) =>
  rule.custom((v) => editorialWarnings(v, { french: false })).warning();

const body = (title: string, french: boolean) =>
  defineField({
    name: french ? 'bodyFr' : 'bodyEn',
    title,
    type: 'array',
    group: french ? 'fr' : 'en',
    of: [
      defineArrayMember({
        type: 'block',
        styles: [
          { title: 'Paragraphe', value: 'normal' },
          { title: 'Intertitre', value: 'h2' },
          { title: 'Sous-intertitre', value: 'h3' },
          { title: 'Citation', value: 'blockquote' },
        ],
        lists: [
          { title: 'Puces', value: 'bullet' },
          { title: 'Numérotée', value: 'number' },
        ],
        marks: {
          decorators: [{ title: 'Gras', value: 'strong' }, { title: 'Italique', value: 'em' }],
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'Lien',
              fields: [{ name: 'href', type: 'url', title: 'Adresse', validation: (r) => r.uri({ scheme: ['http', 'https', 'mailto'] }) }],
            },
          ],
        },
      }),
    ],
    validation: (rule) => (french ? frRule(rule as never) : enRule(rule as never)) as never,
  });

export const articleType = defineType({
  name: 'article',
  title: 'Actualité',
  type: 'document',
  groups: [
    { name: 'meta', title: 'Publication', default: true },
    { name: 'fr', title: 'Français' },
    { name: 'en', title: 'English' },
    { name: 'media', title: 'Image' },
  ],
  fields: [
    defineField({ name: 'publishedAt', title: 'Date de publication', type: 'datetime', group: 'meta', initialValue: () => new Date().toISOString(), validation: (r) => r.required() }),
    defineField({ name: 'location', title: 'Lieu', type: 'string', group: 'meta', initialValue: 'Kinshasa', description: 'Affiché dans la ligne « Actualité | Lieu | Date ».' }),
    defineField({ name: 'categories', title: 'Catégories', type: 'array', group: 'meta', of: [{ type: 'string' }], options: { list: NEWS_CATEGORIES, layout: 'grid' } }),
    defineField({ name: 'featured', title: 'À la une', type: 'boolean', group: 'meta', initialValue: false, description: 'L’article à la une le plus récent est mis en avant en haut de la page Actualités.' }),

    defineField({ name: 'titleFr', title: 'Titre (FR)', type: 'string', group: 'fr', validation: (r) => [r.required().max(140), frRule(r as never) as never] }),
    defineField({ name: 'slugFr', title: 'Adresse de la page (FR)', type: 'slug', group: 'fr', options: { source: 'titleFr', maxLength: 96, slugify }, validation: (r) => r.required() }),
    defineField({ name: 'excerptFr', title: 'Chapeau (FR)', type: 'text', rows: 3, group: 'fr', description: 'Deux ou trois phrases, affichées sur la carte et en tête d’article.', validation: (r) => [r.max(320), frRule(r as never) as never] }),
    body('Texte (FR)', true),

    defineField({ name: 'titleEn', title: 'Title (EN)', type: 'string', group: 'en', validation: (r) => [r.required().max(140), enRule(r as never) as never] }),
    defineField({ name: 'slugEn', title: 'Page address (EN)', type: 'slug', group: 'en', options: { source: 'titleEn', maxLength: 96, slugify }, validation: (r) => r.required() }),
    defineField({ name: 'excerptEn', title: 'Lead (EN)', type: 'text', rows: 3, group: 'en', validation: (r) => [r.max(320), enRule(r as never) as never] }),
    body('Body (EN)', false),

    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      group: 'media',
      description: 'Facultative. Sans image, la carte affiche un fond neutre au symbole SGCM.',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Description de l’image (accessibilité)', type: 'string' }),
        defineField({ name: 'captionFr', title: 'Légende (FR)', type: 'string' }),
        defineField({ name: 'captionEn', title: 'Caption (EN)', type: 'string' }),
      ],
    }),
  ],
  orderings: [{ title: 'Date de publication, récent en premier', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'titleFr', date: 'publishedAt', media: 'coverImage', featured: 'featured' },
    prepare({ title, date, media, featured }) {
      const d = date ? new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Sans date';
      return { title: title || 'Sans titre', subtitle: `${featured ? 'À la une · ' : ''}${d}`, media };
    },
  },
});
