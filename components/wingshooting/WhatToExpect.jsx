import { useEffect, useRef, useState } from 'react';

const ITEMS = [
  {
    label: 'Expert guides',
    body: 'Deep local knowledge of the water and the birds.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#E8556B" strokeWidth="1.4" />
        <path d="M15.5 8.5L10.5 10.5L8.5 15.5L13.5 13.5L15.5 8.5Z" stroke="#E8556B" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Premium lodges',
    body: 'Authentic estancias, modern comforts.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 11L12 4L20 11" stroke="#E8556B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10V20H18V10" stroke="#E8556B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Gourmet cuisine',
    body: 'Traditional asado, fine wines.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 4V12M7 4C5.5 4 5 5.5 5 7C5 8.5 5.5 10 7 10M7 12V20" stroke="#E8556B" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17 4V20M17 4C15.5 4 14 6 14 9C14 10.5 15 11.5 16.2 11.8L17 12" stroke="#E8556B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Equipment provided',
    body: 'Top-quality firearms and ammunition.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#E8556B" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="5" stroke="#E8556B" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="1.4" fill="#E8556B" />
      </svg>
    ),
  },
];

// Horizontal strip below md (a peek + progress bar, same affordance as
// Gallery/Field Archive); a static row above it, since 4 chips fit there.
export default function WhatToExpect() {
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
      <div className="expect-strip" ref={trackRef}>
        {ITEMS.map((item) => (
          <div key={item.label} className="expect-chip">
            <div style={{ marginBottom: 14 }}>{item.icon}</div>
            <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 19 }}>{item.label}</div>
            <p style={{ margin: '6px 0 0', fontSize: 12.5, lineHeight: 1.5, color: 'rgba(232,227,214,0.65)' }}>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="expect-track" style={{ marginTop: 14 }}>
        <div style={{ width: '100%', height: 2, background: 'rgba(232,227,214,0.15)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: `${Math.max(0.2, progress) * 100}%`, height: 2, background: 'rgba(232,227,214,0.6)' }} />
        </div>
      </div>

      <style jsx>{`
        .expect-strip {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .expect-strip::-webkit-scrollbar {
          display: none;
        }
        .expect-chip {
          flex: 0 0 168px;
          scroll-snap-align: start;
          border: 1px solid rgba(232,227,214,0.25);
          padding: 20px 18px;
        }
        .expect-track {
          display: block;
        }
        @media (min-width: 768px) {
          .expect-strip {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            overflow-x: visible;
          }
          .expect-chip {
            flex: initial;
          }
          .expect-track {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
