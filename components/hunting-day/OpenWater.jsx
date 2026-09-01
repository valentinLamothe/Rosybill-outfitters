import banado from '../../public/images/hunting-day/hd/banado.jpg';
import SectionBackdrop from './SectionBackdrop';

export default function OpenWater() {
  return (
    <section
      data-band="0.40"
      style={{
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '130px clamp(20px,5vw,40px) 92px',
        justifyContent: 'center',
        minHeight: '86vh',
        paddingTop: 110,
      }}
    >
      <SectionBackdrop src={banado} objectPosition="50% 62%" sizes="(max-width: 640px) 305vw, 110vw" quality={65} />
      <div style={{ position: 'relative', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.2em', color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))' }}>
        10:00
      </div>
      <h2
        style={{
          position: 'relative',
          margin: '32px 0 0',
          fontFamily: "'Instrument Serif',serif",
          fontWeight: 400,
          fontStyle: 'italic',
          fontSize: 'clamp(40px,6.4vw,104px)',
          lineHeight: 1.0,
          maxWidth: '14ch',
          textWrap: 'pretty',
          color: 'var(--rb-ink, #E8E3D6)',
        }}
      >
        The frost is off, and the water goes quiet.
      </h2>
      <p style={{ position: 'relative', margin: '28px 0 0', fontSize: 16, lineHeight: 1.6, maxWidth: 420, color: 'var(--rb-ink-dim, #E8E3D6)' }}>
        Back at the lodge by ten, coffee and a snack by the fire before the table is set.
      </p>
    </section>
  );
}
