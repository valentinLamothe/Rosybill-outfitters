import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';

// Persistent across the scroll rather than tied to one narrative moment,
// so it doesn't interrupt the day's story the way an inline CTA would.
export default function WingshootingTab() {
  const [hidden, setHidden] = useState(false);

  // Hide over Lodge — a fixed tab there would sit on top of the inquiry
  // form/footer contact info, competing with the actual booking CTA.
  useEffect(() => {
    const lodge = document.getElementById('lodge');
    if (!lodge || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.1 });
    io.observe(lodge);
    return () => io.disconnect();
  }, []);

  // The page-wide scroll-behavior:smooth turns Next's scroll-to-top on
  // route change into an animation that cuts off mid-navigation.
  const handleClick = () => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    setTimeout(() => { root.style.scrollBehavior = prev; }, 300);
  };

  return (
    <Link
      href="/wingshooting"
      onClick={handleClick}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      style={{
        position: 'fixed',
        right: 'clamp(14px,2.5vw,28px)',
        bottom: 'clamp(14px,2.5vw,28px)',
        zIndex: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '10px 14px',
        background: 'rgba(14,21,36,0.82)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        border: '1px solid rgba(232,227,214,0.35)',
        color: 'var(--rb-ink, #E8E3D6)',
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11.5,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? 'none' : 'auto',
        transition: 'opacity 0.3s ease',
      }}
    >
      <Play size={12} fill="currentColor" style={{ color: 'var(--rb-accent, #E8556B)', flexShrink: 0 }} />
      Watch
    </Link>
  );
}
