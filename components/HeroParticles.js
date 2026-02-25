'use client';
import { useEffect, useRef } from 'react';

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class P {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.s = Math.random() * 1.8 + 0.3;
        this.vy = -(Math.random() * 0.25 + 0.05);
        this.vx = (Math.random() - 0.5) * 0.15;
        this.o = Math.random() * 0.35 + 0.05;
        this.fs = Math.random() * 0.003 + 0.001;
        this.g = Math.random() > 0.5;
      }
      update() {
        this.y += this.vy;
        this.x += this.vx;
        this.o += this.g ? this.fs : -this.fs;
        if (this.o >= 0.4) this.g = false;
        if (this.o <= 0.02) this.g = true;
        if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(201,168,76,' + this.o + ')';
        ctx.fill();
      }
    }

    const count = Math.min(50, Math.floor(canvas.width / 25));
    for (let i = 0; i < count; i++) particles.push(new P());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    }

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) animate();
      else cancelAnimationFrame(animId);
    });
    obs.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      obs.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__particles" />;
}
