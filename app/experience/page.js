import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'The Experience — St Cecilia Choir & Orchestra',
  description: 'More than a concert. Discover what makes a St Cecilia performance an unforgettable experience.',
};

export default function ExperiencePage() {
  return (
    <>
      <section className="about" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="container">
          <ScrollReveal>
            <div className="about__inner">
              <span className="section-num">01</span>
              <p className="about__label">The Experience</p>
              <h2 className="about__title">More Than a Concert</h2>
              <hr className="gold-rule gold-rule--center" data-animate="" />
              <p className="about__text">A St Cecilia performance is not simply a concert — it is an invitation to step out of the everyday and into something transcendent. From the moment you enter the venue, every detail is crafted to create an experience that stays with you long after the final note.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
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
    </>
  );
}
