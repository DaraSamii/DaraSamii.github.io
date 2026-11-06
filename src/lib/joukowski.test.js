import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeAirfoil, velocity, surfaceCp } from './joukowski.js';

const close = (a, b, tol, msg) => assert.ok(Math.abs(a - b) < tol, `${msg}: ${a} vs ${b}`);

test('flat plate limit recovers thin-airfoil theory, Cl = 2π sin α', () => {
  const f = makeAirfoil({ thickness: 0, camber: 0, aoaDeg: 5 });
  close(f.chord, 4, 1e-6, 'chord');
  close(f.cl, 2 * Math.PI * Math.sin((5 * Math.PI) / 180), 1e-9, 'Cl');
});

test('symmetric airfoil at zero incidence has no lift; camber adds lift', () => {
  close(makeAirfoil({ thickness: 0.12, camber: 0, aoaDeg: 0 }).cl, 0, 1e-12, 'Cl symmetric');
  assert.ok(makeAirfoil({ thickness: 0.12, camber: 0.08, aoaDeg: 0 }).cl > 0.4);
});

test('far field is the uniform freestream; points inside the body return null', () => {
  const f = makeAirfoil({ thickness: 0.1, camber: 0.05, aoaDeg: 8 });
  const [u, v] = velocity(f, -60, 40);
  close(u, 1, 0.01, 'u far'); close(v, 0, 0.01, 'v far');
  assert.equal(velocity(f, 0, 0.05), null);
});

test('Kutta condition: smooth flow at the trailing edge; without it the speed there blows up', () => {
  const near = (f) => { const a = f.alpha; const x = 2.001 * Math.cos(a), y = -2.001 * Math.sin(a); const [u, v] = velocity(f, x, y); return Math.hypot(u, v); };
  const withK = near(makeAirfoil({ thickness: 0.1, camber: 0, aoaDeg: 10, kutta: true }));
  const noK = near(makeAirfoil({ thickness: 0.1, camber: 0, aoaDeg: 10, kutta: false }));
  assert.ok(withK < 2, `with Kutta ${withK}`);
  assert.ok(noK > 4 * withK, `without Kutta ${noK}`);
});

test('surface Cp: stagnation Cp = 1 is reached and suction is stronger on the upper surface', () => {
  const s = surfaceCp(makeAirfoil({ thickness: 0.1, camber: 0, aoaDeg: 6 }));
  const all = [...s.upper, ...s.lower].map((p) => p[1]);
  close(Math.max(...all), 1, 0.05, 'max Cp');
  assert.ok(Math.min(...s.upper.map((p) => p[1])) < Math.min(...s.lower.map((p) => p[1])));
});
