import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/wingshooting', label: 'Wingshooting', active: true },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

// Same dark bar/mono-nav look as hunting-day/Header, but real page links
// instead of in-page anchors — this page has no color engine to drive it.
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 14,
        padding: '20px clamp(20px,5vw,48px)',
        background: '#0E1524',
        borderBottom: '1px solid rgba(232,227,214,0.35)',
        color: '#E8E3D6',
      }}
    >
      <Link href="/" style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(18px,3vw,22px)', color: '#E8E3D6', textDecoration: 'none' }}>
        Rosybill Outfitters
      </Link>

      <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: item.active ? '#E8556B' : 'rgba(232,227,214,0.7)',
              textDecoration: 'none',
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="flex md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer' }}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav
          className="md:hidden"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            background: '#0E1524',
            borderBottom: '1px solid rgba(232,227,214,0.35)',
            padding: '8px clamp(20px,5vw,48px) 20px',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={item.active ? 'page' : undefined}
              style={{
                padding: '12px 0',
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 12.5,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: item.active ? '#E8556B' : 'rgba(232,227,214,0.7)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
