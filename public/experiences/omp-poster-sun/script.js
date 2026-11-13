// Toggles between the two poster renderers:
//
//   static — the site's 2D canvas fallback, one frame per resize
//   live   — WebGL2 port of their WASM/WGSL renderer: the rim dither reseeds
//            every frame and the stars drift along the arc
//
// Both share geometry + palette from poster.js, so the static frame is the
// same image, just frozen.

import { fitResolution, layout, palette } from "./poster.js";
import { renderStatic } from "./static.js";
import { createLiveRenderer } from "./live.js";
import { createAudio } from "./audio.js";

const HUE = 41;

const toggle = document.getElementById("mode-toggle");
const hint = document.getElementById("hint");
const speed = document.getElementById("speed");
const speedValue = document.getElementById("speed-value");
const playToggle = document.getElementById("play-toggle");
const seek = document.getElementById("seek");
const timeLabel = document.getElementById("time");

// The markup ships one canvas; it doubles as the 2D surface.
const ctx2dCanvas = document.getElementById("poster");
const glCanvas = document.createElement("canvas");
glCanvas.id = "poster";
glCanvas.setAttribute("aria-hidden", "true");
let active = ctx2dCanvas;

let renderer = null;
let mode = "static";
let raf = 0;
let last = 0;
// Simulated clock in ms. Advanced by wall delta * rate, so the rate slider
// rescales every animation without touching the shader maths.
let simTime = 0;
let rate = 1;

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

function size(canvasEl) {
  const { width, height } = fitResolution(canvasEl.getBoundingClientRect());
  canvasEl.width = width;
  canvasEl.height = height;
  return { width, height };
}

function swapIn(canvasEl) {
  if (active === canvasEl) return;
  active.replaceWith(canvasEl);
  active = canvasEl;
}

function sceneAt(time) {
  const dim = { width: active.width, height: active.height };
  return { ...dim, ...layout(dim.width, dim.height), palette: palette(HUE), time };
}

// The shader's rates are per-millisecond: star drift speed, the glimmer phase
// period and the 90ms dither reseed cycle all assume ms. Keep it in ms.
function loop(now) {
  simTime += (now - last) * rate;
  last = now;
  renderer.render(sceneAt(simTime));
  raf = requestAnimationFrame(loop);
}

function startLive() {
  last = performance.now();
  cancelAnimationFrame(raf);
  if (reduced.matches) {
    renderer.render(sceneAt(simTime));
    return;
  }
  raf = requestAnimationFrame(loop);
}

function stopLive() {
  cancelAnimationFrame(raf);
  raf = 0;
}

function showStatic() {
  stopLive();
  swapIn(ctx2dCanvas);
  size(ctx2dCanvas);
  renderStatic(ctx2dCanvas, HUE);
}

function showLive() {
  if (!renderer) renderer = createLiveRenderer(glCanvas);
  if (!renderer) {
    hint.textContent = "webgl2 unavailable — static";
    return;
  }
  swapIn(glCanvas);
  size(glCanvas);
  startLive();
}

function setMode(next) {
  mode = next;
  // State lives in the glyph and colour only — swapping the label text would
  // reflow the control bar on every click.
  toggle.dataset.active = String(next === "live");
  toggle.setAttribute("aria-pressed", String(next === "live"));
  toggle.setAttribute("aria-label", next === "live" ? "Pause poster motion" : "Play poster motion");
  if (next === "live") showLive();
  else showStatic();
}

toggle.addEventListener("click", () => setMode(mode === "live" ? "static" : "live"));

speed.addEventListener("input", () => {
  rate = Number(speed.value);
  speedValue.textContent = `${rate.toFixed(2)}x`;
});

function clock(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

let scrubbing = false;

function paintTime(time, duration) {
  if (!scrubbing) {
    seek.value = String(duration ? (time / duration) * 100 : 0);
  }
  timeLabel.textContent = `${clock(time)} / ${clock(duration)}`;
}

const audio = createAudio(document.getElementById("player-host"), (state, info = {}) => {
  if (state === "error") {
    playToggle.dataset.active = "false";
    playToggle.disabled = true;
    hint.textContent = "sound unavailable";
    return;
  }
  if (state === "ready") {
    seek.disabled = false;
    paintTime(0, info.duration || 0);
    return;
  }
  const playing = state === "playing";
  playToggle.dataset.active = String(playing);
  playToggle.setAttribute("aria-pressed", String(playing));
  playToggle.setAttribute("aria-label", playing ? "Pause mood track" : "Play mood track");
  paintTime(info.time || 0, info.duration || 0);
});

playToggle.addEventListener("click", () => {
  if (audio.isPlaying()) audio.pause();
  else audio.play();
});

seek.addEventListener("pointerdown", () => {
  scrubbing = true;
});

seek.addEventListener("input", () => {
  const duration = audio.duration();
  const time = (Number(seek.value) / 100) * duration;
  // Update the label locally so the readout tracks the drag before the seek
  // round trip lands.
  paintTime(time, duration);
});

// Commit the seek on release so scrubbing stays paused playback.
for (const type of ["pointerup", "pointercancel", "change"]) {
  seek.addEventListener(type, () => {
    if (!scrubbing) return;
    scrubbing = false;
    audio.seek((Number(seek.value) / 100) * audio.duration());
  });
}

// Keep the readout moving while playing.
setInterval(() => {
  if (!audio.isPlaying()) return;
  paintTime(audio.currentTime(), audio.duration());
}, 250);

window.addEventListener("resize", () => setMode(mode), { passive: true });

document.addEventListener("visibilitychange", () => {
  if (mode !== "live" || !renderer) return;
  if (document.hidden) stopLive();
  else startLive();
});

// [experiences] open in motion, slower than the piece's own default
rate = 0.25;
speed.value = "0.25";
speedValue.textContent = "0.25x";
setMode(reduced.matches ? "static" : "live");