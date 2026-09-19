// Public Sanity identifiers (not secrets: they are also sent to browsers).
// The site reads a public dataset, so no API token is needed to fetch published articles.
export const apiVersion = '2025-02-19';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

// When the variables are missing (e.g. a build without the integration), news pages render empty instead of failing.
export const sanityConfigured = projectId !== '';
