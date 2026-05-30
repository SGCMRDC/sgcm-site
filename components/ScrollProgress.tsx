'use client';
import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setPct(max > 0 ? (scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        height: '3px', width: `${pct}%`,
        background: 'linear-gradient(90deg, #ff7f2a, #f7b500)',
        transition: 'width 0.08s linear',
        pointerEvents: 'none',
      }}
    />
  );
}
