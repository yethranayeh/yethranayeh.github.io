// Animated (GPU) version of the omp.sh poster background.
//
// The live site ships this as a WASM/WGSL renderer (`poster_bg-*.wasm`). The
// shader source lives inside that binary, so this is a straight port to
// WebGL2 — same uniforms, same three passes, same maths:
//
//   1. field    fullscreen triangle: dithered rim bloom (sky/violet/plum),
//               rayed by angle, over a vignetted black base with grain
//   2. particles instanced 2x2 quads drifting along the rim arc
//   3. grade    sparse ordered dither towards pure black/white
//
// The rim dither reseeds every frame on a 90-frame cycle, so the bloom
// crawls. Time is the only thing that moves.

const VERT_FIELD = `#version 300 es
void main() {
  vec2 p = vec2(
    gl_VertexID == 1 ? 3.0 : -1.0,
    gl_VertexID == 2 ? 3.0 : -1.0
  );
  gl_Position = vec4(p, 0.0, 1.0);
}`;

const FRAG_FIELD = `#version 300 es
precision highp float;
precision highp int;

uniform vec2 uViewport;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uScale;
uniform float uTime;
uniform float uThetaMin;
uniform float uThetaMax;
uniform float uRayFreq;
uniform vec3 uSky;
uniform vec3 uViolet;
uniform vec3 uPlum;
uniform vec3 uBlack;

out vec4 fragColor;

const float TAU = 6.283185307179586;

uint hash_u32(uint value) {
  uint mixed = value;
  mixed = (mixed ^ (mixed >> 16u)) * 0x7feb352du;
  mixed = (mixed ^ (mixed >> 15u)) * 0x846ca68bu;
  return mixed ^ (mixed >> 16u);
}

float random01(uint value) {
  return float(hash_u32(value) >> 8u) / 16777216.0;
}

float vignette(vec2 point) {
  vec2 c = uViewport * 0.5;
  float radius = 1600.0 * uScale;
  float normalized = distance(point, c) / radius;
  return max(0.2, 1.0 - normalized * normalized * normalized);
}

float pixel_grain(uvec2 pixel) {
  uint width = uint(uViewport.x);
  uint index = pixel.y * width + pixel.x;
  return (random01(index ^ 0x9e3779b9u) - 0.5) * (24.0 / 255.0);
}

float glimmer(float theta) {
  float phase = uTime * (TAU * 2.2 / 720.0);
  return 1.0 + 0.16 * sin(theta * uRayFreq - phase);
}

void main() {
  // gl_FragCoord is bottom-left origin; the poster is authored top-left.
  vec2 position = vec2(gl_FragCoord.x, uViewport.y - gl_FragCoord.y);
  vec2 pixel = floor(position);
  float grain = pixel_grain(uvec2(pixel));

  vec3 base = max(uBlack * vignette(position) + vec3(grain), vec3(0.0));

  vec2 cell = floor(position * 0.5) * 2.0;
  vec2 delta = cell - uCenter;
  float rim = length(delta) - uRadius;

  if (rim < 0.0) {
    fragColor = vec4(base, 1.0);
    return;
  }

  float shade = vignette(cell + vec2(1.0));
  float theta = atan(delta.y, delta.x);
  vec3 ink = vec3(0.0);
  bool occupied = false;

  if (rim < 5.0 * uScale) {
    ink = uSky * shade * glimmer(theta);
    occupied = true;
  } else {
    float sky = exp(-rim / (14.0 * uScale));
    float violet = exp(-rim / (120.0 * uScale)) * min(1.0, rim / (10.0 * uScale)) * 0.85;
    float plum = exp(-rim / (600.0 * uScale)) * min(1.0, rim / (30.0 * uScale)) * 0.7;
    float total = min(1.0, sky + violet + plum);

    if (total > 0.003) {
      // Reseed the band dither on a 90-frame cycle so the rim crawls.
      uint columns = uint(ceil(uViewport.x * 0.5));
      uint cellIndex = uint(cell.y * 0.5) * columns + uint(cell.x * 0.5);
      uint bucket = hash_u32(cellIndex ^ 0x85ebca6bu) % 90u;
      uint frame = uint(max(0.0, floor(uTime)));
      uint generation = (frame + 89u - bucket) / 90u;
      float roll = random01(cellIndex ^ (generation * 0xc2b2ae35u) ^ 0x20260712u);

      if (roll < sky) {
        ink = uSky * shade * glimmer(theta);
        occupied = true;
      } else if (roll < sky + violet) {
        ink = uViolet * shade;
        occupied = true;
      } else if (roll < total) {
        ink = uPlum * shade;
        occupied = true;
      }
    }
  }

  fragColor = vec4(occupied ? max(ink + vec3(grain), vec3(0.0)) : base, 1.0);
}`;

