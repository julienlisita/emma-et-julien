// src/components/story/ScrollEngine.tsx

'use client';

import { useLayoutEffect } from 'react';

/**
 * Moteur de défilement : écrit --p (0 → 1) sur chaque `[data-ch]` et --g (0 → 1) sur
 * `[data-progress]`. Tout le reste est du CSS déclaratif ; aucun state React par frame.
 *
 * p = clamp((scrollY − sectionTop) / (sectionHeight − viewportHeight), 0, 1)
 * g = scrollY / (scrollHeight − viewportHeight)
 */
export default function ScrollEngine() {
  useLayoutEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-ch]'));
    const progress = document.querySelector<HTMLElement>('[data-progress]');

    let tops: number[] = [];
    let spans: number[] = [];
    let max = 1;
    let raf = 0;
    const lastP: string[] = [];
    let lastG = '';

    const measure = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      tops = sections.map((s) => s.getBoundingClientRect().top + y);
      spans = sections.map((s) => Math.max(1, s.offsetHeight - vh));
      max = document.documentElement.scrollHeight - vh;
    };

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      for (let i = 0; i < sections.length; i++) {
        const raw = (y - tops[i]) / spans[i];
        const p = (raw < 0 ? 0 : raw > 1 ? 1 : raw).toFixed(4);
        if (p !== lastP[i]) {
          sections[i].style.setProperty('--p', p);
          lastP[i] = p;
        }
      }
      if (progress) {
        const g = (max > 0 ? Math.min(1, Math.max(0, y / max)) : 0).toFixed(4);
        if (g !== lastG) {
          progress.style.setProperty('--g', g);
          lastG = g;
        }
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
