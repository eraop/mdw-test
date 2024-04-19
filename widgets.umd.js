!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t = "undefined" != typeof globalThis ? globalThis : t || self).mdw =
          {})
      );
})(this, function (t) {
  "use strict";
  /*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   */ function e(t) {
    return (t + 0.5) | 0;
  }
  const i = (t, e, i) => Math.max(Math.min(t, i), e);
  function n(t) {
    return i(e(2.55 * t), 0, 255);
  }
  function s(t) {
    return i(e(255 * t), 0, 255);
  }
  function o(t) {
    return i(e(t / 2.55) / 100, 0, 1);
  }
  function r(t) {
    return i(e(100 * t), 0, 100);
  }
  const a = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    l = [..."0123456789ABCDEF"],
    h = (t) => l[15 & t],
    c = (t) => l[(240 & t) >> 4] + l[15 & t],
    d = (t) => (240 & t) >> 4 == (15 & t);
  function u(t) {
    var e = ((t) => d(t.r) && d(t.g) && d(t.b) && d(t.a))(t) ? h : c;
    return t
      ? "#" +
          e(t.r) +
          e(t.g) +
          e(t.b) +
          ((t, e) => (t < 255 ? e(t) : ""))(t.a, e)
      : void 0;
  }
  const f =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function p(t, e, i) {
    const n = e * Math.min(i, 1 - i),
      s = (e, s = (e + t / 30) % 12) =>
        i - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
    return [s(0), s(8), s(4)];
  }
  function g(t, e, i) {
    const n = (n, s = (n + t / 60) % 6) =>
      i - i * e * Math.max(Math.min(s, 4 - s, 1), 0);
    return [n(5), n(3), n(1)];
  }
  function m(t, e, i) {
    const n = p(t, 1, 0.5);
    let s;
    for (
      e + i > 1 && ((s = 1 / (e + i)), (e *= s), (i *= s)), s = 0;
      s < 3;
      s++
    )
      (n[s] *= 1 - e - i), (n[s] += e);
    return n;
  }
  function v(t) {
    const e = t.r / 255,
      i = t.g / 255,
      n = t.b / 255,
      s = Math.max(e, i, n),
      o = Math.min(e, i, n),
      r = (s + o) / 2;
    let a, l, h;
    return (
      s !== o &&
        ((h = s - o),
        (l = r > 0.5 ? h / (2 - s - o) : h / (s + o)),
        (a = (function (t, e, i, n, s) {
          return t === s
            ? (e - i) / n + (e < i ? 6 : 0)
            : e === s
            ? (i - t) / n + 2
            : (t - e) / n + 4;
        })(e, i, n, h, s)),
        (a = 60 * a + 0.5)),
      [0 | a, l || 0, r]
    );
  }
  function b(t, e, i, n) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(s);
  }
  function y(t, e, i) {
    return b(p, t, e, i);
  }
  function x(t) {
    return ((t % 360) + 360) % 360;
  }
  function _(t) {
    const e = f.exec(t);
    let i,
      o = 255;
    if (!e) return;
    e[5] !== i && (o = e[6] ? n(+e[5]) : s(+e[5]));
    const r = x(+e[2]),
      a = +e[3] / 100,
      l = +e[4] / 100;
    return (
      (i =
        "hwb" === e[1]
          ? (function (t, e, i) {
              return b(m, t, e, i);
            })(r, a, l)
          : "hsv" === e[1]
          ? (function (t, e, i) {
              return b(g, t, e, i);
            })(r, a, l)
          : y(r, a, l)),
      { r: i[0], g: i[1], b: i[2], a: o }
    );
  }
  const w = {
      x: "dark",
      Z: "light",
      Y: "re",
      X: "blu",
      W: "gr",
      V: "medium",
      U: "slate",
      A: "ee",
      T: "ol",
      S: "or",
      B: "ra",
      C: "lateg",
      D: "ights",
      R: "in",
      Q: "turquois",
      E: "hi",
      P: "ro",
      O: "al",
      N: "le",
      M: "de",
      L: "yello",
      F: "en",
      K: "ch",
      G: "arks",
      H: "ea",
      I: "ightg",
      J: "wh",
    },
    k = {
      OiceXe: "f0f8ff",
      antiquewEte: "faebd7",
      aqua: "ffff",
      aquamarRe: "7fffd4",
      azuY: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "0",
      blanKedOmond: "ffebcd",
      Xe: "ff",
      XeviTet: "8a2be2",
      bPwn: "a52a2a",
      burlywood: "deb887",
      caMtXe: "5f9ea0",
      KartYuse: "7fff00",
      KocTate: "d2691e",
      cSO: "ff7f50",
      cSnflowerXe: "6495ed",
      cSnsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "ffff",
      xXe: "8b",
      xcyan: "8b8b",
      xgTMnPd: "b8860b",
      xWay: "a9a9a9",
      xgYF: "6400",
      xgYy: "a9a9a9",
      xkhaki: "bdb76b",
      xmagFta: "8b008b",
      xTivegYF: "556b2f",
      xSange: "ff8c00",
      xScEd: "9932cc",
      xYd: "8b0000",
      xsOmon: "e9967a",
      xsHgYF: "8fbc8f",
      xUXe: "483d8b",
      xUWay: "2f4f4f",
      xUgYy: "2f4f4f",
      xQe: "ced1",
      xviTet: "9400d3",
      dAppRk: "ff1493",
      dApskyXe: "bfff",
      dimWay: "696969",
      dimgYy: "696969",
      dodgerXe: "1e90ff",
      fiYbrick: "b22222",
      flSOwEte: "fffaf0",
      foYstWAn: "228b22",
      fuKsia: "ff00ff",
      gaRsbSo: "dcdcdc",
      ghostwEte: "f8f8ff",
      gTd: "ffd700",
      gTMnPd: "daa520",
      Way: "808080",
      gYF: "8000",
      gYFLw: "adff2f",
      gYy: "808080",
      honeyMw: "f0fff0",
      hotpRk: "ff69b4",
      RdianYd: "cd5c5c",
      Rdigo: "4b0082",
      ivSy: "fffff0",
      khaki: "f0e68c",
      lavFMr: "e6e6fa",
      lavFMrXsh: "fff0f5",
      lawngYF: "7cfc00",
      NmoncEffon: "fffacd",
      ZXe: "add8e6",
      ZcSO: "f08080",
      Zcyan: "e0ffff",
      ZgTMnPdLw: "fafad2",
      ZWay: "d3d3d3",
      ZgYF: "90ee90",
      ZgYy: "d3d3d3",
      ZpRk: "ffb6c1",
      ZsOmon: "ffa07a",
      ZsHgYF: "20b2aa",
      ZskyXe: "87cefa",
      ZUWay: "778899",
      ZUgYy: "778899",
      ZstAlXe: "b0c4de",
      ZLw: "ffffe0",
      lime: "ff00",
      limegYF: "32cd32",
      lRF: "faf0e6",
      magFta: "ff00ff",
      maPon: "800000",
      VaquamarRe: "66cdaa",
      VXe: "cd",
      VScEd: "ba55d3",
      VpurpN: "9370db",
      VsHgYF: "3cb371",
      VUXe: "7b68ee",
      VsprRggYF: "fa9a",
      VQe: "48d1cc",
      VviTetYd: "c71585",
      midnightXe: "191970",
      mRtcYam: "f5fffa",
      mistyPse: "ffe4e1",
      moccasR: "ffe4b5",
      navajowEte: "ffdead",
      navy: "80",
      Tdlace: "fdf5e6",
      Tive: "808000",
      TivedBb: "6b8e23",
      Sange: "ffa500",
      SangeYd: "ff4500",
      ScEd: "da70d6",
      pOegTMnPd: "eee8aa",
      pOegYF: "98fb98",
      pOeQe: "afeeee",
      pOeviTetYd: "db7093",
      papayawEp: "ffefd5",
      pHKpuff: "ffdab9",
      peru: "cd853f",
      pRk: "ffc0cb",
      plum: "dda0dd",
      powMrXe: "b0e0e6",
      purpN: "800080",
      YbeccapurpN: "663399",
      Yd: "ff0000",
      Psybrown: "bc8f8f",
      PyOXe: "4169e1",
      saddNbPwn: "8b4513",
      sOmon: "fa8072",
      sandybPwn: "f4a460",
      sHgYF: "2e8b57",
      sHshell: "fff5ee",
      siFna: "a0522d",
      silver: "c0c0c0",
      skyXe: "87ceeb",
      UXe: "6a5acd",
      UWay: "708090",
      UgYy: "708090",
      snow: "fffafa",
      sprRggYF: "ff7f",
      stAlXe: "4682b4",
      tan: "d2b48c",
      teO: "8080",
      tEstN: "d8bfd8",
      tomato: "ff6347",
      Qe: "40e0d0",
      viTet: "ee82ee",
      JHt: "f5deb3",
      wEte: "ffffff",
      wEtesmoke: "f5f5f5",
      Lw: "ffff00",
      LwgYF: "9acd32",
    };
  let C;
  function S(t) {
    C ||
      ((C = (function () {
        const t = {},
          e = Object.keys(k),
          i = Object.keys(w);
        let n, s, o, r, a;
        for (n = 0; n < e.length; n++) {
          for (r = a = e[n], s = 0; s < i.length; s++)
            (o = i[s]), (a = a.replace(o, w[o]));
          (o = parseInt(k[r], 16)),
            (t[a] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
        }
        return t;
      })()),
      (C.transparent = [0, 0, 0, 0]));
    const e = C[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
  }
  const M =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  const A = (t) =>
      t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
    D = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
  function T(t, e, i) {
    if (t) {
      let n = v(t);
      (n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1))),
        (n = y(n)),
        (t.r = n[0]),
        (t.g = n[1]),
        (t.b = n[2]);
    }
  }
  function O(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function P(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(t)
        ? t.length >= 3 &&
          ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
          t.length > 3 && (e.a = s(t[3])))
        : ((e = O(t, { r: 0, g: 0, b: 0, a: 1 })).a = s(e.a)),
      e
    );
  }
  function E(t) {
    return "r" === t.charAt(0)
      ? (function (t) {
          const e = M.exec(t);
          let s,
            o,
            r,
            a = 255;
          if (e) {
            if (e[7] !== s) {
              const t = +e[7];
              a = e[8] ? n(t) : i(255 * t, 0, 255);
            }
            return (
              (s = +e[1]),
              (o = +e[3]),
              (r = +e[5]),
              (s = 255 & (e[2] ? n(s) : i(s, 0, 255))),
              (o = 255 & (e[4] ? n(o) : i(o, 0, 255))),
              (r = 255 & (e[6] ? n(r) : i(r, 0, 255))),
              { r: s, g: o, b: r, a: a }
            );
          }
        })(t)
      : _(t);
  }
  class L {
    constructor(t) {
      if (t instanceof L) return t;
      const e = typeof t;
      let i;
      var n, s, o;
      "object" === e
        ? (i = P(t))
        : "string" === e &&
          ((o = (n = t).length),
          "#" === n[0] &&
            (4 === o || 5 === o
              ? (s = {
                  r: 255 & (17 * a[n[1]]),
                  g: 255 & (17 * a[n[2]]),
                  b: 255 & (17 * a[n[3]]),
                  a: 5 === o ? 17 * a[n[4]] : 255,
                })
              : (7 !== o && 9 !== o) ||
                (s = {
                  r: (a[n[1]] << 4) | a[n[2]],
                  g: (a[n[3]] << 4) | a[n[4]],
                  b: (a[n[5]] << 4) | a[n[6]],
                  a: 9 === o ? (a[n[7]] << 4) | a[n[8]] : 255,
                })),
          (i = s || S(t) || E(t))),
        (this._rgb = i),
        (this._valid = !!i);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = O(this._rgb);
      return t && (t.a = o(t.a)), t;
    }
    set rgb(t) {
      this._rgb = P(t);
    }
    rgbString() {
      return this._valid
        ? (function (t) {
            return (
              t &&
              (t.a < 255
                ? `rgba(${t.r}, ${t.g}, ${t.b}, ${o(t.a)})`
                : `rgb(${t.r}, ${t.g}, ${t.b})`)
            );
          })(this._rgb)
        : void 0;
    }
    hexString() {
      return this._valid ? u(this._rgb) : void 0;
    }
    hslString() {
      return this._valid
        ? (function (t) {
            if (!t) return;
            const e = v(t),
              i = e[0],
              n = r(e[1]),
              s = r(e[2]);
            return t.a < 255
              ? `hsla(${i}, ${n}%, ${s}%, ${o(t.a)})`
              : `hsl(${i}, ${n}%, ${s}%)`;
          })(this._rgb)
        : void 0;
    }
    mix(t, e) {
      if (t) {
        const i = this.rgb,
          n = t.rgb;
        let s;
        const o = e === s ? 0.5 : e,
          r = 2 * o - 1,
          a = i.a - n.a,
          l = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2;
        (s = 1 - l),
          (i.r = 255 & (l * i.r + s * n.r + 0.5)),
          (i.g = 255 & (l * i.g + s * n.g + 0.5)),
          (i.b = 255 & (l * i.b + s * n.b + 0.5)),
          (i.a = o * i.a + (1 - o) * n.a),
          (this.rgb = i);
      }
      return this;
    }
    interpolate(t, e) {
      return (
        t &&
          (this._rgb = (function (t, e, i) {
            const n = D(o(t.r)),
              r = D(o(t.g)),
              a = D(o(t.b));
            return {
              r: s(A(n + i * (D(o(e.r)) - n))),
              g: s(A(r + i * (D(o(e.g)) - r))),
              b: s(A(a + i * (D(o(e.b)) - a))),
              a: t.a + i * (e.a - t.a),
            };
          })(this._rgb, t._rgb, e)),
        this
      );
    }
    clone() {
      return new L(this.rgb);
    }
    alpha(t) {
      return (this._rgb.a = s(t)), this;
    }
    clearer(t) {
      return (this._rgb.a *= 1 - t), this;
    }
    greyscale() {
      const t = this._rgb,
        i = e(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
      return (t.r = t.g = t.b = i), this;
    }
    opaquer(t) {
      return (this._rgb.a *= 1 + t), this;
    }
    negate() {
      const t = this._rgb;
      return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
      return T(this._rgb, 2, t), this;
    }
    darken(t) {
      return T(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return T(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return T(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return (
        (function (t, e) {
          var i = v(t);
          (i[0] = x(i[0] + e)),
            (i = y(i)),
            (t.r = i[0]),
            (t.g = i[1]),
            (t.b = i[2]);
        })(this._rgb, t),
        this
      );
    }
  }
  /*!
   * Chart.js v4.4.1
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   */ function R() {}
  const I = (() => {
    let t = 0;
    return () => t++;
  })();
  function F(t) {
    return null == t;
  }
  function N(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
  }
  function z(t) {
    return (
      null !== t && "[object Object]" === Object.prototype.toString.call(t)
    );
  }
  function $(t) {
    return ("number" == typeof t || t instanceof Number) && isFinite(+t);
  }
  function j(t, e) {
    return $(t) ? t : e;
  }
  function Y(t, e) {
    return void 0 === t ? e : t;
  }
  const W = (t, e) =>
    "string" == typeof t && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t;
  function B(t, e, i) {
    if (t && "function" == typeof t.call) return t.apply(i, e);
  }
  function V(t, e, i, n) {
    let s, o, r;
    if (N(t))
      if (((o = t.length), n)) for (s = o - 1; s >= 0; s--) e.call(i, t[s], s);
      else for (s = 0; s < o; s++) e.call(i, t[s], s);
    else if (z(t))
      for (r = Object.keys(t), o = r.length, s = 0; s < o; s++)
        e.call(i, t[r[s]], r[s]);
  }
  function H(t, e) {
    let i, n, s, o;
    if (!t || !e || t.length !== e.length) return !1;
    for (i = 0, n = t.length; i < n; ++i)
      if (
        ((s = t[i]),
        (o = e[i]),
        s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      )
        return !1;
    return !0;
  }
  function U(t) {
    if (N(t)) return t.map(U);
    if (z(t)) {
      const e = Object.create(null),
        i = Object.keys(t),
        n = i.length;
      let s = 0;
      for (; s < n; ++s) e[i[s]] = U(t[i[s]]);
      return e;
    }
    return t;
  }
  function G(t) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
  }
  function K(t, e, i, n) {
    if (!G(t)) return;
    const s = e[t],
      o = i[t];
    z(s) && z(o) ? q(s, o, n) : (e[t] = U(o));
  }
  function q(t, e, i) {
    const n = N(e) ? e : [e],
      s = n.length;
    if (!z(t)) return t;
    const o = (i = i || {}).merger || K;
    let r;
    for (let e = 0; e < s; ++e) {
      if (((r = n[e]), !z(r))) continue;
      const s = Object.keys(r);
      for (let e = 0, n = s.length; e < n; ++e) o(s[e], t, r, i);
    }
    return t;
  }
  function X(t, e) {
    return q(t, e, { merger: Z });
  }
  function Z(t, e, i) {
    if (!G(t)) return;
    const n = e[t],
      s = i[t];
    z(n) && z(s)
      ? X(n, s)
      : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = U(s));
  }
  const J = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
  function Q(t, e) {
    const i =
      J[e] ||
      (J[e] = (function (t) {
        const e = (function (t) {
          const e = t.split("."),
            i = [];
          let n = "";
          for (const t of e)
            (n += t),
              n.endsWith("\\")
                ? (n = n.slice(0, -1) + ".")
                : (i.push(n), (n = ""));
          return i;
        })(t);
        return (t) => {
          for (const i of e) {
            if ("" === i) break;
            t = t && t[i];
          }
          return t;
        };
      })(e));
    return i(t);
  }
  function tt(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const et = (t) => void 0 !== t,
    it = (t) => "function" == typeof t,
    nt = (t, e) => {
      if (t.size !== e.size) return !1;
      for (const i of t) if (!e.has(i)) return !1;
      return !0;
    };
  const st = Math.PI,
    ot = 2 * st,
    rt = ot + st,
    at = Number.POSITIVE_INFINITY,
    lt = st / 180,
    ht = st / 2,
    ct = st / 4,
    dt = (2 * st) / 3,
    ut = Math.log10,
    ft = Math.sign;
  function pt(t, e, i) {
    return Math.abs(t - e) < i;
  }
  function gt(t) {
    const e = Math.round(t);
    t = pt(t, e, t / 1e3) ? e : t;
    const i = Math.pow(10, Math.floor(ut(t))),
      n = t / i;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
  }
  function mt(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function vt(t, e, i) {
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      (o = t[n][i]),
        isNaN(o) ||
          ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
  }
  function bt(t) {
    return t * (st / 180);
  }
  function yt(t) {
    return t * (180 / st);
  }
  function xt(t) {
    if (!$(t)) return;
    let e = 1,
      i = 0;
    for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
    return i;
  }
  function _t(t, e) {
    const i = e.x - t.x,
      n = e.y - t.y,
      s = Math.sqrt(i * i + n * n);
    let o = Math.atan2(n, i);
    return o < -0.5 * st && (o += ot), { angle: o, distance: s };
  }
  function wt(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function kt(t, e) {
    return ((t - e + rt) % ot) - st;
  }
  function Ct(t) {
    return ((t % ot) + ot) % ot;
  }
  function St(t, e, i, n) {
    const s = Ct(t),
      o = Ct(e),
      r = Ct(i),
      a = Ct(o - s),
      l = Ct(r - s),
      h = Ct(s - o),
      c = Ct(s - r);
    return s === o || s === r || (n && o === r) || (a > l && h < c);
  }
  function Mt(t, e, i) {
    return Math.max(e, Math.min(i, t));
  }
  function At(t, e, i, n = 1e-6) {
    return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n;
  }
  function Dt(t, e, i) {
    i = i || ((i) => t[i] < e);
    let n,
      s = t.length - 1,
      o = 0;
    for (; s - o > 1; ) (n = (o + s) >> 1), i(n) ? (o = n) : (s = n);
    return { lo: o, hi: s };
  }
  const Tt = (t, e, i, n) =>
      Dt(
        t,
        i,
        n
          ? (n) => {
              const s = t[n][e];
              return s < i || (s === i && t[n + 1][e] === i);
            }
          : (n) => t[n][e] < i
      ),
    Ot = (t, e, i) => Dt(t, i, (n) => t[n][e] >= i);
  const Pt = ["push", "pop", "shift", "splice", "unshift"];
  function Et(t, e) {
    const i = t._chartjs;
    if (!i) return;
    const n = i.listeners,
      s = n.indexOf(e);
    -1 !== s && n.splice(s, 1),
      n.length > 0 ||
        (Pt.forEach((e) => {
          delete t[e];
        }),
        delete t._chartjs);
  }
  function Lt(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
  }
  const Rt =
    "undefined" == typeof window
      ? function (t) {
          return t();
        }
      : window.requestAnimationFrame;
  function It(t, e) {
    let i = [],
      n = !1;
    return function (...s) {
      (i = s),
        n ||
          ((n = !0),
          Rt.call(window, () => {
            (n = !1), t.apply(e, i);
          }));
    };
  }
  const Ft = (t) => ("start" === t ? "left" : "end" === t ? "right" : "center"),
    Nt = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2);
  function zt(t, e, i) {
    const n = e.length;
    let s = 0,
      o = n;
    if (t._sorted) {
      const { iScale: r, _parsed: a } = t,
        l = r.axis,
        { min: h, max: c, minDefined: d, maxDefined: u } = r.getUserBounds();
      d &&
        (s = Mt(
          Math.min(Tt(a, l, h).lo, i ? n : Tt(e, l, r.getPixelForValue(h)).lo),
          0,
          n - 1
        )),
        (o = u
          ? Mt(
              Math.max(
                Tt(a, r.axis, c, !0).hi + 1,
                i ? 0 : Tt(e, l, r.getPixelForValue(c), !0).hi + 1
              ),
              s,
              n
            ) - s
          : n - s);
    }
    return { start: s, count: o };
  }
  function $t(t) {
    const { xScale: e, yScale: i, _scaleRanges: n } = t,
      s = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
    if (!n) return (t._scaleRanges = s), !0;
    const o =
      n.xmin !== e.min ||
      n.xmax !== e.max ||
      n.ymin !== i.min ||
      n.ymax !== i.max;
    return Object.assign(n, s), o;
  }
  const jt = (t) => 0 === t || 1 === t,
    Yt = (t, e, i) =>
      -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * ot) / i),
    Wt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * ot) / i) + 1,
    Bt = {
      linear: (t) => t,
      easeInQuad: (t) => t * t,
      easeOutQuad: (t) => -t * (t - 2),
      easeInOutQuad: (t) =>
        (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
      easeInCubic: (t) => t * t * t,
      easeOutCubic: (t) => (t -= 1) * t * t + 1,
      easeInOutCubic: (t) =>
        (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
      easeInQuart: (t) => t * t * t * t,
      easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
      easeInOutQuart: (t) =>
        (t /= 0.5) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2),
      easeInQuint: (t) => t * t * t * t * t,
      easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
      easeInOutQuint: (t) =>
        (t /= 0.5) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2),
      easeInSine: (t) => 1 - Math.cos(t * ht),
      easeOutSine: (t) => Math.sin(t * ht),
      easeInOutSine: (t) => -0.5 * (Math.cos(st * t) - 1),
      easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
      easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
      easeInOutExpo: (t) =>
        jt(t)
          ? t
          : t < 0.5
          ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
          : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
      easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
      easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
      easeInOutCirc: (t) =>
        (t /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
      easeInElastic: (t) => (jt(t) ? t : Yt(t, 0.075, 0.3)),
      easeOutElastic: (t) => (jt(t) ? t : Wt(t, 0.075, 0.3)),
      easeInOutElastic(t) {
        const e = 0.1125;
        return jt(t)
          ? t
          : t < 0.5
          ? 0.5 * Yt(2 * t, e, 0.45)
          : 0.5 + 0.5 * Wt(2 * t - 1, e, 0.45);
      },
      easeInBack(t) {
        const e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack(t) {
        const e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack(t) {
        let e = 1.70158;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: (t) => 1 - Bt.easeOutBounce(1 - t),
      easeOutBounce(t) {
        const e = 7.5625,
          i = 2.75;
        return t < 1 / i
          ? e * t * t
          : t < 2 / i
          ? e * (t -= 1.5 / i) * t + 0.75
          : t < 2.5 / i
          ? e * (t -= 2.25 / i) * t + 0.9375
          : e * (t -= 2.625 / i) * t + 0.984375;
      },
      easeInOutBounce: (t) =>
        t < 0.5
          ? 0.5 * Bt.easeInBounce(2 * t)
          : 0.5 * Bt.easeOutBounce(2 * t - 1) + 0.5,
    };
  function Vt(t) {
    if (t && "object" == typeof t) {
      const e = t.toString();
      return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e;
    }
    return !1;
  }
  function Ht(t) {
    return Vt(t) ? t : new L(t);
  }
  function Ut(t) {
    return Vt(t) ? t : new L(t).saturate(0.5).darken(0.1).hexString();
  }
  const Gt = ["x", "y", "borderWidth", "radius", "tension"],
    Kt = ["color", "borderColor", "backgroundColor"];
  const qt = new Map();
  function Xt(t, e, i) {
    return (function (t, e) {
      e = e || {};
      const i = t + JSON.stringify(e);
      let n = qt.get(i);
      return n || ((n = new Intl.NumberFormat(t, e)), qt.set(i, n)), n;
    })(e, i).format(t);
  }
  const Zt = {
    values: (t) => (N(t) ? t : "" + t),
    numeric(t, e, i) {
      if (0 === t) return "0";
      const n = this.chart.options.locale;
      let s,
        o = t;
      if (i.length > 1) {
        const e = Math.max(
          Math.abs(i[0].value),
          Math.abs(i[i.length - 1].value)
        );
        (e < 1e-4 || e > 1e15) && (s = "scientific"),
          (o = (function (t, e) {
            let i =
              e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
            Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
            return i;
          })(t, i));
      }
      const r = ut(Math.abs(o)),
        a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
        l = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
      return Object.assign(l, this.options.ticks.format), Xt(t, n, l);
    },
    logarithmic(t, e, i) {
      if (0 === t) return "0";
      const n = i[e].significand || t / Math.pow(10, Math.floor(ut(t)));
      return [1, 2, 3, 5, 10, 15].includes(n) || e > 0.8 * i.length
        ? Zt.numeric.call(this, t, e, i)
        : "";
    },
  };
  var Jt = { formatters: Zt };
  const Qt = Object.create(null),
    te = Object.create(null);
  function ee(t, e) {
    if (!e) return t;
    const i = e.split(".");
    for (let e = 0, n = i.length; e < n; ++e) {
      const n = i[e];
      t = t[n] || (t[n] = Object.create(null));
    }
    return t;
  }
  function ie(t, e, i) {
    return "string" == typeof e ? q(ee(t, e), i) : q(ee(t, ""), e);
  }
  class ne {
    constructor(t, e) {
      (this.animation = void 0),
        (this.backgroundColor = "rgba(0,0,0,0.1)"),
        (this.borderColor = "rgba(0,0,0,0.1)"),
        (this.color = "#666"),
        (this.datasets = {}),
        (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
        (this.elements = {}),
        (this.events = [
          "mousemove",
          "mouseout",
          "click",
          "touchstart",
          "touchmove",
        ]),
        (this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: "normal",
          lineHeight: 1.2,
          weight: null,
        }),
        (this.hover = {}),
        (this.hoverBackgroundColor = (t, e) => Ut(e.backgroundColor)),
        (this.hoverBorderColor = (t, e) => Ut(e.borderColor)),
        (this.hoverColor = (t, e) => Ut(e.color)),
        (this.indexAxis = "x"),
        (this.interaction = {
          mode: "nearest",
          intersect: !0,
          includeInvisible: !1,
        }),
        (this.maintainAspectRatio = !0),
        (this.onHover = null),
        (this.onClick = null),
        (this.parsing = !0),
        (this.plugins = {}),
        (this.responsive = !0),
        (this.scale = void 0),
        (this.scales = {}),
        (this.showLine = !0),
        (this.drawActiveElementsOnTop = !0),
        this.describe(t),
        this.apply(e);
    }
    set(t, e) {
      return ie(this, t, e);
    }
    get(t) {
      return ee(this, t);
    }
    describe(t, e) {
      return ie(te, t, e);
    }
    override(t, e) {
      return ie(Qt, t, e);
    }
    route(t, e, i, n) {
      const s = ee(this, t),
        o = ee(this, i),
        r = "_" + e;
      Object.defineProperties(s, {
        [r]: { value: s[e], writable: !0 },
        [e]: {
          enumerable: !0,
          get() {
            const t = this[r],
              e = o[n];
            return z(t) ? Object.assign({}, e, t) : Y(t, e);
          },
          set(t) {
            this[r] = t;
          },
        },
      });
    }
    apply(t) {
      t.forEach((t) => t(this));
    }
  }
  var se = new ne(
    {
      _scriptable: (t) => !t.startsWith("on"),
      _indexable: (t) => "events" !== t,
      hover: { _fallback: "interaction" },
      interaction: { _scriptable: !1, _indexable: !1 },
    },
    [
      function (t) {
        t.set("animation", {
          delay: void 0,
          duration: 1e3,
          easing: "easeOutQuart",
          fn: void 0,
          from: void 0,
          loop: void 0,
          to: void 0,
          type: void 0,
        }),
          t.describe("animation", {
            _fallback: !1,
            _indexable: !1,
            _scriptable: (t) =>
              "onProgress" !== t && "onComplete" !== t && "fn" !== t,
          }),
          t.set("animations", {
            colors: { type: "color", properties: Kt },
            numbers: { type: "number", properties: Gt },
          }),
          t.describe("animations", { _fallback: "animation" }),
          t.set("transitions", {
            active: { animation: { duration: 400 } },
            resize: { animation: { duration: 0 } },
            show: {
              animations: {
                colors: { from: "transparent" },
                visible: { type: "boolean", duration: 0 },
              },
            },
            hide: {
              animations: {
                colors: { to: "transparent" },
                visible: {
                  type: "boolean",
                  easing: "linear",
                  fn: (t) => 0 | t,
                },
              },
            },
          });
      },
      function (t) {
        t.set("layout", {
          autoPadding: !0,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
        });
      },
      function (t) {
        t.set("scale", {
          display: !0,
          offset: !1,
          reverse: !1,
          beginAtZero: !1,
          bounds: "ticks",
          clip: !0,
          grace: 0,
          grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1,
          },
          border: { display: !0, dash: [], dashOffset: 0, width: 1 },
          title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
          ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Jt.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2,
          },
        }),
          t.route("scale.ticks", "color", "", "color"),
          t.route("scale.grid", "color", "", "borderColor"),
          t.route("scale.border", "color", "", "borderColor"),
          t.route("scale.title", "color", "", "color"),
          t.describe("scale", {
            _fallback: !1,
            _scriptable: (t) =>
              !t.startsWith("before") &&
              !t.startsWith("after") &&
              "callback" !== t &&
              "parser" !== t,
            _indexable: (t) =>
              "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t,
          }),
          t.describe("scales", { _fallback: "scale" }),
          t.describe("scale.ticks", {
            _scriptable: (t) => "backdropPadding" !== t && "callback" !== t,
            _indexable: (t) => "backdropPadding" !== t,
          });
      },
    ]
  );
  function oe(t, e, i, n, s) {
    let o = e[s];
    return (
      o || ((o = e[s] = t.measureText(s).width), i.push(s)), o > n && (n = o), n
    );
  }
  function re(t, e, i, n) {
    let s = ((n = n || {}).data = n.data || {}),
      o = (n.garbageCollect = n.garbageCollect || []);
    n.font !== e &&
      ((s = n.data = {}), (o = n.garbageCollect = []), (n.font = e)),
      t.save(),
      (t.font = e);
    let r = 0;
    const a = i.length;
    let l, h, c, d, u;
    for (l = 0; l < a; l++)
      if (((d = i[l]), null == d || N(d))) {
        if (N(d))
          for (h = 0, c = d.length; h < c; h++)
            (u = d[h]), null == u || N(u) || (r = oe(t, s, o, r, u));
      } else r = oe(t, s, o, r, d);
    t.restore();
    const f = o.length / 2;
    if (f > i.length) {
      for (l = 0; l < f; l++) delete s[o[l]];
      o.splice(0, f);
    }
    return r;
  }
  function ae(t, e, i) {
    const n = t.currentDevicePixelRatio,
      s = 0 !== i ? Math.max(i / 2, 0.5) : 0;
    return Math.round((e - s) * n) / n + s;
  }
  function le(t, e) {
    (e = e || t.getContext("2d")).save(),
      e.resetTransform(),
      e.clearRect(0, 0, t.width, t.height),
      e.restore();
  }
  function he(t, e, i, n) {
    ce(t, e, i, n, null);
  }
  function ce(t, e, i, n, s) {
    let o, r, a, l, h, c, d, u;
    const f = e.pointStyle,
      p = e.rotation,
      g = e.radius;
    let m = (p || 0) * lt;
    if (
      f &&
      "object" == typeof f &&
      ((o = f.toString()),
      "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)
    )
      return (
        t.save(),
        t.translate(i, n),
        t.rotate(m),
        t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
        void t.restore()
      );
    if (!(isNaN(g) || g <= 0)) {
      switch ((t.beginPath(), f)) {
        default:
          s ? t.ellipse(i, n, s / 2, g, 0, 0, ot) : t.arc(i, n, g, 0, ot),
            t.closePath();
          break;
        case "triangle":
          (c = s ? s / 2 : g),
            t.moveTo(i + Math.sin(m) * c, n - Math.cos(m) * g),
            (m += dt),
            t.lineTo(i + Math.sin(m) * c, n - Math.cos(m) * g),
            (m += dt),
            t.lineTo(i + Math.sin(m) * c, n - Math.cos(m) * g),
            t.closePath();
          break;
        case "rectRounded":
          (h = 0.516 * g),
            (l = g - h),
            (r = Math.cos(m + ct) * l),
            (d = Math.cos(m + ct) * (s ? s / 2 - h : l)),
            (a = Math.sin(m + ct) * l),
            (u = Math.sin(m + ct) * (s ? s / 2 - h : l)),
            t.arc(i - d, n - a, h, m - st, m - ht),
            t.arc(i + u, n - r, h, m - ht, m),
            t.arc(i + d, n + a, h, m, m + ht),
            t.arc(i - u, n + r, h, m + ht, m + st),
            t.closePath();
          break;
        case "rect":
          if (!p) {
            (l = Math.SQRT1_2 * g),
              (c = s ? s / 2 : l),
              t.rect(i - c, n - l, 2 * c, 2 * l);
            break;
          }
          m += ct;
        case "rectRot":
          (d = Math.cos(m) * (s ? s / 2 : g)),
            (r = Math.cos(m) * g),
            (a = Math.sin(m) * g),
            (u = Math.sin(m) * (s ? s / 2 : g)),
            t.moveTo(i - d, n - a),
            t.lineTo(i + u, n - r),
            t.lineTo(i + d, n + a),
            t.lineTo(i - u, n + r),
            t.closePath();
          break;
        case "crossRot":
          m += ct;
        case "cross":
          (d = Math.cos(m) * (s ? s / 2 : g)),
            (r = Math.cos(m) * g),
            (a = Math.sin(m) * g),
            (u = Math.sin(m) * (s ? s / 2 : g)),
            t.moveTo(i - d, n - a),
            t.lineTo(i + d, n + a),
            t.moveTo(i + u, n - r),
            t.lineTo(i - u, n + r);
          break;
        case "star":
          (d = Math.cos(m) * (s ? s / 2 : g)),
            (r = Math.cos(m) * g),
            (a = Math.sin(m) * g),
            (u = Math.sin(m) * (s ? s / 2 : g)),
            t.moveTo(i - d, n - a),
            t.lineTo(i + d, n + a),
            t.moveTo(i + u, n - r),
            t.lineTo(i - u, n + r),
            (m += ct),
            (d = Math.cos(m) * (s ? s / 2 : g)),
            (r = Math.cos(m) * g),
            (a = Math.sin(m) * g),
            (u = Math.sin(m) * (s ? s / 2 : g)),
            t.moveTo(i - d, n - a),
            t.lineTo(i + d, n + a),
            t.moveTo(i + u, n - r),
            t.lineTo(i - u, n + r);
          break;
        case "line":
          (r = s ? s / 2 : Math.cos(m) * g),
            (a = Math.sin(m) * g),
            t.moveTo(i - r, n - a),
            t.lineTo(i + r, n + a);
          break;
        case "dash":
          t.moveTo(i, n),
            t.lineTo(i + Math.cos(m) * (s ? s / 2 : g), n + Math.sin(m) * g);
          break;
        case !1:
          t.closePath();
      }
      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }
  function de(t, e, i) {
    return (
      (i = i || 0.5),
      !e ||
        (t &&
          t.x > e.left - i &&
          t.x < e.right + i &&
          t.y > e.top - i &&
          t.y < e.bottom + i)
    );
  }
  function ue(t, e) {
    t.save(),
      t.beginPath(),
      t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
      t.clip();
  }
  function fe(t) {
    t.restore();
  }
  function pe(t, e, i, n, s) {
    if (!e) return t.lineTo(i.x, i.y);
    if ("middle" === s) {
      const n = (e.x + i.x) / 2;
      t.lineTo(n, e.y), t.lineTo(n, i.y);
    } else ("after" === s) != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
    t.lineTo(i.x, i.y);
  }
  function ge(t, e, i, n) {
    if (!e) return t.lineTo(i.x, i.y);
    t.bezierCurveTo(
      n ? e.cp1x : e.cp2x,
      n ? e.cp1y : e.cp2y,
      n ? i.cp2x : i.cp1x,
      n ? i.cp2y : i.cp1y,
      i.x,
      i.y
    );
  }
  function me(t, e, i, n, s) {
    if (s.strikethrough || s.underline) {
      const o = t.measureText(n),
        r = e - o.actualBoundingBoxLeft,
        a = e + o.actualBoundingBoxRight,
        l = i - o.actualBoundingBoxAscent,
        h = i + o.actualBoundingBoxDescent,
        c = s.strikethrough ? (l + h) / 2 : h;
      (t.strokeStyle = t.fillStyle),
        t.beginPath(),
        (t.lineWidth = s.decorationWidth || 2),
        t.moveTo(r, c),
        t.lineTo(a, c),
        t.stroke();
    }
  }
  function ve(t, e) {
    const i = t.fillStyle;
    (t.fillStyle = e.color),
      t.fillRect(e.left, e.top, e.width, e.height),
      (t.fillStyle = i);
  }
  function be(t, e, i, n, s, o = {}) {
    const r = N(e) ? e : [e],
      a = o.strokeWidth > 0 && "" !== o.strokeColor;
    let l, h;
    for (
      t.save(),
        t.font = s.string,
        (function (t, e) {
          e.translation && t.translate(e.translation[0], e.translation[1]),
            F(e.rotation) || t.rotate(e.rotation),
            e.color && (t.fillStyle = e.color),
            e.textAlign && (t.textAlign = e.textAlign),
            e.textBaseline && (t.textBaseline = e.textBaseline);
        })(t, o),
        l = 0;
      l < r.length;
      ++l
    )
      (h = r[l]),
        o.backdrop && ve(t, o.backdrop),
        a &&
          (o.strokeColor && (t.strokeStyle = o.strokeColor),
          F(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
          t.strokeText(h, i, n, o.maxWidth)),
        t.fillText(h, i, n, o.maxWidth),
        me(t, i, n, h, o),
        (n += Number(s.lineHeight));
    t.restore();
  }
  function ye(t, e) {
    const { x: i, y: n, w: s, h: o, radius: r } = e;
    t.arc(i + r.topLeft, n + r.topLeft, r.topLeft, 1.5 * st, st, !0),
      t.lineTo(i, n + o - r.bottomLeft),
      t.arc(i + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, st, ht, !0),
      t.lineTo(i + s - r.bottomRight, n + o),
      t.arc(
        i + s - r.bottomRight,
        n + o - r.bottomRight,
        r.bottomRight,
        ht,
        0,
        !0
      ),
      t.lineTo(i + s, n + r.topRight),
      t.arc(i + s - r.topRight, n + r.topRight, r.topRight, 0, -ht, !0),
      t.lineTo(i + r.topLeft, n);
  }
  const xe = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    _e =
      /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function we(t, e) {
    const i = ("" + t).match(xe);
    if (!i || "normal" === i[1]) return 1.2 * e;
    switch (((t = +i[2]), i[3])) {
      case "px":
        return t;
      case "%":
        t /= 100;
    }
    return e * t;
  }
  const ke = (t) => +t || 0;
  function Ce(t, e) {
    const i = {},
      n = z(e),
      s = n ? Object.keys(e) : e,
      o = z(t) ? (n ? (i) => Y(t[i], t[e[i]]) : (e) => t[e]) : () => t;
    for (const t of s) i[t] = ke(o(t));
    return i;
  }
  function Se(t) {
    return Ce(t, { top: "y", right: "x", bottom: "y", left: "x" });
  }
  function Me(t) {
    return Ce(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function Ae(t) {
    const e = Se(t);
    return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
  }
  function De(t, e) {
    (t = t || {}), (e = e || se.font);
    let i = Y(t.size, e.size);
    "string" == typeof i && (i = parseInt(i, 10));
    let n = Y(t.style, e.style);
    n &&
      !("" + n).match(_e) &&
      (console.warn('Invalid font style specified: "' + n + '"'), (n = void 0));
    const s = {
      family: Y(t.family, e.family),
      lineHeight: we(Y(t.lineHeight, e.lineHeight), i),
      size: i,
      style: n,
      weight: Y(t.weight, e.weight),
      string: "",
    };
    return (
      (s.string = (function (t) {
        return !t || F(t.size) || F(t.family)
          ? null
          : (t.style ? t.style + " " : "") +
              (t.weight ? t.weight + " " : "") +
              t.size +
              "px " +
              t.family;
      })(s)),
      s
    );
  }
  function Te(t, e, i, n) {
    let s,
      o,
      r,
      a = !0;
    for (s = 0, o = t.length; s < o; ++s)
      if (
        ((r = t[s]),
        void 0 !== r &&
          (void 0 !== e && "function" == typeof r && ((r = r(e)), (a = !1)),
          void 0 !== i && N(r) && ((r = r[i % r.length]), (a = !1)),
          void 0 !== r))
      )
        return n && !a && (n.cacheable = !1), r;
  }
  function Oe(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function Pe(t, e = [""], i, n, s = () => t[0]) {
    const o = i || t;
    void 0 === n && (n = We("_fallback", t));
    const r = {
      [Symbol.toStringTag]: "Object",
      _cacheable: !0,
      _scopes: t,
      _rootScopes: o,
      _fallback: n,
      _getTarget: s,
      override: (i) => Pe([i, ...t], e, o, n),
    };
    return new Proxy(r, {
      deleteProperty: (e, i) => (
        delete e[i], delete e._keys, delete t[0][i], !0
      ),
      get: (i, n) =>
        Fe(i, n, () =>
          (function (t, e, i, n) {
            let s;
            for (const o of e)
              if (((s = We(Re(o, t), i)), void 0 !== s))
                return Ie(t, s) ? je(i, n, t, s) : s;
          })(n, e, t, i)
        ),
      getOwnPropertyDescriptor: (t, e) =>
        Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
      getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
      has: (t, e) => Be(t).includes(e),
      ownKeys: (t) => Be(t),
      set(t, e, i) {
        const n = t._storage || (t._storage = s());
        return (t[e] = n[e] = i), delete t._keys, !0;
      },
    });
  }
  function Ee(t, e, i, n) {
    const s = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: i,
      _stack: new Set(),
      _descriptors: Le(t, n),
      setContext: (e) => Ee(t, e, i, n),
      override: (s) => Ee(t.override(s), e, i, n),
    };
    return new Proxy(s, {
      deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
      get: (t, e, i) =>
        Fe(t, e, () =>
          (function (t, e, i) {
            const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = t;
            let a = n[e];
            it(a) &&
              r.isScriptable(e) &&
              (a = (function (t, e, i, n) {
                const { _proxy: s, _context: o, _subProxy: r, _stack: a } = i;
                if (a.has(t))
                  throw new Error(
                    "Recursion detected: " + Array.from(a).join("->") + "->" + t
                  );
                a.add(t);
                let l = e(o, r || n);
                a.delete(t), Ie(t, l) && (l = je(s._scopes, s, t, l));
                return l;
              })(e, a, t, i));
            N(a) &&
              a.length &&
              (a = (function (t, e, i, n) {
                const {
                  _proxy: s,
                  _context: o,
                  _subProxy: r,
                  _descriptors: a,
                } = i;
                if (void 0 !== o.index && n(t)) return e[o.index % e.length];
                if (z(e[0])) {
                  const i = e,
                    n = s._scopes.filter((t) => t !== i);
                  e = [];
                  for (const l of i) {
                    const i = je(n, s, t, l);
                    e.push(Ee(i, o, r && r[t], a));
                  }
                }
                return e;
              })(e, a, t, r.isIndexable));
            Ie(e, a) && (a = Ee(a, s, o && o[e], r));
            return a;
          })(t, e, i)
        ),
      getOwnPropertyDescriptor: (e, i) =>
        e._descriptors.allKeys
          ? Reflect.has(t, i)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(t, i),
      getPrototypeOf: () => Reflect.getPrototypeOf(t),
      has: (e, i) => Reflect.has(t, i),
      ownKeys: () => Reflect.ownKeys(t),
      set: (e, i, n) => ((t[i] = n), delete e[i], !0),
    });
  }
  function Le(t, e = { scriptable: !0, indexable: !0 }) {
    const {
      _scriptable: i = e.scriptable,
      _indexable: n = e.indexable,
      _allKeys: s = e.allKeys,
    } = t;
    return {
      allKeys: s,
      scriptable: i,
      indexable: n,
      isScriptable: it(i) ? i : () => i,
      isIndexable: it(n) ? n : () => n,
    };
  }
  const Re = (t, e) => (t ? t + tt(e) : e),
    Ie = (t, e) =>
      z(e) &&
      "adapters" !== t &&
      (null === Object.getPrototypeOf(e) || e.constructor === Object);
  function Fe(t, e, i) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    const n = i();
    return (t[e] = n), n;
  }
  function Ne(t, e, i) {
    return it(t) ? t(e, i) : t;
  }
  const ze = (t, e) => (!0 === t ? e : "string" == typeof t ? Q(e, t) : void 0);
  function $e(t, e, i, n, s) {
    for (const o of e) {
      const e = ze(i, o);
      if (e) {
        t.add(e);
        const o = Ne(e._fallback, i, s);
        if (void 0 !== o && o !== i && o !== n) return o;
      } else if (!1 === e && void 0 !== n && i !== n) return null;
    }
    return !1;
  }
  function je(t, e, i, n) {
    const s = e._rootScopes,
      o = Ne(e._fallback, i, n),
      r = [...t, ...s],
      a = new Set();
    a.add(n);
    let l = Ye(a, r, i, o || i, n);
    return (
      null !== l &&
      (void 0 === o || o === i || ((l = Ye(a, r, o, l, n)), null !== l)) &&
      Pe(Array.from(a), [""], s, o, () =>
        (function (t, e, i) {
          const n = t._getTarget();
          e in n || (n[e] = {});
          const s = n[e];
          if (N(s) && z(i)) return i;
          return s || {};
        })(e, i, n)
      )
    );
  }
  function Ye(t, e, i, n, s) {
    for (; i; ) i = $e(t, e, i, n, s);
    return i;
  }
  function We(t, e) {
    for (const i of e) {
      if (!i) continue;
      const e = i[t];
      if (void 0 !== e) return e;
    }
  }
  function Be(t) {
    let e = t._keys;
    return (
      e ||
        (e = t._keys =
          (function (t) {
            const e = new Set();
            for (const i of t)
              for (const t of Object.keys(i).filter((t) => !t.startsWith("_")))
                e.add(t);
            return Array.from(e);
          })(t._scopes)),
      e
    );
  }
  function Ve(t, e, i, n) {
    const { iScale: s } = t,
      { key: o = "r" } = this._parsing,
      r = new Array(n);
    let a, l, h, c;
    for (a = 0, l = n; a < l; ++a)
      (h = a + i), (c = e[h]), (r[a] = { r: s.parse(Q(c, o), h) });
    return r;
  }
  const He = Number.EPSILON || 1e-14,
    Ue = (t, e) => e < t.length && !t[e].skip && t[e],
    Ge = (t) => ("x" === t ? "y" : "x");
  function Ke(t, e, i, n) {
    const s = t.skip ? e : t,
      o = e,
      r = i.skip ? e : i,
      a = wt(o, s),
      l = wt(r, o);
    let h = a / (a + l),
      c = l / (a + l);
    (h = isNaN(h) ? 0 : h), (c = isNaN(c) ? 0 : c);
    const d = n * h,
      u = n * c;
    return {
      previous: { x: o.x - d * (r.x - s.x), y: o.y - d * (r.y - s.y) },
      next: { x: o.x + u * (r.x - s.x), y: o.y + u * (r.y - s.y) },
    };
  }
  function qe(t, e = "x") {
    const i = Ge(e),
      n = t.length,
      s = Array(n).fill(0),
      o = Array(n);
    let r,
      a,
      l,
      h = Ue(t, 0);
    for (r = 0; r < n; ++r)
      if (((a = l), (l = h), (h = Ue(t, r + 1)), l)) {
        if (h) {
          const t = h[e] - l[e];
          s[r] = 0 !== t ? (h[i] - l[i]) / t : 0;
        }
        o[r] = a
          ? h
            ? ft(s[r - 1]) !== ft(s[r])
              ? 0
              : (s[r - 1] + s[r]) / 2
            : s[r - 1]
          : s[r];
      }
    !(function (t, e, i) {
      const n = t.length;
      let s,
        o,
        r,
        a,
        l,
        h = Ue(t, 0);
      for (let c = 0; c < n - 1; ++c)
        (l = h),
          (h = Ue(t, c + 1)),
          l &&
            h &&
            (pt(e[c], 0, He)
              ? (i[c] = i[c + 1] = 0)
              : ((s = i[c] / e[c]),
                (o = i[c + 1] / e[c]),
                (a = Math.pow(s, 2) + Math.pow(o, 2)),
                a <= 9 ||
                  ((r = 3 / Math.sqrt(a)),
                  (i[c] = s * r * e[c]),
                  (i[c + 1] = o * r * e[c]))));
    })(t, s, o),
      (function (t, e, i = "x") {
        const n = Ge(i),
          s = t.length;
        let o,
          r,
          a,
          l = Ue(t, 0);
        for (let h = 0; h < s; ++h) {
          if (((r = a), (a = l), (l = Ue(t, h + 1)), !a)) continue;
          const s = a[i],
            c = a[n];
          r &&
            ((o = (s - r[i]) / 3),
            (a[`cp1${i}`] = s - o),
            (a[`cp1${n}`] = c - o * e[h])),
            l &&
              ((o = (l[i] - s) / 3),
              (a[`cp2${i}`] = s + o),
              (a[`cp2${n}`] = c + o * e[h]));
        }
      })(t, o, e);
  }
  function Xe(t, e, i) {
    return Math.max(Math.min(t, i), e);
  }
  function Ze(t, e, i, n, s) {
    let o, r, a, l;
    if (
      (e.spanGaps && (t = t.filter((t) => !t.skip)),
      "monotone" === e.cubicInterpolationMode)
    )
      qe(t, s);
    else {
      let i = n ? t[t.length - 1] : t[0];
      for (o = 0, r = t.length; o < r; ++o)
        (a = t[o]),
          (l = Ke(i, a, t[Math.min(o + 1, r - (n ? 0 : 1)) % r], e.tension)),
          (a.cp1x = l.previous.x),
          (a.cp1y = l.previous.y),
          (a.cp2x = l.next.x),
          (a.cp2y = l.next.y),
          (i = a);
    }
    e.capBezierPoints &&
      (function (t, e) {
        let i,
          n,
          s,
          o,
          r,
          a = de(t[0], e);
        for (i = 0, n = t.length; i < n; ++i)
          (r = o),
            (o = a),
            (a = i < n - 1 && de(t[i + 1], e)),
            o &&
              ((s = t[i]),
              r &&
                ((s.cp1x = Xe(s.cp1x, e.left, e.right)),
                (s.cp1y = Xe(s.cp1y, e.top, e.bottom))),
              a &&
                ((s.cp2x = Xe(s.cp2x, e.left, e.right)),
                (s.cp2y = Xe(s.cp2y, e.top, e.bottom))));
      })(t, i);
  }
  function Je() {
    return "undefined" != typeof window && "undefined" != typeof document;
  }
  function Qe(t) {
    let e = t.parentNode;
    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
  }
  function ti(t, e, i) {
    let n;
    return (
      "string" == typeof t
        ? ((n = parseInt(t, 10)),
          -1 !== t.indexOf("%") && (n = (n / 100) * e.parentNode[i]))
        : (n = t),
      n
    );
  }
  const ei = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
  const ii = ["top", "right", "bottom", "left"];
  function ni(t, e, i) {
    const n = {};
    i = i ? "-" + i : "";
    for (let s = 0; s < 4; s++) {
      const o = ii[s];
      n[o] = parseFloat(t[e + "-" + o + i]) || 0;
    }
    return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
  }
  const si = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
  function oi(t, e) {
    if ("native" in t) return t;
    const { canvas: i, currentDevicePixelRatio: n } = e,
      s = ei(i),
      o = "border-box" === s.boxSizing,
      r = ni(s, "padding"),
      a = ni(s, "border", "width"),
      {
        x: l,
        y: h,
        box: c,
      } = (function (t, e) {
        const i = t.touches,
          n = i && i.length ? i[0] : t,
          { offsetX: s, offsetY: o } = n;
        let r,
          a,
          l = !1;
        if (si(s, o, t.target)) (r = s), (a = o);
        else {
          const t = e.getBoundingClientRect();
          (r = n.clientX - t.left), (a = n.clientY - t.top), (l = !0);
        }
        return { x: r, y: a, box: l };
      })(t, i),
      d = r.left + (c && a.left),
      u = r.top + (c && a.top);
    let { width: f, height: p } = e;
    return (
      o && ((f -= r.width + a.width), (p -= r.height + a.height)),
      {
        x: Math.round((((l - d) / f) * i.width) / n),
        y: Math.round((((h - u) / p) * i.height) / n),
      }
    );
  }
  const ri = (t) => Math.round(10 * t) / 10;
  function ai(t, e, i, n) {
    const s = ei(t),
      o = ni(s, "margin"),
      r = ti(s.maxWidth, t, "clientWidth") || at,
      a = ti(s.maxHeight, t, "clientHeight") || at,
      l = (function (t, e, i) {
        let n, s;
        if (void 0 === e || void 0 === i) {
          const o = Qe(t);
          if (o) {
            const t = o.getBoundingClientRect(),
              r = ei(o),
              a = ni(r, "border", "width"),
              l = ni(r, "padding");
            (e = t.width - l.width - a.width),
              (i = t.height - l.height - a.height),
              (n = ti(r.maxWidth, o, "clientWidth")),
              (s = ti(r.maxHeight, o, "clientHeight"));
          } else (e = t.clientWidth), (i = t.clientHeight);
        }
        return { width: e, height: i, maxWidth: n || at, maxHeight: s || at };
      })(t, e, i);
    let { width: h, height: c } = l;
    if ("content-box" === s.boxSizing) {
      const t = ni(s, "border", "width"),
        e = ni(s, "padding");
      (h -= e.width + t.width), (c -= e.height + t.height);
    }
    (h = Math.max(0, h - o.width)),
      (c = Math.max(0, n ? h / n : c - o.height)),
      (h = ri(Math.min(h, r, l.maxWidth))),
      (c = ri(Math.min(c, a, l.maxHeight))),
      h && !c && (c = ri(h / 2));
    return (
      (void 0 !== e || void 0 !== i) &&
        n &&
        l.height &&
        c > l.height &&
        ((c = l.height), (h = ri(Math.floor(c * n)))),
      { width: h, height: c }
    );
  }
  function li(t, e, i) {
    const n = e || 1,
      s = Math.floor(t.height * n),
      o = Math.floor(t.width * n);
    (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
    const r = t.canvas;
    return (
      r.style &&
        (i || (!r.style.height && !r.style.width)) &&
        ((r.style.height = `${t.height}px`), (r.style.width = `${t.width}px`)),
      (t.currentDevicePixelRatio !== n || r.height !== s || r.width !== o) &&
        ((t.currentDevicePixelRatio = n),
        (r.height = s),
        (r.width = o),
        t.ctx.setTransform(n, 0, 0, n, 0, 0),
        !0)
    );
  }
  const hi = (function () {
    let t = !1;
    try {
      const e = {
        get passive() {
          return (t = !0), !1;
        },
      };
      Je() &&
        (window.addEventListener("test", null, e),
        window.removeEventListener("test", null, e));
    } catch (t) {}
    return t;
  })();
  function ci(t, e) {
    const i = (function (t, e) {
        return ei(t).getPropertyValue(e);
      })(t, e),
      n = i && i.match(/^(\d+)(\.\d+)?px$/);
    return n ? +n[1] : void 0;
  }
  function di(t, e, i, n) {
    return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
  }
  function ui(t, e, i, n) {
    return {
      x: t.x + i * (e.x - t.x),
      y:
        "middle" === n
          ? i < 0.5
            ? t.y
            : e.y
          : "after" === n
          ? i < 1
            ? t.y
            : e.y
          : i > 0
          ? e.y
          : t.y,
    };
  }
  function fi(t, e, i, n) {
    const s = { x: t.cp2x, y: t.cp2y },
      o = { x: e.cp1x, y: e.cp1y },
      r = di(t, s, i),
      a = di(s, o, i),
      l = di(o, e, i),
      h = di(r, a, i),
      c = di(a, l, i);
    return di(h, c, i);
  }
  function pi(t, e, i) {
    return t
      ? (function (t, e) {
          return {
            x: (i) => t + t + e - i,
            setWidth(t) {
              e = t;
            },
            textAlign: (t) =>
              "center" === t ? t : "right" === t ? "left" : "right",
            xPlus: (t, e) => t - e,
            leftForLtr: (t, e) => t - e,
          };
        })(e, i)
      : {
          x: (t) => t,
          setWidth(t) {},
          textAlign: (t) => t,
          xPlus: (t, e) => t + e,
          leftForLtr: (t, e) => t,
        };
  }
  function gi(t, e) {
    let i, n;
    ("ltr" !== e && "rtl" !== e) ||
      ((i = t.canvas.style),
      (n = [
        i.getPropertyValue("direction"),
        i.getPropertyPriority("direction"),
      ]),
      i.setProperty("direction", e, "important"),
      (t.prevTextDirection = n));
  }
  function mi(t, e) {
    void 0 !== e &&
      (delete t.prevTextDirection,
      t.canvas.style.setProperty("direction", e[0], e[1]));
  }
  function vi(t) {
    return "angle" === t
      ? { between: St, compare: kt, normalize: Ct }
      : { between: At, compare: (t, e) => t - e, normalize: (t) => t };
  }
  function bi({ start: t, end: e, count: i, loop: n, style: s }) {
    return {
      start: t % i,
      end: e % i,
      loop: n && (e - t + 1) % i == 0,
      style: s,
    };
  }
  function yi(t, e, i) {
    if (!i) return [t];
    const { property: n, start: s, end: o } = i,
      r = e.length,
      { compare: a, between: l, normalize: h } = vi(n),
      {
        start: c,
        end: d,
        loop: u,
        style: f,
      } = (function (t, e, i) {
        const { property: n, start: s, end: o } = i,
          { between: r, normalize: a } = vi(n),
          l = e.length;
        let h,
          c,
          { start: d, end: u, loop: f } = t;
        if (f) {
          for (
            d += l, u += l, h = 0, c = l;
            h < c && r(a(e[d % l][n]), s, o);
            ++h
          )
            d--, u--;
          (d %= l), (u %= l);
        }
        return u < d && (u += l), { start: d, end: u, loop: f, style: t.style };
      })(t, e, i),
      p = [];
    let g,
      m,
      v,
      b = !1,
      y = null;
    const x = () => b || (l(s, v, g) && 0 !== a(s, v)),
      _ = () => !b || 0 === a(o, g) || l(o, v, g);
    for (let t = c, i = c; t <= d; ++t)
      (m = e[t % r]),
        m.skip ||
          ((g = h(m[n])),
          g !== v &&
            ((b = l(g, s, o)),
            null === y && x() && (y = 0 === a(g, s) ? t : i),
            null !== y &&
              _() &&
              (p.push(bi({ start: y, end: t, loop: u, count: r, style: f })),
              (y = null)),
            (i = t),
            (v = g)));
    return (
      null !== y &&
        p.push(bi({ start: y, end: d, loop: u, count: r, style: f })),
      p
    );
  }
  function xi(t, e) {
    const i = [],
      n = t.segments;
    for (let s = 0; s < n.length; s++) {
      const o = yi(n[s], t.points, e);
      o.length && i.push(...o);
    }
    return i;
  }
  function _i(t, e, i, n) {
    return n && n.setContext && i
      ? (function (t, e, i, n) {
          const s = t._chart.getContext(),
            o = wi(t.options),
            {
              _datasetIndex: r,
              options: { spanGaps: a },
            } = t,
            l = i.length,
            h = [];
          let c = o,
            d = e[0].start,
            u = d;
          function f(t, e, n, s) {
            const o = a ? -1 : 1;
            if (t !== e) {
              for (t += l; i[t % l].skip; ) t -= o;
              for (; i[e % l].skip; ) e += o;
              t % l != e % l &&
                (h.push({ start: t % l, end: e % l, loop: n, style: s }),
                (c = s),
                (d = e % l));
            }
          }
          for (const t of e) {
            d = a ? d : t.start;
            let e,
              o = i[d % l];
            for (u = d + 1; u <= t.end; u++) {
              const a = i[u % l];
              (e = wi(
                n.setContext(
                  Oe(s, {
                    type: "segment",
                    p0: o,
                    p1: a,
                    p0DataIndex: (u - 1) % l,
                    p1DataIndex: u % l,
                    datasetIndex: r,
                  })
                )
              )),
                ki(e, c) && f(d, u - 1, t.loop, c),
                (o = a),
                (c = e);
            }
            d < u - 1 && f(d, u - 1, t.loop, c);
          }
          return h;
        })(t, e, i, n)
      : e;
  }
  function wi(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor,
    };
  }
  function ki(t, e) {
    if (!e) return !1;
    const i = [],
      n = function (t, e) {
        return Vt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e;
      };
    return JSON.stringify(t, n) !== JSON.stringify(e, n);
  }
  /*!
   * Chart.js v4.4.1
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   */ class Ci {
    constructor() {
      (this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0);
    }
    _notify(t, e, i, n) {
      const s = e.listeners[n],
        o = e.duration;
      s.forEach((n) =>
        n({
          chart: t,
          initial: e.initial,
          numSteps: o,
          currentStep: Math.min(i - e.start, o),
        })
      );
    }
    _refresh() {
      this._request ||
        ((this._running = !0),
        (this._request = Rt.call(window, () => {
          this._update(),
            (this._request = null),
            this._running && this._refresh();
        })));
    }
    _update(t = Date.now()) {
      let e = 0;
      this._charts.forEach((i, n) => {
        if (!i.running || !i.items.length) return;
        const s = i.items;
        let o,
          r = s.length - 1,
          a = !1;
        for (; r >= 0; --r)
          (o = s[r]),
            o._active
              ? (o._total > i.duration && (i.duration = o._total),
                o.tick(t),
                (a = !0))
              : ((s[r] = s[s.length - 1]), s.pop());
        a && (n.draw(), this._notify(n, i, t, "progress")),
          s.length ||
            ((i.running = !1),
            this._notify(n, i, t, "complete"),
            (i.initial = !1)),
          (e += s.length);
      }),
        (this._lastDate = t),
        0 === e && (this._running = !1);
    }
    _getAnims(t) {
      const e = this._charts;
      let i = e.get(t);
      return (
        i ||
          ((i = {
            running: !1,
            initial: !0,
            items: [],
            listeners: { complete: [], progress: [] },
          }),
          e.set(t, i)),
        i
      );
    }
    listen(t, e, i) {
      this._getAnims(t).listeners[e].push(i);
    }
    add(t, e) {
      e && e.length && this._getAnims(t).items.push(...e);
    }
    has(t) {
      return this._getAnims(t).items.length > 0;
    }
    start(t) {
      const e = this._charts.get(t);
      e &&
        ((e.running = !0),
        (e.start = Date.now()),
        (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
        this._refresh());
    }
    running(t) {
      if (!this._running) return !1;
      const e = this._charts.get(t);
      return !!(e && e.running && e.items.length);
    }
    stop(t) {
      const e = this._charts.get(t);
      if (!e || !e.items.length) return;
      const i = e.items;
      let n = i.length - 1;
      for (; n >= 0; --n) i[n].cancel();
      (e.items = []), this._notify(t, e, Date.now(), "complete");
    }
    remove(t) {
      return this._charts.delete(t);
    }
  }
  var Si = new Ci();
  const Mi = "transparent",
    Ai = {
      boolean: (t, e, i) => (i > 0.5 ? e : t),
      color(t, e, i) {
        const n = Ht(t || Mi),
          s = n.valid && Ht(e || Mi);
        return s && s.valid ? s.mix(n, i).hexString() : e;
      },
      number: (t, e, i) => t + (e - t) * i,
    };
  class Di {
    constructor(t, e, i, n) {
      const s = e[i];
      n = Te([t.to, n, s, t.from]);
      const o = Te([t.from, s, n]);
      (this._active = !0),
        (this._fn = t.fn || Ai[t.type || typeof o]),
        (this._easing = Bt[t.easing] || Bt.linear),
        (this._start = Math.floor(Date.now() + (t.delay || 0))),
        (this._duration = this._total = Math.floor(t.duration)),
        (this._loop = !!t.loop),
        (this._target = e),
        (this._prop = i),
        (this._from = o),
        (this._to = n),
        (this._promises = void 0);
    }
    active() {
      return this._active;
    }
    update(t, e, i) {
      if (this._active) {
        this._notify(!1);
        const n = this._target[this._prop],
          s = i - this._start,
          o = this._duration - s;
        (this._start = i),
          (this._duration = Math.floor(Math.max(o, t.duration))),
          (this._total += s),
          (this._loop = !!t.loop),
          (this._to = Te([t.to, e, n, t.from])),
          (this._from = Te([t.from, n, e]));
      }
    }
    cancel() {
      this._active &&
        (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(t) {
      const e = t - this._start,
        i = this._duration,
        n = this._prop,
        s = this._from,
        o = this._loop,
        r = this._to;
      let a;
      if (((this._active = s !== r && (o || e < i)), !this._active))
        return (this._target[n] = r), void this._notify(!0);
      e < 0
        ? (this._target[n] = s)
        : ((a = (e / i) % 2),
          (a = o && a > 1 ? 2 - a : a),
          (a = this._easing(Math.min(1, Math.max(0, a)))),
          (this._target[n] = this._fn(s, r, a)));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((e, i) => {
        t.push({ res: e, rej: i });
      });
    }
    _notify(t) {
      const e = t ? "res" : "rej",
        i = this._promises || [];
      for (let t = 0; t < i.length; t++) i[t][e]();
    }
  }
  class Ti {
    constructor(t, e) {
      (this._chart = t), (this._properties = new Map()), this.configure(e);
    }
    configure(t) {
      if (!z(t)) return;
      const e = Object.keys(se.animation),
        i = this._properties;
      Object.getOwnPropertyNames(t).forEach((n) => {
        const s = t[n];
        if (!z(s)) return;
        const o = {};
        for (const t of e) o[t] = s[t];
        ((N(s.properties) && s.properties) || [n]).forEach((t) => {
          (t !== n && i.has(t)) || i.set(t, o);
        });
      });
    }
    _animateOptions(t, e) {
      const i = e.options,
        n = (function (t, e) {
          if (!e) return;
          let i = t.options;
          if (!i) return void (t.options = e);
          i.$shared &&
            (t.options = i =
              Object.assign({}, i, { $shared: !1, $animations: {} }));
          return i;
        })(t, i);
      if (!n) return [];
      const s = this._createAnimations(n, i);
      return (
        i.$shared &&
          (function (t, e) {
            const i = [],
              n = Object.keys(e);
            for (let e = 0; e < n.length; e++) {
              const s = t[n[e]];
              s && s.active() && i.push(s.wait());
            }
            return Promise.all(i);
          })(t.options.$animations, i).then(
            () => {
              t.options = i;
            },
            () => {}
          ),
        s
      );
    }
    _createAnimations(t, e) {
      const i = this._properties,
        n = [],
        s = t.$animations || (t.$animations = {}),
        o = Object.keys(e),
        r = Date.now();
      let a;
      for (a = o.length - 1; a >= 0; --a) {
        const l = o[a];
        if ("$" === l.charAt(0)) continue;
        if ("options" === l) {
          n.push(...this._animateOptions(t, e));
          continue;
        }
        const h = e[l];
        let c = s[l];
        const d = i.get(l);
        if (c) {
          if (d && c.active()) {
            c.update(d, h, r);
            continue;
          }
          c.cancel();
        }
        d && d.duration
          ? ((s[l] = c = new Di(d, t, l, h)), n.push(c))
          : (t[l] = h);
      }
      return n;
    }
    update(t, e) {
      if (0 === this._properties.size) return void Object.assign(t, e);
      const i = this._createAnimations(t, e);
      return i.length ? (Si.add(this._chart, i), !0) : void 0;
    }
  }
  function Oi(t, e) {
    const i = (t && t.options) || {},
      n = i.reverse,
      s = void 0 === i.min ? e : 0,
      o = void 0 === i.max ? e : 0;
    return { start: n ? o : s, end: n ? s : o };
  }
  function Pi(t, e) {
    const i = [],
      n = t._getSortedDatasetMetas(e);
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) i.push(n[s].index);
    return i;
  }
  function Ei(t, e, i, n = {}) {
    const s = t.keys,
      o = "single" === n.mode;
    let r, a, l, h;
    if (null !== e) {
      for (r = 0, a = s.length; r < a; ++r) {
        if (((l = +s[r]), l === i)) {
          if (n.all) continue;
          break;
        }
        (h = t.values[l]),
          $(h) && (o || 0 === e || ft(e) === ft(h)) && (e += h);
      }
      return e;
    }
  }
  function Li(t, e) {
    const i = t && t.options.stacked;
    return i || (void 0 === i && void 0 !== e.stack);
  }
  function Ri(t, e, i) {
    const n = t[e] || (t[e] = {});
    return n[i] || (n[i] = {});
  }
  function Ii(t, e, i, n) {
    for (const s of e.getMatchingVisibleMetas(n).reverse()) {
      const e = t[s.index];
      if ((i && e > 0) || (!i && e < 0)) return s.index;
    }
    return null;
  }
  function Fi(t, e) {
    const { chart: i, _cachedMeta: n } = t,
      s = i._stacks || (i._stacks = {}),
      { iScale: o, vScale: r, index: a } = n,
      l = o.axis,
      h = r.axis,
      c = (function (t, e, i) {
        return `${t.id}.${e.id}.${i.stack || i.type}`;
      })(o, r, n),
      d = e.length;
    let u;
    for (let t = 0; t < d; ++t) {
      const i = e[t],
        { [l]: o, [h]: d } = i;
      (u = (i._stacks || (i._stacks = {}))[h] = Ri(s, c, o)),
        (u[a] = d),
        (u._top = Ii(u, r, !0, n.type)),
        (u._bottom = Ii(u, r, !1, n.type));
      (u._visualValues || (u._visualValues = {}))[a] = d;
    }
  }
  function Ni(t, e) {
    const i = t.scales;
    return Object.keys(i)
      .filter((t) => i[t].axis === e)
      .shift();
  }
  function zi(t, e) {
    const i = t.controller.index,
      n = t.vScale && t.vScale.axis;
    if (n) {
      e = e || t._parsed;
      for (const t of e) {
        const e = t._stacks;
        if (!e || void 0 === e[n] || void 0 === e[n][i]) return;
        delete e[n][i],
          void 0 !== e[n]._visualValues &&
            void 0 !== e[n]._visualValues[i] &&
            delete e[n]._visualValues[i];
      }
    }
  }
  const $i = (t) => "reset" === t || "none" === t,
    ji = (t, e) => (e ? t : Object.assign({}, t));
  class Yi {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(t, e) {
      (this.chart = t),
        (this._ctx = t.ctx),
        (this.index = e),
        (this._cachedDataOpts = {}),
        (this._cachedMeta = this.getMeta()),
        (this._type = this._cachedMeta.type),
        (this.options = void 0),
        (this._parsing = !1),
        (this._data = void 0),
        (this._objectData = void 0),
        (this._sharedOptions = void 0),
        (this._drawStart = void 0),
        (this._drawCount = void 0),
        (this.enableOptionSharing = !1),
        (this.supportsDecimation = !1),
        (this.$context = void 0),
        (this._syncList = []),
        (this.datasetElementType = new.target.datasetElementType),
        (this.dataElementType = new.target.dataElementType),
        this.initialize();
    }
    initialize() {
      const t = this._cachedMeta;
      this.configure(),
        this.linkScales(),
        (t._stacked = Li(t.vScale, t)),
        this.addElements(),
        this.options.fill &&
          !this.chart.isPluginEnabled("filler") &&
          console.warn(
            "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
          );
    }
    updateIndex(t) {
      this.index !== t && zi(this._cachedMeta), (this.index = t);
    }
    linkScales() {
      const t = this.chart,
        e = this._cachedMeta,
        i = this.getDataset(),
        n = (t, e, i, n) => ("x" === t ? e : "r" === t ? n : i),
        s = (e.xAxisID = Y(i.xAxisID, Ni(t, "x"))),
        o = (e.yAxisID = Y(i.yAxisID, Ni(t, "y"))),
        r = (e.rAxisID = Y(i.rAxisID, Ni(t, "r"))),
        a = e.indexAxis,
        l = (e.iAxisID = n(a, s, o, r)),
        h = (e.vAxisID = n(a, o, s, r));
      (e.xScale = this.getScaleForId(s)),
        (e.yScale = this.getScaleForId(o)),
        (e.rScale = this.getScaleForId(r)),
        (e.iScale = this.getScaleForId(l)),
        (e.vScale = this.getScaleForId(h));
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
      return this.chart.scales[t];
    }
    _getOtherScale(t) {
      const e = this._cachedMeta;
      return t === e.iScale ? e.vScale : e.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const t = this._cachedMeta;
      this._data && Et(this._data, this), t._stacked && zi(t);
    }
    _dataCheck() {
      const t = this.getDataset(),
        e = t.data || (t.data = []),
        i = this._data;
      if (z(e))
        this._data = (function (t) {
          const e = Object.keys(t),
            i = new Array(e.length);
          let n, s, o;
          for (n = 0, s = e.length; n < s; ++n)
            (o = e[n]), (i[n] = { x: o, y: t[o] });
          return i;
        })(e);
      else if (i !== e) {
        if (i) {
          Et(i, this);
          const t = this._cachedMeta;
          zi(t), (t._parsed = []);
        }
        e &&
          Object.isExtensible(e) &&
          ((s = this),
          (n = e)._chartjs
            ? n._chartjs.listeners.push(s)
            : (Object.defineProperty(n, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: { listeners: [s] },
              }),
              Pt.forEach((t) => {
                const e = "_onData" + tt(t),
                  i = n[t];
                Object.defineProperty(n, t, {
                  configurable: !0,
                  enumerable: !1,
                  value(...t) {
                    const s = i.apply(this, t);
                    return (
                      n._chartjs.listeners.forEach((i) => {
                        "function" == typeof i[e] && i[e](...t);
                      }),
                      s
                    );
                  },
                });
              }))),
          (this._syncList = []),
          (this._data = e);
      }
      var n, s;
    }
    addElements() {
      const t = this._cachedMeta;
      this._dataCheck(),
        this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
      const e = this._cachedMeta,
        i = this.getDataset();
      let n = !1;
      this._dataCheck();
      const s = e._stacked;
      (e._stacked = Li(e.vScale, e)),
        e.stack !== i.stack && ((n = !0), zi(e), (e.stack = i.stack)),
        this._resyncElements(t),
        (n || s !== e._stacked) && Fi(this, e._parsed);
    }
    configure() {
      const t = this.chart.config,
        e = t.datasetScopeKeys(this._type),
        i = t.getOptionScopes(this.getDataset(), e, !0);
      (this.options = t.createResolver(i, this.getContext())),
        (this._parsing = this.options.parsing),
        (this._cachedDataOpts = {});
    }
    parse(t, e) {
      const { _cachedMeta: i, _data: n } = this,
        { iScale: s, _stacked: o } = i,
        r = s.axis;
      let a,
        l,
        h,
        c = (0 === t && e === n.length) || i._sorted,
        d = t > 0 && i._parsed[t - 1];
      if (!1 === this._parsing) (i._parsed = n), (i._sorted = !0), (h = n);
      else {
        h = N(n[t])
          ? this.parseArrayData(i, n, t, e)
          : z(n[t])
          ? this.parseObjectData(i, n, t, e)
          : this.parsePrimitiveData(i, n, t, e);
        const s = () => null === l[r] || (d && l[r] < d[r]);
        for (a = 0; a < e; ++a)
          (i._parsed[a + t] = l = h[a]), c && (s() && (c = !1), (d = l));
        i._sorted = c;
      }
      o && Fi(this, h);
    }
    parsePrimitiveData(t, e, i, n) {
      const { iScale: s, vScale: o } = t,
        r = s.axis,
        a = o.axis,
        l = s.getLabels(),
        h = s === o,
        c = new Array(n);
      let d, u, f;
      for (d = 0, u = n; d < u; ++d)
        (f = d + i),
          (c[d] = { [r]: h || s.parse(l[f], f), [a]: o.parse(e[f], f) });
      return c;
    }
    parseArrayData(t, e, i, n) {
      const { xScale: s, yScale: o } = t,
        r = new Array(n);
      let a, l, h, c;
      for (a = 0, l = n; a < l; ++a)
        (h = a + i),
          (c = e[h]),
          (r[a] = { x: s.parse(c[0], h), y: o.parse(c[1], h) });
      return r;
    }
    parseObjectData(t, e, i, n) {
      const { xScale: s, yScale: o } = t,
        { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
        l = new Array(n);
      let h, c, d, u;
      for (h = 0, c = n; h < c; ++h)
        (d = h + i),
          (u = e[d]),
          (l[h] = { x: s.parse(Q(u, r), d), y: o.parse(Q(u, a), d) });
      return l;
    }
    getParsed(t) {
      return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
      return this._cachedMeta.data[t];
    }
    applyStack(t, e, i) {
      const n = this.chart,
        s = this._cachedMeta,
        o = e[t.axis];
      return Ei(
        { keys: Pi(n, !0), values: e._stacks[t.axis]._visualValues },
        o,
        s.index,
        { mode: i }
      );
    }
    updateRangeFromParsed(t, e, i, n) {
      const s = i[e.axis];
      let o = null === s ? NaN : s;
      const r = n && i._stacks[e.axis];
      n && r && ((n.values = r), (o = Ei(n, s, this._cachedMeta.index))),
        (t.min = Math.min(t.min, o)),
        (t.max = Math.max(t.max, o));
    }
    getMinMax(t, e) {
      const i = this._cachedMeta,
        n = i._parsed,
        s = i._sorted && t === i.iScale,
        o = n.length,
        r = this._getOtherScale(t),
        a = ((t, e, i) =>
          t && !e.hidden && e._stacked && { keys: Pi(i, !0), values: null })(
          e,
          i,
          this.chart
        ),
        l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: h, max: c } = (function (t) {
          const {
            min: e,
            max: i,
            minDefined: n,
            maxDefined: s,
          } = t.getUserBounds();
          return {
            min: n ? e : Number.NEGATIVE_INFINITY,
            max: s ? i : Number.POSITIVE_INFINITY,
          };
        })(r);
      let d, u;
      function f() {
        u = n[d];
        const e = u[r.axis];
        return !$(u[t.axis]) || h > e || c < e;
      }
      for (
        d = 0;
        d < o && (f() || (this.updateRangeFromParsed(l, t, u, a), !s));
        ++d
      );
      if (s)
        for (d = o - 1; d >= 0; --d)
          if (!f()) {
            this.updateRangeFromParsed(l, t, u, a);
            break;
          }
      return l;
    }
    getAllParsedValues(t) {
      const e = this._cachedMeta._parsed,
        i = [];
      let n, s, o;
      for (n = 0, s = e.length; n < s; ++n)
        (o = e[n][t.axis]), $(o) && i.push(o);
      return i;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = e.iScale,
        n = e.vScale,
        s = this.getParsed(t);
      return {
        label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
        value: n ? "" + n.getLabelForValue(s[n.axis]) : "",
      };
    }
    _update(t) {
      const e = this._cachedMeta;
      this.update(t || "default"),
        (e._clip = (function (t) {
          let e, i, n, s;
          return (
            z(t)
              ? ((e = t.top), (i = t.right), (n = t.bottom), (s = t.left))
              : (e = i = n = s = t),
            { top: e, right: i, bottom: n, left: s, disabled: !1 === t }
          );
        })(
          Y(
            this.options.clip,
            (function (t, e, i) {
              if (!1 === i) return !1;
              const n = Oi(t, i),
                s = Oi(e, i);
              return {
                top: s.end,
                right: n.end,
                bottom: s.start,
                left: n.start,
              };
            })(e.xScale, e.yScale, this.getMaxOverflow())
          )
        ));
    }
    update(t) {}
    draw() {
      const t = this._ctx,
        e = this.chart,
        i = this._cachedMeta,
        n = i.data || [],
        s = e.chartArea,
        o = [],
        r = this._drawStart || 0,
        a = this._drawCount || n.length - r,
        l = this.options.drawActiveElementsOnTop;
      let h;
      for (i.dataset && i.dataset.draw(t, s, r, a), h = r; h < r + a; ++h) {
        const e = n[h];
        e.hidden || (e.active && l ? o.push(e) : e.draw(t, s));
      }
      for (h = 0; h < o.length; ++h) o[h].draw(t, s);
    }
    getStyle(t, e) {
      const i = e ? "active" : "default";
      return void 0 === t && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(i)
        : this.resolveDataElementOptions(t || 0, i);
    }
    getContext(t, e, i) {
      const n = this.getDataset();
      let s;
      if (t >= 0 && t < this._cachedMeta.data.length) {
        const e = this._cachedMeta.data[t];
        (s =
          e.$context ||
          (e.$context = (function (t, e, i) {
            return Oe(t, {
              active: !1,
              dataIndex: e,
              parsed: void 0,
              raw: void 0,
              element: i,
              index: e,
              mode: "default",
              type: "data",
            });
          })(this.getContext(), t, e))),
          (s.parsed = this.getParsed(t)),
          (s.raw = n.data[t]),
          (s.index = s.dataIndex = t);
      } else
        (s =
          this.$context ||
          (this.$context = (function (t, e) {
            return Oe(t, {
              active: !1,
              dataset: void 0,
              datasetIndex: e,
              index: e,
              mode: "default",
              type: "dataset",
            });
          })(this.chart.getContext(), this.index))),
          (s.dataset = n),
          (s.index = s.datasetIndex = this.index);
      return (s.active = !!e), (s.mode = i), s;
    }
    resolveDatasetElementOptions(t) {
      return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
      return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t, e = "default", i) {
      const n = "active" === e,
        s = this._cachedDataOpts,
        o = t + "-" + e,
        r = s[o],
        a = this.enableOptionSharing && et(i);
      if (r) return ji(r, a);
      const l = this.chart.config,
        h = l.datasetElementScopeKeys(this._type, t),
        c = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
        d = l.getOptionScopes(this.getDataset(), h),
        u = Object.keys(se.elements[t]),
        f = l.resolveNamedOptions(d, u, () => this.getContext(i, n, e), c);
      return (
        f.$shared && ((f.$shared = a), (s[o] = Object.freeze(ji(f, a)))), f
      );
    }
    _resolveAnimations(t, e, i) {
      const n = this.chart,
        s = this._cachedDataOpts,
        o = `animation-${e}`,
        r = s[o];
      if (r) return r;
      let a;
      if (!1 !== n.options.animation) {
        const n = this.chart.config,
          s = n.datasetAnimationScopeKeys(this._type, e),
          o = n.getOptionScopes(this.getDataset(), s);
        a = n.createResolver(o, this.getContext(t, i, e));
      }
      const l = new Ti(n, a && a.animations);
      return a && a._cacheable && (s[o] = Object.freeze(l)), l;
    }
    getSharedOptions(t) {
      if (t.$shared)
        return (
          this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        );
    }
    includeOptions(t, e) {
      return !e || $i(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
      const i = this.resolveDataElementOptions(t, e),
        n = this._sharedOptions,
        s = this.getSharedOptions(i),
        o = this.includeOptions(e, s) || s !== n;
      return (
        this.updateSharedOptions(s, e, i),
        { sharedOptions: s, includeOptions: o }
      );
    }
    updateElement(t, e, i, n) {
      $i(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i);
    }
    updateSharedOptions(t, e, i) {
      t && !$i(e) && this._resolveAnimations(void 0, e).update(t, i);
    }
    _setStyle(t, e, i, n) {
      t.active = n;
      const s = this.getStyle(e, n);
      this._resolveAnimations(e, i, n).update(t, {
        options: (!n && this.getSharedOptions(s)) || s,
      });
    }
    removeHoverStyle(t, e, i) {
      this._setStyle(t, i, "active", !1);
    }
    setHoverStyle(t, e, i) {
      this._setStyle(t, i, "active", !0);
    }
    _removeDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !1);
    }
    _setDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !0);
    }
    _resyncElements(t) {
      const e = this._data,
        i = this._cachedMeta.data;
      for (const [t, e, i] of this._syncList) this[t](e, i);
      this._syncList = [];
      const n = i.length,
        s = e.length,
        o = Math.min(s, n);
      o && this.parse(0, o),
        s > n
          ? this._insertElements(n, s - n, t)
          : s < n && this._removeElements(s, n - s);
    }
    _insertElements(t, e, i = !0) {
      const n = this._cachedMeta,
        s = n.data,
        o = t + e;
      let r;
      const a = (t) => {
        for (t.length += e, r = t.length - 1; r >= o; r--) t[r] = t[r - e];
      };
      for (a(s), r = t; r < o; ++r) s[r] = new this.dataElementType();
      this._parsing && a(n._parsed),
        this.parse(t, e),
        i && this.updateElements(s, t, e, "reset");
    }
    updateElements(t, e, i, n) {}
    _removeElements(t, e) {
      const i = this._cachedMeta;
      if (this._parsing) {
        const n = i._parsed.splice(t, e);
        i._stacked && zi(i, n);
      }
      i.data.splice(t, e);
    }
    _sync(t) {
      if (this._parsing) this._syncList.push(t);
      else {
        const [e, i, n] = t;
        this[e](i, n);
      }
      this.chart._dataChanges.push([this.index, ...t]);
    }
    _onDataPush() {
      const t = arguments.length;
      this._sync(["_insertElements", this.getDataset().data.length - t, t]);
    }
    _onDataPop() {
      this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(["_removeElements", 0, 1]);
    }
    _onDataSplice(t, e) {
      e && this._sync(["_removeElements", t, e]);
      const i = arguments.length - 2;
      i && this._sync(["_insertElements", t, i]);
    }
    _onDataUnshift() {
      this._sync(["_insertElements", 0, arguments.length]);
    }
  }
  function Wi(t) {
    const e = t.iScale,
      i = (function (t, e) {
        if (!t._cache.$bar) {
          const i = t.getMatchingVisibleMetas(e);
          let n = [];
          for (let e = 0, s = i.length; e < s; e++)
            n = n.concat(i[e].controller.getAllParsedValues(t));
          t._cache.$bar = Lt(n.sort((t, e) => t - e));
        }
        return t._cache.$bar;
      })(e, t.type);
    let n,
      s,
      o,
      r,
      a = e._length;
    const l = () => {
      32767 !== o &&
        -32768 !== o &&
        (et(r) && (a = Math.min(a, Math.abs(o - r) || a)), (r = o));
    };
    for (n = 0, s = i.length; n < s; ++n) (o = e.getPixelForValue(i[n])), l();
    for (r = void 0, n = 0, s = e.ticks.length; n < s; ++n)
      (o = e.getPixelForTick(n)), l();
    return a;
  }
  function Bi(t, e, i, n) {
    return (
      N(t)
        ? (function (t, e, i, n) {
            const s = i.parse(t[0], n),
              o = i.parse(t[1], n),
              r = Math.min(s, o),
              a = Math.max(s, o);
            let l = r,
              h = a;
            Math.abs(r) > Math.abs(a) && ((l = a), (h = r)),
              (e[i.axis] = h),
              (e._custom = {
                barStart: l,
                barEnd: h,
                start: s,
                end: o,
                min: r,
                max: a,
              });
          })(t, e, i, n)
        : (e[i.axis] = i.parse(t, n)),
      e
    );
  }
  function Vi(t, e, i, n) {
    const s = t.iScale,
      o = t.vScale,
      r = s.getLabels(),
      a = s === o,
      l = [];
    let h, c, d, u;
    for (h = i, c = i + n; h < c; ++h)
      (u = e[h]),
        (d = {}),
        (d[s.axis] = a || s.parse(r[h], h)),
        l.push(Bi(u, d, o, h));
    return l;
  }
  function Hi(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }
  function Ui(t, e, i, n) {
    let s = e.borderSkipped;
    const o = {};
    if (!s) return void (t.borderSkipped = o);
    if (!0 === s)
      return void (t.borderSkipped = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
      });
    const {
      start: r,
      end: a,
      reverse: l,
      top: h,
      bottom: c,
    } = (function (t) {
      let e, i, n, s, o;
      return (
        t.horizontal
          ? ((e = t.base > t.x), (i = "left"), (n = "right"))
          : ((e = t.base < t.y), (i = "bottom"), (n = "top")),
        e ? ((s = "end"), (o = "start")) : ((s = "start"), (o = "end")),
        { start: i, end: n, reverse: e, top: s, bottom: o }
      );
    })(t);
    "middle" === s &&
      i &&
      ((t.enableBorderRadius = !0),
      (i._top || 0) === n
        ? (s = h)
        : (i._bottom || 0) === n
        ? (s = c)
        : ((o[Gi(c, r, a, l)] = !0), (s = h))),
      (o[Gi(s, r, a, l)] = !0),
      (t.borderSkipped = o);
  }
  function Gi(t, e, i, n) {
    var s, o, r;
    return (
      n
        ? ((r = i),
          (t = Ki((t = (s = t) === (o = e) ? r : s === r ? o : s), i, e)))
        : (t = Ki(t, e, i)),
      t
    );
  }
  function Ki(t, e, i) {
    return "start" === t ? e : "end" === t ? i : t;
  }
  function qi(t, { inflateAmount: e }, i) {
    t.inflateAmount = "auto" === e ? (1 === i ? 0.33 : 0) : e;
  }
  class Xi extends Yi {
    static id = "doughnut";
    static defaults = {
      datasetElementType: !1,
      dataElementType: "arc",
      animation: { animateRotate: !0, animateScale: !1 },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "circumference",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "startAngle",
            "x",
            "y",
            "offset",
            "borderWidth",
            "spacing",
          ],
        },
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      spacing: 0,
      indexAxis: "r",
    };
    static descriptors = {
      _scriptable: (t) => "spacing" !== t,
      _indexable: (t) =>
        "spacing" !== t &&
        !t.startsWith("borderDash") &&
        !t.startsWith("hoverBorderDash"),
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const {
                  labels: { pointStyle: i, color: n },
                } = t.legend.options;
                return e.labels.map((e, s) => {
                  const o = t.getDatasetMeta(0).controller.getStyle(s);
                  return {
                    text: e,
                    fillStyle: o.backgroundColor,
                    strokeStyle: o.borderColor,
                    fontColor: n,
                    lineWidth: o.borderWidth,
                    pointStyle: i,
                    hidden: !t.getDataVisibility(s),
                    index: s,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          },
        },
      },
    };
    constructor(t, e) {
      super(t, e),
        (this.enableOptionSharing = !0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.offsetX = void 0),
        (this.offsetY = void 0);
    }
    linkScales() {}
    parse(t, e) {
      const i = this.getDataset().data,
        n = this._cachedMeta;
      if (!1 === this._parsing) n._parsed = i;
      else {
        let s,
          o,
          r = (t) => +i[t];
        if (z(i[t])) {
          const { key: t = "value" } = this._parsing;
          r = (e) => +Q(i[e], t);
        }
        for (s = t, o = t + e; s < o; ++s) n._parsed[s] = r(s);
      }
    }
    _getRotation() {
      return bt(this.options.rotation - 90);
    }
    _getCircumference() {
      return bt(this.options.circumference);
    }
    _getRotationExtents() {
      let t = ot,
        e = -ot;
      for (let i = 0; i < this.chart.data.datasets.length; ++i)
        if (
          this.chart.isDatasetVisible(i) &&
          this.chart.getDatasetMeta(i).type === this._type
        ) {
          const n = this.chart.getDatasetMeta(i).controller,
            s = n._getRotation(),
            o = n._getCircumference();
          (t = Math.min(t, s)), (e = Math.max(e, s + o));
        }
      return { rotation: t, circumference: e - t };
    }
    update(t) {
      const e = this.chart,
        { chartArea: i } = e,
        n = this._cachedMeta,
        s = n.data,
        o =
          this.getMaxBorderWidth() +
          this.getMaxOffset(s) +
          this.options.spacing,
        r = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
        a = Math.min(
          ((l = this.options.cutout),
          (h = r),
          "string" == typeof l && l.endsWith("%")
            ? parseFloat(l) / 100
            : +l / h),
          1
        );
      var l, h;
      const c = this._getRingWeight(this.index),
        { circumference: d, rotation: u } = this._getRotationExtents(),
        {
          ratioX: f,
          ratioY: p,
          offsetX: g,
          offsetY: m,
        } = (function (t, e, i) {
          let n = 1,
            s = 1,
            o = 0,
            r = 0;
          if (e < ot) {
            const a = t,
              l = a + e,
              h = Math.cos(a),
              c = Math.sin(a),
              d = Math.cos(l),
              u = Math.sin(l),
              f = (t, e, n) =>
                St(t, a, l, !0) ? 1 : Math.max(e, e * i, n, n * i),
              p = (t, e, n) =>
                St(t, a, l, !0) ? -1 : Math.min(e, e * i, n, n * i),
              g = f(0, h, d),
              m = f(ht, c, u),
              v = p(st, h, d),
              b = p(st + ht, c, u);
            (n = (g - v) / 2),
              (s = (m - b) / 2),
              (o = -(g + v) / 2),
              (r = -(m + b) / 2);
          }
          return { ratioX: n, ratioY: s, offsetX: o, offsetY: r };
        })(u, d, a),
        v = (i.width - o) / f,
        b = (i.height - o) / p,
        y = Math.max(Math.min(v, b) / 2, 0),
        x = W(this.options.radius, y),
        _ = (x - Math.max(x * a, 0)) / this._getVisibleDatasetWeightTotal();
      (this.offsetX = g * x),
        (this.offsetY = m * x),
        (n.total = this.calculateTotal()),
        (this.outerRadius = x - _ * this._getRingWeightOffset(this.index)),
        (this.innerRadius = Math.max(this.outerRadius - _ * c, 0)),
        this.updateElements(s, 0, s.length, t);
    }
    _circumference(t, e) {
      const i = this.options,
        n = this._cachedMeta,
        s = this._getCircumference();
      return (e && i.animation.animateRotate) ||
        !this.chart.getDataVisibility(t) ||
        null === n._parsed[t] ||
        n.data[t].hidden
        ? 0
        : this.calculateCircumference((n._parsed[t] * s) / ot);
    }
    updateElements(t, e, i, n) {
      const s = "reset" === n,
        o = this.chart,
        r = o.chartArea,
        a = o.options.animation,
        l = (r.left + r.right) / 2,
        h = (r.top + r.bottom) / 2,
        c = s && a.animateScale,
        d = c ? 0 : this.innerRadius,
        u = c ? 0 : this.outerRadius,
        { sharedOptions: f, includeOptions: p } = this._getSharedOptions(e, n);
      let g,
        m = this._getRotation();
      for (g = 0; g < e; ++g) m += this._circumference(g, s);
      for (g = e; g < e + i; ++g) {
        const e = this._circumference(g, s),
          i = t[g],
          o = {
            x: l + this.offsetX,
            y: h + this.offsetY,
            startAngle: m,
            endAngle: m + e,
            circumference: e,
            outerRadius: u,
            innerRadius: d,
          };
        p &&
          (o.options =
            f || this.resolveDataElementOptions(g, i.active ? "active" : n)),
          (m += e),
          this.updateElement(i, g, o, n);
      }
    }
    calculateTotal() {
      const t = this._cachedMeta,
        e = t.data;
      let i,
        n = 0;
      for (i = 0; i < e.length; i++) {
        const s = t._parsed[i];
        null === s ||
          isNaN(s) ||
          !this.chart.getDataVisibility(i) ||
          e[i].hidden ||
          (n += Math.abs(s));
      }
      return n;
    }
    calculateCircumference(t) {
      const e = this._cachedMeta.total;
      return e > 0 && !isNaN(t) ? ot * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart,
        n = i.data.labels || [],
        s = Xt(e._parsed[t], i.options.locale);
      return { label: n[t] || "", value: s };
    }
    getMaxBorderWidth(t) {
      let e = 0;
      const i = this.chart;
      let n, s, o, r, a;
      if (!t)
        for (n = 0, s = i.data.datasets.length; n < s; ++n)
          if (i.isDatasetVisible(n)) {
            (o = i.getDatasetMeta(n)), (t = o.data), (r = o.controller);
            break;
          }
      if (!t) return 0;
      for (n = 0, s = t.length; n < s; ++n)
        (a = r.resolveDataElementOptions(n)),
          "inner" !== a.borderAlign &&
            (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
      return e;
    }
    getMaxOffset(t) {
      let e = 0;
      for (let i = 0, n = t.length; i < n; ++i) {
        const t = this.resolveDataElementOptions(i);
        e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
      }
      return e;
    }
    _getRingWeightOffset(t) {
      let e = 0;
      for (let i = 0; i < t; ++i)
        this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
      return e;
    }
    _getRingWeight(t) {
      return Math.max(Y(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  class Zi extends Yi {
    static id = "polarArea";
    static defaults = {
      dataElementType: "arc",
      animation: { animateRotate: !0, animateScale: !0 },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
          ],
        },
      },
      indexAxis: "r",
      startAngle: 0,
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const {
                  labels: { pointStyle: i, color: n },
                } = t.legend.options;
                return e.labels.map((e, s) => {
                  const o = t.getDatasetMeta(0).controller.getStyle(s);
                  return {
                    text: e,
                    fillStyle: o.backgroundColor,
                    strokeStyle: o.borderColor,
                    fontColor: n,
                    lineWidth: o.borderWidth,
                    pointStyle: i,
                    hidden: !t.getDataVisibility(s),
                    index: s,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          },
        },
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: { display: !1 },
          beginAtZero: !0,
          grid: { circular: !0 },
          pointLabels: { display: !1 },
          startAngle: 0,
        },
      },
    };
    constructor(t, e) {
      super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart,
        n = i.data.labels || [],
        s = Xt(e._parsed[t].r, i.options.locale);
      return { label: n[t] || "", value: s };
    }
    parseObjectData(t, e, i, n) {
      return Ve.bind(this)(t, e, i, n);
    }
    update(t) {
      const e = this._cachedMeta.data;
      this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    getMinMax() {
      const t = this._cachedMeta,
        e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
      return (
        t.data.forEach((t, i) => {
          const n = this.getParsed(i).r;
          !isNaN(n) &&
            this.chart.getDataVisibility(i) &&
            (n < e.min && (e.min = n), n > e.max && (e.max = n));
        }),
        e
      );
    }
    _updateRadius() {
      const t = this.chart,
        e = t.chartArea,
        i = t.options,
        n = Math.min(e.right - e.left, e.bottom - e.top),
        s = Math.max(n / 2, 0),
        o =
          (s -
            Math.max(
              i.cutoutPercentage ? (s / 100) * i.cutoutPercentage : 1,
              0
            )) /
          t.getVisibleDatasetCount();
      (this.outerRadius = s - o * this.index),
        (this.innerRadius = this.outerRadius - o);
    }
    updateElements(t, e, i, n) {
      const s = "reset" === n,
        o = this.chart,
        r = o.options.animation,
        a = this._cachedMeta.rScale,
        l = a.xCenter,
        h = a.yCenter,
        c = a.getIndexAngle(0) - 0.5 * st;
      let d,
        u = c;
      const f = 360 / this.countVisibleElements();
      for (d = 0; d < e; ++d) u += this._computeAngle(d, n, f);
      for (d = e; d < e + i; d++) {
        const e = t[d];
        let i = u,
          p = u + this._computeAngle(d, n, f),
          g = o.getDataVisibility(d)
            ? a.getDistanceFromCenterForValue(this.getParsed(d).r)
            : 0;
        (u = p),
          s && (r.animateScale && (g = 0), r.animateRotate && (i = p = c));
        const m = {
          x: l,
          y: h,
          innerRadius: 0,
          outerRadius: g,
          startAngle: i,
          endAngle: p,
          options: this.resolveDataElementOptions(d, e.active ? "active" : n),
        };
        this.updateElement(e, d, m, n);
      }
    }
    countVisibleElements() {
      const t = this._cachedMeta;
      let e = 0;
      return (
        t.data.forEach((t, i) => {
          !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++;
        }),
        e
      );
    }
    _computeAngle(t, e, i) {
      return this.chart.getDataVisibility(t)
        ? bt(this.resolveDataElementOptions(t, e).angle || i)
        : 0;
    }
  }
  var Ji = Object.freeze({
    __proto__: null,
    BarController: class extends Yi {
      static id = "bar";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"],
          },
        },
      };
      static overrides = {
        scales: {
          _index_: { type: "category", offset: !0, grid: { offset: !0 } },
          _value_: { type: "linear", beginAtZero: !0 },
        },
      };
      parsePrimitiveData(t, e, i, n) {
        return Vi(t, e, i, n);
      }
      parseArrayData(t, e, i, n) {
        return Vi(t, e, i, n);
      }
      parseObjectData(t, e, i, n) {
        const { iScale: s, vScale: o } = t,
          { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
          l = "x" === s.axis ? r : a,
          h = "x" === o.axis ? r : a,
          c = [];
        let d, u, f, p;
        for (d = i, u = i + n; d < u; ++d)
          (p = e[d]),
            (f = {}),
            (f[s.axis] = s.parse(Q(p, l), d)),
            c.push(Bi(Q(p, h), f, o, d));
        return c;
      }
      updateRangeFromParsed(t, e, i, n) {
        super.updateRangeFromParsed(t, e, i, n);
        const s = i._custom;
        s &&
          e === this._cachedMeta.vScale &&
          ((t.min = Math.min(t.min, s.min)), (t.max = Math.max(t.max, s.max)));
      }
      getMaxOverflow() {
        return 0;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          { iScale: i, vScale: n } = e,
          s = this.getParsed(t),
          o = s._custom,
          r = Hi(o)
            ? "[" + o.start + ", " + o.end + "]"
            : "" + n.getLabelForValue(s[n.axis]);
        return { label: "" + i.getLabelForValue(s[i.axis]), value: r };
      }
      initialize() {
        (this.enableOptionSharing = !0), super.initialize();
        this._cachedMeta.stack = this.getDataset().stack;
      }
      update(t) {
        const e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
      }
      updateElements(t, e, i, n) {
        const s = "reset" === n,
          {
            index: o,
            _cachedMeta: { vScale: r },
          } = this,
          a = r.getBasePixel(),
          l = r.isHorizontal(),
          h = this._getRuler(),
          { sharedOptions: c, includeOptions: d } = this._getSharedOptions(
            e,
            n
          );
        for (let u = e; u < e + i; u++) {
          const e = this.getParsed(u),
            i =
              s || F(e[r.axis])
                ? { base: a, head: a }
                : this._calculateBarValuePixels(u),
            f = this._calculateBarIndexPixels(u, h),
            p = (e._stacks || {})[r.axis],
            g = {
              horizontal: l,
              base: i.base,
              enableBorderRadius:
                !p || Hi(e._custom) || o === p._top || o === p._bottom,
              x: l ? i.head : f.center,
              y: l ? f.center : i.head,
              height: l ? f.size : Math.abs(i.size),
              width: l ? Math.abs(i.size) : f.size,
            };
          d &&
            (g.options =
              c ||
              this.resolveDataElementOptions(u, t[u].active ? "active" : n));
          const m = g.options || t[u].options;
          Ui(g, m, p, o), qi(g, m, h.ratio), this.updateElement(t[u], u, g, n);
        }
      }
      _getStacks(t, e) {
        const { iScale: i } = this._cachedMeta,
          n = i
            .getMatchingVisibleMetas(this._type)
            .filter((t) => t.controller.options.grouped),
          s = i.options.stacked,
          o = [],
          r = (t) => {
            const i = t.controller.getParsed(e),
              n = i && i[t.vScale.axis];
            if (F(n) || isNaN(n)) return !0;
          };
        for (const i of n)
          if (
            (void 0 === e || !r(i)) &&
            ((!1 === s ||
              -1 === o.indexOf(i.stack) ||
              (void 0 === s && void 0 === i.stack)) &&
              o.push(i.stack),
            i.index === t)
          )
            break;
        return o.length || o.push(void 0), o;
      }
      _getStackCount(t) {
        return this._getStacks(void 0, t).length;
      }
      _getStackIndex(t, e, i) {
        const n = this._getStacks(t, i),
          s = void 0 !== e ? n.indexOf(e) : -1;
        return -1 === s ? n.length - 1 : s;
      }
      _getRuler() {
        const t = this.options,
          e = this._cachedMeta,
          i = e.iScale,
          n = [];
        let s, o;
        for (s = 0, o = e.data.length; s < o; ++s)
          n.push(i.getPixelForValue(this.getParsed(s)[i.axis], s));
        const r = t.barThickness;
        return {
          min: r || Wi(e),
          pixels: n,
          start: i._startPixel,
          end: i._endPixel,
          stackCount: this._getStackCount(),
          scale: i,
          grouped: t.grouped,
          ratio: r ? 1 : t.categoryPercentage * t.barPercentage,
        };
      }
      _calculateBarValuePixels(t) {
        const {
            _cachedMeta: { vScale: e, _stacked: i, index: n },
            options: { base: s, minBarLength: o },
          } = this,
          r = s || 0,
          a = this.getParsed(t),
          l = a._custom,
          h = Hi(l);
        let c,
          d,
          u = a[e.axis],
          f = 0,
          p = i ? this.applyStack(e, a, i) : u;
        p !== u && ((f = p - u), (p = u)),
          h &&
            ((u = l.barStart),
            (p = l.barEnd - l.barStart),
            0 !== u && ft(u) !== ft(l.barEnd) && (f = 0),
            (f += u));
        const g = F(s) || h ? f : s;
        let m = e.getPixelForValue(g);
        if (
          ((c = this.chart.getDataVisibility(t)
            ? e.getPixelForValue(f + p)
            : m),
          (d = c - m),
          Math.abs(d) < o)
        ) {
          (d =
            (function (t, e, i) {
              return 0 !== t
                ? ft(t)
                : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
            })(d, e, r) * o),
            u === r && (m -= d / 2);
          const t = e.getPixelForDecimal(0),
            s = e.getPixelForDecimal(1),
            l = Math.min(t, s),
            f = Math.max(t, s);
          (m = Math.max(Math.min(m, f), l)),
            (c = m + d),
            i &&
              !h &&
              (a._stacks[e.axis]._visualValues[n] =
                e.getValueForPixel(c) - e.getValueForPixel(m));
        }
        if (m === e.getPixelForValue(r)) {
          const t = (ft(d) * e.getLineWidthForValue(r)) / 2;
          (m += t), (d -= t);
        }
        return { size: d, base: m, head: c, center: c + d / 2 };
      }
      _calculateBarIndexPixels(t, e) {
        const i = e.scale,
          n = this.options,
          s = n.skipNull,
          o = Y(n.maxBarThickness, 1 / 0);
        let r, a;
        if (e.grouped) {
          const i = s ? this._getStackCount(t) : e.stackCount,
            l =
              "flex" === n.barThickness
                ? (function (t, e, i, n) {
                    const s = e.pixels,
                      o = s[t];
                    let r = t > 0 ? s[t - 1] : null,
                      a = t < s.length - 1 ? s[t + 1] : null;
                    const l = i.categoryPercentage;
                    null === r &&
                      (r = o - (null === a ? e.end - e.start : a - o)),
                      null === a && (a = o + o - r);
                    const h = o - ((o - Math.min(r, a)) / 2) * l;
                    return {
                      chunk: ((Math.abs(a - r) / 2) * l) / n,
                      ratio: i.barPercentage,
                      start: h,
                    };
                  })(t, e, n, i)
                : (function (t, e, i, n) {
                    const s = i.barThickness;
                    let o, r;
                    return (
                      F(s)
                        ? ((o = e.min * i.categoryPercentage),
                          (r = i.barPercentage))
                        : ((o = s * n), (r = 1)),
                      { chunk: o / n, ratio: r, start: e.pixels[t] - o / 2 }
                    );
                  })(t, e, n, i),
            h = this._getStackIndex(
              this.index,
              this._cachedMeta.stack,
              s ? t : void 0
            );
          (r = l.start + l.chunk * h + l.chunk / 2),
            (a = Math.min(o, l.chunk * l.ratio));
        } else
          (r = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
            (a = Math.min(o, e.min * e.ratio));
        return { base: r - a / 2, head: r + a / 2, center: r, size: a };
      }
      draw() {
        const t = this._cachedMeta,
          e = t.vScale,
          i = t.data,
          n = i.length;
        let s = 0;
        for (; s < n; ++s)
          null !== this.getParsed(s)[e.axis] && i[s].draw(this._ctx);
      }
    },
    BubbleController: class extends Yi {
      static id = "bubble";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"],
          },
        },
      };
      static overrides = {
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      };
      initialize() {
        (this.enableOptionSharing = !0), super.initialize();
      }
      parsePrimitiveData(t, e, i, n) {
        const s = super.parsePrimitiveData(t, e, i, n);
        for (let t = 0; t < s.length; t++)
          s[t]._custom = this.resolveDataElementOptions(t + i).radius;
        return s;
      }
      parseArrayData(t, e, i, n) {
        const s = super.parseArrayData(t, e, i, n);
        for (let t = 0; t < s.length; t++) {
          const n = e[i + t];
          s[t]._custom = Y(n[2], this.resolveDataElementOptions(t + i).radius);
        }
        return s;
      }
      parseObjectData(t, e, i, n) {
        const s = super.parseObjectData(t, e, i, n);
        for (let t = 0; t < s.length; t++) {
          const n = e[i + t];
          s[t]._custom = Y(
            n && n.r && +n.r,
            this.resolveDataElementOptions(t + i).radius
          );
        }
        return s;
      }
      getMaxOverflow() {
        const t = this._cachedMeta.data;
        let e = 0;
        for (let i = t.length - 1; i >= 0; --i)
          e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
        return e > 0 && e;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          i = this.chart.data.labels || [],
          { xScale: n, yScale: s } = e,
          o = this.getParsed(t),
          r = n.getLabelForValue(o.x),
          a = s.getLabelForValue(o.y),
          l = o._custom;
        return {
          label: i[t] || "",
          value: "(" + r + ", " + a + (l ? ", " + l : "") + ")",
        };
      }
      update(t) {
        const e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
      updateElements(t, e, i, n) {
        const s = "reset" === n,
          { iScale: o, vScale: r } = this._cachedMeta,
          { sharedOptions: a, includeOptions: l } = this._getSharedOptions(
            e,
            n
          ),
          h = o.axis,
          c = r.axis;
        for (let d = e; d < e + i; d++) {
          const e = t[d],
            i = !s && this.getParsed(d),
            u = {},
            f = (u[h] = s
              ? o.getPixelForDecimal(0.5)
              : o.getPixelForValue(i[h])),
            p = (u[c] = s ? r.getBasePixel() : r.getPixelForValue(i[c]));
          (u.skip = isNaN(f) || isNaN(p)),
            l &&
              ((u.options =
                a ||
                this.resolveDataElementOptions(d, e.active ? "active" : n)),
              s && (u.options.radius = 0)),
            this.updateElement(e, d, u, n);
        }
      }
      resolveDataElementOptions(t, e) {
        const i = this.getParsed(t);
        let n = super.resolveDataElementOptions(t, e);
        n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
        const s = n.radius;
        return (
          "active" !== e && (n.radius = 0),
          (n.radius += Y(i && i._custom, s)),
          n
        );
      }
    },
    DoughnutController: Xi,
    LineController: class extends Yi {
      static id = "line";
      static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1,
      };
      static overrides = {
        scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
      };
      initialize() {
        (this.enableOptionSharing = !0),
          (this.supportsDecimation = !0),
          super.initialize();
      }
      update(t) {
        const e = this._cachedMeta,
          { dataset: i, data: n = [], _dataset: s } = e,
          o = this.chart._animationsDisabled;
        let { start: r, count: a } = zt(e, n, o);
        (this._drawStart = r),
          (this._drawCount = a),
          $t(e) && ((r = 0), (a = n.length)),
          (i._chart = this.chart),
          (i._datasetIndex = this.index),
          (i._decimated = !!s._decimated),
          (i.points = n);
        const l = this.resolveDatasetElementOptions(t);
        this.options.showLine || (l.borderWidth = 0),
          (l.segment = this.options.segment),
          this.updateElement(i, void 0, { animated: !o, options: l }, t),
          this.updateElements(n, r, a, t);
      }
      updateElements(t, e, i, n) {
        const s = "reset" === n,
          { iScale: o, vScale: r, _stacked: a, _dataset: l } = this._cachedMeta,
          { sharedOptions: h, includeOptions: c } = this._getSharedOptions(
            e,
            n
          ),
          d = o.axis,
          u = r.axis,
          { spanGaps: f, segment: p } = this.options,
          g = mt(f) ? f : Number.POSITIVE_INFINITY,
          m = this.chart._animationsDisabled || s || "none" === n,
          v = e + i,
          b = t.length;
        let y = e > 0 && this.getParsed(e - 1);
        for (let i = 0; i < b; ++i) {
          const f = t[i],
            b = m ? f : {};
          if (i < e || i >= v) {
            b.skip = !0;
            continue;
          }
          const x = this.getParsed(i),
            _ = F(x[u]),
            w = (b[d] = o.getPixelForValue(x[d], i)),
            k = (b[u] =
              s || _
                ? r.getBasePixel()
                : r.getPixelForValue(a ? this.applyStack(r, x, a) : x[u], i));
          (b.skip = isNaN(w) || isNaN(k) || _),
            (b.stop = i > 0 && Math.abs(x[d] - y[d]) > g),
            p && ((b.parsed = x), (b.raw = l.data[i])),
            c &&
              (b.options =
                h ||
                this.resolveDataElementOptions(i, f.active ? "active" : n)),
            m || this.updateElement(f, i, b, n),
            (y = x);
        }
      }
      getMaxOverflow() {
        const t = this._cachedMeta,
          e = t.dataset,
          i = (e.options && e.options.borderWidth) || 0,
          n = t.data || [];
        if (!n.length) return i;
        const s = n[0].size(this.resolveDataElementOptions(0)),
          o = n[n.length - 1].size(
            this.resolveDataElementOptions(n.length - 1)
          );
        return Math.max(i, s, o) / 2;
      }
      draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
          super.draw();
      }
    },
    PieController: class extends Xi {
      static id = "pie";
      static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%",
      };
    },
    PolarAreaController: Zi,
    RadarController: class extends Yi {
      static id = "radar";
      static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: { line: { fill: "start" } },
      };
      static overrides = {
        aspectRatio: 1,
        scales: { r: { type: "radialLinear" } },
      };
      getLabelAndValue(t) {
        const e = this._cachedMeta.vScale,
          i = this.getParsed(t);
        return {
          label: e.getLabels()[t],
          value: "" + e.getLabelForValue(i[e.axis]),
        };
      }
      parseObjectData(t, e, i, n) {
        return Ve.bind(this)(t, e, i, n);
      }
      update(t) {
        const e = this._cachedMeta,
          i = e.dataset,
          n = e.data || [],
          s = e.iScale.getLabels();
        if (((i.points = n), "resize" !== t)) {
          const e = this.resolveDatasetElementOptions(t);
          this.options.showLine || (e.borderWidth = 0);
          const o = { _loop: !0, _fullLoop: s.length === n.length, options: e };
          this.updateElement(i, void 0, o, t);
        }
        this.updateElements(n, 0, n.length, t);
      }
      updateElements(t, e, i, n) {
        const s = this._cachedMeta.rScale,
          o = "reset" === n;
        for (let r = e; r < e + i; r++) {
          const e = t[r],
            i = this.resolveDataElementOptions(r, e.active ? "active" : n),
            a = s.getPointPositionForValue(r, this.getParsed(r).r),
            l = o ? s.xCenter : a.x,
            h = o ? s.yCenter : a.y,
            c = {
              x: l,
              y: h,
              angle: a.angle,
              skip: isNaN(l) || isNaN(h),
              options: i,
            };
          this.updateElement(e, r, c, n);
        }
      }
    },
    ScatterController: class extends Yi {
      static id = "scatter";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1,
      };
      static overrides = {
        interaction: { mode: "point" },
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      };
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          i = this.chart.data.labels || [],
          { xScale: n, yScale: s } = e,
          o = this.getParsed(t),
          r = n.getLabelForValue(o.x),
          a = s.getLabelForValue(o.y);
        return { label: i[t] || "", value: "(" + r + ", " + a + ")" };
      }
      update(t) {
        const e = this._cachedMeta,
          { data: i = [] } = e,
          n = this.chart._animationsDisabled;
        let { start: s, count: o } = zt(e, i, n);
        if (
          ((this._drawStart = s),
          (this._drawCount = o),
          $t(e) && ((s = 0), (o = i.length)),
          this.options.showLine)
        ) {
          this.datasetElementType || this.addElements();
          const { dataset: s, _dataset: o } = e;
          (s._chart = this.chart),
            (s._datasetIndex = this.index),
            (s._decimated = !!o._decimated),
            (s.points = i);
          const r = this.resolveDatasetElementOptions(t);
          (r.segment = this.options.segment),
            this.updateElement(s, void 0, { animated: !n, options: r }, t);
        } else
          this.datasetElementType &&
            (delete e.dataset, (this.datasetElementType = !1));
        this.updateElements(i, s, o, t);
      }
      addElements() {
        const { showLine: t } = this.options;
        !this.datasetElementType &&
          t &&
          (this.datasetElementType = this.chart.registry.getElement("line")),
          super.addElements();
      }
      updateElements(t, e, i, n) {
        const s = "reset" === n,
          { iScale: o, vScale: r, _stacked: a, _dataset: l } = this._cachedMeta,
          h = this.resolveDataElementOptions(e, n),
          c = this.getSharedOptions(h),
          d = this.includeOptions(n, c),
          u = o.axis,
          f = r.axis,
          { spanGaps: p, segment: g } = this.options,
          m = mt(p) ? p : Number.POSITIVE_INFINITY,
          v = this.chart._animationsDisabled || s || "none" === n;
        let b = e > 0 && this.getParsed(e - 1);
        for (let h = e; h < e + i; ++h) {
          const e = t[h],
            i = this.getParsed(h),
            p = v ? e : {},
            y = F(i[f]),
            x = (p[u] = o.getPixelForValue(i[u], h)),
            _ = (p[f] =
              s || y
                ? r.getBasePixel()
                : r.getPixelForValue(a ? this.applyStack(r, i, a) : i[f], h));
          (p.skip = isNaN(x) || isNaN(_) || y),
            (p.stop = h > 0 && Math.abs(i[u] - b[u]) > m),
            g && ((p.parsed = i), (p.raw = l.data[h])),
            d &&
              (p.options =
                c ||
                this.resolveDataElementOptions(h, e.active ? "active" : n)),
            v || this.updateElement(e, h, p, n),
            (b = i);
        }
        this.updateSharedOptions(c, n, h);
      }
      getMaxOverflow() {
        const t = this._cachedMeta,
          e = t.data || [];
        if (!this.options.showLine) {
          let t = 0;
          for (let i = e.length - 1; i >= 0; --i)
            t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
          return t > 0 && t;
        }
        const i = t.dataset,
          n = (i.options && i.options.borderWidth) || 0;
        if (!e.length) return n;
        const s = e[0].size(this.resolveDataElementOptions(0)),
          o = e[e.length - 1].size(
            this.resolveDataElementOptions(e.length - 1)
          );
        return Math.max(n, s, o) / 2;
      }
    },
  });
  function Qi() {
    throw new Error(
      "This method is not implemented: Check that a complete date adapter is provided."
    );
  }
  class tn {
    static override(t) {
      Object.assign(tn.prototype, t);
    }
    options;
    constructor(t) {
      this.options = t || {};
    }
    init() {}
    formats() {
      return Qi();
    }
    parse() {
      return Qi();
    }
    format() {
      return Qi();
    }
    add() {
      return Qi();
    }
    diff() {
      return Qi();
    }
    startOf() {
      return Qi();
    }
    endOf() {
      return Qi();
    }
  }
  var en = { _date: tn };
  function nn(t, e, i, n) {
    const { controller: s, data: o, _sorted: r } = t,
      a = s._cachedMeta.iScale;
    if (a && e === a.axis && "r" !== e && r && o.length) {
      const t = a._reversePixels ? Ot : Tt;
      if (!n) return t(o, e, i);
      if (s._sharedOptions) {
        const n = o[0],
          s = "function" == typeof n.getRange && n.getRange(e);
        if (s) {
          const n = t(o, e, i - s),
            r = t(o, e, i + s);
          return { lo: n.lo, hi: r.hi };
        }
      }
    }
    return { lo: 0, hi: o.length - 1 };
  }
  function sn(t, e, i, n, s) {
    const o = t.getSortedVisibleDatasetMetas(),
      r = i[e];
    for (let t = 0, i = o.length; t < i; ++t) {
      const { index: i, data: a } = o[t],
        { lo: l, hi: h } = nn(o[t], e, r, s);
      for (let t = l; t <= h; ++t) {
        const e = a[t];
        e.skip || n(e, i, t);
      }
    }
  }
  function on(t, e, i, n, s) {
    const o = [];
    if (!s && !t.isPointInArea(e)) return o;
    return (
      sn(
        t,
        i,
        e,
        function (i, r, a) {
          (s || de(i, t.chartArea, 0)) &&
            i.inRange(e.x, e.y, n) &&
            o.push({ element: i, datasetIndex: r, index: a });
        },
        !0
      ),
      o
    );
  }
  function rn(t, e, i, n, s, o) {
    let r = [];
    const a = (function (t) {
      const e = -1 !== t.indexOf("x"),
        i = -1 !== t.indexOf("y");
      return function (t, n) {
        const s = e ? Math.abs(t.x - n.x) : 0,
          o = i ? Math.abs(t.y - n.y) : 0;
        return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
      };
    })(i);
    let l = Number.POSITIVE_INFINITY;
    return (
      sn(t, i, e, function (i, h, c) {
        const d = i.inRange(e.x, e.y, s);
        if (n && !d) return;
        const u = i.getCenterPoint(s);
        if (!(!!o || t.isPointInArea(u)) && !d) return;
        const f = a(e, u);
        f < l
          ? ((r = [{ element: i, datasetIndex: h, index: c }]), (l = f))
          : f === l && r.push({ element: i, datasetIndex: h, index: c });
      }),
      r
    );
  }
  function an(t, e, i, n, s, o) {
    return o || t.isPointInArea(e)
      ? "r" !== i || n
        ? rn(t, e, i, n, s, o)
        : (function (t, e, i, n) {
            let s = [];
            return (
              sn(t, i, e, function (t, i, o) {
                const { startAngle: r, endAngle: a } = t.getProps(
                    ["startAngle", "endAngle"],
                    n
                  ),
                  { angle: l } = _t(t, { x: e.x, y: e.y });
                St(l, r, a) &&
                  s.push({ element: t, datasetIndex: i, index: o });
              }),
              s
            );
          })(t, e, i, s)
      : [];
  }
  function ln(t, e, i, n, s) {
    const o = [],
      r = "x" === i ? "inXRange" : "inYRange";
    let a = !1;
    return (
      sn(t, i, e, (t, n, l) => {
        t[r](e[i], s) &&
          (o.push({ element: t, datasetIndex: n, index: l }),
          (a = a || t.inRange(e.x, e.y, s)));
      }),
      n && !a ? [] : o
    );
  }
  var hn = {
    evaluateInteractionItems: sn,
    modes: {
      index(t, e, i, n) {
        const s = oi(e, t),
          o = i.axis || "x",
          r = i.includeInvisible || !1,
          a = i.intersect ? on(t, s, o, n, r) : an(t, s, o, !1, n, r),
          l = [];
        return a.length
          ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
              const e = a[0].index,
                i = t.data[e];
              i &&
                !i.skip &&
                l.push({ element: i, datasetIndex: t.index, index: e });
            }),
            l)
          : [];
      },
      dataset(t, e, i, n) {
        const s = oi(e, t),
          o = i.axis || "xy",
          r = i.includeInvisible || !1;
        let a = i.intersect ? on(t, s, o, n, r) : an(t, s, o, !1, n, r);
        if (a.length > 0) {
          const e = a[0].datasetIndex,
            i = t.getDatasetMeta(e).data;
          a = [];
          for (let t = 0; t < i.length; ++t)
            a.push({ element: i[t], datasetIndex: e, index: t });
        }
        return a;
      },
      point: (t, e, i, n) =>
        on(t, oi(e, t), i.axis || "xy", n, i.includeInvisible || !1),
      nearest(t, e, i, n) {
        const s = oi(e, t),
          o = i.axis || "xy",
          r = i.includeInvisible || !1;
        return an(t, s, o, i.intersect, n, r);
      },
      x: (t, e, i, n) => ln(t, oi(e, t), "x", i.intersect, n),
      y: (t, e, i, n) => ln(t, oi(e, t), "y", i.intersect, n),
    },
  };
  const cn = ["left", "top", "right", "bottom"];
  function dn(t, e) {
    return t.filter((t) => t.pos === e);
  }
  function un(t, e) {
    return t.filter((t) => -1 === cn.indexOf(t.pos) && t.box.axis === e);
  }
  function fn(t, e) {
    return t.sort((t, i) => {
      const n = e ? i : t,
        s = e ? t : i;
      return n.weight === s.weight ? n.index - s.index : n.weight - s.weight;
    });
  }
  function pn(t, e) {
    const i = (function (t) {
        const e = {};
        for (const i of t) {
          const { stack: t, pos: n, stackWeight: s } = i;
          if (!t || !cn.includes(n)) continue;
          const o =
            e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
          o.count++, (o.weight += s);
        }
        return e;
      })(t),
      { vBoxMaxWidth: n, hBoxMaxHeight: s } = e;
    let o, r, a;
    for (o = 0, r = t.length; o < r; ++o) {
      a = t[o];
      const { fullSize: r } = a.box,
        l = i[a.stack],
        h = l && a.stackWeight / l.weight;
      a.horizontal
        ? ((a.width = h ? h * n : r && e.availableWidth), (a.height = s))
        : ((a.width = n), (a.height = h ? h * s : r && e.availableHeight));
    }
    return i;
  }
  function gn(t, e, i, n) {
    return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
  }
  function mn(t, e) {
    (t.top = Math.max(t.top, e.top)),
      (t.left = Math.max(t.left, e.left)),
      (t.bottom = Math.max(t.bottom, e.bottom)),
      (t.right = Math.max(t.right, e.right));
  }
  function vn(t, e, i, n) {
    const { pos: s, box: o } = i,
      r = t.maxPadding;
    if (!z(s)) {
      i.size && (t[s] -= i.size);
      const e = n[i.stack] || { size: 0, count: 1 };
      (e.size = Math.max(e.size, i.horizontal ? o.height : o.width)),
        (i.size = e.size / e.count),
        (t[s] += i.size);
    }
    o.getPadding && mn(r, o.getPadding());
    const a = Math.max(0, e.outerWidth - gn(r, t, "left", "right")),
      l = Math.max(0, e.outerHeight - gn(r, t, "top", "bottom")),
      h = a !== t.w,
      c = l !== t.h;
    return (
      (t.w = a),
      (t.h = l),
      i.horizontal ? { same: h, other: c } : { same: c, other: h }
    );
  }
  function bn(t, e) {
    const i = e.maxPadding;
    function n(t) {
      const n = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        t.forEach((t) => {
          n[t] = Math.max(e[t], i[t]);
        }),
        n
      );
    }
    return n(t ? ["left", "right"] : ["top", "bottom"]);
  }
  function yn(t, e, i, n) {
    const s = [];
    let o, r, a, l, h, c;
    for (o = 0, r = t.length, h = 0; o < r; ++o) {
      (a = t[o]),
        (l = a.box),
        l.update(a.width || e.w, a.height || e.h, bn(a.horizontal, e));
      const { same: r, other: d } = vn(e, i, a, n);
      (h |= r && s.length), (c = c || d), l.fullSize || s.push(a);
    }
    return (h && yn(s, e, i, n)) || c;
  }
  function xn(t, e, i, n, s) {
    (t.top = i),
      (t.left = e),
      (t.right = e + n),
      (t.bottom = i + s),
      (t.width = n),
      (t.height = s);
  }
  function _n(t, e, i, n) {
    const s = i.padding;
    let { x: o, y: r } = e;
    for (const a of t) {
      const t = a.box,
        l = n[a.stack] || { count: 1, placed: 0, weight: 1 },
        h = a.stackWeight / l.weight || 1;
      if (a.horizontal) {
        const n = e.w * h,
          o = l.size || t.height;
        et(l.start) && (r = l.start),
          t.fullSize
            ? xn(t, s.left, r, i.outerWidth - s.right - s.left, o)
            : xn(t, e.left + l.placed, r, n, o),
          (l.start = r),
          (l.placed += n),
          (r = t.bottom);
      } else {
        const n = e.h * h,
          r = l.size || t.width;
        et(l.start) && (o = l.start),
          t.fullSize
            ? xn(t, o, s.top, r, i.outerHeight - s.bottom - s.top)
            : xn(t, o, e.top + l.placed, r, n),
          (l.start = o),
          (l.placed += n),
          (o = t.right);
      }
    }
    (e.x = o), (e.y = r);
  }
  var wn = {
    addBox(t, e) {
      t.boxes || (t.boxes = []),
        (e.fullSize = e.fullSize || !1),
        (e.position = e.position || "top"),
        (e.weight = e.weight || 0),
        (e._layers =
          e._layers ||
          function () {
            return [
              {
                z: 0,
                draw(t) {
                  e.draw(t);
                },
              },
            ];
          }),
        t.boxes.push(e);
    },
    removeBox(t, e) {
      const i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure(t, e, i) {
      (e.fullSize = i.fullSize),
        (e.position = i.position),
        (e.weight = i.weight);
    },
    update(t, e, i, n) {
      if (!t) return;
      const s = Ae(t.options.layout.padding),
        o = Math.max(e - s.width, 0),
        r = Math.max(i - s.height, 0),
        a = (function (t) {
          const e = (function (t) {
              const e = [];
              let i, n, s, o, r, a;
              for (i = 0, n = (t || []).length; i < n; ++i)
                (s = t[i]),
                  ({
                    position: o,
                    options: { stack: r, stackWeight: a = 1 },
                  } = s),
                  e.push({
                    index: i,
                    box: s,
                    pos: o,
                    horizontal: s.isHorizontal(),
                    weight: s.weight,
                    stack: r && o + r,
                    stackWeight: a,
                  });
              return e;
            })(t),
            i = fn(
              e.filter((t) => t.box.fullSize),
              !0
            ),
            n = fn(dn(e, "left"), !0),
            s = fn(dn(e, "right")),
            o = fn(dn(e, "top"), !0),
            r = fn(dn(e, "bottom")),
            a = un(e, "x"),
            l = un(e, "y");
          return {
            fullSize: i,
            leftAndTop: n.concat(o),
            rightAndBottom: s.concat(l).concat(r).concat(a),
            chartArea: dn(e, "chartArea"),
            vertical: n.concat(s).concat(l),
            horizontal: o.concat(r).concat(a),
          };
        })(t.boxes),
        l = a.vertical,
        h = a.horizontal;
      V(t.boxes, (t) => {
        "function" == typeof t.beforeLayout && t.beforeLayout();
      });
      const c =
          l.reduce(
            (t, e) =>
              e.box.options && !1 === e.box.options.display ? t : t + 1,
            0
          ) || 1,
        d = Object.freeze({
          outerWidth: e,
          outerHeight: i,
          padding: s,
          availableWidth: o,
          availableHeight: r,
          vBoxMaxWidth: o / 2 / c,
          hBoxMaxHeight: r / 2,
        }),
        u = Object.assign({}, s);
      mn(u, Ae(n));
      const f = Object.assign(
          { maxPadding: u, w: o, h: r, x: s.left, y: s.top },
          s
        ),
        p = pn(l.concat(h), d);
      yn(a.fullSize, f, d, p),
        yn(l, f, d, p),
        yn(h, f, d, p) && yn(l, f, d, p),
        (function (t) {
          const e = t.maxPadding;
          function i(i) {
            const n = Math.max(e[i] - t[i], 0);
            return (t[i] += n), n;
          }
          (t.y += i("top")), (t.x += i("left")), i("right"), i("bottom");
        })(f),
        _n(a.leftAndTop, f, d, p),
        (f.x += f.w),
        (f.y += f.h),
        _n(a.rightAndBottom, f, d, p),
        (t.chartArea = {
          left: f.left,
          top: f.top,
          right: f.left + f.w,
          bottom: f.top + f.h,
          height: f.h,
          width: f.w,
        }),
        V(a.chartArea, (e) => {
          const i = e.box;
          Object.assign(i, t.chartArea),
            i.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class kn {
    acquireContext(t, e) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, e, i) {}
    removeEventListener(t, e, i) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, e, i, n) {
      return (
        (e = Math.max(0, e || t.width)),
        (i = i || t.height),
        { width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
      );
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class Cn extends kn {
    acquireContext(t) {
      return (t && t.getContext && t.getContext("2d")) || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const Sn = "$chartjs",
    Mn = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout",
    },
    An = (t) => null === t || "" === t;
  const Dn = !!hi && { passive: !0 };
  function Tn(t, e, i) {
    t.canvas.removeEventListener(e, i, Dn);
  }
  function On(t, e) {
    for (const i of t) if (i === e || i.contains(e)) return !0;
  }
  function Pn(t, e, i) {
    const n = t.canvas,
      s = new MutationObserver((t) => {
        let e = !1;
        for (const i of t)
          (e = e || On(i.addedNodes, n)), (e = e && !On(i.removedNodes, n));
        e && i();
      });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
  }
  function En(t, e, i) {
    const n = t.canvas,
      s = new MutationObserver((t) => {
        let e = !1;
        for (const i of t)
          (e = e || On(i.removedNodes, n)), (e = e && !On(i.addedNodes, n));
        e && i();
      });
    return s.observe(document, { childList: !0, subtree: !0 }), s;
  }
  const Ln = new Map();
  let Rn = 0;
  function In() {
    const t = window.devicePixelRatio;
    t !== Rn &&
      ((Rn = t),
      Ln.forEach((e, i) => {
        i.currentDevicePixelRatio !== t && e();
      }));
  }
  function Fn(t, e, i) {
    const n = t.canvas,
      s = n && Qe(n);
    if (!s) return;
    const o = It((t, e) => {
        const n = s.clientWidth;
        i(t, e), n < s.clientWidth && i();
      }, window),
      r = new ResizeObserver((t) => {
        const e = t[0],
          i = e.contentRect.width,
          n = e.contentRect.height;
        (0 === i && 0 === n) || o(i, n);
      });
    return (
      r.observe(s),
      (function (t, e) {
        Ln.size || window.addEventListener("resize", In), Ln.set(t, e);
      })(t, o),
      r
    );
  }
  function Nn(t, e, i) {
    i && i.disconnect(),
      "resize" === e &&
        (function (t) {
          Ln.delete(t), Ln.size || window.removeEventListener("resize", In);
        })(t);
  }
  function zn(t, e, i) {
    const n = t.canvas,
      s = It((e) => {
        null !== t.ctx &&
          i(
            (function (t, e) {
              const i = Mn[t.type] || t.type,
                { x: n, y: s } = oi(t, e);
              return {
                type: i,
                chart: e,
                native: t,
                x: void 0 !== n ? n : null,
                y: void 0 !== s ? s : null,
              };
            })(e, t)
          );
      }, t);
    return (
      (function (t, e, i) {
        t.addEventListener(e, i, Dn);
      })(n, e, s),
      s
    );
  }
  class $n extends kn {
    acquireContext(t, e) {
      const i = t && t.getContext && t.getContext("2d");
      return i && i.canvas === t
        ? ((function (t, e) {
            const i = t.style,
              n = t.getAttribute("height"),
              s = t.getAttribute("width");
            if (
              ((t[Sn] = {
                initial: {
                  height: n,
                  width: s,
                  style: {
                    display: i.display,
                    height: i.height,
                    width: i.width,
                  },
                },
              }),
              (i.display = i.display || "block"),
              (i.boxSizing = i.boxSizing || "border-box"),
              An(s))
            ) {
              const e = ci(t, "width");
              void 0 !== e && (t.width = e);
            }
            if (An(n))
              if ("" === t.style.height) t.height = t.width / (e || 2);
              else {
                const e = ci(t, "height");
                void 0 !== e && (t.height = e);
              }
          })(t, e),
          i)
        : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e[Sn]) return !1;
      const i = e[Sn].initial;
      ["height", "width"].forEach((t) => {
        const n = i[t];
        F(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
      });
      const n = i.style || {};
      return (
        Object.keys(n).forEach((t) => {
          e.style[t] = n[t];
        }),
        (e.width = e.width),
        delete e[Sn],
        !0
      );
    }
    addEventListener(t, e, i) {
      this.removeEventListener(t, e);
      const n = t.$proxies || (t.$proxies = {}),
        s = { attach: Pn, detach: En, resize: Fn }[e] || zn;
      n[e] = s(t, e, i);
    }
    removeEventListener(t, e) {
      const i = t.$proxies || (t.$proxies = {}),
        n = i[e];
      if (!n) return;
      (({ attach: Nn, detach: Nn, resize: Nn })[e] || Tn)(t, e, n),
        (i[e] = void 0);
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, i, n) {
      return ai(t, e, i, n);
    }
    isAttached(t) {
      const e = Qe(t);
      return !(!e || !e.isConnected);
    }
  }
  class jn {
    static defaults = {};
    static defaultRoutes = void 0;
    x;
    y;
    active = !1;
    options;
    $animations;
    tooltipPosition(t) {
      const { x: e, y: i } = this.getProps(["x", "y"], t);
      return { x: e, y: i };
    }
    hasValue() {
      return mt(this.x) && mt(this.y);
    }
    getProps(t, e) {
      const i = this.$animations;
      if (!e || !i) return this;
      const n = {};
      return (
        t.forEach((t) => {
          n[t] = i[t] && i[t].active() ? i[t]._to : this[t];
        }),
        n
      );
    }
  }
  function Yn(t, e) {
    const i = t.options.ticks,
      n = (function (t) {
        const e = t.options.offset,
          i = t._tickSize(),
          n = t._length / i + (e ? 0 : 1),
          s = t._maxLength / i;
        return Math.floor(Math.min(n, s));
      })(t),
      s = Math.min(i.maxTicksLimit || n, n),
      o = i.major.enabled
        ? (function (t) {
            const e = [];
            let i, n;
            for (i = 0, n = t.length; i < n; i++) t[i].major && e.push(i);
            return e;
          })(e)
        : [],
      r = o.length,
      a = o[0],
      l = o[r - 1],
      h = [];
    if (r > s)
      return (
        (function (t, e, i, n) {
          let s,
            o = 0,
            r = i[0];
          for (n = Math.ceil(n), s = 0; s < t.length; s++)
            s === r && (e.push(t[s]), o++, (r = i[o * n]));
        })(e, h, o, r / s),
        h
      );
    const c = (function (t, e, i) {
      const n = (function (t) {
          const e = t.length;
          let i, n;
          if (e < 2) return !1;
          for (n = t[0], i = 1; i < e; ++i)
            if (t[i] - t[i - 1] !== n) return !1;
          return n;
        })(t),
        s = e.length / i;
      if (!n) return Math.max(s, 1);
      const o = (function (t) {
        const e = [],
          i = Math.sqrt(t);
        let n;
        for (n = 1; n < i; n++) t % n == 0 && (e.push(n), e.push(t / n));
        return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
      })(n);
      for (let t = 0, e = o.length - 1; t < e; t++) {
        const e = o[t];
        if (e > s) return e;
      }
      return Math.max(s, 1);
    })(o, e, s);
    if (r > 0) {
      let t, i;
      const n = r > 1 ? Math.round((l - a) / (r - 1)) : null;
      for (Wn(e, h, c, F(n) ? 0 : a - n, a), t = 0, i = r - 1; t < i; t++)
        Wn(e, h, c, o[t], o[t + 1]);
      return Wn(e, h, c, l, F(n) ? e.length : l + n), h;
    }
    return Wn(e, h, c), h;
  }
  function Wn(t, e, i, n, s) {
    const o = Y(n, 0),
      r = Math.min(Y(s, t.length), t.length);
    let a,
      l,
      h,
      c = 0;
    for (
      i = Math.ceil(i), s && ((a = s - n), (i = a / Math.floor(a / i))), h = o;
      h < 0;

    )
      c++, (h = Math.round(o + c * i));
    for (l = Math.max(o, 0); l < r; l++)
      l === h && (e.push(t[l]), c++, (h = Math.round(o + c * i)));
  }
  const Bn = (t, e, i) => ("top" === e || "left" === e ? t[e] + i : t[e] - i),
    Vn = (t, e) => Math.min(e || t, t);
  function Hn(t, e) {
    const i = [],
      n = t.length / e,
      s = t.length;
    let o = 0;
    for (; o < s; o += n) i.push(t[Math.floor(o)]);
    return i;
  }
  function Un(t, e, i) {
    const n = t.ticks.length,
      s = Math.min(e, n - 1),
      o = t._startPixel,
      r = t._endPixel,
      a = 1e-6;
    let l,
      h = t.getPixelForTick(s);
    if (
      !(
        i &&
        ((l =
          1 === n
            ? Math.max(h - o, r - h)
            : 0 === e
            ? (t.getPixelForTick(1) - h) / 2
            : (h - t.getPixelForTick(s - 1)) / 2),
        (h += s < e ? l : -l),
        h < o - a || h > r + a)
      )
    )
      return h;
  }
  function Gn(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function Kn(t, e) {
    if (!t.display) return 0;
    const i = De(t.font, e),
      n = Ae(t.padding);
    return (N(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
  }
  function qn(t, e, i) {
    let n = Ft(t);
    return (
      ((i && "right" !== e) || (!i && "right" === e)) &&
        (n = ((t) => ("left" === t ? "right" : "right" === t ? "left" : t))(n)),
      n
    );
  }
  class Xn extends jn {
    constructor(t) {
      super(),
        (this.id = t.id),
        (this.type = t.type),
        (this.options = void 0),
        (this.ctx = t.ctx),
        (this.chart = t.chart),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
        (this.maxWidth = void 0),
        (this.maxHeight = void 0),
        (this.paddingTop = void 0),
        (this.paddingBottom = void 0),
        (this.paddingLeft = void 0),
        (this.paddingRight = void 0),
        (this.axis = void 0),
        (this.labelRotation = void 0),
        (this.min = void 0),
        (this.max = void 0),
        (this._range = void 0),
        (this.ticks = []),
        (this._gridLineItems = null),
        (this._labelItems = null),
        (this._labelSizes = null),
        (this._length = 0),
        (this._maxLength = 0),
        (this._longestTextCache = {}),
        (this._startPixel = void 0),
        (this._endPixel = void 0),
        (this._reversePixels = !1),
        (this._userMax = void 0),
        (this._userMin = void 0),
        (this._suggestedMax = void 0),
        (this._suggestedMin = void 0),
        (this._ticksLength = 0),
        (this._borderValue = 0),
        (this._cache = {}),
        (this._dataLimitsCached = !1),
        (this.$context = void 0);
    }
    init(t) {
      (this.options = t.setContext(this.getContext())),
        (this.axis = t.axis),
        (this._userMin = this.parse(t.min)),
        (this._userMax = this.parse(t.max)),
        (this._suggestedMin = this.parse(t.suggestedMin)),
        (this._suggestedMax = this.parse(t.suggestedMax));
    }
    parse(t, e) {
      return t;
    }
    getUserBounds() {
      let {
        _userMin: t,
        _userMax: e,
        _suggestedMin: i,
        _suggestedMax: n,
      } = this;
      return (
        (t = j(t, Number.POSITIVE_INFINITY)),
        (e = j(e, Number.NEGATIVE_INFINITY)),
        (i = j(i, Number.POSITIVE_INFINITY)),
        (n = j(n, Number.NEGATIVE_INFINITY)),
        { min: j(t, i), max: j(e, n), minDefined: $(t), maxDefined: $(e) }
      );
    }
    getMinMax(t) {
      let e,
        { min: i, max: n, minDefined: s, maxDefined: o } = this.getUserBounds();
      if (s && o) return { min: i, max: n };
      const r = this.getMatchingVisibleMetas();
      for (let a = 0, l = r.length; a < l; ++a)
        (e = r[a].controller.getMinMax(this, t)),
          s || (i = Math.min(i, e.min)),
          o || (n = Math.max(n, e.max));
      return (
        (i = o && i > n ? n : i),
        (n = s && i > n ? i : n),
        { min: j(i, j(n, i)), max: j(n, j(i, n)) }
      );
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0,
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t = this.chart.data;
      return (
        this.options.labels ||
        (this.isHorizontal() ? t.xLabels : t.yLabels) ||
        t.labels ||
        []
      );
    }
    getLabelItems(t = this.chart.chartArea) {
      return (
        this._labelItems || (this._labelItems = this._computeLabelItems(t))
      );
    }
    beforeLayout() {
      (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
      B(this.options.beforeUpdate, [this]);
    }
    update(t, e, i) {
      const { beginAtZero: n, grace: s, ticks: o } = this.options,
        r = o.sampleSize;
      this.beforeUpdate(),
        (this.maxWidth = t),
        (this.maxHeight = e),
        (this._margins = i =
          Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
        (this.ticks = null),
        (this._labelSizes = null),
        (this._gridLineItems = null),
        (this._labelItems = null),
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        (this._maxLength = this.isHorizontal()
          ? this.width + i.left + i.right
          : this.height + i.top + i.bottom),
        this._dataLimitsCached ||
          (this.beforeDataLimits(),
          this.determineDataLimits(),
          this.afterDataLimits(),
          (this._range = (function (t, e, i) {
            const { min: n, max: s } = t,
              o = W(e, (s - n) / 2),
              r = (t, e) => (i && 0 === t ? 0 : t + e);
            return { min: r(n, -Math.abs(o)), max: r(s, o) };
          })(this, s, n)),
          (this._dataLimitsCached = !0)),
        this.beforeBuildTicks(),
        (this.ticks = this.buildTicks() || []),
        this.afterBuildTicks();
      const a = r < this.ticks.length;
      this._convertTicksToLabels(a ? Hn(this.ticks, r) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        o.display &&
          (o.autoSkip || "auto" === o.source) &&
          ((this.ticks = Yn(this, this.ticks)),
          (this._labelSizes = null),
          this.afterAutoSkip()),
        a && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate();
    }
    configure() {
      let t,
        e,
        i = this.options.reverse;
      this.isHorizontal()
        ? ((t = this.left), (e = this.right))
        : ((t = this.top), (e = this.bottom), (i = !i)),
        (this._startPixel = t),
        (this._endPixel = e),
        (this._reversePixels = i),
        (this._length = e - t),
        (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
      B(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      B(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth),
          (this.left = 0),
          (this.right = this.width))
        : ((this.height = this.maxHeight),
          (this.top = 0),
          (this.bottom = this.height)),
        (this.paddingLeft = 0),
        (this.paddingTop = 0),
        (this.paddingRight = 0),
        (this.paddingBottom = 0);
    }
    afterSetDimensions() {
      B(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      this.chart.notifyPlugins(t, this.getContext()),
        B(this.options[t], [this]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      B(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this.options.ticks;
      let i, n, s;
      for (i = 0, n = t.length; i < n; i++)
        (s = t[i]), (s.label = B(e.callback, [s.value, i, t], this));
    }
    afterTickToLabelConversion() {
      B(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      B(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        e = t.ticks,
        i = Vn(this.ticks.length, t.ticks.maxTicksLimit),
        n = e.minRotation || 0,
        s = e.maxRotation;
      let o,
        r,
        a,
        l = n;
      if (
        !this._isVisible() ||
        !e.display ||
        n >= s ||
        i <= 1 ||
        !this.isHorizontal()
      )
        return void (this.labelRotation = n);
      const h = this._getLabelSizes(),
        c = h.widest.width,
        d = h.highest.height,
        u = Mt(this.chart.width - c, 0, this.maxWidth);
      (o = t.offset ? this.maxWidth / i : u / (i - 1)),
        c + 6 > o &&
          ((o = u / (i - (t.offset ? 0.5 : 1))),
          (r =
            this.maxHeight -
            Gn(t.grid) -
            e.padding -
            Kn(t.title, this.chart.options.font)),
          (a = Math.sqrt(c * c + d * d)),
          (l = yt(
            Math.min(
              Math.asin(Mt((h.highest.height + 6) / o, -1, 1)),
              Math.asin(Mt(r / a, -1, 1)) - Math.asin(Mt(d / a, -1, 1))
            )
          )),
          (l = Math.max(n, Math.min(s, l)))),
        (this.labelRotation = l);
    }
    afterCalculateLabelRotation() {
      B(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      B(this.options.beforeFit, [this]);
    }
    fit() {
      const t = { width: 0, height: 0 },
        {
          chart: e,
          options: { ticks: i, title: n, grid: s },
        } = this,
        o = this._isVisible(),
        r = this.isHorizontal();
      if (o) {
        const o = Kn(n, e.options.font);
        if (
          (r
            ? ((t.width = this.maxWidth), (t.height = Gn(s) + o))
            : ((t.height = this.maxHeight), (t.width = Gn(s) + o)),
          i.display && this.ticks.length)
        ) {
          const {
              first: e,
              last: n,
              widest: s,
              highest: o,
            } = this._getLabelSizes(),
            a = 2 * i.padding,
            l = bt(this.labelRotation),
            h = Math.cos(l),
            c = Math.sin(l);
          if (r) {
            const e = i.mirror ? 0 : c * s.width + h * o.height;
            t.height = Math.min(this.maxHeight, t.height + e + a);
          } else {
            const e = i.mirror ? 0 : h * s.width + c * o.height;
            t.width = Math.min(this.maxWidth, t.width + e + a);
          }
          this._calculatePadding(e, n, c, h);
        }
      }
      this._handleMargins(),
        r
          ? ((this.width = this._length =
              e.width - this._margins.left - this._margins.right),
            (this.height = t.height))
          : ((this.width = t.width),
            (this.height = this._length =
              e.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(t, e, i, n) {
      const {
          ticks: { align: s, padding: o },
          position: r,
        } = this.options,
        a = 0 !== this.labelRotation,
        l = "top" !== r && "x" === this.axis;
      if (this.isHorizontal()) {
        const r = this.getPixelForTick(0) - this.left,
          h = this.right - this.getPixelForTick(this.ticks.length - 1);
        let c = 0,
          d = 0;
        a
          ? l
            ? ((c = n * t.width), (d = i * e.height))
            : ((c = i * t.height), (d = n * e.width))
          : "start" === s
          ? (d = e.width)
          : "end" === s
          ? (c = t.width)
          : "inner" !== s && ((c = t.width / 2), (d = e.width / 2)),
          (this.paddingLeft = Math.max(
            ((c - r + o) * this.width) / (this.width - r),
            0
          )),
          (this.paddingRight = Math.max(
            ((d - h + o) * this.width) / (this.width - h),
            0
          ));
      } else {
        let i = e.height / 2,
          n = t.height / 2;
        "start" === s
          ? ((i = 0), (n = t.height))
          : "end" === s && ((i = e.height), (n = 0)),
          (this.paddingTop = i + o),
          (this.paddingBottom = n + o);
      }
    }
    _handleMargins() {
      this._margins &&
        ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
        (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
        (this._margins.right = Math.max(
          this.paddingRight,
          this._margins.right
        )),
        (this._margins.bottom = Math.max(
          this.paddingBottom,
          this._margins.bottom
        )));
    }
    afterFit() {
      B(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: t, position: e } = this.options;
      return "top" === e || "bottom" === e || "x" === t;
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
      let e, i;
      for (
        this.beforeTickToLabelConversion(),
          this.generateTickLabels(t),
          e = 0,
          i = t.length;
        e < i;
        e++
      )
        F(t[e].label) && (t.splice(e, 1), i--, e--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const e = this.options.ticks.sampleSize;
        let i = this.ticks;
        e < i.length && (i = Hn(i, e)),
          (this._labelSizes = t =
            this._computeLabelSizes(
              i,
              i.length,
              this.options.ticks.maxTicksLimit
            ));
      }
      return t;
    }
    _computeLabelSizes(t, e, i) {
      const { ctx: n, _longestTextCache: s } = this,
        o = [],
        r = [],
        a = Math.floor(e / Vn(e, i));
      let l,
        h,
        c,
        d,
        u,
        f,
        p,
        g,
        m,
        v,
        b,
        y = 0,
        x = 0;
      for (l = 0; l < e; l += a) {
        if (
          ((d = t[l].label),
          (u = this._resolveTickFontOptions(l)),
          (n.font = f = u.string),
          (p = s[f] = s[f] || { data: {}, gc: [] }),
          (g = u.lineHeight),
          (m = v = 0),
          F(d) || N(d))
        ) {
          if (N(d))
            for (h = 0, c = d.length; h < c; ++h)
              (b = d[h]),
                F(b) || N(b) || ((m = oe(n, p.data, p.gc, m, b)), (v += g));
        } else (m = oe(n, p.data, p.gc, m, d)), (v = g);
        o.push(m), r.push(v), (y = Math.max(m, y)), (x = Math.max(v, x));
      }
      !(function (t, e) {
        V(t, (t) => {
          const i = t.gc,
            n = i.length / 2;
          let s;
          if (n > e) {
            for (s = 0; s < n; ++s) delete t.data[i[s]];
            i.splice(0, n);
          }
        });
      })(s, e);
      const _ = o.indexOf(y),
        w = r.indexOf(x),
        k = (t) => ({ width: o[t] || 0, height: r[t] || 0 });
      return {
        first: k(0),
        last: k(e - 1),
        widest: k(_),
        highest: k(w),
        widths: o,
        heights: r,
      };
    }
    getLabelForValue(t) {
      return t;
    }
    getPixelForValue(t, e) {
      return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1
        ? null
        : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
      this._reversePixels && (t = 1 - t);
      const e = this._startPixel + t * this._length;
      return Mt(this._alignToPixels ? ae(this.chart, e, 0) : e, -32768, 32767);
    }
    getDecimalForPixel(t) {
      const e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: t, max: e } = this;
      return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
      const e = this.ticks || [];
      if (t >= 0 && t < e.length) {
        const i = e[t];
        return (
          i.$context ||
          (i.$context = (function (t, e, i) {
            return Oe(t, { tick: i, index: e, type: "tick" });
          })(this.getContext(), t, i))
        );
      }
      return (
        this.$context ||
        (this.$context = Oe(this.chart.getContext(), {
          scale: this,
          type: "scale",
        }))
      );
    }
    _tickSize() {
      const t = this.options.ticks,
        e = bt(this.labelRotation),
        i = Math.abs(Math.cos(e)),
        n = Math.abs(Math.sin(e)),
        s = this._getLabelSizes(),
        o = t.autoSkipPadding || 0,
        r = s ? s.widest.width + o : 0,
        a = s ? s.highest.height + o : 0;
      return this.isHorizontal()
        ? a * i > r * n
          ? r / i
          : a / n
        : a * n < r * i
        ? a / i
        : r / n;
    }
    _isVisible() {
      const t = this.options.display;
      return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const e = this.axis,
        i = this.chart,
        n = this.options,
        { grid: s, position: o, border: r } = n,
        a = s.offset,
        l = this.isHorizontal(),
        h = this.ticks.length + (a ? 1 : 0),
        c = Gn(s),
        d = [],
        u = r.setContext(this.getContext()),
        f = u.display ? u.width : 0,
        p = f / 2,
        g = function (t) {
          return ae(i, t, f);
        };
      let m, v, b, y, x, _, w, k, C, S, M, A;
      if ("top" === o)
        (m = g(this.bottom)),
          (_ = this.bottom - c),
          (k = m - p),
          (S = g(t.top) + p),
          (A = t.bottom);
      else if ("bottom" === o)
        (m = g(this.top)),
          (S = t.top),
          (A = g(t.bottom) - p),
          (_ = m + p),
          (k = this.top + c);
      else if ("left" === o)
        (m = g(this.right)),
          (x = this.right - c),
          (w = m - p),
          (C = g(t.left) + p),
          (M = t.right);
      else if ("right" === o)
        (m = g(this.left)),
          (C = t.left),
          (M = g(t.right) - p),
          (x = m + p),
          (w = this.left + c);
      else if ("x" === e) {
        if ("center" === o) m = g((t.top + t.bottom) / 2 + 0.5);
        else if (z(o)) {
          const t = Object.keys(o)[0],
            e = o[t];
          m = g(this.chart.scales[t].getPixelForValue(e));
        }
        (S = t.top), (A = t.bottom), (_ = m + p), (k = _ + c);
      } else if ("y" === e) {
        if ("center" === o) m = g((t.left + t.right) / 2);
        else if (z(o)) {
          const t = Object.keys(o)[0],
            e = o[t];
          m = g(this.chart.scales[t].getPixelForValue(e));
        }
        (x = m - p), (w = x - c), (C = t.left), (M = t.right);
      }
      const D = Y(n.ticks.maxTicksLimit, h),
        T = Math.max(1, Math.ceil(h / D));
      for (v = 0; v < h; v += T) {
        const t = this.getContext(v),
          e = s.setContext(t),
          n = r.setContext(t),
          o = e.lineWidth,
          h = e.color,
          c = n.dash || [],
          u = n.dashOffset,
          f = e.tickWidth,
          p = e.tickColor,
          g = e.tickBorderDash || [],
          m = e.tickBorderDashOffset;
        (b = Un(this, v, a)),
          void 0 !== b &&
            ((y = ae(i, b, o)),
            l ? (x = w = C = M = y) : (_ = k = S = A = y),
            d.push({
              tx1: x,
              ty1: _,
              tx2: w,
              ty2: k,
              x1: C,
              y1: S,
              x2: M,
              y2: A,
              width: o,
              color: h,
              borderDash: c,
              borderDashOffset: u,
              tickWidth: f,
              tickColor: p,
              tickBorderDash: g,
              tickBorderDashOffset: m,
            }));
      }
      return (this._ticksLength = h), (this._borderValue = m), d;
    }
    _computeLabelItems(t) {
      const e = this.axis,
        i = this.options,
        { position: n, ticks: s } = i,
        o = this.isHorizontal(),
        r = this.ticks,
        { align: a, crossAlign: l, padding: h, mirror: c } = s,
        d = Gn(i.grid),
        u = d + h,
        f = c ? -h : u,
        p = -bt(this.labelRotation),
        g = [];
      let m,
        v,
        b,
        y,
        x,
        _,
        w,
        k,
        C,
        S,
        M,
        A,
        D = "middle";
      if ("top" === n)
        (_ = this.bottom - f), (w = this._getXAxisLabelAlignment());
      else if ("bottom" === n)
        (_ = this.top + f), (w = this._getXAxisLabelAlignment());
      else if ("left" === n) {
        const t = this._getYAxisLabelAlignment(d);
        (w = t.textAlign), (x = t.x);
      } else if ("right" === n) {
        const t = this._getYAxisLabelAlignment(d);
        (w = t.textAlign), (x = t.x);
      } else if ("x" === e) {
        if ("center" === n) _ = (t.top + t.bottom) / 2 + u;
        else if (z(n)) {
          const t = Object.keys(n)[0],
            e = n[t];
          _ = this.chart.scales[t].getPixelForValue(e) + u;
        }
        w = this._getXAxisLabelAlignment();
      } else if ("y" === e) {
        if ("center" === n) x = (t.left + t.right) / 2 - u;
        else if (z(n)) {
          const t = Object.keys(n)[0],
            e = n[t];
          x = this.chart.scales[t].getPixelForValue(e);
        }
        w = this._getYAxisLabelAlignment(d).textAlign;
      }
      "y" === e &&
        ("start" === a ? (D = "top") : "end" === a && (D = "bottom"));
      const T = this._getLabelSizes();
      for (m = 0, v = r.length; m < v; ++m) {
        (b = r[m]), (y = b.label);
        const t = s.setContext(this.getContext(m));
        (k = this.getPixelForTick(m) + s.labelOffset),
          (C = this._resolveTickFontOptions(m)),
          (S = C.lineHeight),
          (M = N(y) ? y.length : 1);
        const e = M / 2,
          i = t.color,
          a = t.textStrokeColor,
          h = t.textStrokeWidth;
        let d,
          u = w;
        if (
          (o
            ? ((x = k),
              "inner" === w &&
                (u =
                  m === v - 1
                    ? this.options.reverse
                      ? "left"
                      : "right"
                    : 0 === m
                    ? this.options.reverse
                      ? "right"
                      : "left"
                    : "center"),
              (A =
                "top" === n
                  ? "near" === l || 0 !== p
                    ? -M * S + S / 2
                    : "center" === l
                    ? -T.highest.height / 2 - e * S + S
                    : -T.highest.height + S / 2
                  : "near" === l || 0 !== p
                  ? S / 2
                  : "center" === l
                  ? T.highest.height / 2 - e * S
                  : T.highest.height - M * S),
              c && (A *= -1),
              0 === p || t.showLabelBackdrop || (x += (S / 2) * Math.sin(p)))
            : ((_ = k), (A = ((1 - M) * S) / 2)),
          t.showLabelBackdrop)
        ) {
          const e = Ae(t.backdropPadding),
            i = T.heights[m],
            n = T.widths[m];
          let s = A - e.top,
            o = 0 - e.left;
          switch (D) {
            case "middle":
              s -= i / 2;
              break;
            case "bottom":
              s -= i;
          }
          switch (w) {
            case "center":
              o -= n / 2;
              break;
            case "right":
              o -= n;
              break;
            case "inner":
              m === v - 1 ? (o -= n) : m > 0 && (o -= n / 2);
          }
          d = {
            left: o,
            top: s,
            width: n + e.width,
            height: i + e.height,
            color: t.backdropColor,
          };
        }
        g.push({
          label: y,
          font: C,
          textOffset: A,
          options: {
            rotation: p,
            color: i,
            strokeColor: a,
            strokeWidth: h,
            textAlign: u,
            textBaseline: D,
            translation: [x, _],
            backdrop: d,
          },
        });
      }
      return g;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: e } = this.options;
      if (-bt(this.labelRotation)) return "top" === t ? "left" : "right";
      let i = "center";
      return (
        "start" === e.align
          ? (i = "left")
          : "end" === e.align
          ? (i = "right")
          : "inner" === e.align && (i = "inner"),
        i
      );
    }
    _getYAxisLabelAlignment(t) {
      const {
          position: e,
          ticks: { crossAlign: i, mirror: n, padding: s },
        } = this.options,
        o = t + s,
        r = this._getLabelSizes().widest.width;
      let a, l;
      return (
        "left" === e
          ? n
            ? ((l = this.right + s),
              "near" === i
                ? (a = "left")
                : "center" === i
                ? ((a = "center"), (l += r / 2))
                : ((a = "right"), (l += r)))
            : ((l = this.right - o),
              "near" === i
                ? (a = "right")
                : "center" === i
                ? ((a = "center"), (l -= r / 2))
                : ((a = "left"), (l = this.left)))
          : "right" === e
          ? n
            ? ((l = this.left + s),
              "near" === i
                ? (a = "right")
                : "center" === i
                ? ((a = "center"), (l -= r / 2))
                : ((a = "left"), (l -= r)))
            : ((l = this.left + o),
              "near" === i
                ? (a = "left")
                : "center" === i
                ? ((a = "center"), (l += r / 2))
                : ((a = "right"), (l = this.right)))
          : (a = "right"),
        { textAlign: a, x: l }
      );
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const t = this.chart,
        e = this.options.position;
      return "left" === e || "right" === e
        ? { top: 0, left: this.left, bottom: t.height, right: this.right }
        : "top" === e || "bottom" === e
        ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
        : void 0;
    }
    drawBackground() {
      const {
        ctx: t,
        options: { backgroundColor: e },
        left: i,
        top: n,
        width: s,
        height: o,
      } = this;
      e && (t.save(), (t.fillStyle = e), t.fillRect(i, n, s, o), t.restore());
    }
    getLineWidthForValue(t) {
      const e = this.options.grid;
      if (!this._isVisible() || !e.display) return 0;
      const i = this.ticks.findIndex((e) => e.value === t);
      if (i >= 0) {
        return e.setContext(this.getContext(i)).lineWidth;
      }
      return 0;
    }
    drawGrid(t) {
      const e = this.options.grid,
        i = this.ctx,
        n =
          this._gridLineItems ||
          (this._gridLineItems = this._computeGridLineItems(t));
      let s, o;
      const r = (t, e, n) => {
        n.width &&
          n.color &&
          (i.save(),
          (i.lineWidth = n.width),
          (i.strokeStyle = n.color),
          i.setLineDash(n.borderDash || []),
          (i.lineDashOffset = n.borderDashOffset),
          i.beginPath(),
          i.moveTo(t.x, t.y),
          i.lineTo(e.x, e.y),
          i.stroke(),
          i.restore());
      };
      if (e.display)
        for (s = 0, o = n.length; s < o; ++s) {
          const t = n[s];
          e.drawOnChartArea && r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
            e.drawTicks &&
              r(
                { x: t.tx1, y: t.ty1 },
                { x: t.tx2, y: t.ty2 },
                {
                  color: t.tickColor,
                  width: t.tickWidth,
                  borderDash: t.tickBorderDash,
                  borderDashOffset: t.tickBorderDashOffset,
                }
              );
        }
    }
    drawBorder() {
      const {
          chart: t,
          ctx: e,
          options: { border: i, grid: n },
        } = this,
        s = i.setContext(this.getContext()),
        o = i.display ? s.width : 0;
      if (!o) return;
      const r = n.setContext(this.getContext(0)).lineWidth,
        a = this._borderValue;
      let l, h, c, d;
      this.isHorizontal()
        ? ((l = ae(t, this.left, o) - o / 2),
          (h = ae(t, this.right, r) + r / 2),
          (c = d = a))
        : ((c = ae(t, this.top, o) - o / 2),
          (d = ae(t, this.bottom, r) + r / 2),
          (l = h = a)),
        e.save(),
        (e.lineWidth = s.width),
        (e.strokeStyle = s.color),
        e.beginPath(),
        e.moveTo(l, c),
        e.lineTo(h, d),
        e.stroke(),
        e.restore();
    }
    drawLabels(t) {
      if (!this.options.ticks.display) return;
      const e = this.ctx,
        i = this._computeLabelArea();
      i && ue(e, i);
      const n = this.getLabelItems(t);
      for (const t of n) {
        const i = t.options,
          n = t.font;
        be(e, t.label, 0, t.textOffset, n, i);
      }
      i && fe(e);
    }
    drawTitle() {
      const {
        ctx: t,
        options: { position: e, title: i, reverse: n },
      } = this;
      if (!i.display) return;
      const s = De(i.font),
        o = Ae(i.padding),
        r = i.align;
      let a = s.lineHeight / 2;
      "bottom" === e || "center" === e || z(e)
        ? ((a += o.bottom),
          N(i.text) && (a += s.lineHeight * (i.text.length - 1)))
        : (a += o.top);
      const {
        titleX: l,
        titleY: h,
        maxWidth: c,
        rotation: d,
      } = (function (t, e, i, n) {
        const { top: s, left: o, bottom: r, right: a, chart: l } = t,
          { chartArea: h, scales: c } = l;
        let d,
          u,
          f,
          p = 0;
        const g = r - s,
          m = a - o;
        if (t.isHorizontal()) {
          if (((u = Nt(n, o, a)), z(i))) {
            const t = Object.keys(i)[0],
              n = i[t];
            f = c[t].getPixelForValue(n) + g - e;
          } else
            f = "center" === i ? (h.bottom + h.top) / 2 + g - e : Bn(t, i, e);
          d = a - o;
        } else {
          if (z(i)) {
            const t = Object.keys(i)[0],
              n = i[t];
            u = c[t].getPixelForValue(n) - m + e;
          } else
            u = "center" === i ? (h.left + h.right) / 2 - m + e : Bn(t, i, e);
          (f = Nt(n, r, s)), (p = "left" === i ? -ht : ht);
        }
        return { titleX: u, titleY: f, maxWidth: d, rotation: p };
      })(this, a, e, r);
      be(t, i.text, 0, 0, s, {
        color: i.color,
        maxWidth: c,
        rotation: d,
        textAlign: qn(r, e, n),
        textBaseline: "middle",
        translation: [l, h],
      });
    }
    draw(t) {
      this._isVisible() &&
        (this.drawBackground(),
        this.drawGrid(t),
        this.drawBorder(),
        this.drawTitle(),
        this.drawLabels(t));
    }
    _layers() {
      const t = this.options,
        e = (t.ticks && t.ticks.z) || 0,
        i = Y(t.grid && t.grid.z, -1),
        n = Y(t.border && t.border.z, 0);
      return this._isVisible() && this.draw === Xn.prototype.draw
        ? [
            {
              z: i,
              draw: (t) => {
                this.drawBackground(), this.drawGrid(t), this.drawTitle();
              },
            },
            {
              z: n,
              draw: () => {
                this.drawBorder();
              },
            },
            {
              z: e,
              draw: (t) => {
                this.drawLabels(t);
              },
            },
          ]
        : [
            {
              z: e,
              draw: (t) => {
                this.draw(t);
              },
            },
          ];
    }
    getMatchingVisibleMetas(t) {
      const e = this.chart.getSortedVisibleDatasetMetas(),
        i = this.axis + "AxisID",
        n = [];
      let s, o;
      for (s = 0, o = e.length; s < o; ++s) {
        const o = e[s];
        o[i] !== this.id || (t && o.type !== t) || n.push(o);
      }
      return n;
    }
    _resolveTickFontOptions(t) {
      return De(this.options.ticks.setContext(this.getContext(t)).font);
    }
    _maxDigits() {
      const t = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t;
    }
  }
  class Zn {
    constructor(t, e, i) {
      (this.type = t),
        (this.scope = e),
        (this.override = i),
        (this.items = Object.create(null));
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(
        this.type.prototype,
        t.prototype
      );
    }
    register(t) {
      const e = Object.getPrototypeOf(t);
      let i;
      (function (t) {
        return "id" in t && "defaults" in t;
      })(e) && (i = this.register(e));
      const n = this.items,
        s = t.id,
        o = this.scope + "." + s;
      if (!s) throw new Error("class does not have id: " + t);
      return (
        s in n ||
          ((n[s] = t),
          (function (t, e, i) {
            const n = q(Object.create(null), [
              i ? se.get(i) : {},
              se.get(e),
              t.defaults,
            ]);
            se.set(e, n),
              t.defaultRoutes &&
                (function (t, e) {
                  Object.keys(e).forEach((i) => {
                    const n = i.split("."),
                      s = n.pop(),
                      o = [t].concat(n).join("."),
                      r = e[i].split("."),
                      a = r.pop(),
                      l = r.join(".");
                    se.route(o, s, l, a);
                  });
                })(e, t.defaultRoutes);
            t.descriptors && se.describe(e, t.descriptors);
          })(t, o, i),
          this.override && se.override(t.id, t.overrides)),
        o
      );
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items,
        i = t.id,
        n = this.scope;
      i in e && delete e[i],
        n && i in se[n] && (delete se[n][i], this.override && delete Qt[i]);
    }
  }
  class Jn {
    constructor() {
      (this.controllers = new Zn(Yi, "datasets", !0)),
        (this.elements = new Zn(jn, "elements")),
        (this.plugins = new Zn(Object, "plugins")),
        (this.scales = new Zn(Xn, "scales")),
        (this._typedRegistries = [
          this.controllers,
          this.scales,
          this.elements,
        ]);
    }
    add(...t) {
      this._each("register", t);
    }
    remove(...t) {
      this._each("unregister", t);
    }
    addControllers(...t) {
      this._each("register", t, this.controllers);
    }
    addElements(...t) {
      this._each("register", t, this.elements);
    }
    addPlugins(...t) {
      this._each("register", t, this.plugins);
    }
    addScales(...t) {
      this._each("register", t, this.scales);
    }
    getController(t) {
      return this._get(t, this.controllers, "controller");
    }
    getElement(t) {
      return this._get(t, this.elements, "element");
    }
    getPlugin(t) {
      return this._get(t, this.plugins, "plugin");
    }
    getScale(t) {
      return this._get(t, this.scales, "scale");
    }
    removeControllers(...t) {
      this._each("unregister", t, this.controllers);
    }
    removeElements(...t) {
      this._each("unregister", t, this.elements);
    }
    removePlugins(...t) {
      this._each("unregister", t, this.plugins);
    }
    removeScales(...t) {
      this._each("unregister", t, this.scales);
    }
    _each(t, e, i) {
      [...e].forEach((e) => {
        const n = i || this._getRegistryForType(e);
        i || n.isForType(e) || (n === this.plugins && e.id)
          ? this._exec(t, n, e)
          : V(e, (e) => {
              const n = i || this._getRegistryForType(e);
              this._exec(t, n, e);
            });
      });
    }
    _exec(t, e, i) {
      const n = tt(t);
      B(i["before" + n], [], i), e[t](i), B(i["after" + n], [], i);
    }
    _getRegistryForType(t) {
      for (let e = 0; e < this._typedRegistries.length; e++) {
        const i = this._typedRegistries[e];
        if (i.isForType(t)) return i;
      }
      return this.plugins;
    }
    _get(t, e, i) {
      const n = e.get(t);
      if (void 0 === n)
        throw new Error('"' + t + '" is not a registered ' + i + ".");
      return n;
    }
  }
  var Qn = new Jn();
  class ts {
    constructor() {
      this._init = [];
    }
    notify(t, e, i, n) {
      "beforeInit" === e &&
        ((this._init = this._createDescriptors(t, !0)),
        this._notify(this._init, t, "install"));
      const s = n ? this._descriptors(t).filter(n) : this._descriptors(t),
        o = this._notify(s, t, e, i);
      return (
        "afterDestroy" === e &&
          (this._notify(s, t, "stop"),
          this._notify(this._init, t, "uninstall")),
        o
      );
    }
    _notify(t, e, i, n) {
      n = n || {};
      for (const s of t) {
        const t = s.plugin;
        if (!1 === B(t[i], [e, n, s.options], t) && n.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      F(this._cache) ||
        ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = (this._cache = this._createDescriptors(t));
      return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
      const i = t && t.config,
        n = Y(i.options && i.options.plugins, {}),
        s = (function (t) {
          const e = {},
            i = [],
            n = Object.keys(Qn.plugins.items);
          for (let t = 0; t < n.length; t++) i.push(Qn.getPlugin(n[t]));
          const s = t.plugins || [];
          for (let t = 0; t < s.length; t++) {
            const n = s[t];
            -1 === i.indexOf(n) && (i.push(n), (e[n.id] = !0));
          }
          return { plugins: i, localIds: e };
        })(i);
      return !1 !== n || e
        ? (function (t, { plugins: e, localIds: i }, n, s) {
            const o = [],
              r = t.getContext();
            for (const a of e) {
              const e = a.id,
                l = es(n[e], s);
              null !== l &&
                o.push({
                  plugin: a,
                  options: is(t.config, { plugin: a, local: i[e] }, l, r),
                });
            }
            return o;
          })(t, s, n, e)
        : [];
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        i = this._cache,
        n = (t, e) =>
          t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
      this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start");
    }
  }
  function es(t, e) {
    return e || !1 !== t ? (!0 === t ? {} : t) : null;
  }
  function is(t, { plugin: e, local: i }, n, s) {
    const o = t.pluginScopeKeys(e),
      r = t.getOptionScopes(n, o);
    return (
      i && e.defaults && r.push(e.defaults),
      t.createResolver(r, s, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0,
      })
    );
  }
  function ns(t, e) {
    const i = se.datasets[t] || {};
    return (
      ((e.datasets || {})[t] || {}).indexAxis ||
      e.indexAxis ||
      i.indexAxis ||
      "x"
    );
  }
  function ss(t) {
    if ("x" === t || "y" === t || "r" === t) return t;
  }
  function os(t, ...e) {
    if (ss(t)) return t;
    for (const n of e) {
      const e =
        n.axis ||
        ("top" === (i = n.position) || "bottom" === i
          ? "x"
          : "left" === i || "right" === i
          ? "y"
          : void 0) ||
        (t.length > 1 && ss(t[0].toLowerCase()));
      if (e) return e;
    }
    var i;
    throw new Error(
      `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
    );
  }
  function rs(t, e, i) {
    if (i[e + "AxisID"] === t) return { axis: e };
  }
  function as(t, e) {
    const i = Qt[t.type] || { scales: {} },
      n = e.scales || {},
      s = ns(t.type, e),
      o = Object.create(null);
    return (
      Object.keys(n).forEach((e) => {
        const r = n[e];
        if (!z(r))
          return console.error(`Invalid scale configuration for scale: ${e}`);
        if (r._proxy)
          return console.warn(
            `Ignoring resolver passed as options for scale: ${e}`
          );
        const a = os(
            e,
            r,
            (function (t, e) {
              if (e.data && e.data.datasets) {
                const i = e.data.datasets.filter(
                  (e) => e.xAxisID === t || e.yAxisID === t
                );
                if (i.length) return rs(t, "x", i[0]) || rs(t, "y", i[0]);
              }
              return {};
            })(e, t),
            se.scales[r.type]
          ),
          l = (function (t, e) {
            return t === e ? "_index_" : "_value_";
          })(a, s),
          h = i.scales || {};
        o[e] = X(Object.create(null), [{ axis: a }, r, h[a], h[l]]);
      }),
      t.data.datasets.forEach((i) => {
        const s = i.type || t.type,
          r = i.indexAxis || ns(s, e),
          a = (Qt[s] || {}).scales || {};
        Object.keys(a).forEach((t) => {
          const e = (function (t, e) {
              let i = t;
              return (
                "_index_" === t
                  ? (i = e)
                  : "_value_" === t && (i = "x" === e ? "y" : "x"),
                i
              );
            })(t, r),
            s = i[e + "AxisID"] || e;
          (o[s] = o[s] || Object.create(null)),
            X(o[s], [{ axis: e }, n[s], a[t]]);
        });
      }),
      Object.keys(o).forEach((t) => {
        const e = o[t];
        X(e, [se.scales[e.type], se.scale]);
      }),
      o
    );
  }
  function ls(t) {
    const e = t.options || (t.options = {});
    (e.plugins = Y(e.plugins, {})), (e.scales = as(t, e));
  }
  function hs(t) {
    return (
      ((t = t || {}).datasets = t.datasets || []),
      (t.labels = t.labels || []),
      t
    );
  }
  const cs = new Map(),
    ds = new Set();
  function us(t, e) {
    let i = cs.get(t);
    return i || ((i = e()), cs.set(t, i), ds.add(i)), i;
  }
  const fs = (t, e, i) => {
    const n = Q(e, i);
    void 0 !== n && t.add(n);
  };
  class ps {
    constructor(t) {
      (this._config = (function (t) {
        return ((t = t || {}).data = hs(t.data)), ls(t), t;
      })(t)),
        (this._scopeCache = new Map()),
        (this._resolverCache = new Map());
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(t) {
      this._config.type = t;
    }
    get data() {
      return this._config.data;
    }
    set data(t) {
      this._config.data = hs(t);
    }
    get options() {
      return this._config.options;
    }
    set options(t) {
      this._config.options = t;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t = this._config;
      this.clearCache(), ls(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return us(t, () => [[`datasets.${t}`, ""]]);
    }
    datasetAnimationScopeKeys(t, e) {
      return us(`${t}.transition.${e}`, () => [
        [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
        [`datasets.${t}`, ""],
      ]);
    }
    datasetElementScopeKeys(t, e) {
      return us(`${t}-${e}`, () => [
        [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
      ]);
    }
    pluginScopeKeys(t) {
      const e = t.id;
      return us(`${this.type}-plugin-${e}`, () => [
        [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
      ]);
    }
    _cachedScopes(t, e) {
      const i = this._scopeCache;
      let n = i.get(t);
      return (n && !e) || ((n = new Map()), i.set(t, n)), n;
    }
    getOptionScopes(t, e, i) {
      const { options: n, type: s } = this,
        o = this._cachedScopes(t, i),
        r = o.get(e);
      if (r) return r;
      const a = new Set();
      e.forEach((e) => {
        t && (a.add(t), e.forEach((e) => fs(a, t, e))),
          e.forEach((t) => fs(a, n, t)),
          e.forEach((t) => fs(a, Qt[s] || {}, t)),
          e.forEach((t) => fs(a, se, t)),
          e.forEach((t) => fs(a, te, t));
      });
      const l = Array.from(a);
      return (
        0 === l.length && l.push(Object.create(null)),
        ds.has(e) && o.set(e, l),
        l
      );
    }
    chartOptionScopes() {
      const { options: t, type: e } = this;
      return [t, Qt[e] || {}, se.datasets[e] || {}, { type: e }, se, te];
    }
    resolveNamedOptions(t, e, i, n = [""]) {
      const s = { $shared: !0 },
        { resolver: o, subPrefixes: r } = gs(this._resolverCache, t, n);
      let a = o;
      if (
        (function (t, e) {
          const { isScriptable: i, isIndexable: n } = Le(t);
          for (const s of e) {
            const e = i(s),
              o = n(s),
              r = (o || e) && t[s];
            if ((e && (it(r) || ms(r))) || (o && N(r))) return !0;
          }
          return !1;
        })(o, e)
      ) {
        s.$shared = !1;
        a = Ee(o, (i = it(i) ? i() : i), this.createResolver(t, i, r));
      }
      for (const t of e) s[t] = a[t];
      return s;
    }
    createResolver(t, e, i = [""], n) {
      const { resolver: s } = gs(this._resolverCache, t, i);
      return z(e) ? Ee(s, e, void 0, n) : s;
    }
  }
  function gs(t, e, i) {
    let n = t.get(e);
    n || ((n = new Map()), t.set(e, n));
    const s = i.join();
    let o = n.get(s);
    if (!o) {
      (o = {
        resolver: Pe(e, i),
        subPrefixes: i.filter((t) => !t.toLowerCase().includes("hover")),
      }),
        n.set(s, o);
    }
    return o;
  }
  const ms = (t) => z(t) && Object.getOwnPropertyNames(t).some((e) => it(t[e]));
  const vs = ["top", "bottom", "left", "right", "chartArea"];
  function bs(t, e) {
    return "top" === t || "bottom" === t || (-1 === vs.indexOf(t) && "x" === e);
  }
  function ys(t, e) {
    return function (i, n) {
      return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t];
    };
  }
  function xs(t) {
    const e = t.chart,
      i = e.options.animation;
    e.notifyPlugins("afterRender"), B(i && i.onComplete, [t], e);
  }
  function _s(t) {
    const e = t.chart,
      i = e.options.animation;
    B(i && i.onProgress, [t], e);
  }
  function ws(t) {
    return (
      Je() && "string" == typeof t
        ? (t = document.getElementById(t))
        : t && t.length && (t = t[0]),
      t && t.canvas && (t = t.canvas),
      t
    );
  }
  const ks = {},
    Cs = (t) => {
      const e = ws(t);
      return Object.values(ks)
        .filter((t) => t.canvas === e)
        .pop();
    };
  function Ss(t, e, i) {
    const n = Object.keys(t);
    for (const s of n) {
      const n = +s;
      if (n >= e) {
        const o = t[s];
        delete t[s], (i > 0 || n > e) && (t[n + i] = o);
      }
    }
  }
  function Ms(t, e, i) {
    return t.options.clip ? t[i] : e[i];
  }
  let As = class {
    static defaults = se;
    static instances = ks;
    static overrides = Qt;
    static registry = Qn;
    static version = "4.4.1";
    static getChart = Cs;
    static register(...t) {
      Qn.add(...t), Ds();
    }
    static unregister(...t) {
      Qn.remove(...t), Ds();
    }
    constructor(t, e) {
      const i = (this.config = new ps(e)),
        n = ws(t),
        s = Cs(n);
      if (s)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            s.id +
            "' must be destroyed before the canvas with ID '" +
            s.canvas.id +
            "' can be reused."
        );
      const o = i.createResolver(i.chartOptionScopes(), this.getContext());
      (this.platform = new (i.platform ||
        (function (t) {
          return !Je() ||
            ("undefined" != typeof OffscreenCanvas &&
              t instanceof OffscreenCanvas)
            ? Cn
            : $n;
        })(n))()),
        this.platform.updateConfig(i);
      const r = this.platform.acquireContext(n, o.aspectRatio),
        a = r && r.canvas,
        l = a && a.height,
        h = a && a.width;
      (this.id = I()),
        (this.ctx = r),
        (this.canvas = a),
        (this.width = h),
        (this.height = l),
        (this._options = o),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new ts()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = (function (t, e) {
          let i;
          return function (...n) {
            return (
              e
                ? (clearTimeout(i), (i = setTimeout(t, e, n)))
                : t.apply(this, n),
              e
            );
          };
        })((t) => this.update(t), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (ks[this.id] = this),
        r && a
          ? (Si.listen(this, "complete", xs),
            Si.listen(this, "progress", _s),
            this._initialize(),
            this.attached && this.update())
          : console.error(
              "Failed to create chart: can't acquire context from the given item"
            );
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: e },
        width: i,
        height: n,
        _aspectRatio: s,
      } = this;
      return F(t) ? (e && s ? s : n ? i / n : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return Qn;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : li(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return le(this.canvas, this.ctx), this;
    }
    stop() {
      return Si.stop(this), this;
    }
    resize(t, e) {
      Si.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: e })
        : this._resize(t, e);
    }
    _resize(t, e) {
      const i = this.options,
        n = this.canvas,
        s = i.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(n, t, e, s),
        r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        a = this.width ? "resize" : "attach";
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        li(this, r, !0) &&
          (this.notifyPlugins("resize", { size: o }),
          B(i.onResize, [this, o], this),
          this.attached && this._doResize(a) && this.render());
    }
    ensureScalesHaveIDs() {
      V(this.options.scales || {}, (t, e) => {
        t.id = e;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        e = t.scales,
        i = this.scales,
        n = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
      let s = [];
      e &&
        (s = s.concat(
          Object.keys(e).map((t) => {
            const i = e[t],
              n = os(t, i),
              s = "r" === n,
              o = "x" === n;
            return {
              options: i,
              dposition: s ? "chartArea" : o ? "bottom" : "left",
              dtype: s ? "radialLinear" : o ? "category" : "linear",
            };
          })
        )),
        V(s, (e) => {
          const s = e.options,
            o = s.id,
            r = os(o, s),
            a = Y(s.type, e.dtype);
          (void 0 !== s.position && bs(s.position, r) === bs(e.dposition)) ||
            (s.position = e.dposition),
            (n[o] = !0);
          let l = null;
          if (o in i && i[o].type === a) l = i[o];
          else {
            (l = new (Qn.getScale(a))({
              id: o,
              type: a,
              ctx: this.ctx,
              chart: this,
            })),
              (i[l.id] = l);
          }
          l.init(s, t);
        }),
        V(n, (t, e) => {
          t || delete i[e];
        }),
        V(i, (t) => {
          wn.configure(this, t, t.options), wn.addBox(this, t);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        e = this.data.datasets.length,
        i = t.length;
      if ((t.sort((t, e) => t.index - e.index), i > e)) {
        for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
        t.splice(e, i - e);
      }
      this._sortedMetasets = t.slice(0).sort(ys("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: e },
      } = this;
      t.length > e.length && delete this._stacks,
        t.forEach((t, i) => {
          0 === e.filter((e) => e === t._dataset).length &&
            this._destroyDatasetMeta(i);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        e = this.data.datasets;
      let i, n;
      for (
        this._removeUnreferencedMetasets(), i = 0, n = e.length;
        i < n;
        i++
      ) {
        const n = e[i];
        let s = this.getDatasetMeta(i);
        const o = n.type || this.config.type;
        if (
          (s.type &&
            s.type !== o &&
            (this._destroyDatasetMeta(i), (s = this.getDatasetMeta(i))),
          (s.type = o),
          (s.indexAxis = n.indexAxis || ns(o, this.options)),
          (s.order = n.order || 0),
          (s.index = i),
          (s.label = "" + n.label),
          (s.visible = this.isDatasetVisible(i)),
          s.controller)
        )
          s.controller.updateIndex(i), s.controller.linkScales();
        else {
          const e = Qn.getController(o),
            { datasetElementType: n, dataElementType: r } = se.datasets[o];
          Object.assign(e, {
            dataElementType: Qn.getElement(r),
            datasetElementType: n && Qn.getElement(n),
          }),
            (s.controller = new e(this, i)),
            t.push(s.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      V(
        this.data.datasets,
        (t, e) => {
          this.getDatasetMeta(e).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const e = this.config;
      e.update();
      const i = (this._options = e.createResolver(
          e.chartOptionScopes(),
          this.getContext()
        )),
        n = (this._animationsDisabled = !i.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        !1 === this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
      )
        return;
      const s = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let t = 0, e = this.data.datasets.length; t < e; t++) {
        const { controller: e } = this.getDatasetMeta(t),
          i = !n && -1 === s.indexOf(e);
        e.buildOrUpdateElements(i), (o = Math.max(+e.getMaxOverflow(), o));
      }
      (o = this._minPadding = i.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        n ||
          V(s, (t) => {
            t.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(ys("z", "_idx"));
      const { _active: r, _lastEvent: a } = this;
      a
        ? this._eventHandler(a, !0)
        : r.length && this._updateHoverStyles(r, r, !0),
        this.render();
    }
    _updateScales() {
      V(this.scales, (t) => {
        wn.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        e = new Set(Object.keys(this._listeners)),
        i = new Set(t.events);
      (nt(e, i) && !!this._responsiveListeners === t.responsive) ||
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        e = this._getUniformDataChanges() || [];
      for (const { method: i, start: n, count: s } of e) {
        Ss(t, n, "_removeElements" === i ? -s : s);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const e = this.data.datasets.length,
        i = (e) =>
          new Set(
            t
              .filter((t) => t[0] === e)
              .map((t, e) => e + "," + t.splice(1).join(","))
          ),
        n = i(0);
      for (let t = 1; t < e; t++) if (!nt(n, i(t))) return;
      return Array.from(n)
        .map((t) => t.split(","))
        .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
    }
    _updateLayout(t) {
      if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 })) return;
      wn.update(this, this.width, this.height, t);
      const e = this.chartArea,
        i = e.width <= 0 || e.height <= 0;
      (this._layers = []),
        V(
          this.boxes,
          (t) => {
            (i && "chartArea" === t.position) ||
              (t.configure && t.configure(), this._layers.push(...t._layers()));
          },
          this
        ),
        this._layers.forEach((t, e) => {
          t._idx = e;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        !1 !==
        this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })
      ) {
        for (let t = 0, e = this.data.datasets.length; t < e; ++t)
          this.getDatasetMeta(t).controller.configure();
        for (let e = 0, i = this.data.datasets.length; e < i; ++e)
          this._updateDataset(e, it(t) ? t({ datasetIndex: e }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, e) {
      const i = this.getDatasetMeta(t),
        n = { meta: i, index: t, mode: e, cancelable: !0 };
      !1 !== this.notifyPlugins("beforeDatasetUpdate", n) &&
        (i.controller._update(e),
        (n.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", n));
    }
    render() {
      !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
        (Si.has(this)
          ? this.attached && !Si.running(this) && Si.start(this)
          : (this.draw(), xs({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: t, height: e } = this._resizeBeforeDraw;
        this._resize(t, e), (this._resizeBeforeDraw = null);
      }
      if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
      if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 })) return;
      const e = this._layers;
      for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
      for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const e = this._sortedMetasets,
        i = [];
      let n, s;
      for (n = 0, s = e.length; n < s; ++n) {
        const s = e[n];
        (t && !s.visible) || i.push(s);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }))
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const e = this.ctx,
        i = t._clip,
        n = !i.disabled,
        s = (function (t, e) {
          const { xScale: i, yScale: n } = t;
          return i && n
            ? {
                left: Ms(i, e, "left"),
                right: Ms(i, e, "right"),
                top: Ms(n, e, "top"),
                bottom: Ms(n, e, "bottom"),
              }
            : e;
        })(t, this.chartArea),
        o = { meta: t, index: t.index, cancelable: !0 };
      !1 !== this.notifyPlugins("beforeDatasetDraw", o) &&
        (n &&
          ue(e, {
            left: !1 === i.left ? 0 : s.left - i.left,
            right: !1 === i.right ? this.width : s.right + i.right,
            top: !1 === i.top ? 0 : s.top - i.top,
            bottom: !1 === i.bottom ? this.height : s.bottom + i.bottom,
          }),
        t.controller.draw(),
        n && fe(e),
        (o.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(t) {
      return de(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, i, n) {
      const s = hn.modes[e];
      return "function" == typeof s ? s(this, t, i, n) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t],
        i = this._metasets;
      let n = i.filter((t) => t && t._dataset === e).pop();
      return (
        n ||
          ((n = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (e && e.order) || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(n)),
        n
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = Oe(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const e = this.data.datasets[t];
      if (!e) return !1;
      const i = this.getDatasetMeta(t);
      return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
      this.getDatasetMeta(t).hidden = !e;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, e, i) {
      const n = i ? "show" : "hide",
        s = this.getDatasetMeta(t),
        o = s.controller._resolveAnimations(void 0, n);
      et(e)
        ? ((s.data[e].hidden = !i), this.update())
        : (this.setDatasetVisibility(t, i),
          o.update(s, { visible: i }),
          this.update((e) => (e.datasetIndex === t ? n : void 0)));
    }
    hide(t, e) {
      this._updateVisibility(t, e, !1);
    }
    show(t, e) {
      this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
      const e = this._metasets[t];
      e && e.controller && e.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, e;
      for (
        this.stop(), Si.remove(this), t = 0, e = this.data.datasets.length;
        t < e;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: e } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          le(t, e),
          this.platform.releaseContext(e),
          (this.canvas = null),
          (this.ctx = null)),
        delete ks[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        e = this.platform,
        i = (i, n) => {
          e.addEventListener(this, i, n), (t[i] = n);
        },
        n = (t, e, i) => {
          (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
        };
      V(this.options.events, (t) => i(t, n));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        e = this.platform,
        i = (i, n) => {
          e.addEventListener(this, i, n), (t[i] = n);
        },
        n = (i, n) => {
          t[i] && (e.removeEventListener(this, i, n), delete t[i]);
        },
        s = (t, e) => {
          this.canvas && this.resize(t, e);
        };
      let o;
      const r = () => {
        n("attach", r),
          (this.attached = !0),
          this.resize(),
          i("resize", s),
          i("detach", o);
      };
      (o = () => {
        (this.attached = !1),
          n("resize", s),
          this._stop(),
          this._resize(0, 0),
          i("attach", r);
      }),
        e.isAttached(this.canvas) ? r() : o();
    }
    unbindEvents() {
      V(this._listeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
        (this._listeners = {}),
        V(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, e, i) {
      const n = i ? "set" : "remove";
      let s, o, r, a;
      for (
        "dataset" === e &&
          ((s = this.getDatasetMeta(t[0].datasetIndex)),
          s.controller["_" + n + "DatasetHoverStyle"]()),
          r = 0,
          a = t.length;
        r < a;
        ++r
      ) {
        o = t[r];
        const e = o && this.getDatasetMeta(o.datasetIndex).controller;
        e && e[n + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this._active || [],
        i = t.map(({ datasetIndex: t, index: e }) => {
          const i = this.getDatasetMeta(t);
          if (!i) throw new Error("No dataset found at index " + t);
          return { datasetIndex: t, element: i.data[e], index: e };
        });
      !H(i, e) &&
        ((this._active = i),
        (this._lastEvent = null),
        this._updateHoverStyles(i, e));
    }
    notifyPlugins(t, e, i) {
      return this._plugins.notify(this, t, e, i);
    }
    isPluginEnabled(t) {
      return 1 === this._plugins._cache.filter((e) => e.plugin.id === t).length;
    }
    _updateHoverStyles(t, e, i) {
      const n = this.options.hover,
        s = (t, e) =>
          t.filter(
            (t) =>
              !e.some(
                (e) => t.datasetIndex === e.datasetIndex && t.index === e.index
              )
          ),
        o = s(e, t),
        r = i ? t : s(t, e);
      o.length && this.updateHoverStyle(o, n.mode, !1),
        r.length && n.mode && this.updateHoverStyle(r, n.mode, !0);
    }
    _eventHandler(t, e) {
      const i = {
          event: t,
          replay: e,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        n = (e) =>
          (e.options.events || this.options.events).includes(t.native.type);
      if (!1 === this.notifyPlugins("beforeEvent", i, n)) return;
      const s = this._handleEvent(t, e, i.inChartArea);
      return (
        (i.cancelable = !1),
        this.notifyPlugins("afterEvent", i, n),
        (s || i.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, e, i) {
      const { _active: n = [], options: s } = this,
        o = e,
        r = this._getActiveElements(t, n, i, o),
        a = (function (t) {
          return (
            "mouseup" === t.type ||
            "click" === t.type ||
            "contextmenu" === t.type
          );
        })(t),
        l = (function (t, e, i, n) {
          return i && "mouseout" !== t.type ? (n ? e : t) : null;
        })(t, this._lastEvent, i, a);
      i &&
        ((this._lastEvent = null),
        B(s.onHover, [t, r, this], this),
        a && B(s.onClick, [t, r, this], this));
      const h = !H(r, n);
      return (
        (h || e) && ((this._active = r), this._updateHoverStyles(r, n, e)),
        (this._lastEvent = l),
        h
      );
    }
    _getActiveElements(t, e, i, n) {
      if ("mouseout" === t.type) return [];
      if (!i) return e;
      const s = this.options.hover;
      return this.getElementsAtEventForMode(t, s.mode, s, n);
    }
  };
  function Ds() {
    return V(As.instances, (t) => t._plugins.invalidate());
  }
  function Ts(t, e, i, n) {
    const s = Ce(t.options.borderRadius, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd",
    ]);
    const o = (i - e) / 2,
      r = Math.min(o, (n * e) / 2),
      a = (t) => {
        const e = ((i - Math.min(o, t)) * n) / 2;
        return Mt(t, 0, Math.min(o, e));
      };
    return {
      outerStart: a(s.outerStart),
      outerEnd: a(s.outerEnd),
      innerStart: Mt(s.innerStart, 0, r),
      innerEnd: Mt(s.innerEnd, 0, r),
    };
  }
  function Os(t, e, i, n) {
    return { x: i + t * Math.cos(e), y: n + t * Math.sin(e) };
  }
  function Ps(t, e, i, n, s, o) {
    const { x: r, y: a, startAngle: l, pixelMargin: h, innerRadius: c } = e,
      d = Math.max(e.outerRadius + n + i - h, 0),
      u = c > 0 ? c + n + i + h : 0;
    let f = 0;
    const p = s - l;
    if (n) {
      const t = ((c > 0 ? c - n : 0) + (d > 0 ? d - n : 0)) / 2;
      f = (p - (0 !== t ? (p * t) / (t + n) : p)) / 2;
    }
    const g = (p - Math.max(0.001, p * d - i / st) / d) / 2,
      m = l + g + f,
      v = s - g - f,
      {
        outerStart: b,
        outerEnd: y,
        innerStart: x,
        innerEnd: _,
      } = Ts(e, u, d, v - m),
      w = d - b,
      k = d - y,
      C = m + b / w,
      S = v - y / k,
      M = u + x,
      A = u + _,
      D = m + x / M,
      T = v - _ / A;
    if ((t.beginPath(), o)) {
      const e = (C + S) / 2;
      if ((t.arc(r, a, d, C, e), t.arc(r, a, d, e, S), y > 0)) {
        const e = Os(k, S, r, a);
        t.arc(e.x, e.y, y, S, v + ht);
      }
      const i = Os(A, v, r, a);
      if ((t.lineTo(i.x, i.y), _ > 0)) {
        const e = Os(A, T, r, a);
        t.arc(e.x, e.y, _, v + ht, T + Math.PI);
      }
      const n = (v - _ / u + (m + x / u)) / 2;
      if (
        (t.arc(r, a, u, v - _ / u, n, !0),
        t.arc(r, a, u, n, m + x / u, !0),
        x > 0)
      ) {
        const e = Os(M, D, r, a);
        t.arc(e.x, e.y, x, D + Math.PI, m - ht);
      }
      const s = Os(w, m, r, a);
      if ((t.lineTo(s.x, s.y), b > 0)) {
        const e = Os(w, C, r, a);
        t.arc(e.x, e.y, b, m - ht, C);
      }
    } else {
      t.moveTo(r, a);
      const e = Math.cos(C) * d + r,
        i = Math.sin(C) * d + a;
      t.lineTo(e, i);
      const n = Math.cos(S) * d + r,
        s = Math.sin(S) * d + a;
      t.lineTo(n, s);
    }
    t.closePath();
  }
  function Es(t, e, i, n, s) {
    const { fullCircles: o, startAngle: r, circumference: a, options: l } = e,
      {
        borderWidth: h,
        borderJoinStyle: c,
        borderDash: d,
        borderDashOffset: u,
      } = l,
      f = "inner" === l.borderAlign;
    if (!h) return;
    t.setLineDash(d || []),
      (t.lineDashOffset = u),
      f
        ? ((t.lineWidth = 2 * h), (t.lineJoin = c || "round"))
        : ((t.lineWidth = h), (t.lineJoin = c || "bevel"));
    let p = e.endAngle;
    if (o) {
      Ps(t, e, i, n, p, s);
      for (let e = 0; e < o; ++e) t.stroke();
      isNaN(a) || (p = r + (a % ot || ot));
    }
    f &&
      (function (t, e, i) {
        const {
          startAngle: n,
          pixelMargin: s,
          x: o,
          y: r,
          outerRadius: a,
          innerRadius: l,
        } = e;
        let h = s / a;
        t.beginPath(),
          t.arc(o, r, a, n - h, i + h),
          l > s
            ? ((h = s / l), t.arc(o, r, l, i + h, n - h, !0))
            : t.arc(o, r, s, i + ht, n - ht),
          t.closePath(),
          t.clip();
      })(t, e, p),
      o || (Ps(t, e, i, n, p, s), t.stroke());
  }
  function Ls(t, e, i = e) {
    (t.lineCap = Y(i.borderCapStyle, e.borderCapStyle)),
      t.setLineDash(Y(i.borderDash, e.borderDash)),
      (t.lineDashOffset = Y(i.borderDashOffset, e.borderDashOffset)),
      (t.lineJoin = Y(i.borderJoinStyle, e.borderJoinStyle)),
      (t.lineWidth = Y(i.borderWidth, e.borderWidth)),
      (t.strokeStyle = Y(i.borderColor, e.borderColor));
  }
  function Rs(t, e, i) {
    t.lineTo(i.x, i.y);
  }
  function Is(t, e, i = {}) {
    const n = t.length,
      { start: s = 0, end: o = n - 1 } = i,
      { start: r, end: a } = e,
      l = Math.max(s, r),
      h = Math.min(o, a),
      c = (s < r && o < r) || (s > a && o > a);
    return {
      count: n,
      start: l,
      loop: e.loop,
      ilen: h < l && !c ? n + h - l : h - l,
    };
  }
  function Fs(t, e, i, n) {
    const { points: s, options: o } = e,
      { count: r, start: a, loop: l, ilen: h } = Is(s, i, n),
      c = (function (t) {
        return t.stepped
          ? pe
          : t.tension || "monotone" === t.cubicInterpolationMode
          ? ge
          : Rs;
      })(o);
    let d,
      u,
      f,
      { move: p = !0, reverse: g } = n || {};
    for (d = 0; d <= h; ++d)
      (u = s[(a + (g ? h - d : d)) % r]),
        u.skip ||
          (p ? (t.moveTo(u.x, u.y), (p = !1)) : c(t, f, u, g, o.stepped),
          (f = u));
    return l && ((u = s[(a + (g ? h : 0)) % r]), c(t, f, u, g, o.stepped)), !!l;
  }
  function Ns(t, e, i, n) {
    const s = e.points,
      { count: o, start: r, ilen: a } = Is(s, i, n),
      { move: l = !0, reverse: h } = n || {};
    let c,
      d,
      u,
      f,
      p,
      g,
      m = 0,
      v = 0;
    const b = (t) => (r + (h ? a - t : t)) % o,
      y = () => {
        f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g));
      };
    for (l && ((d = s[b(0)]), t.moveTo(d.x, d.y)), c = 0; c <= a; ++c) {
      if (((d = s[b(c)]), d.skip)) continue;
      const e = d.x,
        i = d.y,
        n = 0 | e;
      n === u
        ? (i < f ? (f = i) : i > p && (p = i), (m = (v * m + e) / ++v))
        : (y(), t.lineTo(e, i), (u = n), (v = 0), (f = p = i)),
        (g = i);
    }
    y();
  }
  function zs(t) {
    const e = t.options,
      i = e.borderDash && e.borderDash.length;
    return !(
      t._decimated ||
      t._loop ||
      e.tension ||
      "monotone" === e.cubicInterpolationMode ||
      e.stepped ||
      i
    )
      ? Ns
      : Fs;
  }
  const $s = "function" == typeof Path2D;
  function js(t, e, i, n) {
    $s && !e.options.segment
      ? (function (t, e, i, n) {
          let s = e._path;
          s || ((s = e._path = new Path2D()), e.path(s, i, n) && s.closePath()),
            Ls(t, e.options),
            t.stroke(s);
        })(t, e, i, n)
      : (function (t, e, i, n) {
          const { segments: s, options: o } = e,
            r = zs(e);
          for (const a of s)
            Ls(t, o, a.style),
              t.beginPath(),
              r(t, e, a, { start: i, end: i + n - 1 }) && t.closePath(),
              t.stroke();
        })(t, e, i, n);
  }
  class Ys extends jn {
    static id = "line";
    static defaults = {
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      capBezierPoints: !0,
      cubicInterpolationMode: "default",
      fill: !1,
      spanGaps: !1,
      stepped: !1,
      tension: 0,
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor",
    };
    static descriptors = {
      _scriptable: !0,
      _indexable: (t) => "borderDash" !== t && "fill" !== t,
    };
    constructor(t) {
      super(),
        (this.animated = !0),
        (this.options = void 0),
        (this._chart = void 0),
        (this._loop = void 0),
        (this._fullLoop = void 0),
        (this._path = void 0),
        (this._points = void 0),
        (this._segments = void 0),
        (this._decimated = !1),
        (this._pointsUpdated = !1),
        (this._datasetIndex = void 0),
        t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
      const i = this.options;
      if (
        (i.tension || "monotone" === i.cubicInterpolationMode) &&
        !i.stepped &&
        !this._pointsUpdated
      ) {
        const n = i.spanGaps ? this._loop : this._fullLoop;
        Ze(this._points, i, t, n, e), (this._pointsUpdated = !0);
      }
    }
    set points(t) {
      (this._points = t),
        delete this._segments,
        delete this._path,
        (this._pointsUpdated = !1);
    }
    get points() {
      return this._points;
    }
    get segments() {
      return (
        this._segments ||
        (this._segments = (function (t, e) {
          const i = t.points,
            n = t.options.spanGaps,
            s = i.length;
          if (!s) return [];
          const o = !!t._loop,
            { start: r, end: a } = (function (t, e, i, n) {
              let s = 0,
                o = e - 1;
              if (i && !n) for (; s < e && !t[s].skip; ) s++;
              for (; s < e && t[s].skip; ) s++;
              for (s %= e, i && (o += s); o > s && t[o % e].skip; ) o--;
              return (o %= e), { start: s, end: o };
            })(i, s, o, n);
          return _i(
            t,
            !0 === n
              ? [{ start: r, end: a, loop: o }]
              : (function (t, e, i, n) {
                  const s = t.length,
                    o = [];
                  let r,
                    a = e,
                    l = t[e];
                  for (r = e + 1; r <= i; ++r) {
                    const i = t[r % s];
                    i.skip || i.stop
                      ? l.skip ||
                        ((n = !1),
                        o.push({ start: e % s, end: (r - 1) % s, loop: n }),
                        (e = a = i.stop ? r : null))
                      : ((a = r), l.skip && (e = r)),
                      (l = i);
                  }
                  return (
                    null !== a && o.push({ start: e % s, end: a % s, loop: n }),
                    o
                  );
                })(
                  i,
                  r,
                  a < r ? a + s : a,
                  !!t._fullLoop && 0 === r && a === s - 1
                ),
            i,
            e
          );
        })(this, this.options.segment))
      );
    }
    first() {
      const t = this.segments,
        e = this.points;
      return t.length && e[t[0].start];
    }
    last() {
      const t = this.segments,
        e = this.points,
        i = t.length;
      return i && e[t[i - 1].end];
    }
    interpolate(t, e) {
      const i = this.options,
        n = t[e],
        s = this.points,
        o = xi(this, { property: e, start: n, end: n });
      if (!o.length) return;
      const r = [],
        a = (function (t) {
          return t.stepped
            ? ui
            : t.tension || "monotone" === t.cubicInterpolationMode
            ? fi
            : di;
        })(i);
      let l, h;
      for (l = 0, h = o.length; l < h; ++l) {
        const { start: h, end: c } = o[l],
          d = s[h],
          u = s[c];
        if (d === u) {
          r.push(d);
          continue;
        }
        const f = a(d, u, Math.abs((n - d[e]) / (u[e] - d[e])), i.stepped);
        (f[e] = t[e]), r.push(f);
      }
      return 1 === r.length ? r[0] : r;
    }
    pathSegment(t, e, i) {
      return zs(this)(t, this, e, i);
    }
    path(t, e, i) {
      const n = this.segments,
        s = zs(this);
      let o = this._loop;
      (e = e || 0), (i = i || this.points.length - e);
      for (const r of n) o &= s(t, this, r, { start: e, end: e + i - 1 });
      return !!o;
    }
    draw(t, e, i, n) {
      const s = this.options || {};
      (this.points || []).length &&
        s.borderWidth &&
        (t.save(), js(t, this, i, n), t.restore()),
        this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
  }
  function Ws(t, e, i, n) {
    const s = t.options,
      { [i]: o } = t.getProps([i], n);
    return Math.abs(e - o) < s.radius + s.hitRadius;
  }
  function Bs(t, e) {
    const {
      x: i,
      y: n,
      base: s,
      width: o,
      height: r,
    } = t.getProps(["x", "y", "base", "width", "height"], e);
    let a, l, h, c, d;
    return (
      t.horizontal
        ? ((d = r / 2),
          (a = Math.min(i, s)),
          (l = Math.max(i, s)),
          (h = n - d),
          (c = n + d))
        : ((d = o / 2),
          (a = i - d),
          (l = i + d),
          (h = Math.min(n, s)),
          (c = Math.max(n, s))),
      { left: a, top: h, right: l, bottom: c }
    );
  }
  function Vs(t, e, i, n) {
    return t ? 0 : Mt(e, i, n);
  }
  function Hs(t) {
    const e = Bs(t),
      i = e.right - e.left,
      n = e.bottom - e.top,
      s = (function (t, e, i) {
        const n = t.options.borderWidth,
          s = t.borderSkipped,
          o = Se(n);
        return {
          t: Vs(s.top, o.top, 0, i),
          r: Vs(s.right, o.right, 0, e),
          b: Vs(s.bottom, o.bottom, 0, i),
          l: Vs(s.left, o.left, 0, e),
        };
      })(t, i / 2, n / 2),
      o = (function (t, e, i) {
        const { enableBorderRadius: n } = t.getProps(["enableBorderRadius"]),
          s = t.options.borderRadius,
          o = Me(s),
          r = Math.min(e, i),
          a = t.borderSkipped,
          l = n || z(s);
        return {
          topLeft: Vs(!l || a.top || a.left, o.topLeft, 0, r),
          topRight: Vs(!l || a.top || a.right, o.topRight, 0, r),
          bottomLeft: Vs(!l || a.bottom || a.left, o.bottomLeft, 0, r),
          bottomRight: Vs(!l || a.bottom || a.right, o.bottomRight, 0, r),
        };
      })(t, i / 2, n / 2);
    return {
      outer: { x: e.left, y: e.top, w: i, h: n, radius: o },
      inner: {
        x: e.left + s.l,
        y: e.top + s.t,
        w: i - s.l - s.r,
        h: n - s.t - s.b,
        radius: {
          topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
          topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
          bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
          bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
        },
      },
    };
  }
  function Us(t, e, i, n) {
    const s = null === e,
      o = null === i,
      r = t && !(s && o) && Bs(t, n);
    return r && (s || At(e, r.left, r.right)) && (o || At(i, r.top, r.bottom));
  }
  function Gs(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }
  function Ks(t, e, i = {}) {
    const n = t.x !== i.x ? -e : 0,
      s = t.y !== i.y ? -e : 0,
      o = (t.x + t.w !== i.x + i.w ? e : 0) - n,
      r = (t.y + t.h !== i.y + i.h ? e : 0) - s;
    return { x: t.x + n, y: t.y + s, w: t.w + o, h: t.h + r, radius: t.radius };
  }
  var qs = Object.freeze({
    __proto__: null,
    ArcElement: class extends jn {
      static id = "arc";
      static defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0,
      };
      static defaultRoutes = { backgroundColor: "backgroundColor" };
      static descriptors = {
        _scriptable: !0,
        _indexable: (t) => "borderDash" !== t,
      };
      circumference;
      endAngle;
      fullCircles;
      innerRadius;
      outerRadius;
      pixelMargin;
      startAngle;
      constructor(t) {
        super(),
          (this.options = void 0),
          (this.circumference = void 0),
          (this.startAngle = void 0),
          (this.endAngle = void 0),
          (this.innerRadius = void 0),
          (this.outerRadius = void 0),
          (this.pixelMargin = 0),
          (this.fullCircles = 0),
          t && Object.assign(this, t);
      }
      inRange(t, e, i) {
        const n = this.getProps(["x", "y"], i),
          { angle: s, distance: o } = _t(n, { x: t, y: e }),
          {
            startAngle: r,
            endAngle: a,
            innerRadius: l,
            outerRadius: h,
            circumference: c,
          } = this.getProps(
            [
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
              "circumference",
            ],
            i
          ),
          d = (this.options.spacing + this.options.borderWidth) / 2,
          u = Y(c, a - r) >= ot || St(s, r, a),
          f = At(o, l + d, h + d);
        return u && f;
      }
      getCenterPoint(t) {
        const {
            x: e,
            y: i,
            startAngle: n,
            endAngle: s,
            innerRadius: o,
            outerRadius: r,
          } = this.getProps(
            ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
            t
          ),
          { offset: a, spacing: l } = this.options,
          h = (n + s) / 2,
          c = (o + r + l + a) / 2;
        return { x: e + Math.cos(h) * c, y: i + Math.sin(h) * c };
      }
      tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
      draw(t) {
        const { options: e, circumference: i } = this,
          n = (e.offset || 0) / 4,
          s = (e.spacing || 0) / 2,
          o = e.circular;
        if (
          ((this.pixelMargin = "inner" === e.borderAlign ? 0.33 : 0),
          (this.fullCircles = i > ot ? Math.floor(i / ot) : 0),
          0 === i || this.innerRadius < 0 || this.outerRadius < 0)
        )
          return;
        t.save();
        const r = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(r) * n, Math.sin(r) * n);
        const a = n * (1 - Math.sin(Math.min(st, i || 0)));
        (t.fillStyle = e.backgroundColor),
          (t.strokeStyle = e.borderColor),
          (function (t, e, i, n, s) {
            const { fullCircles: o, startAngle: r, circumference: a } = e;
            let l = e.endAngle;
            if (o) {
              Ps(t, e, i, n, l, s);
              for (let e = 0; e < o; ++e) t.fill();
              isNaN(a) || (l = r + (a % ot || ot));
            }
            Ps(t, e, i, n, l, s), t.fill();
          })(t, this, a, s, o),
          Es(t, this, a, s, o),
          t.restore();
      }
    },
    BarElement: class extends jn {
      static id = "bar";
      static defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0,
      };
      static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      };
      constructor(t) {
        super(),
          (this.options = void 0),
          (this.horizontal = void 0),
          (this.base = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this.inflateAmount = void 0),
          t && Object.assign(this, t);
      }
      draw(t) {
        const {
            inflateAmount: e,
            options: { borderColor: i, backgroundColor: n },
          } = this,
          { inner: s, outer: o } = Hs(this),
          r =
            (a = o.radius).topLeft ||
            a.topRight ||
            a.bottomLeft ||
            a.bottomRight
              ? ye
              : Gs;
        var a;
        t.save(),
          (o.w === s.w && o.h === s.h) ||
            (t.beginPath(),
            r(t, Ks(o, e, s)),
            t.clip(),
            r(t, Ks(s, -e, o)),
            (t.fillStyle = i),
            t.fill("evenodd")),
          t.beginPath(),
          r(t, Ks(s, e)),
          (t.fillStyle = n),
          t.fill(),
          t.restore();
      }
      inRange(t, e, i) {
        return Us(this, t, e, i);
      }
      inXRange(t, e) {
        return Us(this, t, null, e);
      }
      inYRange(t, e) {
        return Us(this, null, t, e);
      }
      getCenterPoint(t) {
        const {
          x: e,
          y: i,
          base: n,
          horizontal: s,
        } = this.getProps(["x", "y", "base", "horizontal"], t);
        return { x: s ? (e + n) / 2 : e, y: s ? i : (i + n) / 2 };
      }
      getRange(t) {
        return "x" === t ? this.width / 2 : this.height / 2;
      }
    },
    LineElement: Ys,
    PointElement: class extends jn {
      static id = "point";
      parsed;
      skip;
      stop;
      static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0,
      };
      static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      };
      constructor(t) {
        super(),
          (this.options = void 0),
          (this.parsed = void 0),
          (this.skip = void 0),
          (this.stop = void 0),
          t && Object.assign(this, t);
      }
      inRange(t, e, i) {
        const n = this.options,
          { x: s, y: o } = this.getProps(["x", "y"], i);
        return (
          Math.pow(t - s, 2) + Math.pow(e - o, 2) <
          Math.pow(n.hitRadius + n.radius, 2)
        );
      }
      inXRange(t, e) {
        return Ws(this, t, "x", e);
      }
      inYRange(t, e) {
        return Ws(this, t, "y", e);
      }
      getCenterPoint(t) {
        const { x: e, y: i } = this.getProps(["x", "y"], t);
        return { x: e, y: i };
      }
      size(t) {
        let e = (t = t || this.options || {}).radius || 0;
        e = Math.max(e, (e && t.hoverRadius) || 0);
        return 2 * (e + ((e && t.borderWidth) || 0));
      }
      draw(t, e) {
        const i = this.options;
        this.skip ||
          i.radius < 0.1 ||
          !de(this, e, this.size(i) / 2) ||
          ((t.strokeStyle = i.borderColor),
          (t.lineWidth = i.borderWidth),
          (t.fillStyle = i.backgroundColor),
          he(t, i, this.x, this.y));
      }
      getRange() {
        const t = this.options || {};
        return t.radius + t.hitRadius;
      }
    },
  });
  const Xs = [
      "rgb(54, 162, 235)",
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)",
    ],
    Zs = Xs.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function Js(t) {
    return Xs[t % Xs.length];
  }
  function Qs(t) {
    return Zs[t % Zs.length];
  }
  function to(t) {
    let e = 0;
    return (i, n) => {
      const s = t.getDatasetMeta(n).controller;
      s instanceof Xi
        ? (e = (function (t, e) {
            return (t.backgroundColor = t.data.map(() => Js(e++))), e;
          })(i, e))
        : s instanceof Zi
        ? (e = (function (t, e) {
            return (t.backgroundColor = t.data.map(() => Qs(e++))), e;
          })(i, e))
        : s &&
          (e = (function (t, e) {
            return (t.borderColor = Js(e)), (t.backgroundColor = Qs(e)), ++e;
          })(i, e));
    };
  }
  function eo(t) {
    let e;
    for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
    return !1;
  }
  var io = {
    id: "colors",
    defaults: { enabled: !0, forceOverride: !1 },
    beforeLayout(t, e, i) {
      if (!i.enabled) return;
      const {
          data: { datasets: n },
          options: s,
        } = t.config,
        { elements: o } = s;
      if (
        !i.forceOverride &&
        (eo(n) ||
          ((r = s) && (r.borderColor || r.backgroundColor)) ||
          (o && eo(o)))
      )
        return;
      var r;
      const a = to(t);
      n.forEach(a);
    },
  };
  function no(t) {
    if (t._decimated) {
      const e = t._data;
      delete t._decimated,
        delete t._data,
        Object.defineProperty(t, "data", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: e,
        });
    }
  }
  function so(t) {
    t.data.datasets.forEach((t) => {
      no(t);
    });
  }
  var oo = {
    id: "decimation",
    defaults: { algorithm: "min-max", enabled: !1 },
    beforeElementsUpdate: (t, e, i) => {
      if (!i.enabled) return void so(t);
      const n = t.width;
      t.data.datasets.forEach((e, s) => {
        const { _data: o, indexAxis: r } = e,
          a = t.getDatasetMeta(s),
          l = o || e.data;
        if ("y" === Te([r, t.options.indexAxis])) return;
        if (!a.controller.supportsDecimation) return;
        const h = t.scales[a.xAxisID];
        if ("linear" !== h.type && "time" !== h.type) return;
        if (t.options.parsing) return;
        let { start: c, count: d } = (function (t, e) {
          const i = e.length;
          let n,
            s = 0;
          const { iScale: o } = t,
            {
              min: r,
              max: a,
              minDefined: l,
              maxDefined: h,
            } = o.getUserBounds();
          return (
            l && (s = Mt(Tt(e, o.axis, r).lo, 0, i - 1)),
            (n = h ? Mt(Tt(e, o.axis, a).hi + 1, s, i) - s : i - s),
            { start: s, count: n }
          );
        })(a, l);
        if (d <= (i.threshold || 4 * n)) return void no(e);
        let u;
        switch (
          (F(o) &&
            ((e._data = l),
            delete e.data,
            Object.defineProperty(e, "data", {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return this._decimated;
              },
              set: function (t) {
                this._data = t;
              },
            })),
          i.algorithm)
        ) {
          case "lttb":
            u = (function (t, e, i, n, s) {
              const o = s.samples || n;
              if (o >= i) return t.slice(e, e + i);
              const r = [],
                a = (i - 2) / (o - 2);
              let l = 0;
              const h = e + i - 1;
              let c,
                d,
                u,
                f,
                p,
                g = e;
              for (r[l++] = t[g], c = 0; c < o - 2; c++) {
                let n,
                  s = 0,
                  o = 0;
                const h = Math.floor((c + 1) * a) + 1 + e,
                  m = Math.min(Math.floor((c + 2) * a) + 1, i) + e,
                  v = m - h;
                for (n = h; n < m; n++) (s += t[n].x), (o += t[n].y);
                (s /= v), (o /= v);
                const b = Math.floor(c * a) + 1 + e,
                  y = Math.min(Math.floor((c + 1) * a) + 1, i) + e,
                  { x: x, y: _ } = t[g];
                for (u = f = -1, n = b; n < y; n++)
                  (f =
                    0.5 *
                    Math.abs((x - s) * (t[n].y - _) - (x - t[n].x) * (o - _))),
                    f > u && ((u = f), (d = t[n]), (p = n));
                (r[l++] = d), (g = p);
              }
              return (r[l++] = t[h]), r;
            })(l, c, d, n, i);
            break;
          case "min-max":
            u = (function (t, e, i, n) {
              let s,
                o,
                r,
                a,
                l,
                h,
                c,
                d,
                u,
                f,
                p = 0,
                g = 0;
              const m = [],
                v = e + i - 1,
                b = t[e].x,
                y = t[v].x - b;
              for (s = e; s < e + i; ++s) {
                (o = t[s]), (r = ((o.x - b) / y) * n), (a = o.y);
                const e = 0 | r;
                if (e === l)
                  a < u ? ((u = a), (h = s)) : a > f && ((f = a), (c = s)),
                    (p = (g * p + o.x) / ++g);
                else {
                  const i = s - 1;
                  if (!F(h) && !F(c)) {
                    const e = Math.min(h, c),
                      n = Math.max(h, c);
                    e !== d && e !== i && m.push({ ...t[e], x: p }),
                      n !== d && n !== i && m.push({ ...t[n], x: p });
                  }
                  s > 0 && i !== d && m.push(t[i]),
                    m.push(o),
                    (l = e),
                    (g = 0),
                    (u = f = a),
                    (h = c = d = s);
                }
              }
              return m;
            })(l, c, d, n);
            break;
          default:
            throw new Error(
              `Unsupported decimation algorithm '${i.algorithm}'`
            );
        }
        e._decimated = u;
      });
    },
    destroy(t) {
      so(t);
    },
  };
  function ro(t, e, i, n) {
    if (n) return;
    let s = e[t],
      o = i[t];
    return (
      "angle" === t && ((s = Ct(s)), (o = Ct(o))),
      { property: t, start: s, end: o }
    );
  }
  function ao(t, e, i) {
    for (; e > t; e--) {
      const t = i[e];
      if (!isNaN(t.x) && !isNaN(t.y)) break;
    }
    return e;
  }
  function lo(t, e, i, n) {
    return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
  }
  function ho(t, e) {
    let i = [],
      n = !1;
    return (
      N(t)
        ? ((n = !0), (i = t))
        : (i = (function (t, e) {
            const { x: i = null, y: n = null } = t || {},
              s = e.points,
              o = [];
            return (
              e.segments.forEach(({ start: t, end: e }) => {
                e = ao(t, e, s);
                const r = s[t],
                  a = s[e];
                null !== n
                  ? (o.push({ x: r.x, y: n }), o.push({ x: a.x, y: n }))
                  : null !== i &&
                    (o.push({ x: i, y: r.y }), o.push({ x: i, y: a.y }));
              }),
              o
            );
          })(t, e)),
      i.length
        ? new Ys({ points: i, options: { tension: 0 }, _loop: n, _fullLoop: n })
        : null
    );
  }
  function co(t) {
    return t && !1 !== t.fill;
  }
  function uo(t, e, i) {
    let n = t[e].fill;
    const s = [e];
    let o;
    if (!i) return n;
    for (; !1 !== n && -1 === s.indexOf(n); ) {
      if (!$(n)) return n;
      if (((o = t[n]), !o)) return !1;
      if (o.visible) return n;
      s.push(n), (n = o.fill);
    }
    return !1;
  }
  function fo(t, e, i) {
    const n = (function (t) {
      const e = t.options,
        i = e.fill;
      let n = Y(i && i.target, i);
      void 0 === n && (n = !!e.backgroundColor);
      if (!1 === n || null === n) return !1;
      if (!0 === n) return "origin";
      return n;
    })(t);
    if (z(n)) return !isNaN(n.value) && n;
    let s = parseFloat(n);
    return $(s) && Math.floor(s) === s
      ? (function (t, e, i, n) {
          ("-" !== t && "+" !== t) || (i = e + i);
          if (i === e || i < 0 || i >= n) return !1;
          return i;
        })(n[0], e, s, i)
      : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n;
  }
  function po(t, e, i) {
    const n = [];
    for (let s = 0; s < i.length; s++) {
      const o = i[s],
        { first: r, last: a, point: l } = go(o, e, "x");
      if (!(!l || (r && a)))
        if (r) n.unshift(l);
        else if ((t.push(l), !a)) break;
    }
    t.push(...n);
  }
  function go(t, e, i) {
    const n = t.interpolate(e, i);
    if (!n) return {};
    const s = n[i],
      o = t.segments,
      r = t.points;
    let a = !1,
      l = !1;
    for (let t = 0; t < o.length; t++) {
      const e = o[t],
        n = r[e.start][i],
        h = r[e.end][i];
      if (At(s, n, h)) {
        (a = s === n), (l = s === h);
        break;
      }
    }
    return { first: a, last: l, point: n };
  }
  class mo {
    constructor(t) {
      (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
    }
    pathSegment(t, e, i) {
      const { x: n, y: s, radius: o } = this;
      return (
        (e = e || { start: 0, end: ot }),
        t.arc(n, s, o, e.end, e.start, !0),
        !i.bounds
      );
    }
    interpolate(t) {
      const { x: e, y: i, radius: n } = this,
        s = t.angle;
      return { x: e + Math.cos(s) * n, y: i + Math.sin(s) * n, angle: s };
    }
  }
  function vo(t) {
    const { chart: e, fill: i, line: n } = t;
    if ($(i))
      return (function (t, e) {
        const i = t.getDatasetMeta(e),
          n = i && t.isDatasetVisible(e);
        return n ? i.dataset : null;
      })(e, i);
    if ("stack" === i)
      return (function (t) {
        const { scale: e, index: i, line: n } = t,
          s = [],
          o = n.segments,
          r = n.points,
          a = (function (t, e) {
            const i = [],
              n = t.getMatchingVisibleMetas("line");
            for (let t = 0; t < n.length; t++) {
              const s = n[t];
              if (s.index === e) break;
              s.hidden || i.unshift(s.dataset);
            }
            return i;
          })(e, i);
        a.push(ho({ x: null, y: e.bottom }, n));
        for (let t = 0; t < o.length; t++) {
          const e = o[t];
          for (let t = e.start; t <= e.end; t++) po(s, r[t], a);
        }
        return new Ys({ points: s, options: {} });
      })(t);
    if ("shape" === i) return !0;
    const s = (function (t) {
      const e = t.scale || {};
      if (e.getPointPositionForValue)
        return (function (t) {
          const { scale: e, fill: i } = t,
            n = e.options,
            s = e.getLabels().length,
            o = n.reverse ? e.max : e.min,
            r = (function (t, e, i) {
              let n;
              return (
                (n =
                  "start" === t
                    ? i
                    : "end" === t
                    ? e.options.reverse
                      ? e.min
                      : e.max
                    : z(t)
                    ? t.value
                    : e.getBaseValue()),
                n
              );
            })(i, e, o),
            a = [];
          if (n.grid.circular) {
            const t = e.getPointPositionForValue(0, o);
            return new mo({
              x: t.x,
              y: t.y,
              radius: e.getDistanceFromCenterForValue(r),
            });
          }
          for (let t = 0; t < s; ++t) a.push(e.getPointPositionForValue(t, r));
          return a;
        })(t);
      return (function (t) {
        const { scale: e = {}, fill: i } = t,
          n = (function (t, e) {
            let i = null;
            return (
              "start" === t
                ? (i = e.bottom)
                : "end" === t
                ? (i = e.top)
                : z(t)
                ? (i = e.getPixelForValue(t.value))
                : e.getBasePixel && (i = e.getBasePixel()),
              i
            );
          })(i, e);
        if ($(n)) {
          const t = e.isHorizontal();
          return { x: t ? n : null, y: t ? null : n };
        }
        return null;
      })(t);
    })(t);
    return s instanceof mo ? s : ho(s, n);
  }
  function bo(t, e, i) {
    const n = vo(e),
      { line: s, scale: o, axis: r } = e,
      a = s.options,
      l = a.fill,
      h = a.backgroundColor,
      { above: c = h, below: d = h } = l || {};
    n &&
      s.points.length &&
      (ue(t, i),
      (function (t, e) {
        const { line: i, target: n, above: s, below: o, area: r, scale: a } = e,
          l = i._loop ? "angle" : e.axis;
        t.save(),
          "x" === l &&
            o !== s &&
            (yo(t, n, r.top),
            xo(t, { line: i, target: n, color: s, scale: a, property: l }),
            t.restore(),
            t.save(),
            yo(t, n, r.bottom));
        xo(t, { line: i, target: n, color: o, scale: a, property: l }),
          t.restore();
      })(t, {
        line: s,
        target: n,
        above: c,
        below: d,
        area: i,
        scale: o,
        axis: r,
      }),
      fe(t));
  }
  function yo(t, e, i) {
    const { segments: n, points: s } = e;
    let o = !0,
      r = !1;
    t.beginPath();
    for (const a of n) {
      const { start: n, end: l } = a,
        h = s[n],
        c = s[ao(n, l, s)];
      o
        ? (t.moveTo(h.x, h.y), (o = !1))
        : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)),
        (r = !!e.pathSegment(t, a, { move: r })),
        r ? t.closePath() : t.lineTo(c.x, i);
    }
    t.lineTo(e.first().x, i), t.closePath(), t.clip();
  }
  function xo(t, e) {
    const { line: i, target: n, property: s, color: o, scale: r } = e,
      a = (function (t, e, i) {
        const n = t.segments,
          s = t.points,
          o = e.points,
          r = [];
        for (const t of n) {
          let { start: n, end: a } = t;
          a = ao(n, a, s);
          const l = ro(i, s[n], s[a], t.loop);
          if (!e.segments) {
            r.push({ source: t, target: l, start: s[n], end: s[a] });
            continue;
          }
          const h = xi(e, l);
          for (const e of h) {
            const n = ro(i, o[e.start], o[e.end], e.loop),
              a = yi(t, s, n);
            for (const t of a)
              r.push({
                source: t,
                target: e,
                start: { [i]: lo(l, n, "start", Math.max) },
                end: { [i]: lo(l, n, "end", Math.min) },
              });
          }
        }
        return r;
      })(i, n, s);
    for (const { source: e, target: l, start: h, end: c } of a) {
      const { style: { backgroundColor: a = o } = {} } = e,
        d = !0 !== n;
      t.save(), (t.fillStyle = a), _o(t, r, d && ro(s, h, c)), t.beginPath();
      const u = !!i.pathSegment(t, e);
      let f;
      if (d) {
        u ? t.closePath() : wo(t, n, c, s);
        const e = !!n.pathSegment(t, l, { move: u, reverse: !0 });
        (f = u && e), f || wo(t, n, h, s);
      }
      t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore();
    }
  }
  function _o(t, e, i) {
    const { top: n, bottom: s } = e.chart.chartArea,
      { property: o, start: r, end: a } = i || {};
    "x" === o && (t.beginPath(), t.rect(r, n, a - r, s - n), t.clip());
  }
  function wo(t, e, i, n) {
    const s = e.interpolate(i, n);
    s && t.lineTo(s.x, s.y);
  }
  var ko = {
    id: "filler",
    afterDatasetsUpdate(t, e, i) {
      const n = (t.data.datasets || []).length,
        s = [];
      let o, r, a, l;
      for (r = 0; r < n; ++r)
        (o = t.getDatasetMeta(r)),
          (a = o.dataset),
          (l = null),
          a &&
            a.options &&
            a instanceof Ys &&
            (l = {
              visible: t.isDatasetVisible(r),
              index: r,
              fill: fo(a, r, n),
              chart: t,
              axis: o.controller.options.indexAxis,
              scale: o.vScale,
              line: a,
            }),
          (o.$filler = l),
          s.push(l);
      for (r = 0; r < n; ++r)
        (l = s[r]), l && !1 !== l.fill && (l.fill = uo(s, r, i.propagate));
    },
    beforeDraw(t, e, i) {
      const n = "beforeDraw" === i.drawTime,
        s = t.getSortedVisibleDatasetMetas(),
        o = t.chartArea;
      for (let e = s.length - 1; e >= 0; --e) {
        const i = s[e].$filler;
        i &&
          (i.line.updateControlPoints(o, i.axis),
          n && i.fill && bo(t.ctx, i, o));
      }
    },
    beforeDatasetsDraw(t, e, i) {
      if ("beforeDatasetsDraw" !== i.drawTime) return;
      const n = t.getSortedVisibleDatasetMetas();
      for (let e = n.length - 1; e >= 0; --e) {
        const i = n[e].$filler;
        co(i) && bo(t.ctx, i, t.chartArea);
      }
    },
    beforeDatasetDraw(t, e, i) {
      const n = e.meta.$filler;
      co(n) && "beforeDatasetDraw" === i.drawTime && bo(t.ctx, n, t.chartArea);
    },
    defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
  };
  const Co = (t, e) => {
    let { boxHeight: i = e, boxWidth: n = e } = t;
    return (
      t.usePointStyle &&
        ((i = Math.min(i, e)), (n = t.pointStyleWidth || Math.min(n, e))),
      { boxWidth: n, boxHeight: i, itemHeight: Math.max(e, i) }
    );
  };
  let So = class extends jn {
    constructor(t) {
      super(),
        (this._added = !1),
        (this.legendHitBoxes = []),
        (this._hoveredItem = null),
        (this.doughnutMode = !1),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this.legendItems = void 0),
        (this.columnSizes = void 0),
        (this.lineWidths = void 0),
        (this.maxHeight = void 0),
        (this.maxWidth = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this._margins = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(t, e, i) {
      (this.maxWidth = t),
        (this.maxHeight = e),
        (this._margins = i),
        this.setDimensions(),
        this.buildLabels(),
        this.fit();
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth),
          (this.left = this._margins.left),
          (this.right = this.width))
        : ((this.height = this.maxHeight),
          (this.top = this._margins.top),
          (this.bottom = this.height));
    }
    buildLabels() {
      const t = this.options.labels || {};
      let e = B(t.generateLabels, [this.chart], this) || [];
      t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
        t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
        this.options.reverse && e.reverse(),
        (this.legendItems = e);
    }
    fit() {
      const { options: t, ctx: e } = this;
      if (!t.display) return void (this.width = this.height = 0);
      const i = t.labels,
        n = De(i.font),
        s = n.size,
        o = this._computeTitleHeight(),
        { boxWidth: r, itemHeight: a } = Co(i, s);
      let l, h;
      (e.font = n.string),
        this.isHorizontal()
          ? ((l = this.maxWidth), (h = this._fitRows(o, s, r, a) + 10))
          : ((h = this.maxHeight), (l = this._fitCols(o, n, r, a) + 10)),
        (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
        (this.height = Math.min(h, t.maxHeight || this.maxHeight));
    }
    _fitRows(t, e, i, n) {
      const {
          ctx: s,
          maxWidth: o,
          options: {
            labels: { padding: r },
          },
        } = this,
        a = (this.legendHitBoxes = []),
        l = (this.lineWidths = [0]),
        h = n + r;
      let c = t;
      (s.textAlign = "left"), (s.textBaseline = "middle");
      let d = -1,
        u = -h;
      return (
        this.legendItems.forEach((t, f) => {
          const p = i + e / 2 + s.measureText(t.text).width;
          (0 === f || l[l.length - 1] + p + 2 * r > o) &&
            ((c += h), (l[l.length - (f > 0 ? 0 : 1)] = 0), (u += h), d++),
            (a[f] = { left: 0, top: u, row: d, width: p, height: n }),
            (l[l.length - 1] += p + r);
        }),
        c
      );
    }
    _fitCols(t, e, i, n) {
      const {
          ctx: s,
          maxHeight: o,
          options: {
            labels: { padding: r },
          },
        } = this,
        a = (this.legendHitBoxes = []),
        l = (this.columnSizes = []),
        h = o - t;
      let c = r,
        d = 0,
        u = 0,
        f = 0,
        p = 0;
      return (
        this.legendItems.forEach((t, o) => {
          const { itemWidth: g, itemHeight: m } = (function (t, e, i, n, s) {
            const o = (function (t, e, i, n) {
                let s = t.text;
                s &&
                  "string" != typeof s &&
                  (s = s.reduce((t, e) => (t.length > e.length ? t : e)));
                return e + i.size / 2 + n.measureText(s).width;
              })(n, t, e, i),
              r = (function (t, e, i) {
                let n = t;
                "string" != typeof e.text && (n = Mo(e, i));
                return n;
              })(s, n, e.lineHeight);
            return { itemWidth: o, itemHeight: r };
          })(i, e, s, t, n);
          o > 0 &&
            u + m + 2 * r > h &&
            ((c += d + r),
            l.push({ width: d, height: u }),
            (f += d + r),
            p++,
            (d = u = 0)),
            (a[o] = { left: f, top: u, col: p, width: g, height: m }),
            (d = Math.max(d, g)),
            (u += m + r);
        }),
        (c += d),
        l.push({ width: d, height: u }),
        c
      );
    }
    adjustHitBoxes() {
      if (!this.options.display) return;
      const t = this._computeTitleHeight(),
        {
          legendHitBoxes: e,
          options: {
            align: i,
            labels: { padding: n },
            rtl: s,
          },
        } = this,
        o = pi(s, this.left, this.width);
      if (this.isHorizontal()) {
        let s = 0,
          r = Nt(i, this.left + n, this.right - this.lineWidths[s]);
        for (const a of e)
          s !== a.row &&
            ((s = a.row),
            (r = Nt(i, this.left + n, this.right - this.lineWidths[s]))),
            (a.top += this.top + t + n),
            (a.left = o.leftForLtr(o.x(r), a.width)),
            (r += a.width + n);
      } else {
        let s = 0,
          r = Nt(i, this.top + t + n, this.bottom - this.columnSizes[s].height);
        for (const a of e)
          a.col !== s &&
            ((s = a.col),
            (r = Nt(
              i,
              this.top + t + n,
              this.bottom - this.columnSizes[s].height
            ))),
            (a.top = r),
            (a.left += this.left + n),
            (a.left = o.leftForLtr(o.x(a.left), a.width)),
            (r += a.height + n);
      }
    }
    isHorizontal() {
      return (
        "top" === this.options.position || "bottom" === this.options.position
      );
    }
    draw() {
      if (this.options.display) {
        const t = this.ctx;
        ue(t, this), this._draw(), fe(t);
      }
    }
    _draw() {
      const { options: t, columnSizes: e, lineWidths: i, ctx: n } = this,
        { align: s, labels: o } = t,
        r = se.color,
        a = pi(t.rtl, this.left, this.width),
        l = De(o.font),
        { padding: h } = o,
        c = l.size,
        d = c / 2;
      let u;
      this.drawTitle(),
        (n.textAlign = a.textAlign("left")),
        (n.textBaseline = "middle"),
        (n.lineWidth = 0.5),
        (n.font = l.string);
      const { boxWidth: f, boxHeight: p, itemHeight: g } = Co(o, c),
        m = this.isHorizontal(),
        v = this._computeTitleHeight();
      (u = m
        ? {
            x: Nt(s, this.left + h, this.right - i[0]),
            y: this.top + h + v,
            line: 0,
          }
        : {
            x: this.left + h,
            y: Nt(s, this.top + v + h, this.bottom - e[0].height),
            line: 0,
          }),
        gi(this.ctx, t.textDirection);
      const b = g + h;
      this.legendItems.forEach((y, x) => {
        (n.strokeStyle = y.fontColor), (n.fillStyle = y.fontColor);
        const _ = n.measureText(y.text).width,
          w = a.textAlign(y.textAlign || (y.textAlign = o.textAlign)),
          k = f + d + _;
        let C = u.x,
          S = u.y;
        a.setWidth(this.width),
          m
            ? x > 0 &&
              C + k + h > this.right &&
              ((S = u.y += b),
              u.line++,
              (C = u.x = Nt(s, this.left + h, this.right - i[u.line])))
            : x > 0 &&
              S + b > this.bottom &&
              ((C = u.x = C + e[u.line].width + h),
              u.line++,
              (S = u.y =
                Nt(s, this.top + v + h, this.bottom - e[u.line].height)));
        if (
          ((function (t, e, i) {
            if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
            n.save();
            const s = Y(i.lineWidth, 1);
            if (
              ((n.fillStyle = Y(i.fillStyle, r)),
              (n.lineCap = Y(i.lineCap, "butt")),
              (n.lineDashOffset = Y(i.lineDashOffset, 0)),
              (n.lineJoin = Y(i.lineJoin, "miter")),
              (n.lineWidth = s),
              (n.strokeStyle = Y(i.strokeStyle, r)),
              n.setLineDash(Y(i.lineDash, [])),
              o.usePointStyle)
            ) {
              const r = {
                  radius: (p * Math.SQRT2) / 2,
                  pointStyle: i.pointStyle,
                  rotation: i.rotation,
                  borderWidth: s,
                },
                l = a.xPlus(t, f / 2);
              ce(n, r, l, e + d, o.pointStyleWidth && f);
            } else {
              const o = e + Math.max((c - p) / 2, 0),
                r = a.leftForLtr(t, f),
                l = Me(i.borderRadius);
              n.beginPath(),
                Object.values(l).some((t) => 0 !== t)
                  ? ye(n, { x: r, y: o, w: f, h: p, radius: l })
                  : n.rect(r, o, f, p),
                n.fill(),
                0 !== s && n.stroke();
            }
            n.restore();
          })(a.x(C), S, y),
          (C = ((t, e, i, n) =>
            t === (n ? "left" : "right")
              ? i
              : "center" === t
              ? (e + i) / 2
              : e)(w, C + f + d, m ? C + k : this.right, t.rtl)),
          (function (t, e, i) {
            be(n, i.text, t, e + g / 2, l, {
              strikethrough: i.hidden,
              textAlign: a.textAlign(i.textAlign),
            });
          })(a.x(C), S, y),
          m)
        )
          u.x += k + h;
        else if ("string" != typeof y.text) {
          const t = l.lineHeight;
          u.y += Mo(y, t) + h;
        } else u.y += b;
      }),
        mi(this.ctx, t.textDirection);
    }
    drawTitle() {
      const t = this.options,
        e = t.title,
        i = De(e.font),
        n = Ae(e.padding);
      if (!e.display) return;
      const s = pi(t.rtl, this.left, this.width),
        o = this.ctx,
        r = e.position,
        a = i.size / 2,
        l = n.top + a;
      let h,
        c = this.left,
        d = this.width;
      if (this.isHorizontal())
        (d = Math.max(...this.lineWidths)),
          (h = this.top + l),
          (c = Nt(t.align, c, this.right - d));
      else {
        const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
        h =
          l +
          Nt(
            t.align,
            this.top,
            this.bottom - e - t.labels.padding - this._computeTitleHeight()
          );
      }
      const u = Nt(r, c, c + d);
      (o.textAlign = s.textAlign(Ft(r))),
        (o.textBaseline = "middle"),
        (o.strokeStyle = e.color),
        (o.fillStyle = e.color),
        (o.font = i.string),
        be(o, e.text, u, h, i);
    }
    _computeTitleHeight() {
      const t = this.options.title,
        e = De(t.font),
        i = Ae(t.padding);
      return t.display ? e.lineHeight + i.height : 0;
    }
    _getLegendItemAt(t, e) {
      let i, n, s;
      if (At(t, this.left, this.right) && At(e, this.top, this.bottom))
        for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
          if (
            ((n = s[i]),
            At(t, n.left, n.left + n.width) && At(e, n.top, n.top + n.height))
          )
            return this.legendItems[i];
      return null;
    }
    handleEvent(t) {
      const e = this.options;
      if (
        !(function (t, e) {
          if (
            ("mousemove" === t || "mouseout" === t) &&
            (e.onHover || e.onLeave)
          )
            return !0;
          if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
          return !1;
        })(t.type, e)
      )
        return;
      const i = this._getLegendItemAt(t.x, t.y);
      if ("mousemove" === t.type || "mouseout" === t.type) {
        const n = this._hoveredItem,
          s = ((t, e) =>
            null !== t &&
            null !== e &&
            t.datasetIndex === e.datasetIndex &&
            t.index === e.index)(n, i);
        n && !s && B(e.onLeave, [t, n, this], this),
          (this._hoveredItem = i),
          i && !s && B(e.onHover, [t, i, this], this);
      } else i && B(e.onClick, [t, i, this], this);
    }
  };
  function Mo(t, e) {
    return e * (t.text ? t.text.length : 0);
  }
  var Ao = {
    id: "legend",
    _element: So,
    start(t, e, i) {
      const n = (t.legend = new So({ ctx: t.ctx, options: i, chart: t }));
      wn.configure(t, n, i), wn.addBox(t, n);
    },
    stop(t) {
      wn.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, i) {
      const n = t.legend;
      wn.configure(t, n, i), (n.options = i);
    },
    afterUpdate(t) {
      const e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: "top",
      align: "center",
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick(t, e, i) {
        const n = e.datasetIndex,
          s = i.chart;
        s.isDatasetVisible(n)
          ? (s.hide(n), (e.hidden = !0))
          : (s.show(n), (e.hidden = !1));
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (t) => t.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(t) {
          const e = t.data.datasets,
            {
              labels: {
                usePointStyle: i,
                pointStyle: n,
                textAlign: s,
                color: o,
                useBorderRadius: r,
                borderRadius: a,
              },
            } = t.legend.options;
          return t._getSortedDatasetMetas().map((t) => {
            const l = t.controller.getStyle(i ? 0 : void 0),
              h = Ae(l.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: l.backgroundColor,
              fontColor: o,
              hidden: !t.visible,
              lineCap: l.borderCapStyle,
              lineDash: l.borderDash,
              lineDashOffset: l.borderDashOffset,
              lineJoin: l.borderJoinStyle,
              lineWidth: (h.width + h.height) / 4,
              strokeStyle: l.borderColor,
              pointStyle: n || l.pointStyle,
              rotation: l.rotation,
              textAlign: s || l.textAlign,
              borderRadius: r && (a || l.borderRadius),
              datasetIndex: t.index,
            };
          }, this);
        },
      },
      title: {
        color: (t) => t.chart.options.color,
        display: !1,
        position: "center",
        text: "",
      },
    },
    descriptors: {
      _scriptable: (t) => !t.startsWith("on"),
      labels: {
        _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t),
      },
    },
  };
  class Do extends jn {
    constructor(t) {
      super(),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this._padding = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(t, e) {
      const i = this.options;
      if (((this.left = 0), (this.top = 0), !i.display))
        return void (this.width = this.height = this.right = this.bottom = 0);
      (this.width = this.right = t), (this.height = this.bottom = e);
      const n = N(i.text) ? i.text.length : 1;
      this._padding = Ae(i.padding);
      const s = n * De(i.font).lineHeight + this._padding.height;
      this.isHorizontal() ? (this.height = s) : (this.width = s);
    }
    isHorizontal() {
      const t = this.options.position;
      return "top" === t || "bottom" === t;
    }
    _drawArgs(t) {
      const { top: e, left: i, bottom: n, right: s, options: o } = this,
        r = o.align;
      let a,
        l,
        h,
        c = 0;
      return (
        this.isHorizontal()
          ? ((l = Nt(r, i, s)), (h = e + t), (a = s - i))
          : ("left" === o.position
              ? ((l = i + t), (h = Nt(r, n, e)), (c = -0.5 * st))
              : ((l = s - t), (h = Nt(r, e, n)), (c = 0.5 * st)),
            (a = n - e)),
        { titleX: l, titleY: h, maxWidth: a, rotation: c }
      );
    }
    draw() {
      const t = this.ctx,
        e = this.options;
      if (!e.display) return;
      const i = De(e.font),
        n = i.lineHeight / 2 + this._padding.top,
        { titleX: s, titleY: o, maxWidth: r, rotation: a } = this._drawArgs(n);
      be(t, e.text, 0, 0, i, {
        color: e.color,
        maxWidth: r,
        rotation: a,
        textAlign: Ft(e.align),
        textBaseline: "middle",
        translation: [s, o],
      });
    }
  }
  var To = {
    id: "title",
    _element: Do,
    start(t, e, i) {
      !(function (t, e) {
        const i = new Do({ ctx: t.ctx, options: e, chart: t });
        wn.configure(t, i, e), wn.addBox(t, i), (t.titleBlock = i);
      })(t, i);
    },
    stop(t) {
      const e = t.titleBlock;
      wn.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, i) {
      const n = t.titleBlock;
      wn.configure(t, n, i), (n.options = i);
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "bold" },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const Oo = new WeakMap();
  var Po = {
    id: "subtitle",
    start(t, e, i) {
      const n = new Do({ ctx: t.ctx, options: i, chart: t });
      wn.configure(t, n, i), wn.addBox(t, n), Oo.set(t, n);
    },
    stop(t) {
      wn.removeBox(t, Oo.get(t)), Oo.delete(t);
    },
    beforeUpdate(t, e, i) {
      const n = Oo.get(t);
      wn.configure(t, n, i), (n.options = i);
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "normal" },
      fullSize: !0,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const Eo = {
    average(t) {
      if (!t.length) return !1;
      let e,
        i,
        n = 0,
        s = 0,
        o = 0;
      for (e = 0, i = t.length; e < i; ++e) {
        const i = t[e].element;
        if (i && i.hasValue()) {
          const t = i.tooltipPosition();
          (n += t.x), (s += t.y), ++o;
        }
      }
      return { x: n / o, y: s / o };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let i,
        n,
        s,
        o = e.x,
        r = e.y,
        a = Number.POSITIVE_INFINITY;
      for (i = 0, n = t.length; i < n; ++i) {
        const n = t[i].element;
        if (n && n.hasValue()) {
          const t = wt(e, n.getCenterPoint());
          t < a && ((a = t), (s = n));
        }
      }
      if (s) {
        const t = s.tooltipPosition();
        (o = t.x), (r = t.y);
      }
      return { x: o, y: r };
    },
  };
  function Lo(t, e) {
    return e && (N(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function Ro(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1
      ? t.split("\n")
      : t;
  }
  function Io(t, e) {
    const { element: i, datasetIndex: n, index: s } = e,
      o = t.getDatasetMeta(n).controller,
      { label: r, value: a } = o.getLabelAndValue(s);
    return {
      chart: t,
      label: r,
      parsed: o.getParsed(s),
      raw: t.data.datasets[n].data[s],
      formattedValue: a,
      dataset: o.getDataset(),
      dataIndex: s,
      datasetIndex: n,
      element: i,
    };
  }
  function Fo(t, e) {
    const i = t.chart.ctx,
      { body: n, footer: s, title: o } = t,
      { boxWidth: r, boxHeight: a } = e,
      l = De(e.bodyFont),
      h = De(e.titleFont),
      c = De(e.footerFont),
      d = o.length,
      u = s.length,
      f = n.length,
      p = Ae(e.padding);
    let g = p.height,
      m = 0,
      v = n.reduce(
        (t, e) => t + e.before.length + e.lines.length + e.after.length,
        0
      );
    if (
      ((v += t.beforeBody.length + t.afterBody.length),
      d &&
        (g +=
          d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
      v)
    ) {
      g +=
        f * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) +
        (v - f) * l.lineHeight +
        (v - 1) * e.bodySpacing;
    }
    u &&
      (g += e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing);
    let b = 0;
    const y = function (t) {
      m = Math.max(m, i.measureText(t).width + b);
    };
    return (
      i.save(),
      (i.font = h.string),
      V(t.title, y),
      (i.font = l.string),
      V(t.beforeBody.concat(t.afterBody), y),
      (b = e.displayColors ? r + 2 + e.boxPadding : 0),
      V(n, (t) => {
        V(t.before, y), V(t.lines, y), V(t.after, y);
      }),
      (b = 0),
      (i.font = c.string),
      V(t.footer, y),
      i.restore(),
      (m += p.width),
      { width: m, height: g }
    );
  }
  function No(t, e, i, n) {
    const { x: s, width: o } = i,
      {
        width: r,
        chartArea: { left: a, right: l },
      } = t;
    let h = "center";
    return (
      "center" === n
        ? (h = s <= (a + l) / 2 ? "left" : "right")
        : s <= o / 2
        ? (h = "left")
        : s >= r - o / 2 && (h = "right"),
      (function (t, e, i, n) {
        const { x: s, width: o } = n,
          r = i.caretSize + i.caretPadding;
        return (
          ("left" === t && s + o + r > e.width) ||
          ("right" === t && s - o - r < 0) ||
          void 0
        );
      })(h, t, e, i) && (h = "center"),
      h
    );
  }
  function zo(t, e, i) {
    const n =
      i.yAlign ||
      e.yAlign ||
      (function (t, e) {
        const { y: i, height: n } = e;
        return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center";
      })(t, i);
    return { xAlign: i.xAlign || e.xAlign || No(t, e, i, n), yAlign: n };
  }
  function $o(t, e, i, n) {
    const { caretSize: s, caretPadding: o, cornerRadius: r } = t,
      { xAlign: a, yAlign: l } = i,
      h = s + o,
      { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = Me(r);
    let p = (function (t, e) {
      let { x: i, width: n } = t;
      return "right" === e ? (i -= n) : "center" === e && (i -= n / 2), i;
    })(e, a);
    const g = (function (t, e, i) {
      let { y: n, height: s } = t;
      return "top" === e ? (n += i) : (n -= "bottom" === e ? s + i : s / 2), n;
    })(e, l, h);
    return (
      "center" === l
        ? "left" === a
          ? (p += h)
          : "right" === a && (p -= h)
        : "left" === a
        ? (p -= Math.max(c, u) + s)
        : "right" === a && (p += Math.max(d, f) + s),
      { x: Mt(p, 0, n.width - e.width), y: Mt(g, 0, n.height - e.height) }
    );
  }
  function jo(t, e, i) {
    const n = Ae(i.padding);
    return "center" === e
      ? t.x + t.width / 2
      : "right" === e
      ? t.x + t.width - n.right
      : t.x + n.left;
  }
  function Yo(t) {
    return Lo([], Ro(t));
  }
  function Wo(t, e) {
    const i =
      e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return i ? t.override(i) : t;
  }
  const Bo = {
    beforeTitle: R,
    title(t) {
      if (t.length > 0) {
        const e = t[0],
          i = e.chart.data.labels,
          n = i ? i.length : 0;
        if (this && this.options && "dataset" === this.options.mode)
          return e.dataset.label || "";
        if (e.label) return e.label;
        if (n > 0 && e.dataIndex < n) return i[e.dataIndex];
      }
      return "";
    },
    afterTitle: R,
    beforeBody: R,
    beforeLabel: R,
    label(t) {
      if (this && this.options && "dataset" === this.options.mode)
        return t.label + ": " + t.formattedValue || t.formattedValue;
      let e = t.dataset.label || "";
      e && (e += ": ");
      const i = t.formattedValue;
      return F(i) || (e += i), e;
    },
    labelColor(t) {
      const e = t.chart
        .getDatasetMeta(t.datasetIndex)
        .controller.getStyle(t.dataIndex);
      return {
        borderColor: e.borderColor,
        backgroundColor: e.backgroundColor,
        borderWidth: e.borderWidth,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderRadius: 0,
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(t) {
      const e = t.chart
        .getDatasetMeta(t.datasetIndex)
        .controller.getStyle(t.dataIndex);
      return { pointStyle: e.pointStyle, rotation: e.rotation };
    },
    afterLabel: R,
    afterBody: R,
    beforeFooter: R,
    footer: R,
    afterFooter: R,
  };
  function Vo(t, e, i, n) {
    const s = t[e].call(i, n);
    return void 0 === s ? Bo[e].call(i, n) : s;
  }
  let Ho = class extends jn {
    static positioners = Eo;
    constructor(t) {
      super(),
        (this.opacity = 0),
        (this._active = []),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0);
    }
    initialize(t) {
      (this.options = t),
        (this._cachedAnimations = void 0),
        (this.$context = void 0);
    }
    _resolveAnimations() {
      const t = this._cachedAnimations;
      if (t) return t;
      const e = this.chart,
        i = this.options.setContext(this.getContext()),
        n = i.enabled && e.options.animation && i.animations,
        s = new Ti(this.chart, n);
      return n._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
      return (
        this.$context ||
        (this.$context =
          ((t = this.chart.getContext()),
          (e = this),
          (i = this._tooltipItems),
          Oe(t, { tooltip: e, tooltipItems: i, type: "tooltip" })))
      );
      var t, e, i;
    }
    getTitle(t, e) {
      const { callbacks: i } = e,
        n = Vo(i, "beforeTitle", this, t),
        s = Vo(i, "title", this, t),
        o = Vo(i, "afterTitle", this, t);
      let r = [];
      return (r = Lo(r, Ro(n))), (r = Lo(r, Ro(s))), (r = Lo(r, Ro(o))), r;
    }
    getBeforeBody(t, e) {
      return Yo(Vo(e.callbacks, "beforeBody", this, t));
    }
    getBody(t, e) {
      const { callbacks: i } = e,
        n = [];
      return (
        V(t, (t) => {
          const e = { before: [], lines: [], after: [] },
            s = Wo(i, t);
          Lo(e.before, Ro(Vo(s, "beforeLabel", this, t))),
            Lo(e.lines, Vo(s, "label", this, t)),
            Lo(e.after, Ro(Vo(s, "afterLabel", this, t))),
            n.push(e);
        }),
        n
      );
    }
    getAfterBody(t, e) {
      return Yo(Vo(e.callbacks, "afterBody", this, t));
    }
    getFooter(t, e) {
      const { callbacks: i } = e,
        n = Vo(i, "beforeFooter", this, t),
        s = Vo(i, "footer", this, t),
        o = Vo(i, "afterFooter", this, t);
      let r = [];
      return (r = Lo(r, Ro(n))), (r = Lo(r, Ro(s))), (r = Lo(r, Ro(o))), r;
    }
    _createItems(t) {
      const e = this._active,
        i = this.chart.data,
        n = [],
        s = [],
        o = [];
      let r,
        a,
        l = [];
      for (r = 0, a = e.length; r < a; ++r) l.push(Io(this.chart, e[r]));
      return (
        t.filter && (l = l.filter((e, n, s) => t.filter(e, n, s, i))),
        t.itemSort && (l = l.sort((e, n) => t.itemSort(e, n, i))),
        V(l, (e) => {
          const i = Wo(t.callbacks, e);
          n.push(Vo(i, "labelColor", this, e)),
            s.push(Vo(i, "labelPointStyle", this, e)),
            o.push(Vo(i, "labelTextColor", this, e));
        }),
        (this.labelColors = n),
        (this.labelPointStyles = s),
        (this.labelTextColors = o),
        (this.dataPoints = l),
        l
      );
    }
    update(t, e) {
      const i = this.options.setContext(this.getContext()),
        n = this._active;
      let s,
        o = [];
      if (n.length) {
        const t = Eo[i.position].call(this, n, this._eventPosition);
        (o = this._createItems(i)),
          (this.title = this.getTitle(o, i)),
          (this.beforeBody = this.getBeforeBody(o, i)),
          (this.body = this.getBody(o, i)),
          (this.afterBody = this.getAfterBody(o, i)),
          (this.footer = this.getFooter(o, i));
        const e = (this._size = Fo(this, i)),
          r = Object.assign({}, t, e),
          a = zo(this.chart, i, r),
          l = $o(i, r, a, this.chart);
        (this.xAlign = a.xAlign),
          (this.yAlign = a.yAlign),
          (s = {
            opacity: 1,
            x: l.x,
            y: l.y,
            width: e.width,
            height: e.height,
            caretX: t.x,
            caretY: t.y,
          });
      } else 0 !== this.opacity && (s = { opacity: 0 });
      (this._tooltipItems = o),
        (this.$context = void 0),
        s && this._resolveAnimations().update(this, s),
        t &&
          i.external &&
          i.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: e,
          });
    }
    drawCaret(t, e, i, n) {
      const s = this.getCaretPosition(t, i, n);
      e.lineTo(s.x1, s.y1), e.lineTo(s.x2, s.y2), e.lineTo(s.x3, s.y3);
    }
    getCaretPosition(t, e, i) {
      const { xAlign: n, yAlign: s } = this,
        { caretSize: o, cornerRadius: r } = i,
        { topLeft: a, topRight: l, bottomLeft: h, bottomRight: c } = Me(r),
        { x: d, y: u } = t,
        { width: f, height: p } = e;
      let g, m, v, b, y, x;
      return (
        "center" === s
          ? ((y = u + p / 2),
            "left" === n
              ? ((g = d), (m = g - o), (b = y + o), (x = y - o))
              : ((g = d + f), (m = g + o), (b = y - o), (x = y + o)),
            (v = g))
          : ((m =
              "left" === n
                ? d + Math.max(a, h) + o
                : "right" === n
                ? d + f - Math.max(l, c) - o
                : this.caretX),
            "top" === s
              ? ((b = u), (y = b - o), (g = m - o), (v = m + o))
              : ((b = u + p), (y = b + o), (g = m + o), (v = m - o)),
            (x = b)),
        { x1: g, x2: m, x3: v, y1: b, y2: y, y3: x }
      );
    }
    drawTitle(t, e, i) {
      const n = this.title,
        s = n.length;
      let o, r, a;
      if (s) {
        const l = pi(i.rtl, this.x, this.width);
        for (
          t.x = jo(this, i.titleAlign, i),
            e.textAlign = l.textAlign(i.titleAlign),
            e.textBaseline = "middle",
            o = De(i.titleFont),
            r = i.titleSpacing,
            e.fillStyle = i.titleColor,
            e.font = o.string,
            a = 0;
          a < s;
          ++a
        )
          e.fillText(n[a], l.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + r),
            a + 1 === s && (t.y += i.titleMarginBottom - r);
      }
    }
    _drawColorBox(t, e, i, n, s) {
      const o = this.labelColors[i],
        r = this.labelPointStyles[i],
        { boxHeight: a, boxWidth: l } = s,
        h = De(s.bodyFont),
        c = jo(this, "left", s),
        d = n.x(c),
        u = a < h.lineHeight ? (h.lineHeight - a) / 2 : 0,
        f = e.y + u;
      if (s.usePointStyle) {
        const e = {
            radius: Math.min(l, a) / 2,
            pointStyle: r.pointStyle,
            rotation: r.rotation,
            borderWidth: 1,
          },
          i = n.leftForLtr(d, l) + l / 2,
          h = f + a / 2;
        (t.strokeStyle = s.multiKeyBackground),
          (t.fillStyle = s.multiKeyBackground),
          he(t, e, i, h),
          (t.strokeStyle = o.borderColor),
          (t.fillStyle = o.backgroundColor),
          he(t, e, i, h);
      } else {
        (t.lineWidth = z(o.borderWidth)
          ? Math.max(...Object.values(o.borderWidth))
          : o.borderWidth || 1),
          (t.strokeStyle = o.borderColor),
          t.setLineDash(o.borderDash || []),
          (t.lineDashOffset = o.borderDashOffset || 0);
        const e = n.leftForLtr(d, l),
          i = n.leftForLtr(n.xPlus(d, 1), l - 2),
          r = Me(o.borderRadius);
        Object.values(r).some((t) => 0 !== t)
          ? (t.beginPath(),
            (t.fillStyle = s.multiKeyBackground),
            ye(t, { x: e, y: f, w: l, h: a, radius: r }),
            t.fill(),
            t.stroke(),
            (t.fillStyle = o.backgroundColor),
            t.beginPath(),
            ye(t, { x: i, y: f + 1, w: l - 2, h: a - 2, radius: r }),
            t.fill())
          : ((t.fillStyle = s.multiKeyBackground),
            t.fillRect(e, f, l, a),
            t.strokeRect(e, f, l, a),
            (t.fillStyle = o.backgroundColor),
            t.fillRect(i, f + 1, l - 2, a - 2));
      }
      t.fillStyle = this.labelTextColors[i];
    }
    drawBody(t, e, i) {
      const { body: n } = this,
        {
          bodySpacing: s,
          bodyAlign: o,
          displayColors: r,
          boxHeight: a,
          boxWidth: l,
          boxPadding: h,
        } = i,
        c = De(i.bodyFont);
      let d = c.lineHeight,
        u = 0;
      const f = pi(i.rtl, this.x, this.width),
        p = function (i) {
          e.fillText(i, f.x(t.x + u), t.y + d / 2), (t.y += d + s);
        },
        g = f.textAlign(o);
      let m, v, b, y, x, _, w;
      for (
        e.textAlign = o,
          e.textBaseline = "middle",
          e.font = c.string,
          t.x = jo(this, g, i),
          e.fillStyle = i.bodyColor,
          V(this.beforeBody, p),
          u = r && "right" !== g ? ("center" === o ? l / 2 + h : l + 2 + h) : 0,
          y = 0,
          _ = n.length;
        y < _;
        ++y
      ) {
        for (
          m = n[y],
            v = this.labelTextColors[y],
            e.fillStyle = v,
            V(m.before, p),
            b = m.lines,
            r &&
              b.length &&
              (this._drawColorBox(e, t, y, f, i),
              (d = Math.max(c.lineHeight, a))),
            x = 0,
            w = b.length;
          x < w;
          ++x
        )
          p(b[x]), (d = c.lineHeight);
        V(m.after, p);
      }
      (u = 0), (d = c.lineHeight), V(this.afterBody, p), (t.y -= s);
    }
    drawFooter(t, e, i) {
      const n = this.footer,
        s = n.length;
      let o, r;
      if (s) {
        const a = pi(i.rtl, this.x, this.width);
        for (
          t.x = jo(this, i.footerAlign, i),
            t.y += i.footerMarginTop,
            e.textAlign = a.textAlign(i.footerAlign),
            e.textBaseline = "middle",
            o = De(i.footerFont),
            e.fillStyle = i.footerColor,
            e.font = o.string,
            r = 0;
          r < s;
          ++r
        )
          e.fillText(n[r], a.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + i.footerSpacing);
      }
    }
    drawBackground(t, e, i, n) {
      const { xAlign: s, yAlign: o } = this,
        { x: r, y: a } = t,
        { width: l, height: h } = i,
        {
          topLeft: c,
          topRight: d,
          bottomLeft: u,
          bottomRight: f,
        } = Me(n.cornerRadius);
      (e.fillStyle = n.backgroundColor),
        (e.strokeStyle = n.borderColor),
        (e.lineWidth = n.borderWidth),
        e.beginPath(),
        e.moveTo(r + c, a),
        "top" === o && this.drawCaret(t, e, i, n),
        e.lineTo(r + l - d, a),
        e.quadraticCurveTo(r + l, a, r + l, a + d),
        "center" === o && "right" === s && this.drawCaret(t, e, i, n),
        e.lineTo(r + l, a + h - f),
        e.quadraticCurveTo(r + l, a + h, r + l - f, a + h),
        "bottom" === o && this.drawCaret(t, e, i, n),
        e.lineTo(r + u, a + h),
        e.quadraticCurveTo(r, a + h, r, a + h - u),
        "center" === o && "left" === s && this.drawCaret(t, e, i, n),
        e.lineTo(r, a + c),
        e.quadraticCurveTo(r, a, r + c, a),
        e.closePath(),
        e.fill(),
        n.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
      const e = this.chart,
        i = this.$animations,
        n = i && i.x,
        s = i && i.y;
      if (n || s) {
        const i = Eo[t.position].call(this, this._active, this._eventPosition);
        if (!i) return;
        const o = (this._size = Fo(this, t)),
          r = Object.assign({}, i, this._size),
          a = zo(e, t, r),
          l = $o(t, r, a, e);
        (n._to === l.x && s._to === l.y) ||
          ((this.xAlign = a.xAlign),
          (this.yAlign = a.yAlign),
          (this.width = o.width),
          (this.height = o.height),
          (this.caretX = i.x),
          (this.caretY = i.y),
          this._resolveAnimations().update(this, l));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(t) {
      const e = this.options.setContext(this.getContext());
      let i = this.opacity;
      if (!i) return;
      this._updateAnimationTarget(e);
      const n = { width: this.width, height: this.height },
        s = { x: this.x, y: this.y };
      i = Math.abs(i) < 0.001 ? 0 : i;
      const o = Ae(e.padding),
        r =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length;
      e.enabled &&
        r &&
        (t.save(),
        (t.globalAlpha = i),
        this.drawBackground(s, t, n, e),
        gi(t, e.textDirection),
        (s.y += o.top),
        this.drawTitle(s, t, e),
        this.drawBody(s, t, e),
        this.drawFooter(s, t, e),
        mi(t, e.textDirection),
        t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, e) {
      const i = this._active,
        n = t.map(({ datasetIndex: t, index: e }) => {
          const i = this.chart.getDatasetMeta(t);
          if (!i) throw new Error("Cannot find a dataset at index " + t);
          return { datasetIndex: t, element: i.data[e], index: e };
        }),
        s = !H(i, n),
        o = this._positionChanged(n, e);
      (s || o) &&
        ((this._active = n),
        (this._eventPosition = e),
        (this._ignoreReplayEvents = !0),
        this.update(!0));
    }
    handleEvent(t, e, i = !0) {
      if (e && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const n = this.options,
        s = this._active || [],
        o = this._getActiveElements(t, s, e, i),
        r = this._positionChanged(o, t),
        a = e || !H(o, s) || r;
      return (
        a &&
          ((this._active = o),
          (n.enabled || n.external) &&
            ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
        a
      );
    }
    _getActiveElements(t, e, i, n) {
      const s = this.options;
      if ("mouseout" === t.type) return [];
      if (!n)
        return e.filter(
          (t) =>
            this.chart.data.datasets[t.datasetIndex] &&
            void 0 !==
              this.chart
                .getDatasetMeta(t.datasetIndex)
                .controller.getParsed(t.index)
        );
      const o = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
      return s.reverse && o.reverse(), o;
    }
    _positionChanged(t, e) {
      const { caretX: i, caretY: n, options: s } = this,
        o = Eo[s.position].call(this, t, e);
      return !1 !== o && (i !== o.x || n !== o.y);
    }
  };
  var Uo = {
      id: "tooltip",
      _element: Ho,
      positioners: Eo,
      afterInit(t, e, i) {
        i && (t.tooltip = new Ho({ chart: t, options: i }));
      },
      beforeUpdate(t, e, i) {
        t.tooltip && t.tooltip.initialize(i);
      },
      reset(t, e, i) {
        t.tooltip && t.tooltip.initialize(i);
      },
      afterDraw(t) {
        const e = t.tooltip;
        if (e && e._willRender()) {
          const i = { tooltip: e };
          if (
            !1 ===
            t.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 })
          )
            return;
          e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i);
        }
      },
      afterEvent(t, e) {
        if (t.tooltip) {
          const i = e.replay;
          t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
        }
      },
      defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: { weight: "bold" },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: { weight: "bold" },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (t, e) => e.bodyFont.size,
        boxWidth: (t, e) => e.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: { duration: 400, easing: "easeOutQuart" },
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "width", "height", "caretX", "caretY"],
          },
          opacity: { easing: "linear", duration: 200 },
        },
        callbacks: Bo,
      },
      defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font",
      },
      descriptors: {
        _scriptable: (t) =>
          "filter" !== t && "itemSort" !== t && "external" !== t,
        _indexable: !1,
        callbacks: { _scriptable: !1, _indexable: !1 },
        animation: { _fallback: !1 },
        animations: { _fallback: "animation" },
      },
      additionalOptionScopes: ["interaction"],
    },
    Go = Object.freeze({
      __proto__: null,
      Colors: io,
      Decimation: oo,
      Filler: ko,
      Legend: Ao,
      SubTitle: Po,
      Title: To,
      Tooltip: Uo,
    });
  function Ko(t, e, i, n) {
    const s = t.indexOf(e);
    if (-1 === s)
      return ((t, e, i, n) => (
        "string" == typeof e
          ? ((i = t.push(e) - 1), n.unshift({ index: i, label: e }))
          : isNaN(e) && (i = null),
        i
      ))(t, e, i, n);
    return s !== t.lastIndexOf(e) ? i : s;
  }
  function qo(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  function Xo(t, e) {
    const i = [],
      {
        bounds: n,
        step: s,
        min: o,
        max: r,
        precision: a,
        count: l,
        maxTicks: h,
        maxDigits: c,
        includeBounds: d,
      } = t,
      u = s || 1,
      f = h - 1,
      { min: p, max: g } = e,
      m = !F(o),
      v = !F(r),
      b = !F(l),
      y = (g - p) / (c + 1);
    let x,
      _,
      w,
      k,
      C = gt((g - p) / f / u) * u;
    if (C < 1e-14 && !m && !v) return [{ value: p }, { value: g }];
    (k = Math.ceil(g / C) - Math.floor(p / C)),
      k > f && (C = gt((k * C) / f / u) * u),
      F(a) || ((x = Math.pow(10, a)), (C = Math.ceil(C * x) / x)),
      "ticks" === n
        ? ((_ = Math.floor(p / C) * C), (w = Math.ceil(g / C) * C))
        : ((_ = p), (w = g)),
      m &&
      v &&
      s &&
      (function (t, e) {
        const i = Math.round(t);
        return i - e <= t && i + e >= t;
      })((r - o) / s, C / 1e3)
        ? ((k = Math.round(Math.min((r - o) / C, h))),
          (C = (r - o) / k),
          (_ = o),
          (w = r))
        : b
        ? ((_ = m ? o : _), (w = v ? r : w), (k = l - 1), (C = (w - _) / k))
        : ((k = (w - _) / C),
          (k = pt(k, Math.round(k), C / 1e3) ? Math.round(k) : Math.ceil(k)));
    const S = Math.max(xt(C), xt(_));
    (x = Math.pow(10, F(a) ? S : a)),
      (_ = Math.round(_ * x) / x),
      (w = Math.round(w * x) / x);
    let M = 0;
    for (
      m &&
      (d && _ !== o
        ? (i.push({ value: o }),
          _ < o && M++,
          pt(Math.round((_ + M * C) * x) / x, o, Zo(o, y, t)) && M++)
        : _ < o && M++);
      M < k;
      ++M
    ) {
      const t = Math.round((_ + M * C) * x) / x;
      if (v && t > r) break;
      i.push({ value: t });
    }
    return (
      v && d && w !== r
        ? i.length && pt(i[i.length - 1].value, r, Zo(r, y, t))
          ? (i[i.length - 1].value = r)
          : i.push({ value: r })
        : (v && w !== r) || i.push({ value: w }),
      i
    );
  }
  function Zo(t, e, { horizontal: i, minRotation: n }) {
    const s = bt(n),
      o = (i ? Math.sin(s) : Math.cos(s)) || 0.001,
      r = 0.75 * e * ("" + t).length;
    return Math.min(e / o, r);
  }
  class Jo extends Xn {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      return F(t) ||
        (("number" == typeof t || t instanceof Number) && !isFinite(+t))
        ? null
        : +t;
    }
    handleTickRangeOptions() {
      const { beginAtZero: t } = this.options,
        { minDefined: e, maxDefined: i } = this.getUserBounds();
      let { min: n, max: s } = this;
      const o = (t) => (n = e ? n : t),
        r = (t) => (s = i ? s : t);
      if (t) {
        const t = ft(n),
          e = ft(s);
        t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && o(0);
      }
      if (n === s) {
        let e = 0 === s ? 1 : Math.abs(0.05 * s);
        r(s + e), t || o(n - e);
      }
      (this.min = n), (this.max = s);
    }
    getTickLimit() {
      const t = this.options.ticks;
      let e,
        { maxTicksLimit: i, stepSize: n } = t;
      return (
        n
          ? ((e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
            e > 1e3 &&
              (console.warn(
                `scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${e} ticks. Limiting to 1000.`
              ),
              (e = 1e3)))
          : ((e = this.computeTickLimit()), (i = i || 11)),
        i && (e = Math.min(i, e)),
        e
      );
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t = this.options,
        e = t.ticks;
      let i = this.getTickLimit();
      i = Math.max(2, i);
      const n = Xo(
        {
          maxTicks: i,
          bounds: t.bounds,
          min: t.min,
          max: t.max,
          precision: e.precision,
          step: e.stepSize,
          count: e.count,
          maxDigits: this._maxDigits(),
          horizontal: this.isHorizontal(),
          minRotation: e.minRotation || 0,
          includeBounds: !1 !== e.includeBounds,
        },
        this._range || this
      );
      return (
        "ticks" === t.bounds && vt(n, this, "value"),
        t.reverse
          ? (n.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        n
      );
    }
    configure() {
      const t = this.ticks;
      let e = this.min,
        i = this.max;
      if ((super.configure(), this.options.offset && t.length)) {
        const n = (i - e) / Math.max(t.length - 1, 1) / 2;
        (e -= n), (i += n);
      }
      (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
    }
    getLabelForValue(t) {
      return Xt(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class Qo extends Jo {
    static id = "linear";
    static defaults = { ticks: { callback: Jt.formatters.numeric } };
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      (this.min = $(t) ? t : 0),
        (this.max = $(e) ? e : 1),
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        e = t ? this.width : this.height,
        i = bt(this.options.ticks.minRotation),
        n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
        s = this._resolveTickFontOptions(0);
      return Math.ceil(e / Math.min(40, s.lineHeight / n));
    }
    getPixelForValue(t) {
      return null === t
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
  }
  const tr = (t) => Math.floor(ut(t)),
    er = (t, e) => Math.pow(10, tr(t) + e);
  function ir(t) {
    return 1 === t / Math.pow(10, tr(t));
  }
  function nr(t, e, i) {
    const n = Math.pow(10, i),
      s = Math.floor(t / n);
    return Math.ceil(e / n) - s;
  }
  function sr(t, { min: e, max: i }) {
    e = j(t.min, e);
    const n = [],
      s = tr(e);
    let o = (function (t, e) {
        let i = tr(e - t);
        for (; nr(t, e, i) > 10; ) i++;
        for (; nr(t, e, i) < 10; ) i--;
        return Math.min(i, tr(t));
      })(e, i),
      r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
    const a = Math.pow(10, o),
      l = s > o ? Math.pow(10, s) : 0,
      h = Math.round((e - l) * r) / r,
      c = Math.floor((e - l) / a / 10) * a * 10;
    let d = Math.floor((h - c) / Math.pow(10, o)),
      u = j(t.min, Math.round((l + c + d * Math.pow(10, o)) * r) / r);
    for (; u < i; )
      n.push({ value: u, major: ir(u), significand: d }),
        d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
        d >= 20 && (o++, (d = 2), (r = o >= 0 ? 1 : r)),
        (u = Math.round((l + c + d * Math.pow(10, o)) * r) / r);
    const f = j(t.max, u);
    return n.push({ value: f, major: ir(f), significand: d }), n;
  }
  class or extends Xn {
    static id = "logarithmic";
    static defaults = {
      ticks: { callback: Jt.formatters.logarithmic, major: { enabled: !0 } },
    };
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, e) {
      const i = Jo.prototype.parse.apply(this, [t, e]);
      if (0 !== i) return $(i) && i > 0 ? i : null;
      this._zero = !0;
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      (this.min = $(t) ? Math.max(0, t) : null),
        (this.max = $(e) ? Math.max(0, e) : null),
        this.options.beginAtZero && (this._zero = !0),
        this._zero &&
          this.min !== this._suggestedMin &&
          !$(this._userMin) &&
          (this.min =
            t === er(this.min, 0) ? er(this.min, -1) : er(this.min, 0)),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let i = this.min,
        n = this.max;
      const s = (e) => (i = t ? i : e),
        o = (t) => (n = e ? n : t);
      i === n && (i <= 0 ? (s(1), o(10)) : (s(er(i, -1)), o(er(n, 1)))),
        i <= 0 && s(er(n, -1)),
        n <= 0 && o(er(i, 1)),
        (this.min = i),
        (this.max = n);
    }
    buildTicks() {
      const t = this.options,
        e = sr({ min: this._userMin, max: this._userMax }, this);
      return (
        "ticks" === t.bounds && vt(e, this, "value"),
        t.reverse
          ? (e.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        e
      );
    }
    getLabelForValue(t) {
      return void 0 === t
        ? "0"
        : Xt(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      super.configure(),
        (this._startValue = ut(t)),
        (this._valueRange = ut(this.max) - ut(t));
    }
    getPixelForValue(t) {
      return (
        (void 0 !== t && 0 !== t) || (t = this.min),
        null === t || isNaN(t)
          ? NaN
          : this.getPixelForDecimal(
              t === this.min ? 0 : (ut(t) - this._startValue) / this._valueRange
            )
      );
    }
    getValueForPixel(t) {
      const e = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + e * this._valueRange);
    }
  }
  function rr(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const t = Ae(e.backdropPadding);
      return Y(e.font && e.font.size, se.font.size) + t.height;
    }
    return 0;
  }
  function ar(t, e, i, n, s) {
    return t === n || t === s
      ? { start: e - i / 2, end: e + i / 2 }
      : t < n || t > s
      ? { start: e - i, end: e }
      : { start: e, end: e + i };
  }
  function lr(t) {
    const e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom,
      },
      i = Object.assign({}, e),
      n = [],
      s = [],
      o = t._pointLabels.length,
      r = t.options.pointLabels,
      a = r.centerPointLabels ? st / o : 0;
    for (let d = 0; d < o; d++) {
      const o = r.setContext(t.getPointLabelContext(d));
      s[d] = o.padding;
      const u = t.getPointPosition(d, t.drawingArea + s[d], a),
        f = De(o.font),
        p =
          ((l = t.ctx),
          (h = f),
          (c = N((c = t._pointLabels[d])) ? c : [c]),
          { w: re(l, h.string, c), h: c.length * h.lineHeight });
      n[d] = p;
      const g = Ct(t.getIndexAngle(d) + a),
        m = Math.round(yt(g));
      hr(i, e, g, ar(m, u.x, p.w, 0, 180), ar(m, u.y, p.h, 90, 270));
    }
    var l, h, c;
    t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
      (t._pointLabelItems = (function (t, e, i) {
        const n = [],
          s = t._pointLabels.length,
          o = t.options,
          { centerPointLabels: r, display: a } = o.pointLabels,
          l = { extra: rr(o) / 2, additionalAngle: r ? st / s : 0 };
        let h;
        for (let o = 0; o < s; o++) {
          (l.padding = i[o]), (l.size = e[o]);
          const s = cr(t, o, l);
          n.push(s),
            "auto" === a && ((s.visible = dr(s, h)), s.visible && (h = s));
        }
        return n;
      })(t, n, s));
  }
  function hr(t, e, i, n, s) {
    const o = Math.abs(Math.sin(i)),
      r = Math.abs(Math.cos(i));
    let a = 0,
      l = 0;
    n.start < e.l
      ? ((a = (e.l - n.start) / o), (t.l = Math.min(t.l, e.l - a)))
      : n.end > e.r &&
        ((a = (n.end - e.r) / o), (t.r = Math.max(t.r, e.r + a))),
      s.start < e.t
        ? ((l = (e.t - s.start) / r), (t.t = Math.min(t.t, e.t - l)))
        : s.end > e.b &&
          ((l = (s.end - e.b) / r), (t.b = Math.max(t.b, e.b + l)));
  }
  function cr(t, e, i) {
    const n = t.drawingArea,
      { extra: s, additionalAngle: o, padding: r, size: a } = i,
      l = t.getPointPosition(e, n + s + r, o),
      h = Math.round(yt(Ct(l.angle + ht))),
      c = (function (t, e, i) {
        90 === i || 270 === i ? (t -= e / 2) : (i > 270 || i < 90) && (t -= e);
        return t;
      })(l.y, a.h, h),
      d = (function (t) {
        if (0 === t || 180 === t) return "center";
        if (t < 180) return "left";
        return "right";
      })(h),
      u = (function (t, e, i) {
        "right" === i ? (t -= e) : "center" === i && (t -= e / 2);
        return t;
      })(l.x, a.w, d);
    return {
      visible: !0,
      x: l.x,
      y: c,
      textAlign: d,
      left: u,
      top: c,
      right: u + a.w,
      bottom: c + a.h,
    };
  }
  function dr(t, e) {
    if (!e) return !0;
    const { left: i, top: n, right: s, bottom: o } = t;
    return !(
      de({ x: i, y: n }, e) ||
      de({ x: i, y: o }, e) ||
      de({ x: s, y: n }, e) ||
      de({ x: s, y: o }, e)
    );
  }
  function ur(t, e, i) {
    const { left: n, top: s, right: o, bottom: r } = i,
      { backdropColor: a } = e;
    if (!F(a)) {
      const i = Me(e.borderRadius),
        l = Ae(e.backdropPadding);
      t.fillStyle = a;
      const h = n - l.left,
        c = s - l.top,
        d = o - n + l.width,
        u = r - s + l.height;
      Object.values(i).some((t) => 0 !== t)
        ? (t.beginPath(),
          ye(t, { x: h, y: c, w: d, h: u, radius: i }),
          t.fill())
        : t.fillRect(h, c, d, u);
    }
  }
  function fr(t, e, i, n) {
    const { ctx: s } = t;
    if (i) s.arc(t.xCenter, t.yCenter, e, 0, ot);
    else {
      let i = t.getPointPosition(0, e);
      s.moveTo(i.x, i.y);
      for (let o = 1; o < n; o++)
        (i = t.getPointPosition(o, e)), s.lineTo(i.x, i.y);
    }
  }
  class pr extends Jo {
    static id = "radialLinear";
    static defaults = {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
      },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: Jt.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback: (t) => t,
        padding: 5,
        centerPointLabels: !1,
      },
    };
    static defaultRoutes = {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color",
    };
    static descriptors = { angleLines: { _fallback: "grid" } };
    constructor(t) {
      super(t),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []);
    }
    setDimensions() {
      const t = (this._padding = Ae(rr(this.options) / 2)),
        e = (this.width = this.maxWidth - t.width),
        i = (this.height = this.maxHeight - t.height);
      (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
        (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
        (this.drawingArea = Math.floor(Math.min(e, i) / 2));
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!1);
      (this.min = $(t) && !isNaN(t) ? t : 0),
        (this.max = $(e) && !isNaN(e) ? e : 0),
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / rr(this.options));
    }
    generateTickLabels(t) {
      Jo.prototype.generateTickLabels.call(this, t),
        (this._pointLabels = this.getLabels()
          .map((t, e) => {
            const i = B(this.options.pointLabels.callback, [t, e], this);
            return i || 0 === i ? i : "";
          })
          .filter((t, e) => this.chart.getDataVisibility(e)));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display
        ? lr(this)
        : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, i, n) {
      (this.xCenter += Math.floor((t - e) / 2)),
        (this.yCenter += Math.floor((i - n) / 2)),
        (this.drawingArea -= Math.min(
          this.drawingArea / 2,
          Math.max(t, e, i, n)
        ));
    }
    getIndexAngle(t) {
      return Ct(
        t * (ot / (this._pointLabels.length || 1)) +
          bt(this.options.startAngle || 0)
      );
    }
    getDistanceFromCenterForValue(t) {
      if (F(t)) return NaN;
      const e = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
      if (F(t)) return NaN;
      const e = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
      const e = this._pointLabels || [];
      if (t >= 0 && t < e.length) {
        const i = e[t];
        return (function (t, e, i) {
          return Oe(t, { label: i, index: e, type: "pointLabel" });
        })(this.getContext(), t, i);
      }
    }
    getPointPosition(t, e, i = 0) {
      const n = this.getIndexAngle(t) - ht + i;
      return {
        x: Math.cos(n) * e + this.xCenter,
        y: Math.sin(n) * e + this.yCenter,
        angle: n,
      };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: e, top: i, right: n, bottom: s } = this._pointLabelItems[t];
      return { left: e, top: i, right: n, bottom: s };
    }
    drawBackground() {
      const {
        backgroundColor: t,
        grid: { circular: e },
      } = this.options;
      if (t) {
        const i = this.ctx;
        i.save(),
          i.beginPath(),
          fr(
            this,
            this.getDistanceFromCenterForValue(this._endValue),
            e,
            this._pointLabels.length
          ),
          i.closePath(),
          (i.fillStyle = t),
          i.fill(),
          i.restore();
      }
    }
    drawGrid() {
      const t = this.ctx,
        e = this.options,
        { angleLines: i, grid: n, border: s } = e,
        o = this._pointLabels.length;
      let r, a, l;
      if (
        (e.pointLabels.display &&
          (function (t, e) {
            const {
              ctx: i,
              options: { pointLabels: n },
            } = t;
            for (let s = e - 1; s >= 0; s--) {
              const e = t._pointLabelItems[s];
              if (!e.visible) continue;
              const o = n.setContext(t.getPointLabelContext(s));
              ur(i, o, e);
              const r = De(o.font),
                { x: a, y: l, textAlign: h } = e;
              be(i, t._pointLabels[s], a, l + r.lineHeight / 2, r, {
                color: o.color,
                textAlign: h,
                textBaseline: "middle",
              });
            }
          })(this, o),
        n.display &&
          this.ticks.forEach((t, e) => {
            if (0 !== e) {
              a = this.getDistanceFromCenterForValue(t.value);
              const i = this.getContext(e),
                r = n.setContext(i),
                l = s.setContext(i);
              !(function (t, e, i, n, s) {
                const o = t.ctx,
                  r = e.circular,
                  { color: a, lineWidth: l } = e;
                (!r && !n) ||
                  !a ||
                  !l ||
                  i < 0 ||
                  (o.save(),
                  (o.strokeStyle = a),
                  (o.lineWidth = l),
                  o.setLineDash(s.dash),
                  (o.lineDashOffset = s.dashOffset),
                  o.beginPath(),
                  fr(t, i, r, n),
                  o.closePath(),
                  o.stroke(),
                  o.restore());
              })(this, r, a, o, l);
            }
          }),
        i.display)
      ) {
        for (t.save(), r = o - 1; r >= 0; r--) {
          const n = i.setContext(this.getPointLabelContext(r)),
            { color: s, lineWidth: o } = n;
          o &&
            s &&
            ((t.lineWidth = o),
            (t.strokeStyle = s),
            t.setLineDash(n.borderDash),
            (t.lineDashOffset = n.borderDashOffset),
            (a = this.getDistanceFromCenterForValue(
              e.ticks.reverse ? this.min : this.max
            )),
            (l = this.getPointPosition(r, a)),
            t.beginPath(),
            t.moveTo(this.xCenter, this.yCenter),
            t.lineTo(l.x, l.y),
            t.stroke());
        }
        t.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const t = this.ctx,
        e = this.options,
        i = e.ticks;
      if (!i.display) return;
      const n = this.getIndexAngle(0);
      let s, o;
      t.save(),
        t.translate(this.xCenter, this.yCenter),
        t.rotate(n),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        this.ticks.forEach((n, r) => {
          if (0 === r && !e.reverse) return;
          const a = i.setContext(this.getContext(r)),
            l = De(a.font);
          if (
            ((s = this.getDistanceFromCenterForValue(this.ticks[r].value)),
            a.showLabelBackdrop)
          ) {
            (t.font = l.string),
              (o = t.measureText(n.label).width),
              (t.fillStyle = a.backdropColor);
            const e = Ae(a.backdropPadding);
            t.fillRect(
              -o / 2 - e.left,
              -s - l.size / 2 - e.top,
              o + e.width,
              l.size + e.height
            );
          }
          be(t, n.label, 0, -s, l, {
            color: a.color,
            strokeColor: a.textStrokeColor,
            strokeWidth: a.textStrokeWidth,
          });
        }),
        t.restore();
    }
    drawTitle() {}
  }
  const gr = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    mr = Object.keys(gr);
  function vr(t, e) {
    return t - e;
  }
  function br(t, e) {
    if (F(e)) return null;
    const i = t._adapter,
      { parser: n, round: s, isoWeekday: o } = t._parseOpts;
    let r = e;
    return (
      "function" == typeof n && (r = n(r)),
      $(r) || (r = "string" == typeof n ? i.parse(r, n) : i.parse(r)),
      null === r
        ? null
        : (s &&
            (r =
              "week" !== s || (!mt(o) && !0 !== o)
                ? i.startOf(r, s)
                : i.startOf(r, "isoWeek", o)),
          +r)
    );
  }
  function yr(t, e, i, n) {
    const s = mr.length;
    for (let o = mr.indexOf(t); o < s - 1; ++o) {
      const t = gr[mr[o]],
        s = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
      if (t.common && Math.ceil((i - e) / (s * t.size)) <= n) return mr[o];
    }
    return mr[s - 1];
  }
  function xr(t, e, i) {
    if (i) {
      if (i.length) {
        const { lo: n, hi: s } = Dt(i, e);
        t[i[n] >= e ? i[n] : i[s]] = !0;
      }
    } else t[e] = !0;
  }
  function _r(t, e, i) {
    const n = [],
      s = {},
      o = e.length;
    let r, a;
    for (r = 0; r < o; ++r)
      (a = e[r]), (s[a] = r), n.push({ value: a, major: !1 });
    return 0 !== o && i
      ? (function (t, e, i, n) {
          const s = t._adapter,
            o = +s.startOf(e[0].value, n),
            r = e[e.length - 1].value;
          let a, l;
          for (a = o; a <= r; a = +s.add(a, 1, n))
            (l = i[a]), l >= 0 && (e[l].major = !0);
          return e;
        })(t, n, s, i)
      : n;
  }
  class wr extends Xn {
    static id = "time";
    static defaults = {
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {},
      },
      ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
    };
    constructor(t) {
      super(t),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = "day"),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0);
    }
    init(t, e = {}) {
      const i = t.time || (t.time = {}),
        n = (this._adapter = new en._date(t.adapters.date));
      n.init(e),
        X(i.displayFormats, n.formats()),
        (this._parseOpts = {
          parser: i.parser,
          round: i.round,
          isoWeekday: i.isoWeekday,
        }),
        super.init(t),
        (this._normalized = e.normalized);
    }
    parse(t, e) {
      return void 0 === t ? null : br(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
      const t = this.options,
        e = this._adapter,
        i = t.time.unit || "day";
      let {
        min: n,
        max: s,
        minDefined: o,
        maxDefined: r,
      } = this.getUserBounds();
      function a(t) {
        o || isNaN(t.min) || (n = Math.min(n, t.min)),
          r || isNaN(t.max) || (s = Math.max(s, t.max));
      }
      (o && r) ||
        (a(this._getLabelBounds()),
        ("ticks" === t.bounds && "labels" === t.ticks.source) ||
          a(this.getMinMax(!1))),
        (n = $(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i)),
        (s = $(s) && !isNaN(s) ? s : +e.endOf(Date.now(), i) + 1),
        (this.min = Math.min(n, s - 1)),
        (this.max = Math.max(n + 1, s));
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let e = Number.POSITIVE_INFINITY,
        i = Number.NEGATIVE_INFINITY;
      return (
        t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
      );
    }
    buildTicks() {
      const t = this.options,
        e = t.time,
        i = t.ticks,
        n =
          "labels" === i.source ? this.getLabelTimestamps() : this._generate();
      "ticks" === t.bounds &&
        n.length &&
        ((this.min = this._userMin || n[0]),
        (this.max = this._userMax || n[n.length - 1]));
      const s = this.min,
        o = (function (t, e, i) {
          let n = 0,
            s = t.length;
          for (; n < s && t[n] < e; ) n++;
          for (; s > n && t[s - 1] > i; ) s--;
          return n > 0 || s < t.length ? t.slice(n, s) : t;
        })(n, s, this.max);
      return (
        (this._unit =
          e.unit ||
          (i.autoSkip
            ? yr(e.minUnit, this.min, this.max, this._getLabelCapacity(s))
            : (function (t, e, i, n, s) {
                for (let o = mr.length - 1; o >= mr.indexOf(i); o--) {
                  const i = mr[o];
                  if (gr[i].common && t._adapter.diff(s, n, i) >= e - 1)
                    return i;
                }
                return mr[i ? mr.indexOf(i) : 0];
              })(this, o.length, e.minUnit, this.min, this.max))),
        (this._majorUnit =
          i.major.enabled && "year" !== this._unit
            ? (function (t) {
                for (let e = mr.indexOf(t) + 1, i = mr.length; e < i; ++e)
                  if (gr[mr[e]].common) return mr[e];
              })(this._unit)
            : void 0),
        this.initOffsets(n),
        t.reverse && o.reverse(),
        _r(this, o, this._majorUnit)
      );
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip &&
        this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets(t = []) {
      let e,
        i,
        n = 0,
        s = 0;
      this.options.offset &&
        t.length &&
        ((e = this.getDecimalForValue(t[0])),
        (n = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
        (i = this.getDecimalForValue(t[t.length - 1])),
        (s =
          1 === t.length
            ? i
            : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
      const o = t.length < 3 ? 0.5 : 0.25;
      (n = Mt(n, 0, o)),
        (s = Mt(s, 0, o)),
        (this._offsets = { start: n, end: s, factor: 1 / (n + 1 + s) });
    }
    _generate() {
      const t = this._adapter,
        e = this.min,
        i = this.max,
        n = this.options,
        s = n.time,
        o = s.unit || yr(s.minUnit, e, i, this._getLabelCapacity(e)),
        r = Y(n.ticks.stepSize, 1),
        a = "week" === o && s.isoWeekday,
        l = mt(a) || !0 === a,
        h = {};
      let c,
        d,
        u = e;
      if (
        (l && (u = +t.startOf(u, "isoWeek", a)),
        (u = +t.startOf(u, l ? "day" : o)),
        t.diff(i, e, o) > 1e5 * r)
      )
        throw new Error(
          e + " and " + i + " are too far apart with stepSize of " + r + " " + o
        );
      const f = "data" === n.ticks.source && this.getDataTimestamps();
      for (c = u, d = 0; c < i; c = +t.add(c, r, o), d++) xr(h, c, f);
      return (
        (c !== i && "ticks" !== n.bounds && 1 !== d) || xr(h, c, f),
        Object.keys(h)
          .sort(vr)
          .map((t) => +t)
      );
    }
    getLabelForValue(t) {
      const e = this._adapter,
        i = this.options.time;
      return i.tooltipFormat
        ? e.format(t, i.tooltipFormat)
        : e.format(t, i.displayFormats.datetime);
    }
    format(t, e) {
      const i = this.options.time.displayFormats,
        n = this._unit,
        s = e || i[n];
      return this._adapter.format(t, s);
    }
    _tickFormatFunction(t, e, i, n) {
      const s = this.options,
        o = s.ticks.callback;
      if (o) return B(o, [t, e, i], this);
      const r = s.time.displayFormats,
        a = this._unit,
        l = this._majorUnit,
        h = a && r[a],
        c = l && r[l],
        d = i[e],
        u = l && c && d && d.major;
      return this._adapter.format(t, n || (u ? c : h));
    }
    generateTickLabels(t) {
      let e, i, n;
      for (e = 0, i = t.length; e < i; ++e)
        (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
    }
    getDecimalForValue(t) {
      return null === t ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
      const e = this._offsets,
        i = this.getDecimalForValue(t);
      return this.getPixelForDecimal((e.start + i) * e.factor);
    }
    getValueForPixel(t) {
      const e = this._offsets,
        i = this.getDecimalForPixel(t) / e.factor - e.end;
      return this.min + i * (this.max - this.min);
    }
    _getLabelSize(t) {
      const e = this.options.ticks,
        i = this.ctx.measureText(t).width,
        n = bt(this.isHorizontal() ? e.maxRotation : e.minRotation),
        s = Math.cos(n),
        o = Math.sin(n),
        r = this._resolveTickFontOptions(0).size;
      return { w: i * s + r * o, h: i * o + r * s };
    }
    _getLabelCapacity(t) {
      const e = this.options.time,
        i = e.displayFormats,
        n = i[e.unit] || i.millisecond,
        s = this._tickFormatFunction(t, 0, _r(this, [t], this._majorUnit), n),
        o = this._getLabelSize(s),
        r =
          Math.floor(
            this.isHorizontal() ? this.width / o.w : this.height / o.h
          ) - 1;
      return r > 0 ? r : 1;
    }
    getDataTimestamps() {
      let t,
        e,
        i = this._cache.data || [];
      if (i.length) return i;
      const n = this.getMatchingVisibleMetas();
      if (this._normalized && n.length)
        return (this._cache.data = n[0].controller.getAllParsedValues(this));
      for (t = 0, e = n.length; t < e; ++t)
        i = i.concat(n[t].controller.getAllParsedValues(this));
      return (this._cache.data = this.normalize(i));
    }
    getLabelTimestamps() {
      const t = this._cache.labels || [];
      let e, i;
      if (t.length) return t;
      const n = this.getLabels();
      for (e = 0, i = n.length; e < i; ++e) t.push(br(this, n[e]));
      return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
      return Lt(t.sort(vr));
    }
  }
  function kr(t, e, i) {
    let n,
      s,
      o,
      r,
      a = 0,
      l = t.length - 1;
    i
      ? (e >= t[a].pos && e <= t[l].pos && ({ lo: a, hi: l } = Tt(t, "pos", e)),
        ({ pos: n, time: o } = t[a]),
        ({ pos: s, time: r } = t[l]))
      : (e >= t[a].time &&
          e <= t[l].time &&
          ({ lo: a, hi: l } = Tt(t, "time", e)),
        ({ time: n, pos: o } = t[a]),
        ({ time: s, pos: r } = t[l]));
    const h = s - n;
    return h ? o + ((r - o) * (e - n)) / h : o;
  }
  var Cr = Object.freeze({
    __proto__: null,
    CategoryScale: class extends Xn {
      static id = "category";
      static defaults = { ticks: { callback: qo } };
      constructor(t) {
        super(t),
          (this._startValue = void 0),
          (this._valueRange = 0),
          (this._addedLabels = []);
      }
      init(t) {
        const e = this._addedLabels;
        if (e.length) {
          const t = this.getLabels();
          for (const { index: i, label: n } of e) t[i] === n && t.splice(i, 1);
          this._addedLabels = [];
        }
        super.init(t);
      }
      parse(t, e) {
        if (F(t)) return null;
        const i = this.getLabels();
        return ((t, e) => (null === t ? null : Mt(Math.round(t), 0, e)))(
          (e =
            isFinite(e) && i[e] === t
              ? e
              : Ko(i, t, Y(e, t), this._addedLabels)),
          i.length - 1
        );
      }
      determineDataLimits() {
        const { minDefined: t, maxDefined: e } = this.getUserBounds();
        let { min: i, max: n } = this.getMinMax(!0);
        "ticks" === this.options.bounds &&
          (t || (i = 0), e || (n = this.getLabels().length - 1)),
          (this.min = i),
          (this.max = n);
      }
      buildTicks() {
        const t = this.min,
          e = this.max,
          i = this.options.offset,
          n = [];
        let s = this.getLabels();
        (s = 0 === t && e === s.length - 1 ? s : s.slice(t, e + 1)),
          (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
          (this._startValue = this.min - (i ? 0.5 : 0));
        for (let i = t; i <= e; i++) n.push({ value: i });
        return n;
      }
      getLabelForValue(t) {
        return qo.call(this, t);
      }
      configure() {
        super.configure(),
          this.isHorizontal() || (this._reversePixels = !this._reversePixels);
      }
      getPixelForValue(t) {
        return (
          "number" != typeof t && (t = this.parse(t)),
          null === t
            ? NaN
            : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        );
      }
      getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1
          ? null
          : this.getPixelForValue(e[t].value);
      }
      getValueForPixel(t) {
        return Math.round(
          this._startValue + this.getDecimalForPixel(t) * this._valueRange
        );
      }
      getBasePixel() {
        return this.bottom;
      }
    },
    LinearScale: Qo,
    LogarithmicScale: or,
    RadialLinearScale: pr,
    TimeScale: wr,
    TimeSeriesScale: class extends wr {
      static id = "timeseries";
      static defaults = wr.defaults;
      constructor(t) {
        super(t),
          (this._table = []),
          (this._minPos = void 0),
          (this._tableRange = void 0);
      }
      initOffsets() {
        const t = this._getTimestampsForTable(),
          e = (this._table = this.buildLookupTable(t));
        (this._minPos = kr(e, this.min)),
          (this._tableRange = kr(e, this.max) - this._minPos),
          super.initOffsets(t);
      }
      buildLookupTable(t) {
        const { min: e, max: i } = this,
          n = [],
          s = [];
        let o, r, a, l, h;
        for (o = 0, r = t.length; o < r; ++o)
          (l = t[o]), l >= e && l <= i && n.push(l);
        if (n.length < 2)
          return [
            { time: e, pos: 0 },
            { time: i, pos: 1 },
          ];
        for (o = 0, r = n.length; o < r; ++o)
          (h = n[o + 1]),
            (a = n[o - 1]),
            (l = n[o]),
            Math.round((h + a) / 2) !== l &&
              s.push({ time: l, pos: o / (r - 1) });
        return s;
      }
      _generate() {
        const t = this.min,
          e = this.max;
        let i = super.getDataTimestamps();
        return (
          (i.includes(t) && i.length) || i.splice(0, 0, t),
          (i.includes(e) && 1 !== i.length) || i.push(e),
          i.sort((t, e) => t - e)
        );
      }
      _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const e = this.getDataTimestamps(),
          i = this.getLabelTimestamps();
        return (
          (t =
            e.length && i.length
              ? this.normalize(e.concat(i))
              : e.length
              ? e
              : i),
          (t = this._cache.all = t),
          t
        );
      }
      getDecimalForValue(t) {
        return (kr(this._table, t) - this._minPos) / this._tableRange;
      }
      getValueForPixel(t) {
        const e = this._offsets,
          i = this.getDecimalForPixel(t) / e.factor - e.end;
        return kr(this._table, i * this._tableRange + this._minPos, !0);
      }
    },
  });
  const Sr = [Ji, qs, Go, Cr];
  var Mr;
  As.register(...Sr),
    (t.ChartEventType = void 0),
    ((Mr = t.ChartEventType || (t.ChartEventType = {})).LegendItemClick =
      "legendItemClick"),
    (Mr.LegendItemSelect = "legendItemSelect"),
    (Mr.LegendItemUnselect = "legendItemUnselect"),
    (Mr.SegmentItemClick = "SegmentItemClick"),
    (Mr.ThemeChange = "themeChange"),
    (Mr.WordClick = "wordClick"),
    (Mr.Wheel = "wheel");
  class Ar extends Event {
    constructor(t, e, i) {
      super(t, i || {}), (this.context = e);
    }
    getData() {
      var t;
      return null === (t = this.context) || void 0 === t ? void 0 : t.data;
    }
  }
  const Dr = "#c9c9c9";
  var Tr, Or, Pr, Er, Lr;
  (t.ChartType = void 0),
    ((Tr = t.ChartType || (t.ChartType = {})).Area = "area"),
    (Tr.Bar = "bar"),
    (Tr.Column = "column"),
    (Tr.Line = "line"),
    (Tr.Pie = "pie"),
    (Tr.Donut = "donut"),
    (Tr.Range = "range"),
    (Tr.WordCloud = "wordCloud"),
    (Tr.Gauge = "gauge"),
    (t.ColorMode = void 0),
    ((Or = t.ColorMode || (t.ColorMode = {})).Repeat = "repeat"),
    (Or.Random = "random"),
    (Or.Lighten = "lighten"),
    (Or.Darken = "darken"),
    (t.Position = void 0),
    ((Pr = t.Position || (t.Position = {})).Left = "left"),
    (Pr.Top = "top"),
    (Pr.Right = "right"),
    (Pr.Bottom = "bottom"),
    (Pr.Center = "center"),
    (t.KeyboardCode = void 0),
    ((Er = t.KeyboardCode || (t.KeyboardCode = {})).ArrowDown = "ArrowDown"),
    (Er.ArrowLeft = "ArrowLeft"),
    (Er.ArrowRight = "ArrowRight"),
    (Er.ArrowUp = "ArrowUp"),
    (Er.Enter = "Enter"),
    (t.FontKeys = void 0),
    ((Lr = t.FontKeys || (t.FontKeys = {})).Size = "size"),
    (Lr.Family = "family"),
    (Lr.Style = "style"),
    (Lr.Weight = "weight"),
    (Lr.Color = "color"),
    (Lr.LineHeight = "lineHeight");
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  function Rr(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var Ir = { exports: {} };
  /**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   */ !(function (t, e) {
    t.exports = (function () {
      for (
        var t = function (t, e, i) {
            return (
              void 0 === e && (e = 0),
              void 0 === i && (i = 1),
              t < e ? e : t > i ? i : t
            );
          },
          e = t,
          i = function (t) {
            (t._clipped = !1), (t._unclipped = t.slice(0));
            for (var i = 0; i <= 3; i++)
              i < 3
                ? ((t[i] < 0 || t[i] > 255) && (t._clipped = !0),
                  (t[i] = e(t[i], 0, 255)))
                : 3 === i && (t[i] = e(t[i], 0, 1));
            return t;
          },
          n = {},
          s = 0,
          o = [
            "Boolean",
            "Number",
            "String",
            "Function",
            "Array",
            "Date",
            "RegExp",
            "Undefined",
            "Null",
          ];
        s < o.length;
        s += 1
      ) {
        var r = o[s];
        n["[object " + r + "]"] = r.toLowerCase();
      }
      var a = function (t) {
          return n[Object.prototype.toString.call(t)] || "object";
        },
        l = a,
        h = function (t, e) {
          return (
            void 0 === e && (e = null),
            t.length >= 3
              ? Array.prototype.slice.call(t)
              : "object" == l(t[0]) && e
              ? e
                  .split("")
                  .filter(function (e) {
                    return void 0 !== t[0][e];
                  })
                  .map(function (e) {
                    return t[0][e];
                  })
              : t[0]
          );
        },
        c = a,
        d = function (t) {
          if (t.length < 2) return null;
          var e = t.length - 1;
          return "string" == c(t[e]) ? t[e].toLowerCase() : null;
        },
        u = Math.PI,
        f = {
          clip_rgb: i,
          limit: t,
          type: a,
          unpack: h,
          last: d,
          PI: u,
          TWOPI: 2 * u,
          PITHIRD: u / 3,
          DEG2RAD: u / 180,
          RAD2DEG: 180 / u,
        },
        p = { format: {}, autodetect: [] },
        g = f.last,
        m = f.clip_rgb,
        v = f.type,
        b = p,
        y = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = this;
          if (
            "object" === v(t[0]) &&
            t[0].constructor &&
            t[0].constructor === this.constructor
          )
            return t[0];
          var n = g(t),
            s = !1;
          if (!n) {
            (s = !0),
              b.sorted ||
                ((b.autodetect = b.autodetect.sort(function (t, e) {
                  return e.p - t.p;
                })),
                (b.sorted = !0));
            for (var o = 0, r = b.autodetect; o < r.length; o += 1) {
              var a = r[o];
              if ((n = a.test.apply(a, t))) break;
            }
          }
          if (!b.format[n]) throw new Error("unknown format: " + t);
          var l = b.format[n].apply(null, s ? t : t.slice(0, -1));
          (i._rgb = m(l)), 3 === i._rgb.length && i._rgb.push(1);
        };
      y.prototype.toString = function () {
        return "function" == v(this.hex)
          ? this.hex()
          : "[" + this._rgb.join(",") + "]";
      };
      var x = y,
        _ = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            _.Color,
            [null].concat(t)
          ))();
        };
      (_.Color = x), (_.version = "2.4.2");
      var w = _,
        k = f.unpack,
        C = Math.max,
        S = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = k(t, "rgb"),
            n = i[0],
            s = i[1],
            o = i[2],
            r = 1 - C((n /= 255), C((s /= 255), (o /= 255))),
            a = r < 1 ? 1 / (1 - r) : 0;
          return [(1 - n - r) * a, (1 - s - r) * a, (1 - o - r) * a, r];
        },
        M = S,
        A = f.unpack,
        D = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = (t = A(t, "cmyk"))[0],
            n = t[1],
            s = t[2],
            o = t[3],
            r = t.length > 4 ? t[4] : 1;
          return 1 === o
            ? [0, 0, 0, r]
            : [
                i >= 1 ? 0 : 255 * (1 - i) * (1 - o),
                n >= 1 ? 0 : 255 * (1 - n) * (1 - o),
                s >= 1 ? 0 : 255 * (1 - s) * (1 - o),
                r,
              ];
        },
        T = D,
        O = w,
        P = x,
        E = p,
        L = f.unpack,
        R = f.type,
        I = M;
      (P.prototype.cmyk = function () {
        return I(this._rgb);
      }),
        (O.cmyk = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            P,
            [null].concat(t, ["cmyk"])
          ))();
        }),
        (E.format.cmyk = T),
        E.autodetect.push({
          p: 2,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (((t = L(t, "cmyk")), "array" === R(t) && 4 === t.length))
              return "cmyk";
          },
        });
      var F = f.unpack,
        N = f.last,
        z = function (t) {
          return Math.round(100 * t) / 100;
        },
        $ = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = F(t, "hsla"),
            n = N(t) || "lsa";
          return (
            (i[0] = z(i[0] || 0)),
            (i[1] = z(100 * i[1]) + "%"),
            (i[2] = z(100 * i[2]) + "%"),
            "hsla" === n || (i.length > 3 && i[3] < 1)
              ? ((i[3] = i.length > 3 ? i[3] : 1), (n = "hsla"))
              : (i.length = 3),
            n + "(" + i.join(",") + ")"
          );
        },
        j = $,
        Y = f.unpack,
        W = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = (t = Y(t, "rgba"))[0],
            n = t[1],
            s = t[2];
          (i /= 255), (n /= 255), (s /= 255);
          var o,
            r,
            a = Math.min(i, n, s),
            l = Math.max(i, n, s),
            h = (l + a) / 2;
          return (
            l === a
              ? ((o = 0), (r = Number.NaN))
              : (o = h < 0.5 ? (l - a) / (l + a) : (l - a) / (2 - l - a)),
            i == l
              ? (r = (n - s) / (l - a))
              : n == l
              ? (r = 2 + (s - i) / (l - a))
              : s == l && (r = 4 + (i - n) / (l - a)),
            (r *= 60) < 0 && (r += 360),
            t.length > 3 && void 0 !== t[3] ? [r, o, h, t[3]] : [r, o, h]
          );
        },
        B = W,
        V = f.unpack,
        H = f.last,
        U = j,
        G = B,
        K = Math.round,
        q = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = V(t, "rgba"),
            n = H(t) || "rgb";
          return "hsl" == n.substr(0, 3)
            ? U(G(i), n)
            : ((i[0] = K(i[0])),
              (i[1] = K(i[1])),
              (i[2] = K(i[2])),
              ("rgba" === n || (i.length > 3 && i[3] < 1)) &&
                ((i[3] = i.length > 3 ? i[3] : 1), (n = "rgba")),
              n + "(" + i.slice(0, "rgb" === n ? 3 : 4).join(",") + ")");
        },
        X = q,
        Z = f.unpack,
        J = Math.round,
        Q = function () {
          for (var t, e = [], i = arguments.length; i--; ) e[i] = arguments[i];
          var n,
            s,
            o,
            r = (e = Z(e, "hsl"))[0],
            a = e[1],
            l = e[2];
          if (0 === a) n = s = o = 255 * l;
          else {
            var h = [0, 0, 0],
              c = [0, 0, 0],
              d = l < 0.5 ? l * (1 + a) : l + a - l * a,
              u = 2 * l - d,
              f = r / 360;
            (h[0] = f + 1 / 3), (h[1] = f), (h[2] = f - 1 / 3);
            for (var p = 0; p < 3; p++)
              h[p] < 0 && (h[p] += 1),
                h[p] > 1 && (h[p] -= 1),
                6 * h[p] < 1
                  ? (c[p] = u + 6 * (d - u) * h[p])
                  : 2 * h[p] < 1
                  ? (c[p] = d)
                  : 3 * h[p] < 2
                  ? (c[p] = u + (d - u) * (2 / 3 - h[p]) * 6)
                  : (c[p] = u);
            (n = (t = [J(255 * c[0]), J(255 * c[1]), J(255 * c[2])])[0]),
              (s = t[1]),
              (o = t[2]);
          }
          return e.length > 3 ? [n, s, o, e[3]] : [n, s, o, 1];
        },
        tt = Q,
        et = tt,
        it = p,
        nt = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        st =
          /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        ot =
          /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        rt =
          /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        at =
          /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        lt =
          /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        ht = Math.round,
        ct = function (t) {
          var e;
          if (((t = t.toLowerCase().trim()), it.format.named))
            try {
              return it.format.named(t);
            } catch (t) {}
          if ((e = t.match(nt))) {
            for (var i = e.slice(1, 4), n = 0; n < 3; n++) i[n] = +i[n];
            return (i[3] = 1), i;
          }
          if ((e = t.match(st))) {
            for (var s = e.slice(1, 5), o = 0; o < 4; o++) s[o] = +s[o];
            return s;
          }
          if ((e = t.match(ot))) {
            for (var r = e.slice(1, 4), a = 0; a < 3; a++)
              r[a] = ht(2.55 * r[a]);
            return (r[3] = 1), r;
          }
          if ((e = t.match(rt))) {
            for (var l = e.slice(1, 5), h = 0; h < 3; h++)
              l[h] = ht(2.55 * l[h]);
            return (l[3] = +l[3]), l;
          }
          if ((e = t.match(at))) {
            var c = e.slice(1, 4);
            (c[1] *= 0.01), (c[2] *= 0.01);
            var d = et(c);
            return (d[3] = 1), d;
          }
          if ((e = t.match(lt))) {
            var u = e.slice(1, 4);
            (u[1] *= 0.01), (u[2] *= 0.01);
            var f = et(u);
            return (f[3] = +e[4]), f;
          }
        };
      ct.test = function (t) {
        return (
          nt.test(t) ||
          st.test(t) ||
          ot.test(t) ||
          rt.test(t) ||
          at.test(t) ||
          lt.test(t)
        );
      };
      var dt = ct,
        ut = w,
        ft = x,
        pt = p,
        gt = f.type,
        mt = X,
        vt = dt;
      (ft.prototype.css = function (t) {
        return mt(this._rgb, t);
      }),
        (ut.css = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            ft,
            [null].concat(t, ["css"])
          ))();
        }),
        (pt.format.css = vt),
        pt.autodetect.push({
          p: 5,
          test: function (t) {
            for (var e = [], i = arguments.length - 1; i-- > 0; )
              e[i] = arguments[i + 1];
            if (!e.length && "string" === gt(t) && vt.test(t)) return "css";
          },
        });
      var bt = x,
        yt = w,
        xt = p,
        _t = f.unpack;
      (xt.format.gl = function () {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var i = _t(t, "rgba");
        return (i[0] *= 255), (i[1] *= 255), (i[2] *= 255), i;
      }),
        (yt.gl = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            bt,
            [null].concat(t, ["gl"])
          ))();
        }),
        (bt.prototype.gl = function () {
          var t = this._rgb;
          return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]];
        });
      var wt = f.unpack,
        kt = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i,
            n = wt(t, "rgb"),
            s = n[0],
            o = n[1],
            r = n[2],
            a = Math.min(s, o, r),
            l = Math.max(s, o, r),
            h = l - a,
            c = (100 * h) / 255,
            d = (a / (255 - h)) * 100;
          return (
            0 === h
              ? (i = Number.NaN)
              : (s === l && (i = (o - r) / h),
                o === l && (i = 2 + (r - s) / h),
                r === l && (i = 4 + (s - o) / h),
                (i *= 60) < 0 && (i += 360)),
            [i, c, d]
          );
        },
        Ct = kt,
        St = f.unpack,
        Mt = Math.floor,
        At = function () {
          for (var t, e, i, n, s, o, r = [], a = arguments.length; a--; )
            r[a] = arguments[a];
          var l,
            h,
            c,
            d = (r = St(r, "hcg"))[0],
            u = r[1],
            f = r[2];
          f *= 255;
          var p = 255 * u;
          if (0 === u) l = h = c = f;
          else {
            360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
            var g = Mt((d /= 60)),
              m = d - g,
              v = f * (1 - u),
              b = v + p * (1 - m),
              y = v + p * m,
              x = v + p;
            switch (g) {
              case 0:
                (l = (t = [x, y, v])[0]), (h = t[1]), (c = t[2]);
                break;
              case 1:
                (l = (e = [b, x, v])[0]), (h = e[1]), (c = e[2]);
                break;
              case 2:
                (l = (i = [v, x, y])[0]), (h = i[1]), (c = i[2]);
                break;
              case 3:
                (l = (n = [v, b, x])[0]), (h = n[1]), (c = n[2]);
                break;
              case 4:
                (l = (s = [y, v, x])[0]), (h = s[1]), (c = s[2]);
                break;
              case 5:
                (l = (o = [x, v, b])[0]), (h = o[1]), (c = o[2]);
            }
          }
          return [l, h, c, r.length > 3 ? r[3] : 1];
        },
        Dt = At,
        Tt = f.unpack,
        Ot = f.type,
        Pt = w,
        Et = x,
        Lt = p,
        Rt = Ct;
      (Et.prototype.hcg = function () {
        return Rt(this._rgb);
      }),
        (Pt.hcg = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            Et,
            [null].concat(t, ["hcg"])
          ))();
        }),
        (Lt.format.hcg = Dt),
        Lt.autodetect.push({
          p: 1,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (((t = Tt(t, "hcg")), "array" === Ot(t) && 3 === t.length))
              return "hcg";
          },
        });
      var It = f.unpack,
        Ft = f.last,
        Nt = Math.round,
        zt = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = It(t, "rgba"),
            n = i[0],
            s = i[1],
            o = i[2],
            r = i[3],
            a = Ft(t) || "auto";
          void 0 === r && (r = 1), "auto" === a && (a = r < 1 ? "rgba" : "rgb");
          var l =
            "000000" +
            (((n = Nt(n)) << 16) | ((s = Nt(s)) << 8) | (o = Nt(o))).toString(
              16
            );
          l = l.substr(l.length - 6);
          var h = "0" + Nt(255 * r).toString(16);
          switch (((h = h.substr(h.length - 2)), a.toLowerCase())) {
            case "rgba":
              return "#" + l + h;
            case "argb":
              return "#" + h + l;
            default:
              return "#" + l;
          }
        },
        $t = zt,
        jt = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        Yt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        Wt = function (t) {
          if (t.match(jt)) {
            (4 !== t.length && 7 !== t.length) || (t = t.substr(1)),
              3 === t.length &&
                (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
            var e = parseInt(t, 16);
            return [e >> 16, (e >> 8) & 255, 255 & e, 1];
          }
          if (t.match(Yt)) {
            (5 !== t.length && 9 !== t.length) || (t = t.substr(1)),
              4 === t.length &&
                (t =
                  (t = t.split(""))[0] +
                  t[0] +
                  t[1] +
                  t[1] +
                  t[2] +
                  t[2] +
                  t[3] +
                  t[3]);
            var i = parseInt(t, 16);
            return [
              (i >> 24) & 255,
              (i >> 16) & 255,
              (i >> 8) & 255,
              Math.round(((255 & i) / 255) * 100) / 100,
            ];
          }
          throw new Error("unknown hex color: " + t);
        },
        Bt = Wt,
        Vt = w,
        Ht = x,
        Ut = f.type,
        Gt = p,
        Kt = $t;
      (Ht.prototype.hex = function (t) {
        return Kt(this._rgb, t);
      }),
        (Vt.hex = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            Ht,
            [null].concat(t, ["hex"])
          ))();
        }),
        (Gt.format.hex = Bt),
        Gt.autodetect.push({
          p: 4,
          test: function (t) {
            for (var e = [], i = arguments.length - 1; i-- > 0; )
              e[i] = arguments[i + 1];
            if (
              !e.length &&
              "string" === Ut(t) &&
              [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0
            )
              return "hex";
          },
        });
      var qt = f.unpack,
        Xt = f.TWOPI,
        Zt = Math.min,
        Jt = Math.sqrt,
        Qt = Math.acos,
        te = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i,
            n = qt(t, "rgb"),
            s = n[0],
            o = n[1],
            r = n[2],
            a = Zt((s /= 255), (o /= 255), (r /= 255)),
            l = (s + o + r) / 3,
            h = l > 0 ? 1 - a / l : 0;
          return (
            0 === h
              ? (i = NaN)
              : ((i = (s - o + (s - r)) / 2),
                (i /= Jt((s - o) * (s - o) + (s - r) * (o - r))),
                (i = Qt(i)),
                r > o && (i = Xt - i),
                (i /= Xt)),
            [360 * i, h, l]
          );
        },
        ee = te,
        ie = f.unpack,
        ne = f.limit,
        se = f.TWOPI,
        oe = f.PITHIRD,
        re = Math.cos,
        ae = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i,
            n,
            s,
            o = (t = ie(t, "hsi"))[0],
            r = t[1],
            a = t[2];
          return (
            isNaN(o) && (o = 0),
            isNaN(r) && (r = 0),
            o > 360 && (o -= 360),
            o < 0 && (o += 360),
            (o /= 360) < 1 / 3
              ? (n =
                  1 -
                  ((s = (1 - r) / 3) +
                    (i = (1 + (r * re(se * o)) / re(oe - se * o)) / 3)))
              : o < 2 / 3
              ? (s =
                  1 -
                  ((i = (1 - r) / 3) +
                    (n =
                      (1 + (r * re(se * (o -= 1 / 3))) / re(oe - se * o)) / 3)))
              : (i =
                  1 -
                  ((n = (1 - r) / 3) +
                    (s =
                      (1 + (r * re(se * (o -= 2 / 3))) / re(oe - se * o)) /
                      3))),
            [
              255 * (i = ne(a * i * 3)),
              255 * (n = ne(a * n * 3)),
              255 * (s = ne(a * s * 3)),
              t.length > 3 ? t[3] : 1,
            ]
          );
        },
        le = ae,
        he = f.unpack,
        ce = f.type,
        de = w,
        ue = x,
        fe = p,
        pe = ee;
      (ue.prototype.hsi = function () {
        return pe(this._rgb);
      }),
        (de.hsi = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            ue,
            [null].concat(t, ["hsi"])
          ))();
        }),
        (fe.format.hsi = le),
        fe.autodetect.push({
          p: 2,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (((t = he(t, "hsi")), "array" === ce(t) && 3 === t.length))
              return "hsi";
          },
        });
      var ge = f.unpack,
        me = f.type,
        ve = w,
        be = x,
        ye = p,
        xe = B;
      (be.prototype.hsl = function () {
        return xe(this._rgb);
      }),
        (ve.hsl = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            be,
            [null].concat(t, ["hsl"])
          ))();
        }),
        (ye.format.hsl = tt),
        ye.autodetect.push({
          p: 2,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (((t = ge(t, "hsl")), "array" === me(t) && 3 === t.length))
              return "hsl";
          },
        });
      var _e = f.unpack,
        we = Math.min,
        ke = Math.max,
        Ce = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i,
            n,
            s,
            o = (t = _e(t, "rgb"))[0],
            r = t[1],
            a = t[2],
            l = we(o, r, a),
            h = ke(o, r, a),
            c = h - l;
          return (
            (s = h / 255),
            0 === h
              ? ((i = Number.NaN), (n = 0))
              : ((n = c / h),
                o === h && (i = (r - a) / c),
                r === h && (i = 2 + (a - o) / c),
                a === h && (i = 4 + (o - r) / c),
                (i *= 60) < 0 && (i += 360)),
            [i, n, s]
          );
        },
        Se = Ce,
        Me = f.unpack,
        Ae = Math.floor,
        De = function () {
          for (var t, e, i, n, s, o, r = [], a = arguments.length; a--; )
            r[a] = arguments[a];
          var l,
            h,
            c,
            d = (r = Me(r, "hsv"))[0],
            u = r[1],
            f = r[2];
          if (((f *= 255), 0 === u)) l = h = c = f;
          else {
            360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
            var p = Ae((d /= 60)),
              g = d - p,
              m = f * (1 - u),
              v = f * (1 - u * g),
              b = f * (1 - u * (1 - g));
            switch (p) {
              case 0:
                (l = (t = [f, b, m])[0]), (h = t[1]), (c = t[2]);
                break;
              case 1:
                (l = (e = [v, f, m])[0]), (h = e[1]), (c = e[2]);
                break;
              case 2:
                (l = (i = [m, f, b])[0]), (h = i[1]), (c = i[2]);
                break;
              case 3:
                (l = (n = [m, v, f])[0]), (h = n[1]), (c = n[2]);
                break;
              case 4:
                (l = (s = [b, m, f])[0]), (h = s[1]), (c = s[2]);
                break;
              case 5:
                (l = (o = [f, m, v])[0]), (h = o[1]), (c = o[2]);
            }
          }
          return [l, h, c, r.length > 3 ? r[3] : 1];
        },
        Te = De,
        Oe = f.unpack,
        Pe = f.type,
        Ee = w,
        Le = x,
        Re = p,
        Ie = Se;
      (Le.prototype.hsv = function () {
        return Ie(this._rgb);
      }),
        (Ee.hsv = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            Le,
            [null].concat(t, ["hsv"])
          ))();
        }),
        (Re.format.hsv = Te),
        Re.autodetect.push({
          p: 2,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (((t = Oe(t, "hsv")), "array" === Pe(t) && 3 === t.length))
              return "hsv";
          },
        });
      var Fe = {
          Kn: 18,
          Xn: 0.95047,
          Yn: 1,
          Zn: 1.08883,
          t0: 0.137931034,
          t1: 0.206896552,
          t2: 0.12841855,
          t3: 0.008856452,
        },
        Ne = Fe,
        ze = f.unpack,
        $e = Math.pow,
        je = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = ze(t, "rgb"),
            n = i[0],
            s = i[1],
            o = i[2],
            r = Be(n, s, o),
            a = r[0],
            l = r[1],
            h = 116 * l - 16;
          return [h < 0 ? 0 : h, 500 * (a - l), 200 * (l - r[2])];
        },
        Ye = function (t) {
          return (t /= 255) <= 0.04045
            ? t / 12.92
            : $e((t + 0.055) / 1.055, 2.4);
        },
        We = function (t) {
          return t > Ne.t3 ? $e(t, 1 / 3) : t / Ne.t2 + Ne.t0;
        },
        Be = function (t, e, i) {
          return (
            (t = Ye(t)),
            (e = Ye(e)),
            (i = Ye(i)),
            [
              We((0.4124564 * t + 0.3575761 * e + 0.1804375 * i) / Ne.Xn),
              We((0.2126729 * t + 0.7151522 * e + 0.072175 * i) / Ne.Yn),
              We((0.0193339 * t + 0.119192 * e + 0.9503041 * i) / Ne.Zn),
            ]
          );
        },
        Ve = je,
        He = Fe,
        Ue = f.unpack,
        Ge = Math.pow,
        Ke = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i,
            n,
            s,
            o = (t = Ue(t, "lab"))[0],
            r = t[1],
            a = t[2];
          return (
            (n = (o + 16) / 116),
            (i = isNaN(r) ? n : n + r / 500),
            (s = isNaN(a) ? n : n - a / 200),
            (n = He.Yn * Xe(n)),
            (i = He.Xn * Xe(i)),
            (s = He.Zn * Xe(s)),
            [
              qe(3.2404542 * i - 1.5371385 * n - 0.4985314 * s),
              qe(-0.969266 * i + 1.8760108 * n + 0.041556 * s),
              qe(0.0556434 * i - 0.2040259 * n + 1.0572252 * s),
              t.length > 3 ? t[3] : 1,
            ]
          );
        },
        qe = function (t) {
          return (
            255 * (t <= 0.00304 ? 12.92 * t : 1.055 * Ge(t, 1 / 2.4) - 0.055)
          );
        },
        Xe = function (t) {
          return t > He.t1 ? t * t * t : He.t2 * (t - He.t0);
        },
        Ze = Ke,
        Je = f.unpack,
        Qe = f.type,
        ti = w,
        ei = x,
        ii = p,
        ni = Ve;
      (ei.prototype.lab = function () {
        return ni(this._rgb);
      }),
        (ti.lab = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            ei,
            [null].concat(t, ["lab"])
          ))();
        }),
        (ii.format.lab = Ze),
        ii.autodetect.push({
          p: 2,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (((t = Je(t, "lab")), "array" === Qe(t) && 3 === t.length))
              return "lab";
          },
        });
      var si = f.unpack,
        oi = f.RAD2DEG,
        ri = Math.sqrt,
        ai = Math.atan2,
        li = Math.round,
        hi = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = si(t, "lab"),
            n = i[0],
            s = i[1],
            o = i[2],
            r = ri(s * s + o * o),
            a = (ai(o, s) * oi + 360) % 360;
          return 0 === li(1e4 * r) && (a = Number.NaN), [n, r, a];
        },
        ci = hi,
        di = f.unpack,
        ui = Ve,
        fi = ci,
        pi = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = di(t, "rgb"),
            n = i[0],
            s = i[1],
            o = i[2],
            r = ui(n, s, o),
            a = r[0],
            l = r[1],
            h = r[2];
          return fi(a, l, h);
        },
        gi = pi,
        mi = f.unpack,
        vi = f.DEG2RAD,
        bi = Math.sin,
        yi = Math.cos,
        xi = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = mi(t, "lch"),
            n = i[0],
            s = i[1],
            o = i[2];
          return isNaN(o) && (o = 0), [n, yi((o *= vi)) * s, bi(o) * s];
        },
        _i = xi,
        wi = f.unpack,
        ki = _i,
        Ci = Ze,
        Si = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = (t = wi(t, "lch"))[0],
            n = t[1],
            s = t[2],
            o = ki(i, n, s),
            r = o[0],
            a = o[1],
            l = o[2],
            h = Ci(r, a, l);
          return [h[0], h[1], h[2], t.length > 3 ? t[3] : 1];
        },
        Mi = Si,
        Ai = f.unpack,
        Di = Mi,
        Ti = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = Ai(t, "hcl").reverse();
          return Di.apply(void 0, i);
        },
        Oi = Ti,
        Pi = f.unpack,
        Ei = f.type,
        Li = w,
        Ri = x,
        Ii = p,
        Fi = gi;
      (Ri.prototype.lch = function () {
        return Fi(this._rgb);
      }),
        (Ri.prototype.hcl = function () {
          return Fi(this._rgb).reverse();
        }),
        (Li.lch = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            Ri,
            [null].concat(t, ["lch"])
          ))();
        }),
        (Li.hcl = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            Ri,
            [null].concat(t, ["hcl"])
          ))();
        }),
        (Ii.format.lch = Mi),
        (Ii.format.hcl = Oi),
        ["lch", "hcl"].forEach(function (t) {
          return Ii.autodetect.push({
            p: 2,
            test: function () {
              for (var e = [], i = arguments.length; i--; ) e[i] = arguments[i];
              if (((e = Pi(e, t)), "array" === Ei(e) && 3 === e.length))
                return t;
            },
          });
        });
      var Ni = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflower: "#6495ed",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          laserlemon: "#ffff54",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrod: "#fafad2",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          maroon2: "#7f0000",
          maroon3: "#b03060",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          purple2: "#7f007f",
          purple3: "#a020f0",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        },
        zi = x,
        $i = p,
        ji = f.type,
        Yi = Ni,
        Wi = Bt,
        Bi = $t;
      (zi.prototype.name = function () {
        for (
          var t = Bi(this._rgb, "rgb"), e = 0, i = Object.keys(Yi);
          e < i.length;
          e += 1
        ) {
          var n = i[e];
          if (Yi[n] === t) return n.toLowerCase();
        }
        return t;
      }),
        ($i.format.named = function (t) {
          if (((t = t.toLowerCase()), Yi[t])) return Wi(Yi[t]);
          throw new Error("unknown color name: " + t);
        }),
        $i.autodetect.push({
          p: 5,
          test: function (t) {
            for (var e = [], i = arguments.length - 1; i-- > 0; )
              e[i] = arguments[i + 1];
            if (!e.length && "string" === ji(t) && Yi[t.toLowerCase()])
              return "named";
          },
        });
      var Vi = f.unpack,
        Hi = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = Vi(t, "rgb");
          return (i[0] << 16) + (i[1] << 8) + i[2];
        },
        Ui = Hi,
        Gi = f.type,
        Ki = function (t) {
          if ("number" == Gi(t) && t >= 0 && t <= 16777215)
            return [t >> 16, (t >> 8) & 255, 255 & t, 1];
          throw new Error("unknown num color: " + t);
        },
        qi = Ki,
        Xi = w,
        Zi = x,
        Ji = p,
        Qi = f.type,
        tn = Ui;
      (Zi.prototype.num = function () {
        return tn(this._rgb);
      }),
        (Xi.num = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            Zi,
            [null].concat(t, ["num"])
          ))();
        }),
        (Ji.format.num = qi),
        Ji.autodetect.push({
          p: 5,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (
              1 === t.length &&
              "number" === Qi(t[0]) &&
              t[0] >= 0 &&
              t[0] <= 16777215
            )
              return "num";
          },
        });
      var en = w,
        nn = x,
        sn = p,
        on = f.unpack,
        rn = f.type,
        an = Math.round;
      (nn.prototype.rgb = function (t) {
        return (
          void 0 === t && (t = !0),
          !1 === t ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(an)
        );
      }),
        (nn.prototype.rgba = function (t) {
          return (
            void 0 === t && (t = !0),
            this._rgb.slice(0, 4).map(function (e, i) {
              return i < 3 ? (!1 === t ? e : an(e)) : e;
            })
          );
        }),
        (en.rgb = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            nn,
            [null].concat(t, ["rgb"])
          ))();
        }),
        (sn.format.rgb = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = on(t, "rgba");
          return void 0 === i[3] && (i[3] = 1), i;
        }),
        sn.autodetect.push({
          p: 3,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (
              ((t = on(t, "rgba")),
              "array" === rn(t) &&
                (3 === t.length ||
                  (4 === t.length &&
                    "number" == rn(t[3]) &&
                    t[3] >= 0 &&
                    t[3] <= 1)))
            )
              return "rgb";
          },
        });
      var ln = Math.log,
        hn = function (t) {
          var e,
            i,
            n,
            s = t / 100;
          return (
            s < 66
              ? ((e = 255),
                (i =
                  s < 6
                    ? 0
                    : -155.25485562709179 -
                      0.44596950469579133 * (i = s - 2) +
                      104.49216199393888 * ln(i)),
                (n =
                  s < 20
                    ? 0
                    : 0.8274096064007395 * (n = s - 10) -
                      254.76935184120902 +
                      115.67994401066147 * ln(n)))
              : ((e =
                  351.97690566805693 +
                  0.114206453784165 * (e = s - 55) -
                  40.25366309332127 * ln(e)),
                (i =
                  325.4494125711974 +
                  0.07943456536662342 * (i = s - 50) -
                  28.0852963507957 * ln(i)),
                (n = 255)),
            [e, i, n, 1]
          );
        },
        cn = hn,
        dn = cn,
        un = f.unpack,
        fn = Math.round,
        pn = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          for (
            var i,
              n = un(t, "rgb"),
              s = n[0],
              o = n[2],
              r = 1e3,
              a = 4e4,
              l = 0.4;
            a - r > l;

          ) {
            var h = dn((i = 0.5 * (a + r)));
            h[2] / h[0] >= o / s ? (a = i) : (r = i);
          }
          return fn(i);
        },
        gn = w,
        mn = x,
        vn = p,
        bn = pn;
      (mn.prototype.temp =
        mn.prototype.kelvin =
        mn.prototype.temperature =
          function () {
            return bn(this._rgb);
          }),
        (gn.temp =
          gn.kelvin =
          gn.temperature =
            function () {
              for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
              return new (Function.prototype.bind.apply(
                mn,
                [null].concat(t, ["temp"])
              ))();
            }),
        (vn.format.temp = vn.format.kelvin = vn.format.temperature = cn);
      var yn = f.unpack,
        xn = Math.cbrt,
        _n = Math.pow,
        wn = Math.sign,
        kn = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = yn(t, "rgb"),
            n = i[0],
            s = i[1],
            o = i[2],
            r = [Sn(n / 255), Sn(s / 255), Sn(o / 255)],
            a = r[0],
            l = r[1],
            h = r[2],
            c = xn(0.4122214708 * a + 0.5363325363 * l + 0.0514459929 * h),
            d = xn(0.2119034982 * a + 0.6806995451 * l + 0.1073969566 * h),
            u = xn(0.0883024619 * a + 0.2817188376 * l + 0.6299787005 * h);
          return [
            0.2104542553 * c + 0.793617785 * d - 0.0040720468 * u,
            1.9779984951 * c - 2.428592205 * d + 0.4505937099 * u,
            0.0259040371 * c + 0.7827717662 * d - 0.808675766 * u,
          ];
        },
        Cn = kn;
      function Sn(t) {
        var e = Math.abs(t);
        return e < 0.04045
          ? t / 12.92
          : (wn(t) || 1) * _n((e + 0.055) / 1.055, 2.4);
      }
      var Mn = f.unpack,
        An = Math.pow,
        Dn = Math.sign,
        Tn = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = (t = Mn(t, "lab"))[0],
            n = t[1],
            s = t[2],
            o = An(i + 0.3963377774 * n + 0.2158037573 * s, 3),
            r = An(i - 0.1055613458 * n - 0.0638541728 * s, 3),
            a = An(i - 0.0894841775 * n - 1.291485548 * s, 3);
          return [
            255 * Pn(4.0767416621 * o - 3.3077115913 * r + 0.2309699292 * a),
            255 * Pn(-1.2684380046 * o + 2.6097574011 * r - 0.3413193965 * a),
            255 * Pn(-0.0041960863 * o - 0.7034186147 * r + 1.707614701 * a),
            t.length > 3 ? t[3] : 1,
          ];
        },
        On = Tn;
      function Pn(t) {
        var e = Math.abs(t);
        return e > 0.0031308
          ? (Dn(t) || 1) * (1.055 * An(e, 1 / 2.4) - 0.055)
          : 12.92 * t;
      }
      var En = f.unpack,
        Ln = f.type,
        Rn = w,
        In = x,
        Fn = p,
        Nn = Cn;
      (In.prototype.oklab = function () {
        return Nn(this._rgb);
      }),
        (Rn.oklab = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            In,
            [null].concat(t, ["oklab"])
          ))();
        }),
        (Fn.format.oklab = On),
        Fn.autodetect.push({
          p: 3,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (((t = En(t, "oklab")), "array" === Ln(t) && 3 === t.length))
              return "oklab";
          },
        });
      var zn = f.unpack,
        $n = Cn,
        jn = ci,
        Yn = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = zn(t, "rgb"),
            n = i[0],
            s = i[1],
            o = i[2],
            r = $n(n, s, o),
            a = r[0],
            l = r[1],
            h = r[2];
          return jn(a, l, h);
        },
        Wn = Yn,
        Bn = f.unpack,
        Vn = _i,
        Hn = On,
        Un = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          var i = (t = Bn(t, "lch"))[0],
            n = t[1],
            s = t[2],
            o = Vn(i, n, s),
            r = o[0],
            a = o[1],
            l = o[2],
            h = Hn(r, a, l);
          return [h[0], h[1], h[2], t.length > 3 ? t[3] : 1];
        },
        Gn = Un,
        Kn = f.unpack,
        qn = f.type,
        Xn = w,
        Zn = x,
        Jn = p,
        Qn = Wn;
      (Zn.prototype.oklch = function () {
        return Qn(this._rgb);
      }),
        (Xn.oklch = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return new (Function.prototype.bind.apply(
            Zn,
            [null].concat(t, ["oklch"])
          ))();
        }),
        (Jn.format.oklch = Gn),
        Jn.autodetect.push({
          p: 3,
          test: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            if (((t = Kn(t, "oklch")), "array" === qn(t) && 3 === t.length))
              return "oklch";
          },
        });
      var ts = x,
        es = f.type;
      (ts.prototype.alpha = function (t, e) {
        return (
          void 0 === e && (e = !1),
          void 0 !== t && "number" === es(t)
            ? e
              ? ((this._rgb[3] = t), this)
              : new ts([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb")
            : this._rgb[3]
        );
      }),
        (x.prototype.clipped = function () {
          return this._rgb._clipped || !1;
        });
      var is = x,
        ns = Fe;
      (is.prototype.darken = function (t) {
        void 0 === t && (t = 1);
        var e = this,
          i = e.lab();
        return (i[0] -= ns.Kn * t), new is(i, "lab").alpha(e.alpha(), !0);
      }),
        (is.prototype.brighten = function (t) {
          return void 0 === t && (t = 1), this.darken(-t);
        }),
        (is.prototype.darker = is.prototype.darken),
        (is.prototype.brighter = is.prototype.brighten),
        (x.prototype.get = function (t) {
          var e = t.split("."),
            i = e[0],
            n = e[1],
            s = this[i]();
          if (n) {
            var o = i.indexOf(n) - ("ok" === i.substr(0, 2) ? 2 : 0);
            if (o > -1) return s[o];
            throw new Error("unknown channel " + n + " in mode " + i);
          }
          return s;
        });
      var ss = x,
        os = f.type,
        rs = Math.pow,
        as = 1e-7,
        ls = 20;
      ss.prototype.luminance = function (t) {
        if (void 0 !== t && "number" === os(t)) {
          if (0 === t) return new ss([0, 0, 0, this._rgb[3]], "rgb");
          if (1 === t) return new ss([255, 255, 255, this._rgb[3]], "rgb");
          var e = this.luminance(),
            i = "rgb",
            n = ls,
            s = function (e, o) {
              var r = e.interpolate(o, 0.5, i),
                a = r.luminance();
              return Math.abs(t - a) < as || !n--
                ? r
                : a > t
                ? s(e, r)
                : s(r, o);
            },
            o = (
              e > t
                ? s(new ss([0, 0, 0]), this)
                : s(this, new ss([255, 255, 255]))
            ).rgb();
          return new ss(o.concat([this._rgb[3]]));
        }
        return hs.apply(void 0, this._rgb.slice(0, 3));
      };
      var hs = function (t, e, i) {
          return (
            0.2126 * (t = cs(t)) + 0.7152 * (e = cs(e)) + 0.0722 * (i = cs(i))
          );
        },
        cs = function (t) {
          return (t /= 255) <= 0.03928
            ? t / 12.92
            : rs((t + 0.055) / 1.055, 2.4);
        },
        ds = {},
        us = x,
        fs = f.type,
        ps = ds,
        gs = function (t, e, i) {
          void 0 === i && (i = 0.5);
          for (var n = [], s = arguments.length - 3; s-- > 0; )
            n[s] = arguments[s + 3];
          var o = n[0] || "lrgb";
          if ((ps[o] || n.length || (o = Object.keys(ps)[0]), !ps[o]))
            throw new Error("interpolation mode " + o + " is not defined");
          return (
            "object" !== fs(t) && (t = new us(t)),
            "object" !== fs(e) && (e = new us(e)),
            ps[o](t, e, i).alpha(t.alpha() + i * (e.alpha() - t.alpha()))
          );
        },
        ms = x,
        vs = gs;
      ms.prototype.mix = ms.prototype.interpolate = function (t, e) {
        void 0 === e && (e = 0.5);
        for (var i = [], n = arguments.length - 2; n-- > 0; )
          i[n] = arguments[n + 2];
        return vs.apply(void 0, [this, t, e].concat(i));
      };
      var bs = x;
      bs.prototype.premultiply = function (t) {
        void 0 === t && (t = !1);
        var e = this._rgb,
          i = e[3];
        return t
          ? ((this._rgb = [e[0] * i, e[1] * i, e[2] * i, i]), this)
          : new bs([e[0] * i, e[1] * i, e[2] * i, i], "rgb");
      };
      var ys = x,
        xs = Fe;
      (ys.prototype.saturate = function (t) {
        void 0 === t && (t = 1);
        var e = this,
          i = e.lch();
        return (
          (i[1] += xs.Kn * t),
          i[1] < 0 && (i[1] = 0),
          new ys(i, "lch").alpha(e.alpha(), !0)
        );
      }),
        (ys.prototype.desaturate = function (t) {
          return void 0 === t && (t = 1), this.saturate(-t);
        });
      var _s = x,
        ws = f.type;
      _s.prototype.set = function (t, e, i) {
        void 0 === i && (i = !1);
        var n = t.split("."),
          s = n[0],
          o = n[1],
          r = this[s]();
        if (o) {
          var a = s.indexOf(o) - ("ok" === s.substr(0, 2) ? 2 : 0);
          if (a > -1) {
            if ("string" == ws(e))
              switch (e.charAt(0)) {
                case "+":
                case "-":
                  r[a] += +e;
                  break;
                case "*":
                  r[a] *= +e.substr(1);
                  break;
                case "/":
                  r[a] /= +e.substr(1);
                  break;
                default:
                  r[a] = +e;
              }
            else {
              if ("number" !== ws(e))
                throw new Error("unsupported value for Color.set");
              r[a] = e;
            }
            var l = new _s(r, s);
            return i ? ((this._rgb = l._rgb), this) : l;
          }
          throw new Error("unknown channel " + o + " in mode " + s);
        }
        return r;
      };
      var ks = x,
        Cs = function (t, e, i) {
          var n = t._rgb,
            s = e._rgb;
          return new ks(
            n[0] + i * (s[0] - n[0]),
            n[1] + i * (s[1] - n[1]),
            n[2] + i * (s[2] - n[2]),
            "rgb"
          );
        };
      ds.rgb = Cs;
      var Ss = x,
        Ms = Math.sqrt,
        As = Math.pow,
        Ds = function (t, e, i) {
          var n = t._rgb,
            s = n[0],
            o = n[1],
            r = n[2],
            a = e._rgb,
            l = a[0],
            h = a[1],
            c = a[2];
          return new Ss(
            Ms(As(s, 2) * (1 - i) + As(l, 2) * i),
            Ms(As(o, 2) * (1 - i) + As(h, 2) * i),
            Ms(As(r, 2) * (1 - i) + As(c, 2) * i),
            "rgb"
          );
        };
      ds.lrgb = Ds;
      var Ts = x,
        Os = function (t, e, i) {
          var n = t.lab(),
            s = e.lab();
          return new Ts(
            n[0] + i * (s[0] - n[0]),
            n[1] + i * (s[1] - n[1]),
            n[2] + i * (s[2] - n[2]),
            "lab"
          );
        };
      ds.lab = Os;
      var Ps = x,
        Es = function (t, e, i, n) {
          var s, o, r, a, l, h, c, d, u, f, p, g, m;
          return (
            "hsl" === n
              ? ((r = t.hsl()), (a = e.hsl()))
              : "hsv" === n
              ? ((r = t.hsv()), (a = e.hsv()))
              : "hcg" === n
              ? ((r = t.hcg()), (a = e.hcg()))
              : "hsi" === n
              ? ((r = t.hsi()), (a = e.hsi()))
              : "lch" === n || "hcl" === n
              ? ((n = "hcl"), (r = t.hcl()), (a = e.hcl()))
              : "oklch" === n &&
                ((r = t.oklch().reverse()), (a = e.oklch().reverse())),
            ("h" !== n.substr(0, 1) && "oklch" !== n) ||
              ((l = (s = r)[0]),
              (c = s[1]),
              (u = s[2]),
              (h = (o = a)[0]),
              (d = o[1]),
              (f = o[2])),
            isNaN(l) || isNaN(h)
              ? isNaN(l)
                ? isNaN(h)
                  ? (g = Number.NaN)
                  : ((g = h), (1 != u && 0 != u) || "hsv" == n || (p = d))
                : ((g = l), (1 != f && 0 != f) || "hsv" == n || (p = c))
              : (g =
                  l +
                  i *
                    (h > l && h - l > 180
                      ? h - (l + 360)
                      : h < l && l - h > 180
                      ? h + 360 - l
                      : h - l)),
            void 0 === p && (p = c + i * (d - c)),
            (m = u + i * (f - u)),
            new Ps("oklch" === n ? [m, p, g] : [g, p, m], n)
          );
        },
        Ls = Es,
        Rs = function (t, e, i) {
          return Ls(t, e, i, "lch");
        };
      (ds.lch = Rs), (ds.hcl = Rs);
      var Is = x,
        Fs = function (t, e, i) {
          var n = t.num(),
            s = e.num();
          return new Is(n + i * (s - n), "num");
        };
      ds.num = Fs;
      var Ns = Es,
        zs = function (t, e, i) {
          return Ns(t, e, i, "hcg");
        };
      ds.hcg = zs;
      var $s = Es,
        js = function (t, e, i) {
          return $s(t, e, i, "hsi");
        };
      ds.hsi = js;
      var Ys = Es,
        Ws = function (t, e, i) {
          return Ys(t, e, i, "hsl");
        };
      ds.hsl = Ws;
      var Bs = Es,
        Vs = function (t, e, i) {
          return Bs(t, e, i, "hsv");
        };
      ds.hsv = Vs;
      var Hs = x,
        Us = function (t, e, i) {
          var n = t.oklab(),
            s = e.oklab();
          return new Hs(
            n[0] + i * (s[0] - n[0]),
            n[1] + i * (s[1] - n[1]),
            n[2] + i * (s[2] - n[2]),
            "oklab"
          );
        };
      ds.oklab = Us;
      var Gs = Es,
        Ks = function (t, e, i) {
          return Gs(t, e, i, "oklch");
        };
      ds.oklch = Ks;
      var qs = x,
        Xs = f.clip_rgb,
        Zs = Math.pow,
        Js = Math.sqrt,
        Qs = Math.PI,
        to = Math.cos,
        eo = Math.sin,
        io = Math.atan2,
        no = function (t, e, i) {
          void 0 === e && (e = "lrgb"), void 0 === i && (i = null);
          var n = t.length;
          i ||
            (i = Array.from(new Array(n)).map(function () {
              return 1;
            }));
          var s =
            n /
            i.reduce(function (t, e) {
              return t + e;
            });
          if (
            (i.forEach(function (t, e) {
              i[e] *= s;
            }),
            (t = t.map(function (t) {
              return new qs(t);
            })),
            "lrgb" === e)
          )
            return so(t, i);
          for (
            var o = t.shift(), r = o.get(e), a = [], l = 0, h = 0, c = 0;
            c < r.length;
            c++
          )
            if (
              ((r[c] = (r[c] || 0) * i[0]),
              a.push(isNaN(r[c]) ? 0 : i[0]),
              "h" === e.charAt(c) && !isNaN(r[c]))
            ) {
              var d = (r[c] / 180) * Qs;
              (l += to(d) * i[0]), (h += eo(d) * i[0]);
            }
          var u = o.alpha() * i[0];
          t.forEach(function (t, n) {
            var s = t.get(e);
            u += t.alpha() * i[n + 1];
            for (var o = 0; o < r.length; o++)
              if (!isNaN(s[o]))
                if (((a[o] += i[n + 1]), "h" === e.charAt(o))) {
                  var c = (s[o] / 180) * Qs;
                  (l += to(c) * i[n + 1]), (h += eo(c) * i[n + 1]);
                } else r[o] += s[o] * i[n + 1];
          });
          for (var f = 0; f < r.length; f++)
            if ("h" === e.charAt(f)) {
              for (var p = (io(h / a[f], l / a[f]) / Qs) * 180; p < 0; )
                p += 360;
              for (; p >= 360; ) p -= 360;
              r[f] = p;
            } else r[f] = r[f] / a[f];
          return (u /= n), new qs(r, e).alpha(u > 0.99999 ? 1 : u, !0);
        },
        so = function (t, e) {
          for (var i = t.length, n = [0, 0, 0, 0], s = 0; s < t.length; s++) {
            var o = t[s],
              r = e[s] / i,
              a = o._rgb;
            (n[0] += Zs(a[0], 2) * r),
              (n[1] += Zs(a[1], 2) * r),
              (n[2] += Zs(a[2], 2) * r),
              (n[3] += a[3] * r);
          }
          return (
            (n[0] = Js(n[0])),
            (n[1] = Js(n[1])),
            (n[2] = Js(n[2])),
            n[3] > 0.9999999 && (n[3] = 1),
            new qs(Xs(n))
          );
        },
        oo = w,
        ro = f.type,
        ao = Math.pow,
        lo = function (t) {
          var e = "rgb",
            i = oo("#ccc"),
            n = 0,
            s = [0, 1],
            o = [],
            r = [0, 0],
            a = !1,
            l = [],
            h = !1,
            c = 0,
            d = 1,
            u = !1,
            f = {},
            p = !0,
            g = 1,
            m = function (t) {
              if (
                ((t = t || ["#fff", "#000"]) &&
                  "string" === ro(t) &&
                  oo.brewer &&
                  oo.brewer[t.toLowerCase()] &&
                  (t = oo.brewer[t.toLowerCase()]),
                "array" === ro(t))
              ) {
                1 === t.length && (t = [t[0], t[0]]), (t = t.slice(0));
                for (var e = 0; e < t.length; e++) t[e] = oo(t[e]);
                o.length = 0;
                for (var i = 0; i < t.length; i++) o.push(i / (t.length - 1));
              }
              return _(), (l = t);
            },
            v = function (t) {
              if (null != a) {
                for (var e = a.length - 1, i = 0; i < e && t >= a[i]; ) i++;
                return i - 1;
              }
              return 0;
            },
            b = function (t) {
              return t;
            },
            y = function (t) {
              return t;
            },
            x = function (t, n) {
              var s, h;
              if ((null == n && (n = !1), isNaN(t) || null === t)) return i;
              (h = n
                ? t
                : a && a.length > 2
                ? v(t) / (a.length - 2)
                : d !== c
                ? (t - c) / (d - c)
                : 1),
                (h = y(h)),
                n || (h = b(h)),
                1 !== g && (h = ao(h, g)),
                (h = r[0] + h * (1 - r[0] - r[1])),
                (h = Math.min(1, Math.max(0, h)));
              var u = Math.floor(1e4 * h);
              if (p && f[u]) s = f[u];
              else {
                if ("array" === ro(l))
                  for (var m = 0; m < o.length; m++) {
                    var x = o[m];
                    if (h <= x) {
                      s = l[m];
                      break;
                    }
                    if (h >= x && m === o.length - 1) {
                      s = l[m];
                      break;
                    }
                    if (h > x && h < o[m + 1]) {
                      (h = (h - x) / (o[m + 1] - x)),
                        (s = oo.interpolate(l[m], l[m + 1], h, e));
                      break;
                    }
                  }
                else "function" === ro(l) && (s = l(h));
                p && (f[u] = s);
              }
              return s;
            },
            _ = function () {
              return (f = {});
            };
          m(t);
          var w = function (t) {
            var e = oo(x(t));
            return h && e[h] ? e[h]() : e;
          };
          return (
            (w.classes = function (t) {
              if (null != t) {
                if ("array" === ro(t)) (a = t), (s = [t[0], t[t.length - 1]]);
                else {
                  var e = oo.analyze(s);
                  a = 0 === t ? [e.min, e.max] : oo.limits(e, "e", t);
                }
                return w;
              }
              return a;
            }),
            (w.domain = function (t) {
              if (!arguments.length) return s;
              (c = t[0]), (d = t[t.length - 1]), (o = []);
              var e = l.length;
              if (t.length === e && c !== d)
                for (var i = 0, n = Array.from(t); i < n.length; i += 1) {
                  var r = n[i];
                  o.push((r - c) / (d - c));
                }
              else {
                for (var a = 0; a < e; a++) o.push(a / (e - 1));
                if (t.length > 2) {
                  var h = t.map(function (e, i) {
                      return i / (t.length - 1);
                    }),
                    u = t.map(function (t) {
                      return (t - c) / (d - c);
                    });
                  u.every(function (t, e) {
                    return h[e] === t;
                  }) ||
                    (y = function (t) {
                      if (t <= 0 || t >= 1) return t;
                      for (var e = 0; t >= u[e + 1]; ) e++;
                      var i = (t - u[e]) / (u[e + 1] - u[e]);
                      return h[e] + i * (h[e + 1] - h[e]);
                    });
                }
              }
              return (s = [c, d]), w;
            }),
            (w.mode = function (t) {
              return arguments.length ? ((e = t), _(), w) : e;
            }),
            (w.range = function (t, e) {
              return m(t), w;
            }),
            (w.out = function (t) {
              return (h = t), w;
            }),
            (w.spread = function (t) {
              return arguments.length ? ((n = t), w) : n;
            }),
            (w.correctLightness = function (t) {
              return (
                null == t && (t = !0),
                (u = t),
                _(),
                (b = u
                  ? function (t) {
                      for (
                        var e = x(0, !0).lab()[0],
                          i = x(1, !0).lab()[0],
                          n = e > i,
                          s = x(t, !0).lab()[0],
                          o = e + (i - e) * t,
                          r = s - o,
                          a = 0,
                          l = 1,
                          h = 20;
                        Math.abs(r) > 0.01 && h-- > 0;

                      )
                        n && (r *= -1),
                          r < 0
                            ? ((a = t), (t += 0.5 * (l - t)))
                            : ((l = t), (t += 0.5 * (a - t))),
                          (s = x(t, !0).lab()[0]),
                          (r = s - o);
                      return t;
                    }
                  : function (t) {
                      return t;
                    }),
                w
              );
            }),
            (w.padding = function (t) {
              return null != t
                ? ("number" === ro(t) && (t = [t, t]), (r = t), w)
                : r;
            }),
            (w.colors = function (e, i) {
              arguments.length < 2 && (i = "hex");
              var n = [];
              if (0 === arguments.length) n = l.slice(0);
              else if (1 === e) n = [w(0.5)];
              else if (e > 1) {
                var o = s[0],
                  r = s[1] - o;
                n = ho(0, e, !1).map(function (t) {
                  return w(o + (t / (e - 1)) * r);
                });
              } else {
                t = [];
                var h = [];
                if (a && a.length > 2)
                  for (
                    var c = 1, d = a.length, u = 1 <= d;
                    u ? c < d : c > d;
                    u ? c++ : c--
                  )
                    h.push(0.5 * (a[c - 1] + a[c]));
                else h = s;
                n = h.map(function (t) {
                  return w(t);
                });
              }
              return (
                oo[i] &&
                  (n = n.map(function (t) {
                    return t[i]();
                  })),
                n
              );
            }),
            (w.cache = function (t) {
              return null != t ? ((p = t), w) : p;
            }),
            (w.gamma = function (t) {
              return null != t ? ((g = t), w) : g;
            }),
            (w.nodata = function (t) {
              return null != t ? ((i = oo(t)), w) : i;
            }),
            w
          );
        };
      function ho(t, e, i) {
        for (
          var n = [], s = t < e, o = i ? (s ? e + 1 : e - 1) : e, r = t;
          s ? r < o : r > o;
          s ? r++ : r--
        )
          n.push(r);
        return n;
      }
      var co = x,
        uo = lo,
        fo = function (t) {
          for (var e = [1, 1], i = 1; i < t; i++) {
            for (var n = [1], s = 1; s <= e.length; s++)
              n[s] = (e[s] || 0) + e[s - 1];
            e = n;
          }
          return e;
        },
        po = function (t) {
          var e, i, n, s, o, r, a;
          if (
            ((t = t.map(function (t) {
              return new co(t);
            })),
            2 === t.length)
          )
            (e = t.map(function (t) {
              return t.lab();
            })),
              (o = e[0]),
              (r = e[1]),
              (s = function (t) {
                var e = [0, 1, 2].map(function (e) {
                  return o[e] + t * (r[e] - o[e]);
                });
                return new co(e, "lab");
              });
          else if (3 === t.length)
            (i = t.map(function (t) {
              return t.lab();
            })),
              (o = i[0]),
              (r = i[1]),
              (a = i[2]),
              (s = function (t) {
                var e = [0, 1, 2].map(function (e) {
                  return (
                    (1 - t) * (1 - t) * o[e] +
                    2 * (1 - t) * t * r[e] +
                    t * t * a[e]
                  );
                });
                return new co(e, "lab");
              });
          else if (4 === t.length) {
            var l;
            (n = t.map(function (t) {
              return t.lab();
            })),
              (o = n[0]),
              (r = n[1]),
              (a = n[2]),
              (l = n[3]),
              (s = function (t) {
                var e = [0, 1, 2].map(function (e) {
                  return (
                    (1 - t) * (1 - t) * (1 - t) * o[e] +
                    3 * (1 - t) * (1 - t) * t * r[e] +
                    3 * (1 - t) * t * t * a[e] +
                    t * t * t * l[e]
                  );
                });
                return new co(e, "lab");
              });
          } else {
            if (!(t.length >= 5))
              throw new RangeError(
                "No point in running bezier with only one color."
              );
            var h, c, d;
            (h = t.map(function (t) {
              return t.lab();
            })),
              (d = t.length - 1),
              (c = fo(d)),
              (s = function (t) {
                var e = 1 - t,
                  i = [0, 1, 2].map(function (i) {
                    return h.reduce(function (n, s, o) {
                      return (
                        n + c[o] * Math.pow(e, d - o) * Math.pow(t, o) * s[i]
                      );
                    }, 0);
                  });
                return new co(i, "lab");
              });
          }
          return s;
        },
        go = function (t) {
          var e = po(t);
          return (
            (e.scale = function () {
              return uo(e);
            }),
            e
          );
        },
        mo = w,
        vo = function (t, e, i) {
          if (!vo[i]) throw new Error("unknown blend mode " + i);
          return vo[i](t, e);
        },
        bo = function (t) {
          return function (e, i) {
            var n = mo(i).rgb(),
              s = mo(e).rgb();
            return mo.rgb(t(n, s));
          };
        },
        yo = function (t) {
          return function (e, i) {
            var n = [];
            return (
              (n[0] = t(e[0], i[0])),
              (n[1] = t(e[1], i[1])),
              (n[2] = t(e[2], i[2])),
              n
            );
          };
        },
        xo = function (t) {
          return t;
        },
        _o = function (t, e) {
          return (t * e) / 255;
        },
        wo = function (t, e) {
          return t > e ? e : t;
        },
        ko = function (t, e) {
          return t > e ? t : e;
        },
        Co = function (t, e) {
          return 255 * (1 - (1 - t / 255) * (1 - e / 255));
        },
        So = function (t, e) {
          return e < 128
            ? (2 * t * e) / 255
            : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255));
        },
        Mo = function (t, e) {
          return 255 * (1 - (1 - e / 255) / (t / 255));
        },
        Ao = function (t, e) {
          return 255 === t || (t = ((e / 255) * 255) / (1 - t / 255)) > 255
            ? 255
            : t;
        };
      (vo.normal = bo(yo(xo))),
        (vo.multiply = bo(yo(_o))),
        (vo.screen = bo(yo(Co))),
        (vo.overlay = bo(yo(So))),
        (vo.darken = bo(yo(wo))),
        (vo.lighten = bo(yo(ko))),
        (vo.dodge = bo(yo(Ao))),
        (vo.burn = bo(yo(Mo)));
      for (
        var Do = vo,
          To = f.type,
          Oo = f.clip_rgb,
          Po = f.TWOPI,
          Eo = Math.pow,
          Lo = Math.sin,
          Ro = Math.cos,
          Io = w,
          Fo = function (t, e, i, n, s) {
            void 0 === t && (t = 300),
              void 0 === e && (e = -1.5),
              void 0 === i && (i = 1),
              void 0 === n && (n = 1),
              void 0 === s && (s = [0, 1]);
            var o,
              r = 0;
            "array" === To(s) ? (o = s[1] - s[0]) : ((o = 0), (s = [s, s]));
            var a = function (a) {
              var l = Po * ((t + 120) / 360 + e * a),
                h = Eo(s[0] + o * a, n),
                c = ((0 !== r ? i[0] + a * r : i) * h * (1 - h)) / 2,
                d = Ro(l),
                u = Lo(l);
              return Io(
                Oo([
                  255 * (h + c * (-0.14861 * d + 1.78277 * u)),
                  255 * (h + c * (-0.29227 * d - 0.90649 * u)),
                  255 * (h + c * (1.97294 * d)),
                  1,
                ])
              );
            };
            return (
              (a.start = function (e) {
                return null == e ? t : ((t = e), a);
              }),
              (a.rotations = function (t) {
                return null == t ? e : ((e = t), a);
              }),
              (a.gamma = function (t) {
                return null == t ? n : ((n = t), a);
              }),
              (a.hue = function (t) {
                return null == t
                  ? i
                  : ("array" === To((i = t))
                      ? 0 == (r = i[1] - i[0]) && (i = i[1])
                      : (r = 0),
                    a);
              }),
              (a.lightness = function (t) {
                return null == t
                  ? s
                  : ("array" === To(t)
                      ? ((s = t), (o = t[1] - t[0]))
                      : ((s = [t, t]), (o = 0)),
                    a);
              }),
              (a.scale = function () {
                return Io.scale(a);
              }),
              a.hue(i),
              a
            );
          },
          No = x,
          zo = "0123456789abcdef",
          $o = Math.floor,
          jo = Math.random,
          Yo = function () {
            for (var t = "#", e = 0; e < 6; e++) t += zo.charAt($o(16 * jo()));
            return new No(t, "hex");
          },
          Wo = a,
          Bo = Math.log,
          Vo = Math.pow,
          Ho = Math.floor,
          Uo = Math.abs,
          Go = function (t, e) {
            void 0 === e && (e = null);
            var i = {
              min: Number.MAX_VALUE,
              max: -1 * Number.MAX_VALUE,
              sum: 0,
              values: [],
              count: 0,
            };
            return (
              "object" === Wo(t) && (t = Object.values(t)),
              t.forEach(function (t) {
                e && "object" === Wo(t) && (t = t[e]),
                  null == t ||
                    isNaN(t) ||
                    (i.values.push(t),
                    (i.sum += t),
                    t < i.min && (i.min = t),
                    t > i.max && (i.max = t),
                    (i.count += 1));
              }),
              (i.domain = [i.min, i.max]),
              (i.limits = function (t, e) {
                return Ko(i, t, e);
              }),
              i
            );
          },
          Ko = function (t, e, i) {
            void 0 === e && (e = "equal"),
              void 0 === i && (i = 7),
              "array" == Wo(t) && (t = Go(t));
            var n = t.min,
              s = t.max,
              o = t.values.sort(function (t, e) {
                return t - e;
              });
            if (1 === i) return [n, s];
            var r = [];
            if (
              ("c" === e.substr(0, 1) && (r.push(n), r.push(s)),
              "e" === e.substr(0, 1))
            ) {
              r.push(n);
              for (var a = 1; a < i; a++) r.push(n + (a / i) * (s - n));
              r.push(s);
            } else if ("l" === e.substr(0, 1)) {
              if (n <= 0)
                throw new Error(
                  "Logarithmic scales are only possible for values > 0"
                );
              var l = Math.LOG10E * Bo(n),
                h = Math.LOG10E * Bo(s);
              r.push(n);
              for (var c = 1; c < i; c++) r.push(Vo(10, l + (c / i) * (h - l)));
              r.push(s);
            } else if ("q" === e.substr(0, 1)) {
              r.push(n);
              for (var d = 1; d < i; d++) {
                var u = ((o.length - 1) * d) / i,
                  f = Ho(u);
                if (f === u) r.push(o[f]);
                else {
                  var p = u - f;
                  r.push(o[f] * (1 - p) + o[f + 1] * p);
                }
              }
              r.push(s);
            } else if ("k" === e.substr(0, 1)) {
              var g,
                m = o.length,
                v = new Array(m),
                b = new Array(i),
                y = !0,
                x = 0,
                _ = null;
              (_ = []).push(n);
              for (var w = 1; w < i; w++) _.push(n + (w / i) * (s - n));
              for (_.push(s); y; ) {
                for (var k = 0; k < i; k++) b[k] = 0;
                for (var C = 0; C < m; C++)
                  for (
                    var S = o[C], M = Number.MAX_VALUE, A = void 0, D = 0;
                    D < i;
                    D++
                  ) {
                    var T = Uo(_[D] - S);
                    T < M && ((M = T), (A = D)), b[A]++, (v[C] = A);
                  }
                for (var O = new Array(i), P = 0; P < i; P++) O[P] = null;
                for (var E = 0; E < m; E++)
                  null === O[(g = v[E])] ? (O[g] = o[E]) : (O[g] += o[E]);
                for (var L = 0; L < i; L++) O[L] *= 1 / b[L];
                y = !1;
                for (var R = 0; R < i; R++)
                  if (O[R] !== _[R]) {
                    y = !0;
                    break;
                  }
                (_ = O), ++x > 200 && (y = !1);
              }
              for (var I = {}, F = 0; F < i; F++) I[F] = [];
              for (var N = 0; N < m; N++) I[(g = v[N])].push(o[N]);
              for (var z = [], $ = 0; $ < i; $++)
                z.push(I[$][0]), z.push(I[$][I[$].length - 1]);
              (z = z.sort(function (t, e) {
                return t - e;
              })),
                r.push(z[0]);
              for (var j = 1; j < z.length; j += 2) {
                var Y = z[j];
                isNaN(Y) || -1 !== r.indexOf(Y) || r.push(Y);
              }
            }
            return r;
          },
          qo = { analyze: Go, limits: Ko },
          Xo = x,
          Zo = function (t, e) {
            (t = new Xo(t)), (e = new Xo(e));
            var i = t.luminance(),
              n = e.luminance();
            return i > n ? (i + 0.05) / (n + 0.05) : (n + 0.05) / (i + 0.05);
          },
          Jo = x,
          Qo = Math.sqrt,
          tr = Math.pow,
          er = Math.min,
          ir = Math.max,
          nr = Math.atan2,
          sr = Math.abs,
          or = Math.cos,
          rr = Math.sin,
          ar = Math.exp,
          lr = Math.PI,
          hr = function (t, e, i, n, s) {
            void 0 === i && (i = 1),
              void 0 === n && (n = 1),
              void 0 === s && (s = 1);
            var o = function (t) {
                return (360 * t) / (2 * lr);
              },
              r = function (t) {
                return (2 * lr * t) / 360;
              };
            (t = new Jo(t)), (e = new Jo(e));
            var a = Array.from(t.lab()),
              l = a[0],
              h = a[1],
              c = a[2],
              d = Array.from(e.lab()),
              u = d[0],
              f = d[1],
              p = d[2],
              g = (l + u) / 2,
              m = (Qo(tr(h, 2) + tr(c, 2)) + Qo(tr(f, 2) + tr(p, 2))) / 2,
              v = 0.5 * (1 - Qo(tr(m, 7) / (tr(m, 7) + tr(25, 7)))),
              b = h * (1 + v),
              y = f * (1 + v),
              x = Qo(tr(b, 2) + tr(c, 2)),
              _ = Qo(tr(y, 2) + tr(p, 2)),
              w = (x + _) / 2,
              k = o(nr(c, b)),
              C = o(nr(p, y)),
              S = k >= 0 ? k : k + 360,
              M = C >= 0 ? C : C + 360,
              A = sr(S - M) > 180 ? (S + M + 360) / 2 : (S + M) / 2,
              D =
                1 -
                0.17 * or(r(A - 30)) +
                0.24 * or(r(2 * A)) +
                0.32 * or(r(3 * A + 6)) -
                0.2 * or(r(4 * A - 63)),
              T = M - S;
            (T = sr(T) <= 180 ? T : M <= S ? T + 360 : T - 360),
              (T = 2 * Qo(x * _) * rr(r(T) / 2));
            var O = u - l,
              P = _ - x,
              E = 1 + (0.015 * tr(g - 50, 2)) / Qo(20 + tr(g - 50, 2)),
              L = 1 + 0.045 * w,
              R = 1 + 0.015 * w * D,
              I = 30 * ar(-tr((A - 275) / 25, 2)),
              F = -2 * Qo(tr(w, 7) / (tr(w, 7) + tr(25, 7))) * rr(2 * r(I)),
              N = Qo(
                tr(O / (i * E), 2) +
                  tr(P / (n * L), 2) +
                  tr(T / (s * R), 2) +
                  F * (P / (n * L)) * (T / (s * R))
              );
            return ir(0, er(100, N));
          },
          cr = x,
          dr = function (t, e, i) {
            void 0 === i && (i = "lab"), (t = new cr(t)), (e = new cr(e));
            var n = t.get(i),
              s = e.get(i),
              o = 0;
            for (var r in n) {
              var a = (n[r] || 0) - (s[r] || 0);
              o += a * a;
            }
            return Math.sqrt(o);
          },
          ur = x,
          fr = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            try {
              return (
                new (Function.prototype.bind.apply(ur, [null].concat(t)))(), !0
              );
            } catch (t) {
              return !1;
            }
          },
          pr = w,
          gr = lo,
          mr = {
            cool: function () {
              return gr([pr.hsl(180, 1, 0.9), pr.hsl(250, 0.7, 0.4)]);
            },
            hot: function () {
              return gr(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
            },
          },
          vr = {
            OrRd: [
              "#fff7ec",
              "#fee8c8",
              "#fdd49e",
              "#fdbb84",
              "#fc8d59",
              "#ef6548",
              "#d7301f",
              "#b30000",
              "#7f0000",
            ],
            PuBu: [
              "#fff7fb",
              "#ece7f2",
              "#d0d1e6",
              "#a6bddb",
              "#74a9cf",
              "#3690c0",
              "#0570b0",
              "#045a8d",
              "#023858",
            ],
            BuPu: [
              "#f7fcfd",
              "#e0ecf4",
              "#bfd3e6",
              "#9ebcda",
              "#8c96c6",
              "#8c6bb1",
              "#88419d",
              "#810f7c",
              "#4d004b",
            ],
            Oranges: [
              "#fff5eb",
              "#fee6ce",
              "#fdd0a2",
              "#fdae6b",
              "#fd8d3c",
              "#f16913",
              "#d94801",
              "#a63603",
              "#7f2704",
            ],
            BuGn: [
              "#f7fcfd",
              "#e5f5f9",
              "#ccece6",
              "#99d8c9",
              "#66c2a4",
              "#41ae76",
              "#238b45",
              "#006d2c",
              "#00441b",
            ],
            YlOrBr: [
              "#ffffe5",
              "#fff7bc",
              "#fee391",
              "#fec44f",
              "#fe9929",
              "#ec7014",
              "#cc4c02",
              "#993404",
              "#662506",
            ],
            YlGn: [
              "#ffffe5",
              "#f7fcb9",
              "#d9f0a3",
              "#addd8e",
              "#78c679",
              "#41ab5d",
              "#238443",
              "#006837",
              "#004529",
            ],
            Reds: [
              "#fff5f0",
              "#fee0d2",
              "#fcbba1",
              "#fc9272",
              "#fb6a4a",
              "#ef3b2c",
              "#cb181d",
              "#a50f15",
              "#67000d",
            ],
            RdPu: [
              "#fff7f3",
              "#fde0dd",
              "#fcc5c0",
              "#fa9fb5",
              "#f768a1",
              "#dd3497",
              "#ae017e",
              "#7a0177",
              "#49006a",
            ],
            Greens: [
              "#f7fcf5",
              "#e5f5e0",
              "#c7e9c0",
              "#a1d99b",
              "#74c476",
              "#41ab5d",
              "#238b45",
              "#006d2c",
              "#00441b",
            ],
            YlGnBu: [
              "#ffffd9",
              "#edf8b1",
              "#c7e9b4",
              "#7fcdbb",
              "#41b6c4",
              "#1d91c0",
              "#225ea8",
              "#253494",
              "#081d58",
            ],
            Purples: [
              "#fcfbfd",
              "#efedf5",
              "#dadaeb",
              "#bcbddc",
              "#9e9ac8",
              "#807dba",
              "#6a51a3",
              "#54278f",
              "#3f007d",
            ],
            GnBu: [
              "#f7fcf0",
              "#e0f3db",
              "#ccebc5",
              "#a8ddb5",
              "#7bccc4",
              "#4eb3d3",
              "#2b8cbe",
              "#0868ac",
              "#084081",
            ],
            Greys: [
              "#ffffff",
              "#f0f0f0",
              "#d9d9d9",
              "#bdbdbd",
              "#969696",
              "#737373",
              "#525252",
              "#252525",
              "#000000",
            ],
            YlOrRd: [
              "#ffffcc",
              "#ffeda0",
              "#fed976",
              "#feb24c",
              "#fd8d3c",
              "#fc4e2a",
              "#e31a1c",
              "#bd0026",
              "#800026",
            ],
            PuRd: [
              "#f7f4f9",
              "#e7e1ef",
              "#d4b9da",
              "#c994c7",
              "#df65b0",
              "#e7298a",
              "#ce1256",
              "#980043",
              "#67001f",
            ],
            Blues: [
              "#f7fbff",
              "#deebf7",
              "#c6dbef",
              "#9ecae1",
              "#6baed6",
              "#4292c6",
              "#2171b5",
              "#08519c",
              "#08306b",
            ],
            PuBuGn: [
              "#fff7fb",
              "#ece2f0",
              "#d0d1e6",
              "#a6bddb",
              "#67a9cf",
              "#3690c0",
              "#02818a",
              "#016c59",
              "#014636",
            ],
            Viridis: [
              "#440154",
              "#482777",
              "#3f4a8a",
              "#31678e",
              "#26838f",
              "#1f9d8a",
              "#6cce5a",
              "#b6de2b",
              "#fee825",
            ],
            Spectral: [
              "#9e0142",
              "#d53e4f",
              "#f46d43",
              "#fdae61",
              "#fee08b",
              "#ffffbf",
              "#e6f598",
              "#abdda4",
              "#66c2a5",
              "#3288bd",
              "#5e4fa2",
            ],
            RdYlGn: [
              "#a50026",
              "#d73027",
              "#f46d43",
              "#fdae61",
              "#fee08b",
              "#ffffbf",
              "#d9ef8b",
              "#a6d96a",
              "#66bd63",
              "#1a9850",
              "#006837",
            ],
            RdBu: [
              "#67001f",
              "#b2182b",
              "#d6604d",
              "#f4a582",
              "#fddbc7",
              "#f7f7f7",
              "#d1e5f0",
              "#92c5de",
              "#4393c3",
              "#2166ac",
              "#053061",
            ],
            PiYG: [
              "#8e0152",
              "#c51b7d",
              "#de77ae",
              "#f1b6da",
              "#fde0ef",
              "#f7f7f7",
              "#e6f5d0",
              "#b8e186",
              "#7fbc41",
              "#4d9221",
              "#276419",
            ],
            PRGn: [
              "#40004b",
              "#762a83",
              "#9970ab",
              "#c2a5cf",
              "#e7d4e8",
              "#f7f7f7",
              "#d9f0d3",
              "#a6dba0",
              "#5aae61",
              "#1b7837",
              "#00441b",
            ],
            RdYlBu: [
              "#a50026",
              "#d73027",
              "#f46d43",
              "#fdae61",
              "#fee090",
              "#ffffbf",
              "#e0f3f8",
              "#abd9e9",
              "#74add1",
              "#4575b4",
              "#313695",
            ],
            BrBG: [
              "#543005",
              "#8c510a",
              "#bf812d",
              "#dfc27d",
              "#f6e8c3",
              "#f5f5f5",
              "#c7eae5",
              "#80cdc1",
              "#35978f",
              "#01665e",
              "#003c30",
            ],
            RdGy: [
              "#67001f",
              "#b2182b",
              "#d6604d",
              "#f4a582",
              "#fddbc7",
              "#ffffff",
              "#e0e0e0",
              "#bababa",
              "#878787",
              "#4d4d4d",
              "#1a1a1a",
            ],
            PuOr: [
              "#7f3b08",
              "#b35806",
              "#e08214",
              "#fdb863",
              "#fee0b6",
              "#f7f7f7",
              "#d8daeb",
              "#b2abd2",
              "#8073ac",
              "#542788",
              "#2d004b",
            ],
            Set2: [
              "#66c2a5",
              "#fc8d62",
              "#8da0cb",
              "#e78ac3",
              "#a6d854",
              "#ffd92f",
              "#e5c494",
              "#b3b3b3",
            ],
            Accent: [
              "#7fc97f",
              "#beaed4",
              "#fdc086",
              "#ffff99",
              "#386cb0",
              "#f0027f",
              "#bf5b17",
              "#666666",
            ],
            Set1: [
              "#e41a1c",
              "#377eb8",
              "#4daf4a",
              "#984ea3",
              "#ff7f00",
              "#ffff33",
              "#a65628",
              "#f781bf",
              "#999999",
            ],
            Set3: [
              "#8dd3c7",
              "#ffffb3",
              "#bebada",
              "#fb8072",
              "#80b1d3",
              "#fdb462",
              "#b3de69",
              "#fccde5",
              "#d9d9d9",
              "#bc80bd",
              "#ccebc5",
              "#ffed6f",
            ],
            Dark2: [
              "#1b9e77",
              "#d95f02",
              "#7570b3",
              "#e7298a",
              "#66a61e",
              "#e6ab02",
              "#a6761d",
              "#666666",
            ],
            Paired: [
              "#a6cee3",
              "#1f78b4",
              "#b2df8a",
              "#33a02c",
              "#fb9a99",
              "#e31a1c",
              "#fdbf6f",
              "#ff7f00",
              "#cab2d6",
              "#6a3d9a",
              "#ffff99",
              "#b15928",
            ],
            Pastel2: [
              "#b3e2cd",
              "#fdcdac",
              "#cbd5e8",
              "#f4cae4",
              "#e6f5c9",
              "#fff2ae",
              "#f1e2cc",
              "#cccccc",
            ],
            Pastel1: [
              "#fbb4ae",
              "#b3cde3",
              "#ccebc5",
              "#decbe4",
              "#fed9a6",
              "#ffffcc",
              "#e5d8bd",
              "#fddaec",
              "#f2f2f2",
            ],
          },
          br = 0,
          yr = Object.keys(vr);
        br < yr.length;
        br += 1
      ) {
        var xr = yr[br];
        vr[xr.toLowerCase()] = vr[xr];
      }
      var _r = vr,
        wr = w;
      (wr.average = no),
        (wr.bezier = go),
        (wr.blend = Do),
        (wr.cubehelix = Fo),
        (wr.mix = wr.interpolate = gs),
        (wr.random = Yo),
        (wr.scale = lo),
        (wr.analyze = qo.analyze),
        (wr.contrast = Zo),
        (wr.deltaE = hr),
        (wr.distance = dr),
        (wr.limits = qo.limits),
        (wr.valid = fr),
        (wr.scales = mr),
        (wr.colors = Ni),
        (wr.brewer = _r);
      var kr = wr;
      return kr;
    })();
  })(Ir);
  var Fr = Rr(Ir.exports);
  function Nr() {
    return Fr.random().hex();
  }
  function zr(t, e) {
    return Fr(t).alpha(e).hex();
  }
  function $r(t, e) {
    return Fr(t).brighten(e).hex();
  }
  function jr(t, e) {
    return Fr(t).darken(e).hex();
  }
  function Yr(t) {
    const [e, ...i] = t,
      n = [];
    return (
      i.forEach((t) => {
        const i = {};
        e.forEach((e, n) => {
          i[e] = t[n];
        }),
          n.push(i);
      }),
      n
    );
  }
  function Wr(t, e, i) {
    let n = "";
    if (i) {
      const s = i.sort((t, e) => e.number - t.number),
        o = s.find((e) => t >= e.number);
      o &&
        (n =
          e > 0
            ? `${
                Math.round((t * Math.pow(10, e)) / o.number) / Math.pow(10, e)
              }${o.suffix}`
            : `${Math.round(t / o.number)}${o.suffix}`);
    }
    return (
      n ||
        (n = new Intl.NumberFormat(void 0, { maximumFractionDigits: e })
          .format(
            e > 0
              ? Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
              : Math.round(t)
          )
          .toString()),
      n
    );
  }
  var Br =
      "object" == typeof global && global && global.Object === Object && global,
    Vr = "object" == typeof self && self && self.Object === Object && self,
    Hr = Br || Vr || Function("return this")(),
    Ur = Hr.Symbol,
    Gr = Object.prototype,
    Kr = Gr.hasOwnProperty,
    qr = Gr.toString,
    Xr = Ur ? Ur.toStringTag : void 0;
  var Zr = Object.prototype.toString;
  var Jr = "[object Null]",
    Qr = "[object Undefined]",
    ta = Ur ? Ur.toStringTag : void 0;
  function ea(t) {
    return null == t
      ? void 0 === t
        ? Qr
        : Jr
      : ta && ta in Object(t)
      ? (function (t) {
          var e = Kr.call(t, Xr),
            i = t[Xr];
          try {
            t[Xr] = void 0;
            var n = !0;
          } catch (t) {}
          var s = qr.call(t);
          return n && (e ? (t[Xr] = i) : delete t[Xr]), s;
        })(t)
      : (function (t) {
          return Zr.call(t);
        })(t);
  }
  function ia(t) {
    return null != t && "object" == typeof t;
  }
  var na = "[object Symbol]";
  function sa(t) {
    return "symbol" == typeof t || (ia(t) && ea(t) == na);
  }
  var oa = Array.isArray,
    ra = 1 / 0,
    aa = Ur ? Ur.prototype : void 0,
    la = aa ? aa.toString : void 0;
  function ha(t) {
    if ("string" == typeof t) return t;
    if (oa(t))
      return (
        (function (t, e) {
          for (
            var i = -1, n = null == t ? 0 : t.length, s = Array(n);
            ++i < n;

          )
            s[i] = e(t[i], i, t);
          return s;
        })(t, ha) + ""
      );
    if (sa(t)) return la ? la.call(t) : "";
    var e = t + "";
    return "0" == e && 1 / t == -ra ? "-0" : e;
  }
  function ca(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
  }
  function da(t) {
    return t;
  }
  var ua = "[object AsyncFunction]",
    fa = "[object Function]",
    pa = "[object GeneratorFunction]",
    ga = "[object Proxy]";
  function ma(t) {
    if (!ca(t)) return !1;
    var e = ea(t);
    return e == fa || e == pa || e == ua || e == ga;
  }
  var va = Hr["__core-js_shared__"],
    ba = (function () {
      var t = /[^.]+$/.exec((va && va.keys && va.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })();
  var ya = Function.prototype.toString;
  function xa(t) {
    if (null != t) {
      try {
        return ya.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  }
  var _a = /^\[object .+?Constructor\]$/,
    wa = Function.prototype,
    ka = Object.prototype,
    Ca = wa.toString,
    Sa = ka.hasOwnProperty,
    Ma = RegExp(
      "^" +
        Ca.call(Sa)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function Aa(t) {
    return (
      !(!ca(t) || ((e = t), ba && ba in e)) && (ma(t) ? Ma : _a).test(xa(t))
    );
    var e;
  }
  function Da(t, e) {
    var i = (function (t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return Aa(i) ? i : void 0;
  }
  var Ta = Da(Hr, "WeakMap"),
    Oa = Object.create,
    Pa = (function () {
      function t() {}
      return function (e) {
        if (!ca(e)) return {};
        if (Oa) return Oa(e);
        t.prototype = e;
        var i = new t();
        return (t.prototype = void 0), i;
      };
    })();
  function Ea(t, e) {
    var i = -1,
      n = t.length;
    for (e || (e = Array(n)); ++i < n; ) e[i] = t[i];
    return e;
  }
  var La = Date.now;
  var Ra,
    Ia,
    Fa,
    Na = (function () {
      try {
        var t = Da(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch (t) {}
    })(),
    za = Na,
    $a = za
      ? function (t, e) {
          return za(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value:
              ((i = e),
              function () {
                return i;
              }),
            writable: !0,
          });
          var i;
        }
      : da,
    ja =
      ((Ra = $a),
      (Ia = 0),
      (Fa = 0),
      function () {
        var t = La(),
          e = 16 - (t - Fa);
        if (((Fa = t), e > 0)) {
          if (++Ia >= 800) return arguments[0];
        } else Ia = 0;
        return Ra.apply(void 0, arguments);
      }),
    Ya = ja;
  var Wa = 9007199254740991,
    Ba = /^(?:0|[1-9]\d*)$/;
  function Va(t, e) {
    var i = typeof t;
    return (
      !!(e = null == e ? Wa : e) &&
      ("number" == i || ("symbol" != i && Ba.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    );
  }
  function Ha(t, e, i) {
    "__proto__" == e && za
      ? za(t, e, { configurable: !0, enumerable: !0, value: i, writable: !0 })
      : (t[e] = i);
  }
  function Ua(t, e) {
    return t === e || (t != t && e != e);
  }
  var Ga = Object.prototype.hasOwnProperty;
  function Ka(t, e, i) {
    var n = t[e];
    (Ga.call(t, e) && Ua(n, i) && (void 0 !== i || e in t)) || Ha(t, e, i);
  }
  function qa(t, e, i, n) {
    var s = !i;
    i || (i = {});
    for (var o = -1, r = e.length; ++o < r; ) {
      var a = e[o],
        l = n ? n(i[a], t[a], a, i, t) : void 0;
      void 0 === l && (l = t[a]), s ? Ha(i, a, l) : Ka(i, a, l);
    }
    return i;
  }
  var Xa = Math.max;
  function Za(t, e) {
    return Ya(
      (function (t, e, i) {
        return (
          (e = Xa(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var n = arguments, s = -1, o = Xa(n.length - e, 0), r = Array(o);
              ++s < o;

            )
              r[s] = n[e + s];
            s = -1;
            for (var a = Array(e + 1); ++s < e; ) a[s] = n[s];
            return (
              (a[e] = i(r)),
              (function (t, e, i) {
                switch (i.length) {
                  case 0:
                    return t.call(e);
                  case 1:
                    return t.call(e, i[0]);
                  case 2:
                    return t.call(e, i[0], i[1]);
                  case 3:
                    return t.call(e, i[0], i[1], i[2]);
                }
                return t.apply(e, i);
              })(t, this, a)
            );
          }
        );
      })(t, e, da),
      t + ""
    );
  }
  var Ja = 9007199254740991;
  function Qa(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Ja;
  }
  function tl(t) {
    return null != t && Qa(t.length) && !ma(t);
  }
  var el = Object.prototype;
  function il(t) {
    var e = t && t.constructor;
    return t === (("function" == typeof e && e.prototype) || el);
  }
  function nl(t) {
    return ia(t) && "[object Arguments]" == ea(t);
  }
  var sl = Object.prototype,
    ol = sl.hasOwnProperty,
    rl = sl.propertyIsEnumerable,
    al = nl(
      (function () {
        return arguments;
      })()
    )
      ? nl
      : function (t) {
          return ia(t) && ol.call(t, "callee") && !rl.call(t, "callee");
        },
    ll = al;
  var hl = "object" == typeof t && t && !t.nodeType && t,
    cl =
      hl && "object" == typeof module && module && !module.nodeType && module,
    dl = cl && cl.exports === hl ? Hr.Buffer : void 0,
    ul =
      (dl ? dl.isBuffer : void 0) ||
      function () {
        return !1;
      },
    fl = {};
  function pl(t) {
    return function (e) {
      return t(e);
    };
  }
  (fl["[object Float32Array]"] =
    fl["[object Float64Array]"] =
    fl["[object Int8Array]"] =
    fl["[object Int16Array]"] =
    fl["[object Int32Array]"] =
    fl["[object Uint8Array]"] =
    fl["[object Uint8ClampedArray]"] =
    fl["[object Uint16Array]"] =
    fl["[object Uint32Array]"] =
      !0),
    (fl["[object Arguments]"] =
      fl["[object Array]"] =
      fl["[object ArrayBuffer]"] =
      fl["[object Boolean]"] =
      fl["[object DataView]"] =
      fl["[object Date]"] =
      fl["[object Error]"] =
      fl["[object Function]"] =
      fl["[object Map]"] =
      fl["[object Number]"] =
      fl["[object Object]"] =
      fl["[object RegExp]"] =
      fl["[object Set]"] =
      fl["[object String]"] =
      fl["[object WeakMap]"] =
        !1);
  var gl = "object" == typeof t && t && !t.nodeType && t,
    ml =
      gl && "object" == typeof module && module && !module.nodeType && module,
    vl = ml && ml.exports === gl && Br.process,
    bl = (function () {
      try {
        var t = ml && ml.require && ml.require("util").types;
        return t || (vl && vl.binding && vl.binding("util"));
      } catch (t) {}
    })(),
    yl = bl && bl.isTypedArray,
    xl = yl
      ? pl(yl)
      : function (t) {
          return ia(t) && Qa(t.length) && !!fl[ea(t)];
        },
    _l = Object.prototype.hasOwnProperty;
  function wl(t, e) {
    var i = oa(t),
      n = !i && ll(t),
      s = !i && !n && ul(t),
      o = !i && !n && !s && xl(t),
      r = i || n || s || o,
      a = r
        ? (function (t, e) {
            for (var i = -1, n = Array(t); ++i < t; ) n[i] = e(i);
            return n;
          })(t.length, String)
        : [],
      l = a.length;
    for (var h in t)
      (!e && !_l.call(t, h)) ||
        (r &&
          ("length" == h ||
            (s && ("offset" == h || "parent" == h)) ||
            (o && ("buffer" == h || "byteLength" == h || "byteOffset" == h)) ||
            Va(h, l))) ||
        a.push(h);
    return a;
  }
  function kl(t, e) {
    return function (i) {
      return t(e(i));
    };
  }
  var Cl = kl(Object.keys, Object),
    Sl = Object.prototype.hasOwnProperty;
  function Ml(t) {
    return tl(t)
      ? wl(t)
      : (function (t) {
          if (!il(t)) return Cl(t);
          var e = [];
          for (var i in Object(t))
            Sl.call(t, i) && "constructor" != i && e.push(i);
          return e;
        })(t);
  }
  var Al = Object.prototype.hasOwnProperty;
  function Dl(t) {
    if (!ca(t))
      return (function (t) {
        var e = [];
        if (null != t) for (var i in Object(t)) e.push(i);
        return e;
      })(t);
    var e = il(t),
      i = [];
    for (var n in t) ("constructor" != n || (!e && Al.call(t, n))) && i.push(n);
    return i;
  }
  function Tl(t) {
    return tl(t) ? wl(t, !0) : Dl(t);
  }
  var Ol = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Pl = /^\w*$/;
  var El = Da(Object, "create");
  var Ll = Object.prototype.hasOwnProperty;
  var Rl = Object.prototype.hasOwnProperty;
  function Il(t) {
    var e = -1,
      i = null == t ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Fl(t, e) {
    for (var i = t.length; i--; ) if (Ua(t[i][0], e)) return i;
    return -1;
  }
  (Il.prototype.clear = function () {
    (this.__data__ = El ? El(null) : {}), (this.size = 0);
  }),
    (Il.prototype.delete = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }),
    (Il.prototype.get = function (t) {
      var e = this.__data__;
      if (El) {
        var i = e[t];
        return "__lodash_hash_undefined__" === i ? void 0 : i;
      }
      return Ll.call(e, t) ? e[t] : void 0;
    }),
    (Il.prototype.has = function (t) {
      var e = this.__data__;
      return El ? void 0 !== e[t] : Rl.call(e, t);
    }),
    (Il.prototype.set = function (t, e) {
      var i = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (i[t] = El && void 0 === e ? "__lodash_hash_undefined__" : e),
        this
      );
    });
  var Nl = Array.prototype.splice;
  function zl(t) {
    var e = -1,
      i = null == t ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (zl.prototype.clear = function () {
    (this.__data__ = []), (this.size = 0);
  }),
    (zl.prototype.delete = function (t) {
      var e = this.__data__,
        i = Fl(e, t);
      return (
        !(i < 0) &&
        (i == e.length - 1 ? e.pop() : Nl.call(e, i, 1), --this.size, !0)
      );
    }),
    (zl.prototype.get = function (t) {
      var e = this.__data__,
        i = Fl(e, t);
      return i < 0 ? void 0 : e[i][1];
    }),
    (zl.prototype.has = function (t) {
      return Fl(this.__data__, t) > -1;
    }),
    (zl.prototype.set = function (t, e) {
      var i = this.__data__,
        n = Fl(i, t);
      return n < 0 ? (++this.size, i.push([t, e])) : (i[n][1] = e), this;
    });
  var $l = Da(Hr, "Map");
  function jl(t, e) {
    var i,
      n,
      s = t.__data__;
    return (
      "string" == (n = typeof (i = e)) ||
      "number" == n ||
      "symbol" == n ||
      "boolean" == n
        ? "__proto__" !== i
        : null === i
    )
      ? s["string" == typeof e ? "string" : "hash"]
      : s.map;
  }
  function Yl(t) {
    var e = -1,
      i = null == t ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (Yl.prototype.clear = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new Il(),
        map: new ($l || zl)(),
        string: new Il(),
      });
  }),
    (Yl.prototype.delete = function (t) {
      var e = jl(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }),
    (Yl.prototype.get = function (t) {
      return jl(this, t).get(t);
    }),
    (Yl.prototype.has = function (t) {
      return jl(this, t).has(t);
    }),
    (Yl.prototype.set = function (t, e) {
      var i = jl(this, t),
        n = i.size;
      return i.set(t, e), (this.size += i.size == n ? 0 : 1), this;
    });
  var Wl = "Expected a function";
  function Bl(t, e) {
    if ("function" != typeof t || (null != e && "function" != typeof e))
      throw new TypeError(Wl);
    var i = function () {
      var n = arguments,
        s = e ? e.apply(this, n) : n[0],
        o = i.cache;
      if (o.has(s)) return o.get(s);
      var r = t.apply(this, n);
      return (i.cache = o.set(s, r) || o), r;
    };
    return (i.cache = new (Bl.Cache || Yl)()), i;
  }
  Bl.Cache = Yl;
  var Vl =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Hl = /\\(\\)?/g,
    Ul = (function (t) {
      var e = Bl(t, function (t) {
          return 500 === i.size && i.clear(), t;
        }),
        i = e.cache;
      return e;
    })(function (t) {
      var e = [];
      return (
        46 === t.charCodeAt(0) && e.push(""),
        t.replace(Vl, function (t, i, n, s) {
          e.push(n ? s.replace(Hl, "$1") : i || t);
        }),
        e
      );
    }),
    Gl = Ul;
  function Kl(t, e) {
    return oa(t)
      ? t
      : (function (t, e) {
          if (oa(t)) return !1;
          var i = typeof t;
          return (
            !(
              "number" != i &&
              "symbol" != i &&
              "boolean" != i &&
              null != t &&
              !sa(t)
            ) ||
            Pl.test(t) ||
            !Ol.test(t) ||
            (null != e && t in Object(e))
          );
        })(t, e)
      ? [t]
      : Gl(
          (function (t) {
            return null == t ? "" : ha(t);
          })(t)
        );
  }
  var ql = 1 / 0;
  function Xl(t) {
    if ("string" == typeof t || sa(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -ql ? "-0" : e;
  }
  function Zl(t, e, i) {
    var n =
      null == t
        ? void 0
        : (function (t, e) {
            for (var i = 0, n = (e = Kl(e, t)).length; null != t && i < n; )
              t = t[Xl(e[i++])];
            return i && i == n ? t : void 0;
          })(t, e);
    return void 0 === n ? i : n;
  }
  function Jl(t, e) {
    for (var i = -1, n = e.length, s = t.length; ++i < n; ) t[s + i] = e[i];
    return t;
  }
  var Ql = kl(Object.getPrototypeOf, Object),
    th = "[object Object]",
    eh = Function.prototype,
    ih = Object.prototype,
    nh = eh.toString,
    sh = ih.hasOwnProperty,
    oh = nh.call(Object);
  function rh(t) {
    var e = (this.__data__ = new zl(t));
    this.size = e.size;
  }
  (rh.prototype.clear = function () {
    (this.__data__ = new zl()), (this.size = 0);
  }),
    (rh.prototype.delete = function (t) {
      var e = this.__data__,
        i = e.delete(t);
      return (this.size = e.size), i;
    }),
    (rh.prototype.get = function (t) {
      return this.__data__.get(t);
    }),
    (rh.prototype.has = function (t) {
      return this.__data__.has(t);
    }),
    (rh.prototype.set = function (t, e) {
      var i = this.__data__;
      if (i instanceof zl) {
        var n = i.__data__;
        if (!$l || n.length < 199)
          return n.push([t, e]), (this.size = ++i.size), this;
        i = this.__data__ = new Yl(n);
      }
      return i.set(t, e), (this.size = i.size), this;
    });
  var ah = "object" == typeof t && t && !t.nodeType && t,
    lh =
      ah && "object" == typeof module && module && !module.nodeType && module,
    hh = lh && lh.exports === ah ? Hr.Buffer : void 0,
    ch = hh ? hh.allocUnsafe : void 0;
  function dh(t, e) {
    if (e) return t.slice();
    var i = t.length,
      n = ch ? ch(i) : new t.constructor(i);
    return t.copy(n), n;
  }
  function uh() {
    return [];
  }
  var fh = Object.prototype.propertyIsEnumerable,
    ph = Object.getOwnPropertySymbols,
    gh = ph
      ? function (t) {
          return null == t
            ? []
            : ((t = Object(t)),
              (function (t, e) {
                for (
                  var i = -1, n = null == t ? 0 : t.length, s = 0, o = [];
                  ++i < n;

                ) {
                  var r = t[i];
                  e(r, i, t) && (o[s++] = r);
                }
                return o;
              })(ph(t), function (e) {
                return fh.call(t, e);
              }));
        }
      : uh,
    mh = gh;
  var vh = Object.getOwnPropertySymbols
    ? function (t) {
        for (var e = []; t; ) Jl(e, mh(t)), (t = Ql(t));
        return e;
      }
    : uh;
  function bh(t, e, i) {
    var n = e(t);
    return oa(t) ? n : Jl(n, i(t));
  }
  function yh(t) {
    return bh(t, Ml, mh);
  }
  function xh(t) {
    return bh(t, Tl, vh);
  }
  var _h = Da(Hr, "DataView"),
    wh = Da(Hr, "Promise"),
    kh = Da(Hr, "Set"),
    Ch = "[object Map]",
    Sh = "[object Promise]",
    Mh = "[object Set]",
    Ah = "[object WeakMap]",
    Dh = "[object DataView]",
    Th = xa(_h),
    Oh = xa($l),
    Ph = xa(wh),
    Eh = xa(kh),
    Lh = xa(Ta),
    Rh = ea;
  ((_h && Rh(new _h(new ArrayBuffer(1))) != Dh) ||
    ($l && Rh(new $l()) != Ch) ||
    (wh && Rh(wh.resolve()) != Sh) ||
    (kh && Rh(new kh()) != Mh) ||
    (Ta && Rh(new Ta()) != Ah)) &&
    (Rh = function (t) {
      var e = ea(t),
        i = "[object Object]" == e ? t.constructor : void 0,
        n = i ? xa(i) : "";
      if (n)
        switch (n) {
          case Th:
            return Dh;
          case Oh:
            return Ch;
          case Ph:
            return Sh;
          case Eh:
            return Mh;
          case Lh:
            return Ah;
        }
      return e;
    });
  var Ih = Rh,
    Fh = Object.prototype.hasOwnProperty;
  var Nh = Hr.Uint8Array;
  function zh(t) {
    var e = new t.constructor(t.byteLength);
    return new Nh(e).set(new Nh(t)), e;
  }
  var $h = /\w*$/;
  var jh = Ur ? Ur.prototype : void 0,
    Yh = jh ? jh.valueOf : void 0;
  function Wh(t, e) {
    var i = e ? zh(t.buffer) : t.buffer;
    return new t.constructor(i, t.byteOffset, t.length);
  }
  var Bh = "[object Boolean]",
    Vh = "[object Date]",
    Hh = "[object Map]",
    Uh = "[object Number]",
    Gh = "[object RegExp]",
    Kh = "[object Set]",
    qh = "[object String]",
    Xh = "[object Symbol]",
    Zh = "[object ArrayBuffer]",
    Jh = "[object DataView]",
    Qh = "[object Float32Array]",
    tc = "[object Float64Array]",
    ec = "[object Int8Array]",
    ic = "[object Int16Array]",
    nc = "[object Int32Array]",
    sc = "[object Uint8Array]",
    oc = "[object Uint8ClampedArray]",
    rc = "[object Uint16Array]",
    ac = "[object Uint32Array]";
  function lc(t, e, i) {
    var n,
      s,
      o,
      r = t.constructor;
    switch (e) {
      case Zh:
        return zh(t);
      case Bh:
      case Vh:
        return new r(+t);
      case Jh:
        return (function (t, e) {
          var i = e ? zh(t.buffer) : t.buffer;
          return new t.constructor(i, t.byteOffset, t.byteLength);
        })(t, i);
      case Qh:
      case tc:
      case ec:
      case ic:
      case nc:
      case sc:
      case oc:
      case rc:
      case ac:
        return Wh(t, i);
      case Hh:
        return new r();
      case Uh:
      case qh:
        return new r(t);
      case Gh:
        return (
          ((o = new (s = t).constructor(s.source, $h.exec(s))).lastIndex =
            s.lastIndex),
          o
        );
      case Kh:
        return new r();
      case Xh:
        return (n = t), Yh ? Object(Yh.call(n)) : {};
    }
  }
  function hc(t) {
    return "function" != typeof t.constructor || il(t) ? {} : Pa(Ql(t));
  }
  var cc = bl && bl.isMap,
    dc = cc
      ? pl(cc)
      : function (t) {
          return ia(t) && "[object Map]" == Ih(t);
        };
  var uc = bl && bl.isSet,
    fc = uc
      ? pl(uc)
      : function (t) {
          return ia(t) && "[object Set]" == Ih(t);
        },
    pc = 1,
    gc = 2,
    mc = 4,
    vc = "[object Arguments]",
    bc = "[object Function]",
    yc = "[object GeneratorFunction]",
    xc = "[object Object]",
    _c = {};
  function wc(t, e, i, n, s, o) {
    var r,
      a = e & pc,
      l = e & gc,
      h = e & mc;
    if ((i && (r = s ? i(t, n, s, o) : i(t)), void 0 !== r)) return r;
    if (!ca(t)) return t;
    var c = oa(t);
    if (c) {
      if (
        ((r = (function (t) {
          var e = t.length,
            i = new t.constructor(e);
          return (
            e &&
              "string" == typeof t[0] &&
              Fh.call(t, "index") &&
              ((i.index = t.index), (i.input = t.input)),
            i
          );
        })(t)),
        !a)
      )
        return Ea(t, r);
    } else {
      var d = Ih(t),
        u = d == bc || d == yc;
      if (ul(t)) return dh(t, a);
      if (d == xc || d == vc || (u && !s)) {
        if (((r = l || u ? {} : hc(t)), !a))
          return l
            ? (function (t, e) {
                return qa(t, vh(t), e);
              })(
                t,
                (function (t, e) {
                  return t && qa(e, Tl(e), t);
                })(r, t)
              )
            : (function (t, e) {
                return qa(t, mh(t), e);
              })(
                t,
                (function (t, e) {
                  return t && qa(e, Ml(e), t);
                })(r, t)
              );
      } else {
        if (!_c[d]) return s ? t : {};
        r = lc(t, d, a);
      }
    }
    o || (o = new rh());
    var f = o.get(t);
    if (f) return f;
    o.set(t, r),
      fc(t)
        ? t.forEach(function (n) {
            r.add(wc(n, e, i, n, t, o));
          })
        : dc(t) &&
          t.forEach(function (n, s) {
            r.set(s, wc(n, e, i, s, t, o));
          });
    var p = c ? void 0 : (h ? (l ? xh : yh) : l ? Tl : Ml)(t);
    return (
      (function (t, e) {
        for (
          var i = -1, n = null == t ? 0 : t.length;
          ++i < n && !1 !== e(t[i], i, t);

        );
      })(p || t, function (n, s) {
        p && (n = t[(s = n)]), Ka(r, s, wc(n, e, i, s, t, o));
      }),
      r
    );
  }
  (_c[vc] =
    _c["[object Array]"] =
    _c["[object ArrayBuffer]"] =
    _c["[object DataView]"] =
    _c["[object Boolean]"] =
    _c["[object Date]"] =
    _c["[object Float32Array]"] =
    _c["[object Float64Array]"] =
    _c["[object Int8Array]"] =
    _c["[object Int16Array]"] =
    _c["[object Int32Array]"] =
    _c["[object Map]"] =
    _c["[object Number]"] =
    _c[xc] =
    _c["[object RegExp]"] =
    _c["[object Set]"] =
    _c["[object String]"] =
    _c["[object Symbol]"] =
    _c["[object Uint8Array]"] =
    _c["[object Uint8ClampedArray]"] =
    _c["[object Uint16Array]"] =
    _c["[object Uint32Array]"] =
      !0),
    (_c["[object Error]"] = _c[bc] = _c["[object WeakMap]"] = !1);
  var kc = 1,
    Cc = 4;
  var Sc,
    Mc = function (t, e, i) {
      for (var n = -1, s = Object(t), o = i(t), r = o.length; r--; ) {
        var a = o[Sc ? r : ++n];
        if (!1 === e(s[a], a, s)) break;
      }
      return t;
    },
    Ac = Mc;
  function Dc(t, e, i) {
    ((void 0 !== i && !Ua(t[e], i)) || (void 0 === i && !(e in t))) &&
      Ha(t, e, i);
  }
  function Tc(t, e) {
    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e)
      return t[e];
  }
  function Oc(t, e, i, n, s, o, r) {
    var a = Tc(t, i),
      l = Tc(e, i),
      h = r.get(l);
    if (h) Dc(t, i, h);
    else {
      var c,
        d = o ? o(a, l, i + "", t, e, r) : void 0,
        u = void 0 === d;
      if (u) {
        var f = oa(l),
          p = !f && ul(l),
          g = !f && !p && xl(l);
        (d = l),
          f || p || g
            ? oa(a)
              ? (d = a)
              : ia((c = a)) && tl(c)
              ? (d = Ea(a))
              : p
              ? ((u = !1), (d = dh(l, !0)))
              : g
              ? ((u = !1), (d = Wh(l, !0)))
              : (d = [])
            : (function (t) {
                if (!ia(t) || ea(t) != th) return !1;
                var e = Ql(t);
                if (null === e) return !0;
                var i = sh.call(e, "constructor") && e.constructor;
                return (
                  "function" == typeof i && i instanceof i && nh.call(i) == oh
                );
              })(l) || ll(l)
            ? ((d = a),
              ll(a)
                ? (d = (function (t) {
                    return qa(t, Tl(t));
                  })(a))
                : (ca(a) && !ma(a)) || (d = hc(l)))
            : (u = !1);
      }
      u && (r.set(l, d), s(d, l, n, o, r), r.delete(l)), Dc(t, i, d);
    }
  }
  function Pc(t, e, i, n, s) {
    t !== e &&
      Ac(
        e,
        function (o, r) {
          if ((s || (s = new rh()), ca(o))) Oc(t, e, r, i, Pc, n, s);
          else {
            var a = n ? n(Tc(t, r), o, r + "", t, e, s) : void 0;
            void 0 === a && (a = o), Dc(t, r, a);
          }
        },
        Tl
      );
  }
  var Ec,
    Lc =
      ((Ec = function (t, e, i) {
        Pc(t, e, i);
      }),
      Za(function (t, e) {
        var i = -1,
          n = e.length,
          s = n > 1 ? e[n - 1] : void 0,
          o = n > 2 ? e[2] : void 0;
        for (
          s = Ec.length > 3 && "function" == typeof s ? (n--, s) : void 0,
            o &&
              (function (t, e, i) {
                if (!ca(i)) return !1;
                var n = typeof e;
                return (
                  !!("number" == n
                    ? tl(i) && Va(e, i.length)
                    : "string" == n && (e in i)) && Ua(i[e], t)
                );
              })(e[0], e[1], o) &&
              ((s = n < 3 ? void 0 : s), (n = 1)),
            t = Object(t);
          ++i < n;

        ) {
          var r = e[i];
          r && Ec(t, r, i, s);
        }
        return t;
      })),
    Rc = Lc;
  function Ic(...t) {
    return Rc({}, ...t);
  }
  function Fc(t, ...e) {
    return Rc(t, ...e);
  }
  function Nc(t) {
    return null == t;
  }
  function zc(t, e) {
    if (e < 0 || !t || (Array.isArray(t) && 0 === t.length)) return [];
    const i = Array.isArray(t) ? t : [t];
    return Array.from({ length: e }, (t, e) => i[e % i.length]);
  }
  function $c(t) {
    return (function (t) {
      return wc(t, kc | Cc);
    })(t);
  }
  function jc(t, e) {
    return Zl(t, e);
  }
  function Yc(t, e, i) {
    if (!t) return null;
    const n = t.split(e);
    let s = i;
    return "last" === s && (s = n.length - 1), s < n.length ? n[s] : null;
  }
  function Wc(t, e, i) {
    return (
      t && clearTimeout(t),
      setTimeout(() => {
        e();
      }, i)
    );
  }
  class Bc {
    get nativeElement() {
      return this.htmlElement;
    }
    constructor(t) {
      t instanceof HTMLElement
        ? (this.htmlElement = t)
        : (this.htmlElement = document.createElement(t));
    }
    newChild(t) {
      const e = new Bc(t);
      return (
        this.htmlElement.appendChild(e.htmlElement), (this.parentDom = this), e
      );
    }
    addChild(t) {
      return t.appendTo(this.nativeElement), this;
    }
    clearChildren() {
      return (this.htmlElement.innerHTML = ""), this;
    }
    setAttribute(t, e) {
      return Nc(e) || this.htmlElement.setAttribute(t, e.toString()), this;
    }
    setStyle(t, e) {
      return Nc(e) || (this.htmlElement.style[t] = e), this;
    }
    addClass(...t) {
      return this.htmlElement.classList.add(...t), this;
    }
    removeClass(...t) {
      return this.htmlElement.classList.remove(...t), this;
    }
    setText(t) {
      return (this.htmlElement.innerText = t), this;
    }
    setHtml(t) {
      return (this.htmlElement.innerHTML = t), this;
    }
    parent() {
      return this.parentDom;
    }
    appendTo(t) {
      return t.appendChild(this.htmlElement), this;
    }
    appendToBody() {
      return this.appendTo(document.body), this;
    }
  }
  function Vc(t) {
    return document.querySelector(t) ? new Bc(document.querySelector(t)) : null;
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const Hc = window,
    Uc =
      Hc.ShadowRoot &&
      (void 0 === Hc.ShadyCSS || Hc.ShadyCSS.nativeShadow) &&
      "adoptedStyleSheets" in Document.prototype &&
      "replace" in CSSStyleSheet.prototype,
    Gc = Symbol(),
    Kc = new WeakMap();
  let qc = class {
    constructor(t, e, i) {
      if (((this._$cssResult$ = !0), i !== Gc))
        throw Error(
          "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
        );
      (this.cssText = t), (this.t = e);
    }
    get styleSheet() {
      let t = this.o;
      const e = this.t;
      if (Uc && void 0 === t) {
        const i = void 0 !== e && 1 === e.length;
        i && (t = Kc.get(e)),
          void 0 === t &&
            ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
            i && Kc.set(e, t));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  const Xc = (t) => new qc("string" == typeof t ? t : t + "", void 0, Gc),
    Zc = (t, ...e) => {
      const i =
        1 === t.length
          ? t[0]
          : e.reduce(
              (e, i, n) =>
                e +
                ((t) => {
                  if (!0 === t._$cssResult$) return t.cssText;
                  if ("number" == typeof t) return t;
                  throw Error(
                    "Value passed to 'css' function must be a 'css' function result: " +
                      t +
                      ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                  );
                })(i) +
                t[n + 1],
              t[0]
            );
      return new qc(i, t, Gc);
    },
    Jc = Uc
      ? (t) => t
      : (t) =>
          t instanceof CSSStyleSheet
            ? ((t) => {
                let e = "";
                for (const i of t.cssRules) e += i.cssText;
                return Xc(e);
              })(t)
            : t;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ var Qc;
  const td = window,
    ed = td.trustedTypes,
    id = ed ? ed.emptyScript : "",
    nd = td.reactiveElementPolyfillSupport,
    sd = {
      toAttribute(t, e) {
        switch (e) {
          case Boolean:
            t = t ? id : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, e) {
        let i = t;
        switch (e) {
          case Boolean:
            i = null !== t;
            break;
          case Number:
            i = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(t);
            } catch (t) {
              i = null;
            }
        }
        return i;
      },
    },
    od = (t, e) => e !== t && (e == e || t == t),
    rd = {
      attribute: !0,
      type: String,
      converter: sd,
      reflect: !1,
      hasChanged: od,
    },
    ad = "finalized";
  let ld = class extends HTMLElement {
    constructor() {
      super(),
        (this._$Ei = new Map()),
        (this.isUpdatePending = !1),
        (this.hasUpdated = !1),
        (this._$El = null),
        this._$Eu();
    }
    static addInitializer(t) {
      var e;
      this.finalize(),
        (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
    }
    static get observedAttributes() {
      this.finalize();
      const t = [];
      return (
        this.elementProperties.forEach((e, i) => {
          const n = this._$Ep(i, e);
          void 0 !== n && (this._$Ev.set(n, i), t.push(n));
        }),
        t
      );
    }
    static createProperty(t, e = rd) {
      if (
        (e.state && (e.attribute = !1),
        this.finalize(),
        this.elementProperties.set(t, e),
        !e.noAccessor && !this.prototype.hasOwnProperty(t))
      ) {
        const i = "symbol" == typeof t ? Symbol() : "__" + t,
          n = this.getPropertyDescriptor(t, i, e);
        void 0 !== n && Object.defineProperty(this.prototype, t, n);
      }
    }
    static getPropertyDescriptor(t, e, i) {
      return {
        get() {
          return this[e];
        },
        set(n) {
          const s = this[t];
          (this[e] = n), this.requestUpdate(t, s, i);
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) || rd;
    }
    static finalize() {
      if (this.hasOwnProperty(ad)) return !1;
      this[ad] = !0;
      const t = Object.getPrototypeOf(this);
      if (
        (t.finalize(),
        void 0 !== t.h && (this.h = [...t.h]),
        (this.elementProperties = new Map(t.elementProperties)),
        (this._$Ev = new Map()),
        this.hasOwnProperty("properties"))
      ) {
        const t = this.properties,
          e = [
            ...Object.getOwnPropertyNames(t),
            ...Object.getOwnPropertySymbols(t),
          ];
        for (const i of e) this.createProperty(i, t[i]);
      }
      return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
    }
    static finalizeStyles(t) {
      const e = [];
      if (Array.isArray(t)) {
        const i = new Set(t.flat(1 / 0).reverse());
        for (const t of i) e.unshift(Jc(t));
      } else void 0 !== t && e.push(Jc(t));
      return e;
    }
    static _$Ep(t, e) {
      const i = e.attribute;
      return !1 === i
        ? void 0
        : "string" == typeof i
        ? i
        : "string" == typeof t
        ? t.toLowerCase()
        : void 0;
    }
    _$Eu() {
      var t;
      (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
        (this._$AL = new Map()),
        this._$Eg(),
        this.requestUpdate(),
        null === (t = this.constructor.h) ||
          void 0 === t ||
          t.forEach((t) => t(this));
    }
    addController(t) {
      var e, i;
      (null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
        void 0 !== this.renderRoot &&
          this.isConnected &&
          (null === (i = t.hostConnected) || void 0 === i || i.call(t));
    }
    removeController(t) {
      var e;
      null === (e = this._$ES) ||
        void 0 === e ||
        e.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t, e) => {
        this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
      });
    }
    createRenderRoot() {
      var t;
      const e =
        null !== (t = this.shadowRoot) && void 0 !== t
          ? t
          : this.attachShadow(this.constructor.shadowRootOptions);
      return (
        ((t, e) => {
          Uc
            ? (t.adoptedStyleSheets = e.map((t) =>
                t instanceof CSSStyleSheet ? t : t.styleSheet
              ))
            : e.forEach((e) => {
                const i = document.createElement("style"),
                  n = Hc.litNonce;
                void 0 !== n && i.setAttribute("nonce", n),
                  (i.textContent = e.cssText),
                  t.appendChild(i);
              });
        })(e, this.constructor.elementStyles),
        e
      );
    }
    connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
        this.enableUpdating(!0),
        null === (t = this._$ES) ||
          void 0 === t ||
          t.forEach((t) => {
            var e;
            return null === (e = t.hostConnected) || void 0 === e
              ? void 0
              : e.call(t);
          });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
      var t;
      null === (t = this._$ES) ||
        void 0 === t ||
        t.forEach((t) => {
          var e;
          return null === (e = t.hostDisconnected) || void 0 === e
            ? void 0
            : e.call(t);
        });
    }
    attributeChangedCallback(t, e, i) {
      this._$AK(t, i);
    }
    _$EO(t, e, i = rd) {
      var n;
      const s = this.constructor._$Ep(t, i);
      if (void 0 !== s && !0 === i.reflect) {
        const o = (
          void 0 !==
          (null === (n = i.converter) || void 0 === n ? void 0 : n.toAttribute)
            ? i.converter
            : sd
        ).toAttribute(e, i.type);
        (this._$El = t),
          null == o ? this.removeAttribute(s) : this.setAttribute(s, o),
          (this._$El = null);
      }
    }
    _$AK(t, e) {
      var i;
      const n = this.constructor,
        s = n._$Ev.get(t);
      if (void 0 !== s && this._$El !== s) {
        const t = n.getPropertyOptions(s),
          o =
            "function" == typeof t.converter
              ? { fromAttribute: t.converter }
              : void 0 !==
                (null === (i = t.converter) || void 0 === i
                  ? void 0
                  : i.fromAttribute)
              ? t.converter
              : sd;
        (this._$El = s),
          (this[s] = o.fromAttribute(e, t.type)),
          (this._$El = null);
      }
    }
    requestUpdate(t, e, i) {
      let n = !0;
      void 0 !== t &&
        (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || od)(
          this[t],
          e
        )
          ? (this._$AL.has(t) || this._$AL.set(t, e),
            !0 === i.reflect &&
              this._$El !== t &&
              (void 0 === this._$EC && (this._$EC = new Map()),
              this._$EC.set(t, i)))
          : (n = !1)),
        !this.isUpdatePending && n && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = !0;
      try {
        await this._$E_;
      } catch (t) {
        Promise.reject(t);
      }
      const t = this.scheduleUpdate();
      return null != t && (await t), !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated,
        this._$Ei &&
          (this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
      let e = !1;
      const i = this._$AL;
      try {
        (e = this.shouldUpdate(i)),
          e
            ? (this.willUpdate(i),
              null === (t = this._$ES) ||
                void 0 === t ||
                t.forEach((t) => {
                  var e;
                  return null === (e = t.hostUpdate) || void 0 === e
                    ? void 0
                    : e.call(t);
                }),
              this.update(i))
            : this._$Ek();
      } catch (t) {
        throw ((e = !1), this._$Ek(), t);
      }
      e && this._$AE(i);
    }
    willUpdate(t) {}
    _$AE(t) {
      var e;
      null === (e = this._$ES) ||
        void 0 === e ||
        e.forEach((t) => {
          var e;
          return null === (e = t.hostUpdated) || void 0 === e
            ? void 0
            : e.call(t);
        }),
        this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
        this.updated(t);
    }
    _$Ek() {
      (this._$AL = new Map()), (this.isUpdatePending = !1);
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t) {
      return !0;
    }
    update(t) {
      void 0 !== this._$EC &&
        (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
        (this._$EC = void 0)),
        this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var hd;
  (ld[ad] = !0),
    (ld.elementProperties = new Map()),
    (ld.elementStyles = []),
    (ld.shadowRootOptions = { mode: "open" }),
    null == nd || nd({ ReactiveElement: ld }),
    (null !== (Qc = td.reactiveElementVersions) && void 0 !== Qc
      ? Qc
      : (td.reactiveElementVersions = [])
    ).push("1.6.3");
  const cd = window,
    dd = cd.trustedTypes,
    ud = dd ? dd.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
    fd = "$lit$",
    pd = `lit$${(Math.random() + "").slice(9)}$`,
    gd = "?" + pd,
    md = `<${gd}>`,
    vd = document,
    bd = () => vd.createComment(""),
    yd = (t) => null === t || ("object" != typeof t && "function" != typeof t),
    xd = Array.isArray,
    _d = "[ \t\n\f\r]",
    wd = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    kd = /-->/g,
    Cd = />/g,
    Sd = RegExp(
      `>|${_d}(?:([^\\s"'>=/]+)(${_d}*=${_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
      "g"
    ),
    Md = /'/g,
    Ad = /"/g,
    Dd = /^(?:script|style|textarea|title)$/i,
    Td = (
      (t) =>
      (e, ...i) => ({ _$litType$: t, strings: e, values: i })
    )(1),
    Od = Symbol.for("lit-noChange"),
    Pd = Symbol.for("lit-nothing"),
    Ed = new WeakMap(),
    Ld = vd.createTreeWalker(vd, 129, null, !1);
  function Rd(t, e) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== ud ? ud.createHTML(e) : e;
  }
  const Id = (t, e) => {
    const i = t.length - 1,
      n = [];
    let s,
      o = 2 === e ? "<svg>" : "",
      r = wd;
    for (let e = 0; e < i; e++) {
      const i = t[e];
      let a,
        l,
        h = -1,
        c = 0;
      for (; c < i.length && ((r.lastIndex = c), (l = r.exec(i)), null !== l); )
        (c = r.lastIndex),
          r === wd
            ? "!--" === l[1]
              ? (r = kd)
              : void 0 !== l[1]
              ? (r = Cd)
              : void 0 !== l[2]
              ? (Dd.test(l[2]) && (s = RegExp("</" + l[2], "g")), (r = Sd))
              : void 0 !== l[3] && (r = Sd)
            : r === Sd
            ? ">" === l[0]
              ? ((r = null != s ? s : wd), (h = -1))
              : void 0 === l[1]
              ? (h = -2)
              : ((h = r.lastIndex - l[2].length),
                (a = l[1]),
                (r = void 0 === l[3] ? Sd : '"' === l[3] ? Ad : Md))
            : r === Ad || r === Md
            ? (r = Sd)
            : r === kd || r === Cd
            ? (r = wd)
            : ((r = Sd), (s = void 0));
      const d = r === Sd && t[e + 1].startsWith("/>") ? " " : "";
      o +=
        r === wd
          ? i + md
          : h >= 0
          ? (n.push(a), i.slice(0, h) + fd + i.slice(h) + pd + d)
          : i + pd + (-2 === h ? (n.push(void 0), e) : d);
    }
    return [Rd(t, o + (t[i] || "<?>") + (2 === e ? "</svg>" : "")), n];
  };
  class Fd {
    constructor({ strings: t, _$litType$: e }, i) {
      let n;
      this.parts = [];
      let s = 0,
        o = 0;
      const r = t.length - 1,
        a = this.parts,
        [l, h] = Id(t, e);
      if (
        ((this.el = Fd.createElement(l, i)),
        (Ld.currentNode = this.el.content),
        2 === e)
      ) {
        const t = this.el.content,
          e = t.firstChild;
        e.remove(), t.append(...e.childNodes);
      }
      for (; null !== (n = Ld.nextNode()) && a.length < r; ) {
        if (1 === n.nodeType) {
          if (n.hasAttributes()) {
            const t = [];
            for (const e of n.getAttributeNames())
              if (e.endsWith(fd) || e.startsWith(pd)) {
                const i = h[o++];
                if ((t.push(e), void 0 !== i)) {
                  const t = n.getAttribute(i.toLowerCase() + fd).split(pd),
                    e = /([.?@])?(.*)/.exec(i);
                  a.push({
                    type: 1,
                    index: s,
                    name: e[2],
                    strings: t,
                    ctor:
                      "." === e[1]
                        ? Yd
                        : "?" === e[1]
                        ? Bd
                        : "@" === e[1]
                        ? Vd
                        : jd,
                  });
                } else a.push({ type: 6, index: s });
              }
            for (const e of t) n.removeAttribute(e);
          }
          if (Dd.test(n.tagName)) {
            const t = n.textContent.split(pd),
              e = t.length - 1;
            if (e > 0) {
              n.textContent = dd ? dd.emptyScript : "";
              for (let i = 0; i < e; i++)
                n.append(t[i], bd()),
                  Ld.nextNode(),
                  a.push({ type: 2, index: ++s });
              n.append(t[e], bd());
            }
          }
        } else if (8 === n.nodeType)
          if (n.data === gd) a.push({ type: 2, index: s });
          else {
            let t = -1;
            for (; -1 !== (t = n.data.indexOf(pd, t + 1)); )
              a.push({ type: 7, index: s }), (t += pd.length - 1);
          }
        s++;
      }
    }
    static createElement(t, e) {
      const i = vd.createElement("template");
      return (i.innerHTML = t), i;
    }
  }
  function Nd(t, e, i = t, n) {
    var s, o, r, a;
    if (e === Od) return e;
    let l =
      void 0 !== n
        ? null === (s = i._$Co) || void 0 === s
          ? void 0
          : s[n]
        : i._$Cl;
    const h = yd(e) ? void 0 : e._$litDirective$;
    return (
      (null == l ? void 0 : l.constructor) !== h &&
        (null === (o = null == l ? void 0 : l._$AO) ||
          void 0 === o ||
          o.call(l, !1),
        void 0 === h ? (l = void 0) : ((l = new h(t)), l._$AT(t, i, n)),
        void 0 !== n
          ? ((null !== (r = (a = i)._$Co) && void 0 !== r ? r : (a._$Co = []))[
              n
            ] = l)
          : (i._$Cl = l)),
      void 0 !== l && (e = Nd(t, l._$AS(t, e.values), l, n)),
      e
    );
  }
  class zd {
    constructor(t, e) {
      (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      var e;
      const {
          el: { content: i },
          parts: n,
        } = this._$AD,
        s = (
          null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
            ? e
            : vd
        ).importNode(i, !0);
      Ld.currentNode = s;
      let o = Ld.nextNode(),
        r = 0,
        a = 0,
        l = n[0];
      for (; void 0 !== l; ) {
        if (r === l.index) {
          let e;
          2 === l.type
            ? (e = new $d(o, o.nextSibling, this, t))
            : 1 === l.type
            ? (e = new l.ctor(o, l.name, l.strings, this, t))
            : 6 === l.type && (e = new Hd(o, this, t)),
            this._$AV.push(e),
            (l = n[++a]);
        }
        r !== (null == l ? void 0 : l.index) && ((o = Ld.nextNode()), r++);
      }
      return (Ld.currentNode = vd), s;
    }
    v(t) {
      let e = 0;
      for (const i of this._$AV)
        void 0 !== i &&
          (void 0 !== i.strings
            ? (i._$AI(t, i, e), (e += i.strings.length - 2))
            : i._$AI(t[e])),
          e++;
    }
  }
  class $d {
    constructor(t, e, i, n) {
      var s;
      (this.type = 2),
        (this._$AH = Pd),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = e),
        (this._$AM = i),
        (this.options = n),
        (this._$Cp =
          null === (s = null == n ? void 0 : n.isConnected) ||
          void 0 === s ||
          s);
    }
    get _$AU() {
      var t, e;
      return null !==
        (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
        void 0 !== e
        ? e
        : this._$Cp;
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const e = this._$AM;
      return (
        void 0 !== e &&
          11 === (null == t ? void 0 : t.nodeType) &&
          (t = e.parentNode),
        t
      );
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, e = this) {
      (t = Nd(this, t, e)),
        yd(t)
          ? t === Pd || null == t || "" === t
            ? (this._$AH !== Pd && this._$AR(), (this._$AH = Pd))
            : t !== this._$AH && t !== Od && this._(t)
          : void 0 !== t._$litType$
          ? this.g(t)
          : void 0 !== t.nodeType
          ? this.$(t)
          : ((t) =>
              xd(t) ||
              "function" == typeof (null == t ? void 0 : t[Symbol.iterator]))(t)
          ? this.T(t)
          : this._(t);
    }
    k(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
      this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
    }
    _(t) {
      this._$AH !== Pd && yd(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.$(vd.createTextNode(t)),
        (this._$AH = t);
    }
    g(t) {
      var e;
      const { values: i, _$litType$: n } = t,
        s =
          "number" == typeof n
            ? this._$AC(t)
            : (void 0 === n.el &&
                (n.el = Fd.createElement(Rd(n.h, n.h[0]), this.options)),
              n);
      if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === s)
        this._$AH.v(i);
      else {
        const t = new zd(s, this),
          e = t.u(this.options);
        t.v(i), this.$(e), (this._$AH = t);
      }
    }
    _$AC(t) {
      let e = Ed.get(t.strings);
      return void 0 === e && Ed.set(t.strings, (e = new Fd(t))), e;
    }
    T(t) {
      xd(this._$AH) || ((this._$AH = []), this._$AR());
      const e = this._$AH;
      let i,
        n = 0;
      for (const s of t)
        n === e.length
          ? e.push((i = new $d(this.k(bd()), this.k(bd()), this, this.options)))
          : (i = e[n]),
          i._$AI(s),
          n++;
      n < e.length && (this._$AR(i && i._$AB.nextSibling, n), (e.length = n));
    }
    _$AR(t = this._$AA.nextSibling, e) {
      var i;
      for (
        null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
        t && t !== this._$AB;

      ) {
        const e = t.nextSibling;
        t.remove(), (t = e);
      }
    }
    setConnected(t) {
      var e;
      void 0 === this._$AM &&
        ((this._$Cp = t),
        null === (e = this._$AP) || void 0 === e || e.call(this, t));
    }
  }
  class jd {
    constructor(t, e, i, n, s) {
      (this.type = 1),
        (this._$AH = Pd),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = e),
        (this._$AM = n),
        (this.options = s),
        i.length > 2 || "" !== i[0] || "" !== i[1]
          ? ((this._$AH = Array(i.length - 1).fill(new String())),
            (this.strings = i))
          : (this._$AH = Pd);
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t, e = this, i, n) {
      const s = this.strings;
      let o = !1;
      if (void 0 === s)
        (t = Nd(this, t, e, 0)),
          (o = !yd(t) || (t !== this._$AH && t !== Od)),
          o && (this._$AH = t);
      else {
        const n = t;
        let r, a;
        for (t = s[0], r = 0; r < s.length - 1; r++)
          (a = Nd(this, n[i + r], e, r)),
            a === Od && (a = this._$AH[r]),
            o || (o = !yd(a) || a !== this._$AH[r]),
            a === Pd
              ? (t = Pd)
              : t !== Pd && (t += (null != a ? a : "") + s[r + 1]),
            (this._$AH[r] = a);
      }
      o && !n && this.j(t);
    }
    j(t) {
      t === Pd
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }
  class Yd extends jd {
    constructor() {
      super(...arguments), (this.type = 3);
    }
    j(t) {
      this.element[this.name] = t === Pd ? void 0 : t;
    }
  }
  const Wd = dd ? dd.emptyScript : "";
  class Bd extends jd {
    constructor() {
      super(...arguments), (this.type = 4);
    }
    j(t) {
      t && t !== Pd
        ? this.element.setAttribute(this.name, Wd)
        : this.element.removeAttribute(this.name);
    }
  }
  class Vd extends jd {
    constructor(t, e, i, n, s) {
      super(t, e, i, n, s), (this.type = 5);
    }
    _$AI(t, e = this) {
      var i;
      if (
        (t = null !== (i = Nd(this, t, e, 0)) && void 0 !== i ? i : Pd) === Od
      )
        return;
      const n = this._$AH,
        s =
          (t === Pd && n !== Pd) ||
          t.capture !== n.capture ||
          t.once !== n.once ||
          t.passive !== n.passive,
        o = t !== Pd && (n === Pd || s);
      s && this.element.removeEventListener(this.name, this, n),
        o && this.element.addEventListener(this.name, this, t),
        (this._$AH = t);
    }
    handleEvent(t) {
      var e, i;
      "function" == typeof this._$AH
        ? this._$AH.call(
            null !==
              (i =
                null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.host) && void 0 !== i
              ? i
              : this.element,
            t
          )
        : this._$AH.handleEvent(t);
    }
  }
  class Hd {
    constructor(t, e, i) {
      (this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = e),
        (this.options = i);
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      Nd(this, t);
    }
  }
  const Ud = cd.litHtmlPolyfillSupport;
  null == Ud || Ud(Fd, $d),
    (null !== (hd = cd.litHtmlVersions) && void 0 !== hd
      ? hd
      : (cd.litHtmlVersions = [])
    ).push("2.8.0");
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var Gd, Kd;
  class qd extends ld {
    constructor() {
      super(...arguments),
        (this.renderOptions = { host: this }),
        (this._$Do = void 0);
    }
    createRenderRoot() {
      var t, e;
      const i = super.createRenderRoot();
      return (
        (null !== (t = (e = this.renderOptions).renderBefore) &&
          void 0 !== t) ||
          (e.renderBefore = i.firstChild),
        i
      );
    }
    update(t) {
      const e = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        (this._$Do = ((t, e, i) => {
          var n, s;
          const o =
            null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n
              ? n
              : e;
          let r = o._$litPart$;
          if (void 0 === r) {
            const t =
              null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s
                ? s
                : null;
            o._$litPart$ = r = new $d(
              e.insertBefore(bd(), t),
              t,
              void 0,
              null != i ? i : {}
            );
          }
          return r._$AI(t), r;
        })(e, this.renderRoot, this.renderOptions));
    }
    connectedCallback() {
      var t;
      super.connectedCallback(),
        null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
      var t;
      super.disconnectedCallback(),
        null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
      return Od;
    }
  }
  (qd.finalized = !0),
    (qd._$litElement$ = !0),
    null === (Gd = globalThis.litElementHydrateSupport) ||
      void 0 === Gd ||
      Gd.call(globalThis, { LitElement: qd });
  const Xd = globalThis.litElementPolyfillSupport;
  function Zd(t, e) {
    return (
      t.disableShadowRoot &&
        (e.includes(":host") || (e = `:host ${e}`),
        (e = e.replace(/\:host/g, t.tag))),
      Xc(e)
    );
  }
  var Jd;
  null == Xd || Xd({ LitElement: qd }),
    (null !== (Kd = globalThis.litElementVersions) && void 0 !== Kd
      ? Kd
      : (globalThis.litElementVersions = [])
    ).push("3.3.3"),
    (t.ColorSetName = void 0),
    ((Jd = t.ColorSetName || (t.ColorSetName = {})).Default = "default"),
    (Jd.Material = "material"),
    (Jd.Dark = "dark"),
    (Jd.Blue = "blue");
  const Qd = new Map([
      [
        t.ColorSetName.Default,
        [
          "#3366CC",
          "#DC3912",
          "#FF9900",
          "#109618",
          "#990099",
          "#3B3EAC",
          "#0099C6",
          "#DD4477",
          "#66AA00",
          "#B82E2E",
          "#316395",
          "#994499",
          "#22AA99",
          "#AAAA11",
          "#6633CC",
          "#E67300",
          "#8B0707",
          "#329262",
          "#5574A6",
          "#3B3EAC",
        ],
      ],
      [
        t.ColorSetName.Material,
        [
          "#F44336",
          "#E91E63",
          "#9C27B0",
          "#673AB7",
          "#3F51B5",
          "#2196F3",
          "#03A9F4",
          "#00BCD4",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFEB3B",
          "#FFC107",
          "#FF9800",
          "#FF5722",
          "#795548",
          "#9E9E9E",
          "#607D8B",
          "#148579",
          "#0A414D",
        ],
      ],
      [
        t.ColorSetName.Dark,
        [
          "#19D0CD",
          "#DE196B",
          "#FC5F5C",
          "#FFD771",
          "#DA00FF",
          "#9001CB",
          "#D4BBFF",
          "#72CCFF",
          "#2E96FF",
          "#3B48E0",
          "#0059B2",
          "#2E96FF",
          "#FFC24C",
          "#F38200",
          "#2ABFDE",
          "#1F94AD",
          "#BD2C38",
          "#FF3143",
          "#FF8282",
          "#FFF1F1",
        ],
      ],
      [
        t.ColorSetName.Blue,
        [
          "#BFE3FF",
          "#8BC1F7",
          "#64B4FA",
          "#3492EB",
          "#1170CF",
          "#0353A8",
          "#0353A8",
          "#063A75",
        ],
      ],
    ]),
    tu = t.ColorSetName.Default;
  var eu;
  (t.ThemeName = void 0),
    ((eu = t.ThemeName || (t.ThemeName = {})).Light = "light"),
    (eu.Dark = "dark");
  const iu = new Map([
      [
        t.ThemeName.Light,
        {
          focusColor: "#3267C8",
          gridColor: "#E5E6E6",
          legendSelectedBackgroundColor: "#2b2b2b1a",
          textColorPrimary: "#535759",
          textColorSecondary: "#7D7F7F",
          textActiveColor: "black",
          textInactiveColor: "#7D7F7F",
          tooltipTextColor: "#EFEFEF",
          tooltipBackgroundColor: "#000000F2",
        },
      ],
      [
        t.ThemeName.Dark,
        {
          focusColor: "#3492eb",
          gridColor: "#535759",
          legendSelectedBackgroundColor: "#F1EFEF1a",
          textColorPrimary: "#C5CBCD",
          textColorSecondary: "#7D7F7F",
          textActiveColor: "#FFFFFF",
          textInactiveColor: "#7D7F7F",
          tooltipTextColor: "#000000e6",
          tooltipBackgroundColor: "#EFEFEFF2",
        },
      ],
    ]),
    nu = t.ThemeName.Light;
  function su(t) {
    return t ? iu.get(t) : void 0;
  }
  const ou = {
      bigNumberSuffixes: [
        { number: 1e3, suffix: "K" },
        { number: 1e6, suffix: "M" },
        { number: 1e9, suffix: "G" },
        { number: 1e12, suffix: "T" },
        { number: 1e15, suffix: "P" },
        { number: 1e18, suffix: "E" },
        { number: 1e21, suffix: "Z" },
        { number: 1e24, suffix: "Y" },
      ],
      colorSet: tu,
      colorSets: Qd,
      theme: nu,
      themes: iu,
      set: function (t) {
        return Fc(this, t), this;
      },
      addColorSet: function (t, e) {
        return this.colorSets.set(t, e), this.set({ colorSet: t }), this;
      },
      addTheme: function (t, e) {
        return this.themes.set(t, e), this.set({ theme: t }), this;
      },
      setHttpClient: function (t) {
        return (this.http = t), this;
      },
    },
    ru = "mdw";
  function au(t) {
    var e;
    const i = { method: "get" };
    try {
      Fc(i, JSON.parse(t));
    } catch (e) {
      const n = t.split(/>>/g);
      1 === n.length
        ? (i.url = t)
        : ((i.method = n[0].toLowerCase()),
          (i.url = n[1]),
          (i.requestBody = n.length >= 3 ? JSON.parse(n[2]) : null));
    }
    if (null === (e = i.url) || void 0 === e ? void 0 : e.indexOf("#")) {
      const t = i.url;
      (i.url = Yc(t, "#", 0) || void 0),
        (i.responseQueryPath = Yc(t, "#", "last"));
    }
    return i;
  }
  function lu(t) {
    if (!ou.http) throw new Error("You did not set the http client.");
    const e = au(t);
    e.method || (e.method = "get");
    const i = ou.http[e.method];
    if (!i) throw new Error(`Invalid method "${e.method}" for http.`);
    let n;
    return (
      (n =
        "get" === e.method
          ? i(e.url)
          : i(
              e.url,
              e.requestBody
                ? "string" == typeof e.requestBody
                  ? JSON.parse(e.requestBody)
                  : e.requestBody
                : void 0
            )),
      n.then((t) => (e.responseQueryPath ? jc(t, e.responseQueryPath) : t))
    );
  }
  function hu(t) {
    return ou.colorSets.get(t);
  }
  function cu(t) {
    var e, i;
    return `${
      null !== (e = t.weight) && void 0 !== e ? e : ""
    } ${t.size}px ${null !== (i = t.family) && void 0 !== i ? i : ""}`;
  }
  function du(t, e = 0) {
    return Wr(t, e, ou.bigNumberSuffixes);
  }
  function uu(e) {
    let i;
    switch (e) {
      case t.ChartType.Bar:
      case t.ChartType.Column:
        i = "bar";
        break;
      case t.ChartType.Line:
      case t.ChartType.Area:
      case t.ChartType.Range:
      case "dashed":
      case "dashedArea":
        i = "line";
        break;
      case t.ChartType.Pie:
        i = "pie";
        break;
      case t.ChartType.Gauge:
      case t.ChartType.Donut:
        i = "doughnut";
        break;
      default:
        i = "bar";
    }
    return i;
  }
  class fu {
    constructor(t) {
      (this.chart = t), (this.selectedSegment = []);
    }
    onClick(e, i, n) {
      var s, o, r;
      if (
        !i ||
        !i.length ||
        !(null === (s = this.chart.options.legend) || void 0 === s
          ? void 0
          : s.selectable)
      )
        return;
      const a = i.map((t) => t.index),
        l = { text: n.data.labels && n.data.labels[a[0]], index: a[0] };
      (null === (o = n.legend) || void 0 === o ? void 0 : o.options.onClick) &&
        n.legend.options.onClick.call(n.legend, e, l, n.legend);
      const h = { chart: this.chart, data: this.selectedSegment, event: e },
        c = new Ar(t.ChartEventType.SegmentItemClick, h);
      null === (r = this.chart.rootElement) ||
        void 0 === r ||
        r.dispatchEvent(c);
    }
    setSegmentStatus(t = !1) {
      var e, i, n;
      this.selectedSegment = $c(
        null === (e = this.chart.legend) || void 0 === e
          ? void 0
          : e.selectedItems
      );
      const s =
        null === (i = this.chart.api) || void 0 === i
          ? void 0
          : i.getDatasetMeta(0);
      s &&
        s.data.forEach((t, e) => {
          var i;
          t.selected = Boolean(
            null === (i = this.selectedSegment) || void 0 === i
              ? void 0
              : i.find((t) => t.index === e)
          );
        }),
        t && (null === (n = this.chart.api) || void 0 === n || n.update());
    }
    toCJPlugin(t) {
      return {
        id: "segmentClickable",
        beforeUpdate: (e) => {
          var i, n;
          const s = e.config.data;
          if (
            !(null === (i = null == s ? void 0 : s.datasets) || void 0 === i
              ? void 0
              : i.length)
          )
            return;
          const o = e.getDatasetMeta(0),
            r = t,
            a =
              null === (n = null == o ? void 0 : o.data) || void 0 === n
                ? void 0
                : n.map((t) => {
                    var e;
                    return (
                      null !== (e = null == t ? void 0 : t.selected) &&
                      void 0 !== e &&
                      e
                    );
                  });
          if ("string" != typeof r && (null == r ? void 0 : r.length) > 0) {
            const t = r.map((t, e) => (a[e] ? t : t ? zr(t, 0.4) : void 0));
            s.datasets[0].backgroundColor = t;
          }
          a.every((t) => !1 === t) && (s.datasets[0].backgroundColor = r);
        },
      };
    }
  }
  class pu {
    get selectedItems() {
      return this.items.filter((t) => t.selected);
    }
    constructor(t) {
      (this.chart = t), (this.items = []);
    }
    changeSelectedItems(t) {
      var e;
      const i = t.filter(
          (t) => !this.selectedItems.find((e) => e.text === t.text)
        ),
        n = this.selectedItems.filter((e) => !t.find((t) => t.text === e.text));
      i.forEach((t) => {
        this.selectItem(t);
      }),
        n.forEach((t) => {
          this.unselectItem(t);
        }),
        null === (e = this.chart.segmentClickable) ||
          void 0 === e ||
          e.setSegmentStatus(!0);
    }
    setItemInactiveStyle(t) {
      var e, i, n;
      (null ===
        (n =
          null ===
            (i =
              null === (e = this.chart.options) || void 0 === e
                ? void 0
                : e.legend) || void 0 === i
            ? void 0
            : i.states) || void 0 === n
        ? void 0
        : n.setItemInactiveStyle) &&
        this.chart.options.legend.states.setItemInactiveStyle(t);
    }
    setItemActiveStyle(t) {
      var e, i, n, s;
      (null ===
        (s =
          null ===
            (n =
              null ===
                (i =
                  null === (e = this.chart) || void 0 === e
                    ? void 0
                    : e.options) || void 0 === i
                ? void 0
                : i.legend) || void 0 === n
            ? void 0
            : n.states) || void 0 === s
        ? void 0
        : s.setItemActiveStyle) &&
        this.chart.options.legend.states.setItemActiveStyle(t);
    }
    getChartJSConfiguration(e) {
      var i, n, s, o, r, a, l, h, c, d, u, f;
      const p = this.chart.options;
      return {
        display:
          null ===
            (n =
              null === (i = p.legend) || void 0 === i ? void 0 : i.display) ||
          void 0 === n ||
          n,
        position:
          null !==
            (o =
              null === (s = p.legend) || void 0 === s ? void 0 : s.position) &&
          void 0 !== o
            ? o
            : t.Position.Bottom,
        reverse:
          null !==
            (a =
              null === (r = p.legend) || void 0 === r ? void 0 : r.reverse) &&
          void 0 !== a &&
          a,
        labels: {
          usePointStyle: !0,
          pointStyle:
            null === (l = p.legend) || void 0 === l ? void 0 : l.markerStyle,
          color:
            null !==
              (d =
                null ===
                  (c =
                    null === (h = p.legend) || void 0 === h
                      ? void 0
                      : h.font) || void 0 === c
                  ? void 0
                  : c.color) && void 0 !== d
              ? d
              : null === (u = p.font) || void 0 === u
              ? void 0
              : u.color,
          font: Ic(
            p.font,
            null === (f = p.legend) || void 0 === f ? void 0 : f.font
          ),
          generateLabels: (t) => {
            let i = As.defaults.plugins.legend.labels.generateLabels;
            "function" == typeof (null == e ? void 0 : e.generateLabels) &&
              (i = null == e ? void 0 : e.generateLabels);
            const n = i(t);
            return (
              n.forEach((t) => {
                var e;
                const i = this.toLegendItem(t);
                this.items.find((t) => t.text === i.text) || this.items.push(i),
                  (null === (e = this.chart.options.legend) || void 0 === e
                    ? void 0
                    : e.selectable) ||
                    (t.hidden
                      ? (this.setItemInactiveStyle(i),
                        (t.hidden = !1),
                        (t.fontColor = Dr))
                      : this.setItemActiveStyle(i));
              }),
              (null == e ? void 0 : e.overwriteLabels)
                ? e.overwriteLabels(n, t)
                : n
            );
          },
        },
        onClick: (i, n, s) => {
          var o, r, a, l;
          const h =
            null === (o = this.chart.options.legend) || void 0 === o
              ? void 0
              : o.selectable;
          let c = this.items.find((t) => t.text === n.text);
          c || ((c = this.toLegendItem(n)), this.items.push(c)),
            h &&
              ((null == c ? void 0 : c.selected)
                ? this.unselectItem(c)
                : this.selectItem(c),
              null === (r = this.chart.segmentClickable) ||
                void 0 === r ||
                r.setSegmentStatus()),
            "function" == typeof (null == e ? void 0 : e.onItemClick) &&
              e.onItemClick(this.chart, n);
          const d = { chart: this.chart, data: c, event: i },
            u = new Ar(t.ChartEventType.LegendItemClick, d);
          (null === (a = this.chart.options.legend) || void 0 === a
            ? void 0
            : a.onItemClick) && this.chart.options.legend.onItemClick(u),
            null === (l = this.chart.rootElement) ||
              void 0 === l ||
              l.dispatchEvent(u);
        },
      };
    }
    toLegendItem(t) {
      var e, i;
      const n =
        null === (e = this.chart.options.legend) || void 0 === e
          ? void 0
          : e.selectable;
      return {
        text: t.text,
        color: t.fillStyle,
        index: t.index,
        hidden: t.hidden,
        selected: n
          ? null === (i = this.items.find((e) => e.text === t.text)) ||
            void 0 === i
            ? void 0
            : i.selected
          : void 0,
      };
    }
    setItemSelectedStyle(t) {
      var e, i, n, s, o;
      const r =
        null === (e = this.chart.api) || void 0 === e ? void 0 : e.legend;
      if (!r) return;
      const a =
        null === (i = r.legendItems) || void 0 === i
          ? void 0
          : i.findIndex((e) => e.text === t.text);
      let l =
        null === (n = r.chart.canvas.parentElement) || void 0 === n
          ? void 0
          : n.querySelector("#legend-index-" + a);
      if (r.chart.canvas.parentElement)
        if (t.selected) {
          l ||
            ((l = document.createElement("div")),
            l.setAttribute("id", "legend-index-" + a));
          const e = r.chart.canvas.getBoundingClientRect(),
            i =
              null === (s = r.chart.canvas.parentElement) || void 0 === s
                ? void 0
                : s.getBoundingClientRect(),
            n = e.left - i.left,
            h = e.top - i.top,
            { left: c, top: d, width: u, height: f } = r.legendHitBoxes[a],
            p = `${c - 7 + n}px`,
            g = `${d - 4 + h}px`,
            m = `${u + 14}px`,
            v = `${f + 8}px`,
            b =
              null === (o = this.chart.getCurrentTheme()) || void 0 === o
                ? void 0
                : o.legendSelectedBackgroundColor;
          l.setAttribute(
            "style",
            `left:${p};top:${g};width:${m};height:${v};background-color:${b};pointer-events:none;position:absolute;border-radius:10px;`
          ),
            l.setAttribute(
              "aria-label",
              `${t.text}, ${a + 1} of ${r.legendHitBoxes.length}`
            ),
            r.chart.canvas.insertAdjacentElement("afterend", l);
        } else null == l || l.remove();
    }
    resetSelectedLegendItems() {
      this.selectedItems.forEach((t) => {
        this.resetStylesForSelectedItem(t);
      });
    }
    selectItem(t) {
      (t.selected = !0), this.setItemSelectedStyle(t);
    }
    unselectItem(t) {
      t.selected = !1;
      const e = this.items.find((e) => e.text === t.text);
      e && (e.selected = !1), this.removeBackgroundForSelectedItem(t);
    }
    resetStylesForSelectedItem(t) {
      var e;
      (null === (e = this.chart.api) || void 0 === e ? void 0 : e.legend) &&
        (this.removeBackgroundForSelectedItem(t), this.setItemSelectedStyle(t));
    }
    removeBackgroundForSelectedItem(t) {
      var e, i, n, s, o;
      const r =
        null === (e = this.chart.api) || void 0 === e ? void 0 : e.legend;
      if (r) {
        const e =
            null ===
              (s =
                null ===
                  (n =
                    null === (i = this.chart.api) || void 0 === i
                      ? void 0
                      : i.legend) || void 0 === n
                  ? void 0
                  : n.legendItems) || void 0 === s
              ? void 0
              : s.findIndex((e) => e.text === t.text),
          a =
            null === (o = r.chart.canvas.parentElement) || void 0 === o
              ? void 0
              : o.querySelector("#legend-index-" + e);
        if (a) return a.remove(), !0;
      }
      return !1;
    }
  }
  class gu {
    get options() {
      return this._options;
    }
    constructor(t, e, i) {
      (this.container = t),
        (this.data = e),
        (this.countColored = 0),
        (this._options = Ic({}, gu.defaults, this.getDefaultOptions(), i));
    }
    render() {
      this.destroy(), this.init();
      const t = this.getConfiguration();
      (this.api = new As(this.container, t)),
        (this.canvasElement = this.api.canvas),
        (this.rootElement =
          this.canvasElement.parentElement || this.api.canvas),
        this.calculateMaxLimitTicks && this.calculateMaxLimitTicks(t.options),
        (this.api.data = t.data),
        (this.api.options = t.options),
        this.api.update();
    }
    resize() {
      var t, e;
      null === (t = this.api) || void 0 === t || t.resize(),
        null === (e = this.legend) ||
          void 0 === e ||
          e.resetSelectedLegendItems();
    }
    update() {
      var t;
      null === (t = this.api) || void 0 === t || t.update();
    }
    destroy() {
      var t;
      (this.colors = void 0),
        (this.lastColor = void 0),
        (this.countColored = 0),
        null === (t = this.api) || void 0 === t || t.destroy();
    }
    changeTheme(t) {
      this.setTheme(t);
    }
    getCurrentTheme() {
      return (
        (this._theme = su(this.currentTheme)),
        this._theme ||
          (console.warn(
            `No theme found for name "${this.currentTheme}". Will use light theme instead.`
          ),
          (this._theme = iu.get(t.ThemeName.Light))),
        this._theme
      );
    }
    enableLegend() {
      this.legend = new pu(this);
    }
    enableSegmentClickable() {
      this.segmentClickable = new fu(this);
    }
    getColorsForKeys(t) {
      return t.map((e) => this.getColorForKey(e, t.length));
    }
    getCJFont(...t) {
      return (
        this.options.font && t.push(this.options.font), t.reverse(), Ic(...t)
      );
    }
    formatBigNumber(t) {
      return du(t, this.options.valuePrecision);
    }
    formatValueWithUnit(t, e) {
      const i = e || this.options.valueUnit;
      return `${this.formatValue(t)}${i ? " " + i : ""}`;
    }
    getValueWithUnit(t, e) {
      let i = new Intl.NumberFormat().format(t || 0);
      return e && (i += " " + this.options.valueUnit), i;
    }
    init() {
      var t, e;
      this.initTheme(),
        this.initColors(),
        (As.defaults.font = this.getCJFont()),
        (As.defaults.color = (
          null === (t = this.options.font) || void 0 === t ? void 0 : t.color
        )
          ? null === (e = this.options.font) || void 0 === e
            ? void 0
            : e.color
          : this.getCurrentTheme().textColorPrimary);
    }
    initTheme() {
      var t;
      this.setTheme(
        null !== (t = this.options.theme) && void 0 !== t ? t : ou.theme
      );
    }
    setTheme(t) {
      const e = this.currentTheme && this.currentTheme !== t;
      (this.currentTheme = t),
        e && (this.onThemeChanging(), this.api && this.render());
    }
    getColorForKey(e, i) {
      var n, s, o;
      let r = "";
      if (
        ((null === (n = this.options) || void 0 === n
          ? void 0
          : n.colorMapping) && (r = this.options.colorMapping[e]),
        !r &&
          this.colors &&
          this.colors.length > this.countColored &&
          ((r = this.colors[this.countColored]), (this.countColored += 1)),
        !r && this.colors)
      )
        switch (
          null === (s = this.options) || void 0 === s ? void 0 : s.colorMode
        ) {
          case t.ColorMode.Repeat:
            (r =
              this.colors[
                this.countColored %
                  (null === (o = this.colors) || void 0 === o
                    ? void 0
                    : o.length)
              ]),
              (this.countColored += 1);
            break;
          case t.ColorMode.Darken:
            r = jr(this.lastColor, 4 / i);
            break;
          case t.ColorMode.Lighten:
            r = $r(this.lastColor, 4 / i);
            break;
          case t.ColorMode.Random:
          default:
            r = Nr();
        }
      return (this.lastColor = r), r;
    }
    initColors() {
      var t, e;
      if (this.colors) return;
      if (null === (t = this.options) || void 0 === t ? void 0 : t.colors)
        return void (this.colors = this.options.colors);
      let i = { name: ou.colorSet, colors: ou.colorSets.get(ou.colorSet) };
      if (null === (e = this.options) || void 0 === e ? void 0 : e.colorSet) {
        if (!ou.colorSets.has(this.options.colorSet))
          throw new Error(
            `There is no definition for colorset "${this.options.colorSet}", we will use the default colorset instead.`
          );
        i = {
          name: this.options.colorSet,
          colors: ou.colorSets.get(this.options.colorSet),
        };
      }
      (this.colors = i.colors || []),
        (this.lastColor = this.colors[this.colors.length - 1]);
    }
    formatValue(t) {
      return Wr(t, this.options.valuePrecision || 0);
    }
    onThemeChanging() {}
  }
  gu.defaults = {
    font: {
      size: 13,
      family: "CiscoSansTT Regular,Helvetica Neue,Helvetica,Arial,sans-serif",
      style: "normal",
      weight: void 0,
      lineHeight: 1.2,
    },
    valuePrecision: 2,
  };
  class mu {
    constructor() {
      (this.state = {
        currentState: { datasetIndex: 0, index: -1 },
        get() {
          return this.currentState;
        },
        set(t) {
          this.currentState = t;
        },
        compare(t) {
          const e = this.currentState.datasetIndex === t.datasetIndex,
            i = this.currentState.index === t.index;
          return e && i;
        },
      }),
        (this.currentBorderColors = []),
        (this.currentBorderWidths = []),
        (this.currentChartType = ""),
        (this.currentActiveBorderWidth = 2),
        (this.currentActiveBorderColor = ""),
        (this.whiteColor = "white");
    }
    toCJPlugin(t = "blue") {
      return (
        (this.currentActiveBorderColor = t),
        {
          id: "a11yChart",
          start: (t, e) => {
            t.canvas.addEventListener("focus", () => this.onFocus(t)),
              t.canvas.addEventListener("blur", () => this.onBlur(t)),
              this.setup(t, e);
          },
          beforeInit: (t) => {
            var e;
            const i = [
              "keydown",
              "mousemove",
              "mouseenter",
              "mouseout",
              "click",
            ];
            (
              null === (e = t.config.options) || void 0 === e
                ? void 0
                : e.events
            )
              ? (t.config.options.events = [
                  ...new Set([...t.config.options.events, ...i]),
                ])
              : (t.config.options.events = [...i]);
          },
          beforeEvent: (t, e) => {
            const { event: i } = e;
            if ("keydown" === i.type) this.onKeyDown(i, t);
            else {
              const e = t.getElementsAtEventForMode(
                i,
                "index",
                { intersect: !0 },
                !0
              )[0];
              this.handleActivePoint(e);
            }
            this.updateA11yLabel(t);
          },
        }
      );
    }
    updateActivePoint(t, e, i) {
      var n, s;
      if (!(e < 0 || i < 0)) {
        if (
          (t.setActiveElements([{ datasetIndex: e, index: i }]),
          t.tooltip &&
            t.tooltip.setActiveElements([{ datasetIndex: e, index: i }], {
              x: 0,
              y: 0,
            }),
          this.state.set({ datasetIndex: e, index: i }),
          "" === this.currentChartType)
        ) {
          const i =
            null === (n = t.data.datasets[e]) || void 0 === n
              ? void 0
              : n.data.length;
          this.currentChartType =
            (null === (s = t.data.datasets[e]) || void 0 === s
              ? void 0
              : s.type) || "";
          const o = this.getDatasetBorderStyleAttribute("width");
          (this.currentBorderColors = []),
            (this.currentBorderWidths = []),
            t.data.datasets.forEach((t) => {
              var e, n, s, r;
              this.hasNotXYType()
                ? null === (e = this.currentBorderColors) ||
                  void 0 === e ||
                  e.push(Array(i).fill(this.whiteColor))
                : t.backgroundColor
                ? "string" == typeof t.backgroundColor
                  ? null === (n = this.currentBorderColors) ||
                    void 0 === n ||
                    n.push(Array(i).fill(t.backgroundColor))
                  : null === (s = this.currentBorderColors) ||
                    void 0 === s ||
                    s.push(t.backgroundColor)
                : null === (r = this.currentBorderColors) ||
                  void 0 === r ||
                  r.push(Array(i).fill("")),
                (this.currentBorderWidths = t[o]
                  ? "number" == typeof t[o]
                    ? Array(i).fill(t[o])
                    : t[o]
                  : Array(i).fill(0));
            });
        }
        this.updateChart(t, e, i);
      }
    }
    onFocus(t) {
      if (!this.state.get()) {
        const e = 0,
          i = 0;
        this.state.set({ datasetIndex: e, index: i }),
          this.updateActivePoint(t, e, i);
      }
    }
    onBlur(e) {
      const { index: i } = this.state.get();
      -1 !== i &&
        (this.state.set({ datasetIndex: 0, index: -1 }),
        e.data.datasets.forEach((e, i) => {
          this.currentBorderColors &&
            ((e[this.getDatasetBorderStyleAttribute("color")] =
              this.currentBorderColors[i]),
            this.currentChartType !== t.ChartType.Line &&
              (e[this.getDatasetBorderStyleAttribute("width")] =
                this.currentBorderWidths[i]));
        }),
        (e.tooltip._active = []),
        e.tooltip.update(!0),
        e.update());
    }
    onKeyDown(e, i) {
      const { key: n } = e.native,
        { datasetIndex: s, index: o } = this.state.get(),
        r = i.config._config.data.datasets[s],
        a = i.config._config.data.datasets.length;
      n === t.KeyboardCode.ArrowRight
        ? this.handleRightKey(i, s, o, r, a)
        : n === t.KeyboardCode.ArrowLeft
        ? this.handleLeftKey(i, s, o, r, a)
        : n === t.KeyboardCode.ArrowUp
        ? this.handleUpKey(i, s, o)
        : n === t.KeyboardCode.ArrowDown && this.handleDownKey(i, s, o);
    }
    setup(e, i) {
      var n;
      const { canvas: s } = e;
      s.setAttribute("role", "application"),
        s.setAttribute("tabindex", "0"),
        s.setAttribute(
          "aria-label",
          (null == i ? void 0 : i.chartLabel) ||
            `${
              null === (n = e.config) || void 0 === n ? void 0 : n._config.type
            } chart`
        ),
        s.setAttribute("aria-describedby", "chartjs-a11y-label"),
        s.addEventListener("keydown", (e) => {
          const { key: i } = e;
          (i !== t.KeyboardCode.ArrowLeft &&
            i !== t.KeyboardCode.ArrowRight &&
            i !== t.KeyboardCode.ArrowUp &&
            i !== t.KeyboardCode.ArrowDown) ||
            e.preventDefault();
        }),
        document.getElementById("chartjs-a11y-label") ||
          this.createA11yElement();
    }
    createA11yElement() {
      const t = document.createElement("div");
      t.setAttribute("id", "chartjs-a11y-label"),
        t.setAttribute("tabindex", "-1"),
        t.setAttribute("role", "status"),
        (t.style.cssText =
          "position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;"),
        document.body.appendChild(t);
    }
    updateChart(e, i, n) {
      e.data.datasets.forEach((e, s) => {
        if (this.currentBorderColors) {
          const t = this.currentBorderColors[s];
          if (t)
            if (i === s) {
              const i = t.map((t, e) =>
                e === n ? this.currentActiveBorderColor : t
              );
              e[this.getDatasetBorderStyleAttribute("color")] = i;
            } else e[this.getDatasetBorderStyleAttribute("color")] = t;
        }
        this.currentBorderWidths &&
          this.currentChartType !== t.ChartType.Line &&
          (e.borderWidth =
            i === s
              ? this.currentBorderWidths.map((t, e) =>
                  e === n ? this.currentActiveBorderWidth : t
                )
              : this.currentBorderWidths[i]);
      }),
        e.update();
    }
    handleRightKey(t, e, i, n, s) {
      if (t.isDatasetVisible(e))
        if (i === n.data.length - 1 && e === s - 1)
          this.updateActivePoint(t, 0, 0);
        else if (i !== n.data.length - 1 || t.isDatasetVisible(e + 1))
          i < n.data.length - 1
            ? this.updateActivePoint(t, e, i + 1)
            : s > 1 && e < s - 1
            ? this.updateActivePoint(t, e + 1, 0)
            : this.updateActivePoint(t, e, 0);
        else {
          const i = this.findNextVisibleDataset(t, e);
          this.updateActivePoint(t, i, 0);
        }
      else {
        const i = this.findNextVisibleDataset(t, e);
        this.updateActivePoint(t, i, 0);
      }
    }
    handleLeftKey(t, e, i, n, s) {
      if (t.isDatasetVisible(e))
        if (0 === i && 0 === e)
          this.updateActivePoint(t, s - 1, n.data.length - 1);
        else if (0 !== i || t.isDatasetVisible(e - 1))
          if (i > 0) this.updateActivePoint(t, e, i - 1);
          else if (s > 1 && e > 0) {
            const i = t.config.data.datasets[e - 1];
            this.updateActivePoint(t, e - 1, i.data.length - 1);
          } else this.updateActivePoint(t, e, n.data.length - 1);
        else {
          const i = this.findPrevVisibleDataset(t, e),
            n = t.config.data.datasets[i];
          this.updateActivePoint(t, i, n.data.length - 1);
        }
      else {
        const i = this.findPrevVisibleDataset(t, e),
          n = t.config.data.datasets[i];
        this.updateActivePoint(t, i, n.data.length - 1);
      }
    }
    handleUpKey(t, e, i) {
      const n = this.findPrevVisibleDataset(t, e);
      this.updateActivePoint(t, n, i);
    }
    handleDownKey(t, e, i) {
      const n = this.findNextVisibleDataset(t, e);
      this.updateActivePoint(t, n, i);
    }
    findPrevVisibleDataset(t, e) {
      return (
        0 === e ? (e = t.config.data.datasets.length - 1) : (e -= 1),
        t.isDatasetVisible(e) ? e : this.findPrevVisibleDataset(t, e)
      );
    }
    findNextVisibleDataset(t, e) {
      return (
        e === t.config.data.datasets.length - 1 ? (e = 0) : (e += 1),
        t.isDatasetVisible(e) ? e : this.findNextVisibleDataset(t, e)
      );
    }
    handleActivePoint(t) {
      ((t && !this.state.get()) || (t && !this.state.compare(t))) &&
        this.state.set(t);
    }
    updateA11yLabel(t) {
      var e, i;
      const { datasetIndex: n, index: s } = this.state.get(),
        o =
          null === (e = t.config.data.datasets[n]) || void 0 === e
            ? void 0
            : e.label,
        r = t.config.data.labels && t.config.data.labels[s],
        a =
          null === (i = t.config.data.datasets[n]) || void 0 === i
            ? void 0
            : i.data[s],
        l = document.getElementById("chartjs-a11y-label");
      l && (l.textContent = `${r}, ${o},  ${a}`);
    }
    hasNotXYType() {
      return (
        this.currentChartType === t.ChartType.Donut ||
        this.currentChartType === t.ChartType.Pie ||
        this.currentChartType === t.ChartType.Gauge ||
        "doughnut" === this.currentChartType
      );
    }
    getDatasetBorderStyleAttribute(e) {
      var i;
      const n = {
          color: {
            [t.ChartType.Line]: "pointBorderColor",
            default: "borderColor",
          },
          width: {
            [t.ChartType.Line]: "pointBorderWidth",
            default: "borderWidth",
          },
        },
        s =
          null !== (i = this.currentChartType) && void 0 !== i ? i : "default";
      return n[e][s] || n[e].default;
    }
  }
  class vu {
    constructor() {
      (this.hitBoxes = []),
        (this.focusBoxMargin = 0),
        (this.focusBox = null),
        (this.focusColor = "");
    }
    toCJPlugin(t = "blue") {
      return {
        id: "a11yLegend",
        afterInit: (e, i) => {
          this.initialize(e, i.margin, t), this.updateForLegends();
        },
        beforeDraw: (e, i) => {
          var n, s;
          if (
            (this.chart || this.initialize(e, i.margin, t),
            !(null ===
              (s =
                null === (n = e.options.plugins) || void 0 === n
                  ? void 0
                  : n.legend) || void 0 === s
              ? void 0
              : s.display))
          )
            return this.suppressFocusBox();
          this.reviveFocusBox(),
            (this.focusBoxMargin = i.margin || 4),
            this.updateForLegends();
        },
        afterDestroy: () => {
          this.chart = null;
        },
        defaults: { margin: 4 },
      };
    }
    initialize(t, e, i) {
      (this.focusBoxMargin = e),
        (this.chart = t),
        (this.focusColor = i),
        (this.focusBox = this.generateFocusBox()),
        t.canvas.insertAdjacentElement("afterend", this.focusBox);
    }
    updateForLegends() {
      var t, e;
      const { legend: i } = this.chart;
      if (!(null == i ? void 0 : i.legendItems)) return this.suppressFocusBox();
      this.hitBoxes =
        null !==
          (e =
            null === (t = null == i ? void 0 : i.legendItems) || void 0 === t
              ? void 0
              : t.map(({ text: t }, e) => {
                  var n, s;
                  return Object.assign(
                    Object.assign(
                      {},
                      null !==
                        (s =
                          null === (n = i.legendHitBoxes) || void 0 === n
                            ? void 0
                            : n[e]) && void 0 !== s
                        ? s
                        : {}
                    ),
                    { text: t }
                  );
                })) && void 0 !== e
          ? e
          : [];
    }
    suppressFocusBox() {
      var t;
      null === (t = this.focusBox) ||
        void 0 === t ||
        t.setAttribute("tabIndex", "-1");
    }
    reviveFocusBox() {
      var t;
      null === (t = this.focusBox) ||
        void 0 === t ||
        t.setAttribute("tabIndex", "0");
    }
    generateFocusBox() {
      const e = document.createElement("div");
      e.setAttribute("tabIndex", "0"),
        e.setAttribute("data-legend-index", "0"),
        e.setAttribute("role", "option"),
        e.setAttribute("aria-selected", "true");
      const i = () => {
          e.style.left = "-1000px";
        },
        n = (t) => {
          const i = Number(e.getAttribute("data-legend-index"));
          if (["pie", "doughnut"].includes(this.chart.config.type))
            if (this.chart.config.options.isLegendClick) {
              const t = {
                key: this.chart.config.data.labels[i],
                value: this.chart.config.data.datasets[0].data[i],
              };
              this.chart.config.options.onLegendClick(t);
            } else {
              this.chart.toggleDataVisibility(i);
              const t = this.chart.getDataVisibility(i);
              e.setAttribute("aria-selected", String(t));
            }
          else
            this.chart.isDatasetVisible(i)
              ? (this.chart.hide(i), e.setAttribute("aria-selected", "false"))
              : (this.chart.show(i), e.setAttribute("aria-selected", "true"));
          this.chart.update(), t.preventDefault(), t.stopPropagation();
        },
        s = () => {
          const t = Number(e.getAttribute("data-legend-index"));
          if (isNaN(t)) return;
          const {
              left: i,
              top: n,
              width: s,
              height: o,
              text: r,
            } = this.hitBoxes[t],
            a = i - this.focusBoxMargin + "px",
            l = n - this.focusBoxMargin + "px",
            h = `${s + 2 * this.focusBoxMargin}px`,
            c = `${o + 2 * this.focusBoxMargin}px`;
          e.setAttribute(
            "style",
            `position:absolute; left: ${a}; top:${l}; width:${h}; height:${c}; outline-color:${this.focusColor};`
          ),
            e.setAttribute(
              "aria-label",
              `${r}, ${t + 1} of ${this.hitBoxes.length}`
            );
        };
      return (
        i(),
        e.addEventListener("focus", s),
        e.addEventListener("blur", i),
        e.addEventListener("keydown", (i) => {
          const o = Number(e.getAttribute("data-legend-index")),
            r = this.hitBoxes.length - 1;
          if (
            i.key === t.KeyboardCode.ArrowRight ||
            i.key === t.KeyboardCode.ArrowDown
          ) {
            if ((i.preventDefault(), i.stopPropagation(), o >= r)) return;
            return e.setAttribute("data-legend-index", String(o + 1)), void s();
          }
          if (
            i.key === t.KeyboardCode.ArrowLeft ||
            i.key === t.KeyboardCode.ArrowUp
          ) {
            if ((i.preventDefault(), i.stopPropagation(), o <= 0)) return;
            return e.setAttribute("data-legend-index", String(o - 1)), void s();
          }
          (" " !== i.key && i.key !== t.KeyboardCode.Enter) || n(i);
        }),
        e.addEventListener("click", n),
        e
      );
    }
  }
  function bu(t) {
    throw new Error(
      'Could not dynamically require "' +
        t +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  var yu = { exports: {} };
  !(function (t, e) {
    t.exports = (function () {
      var e, i;
      function n() {
        return e.apply(null, arguments);
      }
      function s(t) {
        e = t;
      }
      function o(t) {
        return (
          t instanceof Array ||
          "[object Array]" === Object.prototype.toString.call(t)
        );
      }
      function r(t) {
        return (
          null != t && "[object Object]" === Object.prototype.toString.call(t)
        );
      }
      function a(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      function l(t) {
        if (Object.getOwnPropertyNames)
          return 0 === Object.getOwnPropertyNames(t).length;
        var e;
        for (e in t) if (a(t, e)) return !1;
        return !0;
      }
      function h(t) {
        return void 0 === t;
      }
      function c(t) {
        return (
          "number" == typeof t ||
          "[object Number]" === Object.prototype.toString.call(t)
        );
      }
      function d(t) {
        return (
          t instanceof Date ||
          "[object Date]" === Object.prototype.toString.call(t)
        );
      }
      function u(t, e) {
        var i,
          n = [],
          s = t.length;
        for (i = 0; i < s; ++i) n.push(e(t[i], i));
        return n;
      }
      function f(t, e) {
        for (var i in e) a(e, i) && (t[i] = e[i]);
        return (
          a(e, "toString") && (t.toString = e.toString),
          a(e, "valueOf") && (t.valueOf = e.valueOf),
          t
        );
      }
      function p(t, e, i, n) {
        return Gi(t, e, i, n, !0).utc();
      }
      function g() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        };
      }
      function m(t) {
        return null == t._pf && (t._pf = g()), t._pf;
      }
      function v(t) {
        if (null == t._isValid) {
          var e = m(t),
            n = i.call(e.parsedDateParts, function (t) {
              return null != t;
            }),
            s =
              !isNaN(t._d.getTime()) &&
              e.overflow < 0 &&
              !e.empty &&
              !e.invalidEra &&
              !e.invalidMonth &&
              !e.invalidWeekday &&
              !e.weekdayMismatch &&
              !e.nullInput &&
              !e.invalidFormat &&
              !e.userInvalidated &&
              (!e.meridiem || (e.meridiem && n));
          if (
            (t._strict &&
              (s =
                s &&
                0 === e.charsLeftOver &&
                0 === e.unusedTokens.length &&
                void 0 === e.bigHour),
            null != Object.isFrozen && Object.isFrozen(t))
          )
            return s;
          t._isValid = s;
        }
        return t._isValid;
      }
      function b(t) {
        var e = p(NaN);
        return null != t ? f(m(e), t) : (m(e).userInvalidated = !0), e;
      }
      i = Array.prototype.some
        ? Array.prototype.some
        : function (t) {
            var e,
              i = Object(this),
              n = i.length >>> 0;
            for (e = 0; e < n; e++)
              if (e in i && t.call(this, i[e], e, i)) return !0;
            return !1;
          };
      var y = (n.momentProperties = []),
        x = !1;
      function _(t, e) {
        var i,
          n,
          s,
          o = y.length;
        if (
          (h(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
          h(e._i) || (t._i = e._i),
          h(e._f) || (t._f = e._f),
          h(e._l) || (t._l = e._l),
          h(e._strict) || (t._strict = e._strict),
          h(e._tzm) || (t._tzm = e._tzm),
          h(e._isUTC) || (t._isUTC = e._isUTC),
          h(e._offset) || (t._offset = e._offset),
          h(e._pf) || (t._pf = m(e)),
          h(e._locale) || (t._locale = e._locale),
          o > 0)
        )
          for (i = 0; i < o; i++) h((s = e[(n = y[i])])) || (t[n] = s);
        return t;
      }
      function w(t) {
        _(this, t),
          (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
          this.isValid() || (this._d = new Date(NaN)),
          !1 === x && ((x = !0), n.updateOffset(this), (x = !1));
      }
      function k(t) {
        return t instanceof w || (null != t && null != t._isAMomentObject);
      }
      function C(t) {
        !1 === n.suppressDeprecationWarnings &&
          "undefined" != typeof console &&
          console.warn &&
          console.warn("Deprecation warning: " + t);
      }
      function S(t, e) {
        var i = !0;
        return f(function () {
          if (
            (null != n.deprecationHandler && n.deprecationHandler(null, t), i)
          ) {
            var s,
              o,
              r,
              l = [],
              h = arguments.length;
            for (o = 0; o < h; o++) {
              if (((s = ""), "object" == typeof arguments[o])) {
                for (r in ((s += "\n[" + o + "] "), arguments[0]))
                  a(arguments[0], r) &&
                    (s += r + ": " + arguments[0][r] + ", ");
                s = s.slice(0, -2);
              } else s = arguments[o];
              l.push(s);
            }
            C(
              t +
                "\nArguments: " +
                Array.prototype.slice.call(l).join("") +
                "\n" +
                new Error().stack
            ),
              (i = !1);
          }
          return e.apply(this, arguments);
        }, e);
      }
      var M,
        A = {};
      function D(t, e) {
        null != n.deprecationHandler && n.deprecationHandler(t, e),
          A[t] || (C(e), (A[t] = !0));
      }
      function T(t) {
        return (
          ("undefined" != typeof Function && t instanceof Function) ||
          "[object Function]" === Object.prototype.toString.call(t)
        );
      }
      function O(t) {
        var e, i;
        for (i in t)
          a(t, i) && (T((e = t[i])) ? (this[i] = e) : (this["_" + i] = e));
        (this._config = t),
          (this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          ));
      }
      function P(t, e) {
        var i,
          n = f({}, t);
        for (i in e)
          a(e, i) &&
            (r(t[i]) && r(e[i])
              ? ((n[i] = {}), f(n[i], t[i]), f(n[i], e[i]))
              : null != e[i]
              ? (n[i] = e[i])
              : delete n[i]);
        for (i in t) a(t, i) && !a(e, i) && r(t[i]) && (n[i] = f({}, n[i]));
        return n;
      }
      function E(t) {
        null != t && this.set(t);
      }
      (n.suppressDeprecationWarnings = !1),
        (n.deprecationHandler = null),
        (M = Object.keys
          ? Object.keys
          : function (t) {
              var e,
                i = [];
              for (e in t) a(t, e) && i.push(e);
              return i;
            });
      var L = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      };
      function R(t, e, i) {
        var n = this._calendar[t] || this._calendar.sameElse;
        return T(n) ? n.call(e, i) : n;
      }
      function I(t, e, i) {
        var n = "" + Math.abs(t),
          s = e - n.length;
        return (
          (t >= 0 ? (i ? "+" : "") : "-") +
          Math.pow(10, Math.max(0, s)).toString().substr(1) +
          n
        );
      }
      var F =
          /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        N = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        z = {},
        $ = {};
      function j(t, e, i, n) {
        var s = n;
        "string" == typeof n &&
          (s = function () {
            return this[n]();
          }),
          t && ($[t] = s),
          e &&
            ($[e[0]] = function () {
              return I(s.apply(this, arguments), e[1], e[2]);
            }),
          i &&
            ($[i] = function () {
              return this.localeData().ordinal(s.apply(this, arguments), t);
            });
      }
      function Y(t) {
        return t.match(/\[[\s\S]/)
          ? t.replace(/^\[|\]$/g, "")
          : t.replace(/\\/g, "");
      }
      function W(t) {
        var e,
          i,
          n = t.match(F);
        for (e = 0, i = n.length; e < i; e++)
          $[n[e]] ? (n[e] = $[n[e]]) : (n[e] = Y(n[e]));
        return function (e) {
          var s,
            o = "";
          for (s = 0; s < i; s++) o += T(n[s]) ? n[s].call(e, t) : n[s];
          return o;
        };
      }
      function B(t, e) {
        return t.isValid()
          ? ((e = V(e, t.localeData())), (z[e] = z[e] || W(e)), z[e](t))
          : t.localeData().invalidDate();
      }
      function V(t, e) {
        var i = 5;
        function n(t) {
          return e.longDateFormat(t) || t;
        }
        for (N.lastIndex = 0; i >= 0 && N.test(t); )
          (t = t.replace(N, n)), (N.lastIndex = 0), (i -= 1);
        return t;
      }
      var H = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      };
      function U(t) {
        var e = this._longDateFormat[t],
          i = this._longDateFormat[t.toUpperCase()];
        return e || !i
          ? e
          : ((this._longDateFormat[t] = i
              .match(F)
              .map(function (t) {
                return "MMMM" === t || "MM" === t || "DD" === t || "dddd" === t
                  ? t.slice(1)
                  : t;
              })
              .join("")),
            this._longDateFormat[t]);
      }
      var G = "Invalid date";
      function K() {
        return this._invalidDate;
      }
      var q = "%d",
        X = /\d{1,2}/;
      function Z(t) {
        return this._ordinal.replace("%d", t);
      }
      var J = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      };
      function Q(t, e, i, n) {
        var s = this._relativeTime[i];
        return T(s) ? s(t, e, i, n) : s.replace(/%d/i, t);
      }
      function tt(t, e) {
        var i = this._relativeTime[t > 0 ? "future" : "past"];
        return T(i) ? i(e) : i.replace(/%s/i, e);
      }
      var et = {};
      function it(t, e) {
        var i = t.toLowerCase();
        et[i] = et[i + "s"] = et[e] = t;
      }
      function nt(t) {
        return "string" == typeof t ? et[t] || et[t.toLowerCase()] : void 0;
      }
      function st(t) {
        var e,
          i,
          n = {};
        for (i in t) a(t, i) && (e = nt(i)) && (n[e] = t[i]);
        return n;
      }
      var ot = {};
      function rt(t, e) {
        ot[t] = e;
      }
      function at(t) {
        var e,
          i = [];
        for (e in t) a(t, e) && i.push({ unit: e, priority: ot[e] });
        return (
          i.sort(function (t, e) {
            return t.priority - e.priority;
          }),
          i
        );
      }
      function lt(t) {
        return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
      }
      function ht(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      }
      function ct(t) {
        var e = +t,
          i = 0;
        return 0 !== e && isFinite(e) && (i = ht(e)), i;
      }
      function dt(t, e) {
        return function (i) {
          return null != i
            ? (ft(this, t, i), n.updateOffset(this, e), this)
            : ut(this, t);
        };
      }
      function ut(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
      }
      function ft(t, e, i) {
        t.isValid() &&
          !isNaN(i) &&
          ("FullYear" === e &&
          lt(t.year()) &&
          1 === t.month() &&
          29 === t.date()
            ? ((i = ct(i)),
              t._d["set" + (t._isUTC ? "UTC" : "") + e](
                i,
                t.month(),
                Qt(i, t.month())
              ))
            : t._d["set" + (t._isUTC ? "UTC" : "") + e](i));
      }
      function pt(t) {
        return T(this[(t = nt(t))]) ? this[t]() : this;
      }
      function gt(t, e) {
        if ("object" == typeof t) {
          var i,
            n = at((t = st(t))),
            s = n.length;
          for (i = 0; i < s; i++) this[n[i].unit](t[n[i].unit]);
        } else if (T(this[(t = nt(t))])) return this[t](e);
        return this;
      }
      var mt,
        vt = /\d/,
        bt = /\d\d/,
        yt = /\d{3}/,
        xt = /\d{4}/,
        _t = /[+-]?\d{6}/,
        wt = /\d\d?/,
        kt = /\d\d\d\d?/,
        Ct = /\d\d\d\d\d\d?/,
        St = /\d{1,3}/,
        Mt = /\d{1,4}/,
        At = /[+-]?\d{1,6}/,
        Dt = /\d+/,
        Tt = /[+-]?\d+/,
        Ot = /Z|[+-]\d\d:?\d\d/gi,
        Pt = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Et = /[+-]?\d+(\.\d{1,3})?/,
        Lt =
          /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
      function Rt(t, e, i) {
        mt[t] = T(e)
          ? e
          : function (t, n) {
              return t && i ? i : e;
            };
      }
      function It(t, e) {
        return a(mt, t) ? mt[t](e._strict, e._locale) : new RegExp(Ft(t));
      }
      function Ft(t) {
        return Nt(
          t
            .replace("\\", "")
            .replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function (t, e, i, n, s) {
                return e || i || n || s;
              }
            )
        );
      }
      function Nt(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      mt = {};
      var zt = {};
      function $t(t, e) {
        var i,
          n,
          s = e;
        for (
          "string" == typeof t && (t = [t]),
            c(e) &&
              (s = function (t, i) {
                i[e] = ct(t);
              }),
            n = t.length,
            i = 0;
          i < n;
          i++
        )
          zt[t[i]] = s;
      }
      function jt(t, e) {
        $t(t, function (t, i, n, s) {
          (n._w = n._w || {}), e(t, n._w, n, s);
        });
      }
      function Yt(t, e, i) {
        null != e && a(zt, t) && zt[t](e, i._a, i, t);
      }
      var Wt,
        Bt = 0,
        Vt = 1,
        Ht = 2,
        Ut = 3,
        Gt = 4,
        Kt = 5,
        qt = 6,
        Xt = 7,
        Zt = 8;
      function Jt(t, e) {
        return ((t % e) + e) % e;
      }
      function Qt(t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        var i = Jt(e, 12);
        return (
          (t += (e - i) / 12), 1 === i ? (lt(t) ? 29 : 28) : 31 - ((i % 7) % 2)
        );
      }
      (Wt = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (t) {
            var e;
            for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
            return -1;
          }),
        j("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }),
        j("MMM", 0, 0, function (t) {
          return this.localeData().monthsShort(this, t);
        }),
        j("MMMM", 0, 0, function (t) {
          return this.localeData().months(this, t);
        }),
        it("month", "M"),
        rt("month", 8),
        Rt("M", wt),
        Rt("MM", wt, bt),
        Rt("MMM", function (t, e) {
          return e.monthsShortRegex(t);
        }),
        Rt("MMMM", function (t, e) {
          return e.monthsRegex(t);
        }),
        $t(["M", "MM"], function (t, e) {
          e[Vt] = ct(t) - 1;
        }),
        $t(["MMM", "MMMM"], function (t, e, i, n) {
          var s = i._locale.monthsParse(t, n, i._strict);
          null != s ? (e[Vt] = s) : (m(i).invalidMonth = t);
        });
      var te =
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ee = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        ie = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        ne = Lt,
        se = Lt;
      function oe(t, e) {
        return t
          ? o(this._months)
            ? this._months[t.month()]
            : this._months[
                (this._months.isFormat || ie).test(e) ? "format" : "standalone"
              ][t.month()]
          : o(this._months)
          ? this._months
          : this._months.standalone;
      }
      function re(t, e) {
        return t
          ? o(this._monthsShort)
            ? this._monthsShort[t.month()]
            : this._monthsShort[ie.test(e) ? "format" : "standalone"][t.month()]
          : o(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }
      function ae(t, e, i) {
        var n,
          s,
          o,
          r = t.toLocaleLowerCase();
        if (!this._monthsParse)
          for (
            this._monthsParse = [],
              this._longMonthsParse = [],
              this._shortMonthsParse = [],
              n = 0;
            n < 12;
            ++n
          )
            (o = p([2e3, n])),
              (this._shortMonthsParse[n] = this.monthsShort(
                o,
                ""
              ).toLocaleLowerCase()),
              (this._longMonthsParse[n] = this.months(
                o,
                ""
              ).toLocaleLowerCase());
        return i
          ? "MMM" === e
            ? -1 !== (s = Wt.call(this._shortMonthsParse, r))
              ? s
              : null
            : -1 !== (s = Wt.call(this._longMonthsParse, r))
            ? s
            : null
          : "MMM" === e
          ? -1 !== (s = Wt.call(this._shortMonthsParse, r)) ||
            -1 !== (s = Wt.call(this._longMonthsParse, r))
            ? s
            : null
          : -1 !== (s = Wt.call(this._longMonthsParse, r)) ||
            -1 !== (s = Wt.call(this._shortMonthsParse, r))
          ? s
          : null;
      }
      function le(t, e, i) {
        var n, s, o;
        if (this._monthsParseExact) return ae.call(this, t, e, i);
        for (
          this._monthsParse ||
            ((this._monthsParse = []),
            (this._longMonthsParse = []),
            (this._shortMonthsParse = [])),
            n = 0;
          n < 12;
          n++
        ) {
          if (
            ((s = p([2e3, n])),
            i &&
              !this._longMonthsParse[n] &&
              ((this._longMonthsParse[n] = new RegExp(
                "^" + this.months(s, "").replace(".", "") + "$",
                "i"
              )),
              (this._shortMonthsParse[n] = new RegExp(
                "^" + this.monthsShort(s, "").replace(".", "") + "$",
                "i"
              ))),
            i ||
              this._monthsParse[n] ||
              ((o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
              (this._monthsParse[n] = new RegExp(o.replace(".", ""), "i"))),
            i && "MMMM" === e && this._longMonthsParse[n].test(t))
          )
            return n;
          if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
          if (!i && this._monthsParse[n].test(t)) return n;
        }
      }
      function he(t, e) {
        var i;
        if (!t.isValid()) return t;
        if ("string" == typeof e)
          if (/^\d+$/.test(e)) e = ct(e);
          else if (!c((e = t.localeData().monthsParse(e)))) return t;
        return (
          (i = Math.min(t.date(), Qt(t.year(), e))),
          t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i),
          t
        );
      }
      function ce(t) {
        return null != t
          ? (he(this, t), n.updateOffset(this, !0), this)
          : ut(this, "Month");
      }
      function de() {
        return Qt(this.year(), this.month());
      }
      function ue(t) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || pe.call(this),
            t ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = ne),
            this._monthsShortStrictRegex && t
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex);
      }
      function fe(t) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || pe.call(this),
            t ? this._monthsStrictRegex : this._monthsRegex)
          : (a(this, "_monthsRegex") || (this._monthsRegex = se),
            this._monthsStrictRegex && t
              ? this._monthsStrictRegex
              : this._monthsRegex);
      }
      function pe() {
        function t(t, e) {
          return e.length - t.length;
        }
        var e,
          i,
          n = [],
          s = [],
          o = [];
        for (e = 0; e < 12; e++)
          (i = p([2e3, e])),
            n.push(this.monthsShort(i, "")),
            s.push(this.months(i, "")),
            o.push(this.months(i, "")),
            o.push(this.monthsShort(i, ""));
        for (n.sort(t), s.sort(t), o.sort(t), e = 0; e < 12; e++)
          (n[e] = Nt(n[e])), (s[e] = Nt(s[e]));
        for (e = 0; e < 24; e++) o[e] = Nt(o[e]);
        (this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i")),
          (this._monthsShortRegex = this._monthsRegex),
          (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
          (this._monthsShortStrictRegex = new RegExp(
            "^(" + n.join("|") + ")",
            "i"
          ));
      }
      function ge(t) {
        return lt(t) ? 366 : 365;
      }
      j("Y", 0, 0, function () {
        var t = this.year();
        return t <= 9999 ? I(t, 4) : "+" + t;
      }),
        j(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }),
        j(0, ["YYYY", 4], 0, "year"),
        j(0, ["YYYYY", 5], 0, "year"),
        j(0, ["YYYYYY", 6, !0], 0, "year"),
        it("year", "y"),
        rt("year", 1),
        Rt("Y", Tt),
        Rt("YY", wt, bt),
        Rt("YYYY", Mt, xt),
        Rt("YYYYY", At, _t),
        Rt("YYYYYY", At, _t),
        $t(["YYYYY", "YYYYYY"], Bt),
        $t("YYYY", function (t, e) {
          e[Bt] = 2 === t.length ? n.parseTwoDigitYear(t) : ct(t);
        }),
        $t("YY", function (t, e) {
          e[Bt] = n.parseTwoDigitYear(t);
        }),
        $t("Y", function (t, e) {
          e[Bt] = parseInt(t, 10);
        }),
        (n.parseTwoDigitYear = function (t) {
          return ct(t) + (ct(t) > 68 ? 1900 : 2e3);
        });
      var me = dt("FullYear", !0);
      function ve() {
        return lt(this.year());
      }
      function be(t, e, i, n, s, o, r) {
        var a;
        return (
          t < 100 && t >= 0
            ? ((a = new Date(t + 400, e, i, n, s, o, r)),
              isFinite(a.getFullYear()) && a.setFullYear(t))
            : (a = new Date(t, e, i, n, s, o, r)),
          a
        );
      }
      function ye(t) {
        var e, i;
        return (
          t < 100 && t >= 0
            ? (((i = Array.prototype.slice.call(arguments))[0] = t + 400),
              (e = new Date(Date.UTC.apply(null, i))),
              isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t))
            : (e = new Date(Date.UTC.apply(null, arguments))),
          e
        );
      }
      function xe(t, e, i) {
        var n = 7 + e - i;
        return (-(7 + ye(t, 0, n).getUTCDay() - e) % 7) + n - 1;
      }
      function _e(t, e, i, n, s) {
        var o,
          r,
          a = 1 + 7 * (e - 1) + ((7 + i - n) % 7) + xe(t, n, s);
        return (
          a <= 0
            ? (r = ge((o = t - 1)) + a)
            : a > ge(t)
            ? ((o = t + 1), (r = a - ge(t)))
            : ((o = t), (r = a)),
          { year: o, dayOfYear: r }
        );
      }
      function we(t, e, i) {
        var n,
          s,
          o = xe(t.year(), e, i),
          r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
        return (
          r < 1
            ? (n = r + ke((s = t.year() - 1), e, i))
            : r > ke(t.year(), e, i)
            ? ((n = r - ke(t.year(), e, i)), (s = t.year() + 1))
            : ((s = t.year()), (n = r)),
          { week: n, year: s }
        );
      }
      function ke(t, e, i) {
        var n = xe(t, e, i),
          s = xe(t + 1, e, i);
        return (ge(t) - n + s) / 7;
      }
      function Ce(t) {
        return we(t, this._week.dow, this._week.doy).week;
      }
      j("w", ["ww", 2], "wo", "week"),
        j("W", ["WW", 2], "Wo", "isoWeek"),
        it("week", "w"),
        it("isoWeek", "W"),
        rt("week", 5),
        rt("isoWeek", 5),
        Rt("w", wt),
        Rt("ww", wt, bt),
        Rt("W", wt),
        Rt("WW", wt, bt),
        jt(["w", "ww", "W", "WW"], function (t, e, i, n) {
          e[n.substr(0, 1)] = ct(t);
        });
      var Se = { dow: 0, doy: 6 };
      function Me() {
        return this._week.dow;
      }
      function Ae() {
        return this._week.doy;
      }
      function De(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d");
      }
      function Te(t) {
        var e = we(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d");
      }
      function Oe(t, e) {
        return "string" != typeof t
          ? t
          : isNaN(t)
          ? "number" == typeof (t = e.weekdaysParse(t))
            ? t
            : null
          : parseInt(t, 10);
      }
      function Pe(t, e) {
        return "string" == typeof t
          ? e.weekdaysParse(t) % 7 || 7
          : isNaN(t)
          ? null
          : t;
      }
      function Ee(t, e) {
        return t.slice(e, 7).concat(t.slice(0, e));
      }
      j("d", 0, "do", "day"),
        j("dd", 0, 0, function (t) {
          return this.localeData().weekdaysMin(this, t);
        }),
        j("ddd", 0, 0, function (t) {
          return this.localeData().weekdaysShort(this, t);
        }),
        j("dddd", 0, 0, function (t) {
          return this.localeData().weekdays(this, t);
        }),
        j("e", 0, 0, "weekday"),
        j("E", 0, 0, "isoWeekday"),
        it("day", "d"),
        it("weekday", "e"),
        it("isoWeekday", "E"),
        rt("day", 11),
        rt("weekday", 11),
        rt("isoWeekday", 11),
        Rt("d", wt),
        Rt("e", wt),
        Rt("E", wt),
        Rt("dd", function (t, e) {
          return e.weekdaysMinRegex(t);
        }),
        Rt("ddd", function (t, e) {
          return e.weekdaysShortRegex(t);
        }),
        Rt("dddd", function (t, e) {
          return e.weekdaysRegex(t);
        }),
        jt(["dd", "ddd", "dddd"], function (t, e, i, n) {
          var s = i._locale.weekdaysParse(t, n, i._strict);
          null != s ? (e.d = s) : (m(i).invalidWeekday = t);
        }),
        jt(["d", "e", "E"], function (t, e, i, n) {
          e[n] = ct(t);
        });
      var Le = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
          "_"
        ),
        Re = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ie = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        Fe = Lt,
        Ne = Lt,
        ze = Lt;
      function $e(t, e) {
        var i = o(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              t && !0 !== t && this._weekdays.isFormat.test(e)
                ? "format"
                : "standalone"
            ];
        return !0 === t ? Ee(i, this._week.dow) : t ? i[t.day()] : i;
      }
      function je(t) {
        return !0 === t
          ? Ee(this._weekdaysShort, this._week.dow)
          : t
          ? this._weekdaysShort[t.day()]
          : this._weekdaysShort;
      }
      function Ye(t) {
        return !0 === t
          ? Ee(this._weekdaysMin, this._week.dow)
          : t
          ? this._weekdaysMin[t.day()]
          : this._weekdaysMin;
      }
      function We(t, e, i) {
        var n,
          s,
          o,
          r = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (
            this._weekdaysParse = [],
              this._shortWeekdaysParse = [],
              this._minWeekdaysParse = [],
              n = 0;
            n < 7;
            ++n
          )
            (o = p([2e3, 1]).day(n)),
              (this._minWeekdaysParse[n] = this.weekdaysMin(
                o,
                ""
              ).toLocaleLowerCase()),
              (this._shortWeekdaysParse[n] = this.weekdaysShort(
                o,
                ""
              ).toLocaleLowerCase()),
              (this._weekdaysParse[n] = this.weekdays(
                o,
                ""
              ).toLocaleLowerCase());
        return i
          ? "dddd" === e
            ? -1 !== (s = Wt.call(this._weekdaysParse, r))
              ? s
              : null
            : "ddd" === e
            ? -1 !== (s = Wt.call(this._shortWeekdaysParse, r))
              ? s
              : null
            : -1 !== (s = Wt.call(this._minWeekdaysParse, r))
            ? s
            : null
          : "dddd" === e
          ? -1 !== (s = Wt.call(this._weekdaysParse, r)) ||
            -1 !== (s = Wt.call(this._shortWeekdaysParse, r)) ||
            -1 !== (s = Wt.call(this._minWeekdaysParse, r))
            ? s
            : null
          : "ddd" === e
          ? -1 !== (s = Wt.call(this._shortWeekdaysParse, r)) ||
            -1 !== (s = Wt.call(this._weekdaysParse, r)) ||
            -1 !== (s = Wt.call(this._minWeekdaysParse, r))
            ? s
            : null
          : -1 !== (s = Wt.call(this._minWeekdaysParse, r)) ||
            -1 !== (s = Wt.call(this._weekdaysParse, r)) ||
            -1 !== (s = Wt.call(this._shortWeekdaysParse, r))
          ? s
          : null;
      }
      function Be(t, e, i) {
        var n, s, o;
        if (this._weekdaysParseExact) return We.call(this, t, e, i);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            n = 0;
          n < 7;
          n++
        ) {
          if (
            ((s = p([2e3, 1]).day(n)),
            i &&
              !this._fullWeekdaysParse[n] &&
              ((this._fullWeekdaysParse[n] = new RegExp(
                "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._shortWeekdaysParse[n] = new RegExp(
                "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._minWeekdaysParse[n] = new RegExp(
                "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
                "i"
              ))),
            this._weekdaysParse[n] ||
              ((o =
                "^" +
                this.weekdays(s, "") +
                "|^" +
                this.weekdaysShort(s, "") +
                "|^" +
                this.weekdaysMin(s, "")),
              (this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i"))),
            i && "dddd" === e && this._fullWeekdaysParse[n].test(t))
          )
            return n;
          if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
          if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
          if (!i && this._weekdaysParse[n].test(t)) return n;
        }
      }
      function Ve(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t
          ? ((t = Oe(t, this.localeData())), this.add(t - e, "d"))
          : e;
      }
      function He(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d");
      }
      function Ue(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
          var e = Pe(t, this.localeData());
          return this.day(this.day() % 7 ? e : e - 7);
        }
        return this.day() || 7;
      }
      function Ge(t) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || Xe.call(this),
            t ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = Fe),
            this._weekdaysStrictRegex && t
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex);
      }
      function Ke(t) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || Xe.call(this),
            t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ne),
            this._weekdaysShortStrictRegex && t
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex);
      }
      function qe(t) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || Xe.call(this),
            t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ze),
            this._weekdaysMinStrictRegex && t
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex);
      }
      function Xe() {
        function t(t, e) {
          return e.length - t.length;
        }
        var e,
          i,
          n,
          s,
          o,
          r = [],
          a = [],
          l = [],
          h = [];
        for (e = 0; e < 7; e++)
          (i = p([2e3, 1]).day(e)),
            (n = Nt(this.weekdaysMin(i, ""))),
            (s = Nt(this.weekdaysShort(i, ""))),
            (o = Nt(this.weekdays(i, ""))),
            r.push(n),
            a.push(s),
            l.push(o),
            h.push(n),
            h.push(s),
            h.push(o);
        r.sort(t),
          a.sort(t),
          l.sort(t),
          h.sort(t),
          (this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i")),
          (this._weekdaysShortRegex = this._weekdaysRegex),
          (this._weekdaysMinRegex = this._weekdaysRegex),
          (this._weekdaysStrictRegex = new RegExp(
            "^(" + l.join("|") + ")",
            "i"
          )),
          (this._weekdaysShortStrictRegex = new RegExp(
            "^(" + a.join("|") + ")",
            "i"
          )),
          (this._weekdaysMinStrictRegex = new RegExp(
            "^(" + r.join("|") + ")",
            "i"
          ));
      }
      function Ze() {
        return this.hours() % 12 || 12;
      }
      function Je() {
        return this.hours() || 24;
      }
      function Qe(t, e) {
        j(t, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), e);
        });
      }
      function ti(t, e) {
        return e._meridiemParse;
      }
      function ei(t) {
        return "p" === (t + "").toLowerCase().charAt(0);
      }
      j("H", ["HH", 2], 0, "hour"),
        j("h", ["hh", 2], 0, Ze),
        j("k", ["kk", 2], 0, Je),
        j("hmm", 0, 0, function () {
          return "" + Ze.apply(this) + I(this.minutes(), 2);
        }),
        j("hmmss", 0, 0, function () {
          return (
            "" + Ze.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
          );
        }),
        j("Hmm", 0, 0, function () {
          return "" + this.hours() + I(this.minutes(), 2);
        }),
        j("Hmmss", 0, 0, function () {
          return (
            "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
          );
        }),
        Qe("a", !0),
        Qe("A", !1),
        it("hour", "h"),
        rt("hour", 13),
        Rt("a", ti),
        Rt("A", ti),
        Rt("H", wt),
        Rt("h", wt),
        Rt("k", wt),
        Rt("HH", wt, bt),
        Rt("hh", wt, bt),
        Rt("kk", wt, bt),
        Rt("hmm", kt),
        Rt("hmmss", Ct),
        Rt("Hmm", kt),
        Rt("Hmmss", Ct),
        $t(["H", "HH"], Ut),
        $t(["k", "kk"], function (t, e, i) {
          var n = ct(t);
          e[Ut] = 24 === n ? 0 : n;
        }),
        $t(["a", "A"], function (t, e, i) {
          (i._isPm = i._locale.isPM(t)), (i._meridiem = t);
        }),
        $t(["h", "hh"], function (t, e, i) {
          (e[Ut] = ct(t)), (m(i).bigHour = !0);
        }),
        $t("hmm", function (t, e, i) {
          var n = t.length - 2;
          (e[Ut] = ct(t.substr(0, n))),
            (e[Gt] = ct(t.substr(n))),
            (m(i).bigHour = !0);
        }),
        $t("hmmss", function (t, e, i) {
          var n = t.length - 4,
            s = t.length - 2;
          (e[Ut] = ct(t.substr(0, n))),
            (e[Gt] = ct(t.substr(n, 2))),
            (e[Kt] = ct(t.substr(s))),
            (m(i).bigHour = !0);
        }),
        $t("Hmm", function (t, e, i) {
          var n = t.length - 2;
          (e[Ut] = ct(t.substr(0, n))), (e[Gt] = ct(t.substr(n)));
        }),
        $t("Hmmss", function (t, e, i) {
          var n = t.length - 4,
            s = t.length - 2;
          (e[Ut] = ct(t.substr(0, n))),
            (e[Gt] = ct(t.substr(n, 2))),
            (e[Kt] = ct(t.substr(s)));
        });
      var ii = /[ap]\.?m?\.?/i,
        ni = dt("Hours", !0);
      function si(t, e, i) {
        return t > 11 ? (i ? "pm" : "PM") : i ? "am" : "AM";
      }
      var oi,
        ri = {
          calendar: L,
          longDateFormat: H,
          invalidDate: G,
          ordinal: q,
          dayOfMonthOrdinalParse: X,
          relativeTime: J,
          months: te,
          monthsShort: ee,
          week: Se,
          weekdays: Le,
          weekdaysMin: Ie,
          weekdaysShort: Re,
          meridiemParse: ii,
        },
        ai = {},
        li = {};
      function hi(t, e) {
        var i,
          n = Math.min(t.length, e.length);
        for (i = 0; i < n; i += 1) if (t[i] !== e[i]) return i;
        return n;
      }
      function ci(t) {
        return t ? t.toLowerCase().replace("_", "-") : t;
      }
      function di(t) {
        for (var e, i, n, s, o = 0; o < t.length; ) {
          for (
            e = (s = ci(t[o]).split("-")).length,
              i = (i = ci(t[o + 1])) ? i.split("-") : null;
            e > 0;

          ) {
            if ((n = fi(s.slice(0, e).join("-")))) return n;
            if (i && i.length >= e && hi(s, i) >= e - 1) break;
            e--;
          }
          o++;
        }
        return oi;
      }
      function ui(t) {
        return null != t.match("^[^/\\\\]*$");
      }
      function fi(e) {
        var i = null;
        if (void 0 === ai[e] && t && t.exports && ui(e))
          try {
            (i = oi._abbr), bu("./locale/" + e), pi(i);
          } catch (t) {
            ai[e] = null;
          }
        return ai[e];
      }
      function pi(t, e) {
        var i;
        return (
          t &&
            ((i = h(e) ? vi(t) : gi(t, e))
              ? (oi = i)
              : "undefined" != typeof console &&
                console.warn &&
                console.warn(
                  "Locale " + t + " not found. Did you forget to load it?"
                )),
          oi._abbr
        );
      }
      function gi(t, e) {
        if (null !== e) {
          var i,
            n = ri;
          if (((e.abbr = t), null != ai[t]))
            D(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ),
              (n = ai[t]._config);
          else if (null != e.parentLocale)
            if (null != ai[e.parentLocale]) n = ai[e.parentLocale]._config;
            else {
              if (null == (i = fi(e.parentLocale)))
                return (
                  li[e.parentLocale] || (li[e.parentLocale] = []),
                  li[e.parentLocale].push({ name: t, config: e }),
                  null
                );
              n = i._config;
            }
          return (
            (ai[t] = new E(P(n, e))),
            li[t] &&
              li[t].forEach(function (t) {
                gi(t.name, t.config);
              }),
            pi(t),
            ai[t]
          );
        }
        return delete ai[t], null;
      }
      function mi(t, e) {
        if (null != e) {
          var i,
            n,
            s = ri;
          null != ai[t] && null != ai[t].parentLocale
            ? ai[t].set(P(ai[t]._config, e))
            : (null != (n = fi(t)) && (s = n._config),
              (e = P(s, e)),
              null == n && (e.abbr = t),
              ((i = new E(e)).parentLocale = ai[t]),
              (ai[t] = i)),
            pi(t);
        } else
          null != ai[t] &&
            (null != ai[t].parentLocale
              ? ((ai[t] = ai[t].parentLocale), t === pi() && pi(t))
              : null != ai[t] && delete ai[t]);
        return ai[t];
      }
      function vi(t) {
        var e;
        if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
          return oi;
        if (!o(t)) {
          if ((e = fi(t))) return e;
          t = [t];
        }
        return di(t);
      }
      function bi() {
        return M(ai);
      }
      function yi(t) {
        var e,
          i = t._a;
        return (
          i &&
            -2 === m(t).overflow &&
            ((e =
              i[Vt] < 0 || i[Vt] > 11
                ? Vt
                : i[Ht] < 1 || i[Ht] > Qt(i[Bt], i[Vt])
                ? Ht
                : i[Ut] < 0 ||
                  i[Ut] > 24 ||
                  (24 === i[Ut] && (0 !== i[Gt] || 0 !== i[Kt] || 0 !== i[qt]))
                ? Ut
                : i[Gt] < 0 || i[Gt] > 59
                ? Gt
                : i[Kt] < 0 || i[Kt] > 59
                ? Kt
                : i[qt] < 0 || i[qt] > 999
                ? qt
                : -1),
            m(t)._overflowDayOfYear && (e < Bt || e > Ht) && (e = Ht),
            m(t)._overflowWeeks && -1 === e && (e = Xt),
            m(t)._overflowWeekday && -1 === e && (e = Zt),
            (m(t).overflow = e)),
          t
        );
      }
      var xi =
          /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        _i =
          /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        wi = /Z|[+-]\d\d(?::?\d\d)?/,
        ki = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, !1],
          ["YYYY", /\d{4}/, !1],
        ],
        Ci = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/],
        ],
        Si = /^\/?Date\((-?\d+)/i,
        Mi =
          /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Ai = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480,
        };
      function Di(t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a = t._i,
          l = xi.exec(a) || _i.exec(a),
          h = ki.length,
          c = Ci.length;
        if (l) {
          for (m(t).iso = !0, e = 0, i = h; e < i; e++)
            if (ki[e][1].exec(l[1])) {
              (s = ki[e][0]), (n = !1 !== ki[e][2]);
              break;
            }
          if (null == s) return void (t._isValid = !1);
          if (l[3]) {
            for (e = 0, i = c; e < i; e++)
              if (Ci[e][1].exec(l[3])) {
                o = (l[2] || " ") + Ci[e][0];
                break;
              }
            if (null == o) return void (t._isValid = !1);
          }
          if (!n && null != o) return void (t._isValid = !1);
          if (l[4]) {
            if (!wi.exec(l[4])) return void (t._isValid = !1);
            r = "Z";
          }
          (t._f = s + (o || "") + (r || "")), ji(t);
        } else t._isValid = !1;
      }
      function Ti(t, e, i, n, s, o) {
        var r = [
          Oi(t),
          ee.indexOf(e),
          parseInt(i, 10),
          parseInt(n, 10),
          parseInt(s, 10),
        ];
        return o && r.push(parseInt(o, 10)), r;
      }
      function Oi(t) {
        var e = parseInt(t, 10);
        return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
      }
      function Pi(t) {
        return t
          .replace(/\([^()]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      }
      function Ei(t, e, i) {
        return (
          !t ||
          Re.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
          ((m(i).weekdayMismatch = !0), (i._isValid = !1), !1)
        );
      }
      function Li(t, e, i) {
        if (t) return Ai[t];
        if (e) return 0;
        var n = parseInt(i, 10),
          s = n % 100;
        return ((n - s) / 100) * 60 + s;
      }
      function Ri(t) {
        var e,
          i = Mi.exec(Pi(t._i));
        if (i) {
          if (((e = Ti(i[4], i[3], i[2], i[5], i[6], i[7])), !Ei(i[1], e, t)))
            return;
          (t._a = e),
            (t._tzm = Li(i[8], i[9], i[10])),
            (t._d = ye.apply(null, t._a)),
            t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
            (m(t).rfc2822 = !0);
        } else t._isValid = !1;
      }
      function Ii(t) {
        var e = Si.exec(t._i);
        null === e
          ? (Di(t),
            !1 === t._isValid &&
              (delete t._isValid,
              Ri(t),
              !1 === t._isValid &&
                (delete t._isValid,
                t._strict ? (t._isValid = !1) : n.createFromInputFallback(t))))
          : (t._d = new Date(+e[1]));
      }
      function Fi(t, e, i) {
        return null != t ? t : null != e ? e : i;
      }
      function Ni(t) {
        var e = new Date(n.now());
        return t._useUTC
          ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
          : [e.getFullYear(), e.getMonth(), e.getDate()];
      }
      function zi(t) {
        var e,
          i,
          n,
          s,
          o,
          r = [];
        if (!t._d) {
          for (
            n = Ni(t),
              t._w && null == t._a[Ht] && null == t._a[Vt] && $i(t),
              null != t._dayOfYear &&
                ((o = Fi(t._a[Bt], n[Bt])),
                (t._dayOfYear > ge(o) || 0 === t._dayOfYear) &&
                  (m(t)._overflowDayOfYear = !0),
                (i = ye(o, 0, t._dayOfYear)),
                (t._a[Vt] = i.getUTCMonth()),
                (t._a[Ht] = i.getUTCDate())),
              e = 0;
            e < 3 && null == t._a[e];
            ++e
          )
            t._a[e] = r[e] = n[e];
          for (; e < 7; e++)
            t._a[e] = r[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
          24 === t._a[Ut] &&
            0 === t._a[Gt] &&
            0 === t._a[Kt] &&
            0 === t._a[qt] &&
            ((t._nextDay = !0), (t._a[Ut] = 0)),
            (t._d = (t._useUTC ? ye : be).apply(null, r)),
            (s = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
            null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
            t._nextDay && (t._a[Ut] = 24),
            t._w &&
              void 0 !== t._w.d &&
              t._w.d !== s &&
              (m(t).weekdayMismatch = !0);
        }
      }
      function $i(t) {
        var e, i, n, s, o, r, a, l, h;
        null != (e = t._w).GG || null != e.W || null != e.E
          ? ((o = 1),
            (r = 4),
            (i = Fi(e.GG, t._a[Bt], we(Ki(), 1, 4).year)),
            (n = Fi(e.W, 1)),
            ((s = Fi(e.E, 1)) < 1 || s > 7) && (l = !0))
          : ((o = t._locale._week.dow),
            (r = t._locale._week.doy),
            (h = we(Ki(), o, r)),
            (i = Fi(e.gg, t._a[Bt], h.year)),
            (n = Fi(e.w, h.week)),
            null != e.d
              ? ((s = e.d) < 0 || s > 6) && (l = !0)
              : null != e.e
              ? ((s = e.e + o), (e.e < 0 || e.e > 6) && (l = !0))
              : (s = o)),
          n < 1 || n > ke(i, o, r)
            ? (m(t)._overflowWeeks = !0)
            : null != l
            ? (m(t)._overflowWeekday = !0)
            : ((a = _e(i, n, s, o, r)),
              (t._a[Bt] = a.year),
              (t._dayOfYear = a.dayOfYear));
      }
      function ji(t) {
        if (t._f !== n.ISO_8601)
          if (t._f !== n.RFC_2822) {
            (t._a = []), (m(t).empty = !0);
            var e,
              i,
              s,
              o,
              r,
              a,
              l,
              h = "" + t._i,
              c = h.length,
              d = 0;
            for (
              l = (s = V(t._f, t._locale).match(F) || []).length, e = 0;
              e < l;
              e++
            )
              (o = s[e]),
                (i = (h.match(It(o, t)) || [])[0]) &&
                  ((r = h.substr(0, h.indexOf(i))).length > 0 &&
                    m(t).unusedInput.push(r),
                  (h = h.slice(h.indexOf(i) + i.length)),
                  (d += i.length)),
                $[o]
                  ? (i ? (m(t).empty = !1) : m(t).unusedTokens.push(o),
                    Yt(o, i, t))
                  : t._strict && !i && m(t).unusedTokens.push(o);
            (m(t).charsLeftOver = c - d),
              h.length > 0 && m(t).unusedInput.push(h),
              t._a[Ut] <= 12 &&
                !0 === m(t).bigHour &&
                t._a[Ut] > 0 &&
                (m(t).bigHour = void 0),
              (m(t).parsedDateParts = t._a.slice(0)),
              (m(t).meridiem = t._meridiem),
              (t._a[Ut] = Yi(t._locale, t._a[Ut], t._meridiem)),
              null !== (a = m(t).era) &&
                (t._a[Bt] = t._locale.erasConvertYear(a, t._a[Bt])),
              zi(t),
              yi(t);
          } else Ri(t);
        else Di(t);
      }
      function Yi(t, e, i) {
        var n;
        return null == i
          ? e
          : null != t.meridiemHour
          ? t.meridiemHour(e, i)
          : null != t.isPM
          ? ((n = t.isPM(i)) && e < 12 && (e += 12),
            n || 12 !== e || (e = 0),
            e)
          : e;
      }
      function Wi(t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a = !1,
          l = t._f.length;
        if (0 === l)
          return (m(t).invalidFormat = !0), void (t._d = new Date(NaN));
        for (s = 0; s < l; s++)
          (o = 0),
            (r = !1),
            (e = _({}, t)),
            null != t._useUTC && (e._useUTC = t._useUTC),
            (e._f = t._f[s]),
            ji(e),
            v(e) && (r = !0),
            (o += m(e).charsLeftOver),
            (o += 10 * m(e).unusedTokens.length),
            (m(e).score = o),
            a
              ? o < n && ((n = o), (i = e))
              : (null == n || o < n || r) && ((n = o), (i = e), r && (a = !0));
        f(t, i || e);
      }
      function Bi(t) {
        if (!t._d) {
          var e = st(t._i),
            i = void 0 === e.day ? e.date : e.day;
          (t._a = u(
            [e.year, e.month, i, e.hour, e.minute, e.second, e.millisecond],
            function (t) {
              return t && parseInt(t, 10);
            }
          )),
            zi(t);
        }
      }
      function Vi(t) {
        var e = new w(yi(Hi(t)));
        return e._nextDay && (e.add(1, "d"), (e._nextDay = void 0)), e;
      }
      function Hi(t) {
        var e = t._i,
          i = t._f;
        return (
          (t._locale = t._locale || vi(t._l)),
          null === e || (void 0 === i && "" === e)
            ? b({ nullInput: !0 })
            : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
              k(e)
                ? new w(yi(e))
                : (d(e) ? (t._d = e) : o(i) ? Wi(t) : i ? ji(t) : Ui(t),
                  v(t) || (t._d = null),
                  t))
        );
      }
      function Ui(t) {
        var e = t._i;
        h(e)
          ? (t._d = new Date(n.now()))
          : d(e)
          ? (t._d = new Date(e.valueOf()))
          : "string" == typeof e
          ? Ii(t)
          : o(e)
          ? ((t._a = u(e.slice(0), function (t) {
              return parseInt(t, 10);
            })),
            zi(t))
          : r(e)
          ? Bi(t)
          : c(e)
          ? (t._d = new Date(e))
          : n.createFromInputFallback(t);
      }
      function Gi(t, e, i, n, s) {
        var a = {};
        return (
          (!0 !== e && !1 !== e) || ((n = e), (e = void 0)),
          (!0 !== i && !1 !== i) || ((n = i), (i = void 0)),
          ((r(t) && l(t)) || (o(t) && 0 === t.length)) && (t = void 0),
          (a._isAMomentObject = !0),
          (a._useUTC = a._isUTC = s),
          (a._l = i),
          (a._i = t),
          (a._f = e),
          (a._strict = n),
          Vi(a)
        );
      }
      function Ki(t, e, i, n) {
        return Gi(t, e, i, n, !1);
      }
      (n.createFromInputFallback = S(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (t) {
          t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
        }
      )),
        (n.ISO_8601 = function () {}),
        (n.RFC_2822 = function () {});
      var qi = S(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var t = Ki.apply(null, arguments);
            return this.isValid() && t.isValid() ? (t < this ? this : t) : b();
          }
        ),
        Xi = S(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var t = Ki.apply(null, arguments);
            return this.isValid() && t.isValid() ? (t > this ? this : t) : b();
          }
        );
      function Zi(t, e) {
        var i, n;
        if ((1 === e.length && o(e[0]) && (e = e[0]), !e.length)) return Ki();
        for (i = e[0], n = 1; n < e.length; ++n)
          (e[n].isValid() && !e[n][t](i)) || (i = e[n]);
        return i;
      }
      function Ji() {
        return Zi("isBefore", [].slice.call(arguments, 0));
      }
      function Qi() {
        return Zi("isAfter", [].slice.call(arguments, 0));
      }
      var tn = function () {
          return Date.now ? Date.now() : +new Date();
        },
        en = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];
      function nn(t) {
        var e,
          i,
          n = !1,
          s = en.length;
        for (e in t)
          if (
            a(t, e) &&
            (-1 === Wt.call(en, e) || (null != t[e] && isNaN(t[e])))
          )
            return !1;
        for (i = 0; i < s; ++i)
          if (t[en[i]]) {
            if (n) return !1;
            parseFloat(t[en[i]]) !== ct(t[en[i]]) && (n = !0);
          }
        return !0;
      }
      function sn() {
        return this._isValid;
      }
      function on() {
        return Dn(NaN);
      }
      function rn(t) {
        var e = st(t),
          i = e.year || 0,
          n = e.quarter || 0,
          s = e.month || 0,
          o = e.week || e.isoWeek || 0,
          r = e.day || 0,
          a = e.hour || 0,
          l = e.minute || 0,
          h = e.second || 0,
          c = e.millisecond || 0;
        (this._isValid = nn(e)),
          (this._milliseconds = +c + 1e3 * h + 6e4 * l + 1e3 * a * 60 * 60),
          (this._days = +r + 7 * o),
          (this._months = +s + 3 * n + 12 * i),
          (this._data = {}),
          (this._locale = vi()),
          this._bubble();
      }
      function an(t) {
        return t instanceof rn;
      }
      function ln(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
      }
      function hn(t, e, i) {
        var n,
          s = Math.min(t.length, e.length),
          o = Math.abs(t.length - e.length),
          r = 0;
        for (n = 0; n < s; n++)
          ((i && t[n] !== e[n]) || (!i && ct(t[n]) !== ct(e[n]))) && r++;
        return r + o;
      }
      function cn(t, e) {
        j(t, 0, 0, function () {
          var t = this.utcOffset(),
            i = "+";
          return (
            t < 0 && ((t = -t), (i = "-")),
            i + I(~~(t / 60), 2) + e + I(~~t % 60, 2)
          );
        });
      }
      cn("Z", ":"),
        cn("ZZ", ""),
        Rt("Z", Pt),
        Rt("ZZ", Pt),
        $t(["Z", "ZZ"], function (t, e, i) {
          (i._useUTC = !0), (i._tzm = un(Pt, t));
        });
      var dn = /([\+\-]|\d\d)/gi;
      function un(t, e) {
        var i,
          n,
          s = (e || "").match(t);
        return null === s
          ? null
          : 0 ===
            (n =
              60 *
                (i = ((s[s.length - 1] || []) + "").match(dn) || [
                  "-",
                  0,
                  0,
                ])[1] +
              ct(i[2]))
          ? 0
          : "+" === i[0]
          ? n
          : -n;
      }
      function fn(t, e) {
        var i, s;
        return e._isUTC
          ? ((i = e.clone()),
            (s = (k(t) || d(t) ? t.valueOf() : Ki(t).valueOf()) - i.valueOf()),
            i._d.setTime(i._d.valueOf() + s),
            n.updateOffset(i, !1),
            i)
          : Ki(t).local();
      }
      function pn(t) {
        return -Math.round(t._d.getTimezoneOffset());
      }
      function gn(t, e, i) {
        var s,
          o = this._offset || 0;
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
          if ("string" == typeof t) {
            if (null === (t = un(Pt, t))) return this;
          } else Math.abs(t) < 16 && !i && (t *= 60);
          return (
            !this._isUTC && e && (s = pn(this)),
            (this._offset = t),
            (this._isUTC = !0),
            null != s && this.add(s, "m"),
            o !== t &&
              (!e || this._changeInProgress
                ? Ln(this, Dn(t - o, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  n.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this
          );
        }
        return this._isUTC ? o : pn(this);
      }
      function mn(t, e) {
        return null != t
          ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
          : -this.utcOffset();
      }
      function vn(t) {
        return this.utcOffset(0, t);
      }
      function bn(t) {
        return (
          this._isUTC &&
            (this.utcOffset(0, t),
            (this._isUTC = !1),
            t && this.subtract(pn(this), "m")),
          this
        );
      }
      function yn() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var t = un(Ot, this._i);
          null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
        }
        return this;
      }
      function xn(t) {
        return (
          !!this.isValid() &&
          ((t = t ? Ki(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0)
        );
      }
      function _n() {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
        );
      }
      function wn() {
        if (!h(this._isDSTShifted)) return this._isDSTShifted;
        var t,
          e = {};
        return (
          _(e, this),
          (e = Hi(e))._a
            ? ((t = e._isUTC ? p(e._a) : Ki(e._a)),
              (this._isDSTShifted =
                this.isValid() && hn(e._a, t.toArray()) > 0))
            : (this._isDSTShifted = !1),
          this._isDSTShifted
        );
      }
      function kn() {
        return !!this.isValid() && !this._isUTC;
      }
      function Cn() {
        return !!this.isValid() && this._isUTC;
      }
      function Sn() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
      }
      n.updateOffset = function () {};
      var Mn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        An =
          /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function Dn(t, e) {
        var i,
          n,
          s,
          o = t,
          r = null;
        return (
          an(t)
            ? (o = { ms: t._milliseconds, d: t._days, M: t._months })
            : c(t) || !isNaN(+t)
            ? ((o = {}), e ? (o[e] = +t) : (o.milliseconds = +t))
            : (r = Mn.exec(t))
            ? ((i = "-" === r[1] ? -1 : 1),
              (o = {
                y: 0,
                d: ct(r[Ht]) * i,
                h: ct(r[Ut]) * i,
                m: ct(r[Gt]) * i,
                s: ct(r[Kt]) * i,
                ms: ct(ln(1e3 * r[qt])) * i,
              }))
            : (r = An.exec(t))
            ? ((i = "-" === r[1] ? -1 : 1),
              (o = {
                y: Tn(r[2], i),
                M: Tn(r[3], i),
                w: Tn(r[4], i),
                d: Tn(r[5], i),
                h: Tn(r[6], i),
                m: Tn(r[7], i),
                s: Tn(r[8], i),
              }))
            : null == o
            ? (o = {})
            : "object" == typeof o &&
              ("from" in o || "to" in o) &&
              ((s = Pn(Ki(o.from), Ki(o.to))),
              ((o = {}).ms = s.milliseconds),
              (o.M = s.months)),
          (n = new rn(o)),
          an(t) && a(t, "_locale") && (n._locale = t._locale),
          an(t) && a(t, "_isValid") && (n._isValid = t._isValid),
          n
        );
      }
      function Tn(t, e) {
        var i = t && parseFloat(t.replace(",", "."));
        return (isNaN(i) ? 0 : i) * e;
      }
      function On(t, e) {
        var i = {};
        return (
          (i.months = e.month() - t.month() + 12 * (e.year() - t.year())),
          t.clone().add(i.months, "M").isAfter(e) && --i.months,
          (i.milliseconds = +e - +t.clone().add(i.months, "M")),
          i
        );
      }
      function Pn(t, e) {
        var i;
        return t.isValid() && e.isValid()
          ? ((e = fn(e, t)),
            t.isBefore(e)
              ? (i = On(t, e))
              : (((i = On(e, t)).milliseconds = -i.milliseconds),
                (i.months = -i.months)),
            i)
          : { milliseconds: 0, months: 0 };
      }
      function En(t, e) {
        return function (i, n) {
          var s;
          return (
            null === n ||
              isNaN(+n) ||
              (D(
                e,
                "moment()." +
                  e +
                  "(period, number) is deprecated. Please use moment()." +
                  e +
                  "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              ),
              (s = i),
              (i = n),
              (n = s)),
            Ln(this, Dn(i, n), t),
            this
          );
        };
      }
      function Ln(t, e, i, s) {
        var o = e._milliseconds,
          r = ln(e._days),
          a = ln(e._months);
        t.isValid() &&
          ((s = null == s || s),
          a && he(t, ut(t, "Month") + a * i),
          r && ft(t, "Date", ut(t, "Date") + r * i),
          o && t._d.setTime(t._d.valueOf() + o * i),
          s && n.updateOffset(t, r || a));
      }
      (Dn.fn = rn.prototype), (Dn.invalid = on);
      var Rn = En(1, "add"),
        In = En(-1, "subtract");
      function Fn(t) {
        return "string" == typeof t || t instanceof String;
      }
      function Nn(t) {
        return k(t) || d(t) || Fn(t) || c(t) || $n(t) || zn(t) || null == t;
      }
      function zn(t) {
        var e,
          i,
          n = r(t) && !l(t),
          s = !1,
          o = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms",
          ],
          h = o.length;
        for (e = 0; e < h; e += 1) (i = o[e]), (s = s || a(t, i));
        return n && s;
      }
      function $n(t) {
        var e = o(t),
          i = !1;
        return (
          e &&
            (i =
              0 ===
              t.filter(function (e) {
                return !c(e) && Fn(t);
              }).length),
          e && i
        );
      }
      function jn(t) {
        var e,
          i,
          n = r(t) && !l(t),
          s = !1,
          o = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse",
          ];
        for (e = 0; e < o.length; e += 1) (i = o[e]), (s = s || a(t, i));
        return n && s;
      }
      function Yn(t, e) {
        var i = t.diff(e, "days", !0);
        return i < -6
          ? "sameElse"
          : i < -1
          ? "lastWeek"
          : i < 0
          ? "lastDay"
          : i < 1
          ? "sameDay"
          : i < 2
          ? "nextDay"
          : i < 7
          ? "nextWeek"
          : "sameElse";
      }
      function Wn(t, e) {
        1 === arguments.length &&
          (arguments[0]
            ? Nn(arguments[0])
              ? ((t = arguments[0]), (e = void 0))
              : jn(arguments[0]) && ((e = arguments[0]), (t = void 0))
            : ((t = void 0), (e = void 0)));
        var i = t || Ki(),
          s = fn(i, this).startOf("day"),
          o = n.calendarFormat(this, s) || "sameElse",
          r = e && (T(e[o]) ? e[o].call(this, i) : e[o]);
        return this.format(r || this.localeData().calendar(o, this, Ki(i)));
      }
      function Bn() {
        return new w(this);
      }
      function Vn(t, e) {
        var i = k(t) ? t : Ki(t);
        return (
          !(!this.isValid() || !i.isValid()) &&
          ("millisecond" === (e = nt(e) || "millisecond")
            ? this.valueOf() > i.valueOf()
            : i.valueOf() < this.clone().startOf(e).valueOf())
        );
      }
      function Hn(t, e) {
        var i = k(t) ? t : Ki(t);
        return (
          !(!this.isValid() || !i.isValid()) &&
          ("millisecond" === (e = nt(e) || "millisecond")
            ? this.valueOf() < i.valueOf()
            : this.clone().endOf(e).valueOf() < i.valueOf())
        );
      }
      function Un(t, e, i, n) {
        var s = k(t) ? t : Ki(t),
          o = k(e) ? e : Ki(e);
        return (
          !!(this.isValid() && s.isValid() && o.isValid()) &&
          ("(" === (n = n || "()")[0]
            ? this.isAfter(s, i)
            : !this.isBefore(s, i)) &&
          (")" === n[1] ? this.isBefore(o, i) : !this.isAfter(o, i))
        );
      }
      function Gn(t, e) {
        var i,
          n = k(t) ? t : Ki(t);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (e = nt(e) || "millisecond")
            ? this.valueOf() === n.valueOf()
            : ((i = n.valueOf()),
              this.clone().startOf(e).valueOf() <= i &&
                i <= this.clone().endOf(e).valueOf()))
        );
      }
      function Kn(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e);
      }
      function qn(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e);
      }
      function Xn(t, e, i) {
        var n, s, o;
        if (!this.isValid()) return NaN;
        if (!(n = fn(t, this)).isValid()) return NaN;
        switch (((s = 6e4 * (n.utcOffset() - this.utcOffset())), (e = nt(e)))) {
          case "year":
            o = Zn(this, n) / 12;
            break;
          case "month":
            o = Zn(this, n);
            break;
          case "quarter":
            o = Zn(this, n) / 3;
            break;
          case "second":
            o = (this - n) / 1e3;
            break;
          case "minute":
            o = (this - n) / 6e4;
            break;
          case "hour":
            o = (this - n) / 36e5;
            break;
          case "day":
            o = (this - n - s) / 864e5;
            break;
          case "week":
            o = (this - n - s) / 6048e5;
            break;
          default:
            o = this - n;
        }
        return i ? o : ht(o);
      }
      function Zn(t, e) {
        if (t.date() < e.date()) return -Zn(e, t);
        var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
          n = t.clone().add(i, "months");
        return (
          -(
            i +
            (e - n < 0
              ? (e - n) / (n - t.clone().add(i - 1, "months"))
              : (e - n) / (t.clone().add(i + 1, "months") - n))
          ) || 0
        );
      }
      function Jn() {
        return this.clone()
          .locale("en")
          .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function Qn(t) {
        if (!this.isValid()) return null;
        var e = !0 !== t,
          i = e ? this.clone().utc() : this;
        return i.year() < 0 || i.year() > 9999
          ? B(
              i,
              e
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : T(Date.prototype.toISOString)
          ? e
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", B(i, "Z"))
          : B(
              i,
              e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
      }
      function ts() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t,
          e,
          i,
          n,
          s = "moment",
          o = "";
        return (
          this.isLocal() ||
            ((s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (o = "Z")),
          (t = "[" + s + '("]'),
          (e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
          (i = "-MM-DD[T]HH:mm:ss.SSS"),
          (n = o + '[")]'),
          this.format(t + e + i + n)
        );
      }
      function es(t) {
        t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var e = B(this, t);
        return this.localeData().postformat(e);
      }
      function is(t, e) {
        return this.isValid() && ((k(t) && t.isValid()) || Ki(t).isValid())
          ? Dn({ to: this, from: t }).locale(this.locale()).humanize(!e)
          : this.localeData().invalidDate();
      }
      function ns(t) {
        return this.from(Ki(), t);
      }
      function ss(t, e) {
        return this.isValid() && ((k(t) && t.isValid()) || Ki(t).isValid())
          ? Dn({ from: this, to: t }).locale(this.locale()).humanize(!e)
          : this.localeData().invalidDate();
      }
      function os(t) {
        return this.to(Ki(), t);
      }
      function rs(t) {
        var e;
        return void 0 === t
          ? this._locale._abbr
          : (null != (e = vi(t)) && (this._locale = e), this);
      }
      (n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
        (n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
      var as = S(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (t) {
          return void 0 === t ? this.localeData() : this.locale(t);
        }
      );
      function ls() {
        return this._locale;
      }
      var hs = 1e3,
        cs = 60 * hs,
        ds = 60 * cs,
        us = 3506328 * ds;
      function fs(t, e) {
        return ((t % e) + e) % e;
      }
      function ps(t, e, i) {
        return t < 100 && t >= 0
          ? new Date(t + 400, e, i) - us
          : new Date(t, e, i).valueOf();
      }
      function gs(t, e, i) {
        return t < 100 && t >= 0
          ? Date.UTC(t + 400, e, i) - us
          : Date.UTC(t, e, i);
      }
      function ms(t) {
        var e, i;
        if (void 0 === (t = nt(t)) || "millisecond" === t || !this.isValid())
          return this;
        switch (((i = this._isUTC ? gs : ps), t)) {
          case "year":
            e = i(this.year(), 0, 1);
            break;
          case "quarter":
            e = i(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            e = i(this.year(), this.month(), 1);
            break;
          case "week":
            e = i(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            e = i(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            e = i(this.year(), this.month(), this.date());
            break;
          case "hour":
            (e = this._d.valueOf()),
              (e -= fs(e + (this._isUTC ? 0 : this.utcOffset() * cs), ds));
            break;
          case "minute":
            (e = this._d.valueOf()), (e -= fs(e, cs));
            break;
          case "second":
            (e = this._d.valueOf()), (e -= fs(e, hs));
        }
        return this._d.setTime(e), n.updateOffset(this, !0), this;
      }
      function vs(t) {
        var e, i;
        if (void 0 === (t = nt(t)) || "millisecond" === t || !this.isValid())
          return this;
        switch (((i = this._isUTC ? gs : ps), t)) {
          case "year":
            e = i(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            e = i(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            e = i(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            e =
              i(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            e =
              i(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            e = i(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (e = this._d.valueOf()),
              (e +=
                ds - fs(e + (this._isUTC ? 0 : this.utcOffset() * cs), ds) - 1);
            break;
          case "minute":
            (e = this._d.valueOf()), (e += cs - fs(e, cs) - 1);
            break;
          case "second":
            (e = this._d.valueOf()), (e += hs - fs(e, hs) - 1);
        }
        return this._d.setTime(e), n.updateOffset(this, !0), this;
      }
      function bs() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }
      function ys() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function xs() {
        return new Date(this.valueOf());
      }
      function _s() {
        var t = this;
        return [
          t.year(),
          t.month(),
          t.date(),
          t.hour(),
          t.minute(),
          t.second(),
          t.millisecond(),
        ];
      }
      function ws() {
        var t = this;
        return {
          years: t.year(),
          months: t.month(),
          date: t.date(),
          hours: t.hours(),
          minutes: t.minutes(),
          seconds: t.seconds(),
          milliseconds: t.milliseconds(),
        };
      }
      function ks() {
        return this.isValid() ? this.toISOString() : null;
      }
      function Cs() {
        return v(this);
      }
      function Ss() {
        return f({}, m(this));
      }
      function Ms() {
        return m(this).overflow;
      }
      function As() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict,
        };
      }
      function Ds(t, e) {
        var i,
          s,
          o,
          r = this._eras || vi("en")._eras;
        for (i = 0, s = r.length; i < s; ++i)
          switch (
            ("string" == typeof r[i].since &&
              ((o = n(r[i].since).startOf("day")), (r[i].since = o.valueOf())),
            typeof r[i].until)
          ) {
            case "undefined":
              r[i].until = 1 / 0;
              break;
            case "string":
              (o = n(r[i].until).startOf("day").valueOf()),
                (r[i].until = o.valueOf());
          }
        return r;
      }
      function Ts(t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l = this.eras();
        for (t = t.toUpperCase(), n = 0, s = l.length; n < s; ++n)
          if (
            ((o = l[n].name.toUpperCase()),
            (r = l[n].abbr.toUpperCase()),
            (a = l[n].narrow.toUpperCase()),
            i)
          )
            switch (e) {
              case "N":
              case "NN":
              case "NNN":
                if (r === t) return l[n];
                break;
              case "NNNN":
                if (o === t) return l[n];
                break;
              case "NNNNN":
                if (a === t) return l[n];
            }
          else if ([o, r, a].indexOf(t) >= 0) return l[n];
      }
      function Os(t, e) {
        var i = t.since <= t.until ? 1 : -1;
        return void 0 === e
          ? n(t.since).year()
          : n(t.since).year() + (e - t.offset) * i;
      }
      function Ps() {
        var t,
          e,
          i,
          n = this.localeData().eras();
        for (t = 0, e = n.length; t < e; ++t) {
          if (
            ((i = this.clone().startOf("day").valueOf()),
            n[t].since <= i && i <= n[t].until)
          )
            return n[t].name;
          if (n[t].until <= i && i <= n[t].since) return n[t].name;
        }
        return "";
      }
      function Es() {
        var t,
          e,
          i,
          n = this.localeData().eras();
        for (t = 0, e = n.length; t < e; ++t) {
          if (
            ((i = this.clone().startOf("day").valueOf()),
            n[t].since <= i && i <= n[t].until)
          )
            return n[t].narrow;
          if (n[t].until <= i && i <= n[t].since) return n[t].narrow;
        }
        return "";
      }
      function Ls() {
        var t,
          e,
          i,
          n = this.localeData().eras();
        for (t = 0, e = n.length; t < e; ++t) {
          if (
            ((i = this.clone().startOf("day").valueOf()),
            n[t].since <= i && i <= n[t].until)
          )
            return n[t].abbr;
          if (n[t].until <= i && i <= n[t].since) return n[t].abbr;
        }
        return "";
      }
      function Rs() {
        var t,
          e,
          i,
          s,
          o = this.localeData().eras();
        for (t = 0, e = o.length; t < e; ++t)
          if (
            ((i = o[t].since <= o[t].until ? 1 : -1),
            (s = this.clone().startOf("day").valueOf()),
            (o[t].since <= s && s <= o[t].until) ||
              (o[t].until <= s && s <= o[t].since))
          )
            return (this.year() - n(o[t].since).year()) * i + o[t].offset;
        return this.year();
      }
      function Is(t) {
        return (
          a(this, "_erasNameRegex") || Ws.call(this),
          t ? this._erasNameRegex : this._erasRegex
        );
      }
      function Fs(t) {
        return (
          a(this, "_erasAbbrRegex") || Ws.call(this),
          t ? this._erasAbbrRegex : this._erasRegex
        );
      }
      function Ns(t) {
        return (
          a(this, "_erasNarrowRegex") || Ws.call(this),
          t ? this._erasNarrowRegex : this._erasRegex
        );
      }
      function zs(t, e) {
        return e.erasAbbrRegex(t);
      }
      function $s(t, e) {
        return e.erasNameRegex(t);
      }
      function js(t, e) {
        return e.erasNarrowRegex(t);
      }
      function Ys(t, e) {
        return e._eraYearOrdinalRegex || Dt;
      }
      function Ws() {
        var t,
          e,
          i = [],
          n = [],
          s = [],
          o = [],
          r = this.eras();
        for (t = 0, e = r.length; t < e; ++t)
          n.push(Nt(r[t].name)),
            i.push(Nt(r[t].abbr)),
            s.push(Nt(r[t].narrow)),
            o.push(Nt(r[t].name)),
            o.push(Nt(r[t].abbr)),
            o.push(Nt(r[t].narrow));
        (this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i")),
          (this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i")),
          (this._erasAbbrRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i"));
      }
      function Bs(t, e) {
        j(0, [t, t.length], 0, e);
      }
      function Vs(t) {
        return Xs.call(
          this,
          t,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }
      function Hs(t) {
        return Xs.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
      }
      function Us() {
        return ke(this.year(), 1, 4);
      }
      function Gs() {
        return ke(this.isoWeekYear(), 1, 4);
      }
      function Ks() {
        var t = this.localeData()._week;
        return ke(this.year(), t.dow, t.doy);
      }
      function qs() {
        var t = this.localeData()._week;
        return ke(this.weekYear(), t.dow, t.doy);
      }
      function Xs(t, e, i, n, s) {
        var o;
        return null == t
          ? we(this, n, s).year
          : (e > (o = ke(t, n, s)) && (e = o), Zs.call(this, t, e, i, n, s));
      }
      function Zs(t, e, i, n, s) {
        var o = _e(t, e, i, n, s),
          r = ye(o.year, 0, o.dayOfYear);
        return (
          this.year(r.getUTCFullYear()),
          this.month(r.getUTCMonth()),
          this.date(r.getUTCDate()),
          this
        );
      }
      function Js(t) {
        return null == t
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (t - 1) + (this.month() % 3));
      }
      j("N", 0, 0, "eraAbbr"),
        j("NN", 0, 0, "eraAbbr"),
        j("NNN", 0, 0, "eraAbbr"),
        j("NNNN", 0, 0, "eraName"),
        j("NNNNN", 0, 0, "eraNarrow"),
        j("y", ["y", 1], "yo", "eraYear"),
        j("y", ["yy", 2], 0, "eraYear"),
        j("y", ["yyy", 3], 0, "eraYear"),
        j("y", ["yyyy", 4], 0, "eraYear"),
        Rt("N", zs),
        Rt("NN", zs),
        Rt("NNN", zs),
        Rt("NNNN", $s),
        Rt("NNNNN", js),
        $t(["N", "NN", "NNN", "NNNN", "NNNNN"], function (t, e, i, n) {
          var s = i._locale.erasParse(t, n, i._strict);
          s ? (m(i).era = s) : (m(i).invalidEra = t);
        }),
        Rt("y", Dt),
        Rt("yy", Dt),
        Rt("yyy", Dt),
        Rt("yyyy", Dt),
        Rt("yo", Ys),
        $t(["y", "yy", "yyy", "yyyy"], Bt),
        $t(["yo"], function (t, e, i, n) {
          var s;
          i._locale._eraYearOrdinalRegex &&
            (s = t.match(i._locale._eraYearOrdinalRegex)),
            i._locale.eraYearOrdinalParse
              ? (e[Bt] = i._locale.eraYearOrdinalParse(t, s))
              : (e[Bt] = parseInt(t, 10));
        }),
        j(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }),
        j(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }),
        Bs("gggg", "weekYear"),
        Bs("ggggg", "weekYear"),
        Bs("GGGG", "isoWeekYear"),
        Bs("GGGGG", "isoWeekYear"),
        it("weekYear", "gg"),
        it("isoWeekYear", "GG"),
        rt("weekYear", 1),
        rt("isoWeekYear", 1),
        Rt("G", Tt),
        Rt("g", Tt),
        Rt("GG", wt, bt),
        Rt("gg", wt, bt),
        Rt("GGGG", Mt, xt),
        Rt("gggg", Mt, xt),
        Rt("GGGGG", At, _t),
        Rt("ggggg", At, _t),
        jt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
          e[n.substr(0, 2)] = ct(t);
        }),
        jt(["gg", "GG"], function (t, e, i, s) {
          e[s] = n.parseTwoDigitYear(t);
        }),
        j("Q", 0, "Qo", "quarter"),
        it("quarter", "Q"),
        rt("quarter", 7),
        Rt("Q", vt),
        $t("Q", function (t, e) {
          e[Vt] = 3 * (ct(t) - 1);
        }),
        j("D", ["DD", 2], "Do", "date"),
        it("date", "D"),
        rt("date", 9),
        Rt("D", wt),
        Rt("DD", wt, bt),
        Rt("Do", function (t, e) {
          return t
            ? e._dayOfMonthOrdinalParse || e._ordinalParse
            : e._dayOfMonthOrdinalParseLenient;
        }),
        $t(["D", "DD"], Ht),
        $t("Do", function (t, e) {
          e[Ht] = ct(t.match(wt)[0]);
        });
      var Qs = dt("Date", !0);
      function to(t) {
        var e =
          Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
        return null == t ? e : this.add(t - e, "d");
      }
      j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        it("dayOfYear", "DDD"),
        rt("dayOfYear", 4),
        Rt("DDD", St),
        Rt("DDDD", yt),
        $t(["DDD", "DDDD"], function (t, e, i) {
          i._dayOfYear = ct(t);
        }),
        j("m", ["mm", 2], 0, "minute"),
        it("minute", "m"),
        rt("minute", 14),
        Rt("m", wt),
        Rt("mm", wt, bt),
        $t(["m", "mm"], Gt);
      var eo = dt("Minutes", !1);
      j("s", ["ss", 2], 0, "second"),
        it("second", "s"),
        rt("second", 15),
        Rt("s", wt),
        Rt("ss", wt, bt),
        $t(["s", "ss"], Kt);
      var io,
        no,
        so = dt("Seconds", !1);
      for (
        j("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          j(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          j(0, ["SSS", 3], 0, "millisecond"),
          j(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
          }),
          j(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
          }),
          j(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          j(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          j(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          j(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          it("millisecond", "ms"),
          rt("millisecond", 16),
          Rt("S", St, vt),
          Rt("SS", St, bt),
          Rt("SSS", St, yt),
          io = "SSSS";
        io.length <= 9;
        io += "S"
      )
        Rt(io, Dt);
      function oo(t, e) {
        e[qt] = ct(1e3 * ("0." + t));
      }
      for (io = "S"; io.length <= 9; io += "S") $t(io, oo);
      function ro() {
        return this._isUTC ? "UTC" : "";
      }
      function ao() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      (no = dt("Milliseconds", !1)),
        j("z", 0, 0, "zoneAbbr"),
        j("zz", 0, 0, "zoneName");
      var lo = w.prototype;
      function ho(t) {
        return Ki(1e3 * t);
      }
      function co() {
        return Ki.apply(null, arguments).parseZone();
      }
      function uo(t) {
        return t;
      }
      (lo.add = Rn),
        (lo.calendar = Wn),
        (lo.clone = Bn),
        (lo.diff = Xn),
        (lo.endOf = vs),
        (lo.format = es),
        (lo.from = is),
        (lo.fromNow = ns),
        (lo.to = ss),
        (lo.toNow = os),
        (lo.get = pt),
        (lo.invalidAt = Ms),
        (lo.isAfter = Vn),
        (lo.isBefore = Hn),
        (lo.isBetween = Un),
        (lo.isSame = Gn),
        (lo.isSameOrAfter = Kn),
        (lo.isSameOrBefore = qn),
        (lo.isValid = Cs),
        (lo.lang = as),
        (lo.locale = rs),
        (lo.localeData = ls),
        (lo.max = Xi),
        (lo.min = qi),
        (lo.parsingFlags = Ss),
        (lo.set = gt),
        (lo.startOf = ms),
        (lo.subtract = In),
        (lo.toArray = _s),
        (lo.toObject = ws),
        (lo.toDate = xs),
        (lo.toISOString = Qn),
        (lo.inspect = ts),
        "undefined" != typeof Symbol &&
          null != Symbol.for &&
          (lo[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return "Moment<" + this.format() + ">";
          }),
        (lo.toJSON = ks),
        (lo.toString = Jn),
        (lo.unix = ys),
        (lo.valueOf = bs),
        (lo.creationData = As),
        (lo.eraName = Ps),
        (lo.eraNarrow = Es),
        (lo.eraAbbr = Ls),
        (lo.eraYear = Rs),
        (lo.year = me),
        (lo.isLeapYear = ve),
        (lo.weekYear = Vs),
        (lo.isoWeekYear = Hs),
        (lo.quarter = lo.quarters = Js),
        (lo.month = ce),
        (lo.daysInMonth = de),
        (lo.week = lo.weeks = De),
        (lo.isoWeek = lo.isoWeeks = Te),
        (lo.weeksInYear = Ks),
        (lo.weeksInWeekYear = qs),
        (lo.isoWeeksInYear = Us),
        (lo.isoWeeksInISOWeekYear = Gs),
        (lo.date = Qs),
        (lo.day = lo.days = Ve),
        (lo.weekday = He),
        (lo.isoWeekday = Ue),
        (lo.dayOfYear = to),
        (lo.hour = lo.hours = ni),
        (lo.minute = lo.minutes = eo),
        (lo.second = lo.seconds = so),
        (lo.millisecond = lo.milliseconds = no),
        (lo.utcOffset = gn),
        (lo.utc = vn),
        (lo.local = bn),
        (lo.parseZone = yn),
        (lo.hasAlignedHourOffset = xn),
        (lo.isDST = _n),
        (lo.isLocal = kn),
        (lo.isUtcOffset = Cn),
        (lo.isUtc = Sn),
        (lo.isUTC = Sn),
        (lo.zoneAbbr = ro),
        (lo.zoneName = ao),
        (lo.dates = S("dates accessor is deprecated. Use date instead.", Qs)),
        (lo.months = S("months accessor is deprecated. Use month instead", ce)),
        (lo.years = S("years accessor is deprecated. Use year instead", me)),
        (lo.zone = S(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          mn
        )),
        (lo.isDSTShifted = S(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          wn
        ));
      var fo = E.prototype;
      function po(t, e, i, n) {
        var s = vi(),
          o = p().set(n, e);
        return s[i](o, t);
      }
      function go(t, e, i) {
        if ((c(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
          return po(t, e, i, "month");
        var n,
          s = [];
        for (n = 0; n < 12; n++) s[n] = po(t, n, i, "month");
        return s;
      }
      function mo(t, e, i, n) {
        "boolean" == typeof t
          ? (c(e) && ((i = e), (e = void 0)), (e = e || ""))
          : ((i = e = t),
            (t = !1),
            c(e) && ((i = e), (e = void 0)),
            (e = e || ""));
        var s,
          o = vi(),
          r = t ? o._week.dow : 0,
          a = [];
        if (null != i) return po(e, (i + r) % 7, n, "day");
        for (s = 0; s < 7; s++) a[s] = po(e, (s + r) % 7, n, "day");
        return a;
      }
      function vo(t, e) {
        return go(t, e, "months");
      }
      function bo(t, e) {
        return go(t, e, "monthsShort");
      }
      function yo(t, e, i) {
        return mo(t, e, i, "weekdays");
      }
      function xo(t, e, i) {
        return mo(t, e, i, "weekdaysShort");
      }
      function _o(t, e, i) {
        return mo(t, e, i, "weekdaysMin");
      }
      (fo.calendar = R),
        (fo.longDateFormat = U),
        (fo.invalidDate = K),
        (fo.ordinal = Z),
        (fo.preparse = uo),
        (fo.postformat = uo),
        (fo.relativeTime = Q),
        (fo.pastFuture = tt),
        (fo.set = O),
        (fo.eras = Ds),
        (fo.erasParse = Ts),
        (fo.erasConvertYear = Os),
        (fo.erasAbbrRegex = Fs),
        (fo.erasNameRegex = Is),
        (fo.erasNarrowRegex = Ns),
        (fo.months = oe),
        (fo.monthsShort = re),
        (fo.monthsParse = le),
        (fo.monthsRegex = fe),
        (fo.monthsShortRegex = ue),
        (fo.week = Ce),
        (fo.firstDayOfYear = Ae),
        (fo.firstDayOfWeek = Me),
        (fo.weekdays = $e),
        (fo.weekdaysMin = Ye),
        (fo.weekdaysShort = je),
        (fo.weekdaysParse = Be),
        (fo.weekdaysRegex = Ge),
        (fo.weekdaysShortRegex = Ke),
        (fo.weekdaysMinRegex = qe),
        (fo.isPM = ei),
        (fo.meridiem = si),
        pi("en", {
          eras: [
            {
              since: "0001-01-01",
              until: 1 / 0,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD",
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC",
            },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (t) {
            var e = t % 10;
            return (
              t +
              (1 === ct((t % 100) / 10)
                ? "th"
                : 1 === e
                ? "st"
                : 2 === e
                ? "nd"
                : 3 === e
                ? "rd"
                : "th")
            );
          },
        }),
        (n.lang = S(
          "moment.lang is deprecated. Use moment.locale instead.",
          pi
        )),
        (n.langData = S(
          "moment.langData is deprecated. Use moment.localeData instead.",
          vi
        ));
      var wo = Math.abs;
      function ko() {
        var t = this._data;
        return (
          (this._milliseconds = wo(this._milliseconds)),
          (this._days = wo(this._days)),
          (this._months = wo(this._months)),
          (t.milliseconds = wo(t.milliseconds)),
          (t.seconds = wo(t.seconds)),
          (t.minutes = wo(t.minutes)),
          (t.hours = wo(t.hours)),
          (t.months = wo(t.months)),
          (t.years = wo(t.years)),
          this
        );
      }
      function Co(t, e, i, n) {
        var s = Dn(e, i);
        return (
          (t._milliseconds += n * s._milliseconds),
          (t._days += n * s._days),
          (t._months += n * s._months),
          t._bubble()
        );
      }
      function So(t, e) {
        return Co(this, t, e, 1);
      }
      function Mo(t, e) {
        return Co(this, t, e, -1);
      }
      function Ao(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t);
      }
      function Do() {
        var t,
          e,
          i,
          n,
          s,
          o = this._milliseconds,
          r = this._days,
          a = this._months,
          l = this._data;
        return (
          (o >= 0 && r >= 0 && a >= 0) ||
            (o <= 0 && r <= 0 && a <= 0) ||
            ((o += 864e5 * Ao(Oo(a) + r)), (r = 0), (a = 0)),
          (l.milliseconds = o % 1e3),
          (t = ht(o / 1e3)),
          (l.seconds = t % 60),
          (e = ht(t / 60)),
          (l.minutes = e % 60),
          (i = ht(e / 60)),
          (l.hours = i % 24),
          (r += ht(i / 24)),
          (a += s = ht(To(r))),
          (r -= Ao(Oo(s))),
          (n = ht(a / 12)),
          (a %= 12),
          (l.days = r),
          (l.months = a),
          (l.years = n),
          this
        );
      }
      function To(t) {
        return (4800 * t) / 146097;
      }
      function Oo(t) {
        return (146097 * t) / 4800;
      }
      function Po(t) {
        if (!this.isValid()) return NaN;
        var e,
          i,
          n = this._milliseconds;
        if ("month" === (t = nt(t)) || "quarter" === t || "year" === t)
          switch (
            ((e = this._days + n / 864e5), (i = this._months + To(e)), t)
          ) {
            case "month":
              return i;
            case "quarter":
              return i / 3;
            case "year":
              return i / 12;
          }
        else
          switch (((e = this._days + Math.round(Oo(this._months))), t)) {
            case "week":
              return e / 7 + n / 6048e5;
            case "day":
              return e + n / 864e5;
            case "hour":
              return 24 * e + n / 36e5;
            case "minute":
              return 1440 * e + n / 6e4;
            case "second":
              return 86400 * e + n / 1e3;
            case "millisecond":
              return Math.floor(864e5 * e) + n;
            default:
              throw new Error("Unknown unit " + t);
          }
      }
      function Eo() {
        return this.isValid()
          ? this._milliseconds +
              864e5 * this._days +
              (this._months % 12) * 2592e6 +
              31536e6 * ct(this._months / 12)
          : NaN;
      }
      function Lo(t) {
        return function () {
          return this.as(t);
        };
      }
      var Ro = Lo("ms"),
        Io = Lo("s"),
        Fo = Lo("m"),
        No = Lo("h"),
        zo = Lo("d"),
        $o = Lo("w"),
        jo = Lo("M"),
        Yo = Lo("Q"),
        Wo = Lo("y");
      function Bo() {
        return Dn(this);
      }
      function Vo(t) {
        return (t = nt(t)), this.isValid() ? this[t + "s"]() : NaN;
      }
      function Ho(t) {
        return function () {
          return this.isValid() ? this._data[t] : NaN;
        };
      }
      var Uo = Ho("milliseconds"),
        Go = Ho("seconds"),
        Ko = Ho("minutes"),
        qo = Ho("hours"),
        Xo = Ho("days"),
        Zo = Ho("months"),
        Jo = Ho("years");
      function Qo() {
        return ht(this.days() / 7);
      }
      var tr = Math.round,
        er = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
      function ir(t, e, i, n, s) {
        return s.relativeTime(e || 1, !!i, t, n);
      }
      function nr(t, e, i, n) {
        var s = Dn(t).abs(),
          o = tr(s.as("s")),
          r = tr(s.as("m")),
          a = tr(s.as("h")),
          l = tr(s.as("d")),
          h = tr(s.as("M")),
          c = tr(s.as("w")),
          d = tr(s.as("y")),
          u =
            (o <= i.ss && ["s", o]) ||
            (o < i.s && ["ss", o]) ||
            (r <= 1 && ["m"]) ||
            (r < i.m && ["mm", r]) ||
            (a <= 1 && ["h"]) ||
            (a < i.h && ["hh", a]) ||
            (l <= 1 && ["d"]) ||
            (l < i.d && ["dd", l]);
        return (
          null != i.w && (u = u || (c <= 1 && ["w"]) || (c < i.w && ["ww", c])),
          ((u = u ||
            (h <= 1 && ["M"]) ||
            (h < i.M && ["MM", h]) ||
            (d <= 1 && ["y"]) || ["yy", d])[2] = e),
          (u[3] = +t > 0),
          (u[4] = n),
          ir.apply(null, u)
        );
      }
      function sr(t) {
        return void 0 === t ? tr : "function" == typeof t && ((tr = t), !0);
      }
      function or(t, e) {
        return (
          void 0 !== er[t] &&
          (void 0 === e
            ? er[t]
            : ((er[t] = e), "s" === t && (er.ss = e - 1), !0))
        );
      }
      function rr(t, e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var i,
          n,
          s = !1,
          o = er;
        return (
          "object" == typeof t && ((e = t), (t = !1)),
          "boolean" == typeof t && (s = t),
          "object" == typeof e &&
            ((o = Object.assign({}, er, e)),
            null != e.s && null == e.ss && (o.ss = e.s - 1)),
          (n = nr(this, !s, o, (i = this.localeData()))),
          s && (n = i.pastFuture(+this, n)),
          i.postformat(n)
        );
      }
      var ar = Math.abs;
      function lr(t) {
        return (t > 0) - (t < 0) || +t;
      }
      function hr() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t,
          e,
          i,
          n,
          s,
          o,
          r,
          a,
          l = ar(this._milliseconds) / 1e3,
          h = ar(this._days),
          c = ar(this._months),
          d = this.asSeconds();
        return d
          ? ((t = ht(l / 60)),
            (e = ht(t / 60)),
            (l %= 60),
            (t %= 60),
            (i = ht(c / 12)),
            (c %= 12),
            (n = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
            (s = d < 0 ? "-" : ""),
            (o = lr(this._months) !== lr(d) ? "-" : ""),
            (r = lr(this._days) !== lr(d) ? "-" : ""),
            (a = lr(this._milliseconds) !== lr(d) ? "-" : ""),
            s +
              "P" +
              (i ? o + i + "Y" : "") +
              (c ? o + c + "M" : "") +
              (h ? r + h + "D" : "") +
              (e || t || l ? "T" : "") +
              (e ? a + e + "H" : "") +
              (t ? a + t + "M" : "") +
              (l ? a + n + "S" : ""))
          : "P0D";
      }
      var cr = rn.prototype;
      return (
        (cr.isValid = sn),
        (cr.abs = ko),
        (cr.add = So),
        (cr.subtract = Mo),
        (cr.as = Po),
        (cr.asMilliseconds = Ro),
        (cr.asSeconds = Io),
        (cr.asMinutes = Fo),
        (cr.asHours = No),
        (cr.asDays = zo),
        (cr.asWeeks = $o),
        (cr.asMonths = jo),
        (cr.asQuarters = Yo),
        (cr.asYears = Wo),
        (cr.valueOf = Eo),
        (cr._bubble = Do),
        (cr.clone = Bo),
        (cr.get = Vo),
        (cr.milliseconds = Uo),
        (cr.seconds = Go),
        (cr.minutes = Ko),
        (cr.hours = qo),
        (cr.days = Xo),
        (cr.weeks = Qo),
        (cr.months = Zo),
        (cr.years = Jo),
        (cr.humanize = rr),
        (cr.toISOString = hr),
        (cr.toString = hr),
        (cr.toJSON = hr),
        (cr.locale = rs),
        (cr.localeData = ls),
        (cr.toIsoString = S(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          hr
        )),
        (cr.lang = as),
        j("X", 0, 0, "unix"),
        j("x", 0, 0, "valueOf"),
        Rt("x", Tt),
        Rt("X", Et),
        $t("X", function (t, e, i) {
          i._d = new Date(1e3 * parseFloat(t));
        }),
        $t("x", function (t, e, i) {
          i._d = new Date(ct(t));
        }),
        //! moment.js
        (n.version = "2.29.4"),
        s(Ki),
        (n.fn = lo),
        (n.min = Ji),
        (n.max = Qi),
        (n.now = tn),
        (n.utc = p),
        (n.unix = ho),
        (n.months = vo),
        (n.isDate = d),
        (n.locale = pi),
        (n.invalid = b),
        (n.duration = Dn),
        (n.isMoment = k),
        (n.weekdays = yo),
        (n.parseZone = co),
        (n.localeData = vi),
        (n.isDuration = an),
        (n.monthsShort = bo),
        (n.weekdaysMin = _o),
        (n.defineLocale = gi),
        (n.updateLocale = mi),
        (n.locales = bi),
        (n.weekdaysShort = xo),
        (n.normalizeUnits = nt),
        (n.relativeTimeRounding = sr),
        (n.relativeTimeThreshold = or),
        (n.calendarFormat = Yn),
        (n.prototype = lo),
        (n.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM",
        }),
        n
      );
    })();
  })(yu);
  var xu = Rr(yu.exports);
  /*!
   * chartjs-adapter-moment v1.0.1
   * https://www.chartjs.org
   * (c) 2022 chartjs-adapter-moment Contributors
   * Released under the MIT license
   */
  const _u = {
    datetime: "MMM D, YYYY, h:mm:ss a",
    millisecond: "h:mm:ss.SSS a",
    second: "h:mm:ss a",
    minute: "h:mm a",
    hour: "hA",
    day: "MMM D",
    week: "ll",
    month: "MMM YYYY",
    quarter: "[Q]Q - YYYY",
    year: "YYYY",
  };
  en._date.override(
    "function" == typeof xu
      ? {
          _id: "moment",
          formats: function () {
            return _u;
          },
          parse: function (t, e) {
            return (
              "string" == typeof t && "string" == typeof e
                ? (t = xu(t, e))
                : t instanceof xu || (t = xu(t)),
              t.isValid() ? t.valueOf() : null
            );
          },
          format: function (t, e) {
            return xu(t).format(e);
          },
          add: function (t, e, i) {
            return xu(t).add(e, i).valueOf();
          },
          diff: function (t, e, i) {
            return xu(t).diff(xu(e), i);
          },
          startOf: function (t, e, i) {
            return (
              (t = xu(t)),
              "isoWeek" === e
                ? ((i = Math.trunc(Math.min(Math.max(0, i), 6))),
                  t.isoWeekday(i).startOf("day").valueOf())
                : t.startOf(e).valueOf()
            );
          },
          endOf: function (t, e) {
            return xu(t).endOf(e).valueOf();
          },
        }
      : {}
  );
  var wu = { exports: {} };
  /*! Hammer.JS - v2.0.7 - 2016-04-22
   * http://hammerjs.github.io/
   *
   * Copyright (c) 2016 Jorik Tangelder;
   * Licensed under the MIT license */ !(function (t) {
    !(function (e, i, n, s) {
      var o,
        r = ["", "webkit", "Moz", "MS", "ms", "o"],
        a = i.createElement("div"),
        l = "function",
        h = Math.round,
        c = Math.abs,
        d = Date.now;
      function u(t, e, i) {
        return setTimeout(y(t, i), e);
      }
      function f(t, e, i) {
        return !!Array.isArray(t) && (p(t, i[e], i), !0);
      }
      function p(t, e, i) {
        var n;
        if (t)
          if (t.forEach) t.forEach(e, i);
          else if (t.length !== s)
            for (n = 0; n < t.length; ) e.call(i, t[n], n, t), n++;
          else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t);
      }
      function g(t, i, n) {
        var s = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function () {
          var i = new Error("get-stack-trace"),
            n =
              i && i.stack
                ? i.stack
                    .replace(/^[^\(]+?[\n$]/gm, "")
                    .replace(/^\s+at\s+/gm, "")
                    .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                : "Unknown Stack Trace",
            o = e.console && (e.console.warn || e.console.log);
          return o && o.call(e.console, s, n), t.apply(this, arguments);
        };
      }
      o =
        "function" != typeof Object.assign
          ? function (t) {
              if (t === s || null === t)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (n !== s && null !== n)
                  for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o]);
              }
              return e;
            }
          : Object.assign;
      var m = g(
          function (t, e, i) {
            for (var n = Object.keys(e), o = 0; o < n.length; )
              (!i || (i && t[n[o]] === s)) && (t[n[o]] = e[n[o]]), o++;
            return t;
          },
          "extend",
          "Use `assign`."
        ),
        v = g(
          function (t, e) {
            return m(t, e, !0);
          },
          "merge",
          "Use `assign`."
        );
      function b(t, e, i) {
        var n,
          s = e.prototype;
        ((n = t.prototype = Object.create(s)).constructor = t),
          (n._super = s),
          i && o(n, i);
      }
      function y(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      function x(t, e) {
        return typeof t == l ? t.apply((e && e[0]) || s, e) : t;
      }
      function _(t, e) {
        return t === s ? e : t;
      }
      function w(t, e, i) {
        p(M(e), function (e) {
          t.addEventListener(e, i, !1);
        });
      }
      function k(t, e, i) {
        p(M(e), function (e) {
          t.removeEventListener(e, i, !1);
        });
      }
      function C(t, e) {
        for (; t; ) {
          if (t == e) return !0;
          t = t.parentNode;
        }
        return !1;
      }
      function S(t, e) {
        return t.indexOf(e) > -1;
      }
      function M(t) {
        return t.trim().split(/\s+/g);
      }
      function A(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);
        for (var n = 0; n < t.length; ) {
          if ((i && t[n][i] == e) || (!i && t[n] === e)) return n;
          n++;
        }
        return -1;
      }
      function D(t) {
        return Array.prototype.slice.call(t, 0);
      }
      function T(t, e, i) {
        for (var n = [], s = [], o = 0; o < t.length; ) {
          var r = e ? t[o][e] : t[o];
          A(s, r) < 0 && n.push(t[o]), (s[o] = r), o++;
        }
        return (
          i &&
            (n = e
              ? n.sort(function (t, i) {
                  return t[e] > i[e];
                })
              : n.sort()),
          n
        );
      }
      function O(t, e) {
        for (
          var i, n, o = e[0].toUpperCase() + e.slice(1), a = 0;
          a < r.length;

        ) {
          if ((n = (i = r[a]) ? i + o : e) in t) return n;
          a++;
        }
        return s;
      }
      var P = 1;
      function E(t) {
        var i = t.ownerDocument || t;
        return i.defaultView || i.parentWindow || e;
      }
      var L = "ontouchstart" in e,
        R = O(e, "PointerEvent") !== s,
        I =
          L &&
          /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        F = "touch",
        N = "mouse",
        z = 25,
        $ = 1,
        j = 4,
        Y = 8,
        W = 1,
        B = 2,
        V = 4,
        H = 8,
        U = 16,
        G = B | V,
        K = H | U,
        q = G | K,
        X = ["x", "y"],
        Z = ["clientX", "clientY"];
      function J(t, e) {
        var i = this;
        (this.manager = t),
          (this.callback = e),
          (this.element = t.element),
          (this.target = t.options.inputTarget),
          (this.domHandler = function (e) {
            x(t.options.enable, [t]) && i.handler(e);
          }),
          this.init();
      }
      function Q(t, e, i) {
        var n = i.pointers.length,
          o = i.changedPointers.length,
          r = e & $ && n - o == 0,
          a = e & (j | Y) && n - o == 0;
        (i.isFirst = !!r),
          (i.isFinal = !!a),
          r && (t.session = {}),
          (i.eventType = e),
          (function (t, e) {
            var i = t.session,
              n = e.pointers,
              o = n.length;
            i.firstInput || (i.firstInput = tt(e));
            o > 1 && !i.firstMultiple
              ? (i.firstMultiple = tt(e))
              : 1 === o && (i.firstMultiple = !1);
            var r = i.firstInput,
              a = i.firstMultiple,
              l = a ? a.center : r.center,
              h = (e.center = et(n));
            (e.timeStamp = d()),
              (e.deltaTime = e.timeStamp - r.timeStamp),
              (e.angle = ot(l, h)),
              (e.distance = st(l, h)),
              (function (t, e) {
                var i = e.center,
                  n = t.offsetDelta || {},
                  s = t.prevDelta || {},
                  o = t.prevInput || {};
                (e.eventType !== $ && o.eventType !== j) ||
                  ((s = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
                  (n = t.offsetDelta = { x: i.x, y: i.y }));
                (e.deltaX = s.x + (i.x - n.x)), (e.deltaY = s.y + (i.y - n.y));
              })(i, e),
              (e.offsetDirection = nt(e.deltaX, e.deltaY));
            var u = it(e.deltaTime, e.deltaX, e.deltaY);
            (e.overallVelocityX = u.x),
              (e.overallVelocityY = u.y),
              (e.overallVelocity = c(u.x) > c(u.y) ? u.x : u.y),
              (e.scale = a
                ? ((f = a.pointers),
                  (p = n),
                  st(p[0], p[1], Z) / st(f[0], f[1], Z))
                : 1),
              (e.rotation = a
                ? (function (t, e) {
                    return ot(e[1], e[0], Z) + ot(t[1], t[0], Z);
                  })(a.pointers, n)
                : 0),
              (e.maxPointers = i.prevInput
                ? e.pointers.length > i.prevInput.maxPointers
                  ? e.pointers.length
                  : i.prevInput.maxPointers
                : e.pointers.length),
              (function (t, e) {
                var i,
                  n,
                  o,
                  r,
                  a = t.lastInterval || e,
                  l = e.timeStamp - a.timeStamp;
                if (e.eventType != Y && (l > z || a.velocity === s)) {
                  var h = e.deltaX - a.deltaX,
                    d = e.deltaY - a.deltaY,
                    u = it(l, h, d);
                  (n = u.x),
                    (o = u.y),
                    (i = c(u.x) > c(u.y) ? u.x : u.y),
                    (r = nt(h, d)),
                    (t.lastInterval = e);
                } else
                  (i = a.velocity),
                    (n = a.velocityX),
                    (o = a.velocityY),
                    (r = a.direction);
                (e.velocity = i),
                  (e.velocityX = n),
                  (e.velocityY = o),
                  (e.direction = r);
              })(i, e);
            var f, p;
            var g = t.element;
            C(e.srcEvent.target, g) && (g = e.srcEvent.target);
            e.target = g;
          })(t, i),
          t.emit("hammer.input", i),
          t.recognize(i),
          (t.session.prevInput = i);
      }
      function tt(t) {
        for (var e = [], i = 0; i < t.pointers.length; )
          (e[i] = {
            clientX: h(t.pointers[i].clientX),
            clientY: h(t.pointers[i].clientY),
          }),
            i++;
        return {
          timeStamp: d(),
          pointers: e,
          center: et(e),
          deltaX: t.deltaX,
          deltaY: t.deltaY,
        };
      }
      function et(t) {
        var e = t.length;
        if (1 === e) return { x: h(t[0].clientX), y: h(t[0].clientY) };
        for (var i = 0, n = 0, s = 0; s < e; )
          (i += t[s].clientX), (n += t[s].clientY), s++;
        return { x: h(i / e), y: h(n / e) };
      }
      function it(t, e, i) {
        return { x: e / t || 0, y: i / t || 0 };
      }
      function nt(t, e) {
        return t === e ? W : c(t) >= c(e) ? (t < 0 ? B : V) : e < 0 ? H : U;
      }
      function st(t, e, i) {
        i || (i = X);
        var n = e[i[0]] - t[i[0]],
          s = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + s * s);
      }
      function ot(t, e, i) {
        i || (i = X);
        var n = e[i[0]] - t[i[0]],
          s = e[i[1]] - t[i[1]];
        return (180 * Math.atan2(s, n)) / Math.PI;
      }
      J.prototype = {
        handler: function () {},
        init: function () {
          this.evEl && w(this.element, this.evEl, this.domHandler),
            this.evTarget && w(this.target, this.evTarget, this.domHandler),
            this.evWin && w(E(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
          this.evEl && k(this.element, this.evEl, this.domHandler),
            this.evTarget && k(this.target, this.evTarget, this.domHandler),
            this.evWin && k(E(this.element), this.evWin, this.domHandler);
        },
      };
      var rt = { mousedown: $, mousemove: 2, mouseup: j },
        at = "mousedown",
        lt = "mousemove mouseup";
      function ht() {
        (this.evEl = at),
          (this.evWin = lt),
          (this.pressed = !1),
          J.apply(this, arguments);
      }
      b(ht, J, {
        handler: function (t) {
          var e = rt[t.type];
          e & $ && 0 === t.button && (this.pressed = !0),
            2 & e && 1 !== t.which && (e = j),
            this.pressed &&
              (e & j && (this.pressed = !1),
              this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: N,
                srcEvent: t,
              }));
        },
      });
      var ct = {
          pointerdown: $,
          pointermove: 2,
          pointerup: j,
          pointercancel: Y,
          pointerout: Y,
        },
        dt = { 2: F, 3: "pen", 4: N, 5: "kinect" },
        ut = "pointerdown",
        ft = "pointermove pointerup pointercancel";
      function pt() {
        (this.evEl = ut),
          (this.evWin = ft),
          J.apply(this, arguments),
          (this.store = this.manager.session.pointerEvents = []);
      }
      e.MSPointerEvent &&
        !e.PointerEvent &&
        ((ut = "MSPointerDown"),
        (ft = "MSPointerMove MSPointerUp MSPointerCancel")),
        b(pt, J, {
          handler: function (t) {
            var e = this.store,
              i = !1,
              n = t.type.toLowerCase().replace("ms", ""),
              s = ct[n],
              o = dt[t.pointerType] || t.pointerType,
              r = o == F,
              a = A(e, t.pointerId, "pointerId");
            s & $ && (0 === t.button || r)
              ? a < 0 && (e.push(t), (a = e.length - 1))
              : s & (j | Y) && (i = !0),
              a < 0 ||
                ((e[a] = t),
                this.callback(this.manager, s, {
                  pointers: e,
                  changedPointers: [t],
                  pointerType: o,
                  srcEvent: t,
                }),
                i && e.splice(a, 1));
          },
        });
      var gt = { touchstart: $, touchmove: 2, touchend: j, touchcancel: Y };
      function mt() {
        (this.evTarget = "touchstart"),
          (this.evWin = "touchstart touchmove touchend touchcancel"),
          (this.started = !1),
          J.apply(this, arguments);
      }
      function vt(t, e) {
        var i = D(t.touches),
          n = D(t.changedTouches);
        return e & (j | Y) && (i = T(i.concat(n), "identifier", !0)), [i, n];
      }
      b(mt, J, {
        handler: function (t) {
          var e = gt[t.type];
          if ((e === $ && (this.started = !0), this.started)) {
            var i = vt.call(this, t, e);
            e & (j | Y) &&
              i[0].length - i[1].length == 0 &&
              (this.started = !1),
              this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: F,
                srcEvent: t,
              });
          }
        },
      });
      var bt = { touchstart: $, touchmove: 2, touchend: j, touchcancel: Y },
        yt = "touchstart touchmove touchend touchcancel";
      function xt() {
        (this.evTarget = yt), (this.targetIds = {}), J.apply(this, arguments);
      }
      function _t(t, e) {
        var i = D(t.touches),
          n = this.targetIds;
        if (e & (2 | $) && 1 === i.length)
          return (n[i[0].identifier] = !0), [i, i];
        var s,
          o,
          r = D(t.changedTouches),
          a = [],
          l = this.target;
        if (
          ((o = i.filter(function (t) {
            return C(t.target, l);
          })),
          e === $)
        )
          for (s = 0; s < o.length; ) (n[o[s].identifier] = !0), s++;
        for (s = 0; s < r.length; )
          n[r[s].identifier] && a.push(r[s]),
            e & (j | Y) && delete n[r[s].identifier],
            s++;
        return a.length ? [T(o.concat(a), "identifier", !0), a] : void 0;
      }
      b(xt, J, {
        handler: function (t) {
          var e = bt[t.type],
            i = _t.call(this, t, e);
          i &&
            this.callback(this.manager, e, {
              pointers: i[0],
              changedPointers: i[1],
              pointerType: F,
              srcEvent: t,
            });
        },
      });
      var wt = 2500;
      function kt() {
        J.apply(this, arguments);
        var t = y(this.handler, this);
        (this.touch = new xt(this.manager, t)),
          (this.mouse = new ht(this.manager, t)),
          (this.primaryTouch = null),
          (this.lastTouches = []);
      }
      function Ct(t, e) {
        t & $
          ? ((this.primaryTouch = e.changedPointers[0].identifier),
            St.call(this, e))
          : t & (j | Y) && St.call(this, e);
      }
      function St(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
          var i = { x: e.clientX, y: e.clientY };
          this.lastTouches.push(i);
          var n = this.lastTouches;
          setTimeout(function () {
            var t = n.indexOf(i);
            t > -1 && n.splice(t, 1);
          }, wt);
        }
      }
      function Mt(t) {
        for (
          var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0;
          n < this.lastTouches.length;
          n++
        ) {
          var s = this.lastTouches[n],
            o = Math.abs(e - s.x),
            r = Math.abs(i - s.y);
          if (o <= 25 && r <= 25) return !0;
        }
        return !1;
      }
      b(kt, J, {
        handler: function (t, e, i) {
          var n = i.pointerType == F,
            s = i.pointerType == N;
          if (
            !(
              s &&
              i.sourceCapabilities &&
              i.sourceCapabilities.firesTouchEvents
            )
          ) {
            if (n) Ct.call(this, e, i);
            else if (s && Mt.call(this, i)) return;
            this.callback(t, e, i);
          }
        },
        destroy: function () {
          this.touch.destroy(), this.mouse.destroy();
        },
      });
      var At = O(a.style, "touchAction"),
        Dt = At !== s,
        Tt = "compute",
        Ot = "auto",
        Pt = "manipulation",
        Et = "none",
        Lt = "pan-x",
        Rt = "pan-y",
        It = (function () {
          if (!Dt) return !1;
          var t = {},
            i = e.CSS && e.CSS.supports;
          return (
            [
              "auto",
              "manipulation",
              "pan-y",
              "pan-x",
              "pan-x pan-y",
              "none",
            ].forEach(function (n) {
              t[n] = !i || e.CSS.supports("touch-action", n);
            }),
            t
          );
        })();
      function Ft(t, e) {
        (this.manager = t), this.set(e);
      }
      Ft.prototype = {
        set: function (t) {
          t == Tt && (t = this.compute()),
            Dt &&
              this.manager.element.style &&
              It[t] &&
              (this.manager.element.style[At] = t),
            (this.actions = t.toLowerCase().trim());
        },
        update: function () {
          this.set(this.manager.options.touchAction);
        },
        compute: function () {
          var t = [];
          return (
            p(this.manager.recognizers, function (e) {
              x(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
            }),
            (function (t) {
              if (S(t, Et)) return Et;
              var e = S(t, Lt),
                i = S(t, Rt);
              if (e && i) return Et;
              if (e || i) return e ? Lt : Rt;
              if (S(t, Pt)) return Pt;
              return Ot;
            })(t.join(" "))
          );
        },
        preventDefaults: function (t) {
          var e = t.srcEvent,
            i = t.offsetDirection;
          if (this.manager.session.prevented) e.preventDefault();
          else {
            var n = this.actions,
              s = S(n, Et) && !It[Et],
              o = S(n, Rt) && !It[Rt],
              r = S(n, Lt) && !It[Lt];
            if (s) {
              var a = 1 === t.pointers.length,
                l = t.distance < 2,
                h = t.deltaTime < 250;
              if (a && l && h) return;
            }
            if (!r || !o)
              return s || (o && i & G) || (r && i & K)
                ? this.preventSrc(e)
                : void 0;
          }
        },
        preventSrc: function (t) {
          (this.manager.session.prevented = !0), t.preventDefault();
        },
      };
      var Nt = 1,
        zt = 32;
      function $t(t) {
        (this.options = o({}, this.defaults, t || {})),
          (this.id = P++),
          (this.manager = null),
          (this.options.enable = _(this.options.enable, !0)),
          (this.state = Nt),
          (this.simultaneous = {}),
          (this.requireFail = []);
      }
      function jt(t) {
        return 16 & t
          ? "cancel"
          : 8 & t
          ? "end"
          : 4 & t
          ? "move"
          : 2 & t
          ? "start"
          : "";
      }
      function Yt(t) {
        return t == U
          ? "down"
          : t == H
          ? "up"
          : t == B
          ? "left"
          : t == V
          ? "right"
          : "";
      }
      function Wt(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t;
      }
      function Bt() {
        $t.apply(this, arguments);
      }
      function Vt() {
        Bt.apply(this, arguments), (this.pX = null), (this.pY = null);
      }
      function Ht() {
        Bt.apply(this, arguments);
      }
      function Ut() {
        $t.apply(this, arguments), (this._timer = null), (this._input = null);
      }
      function Gt() {
        Bt.apply(this, arguments);
      }
      function Kt() {
        Bt.apply(this, arguments);
      }
      function qt() {
        $t.apply(this, arguments),
          (this.pTime = !1),
          (this.pCenter = !1),
          (this._timer = null),
          (this._input = null),
          (this.count = 0);
      }
      function Xt(t, e) {
        return (
          ((e = e || {}).recognizers = _(e.recognizers, Xt.defaults.preset)),
          new Zt(t, e)
        );
      }
      ($t.prototype = {
        defaults: {},
        set: function (t) {
          return (
            o(this.options, t),
            this.manager && this.manager.touchAction.update(),
            this
          );
        },
        recognizeWith: function (t) {
          if (f(t, "recognizeWith", this)) return this;
          var e = this.simultaneous;
          return (
            e[(t = Wt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)),
            this
          );
        },
        dropRecognizeWith: function (t) {
          return (
            f(t, "dropRecognizeWith", this) ||
              ((t = Wt(t, this)), delete this.simultaneous[t.id]),
            this
          );
        },
        requireFailure: function (t) {
          if (f(t, "requireFailure", this)) return this;
          var e = this.requireFail;
          return (
            -1 === A(e, (t = Wt(t, this))) &&
              (e.push(t), t.requireFailure(this)),
            this
          );
        },
        dropRequireFailure: function (t) {
          if (f(t, "dropRequireFailure", this)) return this;
          t = Wt(t, this);
          var e = A(this.requireFail, t);
          return e > -1 && this.requireFail.splice(e, 1), this;
        },
        hasRequireFailures: function () {
          return this.requireFail.length > 0;
        },
        canRecognizeWith: function (t) {
          return !!this.simultaneous[t.id];
        },
        emit: function (t) {
          var e = this,
            i = this.state;
          function n(i) {
            e.manager.emit(i, t);
          }
          i < 8 && n(e.options.event + jt(i)),
            n(e.options.event),
            t.additionalEvent && n(t.additionalEvent),
            i >= 8 && n(e.options.event + jt(i));
        },
        tryEmit: function (t) {
          if (this.canEmit()) return this.emit(t);
          this.state = zt;
        },
        canEmit: function () {
          for (var t = 0; t < this.requireFail.length; ) {
            if (!(this.requireFail[t].state & (zt | Nt))) return !1;
            t++;
          }
          return !0;
        },
        recognize: function (t) {
          var e = o({}, t);
          if (!x(this.options.enable, [this, e]))
            return this.reset(), void (this.state = zt);
          56 & this.state && (this.state = Nt),
            (this.state = this.process(e)),
            30 & this.state && this.tryEmit(e);
        },
        process: function (t) {},
        getTouchAction: function () {},
        reset: function () {},
      }),
        b(Bt, $t, {
          defaults: { pointers: 1 },
          attrTest: function (t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e;
          },
          process: function (t) {
            var e = this.state,
              i = t.eventType,
              n = 6 & e,
              s = this.attrTest(t);
            return n && (i & Y || !s)
              ? 16 | e
              : n || s
              ? i & j
                ? 8 | e
                : 2 & e
                ? 4 | e
                : 2
              : zt;
          },
        }),
        b(Vt, Bt, {
          defaults: { event: "pan", threshold: 10, pointers: 1, direction: q },
          getTouchAction: function () {
            var t = this.options.direction,
              e = [];
            return t & G && e.push(Rt), t & K && e.push(Lt), e;
          },
          directionTest: function (t) {
            var e = this.options,
              i = !0,
              n = t.distance,
              s = t.direction,
              o = t.deltaX,
              r = t.deltaY;
            return (
              s & e.direction ||
                (e.direction & G
                  ? ((s = 0 === o ? W : o < 0 ? B : V),
                    (i = o != this.pX),
                    (n = Math.abs(t.deltaX)))
                  : ((s = 0 === r ? W : r < 0 ? H : U),
                    (i = r != this.pY),
                    (n = Math.abs(t.deltaY)))),
              (t.direction = s),
              i && n > e.threshold && s & e.direction
            );
          },
          attrTest: function (t) {
            return (
              Bt.prototype.attrTest.call(this, t) &&
              (2 & this.state || (!(2 & this.state) && this.directionTest(t)))
            );
          },
          emit: function (t) {
            (this.pX = t.deltaX), (this.pY = t.deltaY);
            var e = Yt(t.direction);
            e && (t.additionalEvent = this.options.event + e),
              this._super.emit.call(this, t);
          },
        }),
        b(Ht, Bt, {
          defaults: { event: "pinch", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return [Et];
          },
          attrTest: function (t) {
            return (
              this._super.attrTest.call(this, t) &&
              (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
            );
          },
          emit: function (t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e;
            }
            this._super.emit.call(this, t);
          },
        }),
        b(Ut, $t, {
          defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
          getTouchAction: function () {
            return [Ot];
          },
          process: function (t) {
            var e = this.options,
              i = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              s = t.deltaTime > e.time;
            if (((this._input = t), !n || !i || (t.eventType & (j | Y) && !s)))
              this.reset();
            else if (t.eventType & $)
              this.reset(),
                (this._timer = u(
                  function () {
                    (this.state = 8), this.tryEmit();
                  },
                  e.time,
                  this
                ));
            else if (t.eventType & j) return 8;
            return zt;
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function (t) {
            8 === this.state &&
              (t && t.eventType & j
                ? this.manager.emit(this.options.event + "up", t)
                : ((this._input.timeStamp = d()),
                  this.manager.emit(this.options.event, this._input)));
          },
        }),
        b(Gt, Bt, {
          defaults: { event: "rotate", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return [Et];
          },
          attrTest: function (t) {
            return (
              this._super.attrTest.call(this, t) &&
              (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
            );
          },
        }),
        b(Kt, Bt, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: G | K,
            pointers: 1,
          },
          getTouchAction: function () {
            return Vt.prototype.getTouchAction.call(this);
          },
          attrTest: function (t) {
            var e,
              i = this.options.direction;
            return (
              i & (G | K)
                ? (e = t.overallVelocity)
                : i & G
                ? (e = t.overallVelocityX)
                : i & K && (e = t.overallVelocityY),
              this._super.attrTest.call(this, t) &&
                i & t.offsetDirection &&
                t.distance > this.options.threshold &&
                t.maxPointers == this.options.pointers &&
                c(e) > this.options.velocity &&
                t.eventType & j
            );
          },
          emit: function (t) {
            var e = Yt(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t),
              this.manager.emit(this.options.event, t);
          },
        }),
        b(qt, $t, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10,
          },
          getTouchAction: function () {
            return [Pt];
          },
          process: function (t) {
            var e = this.options,
              i = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              s = t.deltaTime < e.time;
            if ((this.reset(), t.eventType & $ && 0 === this.count))
              return this.failTimeout();
            if (n && s && i) {
              if (t.eventType != j) return this.failTimeout();
              var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                r =
                  !this.pCenter || st(this.pCenter, t.center) < e.posThreshold;
              if (
                ((this.pTime = t.timeStamp),
                (this.pCenter = t.center),
                r && o ? (this.count += 1) : (this.count = 1),
                (this._input = t),
                0 === this.count % e.taps)
              )
                return this.hasRequireFailures()
                  ? ((this._timer = u(
                      function () {
                        (this.state = 8), this.tryEmit();
                      },
                      e.interval,
                      this
                    )),
                    2)
                  : 8;
            }
            return zt;
          },
          failTimeout: function () {
            return (
              (this._timer = u(
                function () {
                  this.state = zt;
                },
                this.options.interval,
                this
              )),
              zt
            );
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function () {
            8 == this.state &&
              ((this._input.tapCount = this.count),
              this.manager.emit(this.options.event, this._input));
          },
        }),
        (Xt.VERSION = "2.0.7"),
        (Xt.defaults = {
          domEvents: !1,
          touchAction: Tt,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Gt, { enable: !1 }],
            [Ht, { enable: !1 }, ["rotate"]],
            [Kt, { direction: G }],
            [Vt, { direction: G }, ["swipe"]],
            [qt],
            [qt, { event: "doubletap", taps: 2 }, ["tap"]],
            [Ut],
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)",
          },
        });
      function Zt(t, e) {
        var i;
        (this.options = o({}, Xt.defaults, e || {})),
          (this.options.inputTarget = this.options.inputTarget || t),
          (this.handlers = {}),
          (this.session = {}),
          (this.recognizers = []),
          (this.oldCssProps = {}),
          (this.element = t),
          (this.input = new ((i = this).options.inputClass ||
            (R ? pt : I ? xt : L ? kt : ht))(i, Q)),
          (this.touchAction = new Ft(this, this.options.touchAction)),
          Jt(this, !0),
          p(
            this.options.recognizers,
            function (t) {
              var e = this.add(new t[0](t[1]));
              t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
            },
            this
          );
      }
      function Jt(t, e) {
        var i,
          n = t.element;
        n.style &&
          (p(t.options.cssProps, function (s, o) {
            (i = O(n.style, o)),
              e
                ? ((t.oldCssProps[i] = n.style[i]), (n.style[i] = s))
                : (n.style[i] = t.oldCssProps[i] || "");
          }),
          e || (t.oldCssProps = {}));
      }
      (Zt.prototype = {
        set: function (t) {
          return (
            o(this.options, t),
            t.touchAction && this.touchAction.update(),
            t.inputTarget &&
              (this.input.destroy(),
              (this.input.target = t.inputTarget),
              this.input.init()),
            this
          );
        },
        stop: function (t) {
          this.session.stopped = t ? 2 : 1;
        },
        recognize: function (t) {
          var e = this.session;
          if (!e.stopped) {
            var i;
            this.touchAction.preventDefaults(t);
            var n = this.recognizers,
              s = e.curRecognizer;
            (!s || (s && 8 & s.state)) && (s = e.curRecognizer = null);
            for (var o = 0; o < n.length; )
              (i = n[o]),
                2 === e.stopped || (s && i != s && !i.canRecognizeWith(s))
                  ? i.reset()
                  : i.recognize(t),
                !s && 14 & i.state && (s = e.curRecognizer = i),
                o++;
          }
        },
        get: function (t) {
          if (t instanceof $t) return t;
          for (var e = this.recognizers, i = 0; i < e.length; i++)
            if (e[i].options.event == t) return e[i];
          return null;
        },
        add: function (t) {
          if (f(t, "add", this)) return this;
          var e = this.get(t.options.event);
          return (
            e && this.remove(e),
            this.recognizers.push(t),
            (t.manager = this),
            this.touchAction.update(),
            t
          );
        },
        remove: function (t) {
          if (f(t, "remove", this)) return this;
          if ((t = this.get(t))) {
            var e = this.recognizers,
              i = A(e, t);
            -1 !== i && (e.splice(i, 1), this.touchAction.update());
          }
          return this;
        },
        on: function (t, e) {
          if (t !== s && e !== s) {
            var i = this.handlers;
            return (
              p(M(t), function (t) {
                (i[t] = i[t] || []), i[t].push(e);
              }),
              this
            );
          }
        },
        off: function (t, e) {
          if (t !== s) {
            var i = this.handlers;
            return (
              p(M(t), function (t) {
                e ? i[t] && i[t].splice(A(i[t], e), 1) : delete i[t];
              }),
              this
            );
          }
        },
        emit: function (t, e) {
          this.options.domEvents &&
            (function (t, e) {
              var n = i.createEvent("Event");
              n.initEvent(t, !0, !0),
                (n.gesture = e),
                e.target.dispatchEvent(n);
            })(t, e);
          var n = this.handlers[t] && this.handlers[t].slice();
          if (n && n.length) {
            (e.type = t),
              (e.preventDefault = function () {
                e.srcEvent.preventDefault();
              });
            for (var s = 0; s < n.length; ) n[s](e), s++;
          }
        },
        destroy: function () {
          this.element && Jt(this, !1),
            (this.handlers = {}),
            (this.session = {}),
            this.input.destroy(),
            (this.element = null);
        },
      }),
        o(Xt, {
          INPUT_START: $,
          INPUT_MOVE: 2,
          INPUT_END: j,
          INPUT_CANCEL: Y,
          STATE_POSSIBLE: Nt,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: zt,
          DIRECTION_NONE: W,
          DIRECTION_LEFT: B,
          DIRECTION_RIGHT: V,
          DIRECTION_UP: H,
          DIRECTION_DOWN: U,
          DIRECTION_HORIZONTAL: G,
          DIRECTION_VERTICAL: K,
          DIRECTION_ALL: q,
          Manager: Zt,
          Input: J,
          TouchAction: Ft,
          TouchInput: xt,
          MouseInput: ht,
          PointerEventInput: pt,
          TouchMouseInput: kt,
          SingleTouchInput: mt,
          Recognizer: $t,
          AttrRecognizer: Bt,
          Tap: qt,
          Pan: Vt,
          Swipe: Kt,
          Pinch: Ht,
          Rotate: Gt,
          Press: Ut,
          on: w,
          off: k,
          each: p,
          merge: v,
          extend: m,
          assign: o,
          inherit: b,
          bindFn: y,
          prefixed: O,
        }),
        ((void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer =
          Xt),
        "function" == typeof s && s.amd
          ? s(function () {
              return Xt;
            })
          : t.exports
          ? (t.exports = Xt)
          : (e.Hammer = Xt);
    })(window, document);
  })(wu);
  var ku = Rr(wu.exports);
  /*!
   * chartjs-plugin-zoom v2.0.1
   * undefined
   * (c) 2016-2023 chartjs-plugin-zoom Contributors
   * Released under the MIT License
   */
  const Cu = (t) => t && t.enabled && t.modifierKey,
    Su = (t, e) => t && e[t + "Key"],
    Mu = (t, e) => t && !e[t + "Key"];
  function Au(t, e, i) {
    return (
      void 0 === t ||
      ("string" == typeof t
        ? -1 !== t.indexOf(e)
        : "function" == typeof t && -1 !== t({ chart: i }).indexOf(e))
    );
  }
  function Du(t, e) {
    return (
      "function" == typeof t && (t = t({ chart: e })),
      "string" == typeof t
        ? { x: -1 !== t.indexOf("x"), y: -1 !== t.indexOf("y") }
        : { x: !1, y: !1 }
    );
  }
  function Tu(t, e, i) {
    const { mode: n = "xy", scaleMode: s, overScaleMode: o } = t || {},
      r = (function ({ x: t, y: e }, i) {
        const n = i.scales,
          s = Object.keys(n);
        for (let i = 0; i < s.length; i++) {
          const o = n[s[i]];
          if (e >= o.top && e <= o.bottom && t >= o.left && t <= o.right)
            return o;
        }
        return null;
      })(e, i),
      a = Du(n, i),
      l = Du(s, i);
    if (o) {
      const t = Du(o, i);
      for (const e of ["x", "y"]) t[e] && ((l[e] = a[e]), (a[e] = !1));
    }
    if (r && l[r.axis]) return [r];
    const h = [];
    return (
      V(i.scales, function (t) {
        a[t.axis] && h.push(t);
      }),
      h
    );
  }
  const Ou = new WeakMap();
  function Pu(t) {
    let e = Ou.get(t);
    return (
      e ||
        ((e = {
          originalScaleLimits: {},
          updatedScaleLimits: {},
          handlers: {},
          panDelta: {},
        }),
        Ou.set(t, e)),
      e
    );
  }
  function Eu(t, e, i) {
    const n = t.max - t.min,
      s = n * (e - 1),
      o = t.isHorizontal() ? i.x : i.y,
      r = Math.max(0, Math.min(1, (t.getValueForPixel(o) - t.min) / n || 0));
    return { min: s * r, max: s * (1 - r) };
  }
  function Lu(t, e, i, n, s) {
    let o = i[n];
    if ("original" === o) {
      const i = t.originalScaleLimits[e.id][n];
      o = Y(i.options, i.scale);
    }
    return Y(o, s);
  }
  function Ru(t, { min: e, max: i }, n, s = !1) {
    const o = Pu(t.chart),
      { id: r, axis: a, options: l } = t,
      h = (n && (n[r] || n[a])) || {},
      { minRange: c = 0 } = h,
      d = Lu(o, t, h, "min", -1 / 0),
      u = Lu(o, t, h, "max", 1 / 0),
      f = s ? Math.max(i - e, c) : t.max - t.min,
      p = (f - i + e) / 2;
    return (
      (i += p),
      (e -= p) < d
        ? ((e = d), (i = Math.min(d + f, u)))
        : i > u && ((i = u), (e = Math.max(u - f, d))),
      (l.min = e),
      (l.max = i),
      (o.updatedScaleLimits[t.id] = { min: e, max: i }),
      t.parse(e) !== t.min || t.parse(i) !== t.max
    );
  }
  const Iu = (t) =>
    0 === t || isNaN(t)
      ? 0
      : t < 0
      ? Math.min(Math.round(t), -1)
      : Math.max(Math.round(t), 1);
  const Fu = {
    second: 500,
    minute: 3e4,
    hour: 18e5,
    day: 432e5,
    week: 3024e5,
    month: 1296e6,
    quarter: 5184e6,
    year: 157248e5,
  };
  function Nu(t, e, i, n = !1) {
    const { min: s, max: o, options: r } = t,
      a = r.time && r.time.round,
      l = Fu[a] || 0,
      h = t.getValueForPixel(t.getPixelForValue(s + l) - e),
      c = t.getValueForPixel(t.getPixelForValue(o + l) - e),
      { min: d = -1 / 0, max: u = 1 / 0 } = (n && i && i[t.axis]) || {};
    return (
      !!(isNaN(h) || isNaN(c) || h < d || c > u) ||
      Ru(t, { min: h, max: c }, i, n)
    );
  }
  function zu(t, e, i) {
    return Nu(t, e, i, !0);
  }
  const $u = {
      category: function (t, e, i, n) {
        const s = Eu(t, e, i);
        return (
          t.min === t.max &&
            e < 1 &&
            (function (t) {
              const e = t.getLabels().length - 1;
              t.min > 0 && (t.min -= 1), t.max < e && (t.max += 1);
            })(t),
          Ru(t, { min: t.min + Iu(s.min), max: t.max - Iu(s.max) }, n, !0)
        );
      },
      default: function (t, e, i, n) {
        const s = Eu(t, e, i);
        return Ru(t, { min: t.min + s.min, max: t.max - s.max }, n, !0);
      },
    },
    ju = {
      default: function (t, e, i, n) {
        Ru(
          t,
          (function (t, e, i) {
            const n = t.getValueForPixel(e),
              s = t.getValueForPixel(i);
            return { min: Math.min(n, s), max: Math.max(n, s) };
          })(t, e, i),
          n,
          !0
        );
      },
    },
    Yu = {
      category: function (t, e, i) {
        const n = t.getLabels().length - 1;
        let { min: s, max: o } = t;
        const r = Math.max(o - s, 1),
          a = Math.round(
            (function (t) {
              return t.isHorizontal() ? t.width : t.height;
            })(t) / Math.max(r, 10)
          ),
          l = Math.round(Math.abs(e / a));
        let h;
        return (
          e < -a
            ? ((o = Math.min(o + l, n)),
              (s = 1 === r ? o : o - r),
              (h = o === n))
            : e > a &&
              ((s = Math.max(0, s - l)),
              (o = 1 === r ? s : s + r),
              (h = 0 === s)),
          Ru(t, { min: s, max: o }, i) || h
        );
      },
      default: Nu,
      logarithmic: zu,
      timeseries: zu,
    };
  function Wu(t, e) {
    V(t, (i, n) => {
      e[n] || delete t[n];
    });
  }
  function Bu(t, e) {
    const { scales: i } = t,
      { originalScaleLimits: n, updatedScaleLimits: s } = e;
    return (
      V(i, function (t) {
        (function (t, e, i) {
          const {
            id: n,
            options: { min: s, max: o },
          } = t;
          if (!e[n] || !i[n]) return !0;
          const r = i[n];
          return r.min !== s || r.max !== o;
        })(t, n, s) &&
          (n[t.id] = {
            min: { scale: t.min, options: t.options.min },
            max: { scale: t.max, options: t.options.max },
          });
      }),
      Wu(n, i),
      Wu(s, i),
      n
    );
  }
  function Vu(t, e, i, n) {
    B($u[t.type] || $u.default, [t, e, i, n]);
  }
  function Hu(t, e, i, n, s) {
    B(ju[t.type] || ju.default, [t, e, i, n, s]);
  }
  function Uu(t) {
    const e = t.chartArea;
    return { x: (e.left + e.right) / 2, y: (e.top + e.bottom) / 2 };
  }
  function Gu(t, e, i = "none") {
    const {
        x: n = 1,
        y: s = 1,
        focalPoint: o = Uu(t),
      } = "number" == typeof e ? { x: e, y: e } : e,
      r = Pu(t),
      {
        options: { limits: a, zoom: l },
      } = r;
    Bu(t, r);
    const h = 1 !== n,
      c = 1 !== s;
    V(Tu(l, o, t) || t.scales, function (t) {
      t.isHorizontal() && h
        ? Vu(t, n, o, a)
        : !t.isHorizontal() && c && Vu(t, s, o, a);
    }),
      t.update(i),
      B(l.onZoom, [{ chart: t }]);
  }
  function Ku(t, e, i, n = "none") {
    const s = Pu(t),
      {
        options: { limits: o, zoom: r },
      } = s,
      { mode: a = "xy" } = r;
    Bu(t, s);
    const l = Au(a, "x", t),
      h = Au(a, "y", t);
    V(t.scales, function (t) {
      t.isHorizontal() && l
        ? Hu(t, e.x, i.x, o)
        : !t.isHorizontal() && h && Hu(t, e.y, i.y, o);
    }),
      t.update(n),
      B(r.onZoom, [{ chart: t }]);
  }
  function qu(t) {
    const e = Pu(t);
    let i = 1,
      n = 1;
    return (
      V(t.scales, function (t) {
        const s = (function (t, e) {
          const i = t.originalScaleLimits[e];
          if (!i) return;
          const { min: n, max: s } = i;
          return Y(s.options, s.scale) - Y(n.options, n.scale);
        })(e, t.id);
        if (s) {
          const e = Math.round((s / (t.max - t.min)) * 100) / 100;
          (i = Math.min(i, e)), (n = Math.max(n, e));
        }
      }),
      i < 1 ? i : n
    );
  }
  function Xu(t, e, i, n) {
    const { panDelta: s } = n,
      o = s[t.id] || 0;
    ft(o) === ft(e) && (e += o);
    B(Yu[t.type] || Yu.default, [t, e, i]) ? (s[t.id] = 0) : (s[t.id] = e);
  }
  function Zu(t, e, i, n = "none") {
    const { x: s = 0, y: o = 0 } = "number" == typeof e ? { x: e, y: e } : e,
      r = Pu(t),
      {
        options: { pan: a, limits: l },
      } = r,
      { onPan: h } = a || {};
    Bu(t, r);
    const c = 0 !== s,
      d = 0 !== o;
    V(i || t.scales, function (t) {
      t.isHorizontal() && c
        ? Xu(t, s, l, r)
        : !t.isHorizontal() && d && Xu(t, o, l, r);
    }),
      t.update(n),
      B(h, [{ chart: t }]);
  }
  function Ju(t) {
    const e = Pu(t);
    Bu(t, e);
    const i = {};
    for (const n of Object.keys(t.scales)) {
      const { min: t, max: s } = e.originalScaleLimits[n] || {
        min: {},
        max: {},
      };
      i[n] = { min: t.scale, max: s.scale };
    }
    return i;
  }
  function Qu(t, e) {
    const { handlers: i } = Pu(t),
      n = i[e];
    n && n.target && (n.target.removeEventListener(e, n), delete i[e]);
  }
  function tf(t, e, i, n) {
    const { handlers: s, options: o } = Pu(t),
      r = s[i];
    (r && r.target === e) ||
      (Qu(t, i),
      (s[i] = (e) => n(t, e, o)),
      (s[i].target = e),
      e.addEventListener(i, s[i]));
  }
  function ef(t, e) {
    const i = Pu(t);
    i.dragStart && ((i.dragging = !0), (i.dragEnd = e), t.update("none"));
  }
  function nf(t, e) {
    const i = Pu(t);
    i.dragStart &&
      "Escape" === e.key &&
      (Qu(t, "keydown"),
      (i.dragging = !1),
      (i.dragStart = i.dragEnd = null),
      t.update("none"));
  }
  function sf(t, e, i) {
    const { onZoomStart: n, onZoomRejected: s } = i;
    if (n) {
      if (!1 === B(n, [{ chart: t, event: e, point: oi(e, t) }]))
        return B(s, [{ chart: t, event: e }]), !1;
    }
  }
  function of(t, e) {
    const i = Pu(t),
      { pan: n, zoom: s = {} } = i.options;
    if (0 !== e.button || Su(Cu(n), e) || Mu(Cu(s.drag), e))
      return B(s.onZoomRejected, [{ chart: t, event: e }]);
    !1 !== sf(t, e, s) &&
      ((i.dragStart = e),
      tf(t, t.canvas, "mousemove", ef),
      tf(t, window.document, "keydown", nf));
  }
  function rf(t, e, i, n) {
    const s = Au(e, "x", t),
      o = Au(e, "y", t);
    let {
      top: r,
      left: a,
      right: l,
      bottom: h,
      width: c,
      height: d,
    } = t.chartArea;
    const u = oi(i, t),
      f = oi(n, t);
    s && ((a = Math.min(u.x, f.x)), (l = Math.max(u.x, f.x))),
      o && ((r = Math.min(u.y, f.y)), (h = Math.max(u.y, f.y)));
    const p = l - a,
      g = h - r;
    return {
      left: a,
      top: r,
      right: l,
      bottom: h,
      width: p,
      height: g,
      zoomX: s && p ? 1 + (c - p) / c : 1,
      zoomY: o && g ? 1 + (d - g) / d : 1,
    };
  }
  function af(t, e) {
    const i = Pu(t);
    if (!i.dragStart) return;
    Qu(t, "mousemove");
    const {
        mode: n,
        onZoomComplete: s,
        drag: { threshold: o = 0 },
      } = i.options.zoom,
      r = rf(t, n, i.dragStart, e),
      a = Au(n, "x", t) ? r.width : 0,
      l = Au(n, "y", t) ? r.height : 0,
      h = Math.sqrt(a * a + l * l);
    if (((i.dragStart = i.dragEnd = null), h <= o))
      return (i.dragging = !1), void t.update("none");
    Ku(t, { x: r.left, y: r.top }, { x: r.right, y: r.bottom }, "zoom"),
      setTimeout(() => (i.dragging = !1), 500),
      B(s, [{ chart: t }]);
  }
  function lf(t, e) {
    const {
      handlers: { onZoomComplete: i },
      options: { zoom: n },
    } = Pu(t);
    if (
      !(function (t, e, i) {
        if (Mu(Cu(i.wheel), e)) B(i.onZoomRejected, [{ chart: t, event: e }]);
        else if (
          !1 !== sf(t, e, i) &&
          (e.cancelable && e.preventDefault(), void 0 !== e.deltaY)
        )
          return !0;
      })(t, e, n)
    )
      return;
    const s = e.target.getBoundingClientRect(),
      o = 1 + (e.deltaY >= 0 ? -n.wheel.speed : n.wheel.speed);
    Gu(t, {
      x: o,
      y: o,
      focalPoint: { x: e.clientX - s.left, y: e.clientY - s.top },
    }),
      i && i();
  }
  function hf(t, e, i, n) {
    i &&
      (Pu(t).handlers[e] = (function (t, e) {
        let i;
        return function () {
          return clearTimeout(i), (i = setTimeout(t, e)), e;
        };
      })(() => B(i, [{ chart: t }]), n));
  }
  function cf(t, e) {
    return function (i, n) {
      const { pan: s, zoom: o = {} } = e.options;
      if (!s || !s.enabled) return !1;
      const r = n && n.srcEvent;
      return (
        !r ||
        !(
          !e.panning &&
          "mouse" === n.pointerType &&
          (Mu(Cu(s), r) || Su(Cu(o.drag), r))
        ) ||
        (B(s.onPanRejected, [{ chart: t, event: n }]), !1)
      );
    };
  }
  function df(t, e, i) {
    if (e.scale) {
      const { center: n, pointers: s } = i,
        o = (1 / e.scale) * i.scale,
        r = i.target.getBoundingClientRect(),
        a = (function (t, e) {
          const i = Math.abs(t.clientX - e.clientX),
            n = Math.abs(t.clientY - e.clientY),
            s = i / n;
          let o, r;
          return (
            s > 0.3 && s < 1.7 ? (o = r = !0) : i > n ? (o = !0) : (r = !0),
            { x: o, y: r }
          );
        })(s[0], s[1]),
        l = e.options.zoom.mode;
      Gu(t, {
        x: a.x && Au(l, "x", t) ? o : 1,
        y: a.y && Au(l, "y", t) ? o : 1,
        focalPoint: { x: n.x - r.left, y: n.y - r.top },
      }),
        (e.scale = i.scale);
    }
  }
  function uf(t, e, i) {
    const n = e.delta;
    n &&
      ((e.panning = !0),
      Zu(t, { x: i.deltaX - n.x, y: i.deltaY - n.y }, e.panScales),
      (e.delta = { x: i.deltaX, y: i.deltaY }));
  }
  const ff = new WeakMap();
  function pf(t, e) {
    const i = Pu(t),
      n = t.canvas,
      { pan: s, zoom: o } = e,
      r = new ku.Manager(n);
    o &&
      o.pinch.enabled &&
      (r.add(new ku.Pinch()),
      r.on("pinchstart", () =>
        (function (t, e) {
          e.options.zoom.pinch.enabled && (e.scale = 1);
        })(0, i)
      ),
      r.on("pinch", (e) => df(t, i, e)),
      r.on("pinchend", (e) =>
        (function (t, e, i) {
          e.scale &&
            (df(t, e, i),
            (e.scale = null),
            B(e.options.zoom.onZoomComplete, [{ chart: t }]));
        })(t, i, e)
      )),
      s &&
        s.enabled &&
        (r.add(new ku.Pan({ threshold: s.threshold, enable: cf(t, i) })),
        r.on("panstart", (e) =>
          (function (t, e, i) {
            const {
              enabled: n,
              onPanStart: s,
              onPanRejected: o,
            } = e.options.pan;
            if (!n) return;
            const r = i.target.getBoundingClientRect(),
              a = { x: i.center.x - r.left, y: i.center.y - r.top };
            if (!1 === B(s, [{ chart: t, event: i, point: a }]))
              return B(o, [{ chart: t, event: i }]);
            (e.panScales = Tu(e.options.pan, a, t)),
              (e.delta = { x: 0, y: 0 }),
              clearTimeout(e.panEndTimeout),
              uf(t, e, i);
          })(t, i, e)
        ),
        r.on("panmove", (e) => uf(t, i, e)),
        r.on("panend", () =>
          (function (t, e) {
            (e.delta = null),
              e.panning &&
                ((e.panEndTimeout = setTimeout(() => (e.panning = !1), 500)),
                B(e.options.pan.onPanComplete, [{ chart: t }]));
          })(t, i)
        )),
      ff.set(t, r);
  }
  function gf(t, e, i) {
    const n = i.zoom.drag,
      { dragStart: s, dragEnd: o } = Pu(t);
    if (n.drawTime !== e || !o) return;
    const { left: r, top: a, width: l, height: h } = rf(t, i.zoom.mode, s, o),
      c = t.ctx;
    c.save(),
      c.beginPath(),
      (c.fillStyle = n.backgroundColor || "rgba(225,225,225,0.3)"),
      c.fillRect(r, a, l, h),
      n.borderWidth > 0 &&
        ((c.lineWidth = n.borderWidth),
        (c.strokeStyle = n.borderColor || "rgba(225,225,225)"),
        c.strokeRect(r, a, l, h)),
      c.restore();
  }
  var mf = {
    id: "zoom",
    version: "2.0.1",
    defaults: {
      pan: { enabled: !1, mode: "xy", threshold: 10, modifierKey: null },
      zoom: {
        wheel: { enabled: !1, speed: 0.1, modifierKey: null },
        drag: {
          enabled: !1,
          drawTime: "beforeDatasetsDraw",
          modifierKey: null,
        },
        pinch: { enabled: !1 },
        mode: "xy",
      },
    },
    start: function (t, e, i) {
      (Pu(t).options = i),
        Object.prototype.hasOwnProperty.call(i.zoom, "enabled") &&
          console.warn(
            "The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`."
          ),
        (Object.prototype.hasOwnProperty.call(i.zoom, "overScaleMode") ||
          Object.prototype.hasOwnProperty.call(i.pan, "overScaleMode")) &&
          console.warn(
            "The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired)."
          ),
        ku && pf(t, i),
        (t.pan = (e, i, n) => Zu(t, e, i, n)),
        (t.zoom = (e, i) => Gu(t, e, i)),
        (t.zoomRect = (e, i, n) => Ku(t, e, i, n)),
        (t.zoomScale = (e, i, n) =>
          (function (t, e, i, n = "none") {
            Bu(t, Pu(t)), Ru(t.scales[e], i, void 0, !0), t.update(n);
          })(t, e, i, n)),
        (t.resetZoom = (e) =>
          (function (t, e = "default") {
            const i = Pu(t),
              n = Bu(t, i);
            V(t.scales, function (t) {
              const e = t.options;
              n[t.id]
                ? ((e.min = n[t.id].min.options), (e.max = n[t.id].max.options))
                : (delete e.min, delete e.max);
            }),
              t.update(e),
              B(i.options.zoom.onZoomComplete, [{ chart: t }]);
          })(t, e)),
        (t.getZoomLevel = () => qu(t)),
        (t.getInitialScaleBounds = () => Ju(t)),
        (t.isZoomedOrPanned = () =>
          (function (t) {
            const e = Ju(t);
            for (const i of Object.keys(t.scales)) {
              const { min: n, max: s } = e[i];
              if (void 0 !== n && t.scales[i].min !== n) return !0;
              if (void 0 !== s && t.scales[i].max !== s) return !0;
            }
            return !1;
          })(t));
    },
    beforeEvent(t) {
      const e = Pu(t);
      if (e.panning || e.dragging) return !1;
    },
    beforeUpdate: function (t, e, i) {
      (Pu(t).options = i),
        (function (t, e) {
          const i = t.canvas,
            { wheel: n, drag: s, onZoomComplete: o } = e.zoom;
          n.enabled
            ? (tf(t, i, "wheel", lf), hf(t, "onZoomComplete", o, 250))
            : Qu(t, "wheel"),
            s.enabled
              ? (tf(t, i, "mousedown", of),
                tf(t, i.ownerDocument, "mouseup", af))
              : (Qu(t, "mousedown"),
                Qu(t, "mousemove"),
                Qu(t, "mouseup"),
                Qu(t, "keydown"));
        })(t, i);
    },
    beforeDatasetsDraw(t, e, i) {
      gf(t, "beforeDatasetsDraw", i);
    },
    afterDatasetsDraw(t, e, i) {
      gf(t, "afterDatasetsDraw", i);
    },
    beforeDraw(t, e, i) {
      gf(t, "beforeDraw", i);
    },
    afterDraw(t, e, i) {
      gf(t, "afterDraw", i);
    },
    stop: function (t) {
      !(function (t) {
        Qu(t, "mousedown"),
          Qu(t, "mousemove"),
          Qu(t, "mouseup"),
          Qu(t, "wheel"),
          Qu(t, "click"),
          Qu(t, "keydown");
      })(t),
        ku &&
          (function (t) {
            const e = ff.get(t);
            e &&
              (e.remove("pinchstart"),
              e.remove("pinch"),
              e.remove("pinchend"),
              e.remove("panstart"),
              e.remove("pan"),
              e.remove("panend"),
              e.destroy(),
              ff.delete(t));
          })(t),
        (function (t) {
          Ou.delete(t);
        })(t);
    },
    panFunctions: Yu,
    zoomFunctions: $u,
    zoomRectFunctions: ju,
  };
  const vf = "mdw-tooltip",
    bf = vf;
  class yf {
    constructor(t, e) {
      (this.chart = t),
        (this.chartOptions = this.chart.options),
        (this.options = Ic(yf.defaults, e || {}));
    }
    toCJPlugin() {
      var t, e;
      const i = {
        enabled:
          null === (t = this.options) || void 0 === t ? void 0 : t.useNative,
        position: "nearest",
        usePointStyle: !0,
        callbacks: {},
      };
      return (
        (null === (e = this.options) || void 0 === e ? void 0 : e.useNative) ||
          (i.external = this.generateTooltipHtml.bind(this)),
        i
      );
    }
    toCJInteraction() {
      const t = { intersect: !1, axis: "xy", mode: "nearest" };
      return this.options.combineItems && (t.mode = "index"), t;
    }
    generateTooltipHtml(t) {
      var e, i, n, s;
      const { chart: o, tooltip: r } = t;
      let a = Vc(`#${vf}`);
      if (
        (a ||
          ((a = new Bc("div")
            .setAttribute("id", vf)
            .setStyle("border-radius", this.options.borderRadius)
            .setStyle("padding", this.options.padding)
            .setStyle("opacity", 0)
            .setStyle("pointer-events", "none")
            .setStyle("position", "absolute")
            .setStyle("transform", "translate(-50%, 0)")
            .setStyle("transition", "all .1s ease")
            .appendToBody()),
          this.options.maxWidth &&
            a.setStyle("max-width", this.options.maxWidth)),
        0 === r.opacity)
      )
        return void a.setStyle("opacity", 0);
      a.clearChildren(),
        a.removeClass("above", "below", "no-transform"),
        r.yAlign ? a.addClass(r.yAlign) : a.addClass("no-transform");
      let l = [];
      if (null === (e = this.options) || void 0 === e ? void 0 : e.title)
        if ("string" == typeof this.options.title) l = [this.options.title];
        else if (Array.isArray(this.options.title)) l = this.options.title;
        else if ("function" == typeof this.options.title) {
          const t = this.options.title(r);
          "string" == typeof t ? (l = [t]) : Array.isArray(t) && (l = t);
        }
      if (
        (l.forEach((t) => {
          null == a ||
            a
              .newChild("div")
              .addClass(`${bf}-title`)
              .setStyle("font-weight", "bold")
              .setText(
                this.options.formatTitle ? this.options.formatTitle(t) : t
              );
        }),
        this.options.beforeBody)
      ) {
        let t = "";
        "string" == typeof this.options.beforeBody
          ? (t = this.options.beforeBody)
          : "function" == typeof this.options.beforeBody &&
            (t = this.options.beforeBody(r)),
          a.newChild("div").addClass(`${bf}-before-body`).setHtml(t);
      }
      let h = [];
      if (
        ((h =
          "function" == typeof this.options.items
            ? this.options.items(r)
            : this.options.items),
        "function" == typeof this.options.sortItems &&
          (h = this.options.sortItems(h)),
        h.forEach((t) => {
          const e =
            null == a
              ? void 0
              : a
                  .newChild("div")
                  .addClass(`${bf}-item`)
                  .setStyle("display", "flex")
                  .setStyle("align-items", "center");
          t.active && h.length > 1 && (null == e || e.addClass("active")),
            null == e || e.addChild(this.generateHtmlForIcon(t));
          const i = l && 1 === l.length && t.label === l[0];
          t.label &&
            !i &&
            (null == e || e.addChild(this.generateHtmlForLabel(t))),
            null == e || e.addChild(this.generateHtmlForValues(t, i));
        }),
        this.options.afterBody)
      ) {
        let t = "";
        "string" == typeof this.options.afterBody
          ? (t = this.options.afterBody)
          : "function" == typeof this.options.beforeBody &&
            (t = this.options.afterBody(r)),
          a.newChild("div").addClass(`${bf}-after-body`).setHtml(t);
      }
      if (null === (i = this.options) || void 0 === i ? void 0 : i.footer) {
        let t = [];
        if ("string" == typeof this.options.footer) t = [this.options.footer];
        else if (Array.isArray(this.options.footer)) t = this.options.footer;
        else if ("function" == typeof this.options.footer) {
          const e = this.options.footer(o);
          "string" == typeof e ? (t = [e]) : Array.isArray(e) && (t = e);
        }
        const e = a
          .newChild("div")
          .addClass(`${bf}-footer`)
          .setStyle("text-align", "center");
        t.forEach((t) => {
          e.newChild("div").setHtml(t);
        });
      }
      const c = t.chart.canvas.getBoundingClientRect(),
        d = c.left + window.scrollX + r.x + r.width / 2 + "px",
        u = c.top + window.scrollY + r.y + "px";
      a.setStyle("font-size", this.options.fontSize),
        a.setStyle(
          "background-color",
          null === (n = this.chart.getCurrentTheme()) || void 0 === n
            ? void 0
            : n.tooltipBackgroundColor
        ),
        a.setStyle(
          "color",
          null === (s = this.chart.getCurrentTheme()) || void 0 === s
            ? void 0
            : s.tooltipTextColor
        ),
        a.setStyle("opacity", "1"),
        a.setStyle("left", d),
        a.setStyle("top", u);
    }
    generateHtmlForIcon(t) {
      return new Bc("span")
        .addClass(`${bf}-icon`)
        .setStyle("display", "inline-block")
        .setStyle("margin-right", "0.25rem")
        .setStyle("width", "1em")
        .setStyle("height", "1em")
        .setStyle("background", t.colors.backgroundColor)
        .setStyle("border-radius", "4px")
        .setStyle("border-style", "solid")
        .setStyle(
          "border-color",
          t.colors.backgroundColor == t.colors.backgroundColor
            ? "#dedede66"
            : t.colors.borderColor
        )
        .setStyle("border-width", "1px");
    }
    generateHtmlForLabel(t) {
      const e =
        "function" == typeof this.options.formatLabel
          ? this.options.formatLabel(t.label)
          : t.label;
      return new Bc("span")
        .addClass(`${bf}-label`)
        .setStyle("white-space", "nowrap")
        .setHtml(e);
    }
    generateHtmlForValues(t, e) {
      const i = new Bc("span").addClass(`${bf}-values`).setStyle("flex", "1");
      if (
        (e ||
          i.setStyle("text-align", "right").setStyle("margin-left", "0.5rem"),
        !Nc(t.value))
      ) {
        const e =
          "function" == typeof this.options.formatValue
            ? this.options.formatValue(t.value)
            : `<span>${Wr(t.value, this.chartOptions.valuePrecision)}</span>${
                (this.options.showUnit && this.chartOptions.valueUnit) || ""
              }`;
        i.setHtml(e);
      }
      if (this.options.showPercentage) {
        const e = i.newChild("span").setStyle("margin-left", "0.25rem");
        void 0 !== t.percent &&
          e.setText(
            "(" + Wr(t.percent, this.chartOptions.valuePrecision) + "%)"
          );
      }
      return i;
    }
  }
  var xf, _f, wf;
  (yf.defaults = {
    fontSize: "13px",
    borderRadius: "4px",
    padding: "0.5rem 0.75rem",
  }),
    (t.TooltipInteractionMode = void 0),
    ((xf = t.TooltipInteractionMode || (t.TooltipInteractionMode = {})).Index =
      "index"),
    (xf.Point = "point"),
    (xf.Nearest = "nearest"),
    (t.TooltipInteractionAxis = void 0),
    ((_f = t.TooltipInteractionAxis || (t.TooltipInteractionAxis = {})).X =
      "x"),
    (_f.Y = "y"),
    (_f.XY = "xy"),
    (t.ScaleKeys = void 0),
    ((wf = t.ScaleKeys || (t.ScaleKeys = {})).CategoryAxis = "categoryAxis"),
    (wf.ValueAxis = "valueAxis");
  class kf {
    constructor(t) {
      (this.chart = t), (this.datasetColors = {}), (this.selectedLabels = []);
    }
    changeSelectedLabels(t) {
      (this.selectedLabels = t),
        this.chart.api && this.setSelectedLabels(this.chart.api);
    }
    getPlugin(e) {
      return {
        id: "categoryLabelSelectable",
        start: () => {},
        beforeInit: () => {},
        afterEvent: (i, n) => {
          const { type: s, x: o, y: r } = n.event;
          if ("click" === s && "number" == typeof o && "number" == typeof r) {
            const n = i.data.labels,
              s = "y" === i.options.indexAxis,
              a = Object.values(i.scales).find(
                (e) =>
                  e.id ===
                  (s ? t.ScaleKeys.ValueAxis : t.ScaleKeys.CategoryAxis)
              ),
              l = Object.values(i.scales).find(
                (e) =>
                  e.id ===
                  (s ? t.ScaleKeys.CategoryAxis : t.ScaleKeys.ValueAxis)
              );
            if (!a || !l || !n) return;
            const h = a.getBasePixel(),
              c = l.getBasePixel();
            if ((s && r < c && o < h) || (!s && r > c)) {
              const t = s ? l.getValueForPixel(r) : a.getValueForPixel(o),
                h = s ? l.getBaseValue() : a.getBaseValue();
              if (null != t && t >= 0 && t >= h) {
                const s = n[t],
                  o = this.selectedLabels.findIndex((t) => t === s);
                -1 === o
                  ? this.selectedLabels.push(s)
                  : this.selectedLabels.splice(o, 1),
                  (null == e ? void 0 : e.labelSelectable)
                    ? this.setSelectedLabels(i, e, s)
                    : "function" ==
                        typeof (null == e ? void 0 : e.onLabelClick) &&
                      e.onLabelClick(s);
              }
            }
          }
        },
      };
    }
    setSelectedLabels(t, e, i) {
      var n;
      const s =
        null === (n = t.data.labels) || void 0 === n
          ? void 0
          : n.map((t) => this.selectedLabels.indexOf(t) >= 0);
      s &&
        s.length > 0 &&
        t.data.datasets.forEach((t) => {
          if (!t.label) return;
          let e = this.datasetColors[t.label];
          !e &&
            t.backgroundColor &&
            ((e = zc((t.backgroundColor, t.backgroundColor), s.length)),
            (this.datasetColors[t.label] = [...e])),
            this.selectedLabels.length > 0 &&
              (e = s.map((t, i) => (t ? e[i] : zr(e[i], 0.4)))),
            (t.backgroundColor = e);
        }),
        "function" == typeof (null == e ? void 0 : e.onLabelClick) &&
          e.onLabelClick(i, this.selectedLabels),
        t.update();
    }
  }
  class Cf extends gu {
    constructor() {
      super(...arguments),
        (this.chartData = {
          category: { name: void 0, labels: void 0 },
          series: [],
        }),
        (this.hiddenDatasets = []),
        (this.borderDash = [3, 3]),
        (this.defaultMinTicksLimit = 2),
        (this.defaultCategoryTickWidthForX = 80),
        (this.defaultCategoryTickWidthForY = 20),
        (this.defaultValueTickWidthForX = 100),
        (this.defaultValueTickWidthForY = 30),
        (this.defaultCategoryTickHeightForX = 30),
        (this.defaultTitleHeightOrWidth = 30),
        (this.defaultLegendHeightForX = 60);
    }
    getTableData() {
      throw new Error("Method not implemented.");
    }
    getDefaultOptions() {
      return Ic(Cf.defaults);
    }
    getConfiguration() {
      var t, e, i, n, s;
      let o = [];
      this.getChartData(), this.chartData && (o = this.getDatasets());
      const r = [
        new mu().toCJPlugin(
          null === (t = this.getCurrentTheme()) || void 0 === t
            ? void 0
            : t.focusColor
        ),
        new vu().toCJPlugin(
          null === (e = this.getCurrentTheme()) || void 0 === e
            ? void 0
            : e.focusColor
        ),
      ];
      return (
        this.options.scrollable && r.push(mf),
        this.isCategoryLabelSelectable() &&
          (this.getCategoryLabelSelectable(),
          this.categoryLabelSelectable &&
            r.push(
              this.categoryLabelSelectable.getPlugin({
                labelSelectable:
                  null !==
                    (n =
                      null === (i = this.options.categoryAxis) || void 0 === i
                        ? void 0
                        : i.labelSelectable) &&
                  void 0 !== n &&
                  n,
                onLabelClick: (t, e) => {
                  var i, n;
                  "function" ==
                    typeof (null === (i = this.options.categoryAxis) ||
                    void 0 === i
                      ? void 0
                      : i.onLabelClick) &&
                    ((
                      null === (n = this.options.categoryAxis) || void 0 === n
                        ? void 0
                        : n.labelSelectable
                    )
                      ? this.options.categoryAxis.onLabelClick(t, e)
                      : this.options.categoryAxis.onLabelClick(t));
                },
              })
            )),
        {
          type: uu(this.getType()),
          data: {
            labels:
              null !== (s = this.chartData.category.labels) && void 0 !== s
                ? s
                : [],
            datasets: o,
          },
          options: this.getChartOptions(),
          plugins: r,
        }
      );
    }
    onThemeChanging() {
      var t;
      (null === (t = this.api) || void 0 === t ? void 0 : t.options) &&
        (this.api.options = this.getChartOptions());
    }
    getChartData() {
      let t = [];
      if (this.data)
        try {
          if (
            (this.data instanceof String
              ? (t = JSON.parse(this.data))
              : this.data instanceof Array && (t = this.data),
            t.length > 0)
          ) {
            const e = this.transformGenericData(t);
            this.chartData = this.genericToDataView(e);
          }
        } catch (t) {
          throw new Error("Chart data format incorrect.");
        }
    }
    getChartOptions() {
      var t, e, i, n;
      (this.options.legend = this.options.legend || {}),
        (void 0 === this.options.legend.display ||
          this.options.legend.display) &&
          (this.options.legend.display = !(
            (null === (t = this.options.categoryAxis) || void 0 === t
              ? void 0
              : t.enableColor) &&
            (null === (e = this.chartData) || void 0 === e
              ? void 0
              : e.series.length) <= 1
          )),
        (this.options.legend.states = {
          setItemInactiveStyle: (t) => this.setItemInactiveStyle(t),
          setItemActiveStyle: (t) => this.setItemActiveStyle(t),
        }),
        this.enableLegend();
      const s = this.getTooltip(),
        o = {
          maintainAspectRatio: !1,
          responsive: !0,
          indexAxis: this.getIndexAxis(),
          interaction: s.toCJInteraction(),
          plugins: {
            title: {
              display: !!this.options.title,
              text: this.options.title,
              color:
                null === (i = this.getCurrentTheme()) || void 0 === i
                  ? void 0
                  : i.textColorPrimary,
            },
            legend:
              null === (n = this.legend) || void 0 === n
                ? void 0
                : n.getChartJSConfiguration({
                    overwriteLabels: (t, e) => this.overwriteLabels(t, e),
                    onItemClick: (t, e) => this.onItemClick(t, e),
                  }),
            tooltip: s.toCJPlugin(),
          },
          scales: {
            categoryAxis: Cf.defaultScaleOptions,
            valueAxis: Cf.defaultScaleOptions,
          },
        };
      return this.assembleOptions(o), o;
    }
    overwriteLabels(t, e) {
      return t.map((t) => {
        var i, n;
        if (
          null === (i = this.options.legend) || void 0 === i
            ? void 0
            : i.markerStyle
        )
          return (
            (t.pointStyle =
              null === (n = this.options.legend) || void 0 === n
                ? void 0
                : n.markerStyle),
            (t.lineWidth = 0),
            t
          );
        let s = e.data.datasets.find((e) => e.label === t.text);
        return (
          s.pointStyle
            ? (t.pointStyle = s.pointStyle)
            : "line" === (null == s ? void 0 : s.type)
            ? ((t.pointStyle = "line"), s.borderDash && (t.lineDash = [2, 2]))
            : (t.pointStyle = "rectRounded"),
          t
        );
      });
    }
    onItemClick(t, e) {
      var i, n, s, o;
      (
        null === (i = this.options.legend) || void 0 === i
          ? void 0
          : i.selectable
      )
        ? null === (n = t.api) || void 0 === n || n.update()
        : void 0 !== e.datasetIndex &&
          (null === (s = t.api) ||
            void 0 === s ||
            s.setDatasetVisibility(
              e.datasetIndex,
              !t.api.isDatasetVisible(e.datasetIndex)
            ),
          null === (o = t.api) || void 0 === o || o.update());
    }
    assembleOptions(t) {
      var e, i;
      (null ===
        (i =
          null === (e = null == t ? void 0 : t.plugins) || void 0 === e
            ? void 0
            : e.legend) || void 0 === i
        ? void 0
        : i.labels) && (t.plugins.legend.labels.padding = 16),
        this.options.padding &&
          (t.layout = Ic(t.layout, { padding: this.options.padding })),
        this.assembleCategoryAxis(t),
        this.assembleValueAxes(t);
    }
    assembleCategoryAxis(e) {
      var i, n, s;
      this.options.categoryAxis &&
        (null === (i = e.scales) || void 0 === i ? void 0 : i.categoryAxis) &&
        ((e.scales.categoryAxis = {
          border: {
            color:
              null === (n = this.getCurrentTheme()) || void 0 === n
                ? void 0
                : n.gridColor,
          },
          stacked: this.options.categoryAxis.stacked,
          title: {
            display: !!this.options.categoryAxis.title,
            text: this.options.categoryAxis.title,
          },
          grid: {
            display: this.options.categoryAxis.gridDisplay,
            color:
              null === (s = this.getCurrentTheme()) || void 0 === s
                ? void 0
                : s.gridColor,
          },
          max:
            "number" == typeof this.options.categoryAxis.maxLabels
              ? this.options.categoryAxis.maxLabels - 1
              : void 0,
          ticks: {
            autoSkip: this.options.categoryAxis.autoSkip,
            maxTicksLimit: this.options.categoryAxis.maxTicksLimit,
            maxRotation: !1 === this.options.categoryAxis.rotation ? 0 : void 0,
            color: this.getColorFromFont(this.options.categoryAxis.labelFont),
            font: this.getFont(this.options.categoryAxis.labelFont),
          },
          display: this.options.categoryAxis.display,
        }),
        (e.scales.categoryAxis = Ic(
          Cf.defaultScaleOptions,
          e.scales.categoryAxis
        )),
        this.options.categoryAxis.position
          ? (e.scales.categoryAxis.position =
              this.options.categoryAxis.position)
          : (e.scales.categoryAxis.position = this.isHorizontal()
              ? t.Position.Left
              : t.Position.Bottom),
        this.assembleCategoryAxisTicks(e));
    }
    assembleCategoryAxisTicks(t) {
      var e;
      if (
        (null === (e = null == t ? void 0 : t.scales) || void 0 === e
          ? void 0
          : e.categoryAxis) &&
        this.options.categoryAxis &&
        ((t.scales.categoryAxis.ticks = t.scales.categoryAxis.ticks || {}),
        this.options.categoryAxis.type &&
          ((t.scales.categoryAxis.type = this.options.categoryAxis.type),
          "time" === t.scales.categoryAxis.type &&
            this.options.categoryAxis &&
            ((t.scales.categoryAxis.time = {
              unit: this.options.categoryAxis.timeUnit,
            }),
            this.options.categoryAxis.labelFormat &&
              ((t.scales.categoryAxis.time.displayFormats = {
                [this.options.categoryAxis.timeUnit]:
                  this.options.categoryAxis.labelFormat,
              }),
              (t.scales.categoryAxis.time.tooltipFormat =
                this.options.categoryAxis.labelFormat)))),
        !this.options.categoryAxis.type ||
          "category" === this.options.categoryAxis.type)
      ) {
        if (this.options.categoryAxis.callback) {
          const e = this.options.categoryAxis.callback;
          t.scales.categoryAxis.ticks = Object.assign(
            Object.assign({}, t.scales.categoryAxis.ticks),
            {
              callback: function (t, i, n) {
                return "function" == typeof e
                  ? e(this.getLabelForValue(t), i, n)
                  : this.getLabelForValue(t);
              },
            }
          );
        }
        this.assembleCategoryAxisLabelSelectable(t);
      }
    }
    assembleCategoryAxisLabelSelectable(t) {
      var e, i, n;
      (null === (e = null == t ? void 0 : t.scales) || void 0 === e
        ? void 0
        : e.categoryAxis) &&
        this.options.categoryAxis &&
        (null === (i = this.options.categoryAxis) || void 0 === i
          ? void 0
          : i.labelSelectable) &&
        (null === (n = this.categoryLabelSelectable) || void 0 === n
          ? void 0
          : n.selectedLabels) &&
        (t.scales.categoryAxis.ticks = Object.assign(
          Object.assign({}, t.scales.categoryAxis.ticks),
          {
            color: (t) => {
              var e, i, n, s, o, r, a;
              const l = this.getColorFromFont(
                null === (e = this.options.categoryAxis) || void 0 === e
                  ? void 0
                  : e.labelFont
              );
              let h;
              l &&
                t.chart.data.labels &&
                (h = zc(l, t.chart.data.labels.length));
              const c =
                null !==
                  (n =
                    null === (i = this.categoryLabelSelectable) || void 0 === i
                      ? void 0
                      : i.selectedLabels) && void 0 !== n
                  ? n
                  : [];
              let d = 0,
                u = 0;
              if (
                (null === (s = t.chart.scales.categoryAxis.ticks) ||
                  void 0 === s ||
                  s.map((t, e) => {
                    0 === e ? (d = t.value) : (u = t.value);
                  }),
                c.length > 0)
              ) {
                const e =
                  null === (o = t.chart.data.labels) || void 0 === o
                    ? void 0
                    : o.map((t, e) => {
                        var i, n;
                        return c.indexOf(t) >= 0
                          ? l
                            ? h[e]
                            : null === (i = this.getCurrentTheme()) ||
                              void 0 === i
                            ? void 0
                            : i.textActiveColor
                          : l
                          ? zr(h[e], 0.6)
                          : null === (n = this.getCurrentTheme()) ||
                            void 0 === n
                          ? void 0
                          : n.textInactiveColor;
                      });
                return null !== (r = null == e ? void 0 : e.slice(d, u + 1)) &&
                  void 0 !== r
                  ? r
                  : [];
              }
              return (
                l ||
                (null === (a = this.getCurrentTheme()) || void 0 === a
                  ? void 0
                  : a.textColorPrimary)
              );
            },
          }
        ));
    }
    assembleValueAxes(e) {
      this.options.valueAxes || (this.options.valueAxes = [{}]),
        this.options.valueAxes.forEach((i, n) => {
          var s, o;
          (i = Ic(Cf.defaultValueAxisOptions, i)).position ||
            (i.position = this.isHorizontal()
              ? t.Position.Bottom
              : t.Position.Left);
          const r = this.getValueAxisAlias(n);
          (e.scales = e.scales || {}),
            (e.scales[r] = Ic(
              Cf.defaultScaleOptions,
              {
                border: {
                  color:
                    null === (s = this.getCurrentTheme()) || void 0 === s
                      ? void 0
                      : s.gridColor,
                },
                stacked: i.stacked,
                title: { display: !!i.title, text: i.title },
                grid: {
                  display: i.gridDisplay,
                  color:
                    null === (o = this.getCurrentTheme()) || void 0 === o
                      ? void 0
                      : o.gridColor,
                },
                display: i.display,
              },
              {
                max: i.max,
                min: i.min,
                suggestedMax: i.suggestedMax,
                suggestedMin: i.suggestedMin,
                ticks: {
                  autoSkip: i.autoSkip,
                  maxTicksLimit: i.maxTicksLimit,
                  maxRotation: !1 === i.rotation ? 0 : void 0,
                  color: this.getColorFromFont(i.labelFont),
                  font: this.getFont(i.labelFont),
                  callback: (t, e) =>
                    "function" == typeof i.callback
                      ? i.callback(t, e)
                      : "number" == typeof t
                      ? this.formatBigNumber(t)
                      : t,
                  stepSize: i.ticksStepSize,
                  precision: this.options.valuePrecision,
                },
              },
              { position: i.position }
            ));
        });
    }
    getDatasets() {
      var t, e, i, n, s;
      const o = [];
      if (!this.chartData.category.labels)
        throw new Error("Categories cannot be undefined.");
      if (
        Array.isArray(
          null === (t = this.chartData) || void 0 === t ? void 0 : t.series
        )
      ) {
        let t = [];
        (t = (
          null === (e = this.options.categoryAxis) || void 0 === e
            ? void 0
            : e.enableColor
        )
          ? this.getColorsForKeys(this.chartData.category.labels)
          : this.getColorsForKeys(
              null === (i = this.chartData) || void 0 === i
                ? void 0
                : i.series.map((t) => t.name)
            )),
          null ===
            (s =
              null === (n = this.chartData) || void 0 === n
                ? void 0
                : n.series) ||
            void 0 === s ||
            s.forEach((e, i) => {
              let n = { data: [] };
              (n = this.createChartDataset(e, t, i)), n && o.push(n);
            });
      }
      return o;
    }
    createChartDataset(t, e, i) {
      var n, s, o, r, a, l, h, c, d;
      let u = { data: [] };
      const f =
        null !==
          (o =
            null ===
              (s =
                null === (n = this.options.seriesOptions) || void 0 === n
                  ? void 0
                  : n.styleMapping) || void 0 === s
              ? void 0
              : s[t.name]) && void 0 !== o
          ? o
          : {};
      return (
        (u.data = Object.values(
          null !== (r = t.data) && void 0 !== r ? r : []
        )),
        (u.label = t.name),
        (u.borderColor = (
          null === (a = this.options.categoryAxis) || void 0 === a
            ? void 0
            : a.enableColor
        )
          ? e
          : e[i]),
        (u.backgroundColor = (
          null === (l = this.options.categoryAxis) || void 0 === l
            ? void 0
            : l.enableColor
        )
          ? e
          : e[i]),
        (u.type = uu(
          null !==
            (d =
              null !== (h = null == f ? void 0 : f.type) && void 0 !== h
                ? h
                : null === (c = this.options.seriesOptions) || void 0 === c
                ? void 0
                : c.type) && void 0 !== d
            ? d
            : this.getType()
        )),
        (u = this.setAxisIDs(u, f.valueAxisIndex)),
        f.order && (u.order = f.order),
        "line" === u.type && (u = this.createLineDataset(u, f)),
        "bar" === u.type && (u = this.createBarDataset(u)),
        this.afterDatasetCreated(u, { styleOptions: f, color: e[i], index: i })
      );
    }
    createLineDataset(t, e) {
      var i, n, s, o, r, a, l;
      return (
        (t.borderWidth =
          null !==
            (s =
              null !== (i = e.lineWidth) && void 0 !== i
                ? i
                : null === (n = this.options.seriesOptions) || void 0 === n
                ? void 0
                : n.lineWidth) && void 0 !== s
            ? s
            : 1),
        e.fillGaps &&
          ((t.spanGaps = e.fillGaps),
          (t.segment = {
            borderColor: (t) => {
              var e;
              return t.p0.skip || t.p1.skip
                ? null === (e = this.getCurrentTheme()) || void 0 === e
                  ? void 0
                  : e.textColorPrimary
                : void 0;
            },
            borderDash: (t) =>
              t.p0.skip || t.p1.skip ? this.borderDash : void 0,
          })),
        (t.pointStyle = this.setPointStyle(t, e)),
        ("dashed" !== e.type &&
          "dashedArea" !== e.type &&
          (e.type ||
            ("dashed" !==
              (null === (o = this.options.seriesOptions) || void 0 === o
                ? void 0
                : o.type) &&
              "dashedArea" !==
                (null === (r = this.options.seriesOptions) || void 0 === r
                  ? void 0
                  : r.type)))) ||
          (t.borderDash = this.borderDash),
        (t.tension =
          null !== (a = e.tension) && void 0 !== a
            ? a
            : null === (l = this.options.seriesOptions) || void 0 === l
            ? void 0
            : l.tension),
        t
      );
    }
    createBarDataset(t) {
      return (t.maxBarThickness = 25), t;
    }
    setPointStyle(t, e) {
      var i, n;
      return (
        (t.pointRadius = t.data.length > 1 ? 0 : 2),
        (t.pointHoverRadius = 5),
        null !== (i = e.markerStyle) && void 0 !== i
          ? i
          : null === (n = this.options.legend) || void 0 === n
          ? void 0
          : n.markerStyle
      );
    }
    setAxisIDs(e, i) {
      const n = t.ScaleKeys.ValueAxis + (i && i > 0 ? "_" + i : "");
      return (
        (e.yAxisID = this.isHorizontal() ? t.ScaleKeys.CategoryAxis : n),
        (e.xAxisID = this.isHorizontal() ? n : t.ScaleKeys.CategoryAxis),
        e
      );
    }
    transformGenericData(t) {
      var e, i, n;
      const s = {
        dataKey:
          null === (e = this.options.categoryAxis) || void 0 === e
            ? void 0
            : e.dataKey,
        data: [],
      };
      if ("object" != typeof t[0] || Array.isArray(t[0])) {
        if (Array.isArray(t[0])) {
          const e = t;
          (s.dataKey = null !== (n = s.dataKey) && void 0 !== n ? n : e[0][0]),
            (s.data = Yr(e));
        }
      } else {
        const e = t;
        (s.dataKey =
          null !== (i = s.dataKey) && void 0 !== i ? i : Object.keys(e[0])[0]),
          (s.data = e);
      }
      return s;
    }
    genericToDataView(t) {
      var e;
      const i = {
        category: {
          name: null !== (e = t.dataKey) && void 0 !== e ? e : "",
          labels: [],
        },
        series: [],
      };
      if (!(null == t ? void 0 : t.dataKey)) return i;
      i.category.labels = t.data.map((e) => e[t.dataKey]);
      const n = this.getCombinedKeys(t.data)
        .filter((e) => e !== t.dataKey)
        .map((e) => ({
          name: e,
          data: t.data.map((t) => {
            var i;
            return null !== (i = t[e]) && void 0 !== i ? i : null;
          }),
        }));
      return (i.series = n), i;
    }
    getIndexAxis() {
      return this.isHorizontal() ? "y" : "x";
    }
    isHorizontal() {
      var e, i, n, s;
      const o =
        null === (e = this.options.valueAxes) || void 0 === e ? void 0 : e[0];
      (null === (i = this.options.categoryAxis) || void 0 === i
        ? void 0
        : i.position) ||
        (null == o ? void 0 : o.position) ||
        (this.options.categoryAxis || (this.options.categoryAxis = {}),
        (this.options.categoryAxis.position =
          this.getType() === t.ChartType.Bar
            ? t.Position.Left
            : t.Position.Bottom));
      return (
        (null === (n = this.options.categoryAxis) || void 0 === n
          ? void 0
          : n.position) === t.Position.Left ||
        (null === (s = this.options.categoryAxis) || void 0 === s
          ? void 0
          : s.position) === t.Position.Right ||
        (null == o ? void 0 : o.position) === t.Position.Top ||
        (null == o ? void 0 : o.position) === t.Position.Bottom
      );
    }
    afterDatasetCreated(t, e) {
      return t;
    }
    setItemInactiveStyle(t) {
      var e;
      let i =
        null === (e = this.api) || void 0 === e
          ? void 0
          : e.data.datasets.find((e) => e.label === t.text);
      i &&
        (this.hiddenDatasets.push({
          label: i.label,
          borderColor: i.borderColor,
          backgroundColor: i.backgroundColor,
        }),
        (i.borderColor = Dr),
        (i.backgroundColor = Dr));
    }
    setItemActiveStyle(t) {
      var e;
      let i =
        null === (e = this.api) || void 0 === e
          ? void 0
          : e.data.datasets.find((e) => e.label === t.text);
      if (!i) return;
      const n = this.hiddenDatasets.find((e) => e.label === t.text);
      n &&
        ((i.borderColor = null == n ? void 0 : n.borderColor),
        (i.backgroundColor = null == n ? void 0 : n.backgroundColor),
        (this.hiddenDatasets = this.hiddenDatasets.filter(
          (e) => e.label !== t.text
        )));
    }
    getCombinedKeys(t) {
      const e = new Set();
      return (
        t.forEach((t) => {
          Object.keys(t).forEach((t) => {
            e.add(t);
          });
        }),
        Array.from(e)
      );
    }
    isCategoryLabelSelectable() {
      var t, e, i;
      return (
        null !==
          (i =
            "function" ==
              typeof (null === (t = this.options.categoryAxis) || void 0 === t
                ? void 0
                : t.onLabelClick) ||
            (null === (e = this.options.categoryAxis) || void 0 === e
              ? void 0
              : e.labelSelectable)) &&
        void 0 !== i &&
        i
      );
    }
    calculateMaxLimitTicks(e) {
      var i, n, s;
      const o = e.scales;
      if (o) {
        const e = o.categoryAxis;
        (null == e ? void 0 : e.ticks) &&
          (void 0 ===
            (null === (i = this.options.categoryAxis) || void 0 === i
              ? void 0
              : i.autoSkip) ||
            (null === (n = this.options.categoryAxis) || void 0 === n
              ? void 0
              : n.autoSkip)) &&
          void 0 === e.ticks.maxTicksLimit &&
          this.options.categoryAxis &&
          (e.ticks.maxTicksLimit = this.getMaxLimitTicks(
            t.ScaleKeys.CategoryAxis,
            this.options.categoryAxis
          )),
          null === (s = this.options.valueAxes) ||
            void 0 === s ||
            s.forEach((e, i) => {
              const n = this.getValueAxisAlias(i),
                s = o[n];
              (null == s ? void 0 : s.ticks) &&
                (void 0 === e.autoSkip || e.autoSkip) &&
                void 0 === s.ticks.maxTicksLimit &&
                (s.ticks.maxTicksLimit = this.getMaxLimitTicks(
                  t.ScaleKeys.ValueAxis,
                  e
                ));
            });
      }
    }
    getMaxLimitTicks(e, i) {
      var n, s, o, r, a, l, h;
      let c = i.tickWidth;
      const d = this.isHorizontal();
      c ||
        (c =
          e === t.ScaleKeys.CategoryAxis
            ? d
              ? this.defaultCategoryTickWidthForY
              : this.defaultCategoryTickWidthForX
            : d
            ? this.defaultValueTickWidthForX
            : this.defaultValueTickWidthForY);
      let u = 0,
        f = 0,
        p = 0,
        g = 0,
        m = 0;
      this.options.padding &&
        ("number" == typeof this.options.padding
          ? (f = p = g = m = this.options.padding)
          : ((f =
              null !== (n = this.options.padding.top) && void 0 !== n ? n : 0),
            (p =
              null !== (s = this.options.padding.bottom) && void 0 !== s
                ? s
                : 0),
            (g =
              null !== (o = this.options.padding.left) && void 0 !== o ? o : 0),
            (m =
              null !== (r = this.options.padding.right) && void 0 !== r
                ? r
                : 0)));
      const v = i.title ? this.defaultTitleHeightOrWidth : 0,
        b =
          !(null === (a = this.options.legend) || void 0 === a
            ? void 0
            : a.display) ||
          (this.options.legend.position &&
            this.options.legend.position !== t.Position.Bottom &&
            this.options.legend.position !== t.Position.Top)
            ? 0
            : this.defaultLegendHeightForX,
        y = (
          null === (l = this.rootElement) || void 0 === l
            ? void 0
            : l.offsetWidth
        )
          ? Math.floor((this.rootElement.offsetWidth - (g + m + v)) / c)
          : 0,
        x = (
          null === (h = this.rootElement) || void 0 === h
            ? void 0
            : h.offsetHeight
        )
          ? Math.floor(
              (this.rootElement.offsetHeight -
                (f +
                  p +
                  this.defaultCategoryTickHeightForX +
                  v +
                  (d ? 0 : b))) /
                c
            )
          : 0;
      return (
        (u = e === t.ScaleKeys.CategoryAxis ? (d ? x : y) : d ? y : x),
        Math.max(u, this.defaultMinTicksLimit)
      );
    }
    getValueAxisAlias(e) {
      return t.ScaleKeys.ValueAxis + (e > 0 ? "_" + e : "");
    }
    onWheel(t) {
      var e, i;
      (null === (e = this.options) || void 0 === e ? void 0 : e.scrollable) &&
        t &&
        0 !== t.deltaY &&
        (null === (i = this.api) || void 0 === i || i.pan({ y: -t.deltaY }),
        t.preventDefault());
    }
    getCategoryLabelSelectable() {
      var t;
      return (
        (this.categoryLabelSelectable =
          null !== (t = this.categoryLabelSelectable) && void 0 !== t
            ? t
            : new kf(this)),
        this.categoryLabelSelectable
      );
    }
    getTooltip() {
      return new yf(
        this,
        Ic(
          {
            useNative: !1,
            showPercentage: !0,
            combineItems: !1,
            title: (t) => t.title || [],
            items: this.getTooltipItems.bind(this),
          },
          this.options.tooltip || {}
        )
      );
    }
    getTooltipItems(t) {
      var e;
      let i = 0;
      const n = t.body
        .map((t) => t.lines)
        .map((e, n) => {
          const s = t.labelColors[n],
            o = e[0].split(":")[0];
          let r;
          e[0].split(":").length > 1 &&
            (r = parseFloat(e[0].split(":")[1].replace(/,/g, "")));
          const a = {
            colors: {
              backgroundColor: s.backgroundColor,
              borderColor: s.borderColor,
            },
            label: o,
            value: r,
          };
          return (i += a.value || 0), a;
        });
      return (
        (null === (e = this.options.tooltip) || void 0 === e
          ? void 0
          : e.showPercentage) &&
          0 !== i &&
          n.forEach((t) => {
            Nc(t.value) || (t.percent = (100 * t.value) / i);
          }),
        n
      );
    }
    getColorFromFont(e) {
      var i, n;
      return null !== (i = e ? e[t.FontKeys.Color] : void 0) && void 0 !== i
        ? i
        : null === (n = this.options.font) || void 0 === n
        ? void 0
        : n.color;
    }
    getFont(t) {
      return Ic({}, this.options.font, t);
    }
  }
  (Cf.defaults = {
    categoryAxis: { gridDisplay: !0, display: !0, stacked: !1 },
    legend: { position: t.Position.Bottom },
    scrollDirection: "y",
  }),
    (Cf.defaultValueAxisOptions = {
      gridDisplay: !0,
      display: !0,
      stacked: !1,
    }),
    (Cf.defaultScaleOptions = {
      ticks: { padding: 10, autoSkip: !0 },
      grid: { drawTicks: !1 },
    });
  class Sf extends Cf {
    getType() {
      return t.ChartType.Area;
    }
    getTableData() {
      throw new Error("Method not implemented.");
    }
    afterDatasetCreated(e, i) {
      var n, s, o, r, a;
      if (
        !(null === (n = null == i ? void 0 : i.styleOptions) || void 0 === n
          ? void 0
          : n.type) ||
        i.styleOptions.type === t.ChartType.Area ||
        "dashedArea" === i.styleOptions.type
      ) {
        const t =
          null ===
            (o =
              null === (s = this.options) || void 0 === s
                ? void 0
                : s.valueAxes) || void 0 === o
            ? void 0
            : o[
                null !==
                  (a =
                    null === (r = i.styleOptions) || void 0 === r
                      ? void 0
                      : r.valueAxisIndex) && void 0 !== a
                  ? a
                  : 0
              ].stacked;
        e.fill = {
          below: zr(i.color, 0.4),
          above: zr(i.color, 0.4),
          target: t ? "stack" : "origin",
        };
      }
      return e;
    }
  }
  class Mf extends Cf {
    getType() {
      return t.ChartType.Bar;
    }
    getTableData() {
      throw new Error("Method not implemented.");
    }
  }
  class Af extends Cf {
    getType() {
      return t.ChartType.Column;
    }
    getTableData() {
      throw new Error("Method not implemented.");
    }
  }
  class Df extends gu {
    constructor() {
      super(...arguments),
        (this.chartData = {
          category: { name: void 0, labels: void 0 },
          series: [],
        }),
        (this.hiddenDatasets = []);
    }
    getTableData() {
      throw new Error("Method not implemented.");
    }
    getConfiguration() {
      var e, i, n, s;
      let o = [],
        r = [];
      return (
        this.getChartData(),
        this.chartData &&
          ((o =
            null !== (e = this.chartData.category.labels) && void 0 !== e
              ? e
              : []),
          (r = this.getDatasets()),
          (this.currentChartOptions = this.getChartOptions())),
        {
          type: t.ChartType.Pie,
          data: { labels: o, datasets: r },
          options: this.currentChartOptions,
          plugins: [
            new mu().toCJPlugin(
              null === (i = this.getCurrentTheme()) || void 0 === i
                ? void 0
                : i.focusColor
            ),
            new vu().toCJPlugin(
              null === (n = this.getCurrentTheme()) || void 0 === n
                ? void 0
                : n.focusColor
            ),
            null === (s = this.segmentClickable) || void 0 === s
              ? void 0
              : s.toCJPlugin(r[0].backgroundColor),
          ],
        }
      );
    }
    getChartData() {
      let t = [];
      if (this.data)
        try {
          if (
            ((t =
              this.data instanceof String ? JSON.parse(this.data) : this.data),
            t)
          ) {
            const e = this.transformGenericData(t);
            this.chartData = this.genericToDataView(e);
          }
        } catch (t) {
          throw new Error("Chart data format incorrect.");
        }
    }
    getDatasets() {
      var t, e, i, n, s;
      const o = [];
      if (
        Array.isArray(
          null === (t = this.chartData) || void 0 === t ? void 0 : t.series
        )
      ) {
        const t = this.getColorsForKeys(
          null ===
            (i =
              null === (e = this.chartData) || void 0 === e
                ? void 0
                : e.category) || void 0 === i
            ? void 0
            : i.labels
        );
        null ===
          (s =
            null === (n = this.chartData) || void 0 === n
              ? void 0
              : n.series) ||
          void 0 === s ||
          s.forEach((e) => {
            let i = { data: [] };
            (i = this.getChartDataset(e, t)), i && o.push(i);
          });
      }
      return o;
    }
    getChartOptions() {
      var e;
      (this.options.legend = this.options.legend || {}),
        (this.options.legend.states = {
          setItemInactiveStyle: (t) => this.setItemInactiveStyle(t),
          setItemActiveStyle: (t) => this.setItemActiveStyle(t),
        }),
        this.enableSegmentClickable(),
        this.enableLegend();
      let i = {
        maintainAspectRatio: !1,
        responsive: !0,
        onClick: (t, e, i) => {
          var n;
          null === (n = this.segmentClickable) ||
            void 0 === n ||
            n.onClick(t, e, i);
        },
        plugins: {
          legend:
            null === (e = this.legend) || void 0 === e
              ? void 0
              : e.getChartJSConfiguration({
                  generateLabels:
                    As.overrides.pie.plugins.legend.labels.generateLabels,
                  overwriteLabels: (t) => (
                    t.map((t) => {
                      var e, i;
                      return (
                        null === (e = this.options.legend) || void 0 === e
                          ? void 0
                          : e.markerStyle
                      )
                        ? ((t.pointStyle =
                            null === (i = this.options.legend) || void 0 === i
                              ? void 0
                              : i.markerStyle),
                          t)
                        : ((t.pointStyle = "rectRounded"), t);
                    }),
                    t
                  ),
                  onItemClick: (t, e) => {
                    var i, n, s, o;
                    (
                      null === (i = this.options.legend) || void 0 === i
                        ? void 0
                        : i.selectable
                    )
                      ? null === (n = t.api) || void 0 === n || n.update()
                      : void 0 !== e.index &&
                        (null === (s = t.api) ||
                          void 0 === s ||
                          s.toggleDataVisibility(e.index),
                        null === (o = t.api) || void 0 === o || o.update());
                  },
                }),
          tooltip: this.getTooltip().toCJPlugin(),
        },
      };
      return (
        this.getType() !== t.ChartType.Pie && (i = this.afterOptionsCreated(i)),
        this.options.padding &&
          (i.layout = Ic(i.layout, { padding: this.options.padding })),
        i
      );
    }
    transformGenericData(t) {
      var e, i, n;
      const s = { dataKey: this.options.dataKey, data: [] };
      if (Array.isArray(t))
        if ("object" != typeof t[0] || Array.isArray(t[0])) {
          if (Array.isArray(t[0])) {
            const e = t;
            (s.dataKey = null !== (n = s.dataKey) && void 0 !== n ? n : ""),
              (s.data = Yr(e));
          }
        } else {
          const e = t;
          (s.dataKey = null !== (i = s.dataKey) && void 0 !== i ? i : ""),
            (s.data = e);
        }
      else {
        const i = [t];
        (s.dataKey = null !== (e = s.dataKey) && void 0 !== e ? e : ""),
          (s.data = i);
      }
      return s;
    }
    genericToDataView(t) {
      const e = { category: { name: "", labels: [] }, series: [] };
      e.category.labels = Object.keys(t.data[0]).filter((e) => e !== t.dataKey);
      const i = t.data.map((i) => {
        var n;
        return {
          name: t.dataKey ? i[t.dataKey] : "",
          data:
            null === (n = e.category.labels) || void 0 === n
              ? void 0
              : n.map((t) => i[t]),
        };
      });
      return (e.series = i), e;
    }
    getChartDataset(e, i) {
      var n;
      const s = { data: [] };
      return (
        (s.data = Object.values(
          null !== (n = e.data) && void 0 !== n ? n : []
        )),
        (s.label = e.name),
        (s.type = t.ChartType.Pie),
        (s.backgroundColor = i),
        (s.borderWidth = 1),
        s
      );
    }
    getType() {
      return t.ChartType.Pie;
    }
    getDefaultOptions() {
      return Df.defaults;
    }
    afterOptionsCreated(t) {
      return t;
    }
    setItemInactiveStyle(t) {
      var e, i;
      const n =
        null === (e = this.api) || void 0 === e ? void 0 : e.data.datasets;
      if (!n) return;
      const s = null !== (i = t.index) && void 0 !== i ? i : -1;
      s < 0 ||
        (this.hiddenDatasets.push({
          label: t.text,
          backgroundColor: n[0].backgroundColor[s],
        }),
        n.map((t) => {
          t.backgroundColor.splice(s, 1, Dr);
        }));
    }
    setItemActiveStyle(t) {
      var e, i;
      const n =
        null === (e = this.api) || void 0 === e ? void 0 : e.data.datasets;
      if (!n) return;
      const s = null !== (i = t.index) && void 0 !== i ? i : -1;
      if (s < 0) return;
      const o = this.hiddenDatasets.find((e) => e.label === t.text);
      if (null == o ? void 0 : o.backgroundColor) {
        const e = o.backgroundColor;
        n.map((t) => {
          t.backgroundColor.splice(s, 1, e);
        }),
          (this.hiddenDatasets = this.hiddenDatasets.filter(
            (e) => e.label !== t.text
          ));
      }
    }
    getTooltip() {
      return new yf(
        this,
        Ic(
          {
            title: (t) => {
              var e;
              return (
                null === (e = this.options.tooltip) || void 0 === e
                  ? void 0
                  : e.combineItems
              )
                ? [""]
                : t.title;
            },
            items: this.getTooltipItems.bind(this),
          },
          this.options.tooltip || {}
        )
      );
    }
    getTooltipItems(t) {
      var e;
      const i = t.title[0],
        n = t.chart.config.data,
        s = [];
      let o = 0;
      return (
        n.datasets.forEach((t) => {
          t.data.forEach((e, r) => {
            const a = n.labels[r],
              l = t.backgroundColor[r],
              h = e;
            (o += h),
              s.push({
                label: a,
                value: h,
                colors: { backgroundColor: l, borderColor: l },
                active: i === a,
              });
          });
        }),
        s.forEach((t) => {
          Nc(t.value) || (t.percent = (100 * t.value) / o);
        }),
        (
          null === (e = this.options.tooltip) || void 0 === e
            ? void 0
            : e.combineItems
        )
          ? s
          : s.filter((t) => t.active)
      );
    }
  }
  Df.defaults = {
    legend: { position: t.Position.Right },
    tooltip: { useNative: !1, showPercentage: !1 },
  };
  class Tf extends Df {
    getType() {
      return t.ChartType.Donut;
    }
    getConfiguration() {
      var t;
      const e = super.getConfiguration();
      return (
        null === (t = null == e ? void 0 : e.plugins) ||
          void 0 === t ||
          t.push(this.centerLabelsPlugin()),
        e
      );
    }
    getDefaultOptions() {
      return Ic(Df.defaults, Tf.defaults);
    }
    afterOptionsCreated(t) {
      const e = t;
      return (e.cutout = this.options.innerRadius), e;
    }
    centerLabelsPlugin() {
      return {
        id: "centerLabels",
        afterDatasetDraw: () => {
          this.setCenterLabels();
        },
      };
    }
    setCenterLabels() {
      if (!this.api) return;
      if (this.api.getSortedVisibleDatasetMetas().length > 1) return;
      const t = this.api.ctx,
        e = this.api.chartArea,
        i = e.right - e.left,
        n = e.bottom - e.top,
        s = i / 2 + e.left,
        o = n / 2 + e.top,
        r = this.options.centerLabels ? $c(this.options.centerLabels) : [];
      !this.options.valueUnit && r.length > 1 && !r[1].text && r.splice(1, 1);
      const a = this.api.getDatasetMeta(0);
      let l = 0,
        h = 0;
      "total" in a && (h = a.total),
        "innerRadius" in a.data[0] && (l = a.data[0].innerRadius);
      const c = l / 80 > 1 ? 1 : l / 80;
      null == r ||
        r.forEach((e, i) => {
          var n, a, l, d, u, f, p, g, m, v;
          if (i > 1) return;
          e.font || (e.font = {});
          const b = this.getCJFont(e.font || {}, { size: 0 === i ? 36 : 14 });
          b.size && (b.size = b.size * c), (e.font.size = b.size);
          let y = 0;
          r.length > 1 &&
            (null ===
              (a = null === (n = r[0]) || void 0 === n ? void 0 : n.font) ||
            void 0 === a
              ? void 0
              : a.size) &&
            (y =
              null ===
                (d = null === (l = r[0]) || void 0 === l ? void 0 : l.font) ||
              void 0 === d
                ? void 0
                : d.size),
            0 === i &&
              (e.text || (e.text = this.formatBigNumber(h)),
              e.font.color ||
                (e.font.color = (
                  null === (u = this.options.font) || void 0 === u
                    ? void 0
                    : u.color
                )
                  ? null === (f = this.options.font) || void 0 === f
                    ? void 0
                    : f.color
                  : null === (p = this.getCurrentTheme()) || void 0 === p
                  ? void 0
                  : p.textColorPrimary)),
            1 === i &&
              (e.text || (e.text = this.options.valueUnit || ""),
              (null === (g = e.font) || void 0 === g ? void 0 : g.color) ||
                (e.font.color =
                  null === (m = this.getCurrentTheme()) || void 0 === m
                    ? void 0
                    : m.textColorSecondary)),
            e.text &&
              ((t.font = cu(b)),
              (t.textBaseline = "middle"),
              (t.fillStyle =
                (null === (v = e.font) || void 0 === v ? void 0 : v.color) ||
                ""),
              t.fillText(
                e.text,
                s - t.measureText(e.text).width / 2,
                0 === i ? o - y / 4 : o + y / 2
              ));
        });
    }
  }
  Tf.defaults = {
    innerRadius: "80%",
    legend: { position: t.Position.Right },
    centerLabels: [{}, {}],
  };
  class Of extends gu {
    constructor() {
      super(...arguments),
        (this.chartColors = []),
        (this.chartData = {
          category: { name: void 0, labels: void 0 },
          series: [],
          value: 0,
        });
    }
    getTableData() {
      throw new Error("Method not implemented.");
    }
    getDefaultOptions() {
      return Of.defaults;
    }
    getConfiguration() {
      var e, i;
      let n = [],
        s = [];
      return (
        this.getChartData(),
        this.chartData &&
          this.chartData.category.labels &&
          ((n =
            null !== (e = this.chartData.category.labels) && void 0 !== e
              ? e
              : []),
          (s = this.getDatasets())),
        {
          type: t.ChartType.Pie,
          data: { labels: n, datasets: s },
          options: this.getChartOptions(),
          plugins: [
            new mu().toCJPlugin(
              null === (i = this.getCurrentTheme()) || void 0 === i
                ? void 0
                : i.focusColor
            ),
            this.createPointerNeedle(),
          ],
        }
      );
    }
    getChartData() {
      if (!this.data) return;
      const { scales: t, value: e } = this.convertToData();
      if (t.length > 0) {
        const i = this.transformGenericData(t);
        this.chartData = this.convertToDataView(i, e);
      }
    }
    getDatasets() {
      var t, e, i, n, s, o, r, a, l;
      const h = [];
      if (
        Array.isArray(
          null === (t = this.chartData) || void 0 === t ? void 0 : t.series
        )
      ) {
        let t = [];
        (
          null ===
            (n =
              null ===
                (i =
                  null === (e = this.chartData) || void 0 === e
                    ? void 0
                    : e.category) || void 0 === i
                ? void 0
                : i.labels) || void 0 === n
            ? void 0
            : n.length
        )
          ? (t = this.chartData.category.labels)
          : (null ===
              (r =
                null ===
                  (o =
                    null === (s = this.chartData) || void 0 === s
                      ? void 0
                      : s.series) || void 0 === o
                  ? void 0
                  : o[0]) || void 0 === r
              ? void 0
              : r.data) &&
            (t = new Array(this.chartData.series[0].data.length).fill("")),
          (this.chartColors = this.getColorsForKeys(t)),
          null ===
            (l =
              null === (a = this.chartData) || void 0 === a
                ? void 0
                : a.series) ||
            void 0 === l ||
            l.forEach((t) => {
              const e = this.getChartDataset(t);
              e && h.push(e);
            });
      }
      return h;
    }
    getChartOptions() {
      var t;
      return {
        plugins: {
          legend: {
            display:
              null === (t = this.options.legend) || void 0 === t
                ? void 0
                : t.display,
          },
        },
        layout: { padding: this.options.padding },
        responsive: !0,
        aspectRatio: 1.6,
        circumference: 180,
        rotation: 270,
        cutout: this.options.innerRadius,
      };
    }
    getChartDataset(e) {
      var i;
      return {
        data: Object.values(null !== (i = e.data) && void 0 !== i ? i : []),
        label: e.name,
        type: uu(t.ChartType.Gauge),
        backgroundColor: this.chartColors,
      };
    }
    convertToData() {
      let t = { scales: [], value: 0 };
      return (
        this.data instanceof Array
          ? (t = {
              scales: this.data[0].scales ? [this.data[0].scales] : [],
              value: this.data[0].value || 0,
            })
          : "object" == typeof this.data &&
            (t = {
              scales: this.data.scales ? [this.data.scales] : [],
              value: this.data.value || 0,
            }),
        t
      );
    }
    transformGenericData(t) {
      const e = { data: [] };
      if (t.length > 1 && Array.isArray(t[0])) {
        const i = t;
        e.data = Yr(i);
      } else if ("object" == typeof t[0]) {
        const i = t;
        e.data = i;
      }
      return e;
    }
    convertToDataView(t, e) {
      const i = { category: { name: "", labels: [] }, series: [], value: e };
      i.category.labels = Array.isArray(t.data[0])
        ? []
        : Object.keys(t.data[0]);
      const n = t.data.map((e) => {
        var n;
        return {
          name: "",
          data: Array.isArray(t.data[0])
            ? t.data[0]
            : null === (n = i.category.labels) || void 0 === n
            ? void 0
            : n.map((t) => e[t]),
        };
      });
      return (i.series = n), i;
    }
    createPointerNeedle() {
      return {
        id: "gaugeNeedle",
        afterDatasetDraw: (t, e) => {
          var i, n, s;
          const {
              ctx: o,
              chartArea: { left: r, right: a },
            } = t,
            l = e.meta.total,
            h = this.chartData.value,
            c = l / 2,
            d = Math.PI + (1 / l) * h * Math.PI,
            u = t.getDatasetMeta(0).data[0].x,
            f = t.getDatasetMeta(0).data[0].y,
            p =
              null === (i = this.getCurrentTheme()) || void 0 === i
                ? void 0
                : i.textColorPrimary,
            g =
              null === (n = this.options.font) || void 0 === n
                ? void 0
                : n.family,
            m = t.height - f - 6;
          o.save(),
            o.translate(u, f),
            o.rotate(d),
            o.beginPath(),
            o.moveTo(0, -2),
            o.lineTo(f - 80, 0),
            o.lineTo(0, 2),
            (o.fillStyle =
              null === (s = this.getCurrentTheme()) || void 0 === s
                ? void 0
                : s.textColorPrimary),
            o.fill(),
            o.translate(-u, -f),
            o.arc(u, f, 5, 0, 10),
            o.fill(),
            o.restore(),
            (o.font = `16px ${g}`),
            (o.fillStyle = p),
            (o.textAlign = "center"),
            o.fillText(h.toString(), u, f + 20),
            (o.textAlign = "center"),
            o.fillText(c.toString(), u, m),
            (o.textAlign = "left"),
            o.fillText("0", r - 20, f),
            (o.textAlign = "right"),
            o.fillText(l.toString(), a + 30, f),
            o.restore();
        },
      };
    }
  }
  Of.defaults = {
    legend: { display: !1 },
    innerRadius: "90%",
    padding: { left: 30, right: 30 },
  };
  class Pf extends Cf {
    getType() {
      return t.ChartType.Line;
    }
    getTableData() {
      throw new Error("Method not implemented.");
    }
    afterDatasetCreated(e, i) {
      var n, s, o, r, a;
      if (
        (null === (n = null == i ? void 0 : i.styleOptions) || void 0 === n
          ? void 0
          : n.type) &&
        (i.styleOptions.type === t.ChartType.Area ||
          "dashedArea" === i.styleOptions.type)
      ) {
        const t =
          null ===
            (o =
              null === (s = this.options) || void 0 === s
                ? void 0
                : s.valueAxes) || void 0 === o
            ? void 0
            : o[
                null !==
                  (a =
                    null === (r = i.styleOptions) || void 0 === r
                      ? void 0
                      : r.valueAxisIndex) && void 0 !== a
                  ? a
                  : 0
              ].stacked;
        e.fill = {
          below: zr(i.color, 0.4),
          above: zr(i.color, 0.4),
          target: t ? "stack" : "origin",
        };
      }
      return e;
    }
  }
  class Ef extends Cf {
    getType() {
      return t.ChartType.Range;
    }
    getTableData() {
      throw new Error("Method not implemented.");
    }
    afterDatasetCreated(t, e) {
      var i;
      return (
        (null === (i = this.chartData) || void 0 === i ? void 0 : i.series) &&
          e.index === this.chartData.series.length - 1 &&
          (t.fill = {
            below: zr(e.color, 0.4),
            above: zr(e.color, 0.4),
            target: "-1",
          }),
        t
      );
    }
  }
  const Lf = new Map([
    [t.ChartType.Bar, Mf],
    [t.ChartType.Column, Af],
    [t.ChartType.Line, Pf],
    [t.ChartType.Area, Sf],
    [t.ChartType.Range, Ef],
    [t.ChartType.Pie, Df],
    [t.ChartType.Donut, Tf],
    [t.ChartType.Gauge, Of],
  ]);
  function Rf(t, e, i, n) {
    const s = Lf.get(e);
    if (s) return new s(t, i, n);
    throw new Error(`Invalid chart type ${e}.`);
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */ function If(
    t,
    e,
    i,
    n
  ) {
    var s,
      o = arguments.length,
      r =
        o < 3
          ? e
          : null === n
          ? (n = Object.getOwnPropertyDescriptor(e, i))
          : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      r = Reflect.decorate(t, e, i, n);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (s = t[a]) && (r = (o < 3 ? s(r) : o > 3 ? s(e, i, r) : s(e, i)) || r);
    return o > 3 && r && Object.defineProperty(e, i, r), r;
  }
  function Ff(t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
      return Reflect.metadata(t, e);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const Nf = (t) => (e) =>
      "function" == typeof e
        ? ((t, e) => (customElements.define(t, e), e))(t, e)
        : ((t, e) => {
            const { kind: i, elements: n } = e;
            return {
              kind: i,
              elements: n,
              finisher(e) {
                customElements.define(t, e);
              },
            };
          })(t, e),
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */ zf = (t, e) =>
      "method" === e.kind && e.descriptor && !("value" in e.descriptor)
        ? {
            ...e,
            finisher(i) {
              i.createProperty(e.key, t);
            },
          }
        : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: e.key,
            initializer() {
              "function" == typeof e.initializer &&
                (this[e.key] = e.initializer.call(this));
            },
            finisher(i) {
              i.createProperty(e.key, t);
            },
          },
    $f = (t, e, i) => {
      e.constructor.createProperty(i, t);
    };
  function jf(t) {
    return (e, i) => (void 0 !== i ? $f(t, e, i) : zf(t, e));
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  }
  function Yf(t) {
    return jf({ ...t, state: !0 });
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var Wf;
  null === (Wf = window.HTMLSlotElement) ||
    void 0 === Wf ||
    Wf.prototype.assignedElements;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const Bf = 1,
    Vf = 2,
    Hf =
      (t) =>
      (...e) => ({ _$litDirective$: t, values: e });
  class Uf {
    constructor(t) {}
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t, e, i) {
      (this._$Ct = t), (this._$AM = e), (this._$Ci = i);
    }
    _$AS(t, e) {
      return this.update(t, e);
    }
    update(t, e) {
      return this.render(...e);
    }
  }
  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const Gf = Hf(
      class extends Uf {
        constructor(t) {
          var e;
          if (
            (super(t),
            t.type !== Bf ||
              "class" !== t.name ||
              (null === (e = t.strings) || void 0 === e ? void 0 : e.length) >
                2)
          )
            throw Error(
              "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
            );
        }
        render(t) {
          return (
            " " +
            Object.keys(t)
              .filter((e) => t[e])
              .join(" ") +
            " "
          );
        }
        update(t, [e]) {
          var i, n;
          if (void 0 === this.it) {
            (this.it = new Set()),
              void 0 !== t.strings &&
                (this.nt = new Set(
                  t.strings
                    .join(" ")
                    .split(/\s/)
                    .filter((t) => "" !== t)
                ));
            for (const t in e)
              e[t] &&
                !(null === (i = this.nt) || void 0 === i ? void 0 : i.has(t)) &&
                this.it.add(t);
            return this.render(e);
          }
          const s = t.element.classList;
          this.it.forEach((t) => {
            t in e || (s.remove(t), this.it.delete(t));
          });
          for (const t in e) {
            const i = !!e[t];
            i === this.it.has(t) ||
              (null === (n = this.nt) || void 0 === n ? void 0 : n.has(t)) ||
              (i
                ? (s.add(t), this.it.add(t))
                : (s.remove(t), this.it.delete(t)));
          }
          return Od;
        }
      }
    ),
    Kf = (t) => (null != t ? t : Pd);
  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function* qf(t, e) {
    if (void 0 !== t) {
      let i = 0;
      for (const n of t) yield e(n, i++);
    }
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ class Xf extends Uf {
    constructor(t) {
      if ((super(t), (this.et = Pd), t.type !== Vf))
        throw Error(
          this.constructor.directiveName +
            "() can only be used in child bindings"
        );
    }
    render(t) {
      if (t === Pd || null == t) return (this.ft = void 0), (this.et = t);
      if (t === Od) return t;
      if ("string" != typeof t)
        throw Error(
          this.constructor.directiveName + "() called with a non-string value"
        );
      if (t === this.et) return this.ft;
      this.et = t;
      const e = [t];
      return (
        (e.raw = e),
        (this.ft = {
          _$litType$: this.constructor.resultType,
          strings: e,
          values: [],
        })
      );
    }
  }
  (Xf.directiveName = "unsafeHTML"), (Xf.resultType = 1);
  const Zf = Hf(Xf),
    Jf = Zc`
  .base-info {
    justify-content: flex-start;
    display: flex;
    align-items: center;
    margin-right: var(--rems-10px);
    color: var(--text-primary-normal);
    overflow: hidden;
    flex-grow: 1;
    &.subtitle {
      flex-direction: column;
      align-items: flex-start;
    }
    .title {
      font-size: var(--rems-16px);
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      white-space: nowrap;
      max-width: 90%;
    }
    .description-subtitle {
      font-size: var(--rems-12px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      margin: 0;
    }
    .description-icon {
      width: var(--rems-16px);
      height: var(--rems-16px);
      display: inline-block;
      cursor: pointer;
      position: relative;
      margin-left: var(--rems-10px);
      fill: var(--text-primary-normal);
    }
  }
`,
    Qf = Zc`
  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .actions-more {
      &:hover .more-icon {
        background-color: var(--button-primary-bg-hover);
        border-radius: var(--rems-4px);
      }
      .more-icon {
        display: inline-block;
        cursor: pointer;
        position: relative;
        width: var(--rems-16px);
        height: var(--rems-16px);
        fill: var(--text-primary-normal);
      }
      .actions-more-list {
        position: absolute;
        width: calc(2 * var(--rems-100px));
        display: none;
        background-color: #fff;
        transform: translateY(var(--rems-8px));
        transition: all 0.1s cubic-bezier(0.16, 1, 0.5, 1);
        list-style: none;
        padding: 0;
        margin: 0;
        border: 1px solid var(--border-color);
        border-radius: var(--rems-4px);
        background-color: var(--bg-primary-color);
        color: var(--text-primary-normal);
        li {
          > button {
            align-items: center;
            padding: var(--rems-5px) var(--rems-16px);
            text-decoration: none;
            background-color: transparent;
            border: none;
            cursor: pointer;
            width: 100%;
            line-height: var(--rems-24px);
            text-align: left;
            color: var(--text-primary-normal);
          }
          &:hover,
          &:focus {
            color: var(--dropdown-link-color-active);
            background-color: var(--dropdown-link-bg-active);
          }
        }
      }

      &:hover .actions-more-list {
        display: block;
        transform: translateY(0) translateX(calc(-180 * var(--rems-1px)));
      }
    }
  }
`,
    tp = Zc`
  .control-groups {
    display: flex;
    background-color: var(--bg-primary-color);
    margin: var(--rems-14px);

    .control-group {
      display: flex;
      background-color: var(--bg-secondary-color);
      padding: var(--rems-2px);
      border-radius: var(--rems-4px);
      &:not(:last-child) {
        margin-right: var(--rems-4px);
      }
      .button {
        min-width: var(--rems-30px);
        max-width: var(--rems-100px);
        height: var(--rems-24px);
        padding: var(--rems-4px) var(--rems-12px);
        border: none;
        color: var(--text-secondary-normal);
        font-size: var(--rems-14px);
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:not(:last-child) {
          margin-right: var(--rems-2px);
        }
        &:not(.active):hover {
          background-color: var(--button-secondary-bg-hover);
        }
        &.active {
          border-radius: var(--rems-4px);
          background-color: var(--button-secondary-bg-active);
          color: var(--text-primary-normal);
        }
      }
    }
  }
`,
    ep = [
      Zc`
    .widget {
      border: 1px solid var(--border-color);
      border-radius: var(--rems-4px);
      background-color: var(--bg-primary-color);
      color: var(--text-primary-normal);
      display: flex;
      flex-direction: column;
      height: 100%;
      .widget-header {
        display: flex;
        justify-content: space-between;
        margin: var(--rems-14px);
        ${Jf};
        ${Qf};
      }
      .widget-body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        ${tp};
      }
    }
  `,
    ];
  var ip, np, sp, op;
  async function rp(t, e) {
    if (ou.http)
      try {
        const i = await ou.http.post("/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: t, variables: null != e ? e : {} }),
          }),
          n = await i.json();
        return Promise.resolve(n.data);
      } catch (t) {
        return Promise.reject(t);
      }
    return Promise.reject(new Error("HTTP settings not found"));
  }
  (t.GroupType = void 0),
    ((ip = t.GroupType || (t.GroupType = {})).ChartType = "chartType"),
    (ip.TimeGrain = "timeGrain"),
    (ip.CountPercentage = "countPercentage"),
    (t.WidgetEventType = void 0),
    ((np = t.WidgetEventType || (t.WidgetEventType = {})).ActionClick =
      "actionClick"),
    (np.ControlGroupClick = "controlGroupClick"),
    (np.ThemeChange = "themeChange"),
    (t.WidgetComponent = class extends qd {
      constructor() {
        super(),
          (this.tag = "widget"),
          (this.onThemeChange = (t) => {
            t.detail && ((this.theme = t.detail), this.render());
          });
      }
      connectedCallback() {
        super.connectedCallback(),
          document.addEventListener(
            t.WidgetEventType.ThemeChange,
            this.onThemeChange
          );
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          document.removeEventListener(
            t.WidgetEventType.ThemeChange,
            this.onThemeChange
          );
      }
      render() {
        const t = { [this.tag]: !0 };
        return (
          this.theme && (t[this.theme] = !0),
          Td`<div class="${Gf(
            t
          )}">${this.renderHeader()} ${this.renderBody()}</div>`
        );
      }
      updated(t) {
        super.updated(t), (t.has("data") || t.has("options")) && this.render();
      }
      renderHeader() {
        var t, e;
        return Td`<div class="${this.tag}-header">
      <div class="base-info ${
        null === (t = this.options) || void 0 === t ? void 0 : t.descriptionMode
      }">
        <span tabindex="0" role="heading" class="title">${
          null === (e = this.data) || void 0 === e ? void 0 : e.title
        }</span>
        ${this.renderDescription()}
      </div>
      <div class="actions">${this.renderActions()}</div>
    </div>`;
      }
      renderDescription() {
        var t, e, i, n, s;
        return "subtitle" ===
          (null === (t = this.options) || void 0 === t
            ? void 0
            : t.descriptionMode)
          ? Td`<span tabindex="0" role="note" class="description-subtitle">
        ${Zf(null === (e = this.data) || void 0 === e ? void 0 : e.description)}
      </span>`
          : Td`
      <svg
        tabindex="0"
        role="note"
        class="description-icon"
        aria-label="${Kf(
          null === (i = this.data) || void 0 === i ? void 0 : i.description
        )}"
        title="${
          null !==
            (s =
              null === (n = this.data) || void 0 === n
                ? void 0
                : n.description) && void 0 !== s
            ? s
            : ""
        }"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.9999 0c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8zm0 15c3.86 0 7-3.14 7-7 0-3.86-3.14-7-7-7-3.86 0-7 3.14-7 7 0 3.86 3.14 7 7 7zm0-10.5c.276 0 .5.224.5.5 0 .276-.224.5-.5.5-.276 0-.5-.224-.5-.5 0-.276.224-.5.5-.5zm0 2c.275 0 .5.225.5.5l0 4c0 .275-.225.5-.5.5-.275 0-.5-.225-.5-.5l0-4c0-.275.225-.5.5-.5z"
          fill-rule="evenodd"
        />
      </svg>
    `;
      }
      renderActions() {
        var t, e, i, n, s, o, r, a, l, h, c, d, u;
        return (null ===
          (e =
            null === (t = this.options) || void 0 === t ? void 0 : t.actions) ||
        void 0 === e
          ? void 0
          : e.items) &&
          0 !==
            (null === (i = this.options) || void 0 === i
              ? void 0
              : i.actions.items.length)
          ? Td`
      <div class="actions-more">
        <span>
          <svg
            class="more-icon"
            tabindex="${Kf(
              null ===
                (s =
                  null === (n = this.options) || void 0 === n
                    ? void 0
                    : n.actions) || void 0 === s
                ? void 0
                : s.tabindex
            )}"
            role="${Kf(
              null ===
                (r =
                  null === (o = this.options) || void 0 === o
                    ? void 0
                    : o.actions) || void 0 === r
                ? void 0
                : r.role
            )}"
            aria-label="${Kf(
              null ===
                (l =
                  null === (a = this.options) || void 0 === a
                    ? void 0
                    : a.actions) || void 0 === l
                ? void 0
                : l.ariaLabel
            )}"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 2c0 .552-.447 1-1 1-.553 0-1-.448-1-1 0-.552.447-1 1-1 .553 0 1 .448 1 1zm0 6c0 .552-.447 1-1 1-.553 0-1-.448-1-1 0-.552.447-1 1-1 .553 0 1 .448 1 1zm0 6c0 .552-.447 1-1 1-.553 0-1-.448-1-1 0-.552.447-1 1-1 .553 0 1 .448 1 1z"
              fill-rule="evenodd"
            />
          </svg>
          ${Kf(
            null ===
              (c =
                null === (h = this.options) || void 0 === h
                  ? void 0
                  : h.actions) || void 0 === c
              ? void 0
              : c.label
          )}
        </span>
        <ul class="actions-more-list" tabindex="${Kf(
          null ===
            (u =
              null === (d = this.options) || void 0 === d
                ? void 0
                : d.actions) || void 0 === u
            ? void 0
            : u.tabindex
        )}" role="list">
          ${qf(
            this.options.actions.items,
            (t, e) => Td`<li>
              <button
                tabindex="${Kf(t.tabindex)}"
                role="${Kf(t.role)}"
                aria-label="${Kf(t.ariaLabel)}"
                class="${this.tag}-action"
                @click=${() => this.onActionClick(t, e)}
              >
                ${t.label}
              </button>
            </li>`
          )}
        </ul>
      </div>
    `
          : Td``;
      }
      renderBody() {
        return Td`<div class="${
          this.tag
        }-body">${this.renderControlGroups()} ${this.renderSlot()}</div>`;
      }
      renderControlGroups() {
        var t, e;
        return (null === (t = this.options) || void 0 === t
          ? void 0
          : t.controlGroups) &&
          0 !==
            (null === (e = this.options) || void 0 === e
              ? void 0
              : e.controlGroups.length)
          ? Td`<div class="control-groups">
      ${qf(this.options.controlGroups, (t) => {
        var e;
        return Td`<div
            tabindex="${Kf(t.tabindex)}"
            role="${Kf(t.role)}"
            aria-label="${Kf(t.ariaLabel)}"
            class="control-group"
          >
            ${qf(
              null !== (e = t.items) && void 0 !== e ? e : [],
              (e, i) => Td`<button
                  tabindex="${Kf(e.tabindex)}"
                  role="${Kf(e.role)}"
                  aria-label="${Kf(e.ariaLabel)}"
                  class="button${e.active ? " active" : ""}"
                  @click=${() => this.onItemClick(e, i, t)}
                >
                  ${e.label}
                </button>`
            )}
          </div>`;
      })}
    </div>`
          : Td``;
      }
      renderSlot() {
        return Td`<slot></slot>`;
      }
      onItemClick(e, i, n) {
        var s, o;
        this.dispatchEvent(
          new CustomEvent(t.WidgetEventType.ControlGroupClick, {
            detail: { index: i, button: e },
          })
        ),
          e.onClick ? e.onClick(e, i) : n.onClick && n.onClick(e, i),
          null ===
            (o =
              null === (s = this.options) || void 0 === s
                ? void 0
                : s.controlGroups) ||
            void 0 === o ||
            o.map((t) => {
              var i;
              t.type === n.type &&
                (null === (i = t.items) ||
                  void 0 === i ||
                  i.map((t) => {
                    t.active = t.value === e.value;
                  }));
            }),
          this.requestUpdate();
      }
      onActionClick(e, i) {
        this.dispatchEvent(
          new CustomEvent(t.WidgetEventType.ActionClick, {
            detail: { index: i, item: e },
          })
        ),
          e.onClick && e.onClick(e, i);
      }
    }),
    (t.WidgetComponent.disableShadowRoot = !0),
    (t.WidgetComponent.styles = [ep]),
    If(
      [jf({ type: Object, hasChanged: () => !0 }), Ff("design:type", Object)],
      t.WidgetComponent.prototype,
      "data",
      void 0
    ),
    If(
      [jf({ type: Object, hasChanged: () => !0 }), Ff("design:type", Object)],
      t.WidgetComponent.prototype,
      "options",
      void 0
    ),
    (t.WidgetComponent = If(
      [Nf(`${ru}-widget`), Ff("design:paramtypes", [])],
      t.WidgetComponent
    )),
    (function (t) {
      (t.GetWidgetData = "widgetGetDataQuery"),
        (t.GetWidgetMetaData = "findWidgetById");
    })(sp || (sp = {})),
    (t.AnalyzerWidgetComponent = class extends qd {
      constructor() {
        super(),
          (this.mdwChartData = []),
          (this.widgetData = {}),
          (this.widgetOptions = {});
      }
      connectedCallback() {
        var t, e;
        super.connectedCallback(),
          (this.widgetData = {
            title:
              null === (t = this.options) || void 0 === t ? void 0 : t.name,
            description:
              null === (e = this.options) || void 0 === e
                ? void 0
                : e.description,
          });
      }
      disconnectedCallback() {
        super.disconnectedCallback();
      }
      render() {
        return this.options
          ? Td`<mdw-widget data=${JSON.stringify(
              this.widgetData
            )} options=${JSON.stringify(this.widgetOptions)}>
      ${
        this.mdwChartType
          ? Td`<mdw-chart
            type=${this.mdwChartType}
            data=${JSON.stringify(this.mdwChartData)}
            options=${JSON.stringify(this.mdwChartOptions)}
          ></mdw-chart>`
          : Td``
      }
    </mdw-widget>`
          : Td``;
      }
      tempHandle(t) {
        return "pie" === t.visualType
          ? "1"
          : "line" === t.visualType
          ? "2"
          : "bar" === t.visualType
          ? "3"
          : "column" === t.visualType
          ? "4"
          : "area" === t.visualType
          ? "5"
          : "range" === t.visualType
          ? "6"
          : "7";
      }
      transformWidgetOptions(e) {
        var i, n, s, o, r, a, l, h, c;
        (null === (i = this.options) || void 0 === i ? void 0 : i.name) ||
          (this.widgetData.title = e.name),
          (null === (n = this.options) || void 0 === n
            ? void 0
            : n.description) || (this.widgetData.description = e.description);
        this.widgetOptions = { descriptionMode: "subtitle" };
        let d = {};
        switch (e.visualType) {
          case t.ChartType.Bar:
          case t.ChartType.Line:
          case t.ChartType.Column:
          case t.ChartType.Area:
          case t.ChartType.Range:
            (d = {
              legend: { selectable: !1 },
              categoryAxis: {
                title:
                  null ===
                    (o =
                      null === (s = e.options) || void 0 === s
                        ? void 0
                        : s.dimensionAxis) || void 0 === o
                    ? void 0
                    : o.title,
                dataKey:
                  null ===
                    (a =
                      null === (r = e.options) || void 0 === r
                        ? void 0
                        : r.dimensionAxis) || void 0 === a
                    ? void 0
                    : a.fieldName,
                type: "category",
                stacked: "stacked" === e.visualStyle,
              },
            }),
              (null === (l = e.options) || void 0 === l ? void 0 : l.metricAxis)
                ? (d.valueAxes = [
                    {
                      title:
                        null === (h = e.options) || void 0 === h
                          ? void 0
                          : h.metricAxis.title,
                      stacked: "stacked" === e.visualStyle,
                    },
                  ])
                : (d.valueAxes = [{ stacked: "stacked" === e.visualStyle }]),
              e.visualType === t.ChartType.Bar &&
                (d = Ic(d, {
                  scrollable: !0,
                  categoryAxis: { maxLabels: 8, enableColor: !0 },
                }));
          case t.ChartType.Pie:
          case t.ChartType.Donut:
        }
        this.mdwChartOptions = Ic(this.mdwChartOptions, d, {
          padding: 10,
          tooltip: { showPercentage: !0, combineItems: !0 },
          colorMapping:
            (null === (c = e.options) || void 0 === c
              ? void 0
              : c.colorMapping) || {},
        });
      }
      actionClick(t) {
        alert(JSON.stringify(null == t ? void 0 : t.detail));
      }
      async firstUpdated() {}
      updated(e) {
        var i, n, s;
        super.updated(e),
          (e.has("data") || e.has("options")) &&
            ((async function (t) {
              let e = {};
              if (!t) throw new Error("widget id cannot be null");
              const i = `\n  {\n    findWidgetById(id: "${t}") {\n      id\n      name\n      description\n      visualType\n      visualStyle\n      options {\n        metricAxis {\n          title\n          series {\n            alias\n            index\n            name\n            function\n            fieldType\n          }\n        }\n        dimensionAxis {\n          title\n          fieldType\n          fieldName\n        }\n        groupBy {\n          fieldName\n          fieldType\n        }\n      }\n    }\n  }\n`,
                n = {};
              if (ou.http)
                try {
                  const t = await rp(i, n);
                  e = (null == t ? void 0 : t[sp.GetWidgetMetaData])
                    ? t[sp.GetWidgetMetaData]
                    : {};
                } catch (t) {
                  console.error("error:", t);
                }
              return e;
            })(null === (i = this.options) || void 0 === i ? void 0 : i.id)
              .then((t) => {
                if (t) {
                  this.transformWidgetOptions(t);
                  (async function (t) {
                    let e;
                    if (!t) throw new Error("widget id cannot be null");
                    const i = {
                      widgetShowCondition: {
                        widgetId: `${t}`,
                        startTime: xu()
                          .subtract(1, "days")
                          .format("YYYY-MM-DD HH:mm:ss"),
                        endTime: xu().format("YYYY-MM-DD HH:mm:ss"),
                        filters: [],
                      },
                    };
                    if (ou.http)
                      try {
                        const t = await rp(
                          "\n  query widgetGetDataQuery($widgetShowCondition: JSON) {\n    widgetGetDataQuery(widgetShowCondition: $widgetShowCondition) {\n      data\n    }\n  }\n  ",
                          i
                        );
                        e = (null == t ? void 0 : t[sp.GetWidgetData])
                          ? t[sp.GetWidgetData].data
                          : void 0;
                      } catch (t) {
                        console.error("error:", t);
                      }
                    if (void 0 === e)
                      throw new Error("Failed to fetch widget data");
                    return e;
                  })(this.tempHandle(t))
                    .then((e) => {
                      e &&
                        ((this.mdwChartData = e),
                        (this.mdwChartType = t.visualType));
                    })
                    .catch(() => {});
                }
              })
              .catch(() => {}),
            this.widgetDom &&
              (null === (n = this.widgetDom) ||
                void 0 === n ||
                n.addEventListener(
                  t.WidgetEventType.ControlGroupClick,
                  this.actionClick.bind(this)
                ),
              null === (s = this.widgetDom) ||
                void 0 === s ||
                s.addEventListener(
                  t.WidgetEventType.ActionClick,
                  this.actionClick.bind(this)
                )));
      }
    }),
    (t.AnalyzerWidgetComponent.disableShadowRoot = !0),
    (t.AnalyzerWidgetComponent.styles = Zc`
    mdw-chart {
      display: block;
      position: relative;
      height: 100%;
    }
  `),
    If(
      [Yf(), Ff("design:type", Object)],
      t.AnalyzerWidgetComponent.prototype,
      "mdwChartData",
      void 0
    ),
    If(
      [Yf(), Ff("design:type", Object)],
      t.AnalyzerWidgetComponent.prototype,
      "widgetData",
      void 0
    ),
    If(
      [Yf(), Ff("design:type", Object)],
      t.AnalyzerWidgetComponent.prototype,
      "widgetOptions",
      void 0
    ),
    If(
      [jf({ type: Object, hasChanged: () => !0 }), Ff("design:type", Object)],
      t.AnalyzerWidgetComponent.prototype,
      "data",
      void 0
    ),
    If(
      [
        jf({
          type: Object,
          hasChanged: (t, e) => JSON.stringify(t) !== JSON.stringify(e),
        }),
        Ff("design:type", Object),
      ],
      t.AnalyzerWidgetComponent.prototype,
      "options",
      void 0
    ),
    If(
      [
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        (function (t, e) {
          return (
            ({ finisher: t, descriptor: e }) =>
            (i, n) => {
              var s;
              if (void 0 === n) {
                const n =
                    null !== (s = i.originalKey) && void 0 !== s ? s : i.key,
                  o =
                    null != e
                      ? {
                          kind: "method",
                          placement: "prototype",
                          key: n,
                          descriptor: e(i.key),
                        }
                      : { ...i, key: n };
                return (
                  null != t &&
                    (o.finisher = function (e) {
                      t(e, n);
                    }),
                  o
                );
              }
              {
                const s = i.constructor;
                void 0 !== e && Object.defineProperty(i, n, e(n)),
                  null == t || t(s, n);
              }
            }
          )({
            descriptor: (i) => {
              const n = {
                get() {
                  var e, i;
                  return null !==
                    (i =
                      null === (e = this.renderRoot) || void 0 === e
                        ? void 0
                        : e.querySelector(t)) && void 0 !== i
                    ? i
                    : null;
                },
                enumerable: !0,
                configurable: !0,
              };
              if (e) {
                const e = "symbol" == typeof i ? Symbol() : "__" + i;
                n.get = function () {
                  var i, n;
                  return (
                    void 0 === this[e] &&
                      (this[e] =
                        null !==
                          (n =
                            null === (i = this.renderRoot) || void 0 === i
                              ? void 0
                              : i.querySelector(t)) && void 0 !== n
                          ? n
                          : null),
                    this[e]
                  );
                };
              }
              return n;
            },
          });
        })("mdw-widget"),
        Ff("design:type", t.WidgetComponent),
      ],
      t.AnalyzerWidgetComponent.prototype,
      "widgetDom",
      void 0
    ),
    (t.AnalyzerWidgetComponent = If(
      [Nf("analyzer-widget"), Ff("design:paramtypes", [])],
      t.AnalyzerWidgetComponent
    )),
    (t.TimeUnitFormat = void 0),
    ((op = t.TimeUnitFormat || (t.TimeUnitFormat = {})).minute = "HH:mm"),
    (op.hour = "hA"),
    (op.day = "MM/DD"),
    (op.week = "MM/DD/YYYY"),
    (op.month = "MM/YYYY"),
    (op.quarter = "[Q]Q - YYYY"),
    (op.year = "YYYY");
  const ap = `${ru}-chart`;
  (t.ChartComponent = class extends qd {
    static get styles() {
      return Zc`
      ${Zd(this, ":host")} {
        display: block;
        position: relative;
      }
    `;
    }
    constructor() {
      super(),
        (this.onLegendItemSelect = (t) => {
          var e, i, n, s;
          (null === (e = t.context) || void 0 === e ? void 0 : e.data) &&
            (null ===
              (n =
                null === (i = this.chart) || void 0 === i
                  ? void 0
                  : i.legend) ||
              void 0 === n ||
              n.selectItem(
                null === (s = t.context) || void 0 === s ? void 0 : s.data
              ));
        }),
        (this.onLegendItemUnselect = (t) => {
          var e, i, n, s;
          (null === (e = t.context) || void 0 === e ? void 0 : e.data) &&
            (null ===
              (n =
                null === (i = this.chart) || void 0 === i
                  ? void 0
                  : i.legend) ||
              void 0 === n ||
              n.unselectItem(
                null === (s = t.context) || void 0 === s ? void 0 : s.data
              ));
        }),
        (this.onThemeChange = (t) => {
          var e;
          t.detail &&
            (null === (e = this.chart) ||
              void 0 === e ||
              e.changeTheme(t.detail));
        }),
        (this.boundResizeHandler = this.handleResize.bind(this));
    }
    createRenderRoot() {
      return this;
    }
    connectedCallback() {
      super.connectedCallback(),
        window.addEventListener("resize", this.boundResizeHandler),
        this.renderRoot.addEventListener(
          t.ChartEventType.LegendItemSelect,
          this.onLegendItemSelect
        ),
        this.renderRoot.addEventListener(
          t.ChartEventType.LegendItemUnselect,
          this.onLegendItemUnselect
        ),
        document.addEventListener(
          t.ChartEventType.ThemeChange,
          this.onThemeChange
        );
    }
    disconnectedCallback() {
      super.disconnectedCallback(),
        window.removeEventListener("resize", this.boundResizeHandler),
        this.renderRoot.removeEventListener(
          t.ChartEventType.LegendItemSelect,
          this.onLegendItemSelect
        ),
        this.renderRoot.removeEventListener(
          t.ChartEventType.LegendItemUnselect,
          this.onLegendItemUnselect
        ),
        document.removeEventListener(
          t.ChartEventType.ThemeChange,
          this.onThemeChange
        ),
        this.destroy();
    }
    render() {
      return this.id
        ? Td`<canvas id="${this.id}_container"></canvas>`
        : Td`<canvas></canvas>`;
    }
    updated(t) {
      var e, i, n, s, o;
      super.updated(t),
        t.has("dataUrl") && this.updateDataFromAPI(),
        (t.has("type") || t.has("data") || t.has("options")) &&
          (this.debounceId = Wc(
            this.debounceId,
            () => {
              this.initChart();
            },
            100
          )),
        t.has("states") &&
          (void 0 !==
            (null === (e = this.states) || void 0 === e
              ? void 0
              : e.selectedLegendItems) &&
            (null ===
              (n =
                null === (i = this.chart) || void 0 === i
                  ? void 0
                  : i.legend) ||
              void 0 === n ||
              n.changeSelectedItems(this.states.selectedLegendItems)),
          void 0 !==
            (null === (s = this.states) || void 0 === s
              ? void 0
              : s.selectedCategoryLabels) &&
            (null === (o = this.chart) || void 0 === o
              ? void 0
              : o.getCategoryLabelSelectable) &&
            this.chart
              .getCategoryLabelSelectable()
              .changeSelectedLabels(this.states.selectedCategoryLabels));
    }
    destroy() {
      this.unobserveResize(),
        this.chart &&
          (this.renderRoot.removeEventListener(
            t.ChartEventType.Wheel,
            this.chart.onWheel
          ),
          this.chart.destroy());
    }
    handleResize() {
      var t;
      null === (t = this.chart) || void 0 === t || t.resize();
    }
    initChart() {
      this.data &&
        this.type &&
        (this.destroy(),
        (this.chart = Rf(
          this.renderRoot.querySelector("canvas"),
          this.type,
          this.data,
          this.options
        )),
        this.chart.render(),
        this.observeChartResize(),
        this.observeCanvasResize(),
        this.chart.onWheel &&
          this.renderRoot.addEventListener(
            t.ChartEventType.Wheel,
            this.chart.onWheel.bind(this.chart)
          ));
    }
    updateChart() {
      var t;
      null === (t = this.chart) || void 0 === t || t.update();
    }
    static finalizeStyles(t) {
      let e = super.finalizeStyles(t);
      const i = document.head;
      return (
        this.disableShadowRoot &&
          (e.forEach((t) => {
            const e = document.createElement("style");
            t instanceof qc && (e.textContent = t.cssText), i.appendChild(e);
          }),
          (e = [])),
        e
      );
    }
    observeChartResize() {
      var t, e;
      (this.chartResizeObserver = new ResizeObserver(() => {
        var t, e;
        null ===
          (e = null === (t = this.chart) || void 0 === t ? void 0 : t.api) ||
          void 0 === e ||
          e.resize();
      })),
        (null ===
          (e = null === (t = this.chart) || void 0 === t ? void 0 : t.api) ||
        void 0 === e
          ? void 0
          : e.canvas.parentElement) &&
          this.chartResizeObserver.observe(this.chart.api.canvas.parentElement);
    }
    observeCanvasResize() {
      var t, e;
      (this.canvasResizeObserver = new ResizeObserver(() => {
        var t;
        null === (t = this.chart) || void 0 === t || t.resize();
      })),
        (null ===
          (e = null === (t = this.chart) || void 0 === t ? void 0 : t.api) ||
        void 0 === e
          ? void 0
          : e.canvas) &&
          this.canvasResizeObserver.observe(this.chart.api.canvas);
    }
    unobserveResize() {
      var t, e, i, n, s;
      this.canvasResizeObserver &&
        (null ===
          (e = null === (t = this.chart) || void 0 === t ? void 0 : t.api) ||
        void 0 === e
          ? void 0
          : e.canvas) &&
        this.canvasResizeObserver.unobserve(this.chart.api.canvas),
        this.chartResizeObserver &&
          (null ===
            (n = null === (i = this.chart) || void 0 === i ? void 0 : i.api) ||
          void 0 === n
            ? void 0
            : n.canvas.parentElement) &&
          (null === (s = this.chartResizeObserver) ||
            void 0 === s ||
            s.unobserve(this.chart.api.canvas.parentElement));
    }
    updateDataFromAPI() {
      this.dataUrl &&
        lu(this.dataUrl).then((t) => {
          this.setAttribute("data", JSON.stringify(t));
        });
    }
  }),
    (t.ChartComponent.tag = ap),
    (t.ChartComponent.disableShadowRoot = !0),
    If(
      [jf({ type: String, reflect: !0 }), Ff("design:type", String)],
      t.ChartComponent.prototype,
      "type",
      void 0
    ),
    If(
      [
        jf({
          type: Object,
          hasChanged: (t, e) => JSON.stringify(t) !== JSON.stringify(e),
        }),
        Ff("design:type", Object),
      ],
      t.ChartComponent.prototype,
      "data",
      void 0
    ),
    If(
      [jf({ attribute: "data-url", type: String }), Ff("design:type", String)],
      t.ChartComponent.prototype,
      "dataUrl",
      void 0
    ),
    If(
      [
        jf({
          type: Object,
          hasChanged: (t, e) => JSON.stringify(t) !== JSON.stringify(e),
        }),
        Ff("design:type", Object),
      ],
      t.ChartComponent.prototype,
      "options",
      void 0
    ),
    If(
      [jf({ type: Object, hasChanged: () => !0 }), Ff("design:type", Object)],
      t.ChartComponent.prototype,
      "states",
      void 0
    ),
    (t.ChartComponent = If(
      [Nf(ap), Ff("design:paramtypes", [])],
      t.ChartComponent
    )),
    (t.ColorSets = class extends qd {
      render() {
        return Td`${Array.from(ou.colorSets.keys()).map(
          (t) => Td`<div class="item ${Gf(this.getClasses(t))}">
          <div class="item-name">${t}</div>
          <div class="item-values">${this.getColorItem(
            ou.colorSets.get(t) || []
          )}</div>
        </div>`
        )} `;
      }
      getClasses(t) {
        return ou.colorSet === t ? { current: !0 } : {};
      }
      getColorItem(t) {
        return Td`${t.map(
          (t) => Td`<div class="color-item">
          <span class="text">${t}</span><span class="flag" style="background-color: ${t}"></span>
        </div>`
        )}`;
      }
    }),
    (t.ColorSets.styles = Zc`
    :host {
      display: table;
      width: 100%;
      border-collapse: collapse;
    }
    .item {
      display: table-row;
    }
    .item.current .item-name {
      font-weight: bold;
    }
    .item .item-name {
      width: 160px;
      display: table-cell;
      vertical-align: middle;
      padding: 1rem;
      border: solid 1px #efefef;
      text-align: center;
    }
    .item .item-values {
      display: table-cell;
      padding: 1rem 0;
      border: solid 1px #efefef;
    }
    .color-item {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      width: 5rem;
      text-align: center;
      padding: 0.25rem 0.5rem;
    }
    .color-item .text {
      display: block;
    }
    .color-item .flag {
      display: block;
      border-radius: 4px;
      width: 4.2rem;
      height: 1rem;
    }
  `),
    (t.ColorSets = If([Nf(`${ru}-colorsets`)], t.ColorSets)),
    (t.A11yChart = mu),
    (t.A11yLegend = vu),
    (t.AreaChart = Sf),
    (t.BarChart = Mf),
    (t.COMPONENT_PREFIX = ru),
    (t.Chart = gu),
    (t.ChartEvent = Ar),
    (t.ColumnChart = Af),
    (t.DomElement = Bc),
    (t.DonutChart = Tf),
    (t.GaugeChart = Of),
    (t.LineChart = Pf),
    (t.PieChart = Df),
    (t.RangeChart = Ef),
    (t.SUPPORTED_CHARTS = Lf),
    (t.SegmentClickable = fu),
    (t.Tooltip = yf),
    (t.XYChart = Cf),
    (t.alphaColor = zr),
    (t.changeTheme = function (e, i) {
      ou.set({ theme: e }),
        i && ou.set({ colorSet: i }),
        document.dispatchEvent(
          new CustomEvent(t.ChartEventType.ThemeChange, { detail: e })
        );
    }),
    (t.colorSets = Qd),
    (t.convertToCJType = uu),
    (t.createChart = Rf),
    (t.darkenColor = jr),
    (t.debounce = Wc),
    (t.deepClone = $c),
    (t.defaultColorSet = tu),
    (t.defaultTheme = nu),
    (t.equalsJSONString = function (t, e) {
      return JSON.stringify(t) === JSON.stringify(e);
    }),
    (t.findDomElement = Vc),
    (t.formatBigNumber = du),
    (t.formatNumber = Wr),
    (t.getBrightColors = function (t, e) {
      return Fr.scale([t, "#ffffff"]).colors(e);
    }),
    (t.getColor = function (t, e) {
      const i = hu(t);
      return i && e < (null == i ? void 0 : i.length) ? i[e] : "";
    }),
    (t.getColorForChart = function (t, e, i) {
      if (e && e.length > t) return e[t];
      if (i) {
        const e = hu(i);
        if (e && e.length > t) return e[t];
      }
      return "";
    }),
    (t.getColorsByName = hu),
    (t.getCurrentColorSet = function () {
      return { name: ou.colorSet, colors: ou.colorSets.get(ou.colorSet) };
    }),
    (t.getDarkColors = function (t, e) {
      return Fr.scale([t, "#000000"]).colors(e);
    }),
    (t.getFieldFromObject = jc),
    (t.getFontStyleAbbreviation = cu),
    (t.getRandomColor = Nr),
    (t.getRandomColors = function (t) {
      const e = [];
      for (let i = t; i > 0; i--) e.push(Nr());
      return e;
    }),
    (t.getScaleColors = function (t, e) {
      return Fr.scale(t).colors(e);
    }),
    (t.getThemeByName = su),
    (t.inactiveColor = Dr),
    (t.isEmptyObject = function (t) {
      return !(!t || "object" != typeof t || 0 !== Object.keys(t).length);
    }),
    (t.isNullOrUndefined = Nc),
    (t.jsonToTableData = function (t) {
      const e = Object.keys(t[0]);
      return [e.map((t) => t), ...t.map((t) => e.map((e) => t[e]))];
    }),
    (t.lightenColor = $r),
    (t.mergeObjects = Ic),
    (t.mergeObjectsTo = Fc),
    (t.padToArray = zc),
    (t.parseUrlPattern = au),
    (t.requestFromPattern = lu),
    (t.requestOptionsToString = function (t) {
      let e = "";
      return (
        t.requestBody &&
          ("string" == typeof t.requestBody && (e = t.requestBody),
          "object" == typeof t.requestBody &&
            (e = JSON.stringify(t.requestBody))),
        `${t.method}>>${t.url}${e ? `>>${e}` : ""}`
      );
    }),
    (t.settings = ou),
    (t.splitAndGet = Yc),
    (t.tableDataToJSON = Yr),
    (t.themes = iu),
    (t.wrapSelector = Zd);
});
//# sourceMappingURL=widgets.umd.js.map