const VERT_PARTICLE = `#version 300 es
precision highp float;
precision highp int;

uniform vec2 uViewport;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uScale;
uniform float uTime;
uniform float uThetaMin;
uniform float uThetaMax;
uniform float uRingWidth;
uniform float uStarCount;

out float vIntensity;
out float vOpacity;

const float TAU = 6.283185307179586;

uint hash_u32(uint value) {
  uint mixed = value;
  mixed = (mixed ^ (mixed >> 16u)) * 0x7feb352du;
  mixed = (mixed ^ (mixed >> 15u)) * 0x846ca68bu;
  return mixed ^ (mixed >> 16u);
}

float random01(uint value) {
  return float(hash_u32(value) >> 8u) / 16777216.0;
}

float vignette(vec2 point) {
  vec2 c = uViewport * 0.5;
  float radius = 1600.0 * uScale;
  float normalized = distance(point, c) / radius;
  return max(0.2, 1.0 - normalized * normalized * normalized);
}

void main() {
  if (float(gl_InstanceID) >= uStarCount) {
    gl_Position = vec4(2.0, 2.0, 0.0, 1.0);
    vIntensity = 0.0;
    vOpacity = 0.0;
    return;
  }

  uint seed = hash_u32(uint(gl_InstanceID) ^ 0xa511e9b3u);

  // Station angle along the visible arc.
  float thetaBase = mix(uThetaMin, uThetaMax, random01(seed));
  // Depth into the rim band, cube-distributed so stars bunch near the edge.
  float sampledDepth = uRingWidth * (1.0 - pow(random01(seed ^ 0x63d83595u), 1.0 / 3.0));
  float maxDepth = max(sampledDepth, 14.0 * uScale);

  // Each star orbits inward, then wraps back out.
  float speed = (0.14 + random01(seed ^ 0x9e3779b9u) * 0.22) * uScale;
  float offset = random01(seed ^ 0xc2b2ae35u) * maxDepth;
  float travel = uTime * speed + offset;
  float depth = travel - floor(travel / maxDepth) * maxDepth;
  float radius = uRadius - depth;

  // Lazy tangential wobble.
  float waveFreq = 0.004 + random01(seed ^ 0x27d4eb2fu) * 0.011;
  float wavePhase = random01(seed ^ 0x165667b1u) * TAU;
  float wander = -(0.06 * uScale / waveFreq) * cos(uTime * waveFreq + wavePhase) / max(radius, 1.0);
  float theta = thetaBase + wander;

  vec2 center = uCenter + radius * vec2(cos(theta), sin(theta));

  vec2 corners[6] = vec2[6](
    vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
    vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0)
  );
  vec2 point = center + corners[gl_VertexID];
  vec2 clip = vec2(point.x / uViewport.x * 2.0 - 1.0, 1.0 - point.y / uViewport.y * 2.0);

  vIntensity = vignette(center);
  vOpacity = max(0.0, min(min(1.0, depth / 3.0), (maxDepth - depth) / (maxDepth * 0.25)));

  gl_Position = vec4(clip, 0.0, 1.0);
}`;

const FRAG_PARTICLE = `#version 300 es
precision highp float;

uniform vec3 uSilver;

in float vIntensity;
in float vOpacity;
out vec4 fragColor;

void main() {
  fragColor = vec4(uSilver * vIntensity * vOpacity, vOpacity);
}`;

