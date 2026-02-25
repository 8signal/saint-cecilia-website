import Link from 'next/link';
import CursorGlow from '@/components/CursorGlow';
import HeroParticles from '@/components/HeroParticles';
import ScrollReveal from '@/components/ScrollReveal';
import EmailSignup from '@/components/EmailSignup';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="heroSection">
        <div className="hero__bg"></div>
        <CursorGlow className="hero__glow" />
        <HeroParticles />
        <div className="hero__lines"><span></span><span></span><span></span><span></span><span></span></div>
        <div className="hero__content">
          <div className="hero__cross">✦</div>
          <p className="hero__overline">St Cecilia Choir &amp; Orchestra Presents</p>
          <h1 className="hero__title">Experience Music that<br /><em>Elevates the Soul</em></h1>
          <p className="hero__subtitle">Escape the noise and immerse yourself in the timeless power of sacred music. Join us for our inaugural concert this Easter season in El Paso.</p>
          <div className="hero__actions">
            <Link href="/concert" className="btn btn--primary">View Concert Details</Link>
            <Link href="/connect" className="btn btn--ghost">Stay Informed</Link>
          </div>
        </div>
        <Link href="/concert" className="hero__scroll"><span>Discover</span><div className="hero__scroll-line"></div></Link>
      </section>

      {/* EVENT */}
      <section className="event" id="event">
        <div className="container">
          <div className="event__inner">
            <ScrollReveal>
              <div className="event__details">
                <span className="section-num">01</span>
                <p className="event__label">Inaugural Concert</p>
                <h2 className="event__title">A Cathedral of Sound<br />in the Desert</h2>
                <p className="event__description">Join us for an unforgettable evening of sacred choral masterworks. The St Cecilia Choir &amp; Orchestra unites the Borderland&apos;s finest voices and musicians to deliver breathtaking performances of music that has moved audiences for centuries.</p>
                <div className="event__meta">
                  <div className="event__meta-item">
                    <svg className="event__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    <div className="event__meta-text"><strong>Date</strong>Easter Season 2026 — Dates to be announced</div>
                  </div>
                  <div className="event__meta-item">
                    <svg className="event__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    <div className="event__meta-text"><strong>Venue</strong>El Paso, Texas — Venue details coming soon</div>
                  </div>
                  <div className="event__meta-item">
                    <svg className="event__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    <div className="event__meta-text"><strong>Program</strong>Sacred choral masterworks — Full program to be revealed</div>
                  </div>
                </div>
                <Link href="/connect" className="btn btn--dark">Be the First to Know</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="event__card">
                <div className="event__card-shimmer"></div>
                <div className="event__card-cross">✦</div>
                <p className="event__card-date">Easter Season</p>
                <h3 className="event__card-season">Inaugural<br /><em>Concert</em></h3>
                <div className="event__card-divider"></div>
                <p className="event__card-venue">St Cecilia Choir &amp; Orchestra<br />El Paso, Texas<br />Spring 2026</p>
                <div className="event__card-cta"><Link href="/connect" className="btn btn--gold-outline">Join the Waitlist</Link></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <CursorGlow className="about__glow" />
        <div className="container">
          <ScrollReveal>
            <div className="about__inner">
              <span className="section-num">02</span>
              <p className="about__label">Our Mission</p>
              <h2 className="about__title">Setting the Standard for Choral Excellence in the Borderland</h2>
              <hr className="gold-rule gold-rule--center" data-animate="" />
              <p className="about__text">The St Cecilia Choir &amp; Orchestra is a ministry of Immaculate Conception, dedicated to honoring and preserving centuries of sacred musical tradition. We unite the region&apos;s finest voices and musicians to deliver performances of unparalleled artistry — right here at home.</p>
              <p className="about__text">We believe our community deserves consistent, high-caliber arts. Named for the patron saint of musicians, our mission is to be a vital pillar of the cultural life in El Paso and Las Cruces, bringing world-class sacred music to the desert Southwest.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits" id="experience">
        <div className="container">
          <ScrollReveal>
            <div className="benefits__header">
              <span className="section-num">03</span>
              <p className="benefits__label">The Experience</p>
              <h2 className="benefits__title">More Than a Concert</h2>
            </div>
          </ScrollReveal>
          <div className="benefits__grid">
            <ScrollReveal delay={1}>
              <div className="benefit">
                <svg className="benefit__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                <h3 className="benefit__title">A Sanctuary from the Noise</h3>
                <p className="benefit__text">When you&apos;re tired of the constant distraction and superficiality of modern entertainment, our performances offer a dedicated time and space to unplug and be transported by the profound beauty of the human voice.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="benefit">
                <svg className="benefit__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                <h3 className="benefit__title">An Emotional Reset</h3>
                <p className="benefit__text">Immerse yourself in music that is both beautiful and profound. Leave feeling spiritually uplifted, emotionally restored, and reconnected to something timeless — ready for the week ahead.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="benefit">
                <svg className="benefit__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <h3 className="benefit__title">Patron of the Arts</h3>
                <p className="benefit__text">Be part of something exceptional in your own community. Your presence sustains high-quality local arts and affirms that El Paso and Las Cruces deserve — and can deliver — world-class sacred music.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <span className="quote-section__mark quote-section__mark--open">&ldquo;</span>
        <span className="quote-section__mark quote-section__mark--close">&ldquo;</span>
        <div className="container">
          <ScrollReveal>
            <p className="quote-section__text">Timeless beauty, crafted with human hands and voices, has the power to elevate the spirit.</p>
            <hr className="gold-rule gold-rule--center" data-animate="" />
            <p className="quote-section__attr">The Promise of St Cecilia</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="stay-connected">
        <div className="container">
          <ScrollReveal>
            <div className="cta__inner">
              <span className="section-num" style={{ color: 'var(--gold-light)' }}>04</span>
              <p className="about__label">Stay Connected</p>
              <h2 className="cta__title">Be the First to Know</h2>
              <p className="cta__text">Concert dates, program details, and ticket availability will be announced soon. Join our mailing list to receive early access and exclusive updates.</p>
              <EmailSignup />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
