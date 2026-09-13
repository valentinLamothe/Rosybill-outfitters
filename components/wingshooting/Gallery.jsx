import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AUTOPLAY_MS = 4500;

// Same strip as mobile, but md+ adds arrows/autoplay — a grid felt static
// and cramped once the photo count grew past a dozen.
export default function Gallery({ photos }) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  // Hover/touch pause is tracked separately from the post-click suppression
  // window so a stale timer can never resume autoplay while still hovered.
  const hoveredRef = useRef(false);
  const suppressUntilRef = useRef(0);

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

  // Clamp to real scroll bounds, wrap only once already there — matching
  // an item's offsetLeft got stuck short of the end on wide viewports.
  const advance = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 1) return;
    const item = el.querySelector('.ba-gallery-item');
    const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || '0') || 0;
    const step = (item ? item.getBoundingClientRect().width : el.clientWidth) + gap;
    let next;
    if (dir > 0) next = el.scrollLeft >= max - 1 ? 0 : Math.min(el.scrollLeft + step, max);
    else next = el.scrollLeft <= 1 ? max : Math.max(el.scrollLeft - step, 0);
    el.scrollTo({ left: next, behavior: 'smooth' });
  }, []);

  const handleArrowClick = useCallback((dir) => {
    advance(dir);
    suppressUntilRef.current = Date.now() + AUTOPLAY_MS;
  }, [advance]);

  // Re-checks the breakpoint on every tick instead of once on mount, so a
  // resize or tablet rotation across 768px is picked up immediately.
  useEffect(() => {
    const el = trackRef.current;
    if (!el || typeof window === 'undefined') return;
    const id = setInterval(() => {
      if (window.innerWidth < 768) return;
      if (hoveredRef.current || Date.now() < suppressUntilRef.current) return;
      if (el.scrollWidth <= el.clientWidth) return;
      advance(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [advance]);

  const setHovered = (value) => () => { hoveredRef.current = value; };

  return (
    <>
      <div
        className="ba-gallery-wrap"
        onMouseEnter={setHovered(true)}
        onMouseLeave={setHovered(false)}
        onTouchStart={setHovered(true)}
        onTouchEnd={setHovered(false)}
      >
        <div className="ba-gallery" ref={trackRef}>
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
        <button type="button" aria-label="Previous photos" className="ba-gallery-arrow ba-gallery-arrow-prev" onClick={() => handleArrowClick(-1)}>
          <ChevronLeft size={20} />
        </button>
        <button type="button" aria-label="Next photos" className="ba-gallery-arrow ba-gallery-arrow-next" onClick={() => handleArrowClick(1)}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="ba-gallery-track" style={{ marginTop: 14 }}>
        <div style={{ width: '100%', height: 2, background: 'rgba(232,227,214,0.15)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: `${Math.max(0.15, progress) * 100}%`, height: 2, background: 'rgba(232,227,214,0.6)' }} />
        </div>
      </div>

      <style jsx>{`
        .ba-gallery-wrap {
          position: relative;
          margin-top: 40px;
        }
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
        .ba-gallery-arrow {
          display: none;
        }
        @media (min-width: 768px) {
          .ba-gallery {
            gap: 20px;
          }
          .ba-gallery-item {
            flex: 0 0 clamp(220px, 22vw, 280px);
          }
          .ba-gallery-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 40%;
            transform: translateY(-50%);
            width: 42px;
            height: 42px;
            padding: 0;
            background: rgba(14,21,36,0.82);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            border: 1px solid rgba(232,227,214,0.35);
            color: var(--rb-ink, #E8E3D6);
            cursor: pointer;
            transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
          }
          .ba-gallery-arrow:active {
            transform: translateY(-50%) scale(0.92);
          }
          .ba-gallery-arrow-prev {
            left: -21px;
          }
          .ba-gallery-arrow-next {
            right: -21px;
          }
        }
        @media (min-width: 768px) and (hover: hover) {
          .ba-gallery-arrow:hover {
            background: rgba(20,30,48,0.92);
            border-color: rgba(232,227,214,0.55);
          }
        }
      `}</style>
    </>
  );
}
