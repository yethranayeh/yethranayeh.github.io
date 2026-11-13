// Shared geometry + palette for both the static (2D canvas) and live (WebGL2)
// poster renderers.

export const TAU = Math.PI * 2;
export const PIXEL_BUDGET = 22e5;
export const MAX_STARS = 3e4;

export const BASE = {
  sky: [56, 189, 248],
  violet: [192, 132, 252],
  plum: [70, 15, 85],
  silver: [250, 250, 252],
  black: [9, 9, 11],
};

// Rotate the palette by `deg` degrees with the standard hue-rotation matrix.
export function palette(deg) {
  const t = (deg * Math.PI) / 180;
  const c = Math.cos(t);
  const s = Math.sin(t);
  const m = [
    [0.213 + c * 0.787 - s * 0.213, 0.715 - c * 0.715 - s * 0.715, 0.072 - c * 0.072 + s * 0.928],
    [0.213 - c * 0.213 + s * 0.143, 0.715 + c * 0.285 + s * 0.14, 0.072 - c * 0.072 - s * 0.283],
    [0.213 - c * 0.213 - s * 0.787, 0.715 - c * 0.715 + s * 0.715, 0.072 + c * 0.928 + s * 0.072],
  ];
  const project = (rgb, row) =>
    Math.min(255, Math.max(0, rgb[0] * row[0] + rgb[1] * row[1] + rgb[2] * row[2]));
  const rot = (rgb) => [project(rgb, m[0]), project(rgb, m[1]), project(rgb, m[2])];
  return {
    sky: rot(BASE.sky),
    violet: rot(BASE.violet),
    plum: rot(BASE.plum),
    silver: rot(BASE.silver),
    black: rot(BASE.black),
  };
}

// Integer hash (lowbias32) -> uint32
export function hash(x) {
  x = x >>> 0;
  x = Math.imul(x ^ (x >>> 16), 2146121005);
  x = Math.imul(x ^ (x >>> 15), 2221713035);
  return (x ^ (x >>> 16)) >>> 0;
}

// Hash -> float in [0, 1)
export function rnd(x) {
  return (hash(x) >>> 8) / 16777216;
}

// Circle geometry: centre, radius and the angular span the viewport covers.
export function layout(w, h) {
  const scale = Math.min(2, Math.max(0.5, Math.sqrt((w * h) / (1920 * 1080))));
  const lift = -724 * scale + (w - 1920 * scale) * 0.4;
  const chord = 2000 * scale;
  const span = 2500 * scale;
  const right = lift + Math.sqrt(span * span - chord * chord);
  const gap = w - lift;
  const bottom = span > gap ? chord - Math.sqrt(span * span - gap * gap) : Infinity;
  const left = Math.min(right, w * 0.405);
  const top = Math.min(bottom, h * 0.585);

  const dx = w - left;
  const dy = top;
  const corner = Math.hypot(dx, dy);
  const thickness = corner * 0.062;
  const radius = (corner * corner) / (8 * thickness) + thickness * 0.5;
  const centerX = (left + w) * 0.5 - (dy / corner) * (radius - thickness);
  const centerY = top * 0.5 + (dx / corner) * (radius - thickness);

  let thetaMin = Infinity;
  let thetaMax = -Infinity;
  for (let i = 0; i <= 32; i++) {
    const k = i / 32;
    for (const [x, y] of [
      [w * k, 0],
      [w * k, h],
      [0, h * k],
      [w, h * k],
    ]) {
      const a = Math.atan2(y - centerY, x - centerX);
      if (a < thetaMin) thetaMin = a;
      if (a > thetaMax) thetaMax = a;
    }
  }
  thetaMin -= 0.04;
  thetaMax += 0.04;

  const ringWidth = 500 * scale;
  return {
    scale,
    centerX,
    centerY,
    radius,
    thetaMin,
    thetaMax,
    ringWidth,
    rayFreq: (TAU * 2.2) / (thetaMax - thetaMin),
    starCount: Math.min(
      MAX_STARS,
      Math.round(0.1 * 0.25 * (thetaMax - thetaMin) * (radius - ringWidth / 2) * ringWidth * 0.25)
    ),
  };
}

// Render at a fraction of device resolution, capped by a total pixel budget.
export function fitResolution(rect) {
  const cw = Math.max(320, rect.width);
  const ch = Math.max(240, rect.height);
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const fit = Math.sqrt(PIXEL_BUDGET / (cw * ch));
  const ratio = Math.max(0.55, Math.min(dpr, fit));
  return { width: Math.round(cw * ratio), height: Math.round(ch * ratio) };
}