import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, sanityConfigured } from '../env';

// Read-only, token-less client on the Sanity CDN: only published documents are visible.
export const client = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' })
  : null;
