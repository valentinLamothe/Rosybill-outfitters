import { useEffect, useRef, useState } from 'react';

const MONTHS = ['May', 'June', 'July', 'August'];

const fieldLabelStyle = {
  fontSize: 11,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))',
};

const fieldInputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--rb-field-rule, rgba(232,227,214,0.55))',
  paddingBottom: 11,
  fontSize: 14.5,
  fontFamily: 'inherit',
  color: 'var(--rb-ink, #E8E3D6)',
  outline: 'none',
};

// iOS Safari applies its own native chrome to <select> unless appearance is
// reset — without this the built-in arrow can crowd or clip the label text.
const fieldSelectStyle = {
  ...fieldInputStyle,
  width: '100%',
  WebkitAppearance: 'none',
  appearance: 'none',
  paddingRight: 22,
};

// Real, accessible <form> replacing the design's styled-div mockup — the
// source has no actual inputs, just label-shaped divs (see plan finding #2).
export default function InquiryForm() {
  const [values, setValues] = useState({ name: '', email: '', partySize: '', month: '', hp_website: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const successRef = useRef(null);

  // The submit button (and its focus) unmounts when the form is replaced by
  // this panel — move focus here so screen-reader users aren't stranded.
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong.');
    }
  };

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        style={{
          minWidth: 0,
          border: '1px solid var(--rb-accent, #E8556B)',
          padding: '40px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
          background: 'rgba(0,0,0,0.42)',
          outline: 'none',
        }}
      >
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.2em', color: 'var(--rb-accent, #E8556B)' }}>
          INQUIRE — 21:00
        </div>
        <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(28px,3vw,44px)', lineHeight: 1.06, color: 'var(--rb-ink, #E8E3D6)' }}>
          Sent. We&apos;ll be in touch.
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.6, color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))' }}>
          A member of the family answers. Ask us everything you want to ask before anything else is discussed.
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        minWidth: 0,
        border: '1px solid var(--rb-accent, #E8556B)',
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
        background: 'rgba(0,0,0,0.42)',
      }}
    >
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.2em', color: 'var(--rb-accent, #E8556B)' }}>
        INQUIRE — 21:00
      </div>
      <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(28px,3vw,44px)', lineHeight: 1.06, color: 'var(--rb-ink, #E8E3D6)' }}>
        Start with the month.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label htmlFor="hd-name" style={fieldLabelStyle}>Name</label>
          <input id="hd-name" name="name" type="text" required maxLength={100} value={values.name} onChange={update('name')} style={fieldInputStyle} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label htmlFor="hd-email" style={fieldLabelStyle}>Email</label>
          <input id="hd-email" name="email" type="email" required maxLength={254} value={values.email} onChange={update('email')} style={fieldInputStyle} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label htmlFor="hd-party-size" style={fieldLabelStyle}>Party size</label>
          <input id="hd-party-size" name="partySize" type="number" min="1" max="20" required value={values.partySize} onChange={update('partySize')} style={fieldInputStyle} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label htmlFor="hd-month" style={fieldLabelStyle}>Month you have in mind</label>
          <div style={{ position: 'relative' }}>
            <select id="hd-month" name="month" required value={values.month} onChange={update('month')} style={fieldSelectStyle}>
              <option value="" disabled>Select a month</option>
              {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: 2,
                bottom: 16,
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '6px solid var(--rb-ink-dim, #E8E3D6)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>
          <label htmlFor="hd-hp-website">Company website</label>
          <input id="hd-hp-website" name="hp_website" type="text" tabIndex={-1} autoComplete="off" value={values.hp_website} onChange={update('hp_website')} />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.04em',
          padding: '17px 0',
          textAlign: 'center',
          background: 'var(--rb-accent, #E8556B)',
          color: 'var(--rb-accent-ink, #20070C)',
          border: 'none',
          cursor: status === 'submitting' ? 'wait' : 'pointer',
          opacity: status === 'submitting' ? 0.7 : 1,
        }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
      </button>
      {status === 'error' && (
        <div role="alert" style={{ fontSize: 12.5, lineHeight: 1.6, color: 'var(--rb-accent, #E8556B)' }}>{error}</div>
      )}
      <div style={{ fontSize: 12.5, lineHeight: 1.6, color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))' }}>
        A member of the family answers. Ask us everything you want to ask before anything else is discussed.
      </div>
    </form>
  );
}
