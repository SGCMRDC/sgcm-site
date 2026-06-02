'use client';
import { useRef, useState } from 'react';

export function CardCarousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPct(max > 0 ? Math.min(100, (el.scrollLeft / max) * 100) : 0);
  };

  return (
    <>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-5 scrollbar-hide"
      >
        {children}
      </div>
      <div className="mt-5" style={{ maxWidth: '1200px' }}>
        <div style={{ height: '3px', width: '100%', background: 'rgba(0,0,0,0.08)', borderRadius: '9999px' }}>
          <div
            aria-hidden="true"
            style={{
              height: '3px',
              width: `${pct}%`,
              background: 'linear-gradient(90deg, #ff7f2a, #f7b500)',
              borderRadius: '9999px',
              transition: 'width 0.1s linear',
            }}
          />
        </div>
      </div>
    </>
  );
}
