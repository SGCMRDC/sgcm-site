'use client';

import Image, { type ImageLoaderProps } from 'next/image';

// Resizing is done by the Sanity CDN (w, q, auto=format), so Vercel Image Optimization is not used.
function sanityLoader({ src, width, quality }: ImageLoaderProps) {
  const url = new URL(src);
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality ?? 75));
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'max');
  return url.toString();
}

export function SanityImage({ src, alt, sizes, objectPosition, priority = false }: {
  src: string;
  alt: string;
  sizes: string;
  objectPosition?: string;
  priority?: boolean;
}) {
  return (
    <Image
      loader={sanityLoader}
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      style={{ objectPosition }}
    />
  );
}
