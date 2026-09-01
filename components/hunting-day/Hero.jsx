import p0540a from '../../public/images/hunting-day/plate/p0540-a.jpg';
import SectionVideoBackdrop from './SectionVideoBackdrop';
import PlateFigure from './PlateFigure';

// R2 hosts the hero video (heavy, no next/image pipeline involved); falls
// back to the local /public copy if the env var isn't set.
const MEDIA_BASE = (process.env.NEXT_PUBLIC_R2_MEDIA_URL || '').replace(/\/$/, '');

export default function Hero() {
  return (
    <section
      id="the-day"
      data-band="0"
      data-hero-section
      style={{
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '130px clamp(20px,5vw,40px) 92px',
        justifyContent: 'flex-end',
        minHeight: '100vh',
      }}
    >
      <SectionVideoBackdrop
        sources={[
          { src: `${MEDIA_BASE}/videos/hunting-day/hero-sunrise-hevc.mp4`, type: 'video/mp4; codecs=hvc1' },
          { src: `${MEDIA_BASE}/videos/hunting-day/hero-sunrise.mp4`, type: 'video/mp4; codecs=avc1' },
        ]}
        mobileSources={[
          { src: `${MEDIA_BASE}/videos/hunting-day/hero-sunrise-mobile-hevc.mp4`, type: 'video/mp4; codecs=hvc1' },
          { src: `${MEDIA_BASE}/videos/hunting-day/hero-sunrise-mobile.mp4`, type: 'video/mp4; codecs=avc1' },
        ]}
        poster="/images/hunting-day/hd/hero-sunrise-poster.jpg"
        objectPosition="50% 45%"
        priority
      />
      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: '56px 64px', alignItems: 'flex-end' }}>
        <div style={{ flex: '1 1 480px', minWidth: 0, maxWidth: 820 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 14px' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, letterSpacing: '0.2em', color: 'var(--rb-ink, #E8E3D6)' }}>05:40</span>
            <span style={{ display: 'block', width: 64, height: 1, background: 'var(--rb-ink-rule, rgba(232,227,214,0.35))' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}>
              Pre-dawn · Buenos Aires
            </span>
          </div>
          <h1
            data-hero-h1
            style={{
              margin: '24px 0 0',
              fontFamily: "'Instrument Serif',serif",
              fontWeight: 400,
              fontSize: 'clamp(48px,6.6vw,116px)',
              lineHeight: 0.92,
              letterSpacing: '-0.015em',
              textWrap: 'pretty',
              color: 'var(--rb-ink, #E8E3D6)',
            }}
          >
            Nobody has slept past four here since 1993.
          </h1>
          <p style={{ margin: '28px 0 0', fontSize: 17.5, lineHeight: 1.65, maxWidth: 500, color: 'var(--rb-ink-dim, #E8E3D6)' }}>
            Coffee at the kitchen door, then the road out while it is still fully dark. One lodge, our own guides, and water they have known their whole lives.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '18px 22px', marginTop: 40 }}>
            <a href="#lodge" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', padding: '17px 30px', background: 'var(--rb-ink, #E8E3D6)', color: 'var(--rb-bg, #0E1524)' }}>
              Walk the day with us
            </a>
            <span data-hero-meta style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}>
              05:40 → 21:00 · one day
            </span>
          </div>
        </div>
        <PlateFigure
          src={p0540a}
          alt="Hunter crouched in the reeds before dawn, waiting on the first flight"
          plateLabel="PLATE 01"
          timeLabel="05:40"
          caption="Set up in the reeds, waiting on the first flight."
          dataAttr="data-hero-plate"
        />
      </div>
    </section>
  );
}
