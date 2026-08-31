import SectionVideoBackdrop from './SectionVideoBackdrop';
import InquiryForm from './InquiryForm';
import Footer from './Footer';

const MEDIA_BASE = (process.env.NEXT_PUBLIC_R2_MEDIA_URL || '').replace(/\/$/, '');

const dataItem = (label, value) => (
  <div key={label} style={{ borderTop: '1px solid var(--rb-ink-rule, rgba(232,227,214,0.35))', padding: '14px 0' }}>
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.16em', color: 'var(--rb-ink-dim, #E8E3D6)' }}>{label}</div>
    <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 23, lineHeight: 1.15, marginTop: 6, color: 'var(--rb-ink, #E8E3D6)' }}>{value}</div>
  </div>
);

export default function Lodge() {
  return (
    <section
      id="lodge"
      data-band="1"
      className="hd-band-lodge"
      style={{
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box',
        // No overflow:hidden here (unlike other sections) — it would disable
        // position:sticky on the video backdrop below.
        background: 'var(--rb-bg, #12180F)',
      }}
    >
      <SectionVideoBackdrop
        sources={[
          { src: `${MEDIA_BASE}/videos/hunting-day/lodge-fire-hevc.mp4`, type: 'video/mp4; codecs=hvc1' },
          { src: `${MEDIA_BASE}/videos/hunting-day/lodge-fire.mp4`, type: 'video/mp4; codecs=avc1' },
        ]}
        poster="/images/hunting-day/hd/lodge-fire-poster.jpg"
        objectPosition="65% 50%"
        sticky
        scrimVar="--rb-scrim-low"
        scrimFallback="rgba(0,0,0,0.5)"
      />
      {/* Sits below in the flex-column flow; margin-top:-100vh pulls it up
          to overlap the sticky video instead of leaving a 100vh gap. The
          section itself can't be flex — sticky's collapse trick needs plain
          block flow, so that layout moved down to this wrapper. */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '-100vh',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          padding: '130px clamp(20px,5vw,40px) 92px',
          justifyContent: 'center',
          gap: 64,
          paddingTop: 104,
          minHeight: '100vh',
        }}
      >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 14px' }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, letterSpacing: '0.2em', color: 'var(--rb-ink, #E8E3D6)' }}>21:00</span>
        <span style={{ display: 'block', width: 64, height: 1, background: 'var(--rb-ink-rule, rgba(232,227,214,0.35))' }} />
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}>
          Night · Lamp light · Boots by the door
        </span>
      </div>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px), 1fr))', gap: '56px 72px', alignItems: 'end' }}>
        <div style={{ minWidth: 0 }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Instrument Serif',serif",
              fontWeight: 400,
              fontSize: 'clamp(48px,6.4vw,108px)',
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              textWrap: 'pretty',
              color: 'var(--rb-ink, #E8E3D6)',
            }}
          >
            Boots by the door, and nobody has to be anywhere.
          </h2>
          <p style={{ margin: '28px 0 0', fontSize: 17.5, lineHeight: 1.68, maxWidth: 480, color: 'var(--rb-ink-dim, #E8E3D6)' }}>
            A traditional Argentine estancia with modern comforts, one long table, and the same family in the kitchen for over thirty years. Tell us which month you have in mind and we will tell you what the water is doing.
          </p>
          <div id="travel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,148px), 1fr))', gap: '0 28px', marginTop: 40, maxWidth: 560 }}>
            {dataItem('ROOMS', '7, each with private bath')}
            {dataItem('FROM EZEIZA', '3 h 30 to the lodge')}
            {dataItem('SEASON', 'May 1 – August 10')}
            {dataItem('ALSO', 'Wildlife photography, cultural trips')}
          </div>
        </div>
        <InquiryForm />
      </div>
      <Footer />
      </div>
    </section>
  );
}
