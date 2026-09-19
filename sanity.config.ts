import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

// Hosted Studio (https://sgcm.sanity.studio): built by the Sanity CLI, not by Next.js,
// so the NEXT_PUBLIC_* variables are not available here. These identifiers are public.
export default defineConfig({
  name: 'sgcm',
  title: 'SGCM · Actualités',
  projectId: 'odvn3tay',
  dataset: 'production',
  schema: { types: schemaTypes },
  plugins: [structureTool()],
});
