import { useEffect, useRef, useState } from 'react';

export function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handle = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (y <= 8) {
          setHidden(false);
        } else if (Math.abs(delta) > 4) {
          setHidden(delta > 0);
        }
        lastY.current = y;
      });
    };

    window.addEventListener('scroll', handle, { passive: true });
    return () => {
      window.removeEventListener('scroll', handle);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return hidden;
}
