import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand">St Cecilia Choir &amp; Orchestra</div>
            <div className="footer__ministry">A Ministry of Immaculate Conception &middot; El Paso, Texas</div>
          </div>
          <ul className="footer__links">
            <li><Link href="/concert">Concert</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/connect">Contact</Link></li>
          </ul>
          <div className="footer__copy">&copy; {year} St Cecilia Choir &amp; Orchestra. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
