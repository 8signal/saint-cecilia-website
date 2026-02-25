import CursorGlow from '@/components/CursorGlow';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'About — St Cecilia Choir & Orchestra',
  description: 'Learn about our mission to bring world-class sacred choral music to El Paso and Las Cruces.',
};

export default function AboutPage() {
  return (
    <>
      <section className="about" style={{ paddingTop: '10rem' }}>
        <CursorGlow className="about__glow" />
        <div className="container">
          <ScrollReveal>
            <div className="about__inner">
              <span className="section-num">01</span>
              <p className="about__label">Our Mission</p>
              <h2 className="about__title">Setting the Standard for Choral Excellence in the Borderland</h2>
              <hr className="gold-rule gold-rule--center" data-animate="" />
              <p className="about__text">The St Cecilia Choir &amp; Orchestra is a ministry of Immaculate Conception, dedicated to honoring and preserving centuries of sacred musical tradition. We unite the region&apos;s finest voices and musicians to deliver performances of unparalleled artistry — right here at home.</p>
              <p className="about__text">We believe our community deserves consistent, high-caliber arts. Named for the patron saint of musicians, our mission is to be a vital pillar of the cultural life in El Paso and Las Cruces, bringing world-class sacred music to the desert Southwest.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
    </>
  );
}
