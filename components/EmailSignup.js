'use client';
import { useState } from 'react';

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <form className={`cta__form${submitted ? ' success' : ''}`} onSubmit={handleSubmit}>
        <input
          type="email"
          className="cta__input"
          placeholder="Your email address"
          required
          aria-label="Email address"
          disabled={submitted}
          value={submitted ? '' : undefined}
        />
        <button type="submit" className="cta__submit">
          {submitted ? '✓ Subscribed' : 'Notify Me'}
        </button>
      </form>
      <div className={`cta__success${submitted ? ' show' : ''}`}>
        ✦&nbsp;&nbsp;Thank you. You&apos;ll be among the first to hear from us.
      </div>
    </>
  );
}
