// Three fixed full-viewport layers behind everything: sky gradient, a soft
// glow that breathes with scroll progress, and a subtle dot-grid texture.
export default function AmbientLayers() {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'var(--rb-sky, #0E1524)' }} />
      <div
        style={{
          position: 'fixed',
          left: '50%',
          bottom: '-38vh',
          width: 'min(150vw, 1800px)',
          height: '110vh',
          transform: 'translateX(-50%)',
          zIndex: 0,
          pointerEvents: 'none',
          background: 'var(--rb-glow, transparent)',
          opacity: 'var(--rb-glow-o, 0.5)',
        }}
      />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.3,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 0.5px, transparent 0.6px)',
          backgroundSize: '3px 3px',
        }}
      />
    </>
  );
}
