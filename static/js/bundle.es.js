var _r = Array.isArray, cr = Array.from, vr = Object.defineProperty, z = Object.getOwnPropertyDescriptor;
const U = 2, Z = 4, Y = 8, pr = 16, q = 32, I = 64, L = 128, O = 256, E = 512, $ = 1024, M = 2048, rr = 4096, V = 8192, dr = 16384, hr = 1 << 18, Er = 1 << 19;
function wr(r) {
  return r === this.v;
}
function mr() {
  throw new Error("effect_update_depth_exceeded");
}
function gr(r) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: wr,
    version: 0
  };
}
const Tr = 2;
var G, tr, nr;
function xr() {
  if (G === void 0) {
    G = window;
    var r = Element.prototype, t = Node.prototype;
    tr = z(t, "firstChild").get, nr = z(t, "nextSibling").get, r.__click = void 0, r.__className = "", r.__attributes = null, r.__e = void 0, Text.prototype.__t = void 0;
  }
}
function yr(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function er(r) {
  return tr.call(r);
}
// @__NO_SIDE_EFFECTS__
function Dr(r) {
  return nr.call(r);
}
function Nr(r) {
  return /* @__PURE__ */ er(r);
}
function Sr(r, t) {
  var n = t.last;
  n === null ? t.last = t.first = r : (n.next = r, r.prev = n, t.last = r);
}
function P(r, t, n, e = !0) {
  var u = (r & I) !== 0, l = m, o = {
    ctx: h,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: r | $,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: u ? null : l,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (n) {
    var i = x;
    try {
      J(!0), j(o), o.f |= dr;
    } catch (c) {
      throw B(o), c;
    } finally {
      J(i);
    }
  } else t !== null && Hr(o);
  var s = n && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & Er) === 0;
  if (!s && !u && e && (l !== null && Sr(o, l), w !== null && w.f & U)) {
    var f = (
      /** @type {Derived} */
      w
    );
    (f.children ?? (f.children = [])).push(o);
  }
  return o;
}
function Cr(r) {
  const t = P(I, r, !0);
  return () => {
    B(t);
  };
}
function kr(r) {
  return P(Z, r, !1);
}
function Fr(r) {
  return P(Y, r, !0);
}
function Or(r) {
  return Fr(r);
}
function Rr(r, t = !0) {
  return P(Y | q, r, !0, t);
}
function lr(r) {
  var t = r.teardown;
  if (t !== null) {
    const n = w;
    A(null);
    try {
      t.call(null);
    } finally {
      A(n);
    }
  }
}
function B(r, t = !0) {
  var n = !1;
  if ((t || r.f & hr) && r.nodes_start !== null) {
    for (var e = r.nodes_start, u = r.nodes_end; e !== null; ) {
      var l = e === u ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Dr(e)
      );
      e.remove(), e = l;
    }
    n = !0;
  }
  sr(r, t && !n), N(r, 0), y(r, V);
  var o = r.transitions;
  if (o !== null)
    for (const s of o)
      s.stop();
  lr(r);
  var i = r.parent;
  i !== null && i.first !== null && ur(r), r.next = r.prev = r.teardown = r.ctx = r.deps = r.parent = r.fn = r.nodes_start = r.nodes_end = null;
}
function ur(r) {
  var t = r.parent, n = r.prev, e = r.next;
  n !== null && (n.next = e), e !== null && (e.prev = n), t !== null && (t.first === r && (t.first = e), t.last === r && (t.last = n));
}
function or(r) {
  var t = r.children;
  if (t !== null) {
    r.children = null;
    for (var n = 0; n < t.length; n += 1) {
      var e = t[n];
      e.f & U ? br(
        /** @type {Derived} */
        e
      ) : B(
        /** @type {Effect} */
        e
      );
    }
  }
}
function Ar(r) {
  var t, n = m;
  b(r.parent);
  try {
    or(r), t = ar(r);
  } finally {
    b(n);
  }
  var e = (T || r.f & L) && r.deps !== null ? M : E;
  y(r, e), r.equals(t) || (r.v = t, r.version = qr());
}
function br(r) {
  or(r), N(r, 0), y(r, V), r.children = r.deps = r.reactions = // @ts-expect-error `signal.fn` cannot be `null` while the signal is alive
  r.fn = null;
}
let R = !1, x = !1;
function J(r) {
  x = r;
}
let H = [], D = 0;
let w = null;
function A(r) {
  w = r;
}
let m = null;
function b(r) {
  m = r;
}
let d = null, v = 0, ir = 0, T = !1, h = null;
function qr() {
  return ++ir;
}
function W(r) {
  var o, i;
  var t = r.f;
  if (t & $)
    return !0;
  if (t & M) {
    var n = r.deps, e = (t & L) !== 0;
    if (n !== null) {
      var u;
      if (t & O) {
        for (u = 0; u < n.length; u++)
          ((o = n[u]).reactions ?? (o.reactions = [])).push(r);
        r.f ^= O;
      }
      for (u = 0; u < n.length; u++) {
        var l = n[u];
        if (W(
          /** @type {Derived} */
          l
        ) && Ar(
          /** @type {Derived} */
          l
        ), e && m !== null && !T && !((i = l == null ? void 0 : l.reactions) != null && i.includes(r)) && (l.reactions ?? (l.reactions = [])).push(r), l.version > r.version)
          return !0;
      }
    }
    e || y(r, E);
  }
  return !1;
}
function Ir(r, t, n) {
  throw r;
}
function ar(r) {
  var s;
  var t = d, n = v, e = w, u = T;
  d = /** @type {null | Value[]} */
  null, v = 0, w = r.f & (q | I) ? null : r, T = !x && (r.f & L) !== 0;
  try {
    var l = (
      /** @type {Function} */
      (0, r.fn)()
    ), o = r.deps;
    if (d !== null) {
      var i;
      if (N(r, v), o !== null && v > 0)
        for (o.length = v + d.length, i = 0; i < d.length; i++)
          o[v + i] = d[i];
      else
        r.deps = o = d;
      if (!T)
        for (i = v; i < o.length; i++)
          ((s = o[i]).reactions ?? (s.reactions = [])).push(r);
    } else o !== null && v < o.length && (N(r, v), o.length = v);
    return l;
  } finally {
    d = t, v = n, w = e, T = u;
  }
}
function Lr(r, t) {
  let n = t.reactions;
  if (n !== null) {
    var e = n.indexOf(r);
    if (e !== -1) {
      var u = n.length - 1;
      u === 0 ? n = t.reactions = null : (n[e] = n[u], n.pop());
    }
  }
  n === null && t.f & U && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (d === null || !d.includes(t)) && (y(t, M), t.f & (L | O) || (t.f ^= O), N(
    /** @type {Derived} **/
    t,
    0
  ));
}
function N(r, t) {
  var n = r.deps;
  if (n !== null)
    for (var e = t; e < n.length; e++)
      Lr(r, n[e]);
}
function sr(r, t = !1) {
  var n = r.first;
  for (r.first = r.last = null; n !== null; ) {
    var e = n.next;
    B(n, t), n = e;
  }
}
function j(r) {
  var t = r.f;
  if (!(t & V)) {
    y(r, E);
    var n = m, e = h;
    m = r, h = r.ctx;
    try {
      t & pr || sr(r), lr(r);
      var u = ar(r);
      r.teardown = typeof u == "function" ? u : null, r.version = ir;
    } catch (l) {
      Ir(
        /** @type {Error} */
        l
      );
    } finally {
      m = n, h = e;
    }
  }
}
function Mr() {
  D > 1e3 && (D = 0, mr()), D++;
}
function Vr(r) {
  var t = r.length;
  if (t !== 0) {
    Mr();
    var n = x;
    x = !0;
    try {
      for (var e = 0; e < t; e++) {
        var u = r[e];
        u.f & E || (u.f ^= E);
        var l = [];
        fr(u, l), Pr(l);
      }
    } finally {
      x = n;
    }
  }
}
function Pr(r) {
  var t = r.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var e = r[n];
      !(e.f & (V | rr)) && W(e) && (j(e), e.deps === null && e.first === null && e.nodes_start === null && (e.teardown === null ? ur(e) : e.fn = null));
    }
}
function Br() {
  if (R = !1, D > 1001)
    return;
  const r = H;
  H = [], Vr(r), R || (D = 0);
}
function Hr(r) {
  R || (R = !0, queueMicrotask(Br));
  for (var t = r; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (I | q)) {
      if (!(n & E)) return;
      t.f ^= E;
    }
  }
  H.push(t);
}
function fr(r, t) {
  var n = r.first, e = [];
  r: for (; n !== null; ) {
    var u = n.f, l = (u & q) !== 0, o = l && (u & E) !== 0;
    if (!o && !(u & rr))
      if (u & Y) {
        l ? n.f ^= E : W(n) && j(n);
        var i = n.first;
        if (i !== null) {
          n = i;
          continue;
        }
      } else u & Z && e.push(n);
    var s = n.next;
    if (s === null) {
      let a = n.parent;
      for (; a !== null; ) {
        if (r === a)
          break r;
        var f = a.next;
        if (f !== null) {
          n = f;
          continue r;
        }
        a = a.parent;
      }
    }
    n = s;
  }
  for (var c = 0; c < e.length; c++)
    i = e[c], t.push(i), fr(i, t);
}
const Ur = ~($ | M | E);
function y(r, t) {
  r.f = r.f & Ur | t;
}
function Yr(r, t = !1, n) {
  h = {
    p: h,
    c: null,
    e: null,
    m: !1,
    s: r,
    x: null,
    l: null
  }, t || (h.l = {
    s: null,
    u: null,
    r1: [],
    r2: gr(!1)
  });
}
function $r(r) {
  const t = h;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var n = m, e = w;
      t.e = null;
      try {
        for (var u = 0; u < o.length; u++) {
          var l = o[u];
          b(l.effect), A(l.reaction), kr(l.fn);
        }
      } finally {
        b(n), A(e);
      }
    }
    h = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
