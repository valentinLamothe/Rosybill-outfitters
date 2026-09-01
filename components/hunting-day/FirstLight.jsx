import frost from '../../public/images/hunting-day/hd/frost.jpg';
import p0715c from '../../public/images/hunting-day/plate/p0715-c.jpg';
import p0715b from '../../public/images/hunting-day/plate/p0715-b.jpg';
import SectionBackdrop from './SectionBackdrop';
import PlateFigure from './PlateFigure';

const dataItem = (label, value) => (
  <div style={{ borderTop: '1px solid var(--rb-ink-rule, rgba(232,227,214,0.35))', padding: '14px 0' }}>
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '0.16em', color: 'var(--rb-ink-dim, #E8E3D6)' }}>{label}</div>
    <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 23, lineHeight: 1.15, marginTop: 6, color: 'var(--rb-ink, #E8E3D6)' }}>{value}</div>
  </div>
);

export default function FirstLight() {
  return (
    <section
      data-band="0.26"
      style={{
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '130px clamp(20px,5vw,40px) 92px',
        justifyContent: 'center',
      }}
    >
      <SectionBackdrop src={frost} objectPosition="50% 62%" sizes="(max-width: 640px) 710vw, 100vw" quality={65} />
      {/* The design mixes two color washes over the frost photo so it reads
          as "first light green", independent of the live scroll palette. */}
      <div style={{ position: 'absolute', inset: 0, background: '#2A3A2E', mixBlendMode: 'color', opacity: 0.92 }} />
      <div style={{ position: 'absolute', inset: 0, background: '#1E2A20', mixBlendMode: 'multiply', opacity: 0.34 }} />
      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: '56px 64px', alignItems: 'center' }}>
        <div style={{ flex: '1 1 420px', minWidth: 0, maxWidth: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 14px' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, letterSpacing: '0.2em', color: 'var(--rb-ink, #E8E3D6)' }}>07:15</span>
            <span style={{ display: 'block', width: 64, height: 1, background: 'var(--rb-ink-rule, rgba(232,227,214,0.35))' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}>
              First light · The marshes
            </span>
          </div>
          <h2
            style={{
              margin: '24px 0 0',
              fontFamily: "'Instrument Serif',serif",
              fontWeight: 400,
              fontSize: 'clamp(42px,5.4vw,88px)',
              lineHeight: 0.95,
              letterSpacing: '-0.015em',
              textWrap: 'pretty',
              color: 'var(--rb-ink, #E8E3D6)',
            }}
          >
            First light belongs to the water.
          </h2>
          <p style={{ margin: '26px 0 0', fontSize: 17, lineHeight: 1.68, maxWidth: 480, color: 'var(--rb-ink-dim, #E8E3D6)' }}>
            Flooded ground and reed beds, wading out in the dark to set up, then waiting. The guides read this water — they grew up on it, and they are the reason the morning works.
          </p>
          {/* TODO: ask Maxi for the real species list before adding a SPECIES row back. */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,168px), 1fr))', gap: '0 28px', marginTop: 40, maxWidth: 480 }}>
            {dataItem('GROUND', 'Marsh & reed bed')}
            {dataItem('BREAKFAST', 'Eggs, bacon, toast, juice, cereal')}
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 24, flex: '1 1 clamp(280px,40vw,560px)', minWidth: 0 }}>
          <PlateFigure
            src={p0715c}
            alt="Hunter emerging from the reeds carrying the morning's ducks"
            plateLabel="PLATE 09"
            timeLabel="07:15"
            caption="Coming out of the reeds with the morning's birds."
            flex="1 1 200px"
            aspectRatio="1 / 1"
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 20vw, 260px"
            dataAttr="data-plate07pair"
          />
          <PlateFigure
            src={p0715b}
            alt="Three hunters with guns raised on the same flight line"
            plateLabel="PLATE 02"
            timeLabel="07:15"
            caption="Three guns on the same flight line."
            flex="1 1 200px"
            aspectRatio="1 / 1"
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 20vw, 260px"
            dataAttr="data-plate07pair"
          />
        </div>
      </div>
    </section>
  );
}
