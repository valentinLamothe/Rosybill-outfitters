import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Grid on desktop; below md a horizontal strip instead — 7 stacked photos
// was too much scroll on mobile. Peek + progress bar match Field Archive.
export default function Gallery({ photos }) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="ba-gallery" ref={trackRef} style={{ marginTop: 40 }}>
        {photos.map((photo) => (
          <figure key={photo.label} className="ba-gallery-item" style={{ margin: 0 }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', background: '#1A2438' }}>
              <Image src={photo.src} alt={photo.alt || photo.caption} fill sizes="(max-width: 767px) 250px, 22vw" style={{ objectFit: 'cover', filter: 'saturate(0.82) contrast(1.03)' }} />
            </div>
            <figcaption
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '2px 10px',
                marginTop: 9,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(232,227,214,0.55)',
              }}
            >
              <span>{photo.label}</span>
              <span>{photo.tag}</span>
            </figcaption>
            <div style={{ marginTop: 5, fontSize: 13, color: 'rgba(232,227,214,0.85)' }}>{photo.caption}</div>
          </figure>
        ))}
      </div>

      <div className="ba-gallery-track" style={{ marginTop: 14 }}>
        <div style={{ width: '100%', height: 2, background: 'rgba(232,227,214,0.15)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: `${Math.max(0.15, progress) * 100}%`, height: 2, background: 'rgba(232,227,214,0.6)' }} />
        </div>
      </div>

      <style jsx>{`
        .ba-gallery {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .ba-gallery::-webkit-scrollbar {
          display: none;
        }
        .ba-gallery-item {
          flex: 0 0 250px;
          scroll-snap-align: start;
        }
        .ba-gallery-track {
          display: block;
        }
        @media (min-width: 768px) {
          .ba-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 32px 24px;
            overflow-x: visible;
          }
          .ba-gallery-item {
            flex: initial;
          }
          .ba-gallery-track {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
