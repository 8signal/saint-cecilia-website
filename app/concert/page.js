import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Upcoming Concert — St Cecilia Choir & Orchestra',
  description: 'Join us for an unforgettable evening of sacred choral masterworks this Easter season in El Paso.',
};

export default function ConcertPage() {
  return (
    <>
      <section className="about" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <ScrollReveal>
            <div className="about__inner">
              <span className="section-num">01</span>
              <p className="about__label">Inaugural Concert</p>
              <h2 className="about__title">A Cathedral of Sound in the Desert</h2>
              <hr className="gold-rule gold-rule--center" data-animate="" />
              <p className="about__text">Join us for an unforgettable evening of sacred choral masterworks. The St Cecilia Choir &amp; Orchestra unites the Borderland&apos;s finest voices and musicians to deliver breathtaking performances of music that has moved audiences for centuries.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="event">
        <div className="container">
          <div className="event__inner">
            <ScrollReveal>
              <div className="event__details">
                <p className="event__label">Concert Details</p>
                <h2 className="event__title">Easter Season 2026</h2>
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
                  <div className="event__meta-item">
                    <svg className="event__meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    <div className="event__meta-text"><strong>Tickets</strong>Availability to be announced — Join the waitlist for early access</div>
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
    </>
  );
}
