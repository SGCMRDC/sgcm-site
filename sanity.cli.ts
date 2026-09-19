import { defineCliConfig } from 'sanity/cli';

// Studio hosted by Sanity at https://sgcm.sanity.studio (deployed with `npx sanity deploy`).
// Project ID and dataset are public identifiers, not secrets.
export default defineCliConfig({
  api: { projectId: 'odvn3tay', dataset: 'production' },
  studioHost: 'sgcm',
  deployment: { appId: 'nz3upx07w6p4zf6f0ice28pv', autoUpdates: false },
  // The site's public/ folder (photos, logos) is not part of the Studio.
  vite: (config) => ({ ...config, publicDir: false }),
});
