import palomas from '../../public/images/hunting-day/hd/palomas.jpg';
import p1730a from '../../public/images/hunting-day/plate/p1730-a.jpg';
import SectionBackdrop from './SectionBackdrop';
import PlateFigure from './PlateFigure';

const infoRow = (label, value) => (
  <div
    key={label}
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '4px 24px',
      padding: '14px 0',
      borderTop: '1px solid var(--rb-ink-rule, rgba(232,227,214,0.35))',
      fontSize: 14.5,
      color: 'var(--rb-ink-dim, #E8E3D6)',
    }}
  >
    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{label}</span>
    <span style={{ color: 'var(--rb-ink, #E8E3D6)' }}>{value}</span>
  </div>
);

export default function LastLight() {
  return (
    <section
      data-band="0.76"
      style={{
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '130px clamp(20px,5vw,40px) 92px',
        justifyContent: 'flex-end',
        minHeight: '118vh',
        gap: 56,
        paddingBottom: 80,
      }}
    >
      <SectionBackdrop src={palomas} objectPosition="50% 34%" sizes="(max-width: 640px) 1180vw, 255vw" quality={65} />
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 14px' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 12.5,
              letterSpacing: '0.2em',
              padding: '6px 10px',
              background: 'var(--rb-accent, #E8556B)',
              color: 'var(--rb-accent-ink, #20070C)',
            }}
          >
            17:30
          </span>
          <span style={{ display: 'block', width: 64, height: 1, background: 'var(--rb-ink-rule, rgba(232,227,214,0.35))' }} />
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}>
            Last light · The evening flight
          </span>
        </div>
      </div>
      <h2
        style={{
          position: 'relative',
          margin: 0,
          fontFamily: "'Instrument Serif',serif",
          fontWeight: 400,
          fontSize: 'clamp(46px,7vw,124px)',
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          maxWidth: 1100,
          textWrap: 'pretty',
          color: 'var(--rb-ink, #E8E3D6)',
        }}
      >
        The birds come off the water when the heat breaks.
      </h2>
      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: '56px 64px', alignItems: 'flex-end' }}>
        <div style={{ flex: '1 1 380px', minWidth: 0, maxWidth: 520 }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.68, color: 'var(--rb-ink-dim, #E8E3D6)' }}>
            The rosy-billed pochard gives us our name. The evening flight comes in low over the same water you left at noon, and you stop when your shoulder tells you to, not when the{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rb-accent, #E8556B)' }}>light</em> does.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 34 }}>
            {infoRow('Afternoon out', '3:00 PM')}
            {infoRow('Season', 'May 1 – August 10')}
            {infoRow('Lodge to blinds', '25 minutes')}
            {infoRow('Guides', 'Ours, never hired in')}
          </div>
          <a
            href="#lodge"
            style={{
              display: 'inline-block',
              marginTop: 32,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '17px 30px',
              background: 'var(--rb-accent, #E8556B)',
              color: 'var(--rb-accent-ink, #20070C)',
            }}
          >
            Ask about the season
          </a>
        </div>
        <PlateFigure
          src={p1730a}
          alt="Hunter standing in the blind at the end of the evening flight, silhouetted against the sunset"
          plateLabel="PLATE 04"
          timeLabel="17:30"
          caption="Standing in the blind at the end of the flight."
          flex="0 1 clamp(230px,28vw,380px)"
        />
      </div>
    </section>
  );
}
