/* eslint-disable no-mixed-operators */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-use-before-define */
let wasm

{
  const module = new WebAssembly.Module(((r, n) => { const a = Uint8Array; const e = Uint16Array; const f = Uint32Array; const o = a.of(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15); const i = a.of(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0); const t = a.of(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0); const v = function (r, n) { for (var a = new e(31), o = 0; o < 31; ++o)a[o] = n += 1 << r[o - 1]; const i = new f(a[30]); for (o = 1; o < 30; ++o) for (let t = a[o]; t < a[o + 1]; ++t)i[t] = t - a[o] << 5 | o; return [a, i] }; const u = v(i, 2); const l = u[0]; const s = u[1]; l[28] = 258, s[258] = 28; for (var w, b = v(t, 0)[0], c = new e(32768), y = 0; y < 32768; ++y)w = (61680 & (w = (52428 & (w = (43690 & y) >>> 1 | (21845 & y) << 1)) >>> 2 | (13107 & w) << 2)) >>> 4 | (3855 & w) << 4, c[y] = ((65280 & w) >>> 8 | (255 & w) << 8) >>> 1; const g = function (r, n, a) { for (var f = r.length, o = 0, i = new e(n); o < f; ++o)++i[r[o] - 1]; let t; const v = new e(n); for (o = 0; o < n; ++o)v[o] = v[o - 1] + i[o - 1] << 1; if (a) { t = new e(1 << n); const u = 15 - n; for (o = 0; o < f; ++o) if (r[o]) for (let l = o << 4 | r[o], s = n - r[o], w = v[r[o] - 1]++ << s, b = w | (1 << s) - 1; w <= b; ++w)t[c[w] >>> u] = l } else for (t = new e(f), o = 0; o < f; ++o)r[o] && (t[o] = c[v[r[o] - 1]++] >>> 15 - r[o]); return t }; const h = new a(288); for (y = 0; y < 144; ++y)h[y] = 8; for (y = 144; y < 256; ++y)h[y] = 9; for (y = 256; y < 280; ++y)h[y] = 7; for (y = 280; y < 288; ++y)h[y] = 8; const k = new a(32); for (y = 0; y < 32; ++y)k[y] = 5; const A = g(h, 9, 1); const U = g(k, 5, 1); const d = function (r) { for (var n = r[0], a = 1; a < r.length; ++a)r[a] > n && (n = r[a]); return n }; const p = function (r, n, a) { const e = n >> 3 | 0; return (r[e] | r[e + 1] << 8) >> (7 & n) & a }; const m = function (r, n) { const a = n >> 3 | 0; return (r[a] | r[a + 1] << 8 | r[a + 2] << 16) >> (7 & n) }; const z = new Uint8Array(r); return (function (r, n, v) { const u = r.length; if (!u || v && !v.l && u < 5) return n || new a(0); v || (v = {}), n || (n = new a(3 * u)); let s; let w = v.f || 0; let c = v.p || 0; let y = v.b || 0; let h = v.l; let k = v.d; let z = v.m; let j = v.n; const q = 8 * u; do { if (!h) { v.f = w = p(r, c, 1); const x = p(r, c + 1, 3); if (c += 3, !x) { const B = r[(M = ((s = c) >> 3 | 0) + (7 & s && 1) + 4) - 4] | r[M - 3] << 8; const C = M + B; if (C > u) break; n.set(r.subarray(M, C), y), v.b = y += B, v.p = c = 8 * C; continue } if (x === 1)h = A, k = U, z = 9, j = 5; else if (x === 2) { const D = p(r, c, 31) + 257; const E = p(r, c + 10, 15) + 4; const F = D + p(r, c + 5, 31) + 1; c += 14; for (var G = new a(F), H = new a(19), I = 0; I < E; ++I)H[o[I]] = p(r, c + 3 * I, 7); c += 3 * E; const J = d(H); const K = (1 << J) - 1; const L = g(H, J, 1); for (I = 0; I < F;) { var M; const N = L[p(r, c, K)]; if (c += 15 & N, (M = N >>> 4) < 16)G[I++] = M; else { var O = 0; let P = 0; for (M === 16 ? (P = 3 + p(r, c, 3), c += 2, O = G[I - 1]) : M === 17 ? (P = 3 + p(r, c, 7), c += 3) : M === 18 && (P = 11 + p(r, c, 127), c += 7); P--;)G[I++] = O } } const Q = G.subarray(0, D); var R = G.subarray(D); z = d(Q), j = d(R), h = g(Q, z, 1), k = g(R, j, 1) } if (c > q) break } for (var S = (1 << z) - 1, T = (1 << j) - 1, V = c; ;V = c) { const W = (O = h[m(r, c) & S]) >>> 4; if ((c += 15 & O) > q) break; if (W < 256)n[y++] = W; else { if (W === 256) { V = c, h = null; break } let X = W - 254; if (W > 264) { var Y = i[I = W - 257]; X = p(r, c, (1 << Y) - 1) + l[I], c += Y } const Z = k[m(r, c) & T]; const $ = Z >>> 4; c += 15 & Z; R = b[$]; if ($ > 3) { Y = t[$]; R += m(r, c) & (1 << Y) - 1, c += Y } if (c > q) break; for (var _ = y + X; y < _; y += 4)n[y] = n[y - R], n[y + 1] = n[y + 1 - R], n[y + 2] = n[y + 2 - R], n[y + 3] = n[y + 3 - R]; y = _ } }v.l = h, v.p = V, v.b = y, h && (w = 1, v.m = z, v.d = k, v.n = j) } while (!w); y === n.length || (function (r, n, o) { (n == null || n < 0) && (n = 0), (o == null || o > r.length) && (o = r.length); const i = new (r instanceof e ? e : r instanceof f ? f : a)(o - n); i.set(r.subarray(n, o)) }(n, 0, y)) }(n.subarray(2, -4), z)), z })(56069, Uint8Array.from(atob("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"), char => char.codePointAt(0))))
  const instance = new WebAssembly.Instance(module)

  wasm = instance.exports
}

const u16_max = 2 ** 16
const {memory, verify: v} = wasm

let len = memory.buffer.byteLength
let u8 = new Uint8Array(memory.buffer)
let k8 = new Uint8Array(memory.buffer, 16384, 32)
let s8 = new Uint8Array(memory.buffer, 32 + 16384, 64)
const encode_utf8 = globalThis.Deno?.core?.encode ?? globalThis.Buffer?.from.bind(globalThis.Buffer) ?? TextEncoder.prototype.encode.bind(new TextEncoder())

function resize (size) {
  memory.grow(Math.ceil((size - len) / u16_max))

  len = memory.buffer.byteLength
  u8 = new Uint8Array(memory.buffer)
  k8 = new Uint8Array(memory.buffer, 16384, 32)
  s8 = new Uint8Array(memory.buffer, 32 + 16384, 64)
}

/**
 *
 * @param {Uint8Array} key The key to verify
 * @param {Uint8Array} sig The signature
 * @param {Uint8Array} buf
 * @returns
 */
export function verify (key, sig, buf) {
  if (typeof buf === "string") buf = encode_utf8(buf)
  if (len < (16480 + buf.length)) resize(16480 + buf.length)

  k8.set(key)
  s8.set(sig)
  u8.set(buf, 16480)
  return !!v(buf.length, 2 ** 14)
}
