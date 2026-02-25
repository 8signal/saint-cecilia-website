'use client';
import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          el.querySelectorAll('.gold-rule[data-animate]').forEach(r =>
            setTimeout(() => r.classList.add('animated'), 400)
          );
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} data-delay={delay || undefined}>
      {children}
    </div>
  );
}
