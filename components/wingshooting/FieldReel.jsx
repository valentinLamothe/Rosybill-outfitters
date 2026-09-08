const MEDIA_BASE = (process.env.NEXT_PUBLIC_R2_MEDIA_URL || '').replace(/\/$/, '');

// Click-to-play, unlike the looping backdrops elsewhere on the site —
// this is a real clip a visitor watches, not ambient background video.
export default function FieldReel() {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', background: '#1A2438' }}>
        <video
          controls
          playsInline
          preload="none"
          poster="/images/wingshooting/field-reel-poster.jpg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={`${MEDIA_BASE}/videos/wingshooting/field-reel-hevc.mp4`} type="video/mp4; codecs=hvc1" />
          <source src={`${MEDIA_BASE}/videos/wingshooting/field-reel.mp4`} type="video/mp4; codecs=avc1" />
        </video>
      </div>
      <figcaption
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '2px 12px',
          marginTop: 11,
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 10.5,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(232,227,214,0.55)',
        }}
      >
        <span>Field Footage</span>
        <span>0:46</span>
      </figcaption>
      <div style={{ marginTop: 5, fontSize: 13, lineHeight: 1.5, color: 'rgba(232,227,214,0.85)' }}>
        Dawn to dusk on the same water in Buenos Aires, unedited.
      </div>
    </figure>
  );
}