const Wr = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
function F(r) {
  var K;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), e = r.type, u = ((K = r.composedPath) == null ? void 0 : K.call(r)) || [], l = (
    /** @type {null | Element} */
    u[0] || r.target
  ), o = 0, i = r.__root;
  if (i) {
    var s = u.indexOf(i);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      r.__root = t;
      return;
    }
    var f = u.indexOf(t);
    if (f === -1)
      return;
    s <= f && (o = s);
  }
  if (l = /** @type {Element} */
  u[o] || r.target, l !== t) {
    vr(r, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    try {
      for (var c, a = []; l !== null; ) {
        var p = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var _ = l["__" + e];
          if (_ !== void 0 && !/** @type {any} */
          l.disabled)
            if (_r(_)) {
              var [S, ...C] = _;
              S.apply(l, [r, ...C]);
            } else
              _.call(l, r);
        } catch (k) {
          c ? a.push(k) : c = k;
        }
        if (r.cancelBubble || p === t || p === null)
          break;
        l = p;
      }
      if (c) {
        for (let k of a)
          queueMicrotask(() => {
            throw k;
          });
        throw c;
      }
    } finally {
      r.__root = t, delete r.currentTarget;
    }
  }
}
function jr(r) {
  var t = document.createElement("template");
  return t.innerHTML = r, t.content;
}
function Kr(r, t) {
  var n = (
    /** @type {Effect} */
    m
  );
  n.nodes_start === null && (n.nodes_start = r, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function zr(r, t) {
  var n = (t & Tr) !== 0, e, u = !r.startsWith("<!>");
  return () => {
    e === void 0 && (e = jr(u ? r : "<!>" + r), e = /** @type {Node} */
    /* @__PURE__ */ er(e));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(e, !0) : e.cloneNode(!0)
    );
    return Kr(l, l), l;
  };
}
function Gr(r, t) {
  r !== null && r.before(
    /** @type {Node} */
    t
  );
}
const Jr = ["touchstart", "touchmove"];
function Qr(r) {
  return Jr.includes(r);
}
function Xr(r, t) {
  t !== (r.__t ?? (r.__t = r.nodeValue)) && (r.__t = t, r.nodeValue = t == null ? "" : t + "");
}
function Zr(r, t) {
  const n = t.anchor ?? t.target.appendChild(yr());
  return rt(r, { ...t, anchor: n });
}
const g = /* @__PURE__ */ new Map();
function rt(r, { target: t, anchor: n, props: e = {}, events: u, context: l, intro: o = !0 }) {
  xr();
  var i = /* @__PURE__ */ new Set(), s = (a) => {
    for (var p = 0; p < a.length; p++) {
      var _ = a[p];
      if (!i.has(_)) {
        i.add(_);
        var S = Qr(_);
        t.addEventListener(_, F, { passive: S });
        var C = g.get(_);
        C === void 0 ? (document.addEventListener(_, F, { passive: S }), g.set(_, 1)) : g.set(_, C + 1);
      }
    }
  };
  s(cr(Wr)), Q.add(s);
  var f = void 0, c = Cr(() => (Rr(() => {
    if (l) {
      Yr({});
      var a = (
        /** @type {ComponentContext} */
        h
      );
      a.c = l;
    }
    u && (e.$$events = u), f = r(n, e) || {}, l && $r();
  }), () => {
    for (var a of i) {
      t.removeEventListener(a, F);
      var p = (
        /** @type {number} */
        g.get(a)
      );
      --p === 0 ? (document.removeEventListener(a, F), g.delete(a)) : g.set(a, p);
    }
    Q.delete(s), X.delete(f);
  }));
  return X.set(f, c), f;
}
let X = /* @__PURE__ */ new WeakMap();
const tt = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(tt);
var nt = /* @__PURE__ */ zr("<div> </div>");
function et(r, t) {
  var n = nt(), e = Nr(n);
  Or(() => Xr(e, `Rendering the edit page for ticket #${t.id ?? ""}`)), Gr(r, n);
}
window.onload = () => {
  [
    { selector: "#svelte-edit-basics", Component: et }
  ].forEach(({ selector: t, Component: n }) => {
    const e = document.querySelector(t);
    console.log(window == null ? void 0 : window.props), e && Zr(n, { target: e, props: (window == null ? void 0 : window.props) || {} });
  });
};
