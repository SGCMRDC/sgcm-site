import { createImageUrlBuilder } from '@sanity/image-url';
import { dataset, projectId, sanityConfigured } from '../env';
import type { NewsImage } from './news';

// Images are resized by the Sanity CDN, not by Vercel Image Optimization (keeps the Hobby quota untouched).
const builder = sanityConfigured ? createImageUrlBuilder({ projectId, dataset }) : null;

export function imageSrc(image?: NewsImage | null): string | null {
  if (!builder || !image?.asset) return null;
  return builder.image(image).url();
}

export function ogImageUrl(image?: NewsImage | null): string | null {
  if (!builder || !image?.asset) return null;
  return builder.image(image).width(1200).height(630).fit('crop').auto('format').url();
}

export function hotspotPosition(image?: NewsImage | null): string {
  const h = image?.hotspot;
  return h ? `${Math.round(h.x * 100)}% ${Math.round(h.y * 100)}%` : '50% 50%';
}
