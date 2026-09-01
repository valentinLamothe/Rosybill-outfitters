import banado from '../../public/images/hunting-day/hd/banado.jpg';
import guias from '../../public/images/hunting-day/plate/guias.jpg';
import SectionBackdrop from './SectionBackdrop';
import PlateFigure from './PlateFigure';

export default function Guides() {
  return (
    <section
      id="guides"
      data-band="0.88"
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
      <SectionBackdrop src={banado} objectPosition="50% 58%" scrimVar="--rb-scrim-low" scrimFallback="rgba(0,0,0,0.45)" sizes="(max-width: 640px) 305vw, 110vw" quality={65} />
      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: '56px 64px', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px', minWidth: 0, maxWidth: 560 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 14px' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, letterSpacing: '0.2em', color: 'var(--rb-ink, #E8E3D6)' }}>OUR GUIDES</span>
            <span style={{ display: 'block', width: 64, height: 1, background: 'var(--rb-ink-rule, rgba(232,227,214,0.35))' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}>
              Not subcontracted
            </span>
          </div>
          <h2
            style={{
              margin: '24px 0 0',
              fontFamily: "'Instrument Serif',serif",
              fontWeight: 400,
              fontSize: 'clamp(40px,5.2vw,86px)',
              lineHeight: 0.94,
              letterSpacing: '-0.018em',
              textWrap: 'pretty',
              color: 'var(--rb-ink, #E8E3D6)',
            }}
          >
            The same faces, season after season.
          </h2>
          <p style={{ margin: '26px 0 0', fontSize: 17, lineHeight: 1.68, maxWidth: 460, color: 'var(--rb-ink-dim, #E8E3D6)' }}>
            Professional guides who belong to the operation, not hired in for the week. They set the blinds, they read the water, and they are the ones you will hunt with again next year.
          </p>
        </div>
        <div style={{ flex: '1 1 500px', minWidth: 0, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          <PlateFigure
            src={guias}
            alt="Rosybill guides in caps at the end of the morning hunt"
            plateLabel="PLATE 05"
            timeLabel="THE GUIDES"
            caption="Rosybill caps, end of the morning."
            flex="1 1 200px"
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 30vw, 300px"
          />
        </div>
      </div>
    </section>
  );
}
