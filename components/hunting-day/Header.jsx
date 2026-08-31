import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AmbientSound from './AmbientSound';

const NAV_ITEMS = [
  { href: '#the-day', label: 'The Day' },
  { href: '#guides', label: 'Guides' },
  { href: '#lodge', label: 'Lodge' },
  { href: '#travel', label: 'Travel' },
];

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
            onClick={() => setOpen(false)}
            style={{ padding: '14px 0', marginBottom: 4, fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', background: 'var(--rb-ink, #E8E3D6)', color: 'var(--rb-bg, #0E1524)' }}
          >
            Book your trip
          </a>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
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
