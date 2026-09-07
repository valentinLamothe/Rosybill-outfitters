import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// About Us/Contact Us aren't ready to promote — a hamburger for one
// leftover item doesn't earn its keep, so just link back to the landing.
export default function Header() {
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
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexShrink: 0,
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 12,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(232,227,214,0.7)',
          textDecoration: 'none',
        }}
      >
        <ArrowLeft size={16} />
        Home
      </Link>
    </header>
  );
}
