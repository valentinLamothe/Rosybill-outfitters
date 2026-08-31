// Ported from "The Hunting Day" Claude Design canvas. Pure math, no DOM access —
// safe to import anywhere, including at module scope during SSR.

// ---- sRGB <-> OKLab (perceptual interpolation: green -> ember never muddies)
const s2l = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
const l2s = (v) => { const o = v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055; return Math.max(0, Math.min(255, Math.round(o * 255))); };

export function toOklab(c) {
  const r = s2l(c[0]), g = s2l(c[1]), b = s2l(c[2]);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
          1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
          0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s];
}

export function fromOklab(L) {
  const l = Math.pow(L[0] + 0.3963377774 * L[1] + 0.2158037573 * L[2], 3);
  const m = Math.pow(L[0] - 0.1055613458 * L[1] - 0.0638541728 * L[2], 3);
  const s = Math.pow(L[0] - 0.0894841775 * L[1] - 1.2914855480 * L[2], 3);
  return [l2s(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
          l2s(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
          l2s(-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s)];
}

export const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
export const css = (c, a) => a === undefined ? `rgb(${c[0]},${c[1]},${c[2]})` : `rgba(${c[0]},${c[1]},${c[2]},${a})`;
export const relLum = (c) => 0.2126 * s2l(c[0]) + 0.7152 * s2l(c[1]) + 0.0722 * s2l(c[2]);
export const contrast = (a, b) => { const x = relLum(a), y = relLum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };

// Ink candidates, warmest-first; the floor picks the first that clears 4.5:1
export const INKS = [hex('#E8E3D6'), hex('#F6F2E7'), hex('#FFFDF7'), hex('#1B1C13'), hex('#0A0B06')];

// Day curve. `a` = accent strength (rosybill red is 0 until dusk).
export const STOPS = [
  { p: 0.00, t: 340, label: 'PRE-DAWN', bg: '#0E1524', photo: '#1A2438', glow: '#3A4A6E', a: 0 },
  { p: 0.10, t: 385, label: 'GREY LIGHT', bg: '#1B2733', photo: '#26364A', glow: '#5E6C7A', a: 0 },
  { p: 0.26, t: 435, label: 'FIRST LIGHT', bg: '#2A3A2E', photo: '#38503C', glow: '#7E9070', a: 0 },
  { p: 0.40, t: 600, label: 'GROUND WARM', bg: '#5E4F16', photo: '#7A6A24', glow: '#D8B44C', a: 0 },
  { p: 0.55, t: 780, label: 'MIDDAY', bg: '#8E3D12', photo: '#C2601F', glow: '#FF9A34', a: 0 },
  { p: 0.68, t: 930, label: 'AFTERNOON', bg: '#872C1C', photo: '#B84A2E', glow: '#F2743A', a: 0.15 },
  { p: 0.76, t: 1050, label: 'DUSK', bg: '#4E1622', photo: '#7E2634', glow: '#E8556B', a: 1 },
  { p: 0.88, t: 1140, label: 'LAST LIGHT', bg: '#2E0F17', photo: '#4A1B25', glow: '#C0455C', a: 1 },
  { p: 1.00, t: 1260, label: 'NIGHT', bg: '#12180F', photo: '#1C2416', glow: '#5E3A2A', a: 1 }
];

export const LAB = STOPS.map(s => ({ ...s, bgL: toOklab(hex(s.bg)), phL: toOklab(hex(s.photo)), glL: toOklab(hex(s.glow)) }));

export const ACCENT = hex('#E8556B');

export const lerp = (a, b, k) => a + (b - a) * k;
export const mixLab = (a, b, k) => fromOklab([lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k)]);

// Locks each section's color to its own data-band value no matter how tall
// the page actually renders.
export const remapInverse = (m, anchors) => {
  if (anchors.length < 2) return m;
  if (m <= anchors[0].m) return anchors[0].a * (anchors[0].m ? m / anchors[0].m : 1);
  for (let i = 0; i < anchors.length - 1; i++) {
    const x = anchors[i], y = anchors[i + 1];
    if (m <= y.m) return x.a + (y.a - x.a) * ((m - x.m) / (y.m - x.m || 1));
  }
  const last = anchors[anchors.length - 1];
  return last.a + (1 - last.a) * ((m - last.m) / (1 - last.m || 1));
};

// Samples the day curve at progress p (0..1). Under reduced motion `e` is
// hard-clamped to 0/1 so a p near a stop boundary never half-mixes.
export function sample(p, reduced = false, stops = LAB) {
  let i = 0;
  while (i < stops.length - 2 && p > stops[i + 1].p) i++;
  const a = stops[i], b = stops[i + 1];
  const k = Math.max(0, Math.min(1, (p - a.p) / (b.p - a.p || 1)));
  const e = reduced ? (k < 0.5 ? 0 : 1) : k * k * (3 - 2 * k);
  return {
    bg: mixLab(a.bgL, b.bgL, e),
    photo: mixLab(a.phL, b.phL, e),
    glow: mixLab(a.glL, b.glL, e),
    accent: lerp(a.a, b.a, e),
    time: lerp(a.t, b.t, e),
    label: e < 0.5 ? a.label : b.label
  };
}
