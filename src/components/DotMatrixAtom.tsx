import { useEffect, useRef } from "react";
import { createEngine } from "@sarmal/core";
// TODO: switch to standard library usage when composing becomes "officially" supported

// ── Constants ────────────────────────────────────────────────────────────────

const TWO_PI = Math.PI * 2;
const SIZE = 100; // internal canvas resolution (px)
const COLS = 20;
const ROWS = 20;
const TRAIL_LENGTH = 400;
const TRAIL_SPEED = 3;
const BG_ALPHA = 0.0;
const NUCLEUS_R = 0.12;

// Ellipse shape coefficients
const EA = 0.9;
const EB = 0.35;

const ANGLES = [0, Math.PI / 3, (2 * Math.PI) / 3] as const;
const COLORS = ["#61dafb", "#38bdf8", "#22d3ee"] as const;

// ── Curve helpers ─────────────────────────────────────────────────────────────

function ellipseFn(phi: number) {
  return (phase: number) => ({
    x: EA * Math.cos(phase) * Math.cos(phi) - EB * Math.sin(phase) * Math.sin(phi),
    y: EA * Math.cos(phase) * Math.sin(phi) + EB * Math.sin(phase) * Math.cos(phi),
  });
}

function ellipseCurve(phi: number) {
  return { name: "ellipse", fn: ellipseFn(phi), period: TWO_PI, speed: TRAIL_SPEED };
}

// ── Grid helpers ──────────────────────────────────────────────────────────────

function mapPt(x: number, y: number): [number, number] {
  return [
    Math.max(0, Math.min(COLS - 1, Math.round(((x + 1) / 2) * (COLS - 1)))),
    Math.max(0, Math.min(ROWS - 1, Math.round(((y + 1) / 2) * (ROWS - 1)))),
  ];
}

type TrailPt = { readonly x: number; readonly y: number };

function walkTrail(
  trail: ReadonlyArray<TrailPt>,
  count: number,
  onCell: (c: number, r: number, intensity: number) => void,
) {
  for (let i = 0; i < count; i++) {
    const pt = trail[i]!;
    const intensity = (i + 1) / count;
    const [c, r] = mapPt(pt.x, pt.y);
    onCell(c, r, intensity);

    if (i < count - 1) {
      const next = trail[i + 1]!;
      const [nc, nr] = mapPt(next.x, next.y);
      const steps = Math.ceil(Math.max(Math.abs(nc - c), Math.abs(nr - r))) * 2;
      for (let s = 1; s < steps; s++) {
        const frac = s / steps;
        const [ic, ir] = mapPt(pt.x + (next.x - pt.x) * frac, pt.y + (next.y - pt.y) * frac);
        onCell(ic, ir, intensity + (1 / count) * frac);
      }
    }
  }
}

// ── Static nucleus (pre-computed once) ───────────────────────────────────────

// Cells whose math-space centre falls within NUCLEUS_R of origin
const NUCLEUS = new Set<number>();
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    const mx = (col / (COLS - 1)) * 2 - 1;
    const my = (row / (ROWS - 1)) * 2 - 1;
    if (mx * mx + my * my <= NUCLEUS_R * NUCLEUS_R) {
      NUCLEUS.add(row * COLS + col);
    }
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * Dot-matrix React atom logo.
 *
 * Three ellipse engines share a single canvas grid — the "Unified Grid"
 * architecture. Brightest trail per frame wins each cell; the nucleus stays
 * lit at full alpha.
 *
 * @param size - CSS display size in pixels (canvas internal resolution is always SIZE×SIZE).
 */
export function DotMatrixAtom({ size = SIZE }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d")!;

    const cellW = SIZE / COLS;
    const cellH = SIZE / ROWS;
    const dotR = Math.min(cellW, cellH) * 0.36;

    const engines = ANGLES.map((phi) => createEngine(ellipseCurve(phi), TRAIL_LENGTH));
    const intensityGrid = new Float32Array(COLS * ROWS);
    const ownerGrid = new Int8Array(COLS * ROWS);

    let last = performance.now();
    let rafId: number;

    function frame(now: number) {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;

      intensityGrid.fill(0);
      ownerGrid.fill(-1);

      for (let e = 0; e < engines.length; e++) {
        const trail = engines[e]!.tick(dt);
        const count = engines[e]!.trailCount;
        walkTrail(trail, count, (c, r, intensity) => {
          const idx = r * COLS + c;
          if (intensity > intensityGrid[idx]!) {
            intensityGrid[idx] = intensity;
            ownerGrid[idx] = e;
          }
        });
      }

      ctx.clearRect(0, 0, SIZE, SIZE);

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const idx = row * COLS + col;
          const cx = (col + 0.5) * cellW;
          const cy = (row + 0.5) * cellH;
          const intensity = intensityGrid[idx]!;
          const owner = ownerGrid[idx]!;

          ctx.beginPath();
          ctx.roundRect(cx - dotR, cy - dotR, dotR * 2, dotR * 2, dotR);

          if (intensity > 0 && owner >= 0) {
            ctx.fillStyle = COLORS[owner]!;
            ctx.globalAlpha = 0.08 + intensity * 0.92;
          } else if (NUCLEUS.has(idx)) {
            ctx.fillStyle = "#61dafb";
            ctx.globalAlpha = 1;
          } else {
            ctx.fillStyle = `rgba(97,218,251,${BG_ALPHA})`;
            ctx.globalAlpha = 1;
          }

          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={SIZE}
      height={SIZE}
      style={{ width: size, height: size, display: "block" }}
    />
  );
}
