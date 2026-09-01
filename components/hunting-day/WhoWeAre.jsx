import banado from '../../public/images/hunting-day/hd/banado.jpg';
import equipo from '../../public/images/hunting-day/plate/equipo.jpg';
import SectionBackdrop from './SectionBackdrop';
import PlateFigure from './PlateFigure';

export default function WhoWeAre() {
  return (
    <section
      data-band="0.92"
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
      <SectionBackdrop src={banado} objectPosition="50% 32%" scrimVar="--rb-scrim-low" scrimFallback="rgba(0,0,0,0.45)" sizes="(max-width: 640px) 305vw, 110vw" quality={65} />
      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: '56px 64px', alignItems: 'center' }}>
        <PlateFigure
          src={equipo}
          alt="The Rosybill Outfitters crew back at the trucks after the hunt"
          plateLabel="PLATE 06"
          timeLabel="THE CREW"
          caption="Back at the trucks, boots still wet."
        />
        <div style={{ flex: '1 1 400px', minWidth: 0, maxWidth: 560 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 14px' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, letterSpacing: '0.2em', color: 'var(--rb-ink, #E8E3D6)' }}>WHO WE ARE</span>
            <span style={{ display: 'block', width: 64, height: 1, background: 'var(--rb-ink-rule, rgba(232,227,214,0.35))' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}>
              Buenos Aires · Since 1993
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
            A family operation, and it shows.
          </h2>
          <p style={{ margin: '26px 0 0', fontSize: 17, lineHeight: 1.68, maxWidth: 460, color: 'var(--rb-ink-dim, #E8E3D6)' }}>
            Over thirty years on the same wetlands of Buenos Aires. One lodge, one crew, and a way of doing the day that has not needed much changing.
          </p>
        </div>
      </div>
    </section>
  );
}
