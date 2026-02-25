import ScrollReveal from '@/components/ScrollReveal';
import EmailSignup from '@/components/EmailSignup';

export const metadata = {
  title: 'Stay Connected — St Cecilia Choir & Orchestra',
  description: 'Join our mailing list for early access to concert dates, program details, and ticket availability.',
};

export default function ConnectPage() {
  return (
    <section className="cta" style={{ paddingTop: '10rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <ScrollReveal>
          <div className="cta__inner">
            <span className="section-num" style={{ color: 'var(--gold-light)' }}>01</span>
            <p className="about__label">Stay Connected</p>
            <h2 className="cta__title">Be the First to Know</h2>
            <p className="cta__text">Concert dates, program details, and ticket availability will be announced soon. Join our mailing list to receive early access and exclusive updates.</p>
            <EmailSignup />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
