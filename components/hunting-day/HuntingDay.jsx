import { useRef } from 'react';
import useHuntingDayEngine from './useHuntingDayEngine';
import AmbientLayers from './AmbientLayers';
import Header from './Header';
import DayMeter from './DayMeter';
import Hero from './Hero';
import FirstLight from './FirstLight';
import OpenWater from './OpenWater';
import Asado from './Asado';
import LastLight from './LastLight';
import Guides from './Guides';
import WhoWeAre from './WhoWeAre';
import FieldArchive from './FieldArchive';
import Lodge from './Lodge';

export default function HuntingDay() {
  const rootRef = useRef(null);
  useHuntingDayEngine(rootRef);

  return (
    <div className="hunting-day">
      <AmbientLayers />
      {/* Header/DayMeter must be inside rootRef: the engine queries
          [data-clock]/[data-phase] via root.querySelector, scoped to this
          subtree. position:fixed still anchors to the viewport regardless
          of DOM nesting since nothing here creates a new containing block. */}
      {/* overflowX intentionally NOT set here — it disables position:sticky
          for every descendant (used by Lodge's video backdrop). body already
          has overflow-x:hidden as the horizontal-scroll safety net. */}
      <div ref={rootRef} style={{ position: 'relative', width: '100%', maxWidth: '100%', background: 'var(--rb-bg, #0E1524)', fontFamily: "'Archivo',system-ui,sans-serif" }}>
        <a href="#main" className="hd-skip-link">Skip to content</a>
        <Header />
        <DayMeter />
        <main id="main">
          <Hero />
          <FirstLight />
          <OpenWater />
          <Asado />
          <LastLight />
          <Guides />
          <WhoWeAre />
          <FieldArchive />
          <Lodge />
        </main>
      </div>
      {/* Fully global CSS — styled-jsx still removes this <style> tag on
          unmount, so these rules stop applying once you leave this page. */}
      <style jsx global>{`
        /* overflow-x on html only — on both html+body it breaks position:sticky everywhere. */
        html {
          max-width: 100%;
          overflow-x: hidden;
          overscroll-behavior-x: none;
        }
        body {
          max-width: 100%;
        }
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
        .hunting-day {
          touch-action: manipulation;
        }
        .hunting-day a {
          color: var(--rb-accent, #E8556B);
          text-decoration: none;
        }
        .hd-skip-link {
          position: absolute;
          top: -100px;
          left: 12px;
          z-index: 20;
          padding: 12px 18px;
          background: var(--rb-ink, #E8E3D6);
          color: var(--rb-bg, #0E1524);
          font-size: 13px;
          font-weight: 600;
          transition: top 0.15s ease;
        }
        .hd-skip-link:focus {
          top: 12px;
        }
        .hunting-day a:hover {
          color: var(--rb-accent-hover, #F07C8C);
        }
        .hunting-day [data-strip]::-webkit-scrollbar {
          display: none;
        }
        .hd-header::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 100%;
          height: 44px;
          background: var(--rb-bar-fade, linear-gradient(180deg, rgba(14,21,36,0.9) 0%, rgba(14,21,36,0) 100%));
          pointer-events: none;
        }
        .hd-band-fire, .hd-band-lodge {
          min-height: 124vh;
        }
        .hd-band-lodge {
          min-height: 128vh;
        }
        @media (max-width: 760px) {
          .hd-band-fire, .hd-band-lodge {
            min-height: auto;
          }
        }
        @media (max-width: 640px) {
          .hunting-day [data-plate07pair] > figure img {
            aspect-ratio: 4 / 3 !important;
            height: auto !important;
          }
          .hunting-day [data-hero-plate] {
            flex-basis: 100% !important;
          }
          .hunting-day [data-hero-section] {
            padding-top: 96px !important;
          }
          .hunting-day [data-hero-h1] {
            font-size: clamp(38px, 9vw, 64px) !important;
          }
          .hunting-day [data-hero-meta] {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hunting-day [data-strip] {
            gap: 16px !important;
            padding-left: clamp(20px, 5vw, 40px) !important;
            padding-right: clamp(20px, 5vw, 40px) !important;
            scroll-snap-type: x mandatory !important;
          }
          .hunting-day [data-strip] > figure {
            width: 100% !important;
            scroll-snap-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}
