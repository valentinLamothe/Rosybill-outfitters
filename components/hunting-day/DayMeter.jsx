// Vertical progress bar tracking scroll position against the day's color
// curve. --rb-p (0..1) is written by useHuntingDayEngine's paint().
export default function DayMeter() {
  return (
    <div
      className="hidden hd-nav:flex"
      style={{
        position: 'fixed',
        right: 26,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 7,
        alignItems: 'center',
        gap: 12,
        pointerEvents: 'none',
        color: 'var(--rb-ink, #E8E3D6)',
      }}
    >
      <div style={{ position: 'relative', width: 2, height: 180, background: 'rgba(140,140,134,0.22)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'calc(var(--rb-p, 0) * 180px)', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 180,
              opacity: 0.72,
              background: 'linear-gradient(180deg,#0E1524 0%,#2A3A2E 26%,#6E6330 40%,#B0552A 55%,#93313D 76%,#E8556B 88%,#12180F 100%)',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            left: -3,
            width: 8,
            height: 1,
            background: 'currentColor',
            opacity: 0.8,
            top: 'calc(var(--rb-p, 0) * 179px)',
          }}
        />
      </div>
    </div>
  );
}
