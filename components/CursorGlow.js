'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow({ className = 'hero__glow' }) {
  const glowRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const section = glow?.parentElement;
    if (!glow || !section) return;
    if (!window.matchMedia('(min-width:900px)').matches) return;

    const handleMove = (e) => {
      const r = section.getBoundingClientRect();
      glow.style.left = (e.clientX - r.left) + 'px';
      glow.style.top = (e.clientY - r.top) + 'px';
    };
    section.addEventListener('mousemove', handleMove);
    return () => section.removeEventListener('mousemove', handleMove);
  }, []);

  return <div ref={glowRef} className={className} />;
}
