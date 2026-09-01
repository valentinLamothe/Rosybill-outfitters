import { useEffect, useRef } from 'react';
import { LAB, ACCENT, INKS, hex, css, contrast, mixLab, toOklab, remapInverse, sample } from '../../lib/hunting-day/colorEngine';

const NAMED_STOP_MINUTES = [340, 435, 780, 1050, 1260];
const CUSTOM_PROPS = [
  '--rb-bg', '--rb-ink', '--rb-ink-dim', '--rb-ink-rule', '--rb-ink-faint',
  '--rb-sky', '--rb-glow', '--rb-glow-o', '--rb-photo', '--rb-tint',
  '--rb-tint-hue', '--rb-tint-hard', '--rb-tint-soft', '--rb-scrim',
  '--rb-scrim-low', '--rb-bar', '--rb-bar-fade', '--rb-accent',
  '--rb-accent-hover', '--rb-accent-ink', '--rb-field-rule',
  '--rb-header', '--rb-p', '--rb-pct',
];

// Drives the "day" palette from scroll: one rAF-batched paint() writing CSS
// custom properties on :root. Imperative only, never touches React state.
export default function useHuntingDayEngine(rootRef) {
  const last = useRef(null);
  const anchors = useRef([]);
  const parallaxEls = useRef(null);
  const reduced = useRef(false);
  const raf = useRef(0);
  const roRaf = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced.current = reducedMotionQuery.matches;

    const measureBands = () => {
      const sections = [...root.querySelectorAll('section[data-band]')];
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      anchors.current = sections.map((s) => ({
        a: parseFloat(s.dataset.band),
        m: Math.min(1, s.offsetTop / max),
      }));
    };

    // Maps through anchors so each section keeps its own authored color,
    // independent of how tall the page actually renders.
    const bandProgress = () => {
      const doc = document.documentElement;
      const y = window.scrollY || doc.scrollTop || 0;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pixelFrac = Math.max(0, Math.min(1, y / max));
      if (!reduced.current) return remapInverse(pixelFrac, anchors.current);
      let band = 0;
      const mid = y + window.innerHeight * 0.5;
      root.querySelectorAll('section[data-band]').forEach((s) => {
        if (s.offsetTop <= mid) band = parseFloat(s.dataset.band);
      });
      return band;
    };

    const blend = (c, bg, a) => [
      Math.round(c[0] * a + bg[0] * (1 - a)),
      Math.round(c[1] * a + bg[1] * (1 - a)),
      Math.round(c[2] * a + bg[2] * (1 - a)),
    ];
    const solveA = (c, bg, want, floor = 4.5) => {
      let a = want;
      while (a < 1 && contrast(blend(c, bg, a), bg) < floor) a += 0.02;
      return Math.min(1, a);
    };
    // Nudges a color toward `ink` (already guaranteed to clear `floor`
    // against bg) until it does too — same idea as solveA, for solid colors.
    const solveToward = (rgb, ink, bg, floor = 4.5) => {
      let out = rgb, k = 0;
      while (k < 1 && contrast(out, bg) < floor) {
        k += 0.05;
        out = mixLab(toOklab(rgb), toOklab(ink), k);
      }
      return out;
    };

    const paint = () => {
      const p = bandProgress();
      const s = sample(p, reduced.current, LAB);

      if (!reduced.current && !parallaxEls.current) {
        parallaxEls.current = [...root.querySelectorAll('img[data-parallax], video[data-parallax]')];
      }
      if (!reduced.current && parallaxEls.current) {
        const narrow = window.innerWidth < 640;
        const strength = narrow ? 0.13 : 0.20;
        const cap = narrow ? 65 : 100;
        const vh = window.innerHeight;
        // Read all rects before writing any transform, so layout isn't
        // recomputed between elements.
        const shifts = parallaxEls.current.map((img) => {
          const sec = img.closest('section');
          if (!sec) return null;
          const rect = sec.getBoundingClientRect();
          const centerOffset = rect.top + rect.height / 2 - vh / 2;
          return Math.max(-cap, Math.min(cap, -centerOffset * strength));
        });
        parallaxEls.current.forEach((img, i) => {
          if (shifts[i] === null) return;
          img.style.transform = 'translateY(' + shifts[i].toFixed(1) + 'px)';
        });
      } else if (reduced.current && parallaxEls.current) {
        parallaxEls.current.forEach((img) => { img.style.transform = 'none'; });
      }

      let ink = INKS[0], best = 0;
      for (const c of INKS) {
        const r = contrast(c, s.bg);
        if (r > best) { best = r; ink = c; }
        if (r >= 7) { ink = c; break; }
      }
      const dimA = solveA(ink, s.bg, 0.74);
      const faintA = solveA(ink, s.bg, 0.52);
      // UI borders (form field underlines) need only the 3:1 non-text floor.
      const fieldRuleA = solveA(ink, s.bg, 0.32, 3.0);

      const accentOn = s.accent;
      let accentRGB;
      if (accentOn <= 0) accentRGB = ink;
      else if (accentOn >= 1) accentRGB = ACCENT;
      else accentRGB = mixLab(toOklab(ink), toOklab(ACCENT), accentOn);
      const accentInk = contrast(hex('#20070C'), accentRGB) >= contrast(hex('#FFFDF7'), accentRGB) ? '#20070C' : '#FFFDF7';
      // Accent is rendered as text (links, "light", form errors) — hold it
      // to the same 4.5:1 floor as ink instead of trusting the raw mix.
      accentRGB = solveToward(accentRGB, ink, s.bg);
      const accent = css(accentRGB);
      let accentHoverRGB = mixLab(toOklab(accentRGB), toOklab(hex('#FFFDF7')), 0.22);
      accentHoverRGB = solveToward(accentHoverRGB, ink, s.bg);
      const accentHover = css(accentHoverRGB);

      const V = {
        '--rb-bg': css(s.bg),
        '--rb-ink': css(ink),
        '--rb-ink-dim': css(blend(ink, s.bg, dimA)),
        '--rb-ink-rule': css(ink, 0.32),
        '--rb-ink-faint': css(blend(ink, s.bg, faintA)),
        '--rb-sky': `linear-gradient(180deg, ${css(mixLab(toOklab(s.bg), [0, 0, 0], 0.30))} 0%, ${css(s.bg)} 48%, ${css(mixLab(toOklab(s.bg), toOklab(s.glow), 0.34))} 100%)`,
        '--rb-glow': `radial-gradient(62% 100% at 50% 100%, ${css(s.glow, 0.92)} 0%, ${css(s.glow, 0.32)} 44%, ${css(s.glow, 0)} 76%)`,
        '--rb-glow-o': (0.34 + Math.sin(p * Math.PI) * 0.5).toFixed(3),
        '--rb-photo': `linear-gradient(165deg, ${css(mixLab(toOklab(s.photo), toOklab(s.glow), 0.34))} 0%, ${css(s.photo)} 54%, ${css(mixLab(toOklab(s.photo), [0, 0, 0], 0.36))} 100%)`,
        '--rb-tint': css(s.bg, 0.52),
        '--rb-tint-hue': css(s.bg),
        '--rb-tint-hard': css(s.bg, 0.66),
        '--rb-scrim': `linear-gradient(180deg, ${css([0, 0, 0], 0.52)} 0%, ${css([0, 0, 0], 0.30)} 38%, ${css([0, 0, 0], 0.62)} 100%), ${css(s.bg, 0.62)}`,
        '--rb-scrim-low': `linear-gradient(180deg, ${css([0, 0, 0], 0.18)} 0px, ${css([0, 0, 0], 0.04)} 200px, ${css([0, 0, 0], 0.44)} 440px, ${css([0, 0, 0], 0.68)} 780px, ${css([0, 0, 0], 0.74)} 100%), ${css(s.bg, 0.34)}`,
        '--rb-bar': css(s.bg),
        '--rb-bar-fade': `linear-gradient(180deg, ${css(s.bg, 0.9)} 0%, ${css(s.bg, 0)} 100%)`,
        '--rb-tint-soft': `linear-gradient(0deg, ${css(s.bg, 0.86)} 0%, ${css(s.bg, 0)} 64%)`,
        '--rb-accent': accent,
        '--rb-accent-hover': accentHover,
        '--rb-accent-ink': accentInk,
        '--rb-field-rule': css(ink, fieldRuleA),
        '--rb-header': `linear-gradient(180deg, ${css(s.bg, 0.97)} 0%, ${css(s.bg, 0.93)} 34%, ${css(s.bg, 0.5)} 66%, ${css(s.bg, 0)} 100%)`,
        '--rb-p': p.toFixed(4),
        '--rb-pct': (p * 100).toFixed(2) + '%',
      };
      const rs = document.documentElement.style;
      for (const k in V) if (last.current?.[k] !== V[k]) rs.setProperty(k, V[k]);
      if (last.current?.['--rb-bg'] !== V['--rb-bg']) document.body.style.backgroundColor = V['--rb-bg'];
      last.current = V;

      const m = Math.round(s.time);
      const clock = root.querySelector('[data-clock]');
      const txt = String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
      if (clock && clock.textContent !== txt) {
        clock.textContent = txt;
        if (NAMED_STOP_MINUTES.includes(m) && !reduced.current) {
          clock.style.transition = 'none';
          clock.style.transform = 'scale(1.22)';
          requestAnimationFrame(() => {
            clock.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
            clock.style.transform = 'scale(1)';
          });
        }
      }
      const phase = root.querySelector('[data-phase]');
      if (phase && phase.textContent !== s.label) phase.textContent = s.label;
    };

    // paint() reads live scroll position, so one rAF per frame is enough —
    // no need to also paint synchronously inside the scroll handler itself.
    const tick = () => { raf.current = 0; paint(); };
    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(tick);
    };
    const onResize = () => { measureBands(); onScroll(); };

    const onReducedMotionChange = () => {
      reduced.current = reducedMotionQuery.matches;
      paint();
    };

    measureBands();
    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    reducedMotionQuery.addEventListener('change', onReducedMotionChange);

    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(() => {
        if (roRaf.current) cancelAnimationFrame(roRaf.current);
        roRaf.current = requestAnimationFrame(() => { roRaf.current = 0; measureBands(); });
      });
      root.querySelectorAll('section[data-band]').forEach((s) => ro.observe(s));
    }
    if (document.fonts?.ready) document.fonts.ready.then(() => measureBands());

    const strip = root.querySelector('[data-strip]');
    const frameCount = root.querySelector('[data-frame-count]');
    let onStrip;
    if (strip && frameCount) {
      const frames = [...strip.querySelectorAll('[data-frame]')];
      const total = String(frames.length).padStart(2, '0');
      onStrip = () => {
        if (strip.scrollWidth <= strip.clientWidth + 1) {
          const t = '01 / ' + total;
          if (frameCount.textContent !== t) frameCount.textContent = t;
          return;
        }
        const mid = strip.scrollLeft + strip.clientWidth / 2;
        let i = 0, best = Infinity;
        frames.forEach((fr, n) => {
          const d = Math.abs(fr.offsetLeft + fr.offsetWidth / 2 - mid);
          if (d < best) { best = d; i = n; }
        });
        const t = String(i + 1).padStart(2, '0') + ' / ' + total;
        if (frameCount.textContent !== t) frameCount.textContent = t;
      };
      strip.addEventListener('scroll', onStrip, { passive: true });
      onStrip();
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      reducedMotionQuery.removeEventListener('change', onReducedMotionChange);
      if (ro) ro.disconnect();
      if (strip && onStrip) strip.removeEventListener('scroll', onStrip);
      if (roRaf.current) cancelAnimationFrame(roRaf.current);
      if (raf.current) cancelAnimationFrame(raf.current);
      const rs = document.documentElement.style;
      CUSTOM_PROPS.forEach((k) => rs.removeProperty(k));
      // <body> survives Pages Router client-nav, so paint()'s bg write
      // must be undone here or the next page inherits a dark background.
      document.body.style.backgroundColor = '';
    };
  }, [rootRef]);
}
