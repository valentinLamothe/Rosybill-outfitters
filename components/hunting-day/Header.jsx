import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AmbientSound from './AmbientSound';

const NAV_ITEMS = [
  { href: '#the-day', label: 'The Day' },
  { href: '#guides', label: 'Guides' },
  { href: '#lodge', label: 'Lodge' },
  { href: '#travel', label: 'Travel' },
];

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

// A flat duration made the ~9000px jump to Travel feel rushed and the near
// jump to The Day feel sluggish — scale with distance instead, clamped.
const scrollDuration = (distance) => Math.min(1700, 500 + Math.abs(distance) * 0.13);

// Native scrollIntoView's "smooth" has no duration control and finishes
// fast regardless of distance — this drives the scroll ourselves instead.
function smoothScrollTo(targetY, duration, onDone) {
  const root = document.documentElement;
  // globals.css sets html{scroll-behavior:smooth}, which would turn each
  // per-frame scrollTo into its own restarting animation and stall the scroll.
  const prevBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';

  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, startY + distance * easeInOutCubic(t));
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      root.style.scrollBehavior = prevBehavior;
      onDone?.();
    }
  };
  requestAnimationFrame(step);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);

  // Next minifies CSS media queries to range syntax some engines don't match.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 480px)');
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Double rAF avoids the scroll animation stuttering against the panel's own unmount re-render.
  const handlePanelNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const scrollMarginTop = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        const targetY = rect.top + window.scrollY - scrollMarginTop;
        if (reduced) {
          window.scrollTo(0, targetY);
        } else {
          window.dispatchEvent(new Event('hd:color-freeze'));
          const duration = scrollDuration(targetY - window.scrollY);
          smoothScrollTo(targetY, duration, () => window.dispatchEvent(new Event('hd:color-unfreeze')));
        }
      });
    });
  };

  return (
    <header
      className="hd-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        gap: 14,
        padding: '20px clamp(20px,5vw,40px)',
        boxSizing: 'border-box',
        color: 'var(--rb-ink, #E8E3D6)',
        background: 'var(--rb-bar, #0E1524)',
        borderBottom: '1px solid var(--rb-ink-rule, rgba(232,227,214,0.35))',
      }}
    >
      <div style={{ flex: '0 0 auto', fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(17px,4.4vw,22px)', whiteSpace: 'nowrap' }}>
        Rosybill Outfitters
      </div>
      <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '14px 28px' }}>
        <nav
          className="hidden hd-nav:flex"
          style={{ gap: 26, alignItems: 'center', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', color: 'var(--rb-ink-dim, #E8E3D6)' }}
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a
            href="#lodge"
            style={{ padding: '9px 16px', background: 'var(--rb-ink, #E8E3D6)', color: 'var(--rb-bg, #0E1524)' }}
          >
            Request availability
          </a>
        </nav>
        <button
          type="button"
          className="flex hd-nav:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          style={{ flexDirection: 'column', background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            whiteSpace: 'nowrap',
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 12.5,
            letterSpacing: '0.08em',
            padding: '6px 10px',
            border: '1px solid currentColor',
          }}
        >
          <span data-clock="1" style={{ display: 'inline-block' }}>05:40</span>
          {!narrow && (
            <span data-phase="1" style={{ display: 'inline-block', width: 80, fontSize: 9.5, letterSpacing: '0.16em', opacity: 0.7 }}>PRE-DAWN</span>
          )}
        </div>
        <AmbientSound />
      </div>

      {open && (
        <nav
          className="hd-nav:hidden"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--rb-bar, #0E1524)',
            borderBottom: '1px solid var(--rb-ink-rule, rgba(232,227,214,0.35))',
            padding: '12px clamp(20px,5vw,40px) 20px',
          }}
        >
          <a
            href="#lodge"
            onClick={(e) => handlePanelNavClick(e, '#lodge')}
            style={{ padding: '14px 0', marginBottom: 4, fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', background: 'var(--rb-ink, #E8E3D6)', color: 'var(--rb-bg, #0E1524)' }}
          >
            Book your trip
          </a>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handlePanelNavClick(e, item.href)}
              style={{ padding: '10px 0', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-ink-dim, #E8E3D6)' }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
