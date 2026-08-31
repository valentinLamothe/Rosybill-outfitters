import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/hunting-day/hd/rosybill-logo.png';
import argentinaMap from '../../public/images/hunting-day/hd/argentina-map.png';

const SITE_LINKS = [
  { href: '/about-us', label: 'About Us' },
  { href: '/wingshooting', label: 'Wingshooting' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        paddingTop: 32,
        borderTop: '1px solid var(--rb-ink-rule, rgba(232,227,214,0.35))',
        background:
          'radial-gradient(ellipse 640px 420px at 8% 20%, rgba(232,168,96,0.14), transparent 65%), radial-gradient(ellipse 520px 360px at 94% 100%, rgba(232,85,107,0.09), transparent 65%)',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px 48px' }}>
        <div style={{ flex: '0 0 auto', width: 104, height: 104 }}>
          <Image src={logo} alt="Rosybill Outfitters" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div
          style={{
            flex: '1 1 260px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px 32px',
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))',
          }}
        >
          <span style={{ flex: '1 1 240px', minWidth: 0, lineHeight: 1.9 }}>
            Rosybill Outfitters · Buenos Aires, Argentina
            <br />
            <span style={{ letterSpacing: '0.2em' }}>Hunting · Guiding · Memories · Since 1993</span>
          </span>
          <span style={{ flex: '0 0 auto', lineHeight: 1.9, textAlign: 'right', whiteSpace: 'nowrap' }}>
            US Office <a href="tel:+14044042333" style={{ color: 'var(--rb-ink-dim, #E8E3D6)' }}>404 404 2333</a>
            <br />
            Argentina{' '}
            <a href="https://wa.me/5491169274103?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20para%20una%20cacer%C3%ADa." style={{ color: 'var(--rb-ink-dim, #E8E3D6)' }}>
              +54 9 11 6927 4103
            </a>
            <br />
            <a href="mailto:Máxidominguez_20@hotmail.com" style={{ textTransform: 'none', letterSpacing: '0.06em', color: 'var(--rb-accent, #E8556B)' }}>
              Máxidominguez_20@hotmail.com
            </a>
          </span>
        </div>
        <div style={{ flex: '0 0 auto', maxWidth: 220 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 9.5,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))',
              marginBottom: 8,
            }}
          >
            Three provinces
          </div>
          <Image
            src={argentinaMap}
            alt="Map of Argentina marking Buenos Aires, Córdoba and Entre Ríos provinces"
            sizes="220px"
            style={{ display: 'block', width: '100%', maxWidth: 200, height: 'auto' }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '12px 24px',
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--rb-ink-faint, rgba(232,227,214,0.5))',
        }}
      >
        <nav style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {SITE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{ color: 'var(--rb-ink-dim, #E8E3D6)' }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <span>© {new Date().getFullYear()} Rosybill Outfitters</span>
      </div>
    </footer>
  );
}
