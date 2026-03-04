'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand">St Cecilia Choir &amp; Orchestra</div>
            <div className="footer__ministry">A Ministry of <a href="https://www.fsspelpaso.com/" target="_blank" rel="noopener noreferrer" className="footer__parish-link">Immaculate Conception Parish</a> &middot; El Paso, Texas</div>
          </div>
          <ul className="footer__links">
            <li><a href="#event">Concert</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#stay-connected">Contact</a></li>
            <li><a href="https://www.fsspelpaso.com/" target="_blank" rel="noopener noreferrer">Our Parish</a></li>
          </ul>
          <div className="footer__copy">&copy; {year} St Cecilia Choir &amp; Orchestra. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
