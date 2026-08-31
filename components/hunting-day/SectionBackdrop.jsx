import Image from 'next/image';

// Full-bleed background photo (14% oversized for parallax headroom, driven
// by useHuntingDayEngine) plus the scrim that keeps text readable over it.
export default function SectionBackdrop({ src, alt = '', objectPosition = '50% 50%', scrimVar = '--rb-scrim', scrimFallback = 'rgba(0,0,0,0.5)', priority = false, sizes = '(max-width: 640px) 250vw, 100vw', quality = 82 }) {
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: 'var(--rb-photo, #1A2438)' }}>
        <div style={{ position: 'absolute', inset: '-14% 0 -14% 0', overflow: 'hidden' }}>
          {/* object-fit:cover needs height-resolution, not just width. Each
              caller overrides `sizes` for its own image's native aspect
              ratio and its section's measured height/width ratio — a fixed
              px value here would apply the same download size at every
              viewport, which is the opposite of what a responsive sizes
              hint is for. */}
          <Image
            src={src}
            alt={alt}
            fill
            data-parallax="1"
            priority={priority}
            sizes={sizes}
            quality={quality}
            style={{ objectFit: 'cover', objectPosition, willChange: 'transform' }}
          />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: `var(${scrimVar}, ${scrimFallback})` }} />
    </>
  );
}
