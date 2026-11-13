// Static poster: the site's 2D-canvas fallback path, rendered once per resize.
// Layout maths and palette live in poster.js so the live WebGL2 renderer can
// share them.

import { fitResolution, layout, palette } from "./poster.js";

// Integer hash (lowbias32) -> uint32
function hash(x) {
  x = x >>> 0;
  x = Math.imul(x ^ (x >>> 16), 2146121005);
  x = Math.imul(x ^ (x >>> 15), 2221713035);
  return (x ^ (x >>> 16)) >>> 0;
}

// Hash -> float in [0, 1)
function rnd(x) {
  return (hash(x) >>> 8) / 16777216;
}

export function draw(canvas, w, h, hue) {
  canvas.width = w;
  canvas.height = h;
  const pal = palette(hue);
  const { scale, centerX, centerY, radius, thetaMin, thetaMax, ringWidth, starCount } = layout(w, h);
  const rayFreq = (Math.PI * 2 * 2.2) / (thetaMax - thetaMin);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const img = ctx.createImageData(w, h);
  const data = img.data;

  // Radial falloff from viewport centre — keeps the far corner darkest.
  const cx = w / 2;
  const cy = h / 2;
  const falloffSpan = 1600 * scale;
  const falloff = (x, y) => {
    const r = Math.hypot(x - cx, y - cy) / falloffSpan;
    const v = 1 - r * r * r;
    return v > 0.2 ? v : 0.2;
  };

  // Bloom field at half resolution, dithered across the three bands.
  const gw = Math.ceil(w / 2);
  const gh = Math.ceil(h / 2);
  const field = new Float32Array(gw * gh * 3);
  const mask = new Uint8Array(gw * gh);

  const core = 14 * scale;
  const mid = 120 * scale;
  const wide = 600 * scale;
  const coreRamp = 10 * scale;
  const midRamp = 30 * scale;
  const edge = 5 * scale;

  for (let y = 0; y < gh; y++) {
    const sy = y * 2;
    const dy = sy - centerY;
    for (let x = 0; x < gw; x++) {
      const sx = x * 2;
      const dx = sx - centerX;
      const dist = Math.hypot(dx, dy) - radius;
      if (dist < 0) continue;

      let intensity = falloff(sx + 1, sy + 1);
      let colour = null;
      const angle = Math.atan2(dy, dx);

      if (dist < edge) {
        intensity *= 1 + 0.16 * Math.sin(angle * rayFreq);
        colour = pal.sky;
      } else {
        const a = Math.exp(-dist / core);
        const b = Math.exp(-dist / mid) * Math.min(1, dist / coreRamp) * 0.85;
        const c = Math.exp(-dist / wide) * Math.min(1, dist / midRamp) * 0.7;
        const total = Math.min(1, a + b + c);
        if (total > 0.003) {
          const n = rnd(y * gw + x ^ 539363090);
          if (n < a) {
            intensity *= 1 + 0.16 * Math.sin(angle * rayFreq);
            colour = pal.sky;
          } else if (n < a + b) {
            colour = pal.violet;
          } else if (n < total) {
            colour = pal.plum;
          }
        }
      }

      if (colour) {
        const i = y * gw + x;
        mask[i] = 1;
        field[i * 3] = colour[0] * intensity;
        field[i * 3 + 1] = colour[1] * intensity;
        field[i * 3 + 2] = colour[2] * intensity;
      }
    }
  }

  // Upsample 2x with per-pixel noise on top.
  let seed = 0;
  let p = 0;
  for (let y = 0; y < h; y++) {
    const row = (y >> 1) * gw;
    for (let x = 0; x < w; x++, seed++, p += 4) {
      const n = (rnd(seed ^ 2654435769) - 0.5) * 24;
      const i = row + (x >> 1);
      let r;
      let g;
      let b;
      if (mask[i]) {
        r = field[i * 3];
        g = field[i * 3 + 1];
        b = field[i * 3 + 2];
      } else {
        const v = falloff(x + 0.5, y + 0.5);
        r = pal.black[0] * v;
        g = pal.black[1] * v;
        b = pal.black[2] * v;
      }
      data[p] = r + n;
      data[p + 1] = g + n;
      data[p + 2] = b + n;
      data[p + 3] = 255;
    }
  }

  // Stars: scattered along an arc that traces the bloom ring, 2x2 px each.
  for (let i = 0; i < starCount; i++) {
    const r = hash(i ^ 2769414579);
    const angle = thetaMin + (thetaMax - thetaMin) * rnd(r);
    const spread = ringWidth * (1 - Math.cbrt(rnd(r ^ 1675113877)));
    const size = Math.max(spread, 14 * scale);
    const inward = rnd(r ^ 3266489909) * size;
    const dist = radius - inward;
    const weight = 0.004 + rnd(r ^ 668265263) * 0.011;
    const jitter = rnd(r ^ 374761393) * Math.PI * 2;
    const theta = angle - ((0.06 * scale) / weight) * (Math.cos(jitter) / Math.max(dist, 1));
    const sx = centerX + dist * Math.cos(theta);
    const sy = centerY + dist * Math.sin(theta);

    const alpha = Math.max(0, Math.min(inward / 3, (size - inward) / (size * 0.25)));
    if (alpha <= 0) continue;

    const lum = falloff(sx, sy);
    const x0 = Math.ceil(sx - 1.5);
    const y0 = Math.ceil(sy - 1.5);
    for (let y = y0; y < y0 + 2; y++) {
      if (y < 0 || y >= h) continue;
      for (let x = x0; x < x0 + 2; x++) {
        if (x < 0 || x >= w) continue;
        const o = (y * w + x) * 4;
        data[o] += (pal.silver[0] * lum - data[o]) * alpha;
        data[o + 1] += (pal.silver[1] * lum - data[o + 1]) * alpha;
        data[o + 2] += (pal.silver[2] * lum - data[o + 2]) * alpha;
      }
    }
  }

  // Sparse ordered dither towards pure black/white for the film-grain look.
  p = 0;
  for (let y = 0; y < h; y++) {
    const row = (y & 511) * 512;
    for (let x = 0; x < w; x++, p += 4) {
      const n = rnd(row + (x & 511) ^ 3266489909);
      if (n < 0.045) {
        const target = n < 0.023 ? 0 : 255;
        const mix = 10 / 255;
        data[p] += (target - data[p]) * mix;
        data[p + 1] += (target - data[p + 1]) * mix;
        data[p + 2] += (target - data[p + 2]) * mix;
      }
    }
  }

  ctx.putImageData(img, 0, 0);
}

export function renderStatic(canvas, hue) {
  const { width, height } = fitResolution(canvas.getBoundingClientRect());
  draw(canvas, width, height, hue);
}