const FRAG_GRADE = `#version 300 es
precision highp float;
precision highp int;

uniform vec2 uViewport;

out vec4 fragColor;

uint hash_u32(uint value) {
  uint mixed = value;
  mixed = (mixed ^ (mixed >> 16u)) * 0x7feb352du;
  mixed = (mixed ^ (mixed >> 15u)) * 0x846ca68bu;
  return mixed ^ (mixed >> 16u);
}

float random01(uint value) {
  return float(hash_u32(value) >> 8u) / 16777216.0;
}

void main() {
  uvec2 tile = uvec2(gl_FragCoord.xy) % 512u;
  float value = random01((tile.y * 512u + tile.x) ^ 0xc2b2ae35u);
  if (value < 0.045) {
    float tone = value < 0.023 ? 0.0 : 1.0;
    fragColor = vec4(vec3(tone), 10.0 / 255.0);
    return;
  }
  fragColor = vec4(0.0);
}`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(log);
  }
  return shader;
}

function program(gl, vertSrc, fragSrc) {
  const vert = compile(gl, gl.VERTEX_SHADER, vertSrc);
  const frag = compile(gl, gl.FRAGMENT_SHADER, fragSrc);
  const p = gl.createProgram();
  gl.attachShader(p, vert);
  gl.attachShader(p, frag);
  gl.linkProgram(p);
  gl.deleteShader(vert);
  gl.deleteShader(frag);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(p);
    gl.deleteProgram(p);
    throw new Error(log);
  }
  return p;
}

// Collect every active uniform location for a program once.
function uniforms(gl, p, names) {
  const out = {};
  for (const name of names) out[name] = gl.getUniformLocation(p, name);
  return out;
}

const SHARED = ["uViewport", "uCenter", "uRadius", "uScale", "uTime", "uSky", "uViolet", "uPlum", "uSilver", "uBlack"];
const FIELD = [...SHARED, "uThetaMin", "uThetaMax", "uRayFreq"];
const PARTICLE = [...SHARED, "uThetaMin", "uThetaMax", "uRingWidth", "uStarCount"];

export function createLiveRenderer(canvas) {
  const gl = canvas.getContext("webgl2", {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: "high-performance",
  });
  if (!gl) return null;

  const field = program(gl, VERT_FIELD, FRAG_FIELD);
  const particle = program(gl, VERT_PARTICLE, FRAG_PARTICLE);
  const grade = program(gl, VERT_FIELD, FRAG_GRADE);

  const uField = uniforms(gl, field, FIELD);
  const uParticle = uniforms(gl, particle, PARTICLE);
  const uGrade = uniforms(gl, grade, ["uViewport"]);

  const vao = gl.createVertexArray();

  function setScene(u, s) {
    gl.uniform2f(u.uViewport, s.width, s.height);
    gl.uniform2f(u.uCenter, s.centerX, s.centerY);
    gl.uniform1f(u.uRadius, s.radius);
    gl.uniform1f(u.uScale, s.scale);
    gl.uniform1f(u.uTime, s.time);
    const n = (rgb) => Float32Array.from(rgb, (v) => v / 255);
    gl.uniform3fv(u.uSky, n(s.palette.sky));
    gl.uniform3fv(u.uViolet, n(s.palette.violet));
    gl.uniform3fv(u.uPlum, n(s.palette.plum));
    gl.uniform3fv(u.uSilver, n(s.palette.silver));
    gl.uniform3fv(u.uBlack, n(s.palette.black));
  }

  return {
    render(scene) {
      gl.viewport(0, 0, scene.width, scene.height);
      gl.disable(gl.BLEND);

      gl.bindVertexArray(vao);
      gl.useProgram(field);
      setScene(uField, scene);
      gl.uniform1f(uField.uThetaMin, scene.thetaMin);
      gl.uniform1f(uField.uThetaMax, scene.thetaMax);
      gl.uniform1f(uField.uRayFreq, scene.rayFreq);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE);
      gl.useProgram(particle);
      setScene(uParticle, scene);
      gl.uniform1f(uParticle.uThetaMin, scene.thetaMin);
      gl.uniform1f(uParticle.uThetaMax, scene.thetaMax);
      gl.uniform1f(uParticle.uRingWidth, scene.ringWidth);
      gl.uniform1f(uParticle.uStarCount, scene.starCount);
      gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, scene.starCount);

      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.useProgram(grade);
      gl.uniform2f(uGrade.uViewport, scene.width, scene.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      gl.disable(gl.BLEND);
    },
    destroy() {
      gl.deleteProgram(field);
      gl.deleteProgram(particle);
      gl.deleteProgram(grade);
      gl.deleteVertexArray(vao);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    },
  };
}