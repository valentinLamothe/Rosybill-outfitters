import Image from 'next/image';

// A single captioned "plate" photo — the recurring foreground-figure pattern
// used by most sections (as opposed to the full-bleed SectionBackdrop).
export default function PlateFigure({
  src,
  alt,
  plateLabel,
  timeLabel,
  caption,
  flex = '0 1 clamp(240px,30vw,420px)',
  width,
  aspectRatio,
  sizes = '(max-width: 640px) 100vw, (max-width: 1080px) 40vw, 420px',
  dataAttr,
  captionFontSize = 13,
}) {
  const imageStyle = aspectRatio
    ? { objectFit: 'cover', filter: 'saturate(0.82) contrast(1.03)' }
    : { display: 'block', width: '100%', height: 'auto', filter: 'saturate(0.82) contrast(1.03)' };

  return (
    <figure {...(dataAttr && { [dataAttr]: '1' })} style={{ margin: 0, flex, ...(width && { width }), minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', ...(aspectRatio && { aspectRatio }) }}>
        {aspectRatio ? (
          <Image src={src} alt={alt} fill sizes={sizes} quality={90} placeholder="blur" style={imageStyle} />
        ) : (
          <Image src={src} alt={alt} sizes={sizes} quality={90} placeholder="blur" style={imageStyle} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'var(--rb-tint, rgba(0,0,0,0.3))', mixBlendMode: 'multiply' }} />
      </div>
      {(plateLabel || timeLabel) && (
        <figcaption
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 14,
            marginTop: 11,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10.5,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))',
          }}
        >
          <span>{plateLabel}</span>
          <span>{timeLabel}</span>
        </figcaption>
      )}
      {caption && <div style={{ marginTop: 5, fontSize: captionFontSize, lineHeight: 1.5, color: 'var(--rb-ink-dim, #E8E3D6)' }}>{caption}</div>}
    </figure>
  );
}
