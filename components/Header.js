'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-brand" onClick={closeMenu}>
            <span className="nav-brand__name">St Cecilia Choir &amp; Orchestra</span>
            <span className="nav-brand__tagline">A Ministry of Immaculate Conception</span>
          </Link>
          <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
            <li><Link href="/concert" onClick={closeMenu}>Upcoming Concert</Link></li>
            <li><Link href="/about" onClick={closeMenu}>About</Link></li>
            <li><Link href="/experience" onClick={closeMenu}>The Experience</Link></li>
            <li><Link href="/connect" onClick={closeMenu}>Connect</Link></li>
          </ul>
          <Link href="/concert" className="nav-cta">Get Tickets</Link>
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
