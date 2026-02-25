'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
      const nav = document.querySelector('.site-nav');
      const offset = nav ? nav.offsetHeight + 20 : 80;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}>
            <span className="nav-brand__name">St Cecilia Choir &amp; Orchestra</span>
            <span className="nav-brand__tagline">A Ministry of Immaculate Conception</span>
          </a>
          <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
            <li><a href="#event" onClick={(e) => scrollTo(e, 'event')}>Upcoming Concert</a></li>
            <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a></li>
            <li><a href="#experience" onClick={(e) => scrollTo(e, 'experience')}>The Experience</a></li>
            <li><a href="#stay-connected" onClick={(e) => scrollTo(e, 'stay-connected')}>Connect</a></li>
          </ul>
          <a href="#event" className="nav-cta" onClick={(e) => scrollTo(e, 'event')}>Get Tickets</a>
          <button
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
