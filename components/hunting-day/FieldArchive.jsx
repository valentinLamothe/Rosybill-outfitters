import archBg from '../../public/images/hunting-day/plate/arch-bg.jpg';
import arch07 from '../../public/images/hunting-day/plate/arch-07.jpg';
import arch08 from '../../public/images/hunting-day/plate/arch-08.jpg';
import SectionBackdrop from './SectionBackdrop';
import PlateFigure from './PlateFigure';

export default function FieldArchive() {
  return (
    <section
      data-band="0.96"
      style={{
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
        minHeight: 'min(100vh,720px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 34,
        padding: '104px 0 76px',
        background: 'var(--rb-photo, #12180F)',
      }}
    >
      <SectionBackdrop src={archBg} objectPosition="50% 40%" scrimVar="--rb-tint" scrimFallback="rgba(0,0,0,0.4)" />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 8, padding: '0 clamp(20px,5vw,40px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 14px' }}>
          <span
            style={{
              flex: '0 0 auto',
              whiteSpace: 'nowrap',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--rb-ink, #E8E3D6)',
            }}
          >
            Field archive
          </span>
          <span style={{ flex: '1 1 60px', height: 1, background: 'var(--rb-ink-rule, rgba(232,227,214,0.35))' }} />
          <span
            data-frame-count="1"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.16em', color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))' }}
          >
            01 / 02
          </span>
        </div>
        <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--rb-ink-dim, #E8E3D6)' }}>Frames from the season, kept as they came in.</div>
      </div>
      <div
        data-strip="1"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 24,
          overflowX: 'auto',
          overscrollBehaviorX: 'contain',
          scrollSnapType: 'x mandatory',
          padding: '0 clamp(20px,5vw,40px) 6px',
          scrollbarWidth: 'none',
        }}
      >
        <PlateFigure
          src={arch07}
          alt="Hunter calling as the light comes up over the marsh"
          plateLabel="PLATE 07"
          timeLabel="3:2"
          caption="On the call as the light comes up."
          flex="0 0 auto"
          width="min(74vw,520px)"
          aspectRatio="3 / 2"
          sizes="(max-width: 768px) 100vw, 74vw"
          dataAttr="data-frame"
          captionFontSize={12.5}
        />
        <PlateFigure
          src={arch08}
          alt="Three hunters with a large morning's bag of ducks by the water"
          plateLabel="PLATE 08"
          timeLabel="3:2"
          caption="Walking the birds in across the shallows."
          flex="0 0 auto"
          width="min(74vw,520px)"
          aspectRatio="3 / 2"
          sizes="(max-width: 768px) 100vw, 74vw"
          dataAttr="data-frame"
          captionFontSize={12.5}
        />
      </div>
    </section>
  );
}
