// Exact 2D potential flow around a Joukowski airfoil (conformal map z = ζ + 1/ζ).
// Pure math, no DOM: everything the airfoil playground draws comes from here.
// Complex numbers are [re, im] pairs.
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const mul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const div = (a, b) => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
const abs = (a) => Math.hypot(a[0], a[1]);
const expi = (t) => [Math.cos(t), Math.sin(t)];
function csqrt(a) {
  const r = abs(a), re = Math.sqrt((r + a[0]) / 2), im = Math.sqrt(Math.max(0, (r - a[0]) / 2));
  return [re, a[1] < 0 ? -im : im];
}

// thickness ε ≥ 0 and camber κ ≥ 0 shift the circle centre μ = (−ε, κ); it always passes through ζ = 1 (sharp trailing edge).
export function makeAirfoil({ thickness = 0.1, camber = 0.05, aoaDeg = 5, kutta = true }) {
  const mu = [-thickness, camber];
  const R = Math.hypot(1 + thickness, camber);
  const beta = Math.atan2(camber, 1 + thickness);
  const alpha = (aoaDeg * Math.PI) / 180;
  const gamma = kutta ? 4 * Math.PI * R * Math.sin(alpha + beta) : 0; // U = 1, clockwise circulation
  // Surface in the body frame, θ measured from the trailing edge.
  const surf = [];
  let xle = Infinity;
  for (let k = 0; k <= 240; k++) {
    const z = toZ(add(mu, mul([R, 0], expi(-beta + (2 * Math.PI * k) / 240))));
    surf.push(z);
    xle = Math.min(xle, z[0]);
  }
  const chord = 2 - xle;
  return { mu, R, beta, alpha, gamma, kutta, chord, xle, surf, cl: (2 * gamma) / chord };
}

const toZ = (zeta) => add(zeta, div([1, 0], zeta));

// Body-frame point → the ζ preimage outside the circle, or null if the point is inside the airfoil.
function toZeta(f, z) {
  const s = csqrt(sub(mul(z, z), [4, 0]));
  const a = mul([0.5, 0], add(z, s)), b = mul([0.5, 0], sub(z, s));
  const da = abs(sub(a, f.mu)), db = abs(sub(b, f.mu));
  const zeta = da >= db ? a : b;
  return Math.max(da, db) > f.R * 1.0005 ? zeta : null;
}

// conj(velocity) dw/dζ in the body frame, freestream U = 1 at angle α.
function dwdzeta(f, zeta) {
  const s = sub(zeta, f.mu);
  const term = mul(mul([f.R * f.R, 0], expi(f.alpha)), div([1, 0], mul(s, s)));
  const circ = div([0, f.gamma / (2 * Math.PI)], s);
  return add(sub(expi(-f.alpha), term), circ);
}

// Physical frame: airfoil pitched nose-up by α, freestream horizontal (+x). Returns [u, v] or null inside the body.
export function velocity(f, x, y) {
  const z = mul([x, y], expi(f.alpha)); // physical → body
  const zeta = toZeta(f, z);
  if (!zeta) return null;
  const dz = sub([1, 0], div([1, 0], mul(zeta, zeta)));
  if (abs(dz) < 1e-6) return [1, 0]; // trailing-edge cusp; finite only with the Kutta condition
  const w = div(dwdzeta(f, zeta), dz); // u − iv in the body frame
  const vb = [w[0], -w[1]];
  const vp = mul(vb, expi(-f.alpha)); // body → physical
  return [vp[0], vp[1]];
}

export const cp = (u, v) => 1 - (u * u + v * v);

// Airfoil outline in the physical frame.
export function outline(f) {
  return f.surf.map((z) => mul(z, expi(-f.alpha)));
}

// Surface pressure coefficient vs x/c, split into upper and lower surfaces.
export function surfaceCp(f) {
  const upper = [], lower = [];
  const N = 160;
  for (let k = 1; k < N; k++) {
    const th = -f.beta + (2 * Math.PI * k) / N;
    const zeta = add(f.mu, mul([f.R, 0], expi(th)));
    const z = toZ(zeta);
    const dz = sub([1, 0], div([1, 0], mul(zeta, zeta)));
    const w = div(dwdzeta(f, zeta), dz);
    const pt = [(z[0] - f.xle) / f.chord, cp(w[0], w[1])];
    (k < N / 2 ? upper : lower).push(pt);
  }
  return { upper, lower };
}
