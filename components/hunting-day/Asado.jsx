import brasas from '../../public/images/hunting-day/hd/brasas.jpg';
import p1300a from '../../public/images/hunting-day/plate/p1300-a.jpg';
import SectionBackdrop from './SectionBackdrop';
import PlateFigure from './PlateFigure';

export default function Asado() {
  return (
    <section
      data-band="0.50"
      className="hd-band-fire"
      style={{
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '130px clamp(20px,5vw,40px) 92px',
        justifyContent: 'flex-end',
        gap: 74,
        background: 'var(--rb-photo, #B0552A)',
      }}
    >
      <SectionBackdrop src={brasas} objectPosition="50% 50%" scrimVar="--rb-scrim-low" scrimFallback="rgba(0,0,0,0.5)" sizes="(max-width: 640px) 490vw, 155vw" quality={90} />
      <div style={{ position: 'relative', maxWidth: 1000 }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 14px' }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, letterSpacing: '0.2em', color: 'var(--rb-ink, #E8E3D6)' }}>12:00</span>
          <span style={{ display: 'block', width: 64, height: 1, background: 'var(--rb-ink-rule, rgba(232,227,214,0.35))' }} />
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}>
            Midday · The long table
          </span>
        </div>
        <h2
          style={{
            margin: '26px 0 0',
            fontFamily: "'Instrument Serif',serif",
            fontWeight: 400,
            fontSize: 'clamp(46px,7.2vw,120px)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            textWrap: 'pretty',
            color: 'var(--rb-ink, #E8E3D6)',
          }}
        >
          Midday is not a break. It is the reason.
        </h2>
        <p style={{ margin: '28px 0 0', fontSize: 17.5, lineHeight: 1.68, maxWidth: 560, color: 'var(--rb-ink-dim, #E8E3D6)' }}>
          A traditional gaucho asado: Argentine beef over the coals, Malbec from the cellar, and a table that nobody leaves early. Cooked by the same family that has run this operation since 1993. Then a siesta before the afternoon flight — the water can wait until three.
        </p>
      </div>
      <div style={{ position: 'relative', width: 'min(85%,1080px)', display: 'flex', flexWrap: 'wrap', gap: '34px 30px' }}>
        <PlateFigure
          src={p1300a}
          alt="A whole costillar roasting on an iron cross over an open asado fire"
          plateLabel="PLATE 03"
          timeLabel="12:00"
          caption="A full costillar over the coals, ready for the table."
          flex="0 1 clamp(260px,40vw,480px)"
        />
      </div>
    </section>
  );
}
