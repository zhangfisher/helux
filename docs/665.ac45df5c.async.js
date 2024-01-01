(self.webpackChunkhelux_docs = self.webpackChunkhelux_docs || []).push([
  [665],
  {
    41226: function (j, E, n) {
      'use strict';
      n.d(E, {
        i: function () {
          return W;
        },
      });
      var e = n(79664),
        I = n.n(e),
        p = n(70125),
        D = n.n(p),
        x = n(70079),
        z = n(77937),
        Z = n.n(z),
        T = n(41176),
        C = n.n(T),
        d = n(44114),
        N = n.n(d),
        h = n(65523),
        w = n.n(h),
        f = n(7122),
        M = n.n(f),
        i = n(79862),
        v = n.n(i),
        S = C()(function H() {
          Z()(this, H);
        }),
        b = (function (H) {
          w()(O, H);
          var R = M()(O);
          function O(y) {
            var o;
            return Z()(this, O), (o = R.call(this)), v()(N()(o), 'el', void 0), (o.el = y), o;
          }
          return (
            C()(
              O,
              [
                {
                  key: 'top',
                  get: function () {
                    return this.el.getBoundingClientRect().top;
                  },
                },
                {
                  key: 'outerHeight',
                  get: function () {
                    return this.el.getBoundingClientRect().height;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return this.el.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return this.el.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return this.scrollTop + this.outerHeight >= this.scrollHeight;
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (o) {
                    this.el.addEventListener('scroll', o);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (o) {
                    this.el.removeEventListener('scroll', o);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (o) {
                    var g = document.querySelector(o);
                    if (!g) throw new Error('element is not found.');
                    return new O(g);
                  },
                },
              ],
            ),
            O
          );
        })(S),
        P = (function (H) {
          w()(O, H);
          var R = M()(O);
          function O() {
            return Z()(this, O), R.apply(this, arguments);
          }
          return (
            C()(
              O,
              [
                {
                  key: 'outerHeight',
                  get: function () {
                    return window.innerHeight;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return document.documentElement.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return document.documentElement.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return this.scrollTop + this.outerHeight >= this.scrollHeight;
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (o) {
                    document.addEventListener('scroll', o);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (o) {
                    document.removeEventListener('scroll', o);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function () {
                    return new O();
                  },
                },
              ],
            ),
            O
          );
        })(S),
        Q = (function () {
          function H() {
            Z()(this, H);
          }
          return (
            C()(H, null, [
              {
                key: 'create',
                value: function (O) {
                  return O ? b.create(O) : P.create();
                },
              },
            ]),
            H
          );
        })(),
        k = function (R) {
          var O = R.sectionRefs,
            y = R.rootSelector,
            o = R.offset,
            g = o === void 0 ? 0 : o,
            L = (0, x.useRef)(null);
          (0, x.useEffect)(
            function () {
              L.current = Q.create(y);
            },
            [y],
          );
          var V = (0, x.useCallback)(
              function () {
                return L.current ? L.current.isScrolledToBottom() : !1;
              },
              [L],
            ),
            J = (0, x.useCallback)(
              function (Y) {
                if (!L.current) return !1;
                var u = L.current.scrollTop,
                  c = u + L.current.outerHeight,
                  l = Y.getBoundingClientRect(),
                  F = L.current instanceof b ? u + l.top - L.current.top + g : u + l.top + g,
                  B = F + l.height;
                return [F < c, B > u].every(function (_) {
                  return _;
                });
              },
              [L, g],
            ),
            X = (0, x.useCallback)(
              function () {
                return O.map(function (Y) {
                  return Y.current ? J(Y.current) : !1;
                });
              },
              [J, O],
            ),
            K = (0, x.useState)([]),
            t = D()(K, 2),
            r = t[0],
            a = t[1],
            G = (0, x.useMemo)(
              function () {
                return r.findIndex(function (Y) {
                  return Y;
                });
              },
              [r],
            ),
            U = (0, x.useCallback)(
              function () {
                var Y = V()
                  ? [].concat(
                      I()(
                        new Array(O.length - 1).fill(!1).map(function (u) {
                          return u;
                        }),
                      ),
                      [!0],
                    )
                  : X();
                a(Y);
              },
              [X, V, O],
            );
          return (
            (0, x.useEffect)(
              function () {
                return (
                  U(),
                  L.current && L.current.registerScrollEvent(U),
                  function () {
                    L.current && L.current.unregisterScrollEvent(U);
                  }
                );
              },
              [U],
            ),
            { elementsStatusInViewport: r, currentElementIndexInViewport: G }
          );
        },
        W = function (R) {
          var O = R.children,
            y = R.sectionRefs,
            o = R.rootSelector,
            g = R.offset,
            L = k({ sectionRefs: y, rootSelector: o, offset: g }),
            V = L.elementsStatusInViewport,
            J = L.currentElementIndexInViewport;
          return O({ elementsStatusInViewport: V, currentElementIndexInViewport: J });
        };
    },
    38527: function (j, E, n) {
      'use strict';
      n.r(E),
        n.d(E, {
          default: function () {
            return y;
          },
        });
      var e = n(70079),
        I = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        z = (o, g, L) => (g in o ? I(o, g, { enumerable: !0, configurable: !0, writable: !0, value: L }) : (o[g] = L)),
        Z = (o, g) => {
          for (var L in g || (g = {})) D.call(g, L) && z(o, L, g[L]);
          if (p) for (var L of p(g)) x.call(g, L) && z(o, L, g[L]);
          return o;
        };
      const T = (o) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, o),
          e.createElement('path', {
            d: 'M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
          }),
        );
      var C =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+',
        d = n(22484),
        N = n(80904),
        h = n(44044),
        w = n(66803),
        f = n(15346),
        M = n(72686),
        i = n(34395),
        v = n(94743),
        S = n(33731),
        b = n(87482);
      function P(o, g) {
        return R(o) || H(o, g) || k(o, g) || Q();
      }
      function Q() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function k(o, g) {
        if (o) {
          if (typeof o == 'string') return W(o, g);
          var L = Object.prototype.toString.call(o).slice(8, -1);
          if ((L === 'Object' && o.constructor && (L = o.constructor.name), L === 'Map' || L === 'Set')) return Array.from(o);
          if (L === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)) return W(o, g);
        }
      }
      function W(o, g) {
        (g == null || g > o.length) && (g = o.length);
        for (var L = 0, V = new Array(g); L < g; L++) V[L] = o[L];
        return V;
      }
      function H(o, g) {
        var L = o == null ? null : (typeof Symbol != 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
        if (L != null) {
          var V,
            J,
            X,
            K,
            t = [],
            r = !0,
            a = !1;
          try {
            if (((X = (L = L.call(o)).next), g === 0)) {
              if (Object(L) !== L) return;
              r = !1;
            } else for (; !(r = (V = X.call(L)).done) && (t.push(V.value), t.length !== g); r = !0);
          } catch (G) {
            (a = !0), (J = G);
          } finally {
            try {
              if (!r && L.return != null && ((K = L.return()), Object(K) !== K)) return;
            } finally {
              if (a) throw J;
            }
          }
          return t;
        }
      }
      function R(o) {
        if (Array.isArray(o)) return o;
      }
      var O = function () {
          var g = (0, N.YB)(),
            L = (0, N.pC)(),
            V = (0, N.tx)(),
            J = (0, N.TH)(),
            X = J.hash,
            K = J.pathname,
            t = (0, N.WF)(),
            r = t.loading,
            a = t.hostname,
            G = (0, e.useState)(!1),
            U = P(G, 2),
            Y = U[0],
            u = U[1],
            c = (0, N.eL)(),
            l = c.frontmatter,
            F = l.sidebar !== !1 && (V == null ? void 0 : V.length) > 0;
          return (
            (0, e.useEffect)(
              function () {
                var B = X.replace('#', '');
                B
                  && setTimeout(function () {
                    var _ = document.getElementById(decodeURIComponent(B));
                    _ && (0, d.Z)(_.offsetTop - 80, { maxDuration: 300 });
                  }, 1);
              },
              [r, X],
            ),
            e.createElement(
              'div',
              {
                className: 'dumi-default-doc-layout',
                'data-mobile-sidebar-active': Y || void 0,
                onClick: function () {
                  return u(!1);
                },
              },
              e.createElement(
                N.ql,
                null,
                e.createElement('html', { lang: g.locale.replace(/-.+$/, '') }),
                l.title && e.createElement('title', null, l.title),
                l.title && e.createElement('meta', { property: 'og:title', content: l.title }),
                l.description && e.createElement('meta', { name: 'description', content: l.description }),
                l.description && e.createElement('meta', { property: 'og:description', content: l.description }),
                l.keywords && e.createElement('meta', { name: 'keywords', content: l.keywords.join(',') }),
                l.keywords
                  && l.keywords.map(function (B) {
                    return e.createElement('meta', { key: B, property: 'article:tag', content: B });
                  }),
                a && e.createElement('link', { rel: 'canonical', href: a + K }),
              ),
              e.createElement(i.Z, null),
              e.createElement(v.Z, null),
              e.createElement(f.Z, null),
              F
                && e.createElement(
                  'div',
                  { className: 'dumi-default-doc-layout-mobile-bar' },
                  e.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'dumi-default-sidebar-btn',
                      onClick: function (_) {
                        _.stopPropagation(),
                          u(function ($) {
                            return !$;
                          });
                      },
                    },
                    e.createElement(T, null),
                    g.formatMessage({ id: 'layout.sidebar.btn' }),
                  ),
                ),
              e.createElement(
                'main',
                null,
                F && e.createElement(S.Z, null),
                e.createElement(h.Z, null, e.createElement('article', null, L), e.createElement(w.Z, null), e.createElement(M.Z, null)),
                l.toc === 'content'
                  && e.createElement(
                    'div',
                    { className: 'dumi-default-doc-layout-toc-wrapper' },
                    e.createElement('h4', null, 'TABLE OF CONTENTS'),
                    e.createElement(b.Z, null),
                  ),
              ),
            )
          );
        },
        y = O;
    },
    32800: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return f;
        },
      });
      var e = n(80904),
        I = n(70079);
      function p(M, i) {
        return T(M) || Z(M, i) || x(M, i) || D();
      }
      function D() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function x(M, i) {
        if (M) {
          if (typeof M == 'string') return z(M, i);
          var v = Object.prototype.toString.call(M).slice(8, -1);
          if ((v === 'Object' && M.constructor && (v = M.constructor.name), v === 'Map' || v === 'Set')) return Array.from(M);
          if (v === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)) return z(M, i);
        }
      }
      function z(M, i) {
        (i == null || i > M.length) && (i = M.length);
        for (var v = 0, S = new Array(i); v < i; v++) S[v] = M[v];
        return S;
      }
      function Z(M, i) {
        var v = M == null ? null : (typeof Symbol != 'undefined' && M[Symbol.iterator]) || M['@@iterator'];
        if (v != null) {
          var S,
            b,
            P,
            Q,
            k = [],
            W = !0,
            H = !1;
          try {
            if (((P = (v = v.call(M)).next), i === 0)) {
              if (Object(v) !== v) return;
              W = !1;
            } else for (; !(W = (S = P.call(v)).done) && (k.push(S.value), k.length !== i); W = !0);
          } catch (R) {
            (H = !0), (b = R);
          } finally {
            try {
              if (!W && v.return != null && ((Q = v.return()), Object(Q) !== Q)) return;
            } finally {
              if (H) throw b;
            }
          }
          return k;
        }
      }
      function T(M) {
        if (Array.isArray(M)) return M;
      }
      var C = function () {
          return I.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            I.createElement('path', {
              d: 'M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z',
            }),
          );
        },
        d = function () {
          return I.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            I.createElement('path', {
              d: 'M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
            }),
          );
        },
        N = function () {
          return I.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            I.createElement('path', {
              d: 'M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z',
            }),
          );
        },
        h = { light: d, dark: C, auto: N },
        w = function () {
          var i = (0, e.WF)(),
            v = i.themeConfig.prefersColor.default,
            S = (0, e.YB)(),
            b = (0, e.OI)(),
            P = p(b, 3),
            Q = P[1],
            k = Q === void 0 ? v : Q,
            W = P[2],
            H = h[k];
          return I.createElement(
            'span',
            {
              className: 'dumi-default-color-switch',
              'data-dumi-tooltip': S.formatMessage({ id: 'header.color.mode.'.concat(k) }),
              'data-dumi-tooltip-bottom': !0,
            },
            H && I.createElement(H, null),
            I.createElement(
              'select',
              {
                onChange: function (O) {
                  return W(O.target.value);
                },
                value: k,
                onClick: function (O) {
                  return O.stopPropagation();
                },
              },
              ['light', 'dark', 'auto'].map(function (R) {
                return I.createElement('option', { value: R, key: R }, S.formatMessage({ id: 'header.color.mode.'.concat(R) }));
              }),
            ),
          );
        },
        f = w;
    },
    29684: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return D;
        },
      });
      var e = n(80904),
        I = n(70079),
        p = function (z) {
          var Z = (0, e.tx)(),
            T = (0, e.WF)(),
            C = T.themeConfig,
            d = (0, e.eL)(),
            N = d.frontmatter;
          return I.createElement(
            'div',
            {
              className: 'dumi-default-content',
              'data-no-sidebar': !Z || N.sidebar === !1 || void 0,
              'data-no-footer': C.footer === !1 || void 0,
            },
            z.children,
          );
        },
        D = p;
    },
    35750: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return K;
        },
      });
      var e = n(70079),
        I = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        z = (t, r, a) => (r in t ? I(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[r] = a)),
        Z = (t, r) => {
          for (var a in r || (r = {})) D.call(r, a) && z(t, a, r[a]);
          if (p) for (var a of p(r)) x.call(r, a) && z(t, a, r[a]);
          return t;
        };
      const T = (t) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
          }),
        );
      var C =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODcyIDQ3NEgyODYuOWwzNTAuMi0zMDRjNS42LTQuOSAyLjItMTQtNS4yLTE0aC04OC41Yy0zLjkgMC03LjYgMS40LTEwLjUgMy45TDE1NSA0ODcuOGEzMS45NiAzMS45NiAwIDAgMCAwIDQ4LjNMNTM1LjEgODY2YzEuNSAxLjMgMy4zIDIgNS4yIDJoOTEuNWM3LjQgMCAxMC44LTkuMiA1LjItMTRMMjg2LjkgNTUwSDg3MmM0LjQgMCA4LTMuNiA4LTh2LTYwYzAtNC40LTMuNi04LTgtOHoiLz48L3N2Zz4=',
        d = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        f = (t, r, a) => (r in t ? d(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[r] = a)),
        M = (t, r) => {
          for (var a in r || (r = {})) h.call(r, a) && f(t, a, r[a]);
          if (N) for (var a of N(r)) w.call(r, a) && f(t, a, r[a]);
          return t;
        };
      const i = (t) =>
        e.createElement(
          'svg',
          M({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          }),
          e.createElement('path', {
            d: 'M686.7 638.6 544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik02ODYuNyA2MzguNiA1NDQuMSA1MzUuNVYyODhjMC00LjQtMy42LTgtOC04SDQ4OGMtNC40IDAtOCAzLjYtOCA4djI3NS40YzAgMi42IDEuMiA1IDMuMyA2LjVsMTY1LjQgMTIwLjZjMy42IDIuNiA4LjYgMS44IDExLjItMS43bDI4LjYtMzljMi42LTMuNyAxLjgtOC43LTEuOC0xMS4yeiIvPjwvc3ZnPg==',
        S = Object.defineProperty,
        b = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        k = (t, r, a) => (r in t ? S(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[r] = a)),
        W = (t, r) => {
          for (var a in r || (r = {})) P.call(r, a) && k(t, a, r[a]);
          if (b) for (var a of b(r)) Q.call(r, a) && k(t, a, r[a]);
          return t;
        };
      const H = (t) =>
        e.createElement(
          'svg',
          W({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
          }),
        );
      var R =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMjU3LjcgNzUyYzIgMCA0LS4yIDYtLjVMNDMxLjkgNzIyYzItLjQgMy45LTEuMyA1LjMtMi44bDQyMy45LTQyMy45YTkuOTYgOS45NiAwIDAgMCAwLTE0LjFMNjk0LjkgMTE0LjljLTEuOS0xLjktNC40LTIuOS03LjEtMi45cy01LjIgMS03LjEgMi45TDI1Ni44IDUzOC44Yy0xLjUgMS41LTIuNCAzLjMtMi44IDUuM2wtMjkuNSAxNjguMmEzMy41IDMzLjUgMCAwIDAgOS40IDI5LjhjNi42IDYuNCAxNC45IDkuOSAyMy44IDkuOXptNjcuNC0xNzQuNEw2ODcuOCAyMTVsNzMuMyA3My4zLTM2Mi43IDM2Mi42LTg4LjkgMTUuNyAxNS42LTg5ek04ODAgODM2SDE0NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTM2YzAtMTcuNy0xNC4zLTMyLTMyLTMyeiIvPjwvc3ZnPg==',
        O = n(80904);
      function y(t, r) {
        return J(t) || V(t, r) || g(t, r) || o();
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function g(t, r) {
        if (t) {
          if (typeof t == 'string') return L(t, r);
          var a = Object.prototype.toString.call(t).slice(8, -1);
          if ((a === 'Object' && t.constructor && (a = t.constructor.name), a === 'Map' || a === 'Set')) return Array.from(t);
          if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return L(t, r);
        }
      }
      function L(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, G = new Array(r); a < r; a++) G[a] = t[a];
        return G;
      }
      function V(t, r) {
        var a = t == null ? null : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (a != null) {
          var G,
            U,
            Y,
            u,
            c = [],
            l = !0,
            F = !1;
          try {
            if (((Y = (a = a.call(t)).next), r === 0)) {
              if (Object(a) !== a) return;
              l = !1;
            } else for (; !(l = (G = Y.call(a)).done) && (c.push(G.value), c.length !== r); l = !0);
          } catch (B) {
            (F = !0), (U = B);
          } finally {
            try {
              if (!l && a.return != null && ((u = a.return()), Object(u) !== u)) return;
            } finally {
              if (F) throw U;
            }
          }
          return c;
        }
      }
      function J(t) {
        if (Array.isArray(t)) return t;
      }
      var X = function () {
          var r = (0, O.TH)(),
            a = r.pathname,
            G = (0, O.tx)(),
            U = (0, O.WF)(),
            Y = U.themeConfig,
            u = (0, O.eL)(),
            c = u.frontmatter,
            l = (0, O.YB)(),
            F = (0, e.useState)(void 0),
            B = y(F, 2),
            _ = B[0],
            $ = B[1],
            te = (0, e.useState)(void 0),
            ee = y(te, 2),
            ne = ee[0],
            ce = ee[1],
            ae = (0, e.useState)(''),
            se = y(ae, 2),
            oe = se[0],
            le = se[1],
            ie = (0, e.useState)(''),
            Me = y(ie, 2),
            fe = Me[0],
            ge = Me[1],
            ue = Y.editLink && c.filename,
            q = Y.lastUpdated && c.lastUpdated;
          return (
            (0, e.useLayoutEffect)(
              function () {
                if (G) {
                  var re = G.reduce(function (s, A) {
                      return s.concat(A.children);
                    }, []),
                    m = re.findIndex(function (s) {
                      return s.link === a;
                    });
                  $(re[m - 1]), ce(re[m + 1]);
                }
              },
              [a, G],
            ),
            (0, e.useLayoutEffect)(
              function () {
                q
                  && (le(new Date(c.lastUpdated).toISOString()),
                  ge(new Intl.DateTimeFormat(void 0, { dateStyle: 'short', timeStyle: 'short' }).format(c.lastUpdated)));
              },
              [q],
            ),
            e.createElement(
              'footer',
              { className: 'dumi-default-content-footer' },
              e.createElement(
                'dl',
                null,
                q
                  && e.createElement(
                    'dd',
                    null,
                    e.createElement(i, null),
                    e.createElement(O._H, { id: 'content.footer.last.updated' }),
                    e.createElement('time', { dateTime: oe }, fe),
                  ),
                ue
                  && e.createElement(
                    'dd',
                    null,
                    e.createElement(
                      'a',
                      {
                        target: '_blank',
                        href: ''.concat(l.formatMessage({ id: '$internal.edit.link' }, { filename: c.filename })),
                        rel: 'noreferrer',
                      },
                      e.createElement(H, null),
                      e.createElement(O._H, { id: 'content.footer.actions.edit' }),
                    ),
                  ),
              ),
              e.createElement(
                'nav',
                null,
                _
                  && e.createElement(
                    O.rU,
                    { to: _.link, 'data-prev': !0 },
                    e.createElement(
                      'small',
                      null,
                      e.createElement(T, null),
                      e.createElement(O._H, { id: 'content.footer.actions.previous' }),
                    ),
                    _.title,
                  ),
                ne
                  && e.createElement(
                    O.rU,
                    { to: ne.link, 'data-next': !0 },
                    e.createElement('small', null, e.createElement(O._H, { id: 'content.footer.actions.next' }), e.createElement(T, null)),
                    ne.title,
                  ),
              ),
            )
          );
        },
        K = X;
    },
    71314: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return K;
        },
      });
      var e = n(70079),
        I = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        z = (t, r, a) => (r in t ? I(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[r] = a)),
        Z = (t, r) => {
          for (var a in r || (r = {})) D.call(r, a) && z(t, a, r[a]);
          if (p) for (var a of p(r)) x.call(r, a) && z(t, a, r[a]);
          return t;
        };
      const T = (t) =>
        e.createElement(
          'svg',
          Z({ fillRule: 'evenodd', viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 0 1 0 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 0 1 0 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 0 1-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 0 1-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7a.169.169 0 0 1-.06-.07.12.12 0 0 1 0-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7a.199.199 0 0 1-.06-.09.12.12 0 0 1 0-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 0 1 .07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 0 1 .07 0z',
          }),
        );
      var C =
          'data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiPjxwYXRoIGQ9Ik03OTkuODYgMTY2LjMxYy4wMiAwIC4wNC4wMi4wOC4wNmw1Ny42OSA1Ny43Yy4wNC4wMy4wNS4wNS4wNi4wOGEuMTIuMTIgMCAwIDEgMCAuMDZjMCAuMDMtLjAyLjA1LS4wNi4wOUw1NjkuOTMgNTEybDI4Ny43IDI4Ny43Yy4wNC4wNC4wNS4wNi4wNi4wOWEuMTIuMTIgMCAwIDEgMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMCAxLS4wNyAwYy0uMDMgMC0uMDUtLjAyLS4wOS0uMDZMNTEyIDU2OS45M2wtMjg3LjcgMjg3LjdjLS4wNC4wNC0uMDYuMDUtLjA5LjA2YS4xMi4xMiAwIDAgMS0uMDcgMGMtLjAyIDAtLjA0LS4wMi0uMDgtLjA2bC01Ny42OS01Ny43YS4xNjkuMTY5IDAgMCAxLS4wNi0uMDcuMTIuMTIgMCAwIDEgMC0uMDdjMC0uMDMuMDItLjA1LjA2LS4wOUw0NTQuMDcgNTEybC0yODcuNy0yODcuN2EuMTk5LjE5OSAwIDAgMS0uMDYtLjA5LjEyLjEyIDAgMCAxIDAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMCAxIC4wNyAwYy4wMyAwIC4wNS4wMi4wOS4wNkw1MTIgNDU0LjA3bDI4Ny43LTI4Ny43Yy4wNC0uMDQuMDYtLjA1LjA5LS4wNmEuMTIuMTIgMCAwIDEgLjA3IDB6Ii8+PC9zdmc+',
        d = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        f = (t, r, a) => (r in t ? d(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[r] = a)),
        M = (t, r) => {
          for (var a in r || (r = {})) h.call(r, a) && f(t, a, r[a]);
          if (N) for (var a of N(r)) w.call(r, a) && f(t, a, r[a]);
          return t;
        };
      const i = (t) =>
        e.createElement(
          'svg',
          M({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==',
        S = n(80904),
        b = n(70736),
        P = n(26415),
        Q = n(17353),
        k = n(32776),
        W = n(10473),
        H = n(65989),
        R = n(22224),
        O = n(27618);
      function y(t, r) {
        return J(t) || V(t, r) || g(t, r) || o();
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function g(t, r) {
        if (t) {
          if (typeof t == 'string') return L(t, r);
          var a = Object.prototype.toString.call(t).slice(8, -1);
          if ((a === 'Object' && t.constructor && (a = t.constructor.name), a === 'Map' || a === 'Set')) return Array.from(t);
          if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return L(t, r);
        }
      }
      function L(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, G = new Array(r); a < r; a++) G[a] = t[a];
        return G;
      }
      function V(t, r) {
        var a = t == null ? null : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (a != null) {
          var G,
            U,
            Y,
            u,
            c = [],
            l = !0,
            F = !1;
          try {
            if (((Y = (a = a.call(t)).next), r === 0)) {
              if (Object(a) !== a) return;
              l = !1;
            } else for (; !(l = (G = Y.call(a)).done) && (c.push(G.value), c.length !== r); l = !0);
          } catch (B) {
            (F = !0), (U = B);
          } finally {
            try {
              if (!l && a.return != null && ((u = a.return()), Object(u) !== u)) return;
            } finally {
              if (F) throw U;
            }
          }
          return c;
        }
      }
      function J(t) {
        if (Array.isArray(t)) return t;
      }
      var X = function () {
          var r = (0, S.eL)(),
            a = r.frontmatter,
            G = (0, e.useState)(!1),
            U = y(G, 2),
            Y = U[0],
            u = U[1],
            c = (0, S.WF)(),
            l = c.themeConfig,
            F = (0, e.useMemo)(
              function () {
                return l.socialLinks
                  ? Object.keys(l.socialLinks)
                      .slice(0, 5)
                      .map(function (B) {
                        return { icon: B, link: l.socialLinks[B] };
                      })
                  : [];
              },
              [l.socialLinks],
            );
          return e.createElement(
            'div',
            {
              className: 'dumi-default-header',
              'data-static': !!a.hero || void 0,
              'data-mobile-active': Y || void 0,
              onClick: function () {
                return u(!1);
              },
            },
            e.createElement(
              'div',
              { className: 'dumi-default-header-content' },
              e.createElement('section', { className: 'dumi-default-header-left' }, e.createElement(k.Z, null)),
              e.createElement(
                'section',
                { className: 'dumi-default-header-right' },
                e.createElement(W.Z, null),
                e.createElement(
                  'div',
                  { className: 'dumi-default-header-right-aside' },
                  e.createElement(R.ZP, null),
                  e.createElement(Q.Z, null),
                  e.createElement(H.Z, null),
                  l.prefersColor.switch && e.createElement(b.Z, null),
                  F.map(function (B) {
                    return e.createElement(O.Z, { icon: B.icon, link: B.link, key: B.link });
                  }),
                  e.createElement(P.Z, null),
                ),
              ),
              e.createElement(
                'button',
                {
                  type: 'button',
                  className: 'dumi-default-header-menu-btn',
                  onClick: function (_) {
                    _.stopPropagation(),
                      u(function ($) {
                        return !$;
                      });
                  },
                },
                Y ? e.createElement(T, null) : e.createElement(i, null),
              ),
            ),
          );
        },
        K = X;
    },
    6391: function (j, E, n) {
      'use strict';
      var e = n(70079),
        I = function () {
          return e.createElement(e.Fragment, null);
        };
      E.Z = I;
    },
    27883: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return w;
        },
      });
      var e = n(30011),
        I = n(80904),
        p = n(70079);
      function D(f, M) {
        return C(f) || T(f, M) || z(f, M) || x();
      }
      function x() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function z(f, M) {
        if (f) {
          if (typeof f == 'string') return Z(f, M);
          var i = Object.prototype.toString.call(f).slice(8, -1);
          if ((i === 'Object' && f.constructor && (i = f.constructor.name), i === 'Map' || i === 'Set')) return Array.from(f);
          if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Z(f, M);
        }
      }
      function Z(f, M) {
        (M == null || M > f.length) && (M = f.length);
        for (var i = 0, v = new Array(M); i < M; i++) v[i] = f[i];
        return v;
      }
      function T(f, M) {
        var i = f == null ? null : (typeof Symbol != 'undefined' && f[Symbol.iterator]) || f['@@iterator'];
        if (i != null) {
          var v,
            S,
            b,
            P,
            Q = [],
            k = !0,
            W = !1;
          try {
            if (((b = (i = i.call(f)).next), M === 0)) {
              if (Object(i) !== i) return;
              k = !1;
            } else for (; !(k = (v = b.call(i)).done) && (Q.push(v.value), Q.length !== M); k = !0);
          } catch (H) {
            (W = !0), (S = H);
          } finally {
            try {
              if (!k && i.return != null && ((P = i.return()), Object(P) !== P)) return;
            } finally {
              if (W) throw S;
            }
          }
          return Q;
        }
      }
      function C(f) {
        if (Array.isArray(f)) return f;
      }
      function d(f) {
        var M = f.pathname,
          i = f.current,
          v = f.target,
          S = 'base' in i ? M.replace(i.base.replace(/\/$/, ''), '') || '/' : M.replace(new RegExp(''.concat(i.suffix, '$')), '');
        return 'base' in v
          ? ''
              .concat(v.base.replace(/\/$/, ''))
              .concat(S)
              .replace(/([^/])\/$/, '$1')
          : ''.concat(S).concat(v.suffix);
      }
      var N = function (M) {
          var i = M.locale,
            v = M.current,
            S = (0, I.TH)(),
            b = S.pathname,
            P = (0, p.useState)(function () {
              return d({ pathname: b, current: v, target: i });
            }),
            Q = D(P, 2),
            k = Q[0],
            W = Q[1];
          return (
            (0, p.useEffect)(
              function () {
                W(d({ pathname: b, current: v, target: i }));
              },
              [b, v.id, i.id],
            ),
            p.createElement(I.rU, { className: 'dumi-default-lang-switch', to: k }, i.name)
          );
        },
        h = function () {
          var M = (0, I.WF)(),
            i = M.locales,
            v = (0, I.YB)(),
            S = v.locale,
            b = (0, I.bU)();
          return i.length <= 1
            ? null
            : i.length > 2
            ? p.createElement(
                'div',
                { className: 'dumi-default-lang-select' },
                p.createElement(
                  'select',
                  {
                    defaultValue: S,
                    onChange: function (Q) {
                      I.m8.push(
                        d({
                          pathname: I.m8.location.pathname,
                          current: b,
                          target: i.find(function (k) {
                            var W = k.id;
                            return W === Q.target.value;
                          }),
                        }),
                      );
                    },
                  },
                  i.map(function (P) {
                    return p.createElement('option', { key: P.id, value: P.id }, P.name);
                  }),
                ),
                p.createElement(e.r, null),
              )
            : p.createElement(N, {
                locale: i.find(function (P) {
                  var Q = P.id;
                  return Q !== S;
                }),
                current: b,
              });
        },
        w = h;
    },
    66265: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return D;
        },
      });
      var e = n(80904),
        I = n(70079),
        p = function () {
          var z = (0, e.WF)(),
            Z = z.themeConfig,
            T = (0, e.bU)();
          return I.createElement(
            e.rU,
            { className: 'dumi-default-logo', to: 'base' in T ? T.base : '/' },
            Z.logo !== !1
              && I.createElement('img', {
                src:
                  Z.logo
                  || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==',
                alt: Z.name,
              }),
            Z.name,
          );
        },
        D = p;
    },
    51669: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return w;
        },
      });
      var e = n(80904),
        I = n(70079);
      function p(f, M) {
        return T(f) || Z(f, M) || x(f, M) || D();
      }
      function D() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function x(f, M) {
        if (f) {
          if (typeof f == 'string') return z(f, M);
          var i = Object.prototype.toString.call(f).slice(8, -1);
          if ((i === 'Object' && f.constructor && (i = f.constructor.name), i === 'Map' || i === 'Set')) return Array.from(f);
          if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return z(f, M);
        }
      }
      function z(f, M) {
        (M == null || M > f.length) && (M = f.length);
        for (var i = 0, v = new Array(M); i < M; i++) v[i] = f[i];
        return v;
      }
      function Z(f, M) {
        var i = f == null ? null : (typeof Symbol != 'undefined' && f[Symbol.iterator]) || f['@@iterator'];
        if (i != null) {
          var v,
            S,
            b,
            P,
            Q = [],
            k = !0,
            W = !1;
          try {
            if (((b = (i = i.call(f)).next), M === 0)) {
              if (Object(i) !== i) return;
              k = !1;
            } else for (; !(k = (v = b.call(i)).done) && (Q.push(v.value), Q.length !== M); k = !0);
          } catch (H) {
            (W = !0), (S = H);
          } finally {
            try {
              if (!k && i.return != null && ((P = i.return()), Object(P) !== P)) return;
            } finally {
              if (W) throw S;
            }
          }
          return Q;
        }
      }
      function T(f) {
        if (Array.isArray(f)) return f;
      }
      var C = function () {
          return I.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            I.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z',
            }),
          );
        },
        d = function () {
          return I.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            I.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z',
            }),
          );
        },
        N = 'dumi:rtl',
        h = function () {
          var M = (0, I.useState)(!1),
            i = p(M, 2),
            v = i[0],
            S = i[1],
            b = (0, e.WF)(),
            P = b.themeConfig;
          return (
            (0, I.useEffect)(function () {
              localStorage.getItem(N) && (S(!0), document.documentElement.setAttribute('data-direction', 'rtl'));
            }, []),
            P.rtl
              ? I.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'dumi-default-rtl-switch',
                    onClick: function () {
                      v
                        ? (document.documentElement.removeAttribute('data-direction'), localStorage.removeItem(N))
                        : (document.documentElement.setAttribute('data-direction', 'rtl'), localStorage.setItem(N, '1')),
                        S(!v);
                    },
                    'data-dumi-tooltip': v ? 'RTL' : 'LTR',
                    'data-dumi-tooltip-bottom': !0,
                  },
                  v ? I.createElement(C, null) : I.createElement(d, null),
                )
              : null
          );
        },
        w = h;
    },
    25995: function (j, E, n) {
      'use strict';
      n.d(E, {
        ZP: function () {
          return Y;
        },
      });
      var e = n(70079),
        I = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        z = (u, c, l) => (c in u ? I(u, c, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (u[c] = l)),
        Z = (u, c) => {
          for (var l in c || (c = {})) D.call(c, l) && z(u, l, c[l]);
          if (p) for (var l of p(c)) x.call(c, l) && z(u, l, c[l]);
          return u;
        };
      const T = (u) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, u),
          e.createElement('path', {
            d: 'M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z',
          }),
        );
      var C =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=',
        d = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        f = (u, c, l) => (c in u ? d(u, c, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (u[c] = l)),
        M = (u, c) => {
          for (var l in c || (c = {})) h.call(c, l) && f(u, l, c[l]);
          if (N) for (var l of N(c)) w.call(c, l) && f(u, l, c[l]);
          return u;
        };
      const i = (u) =>
        e.createElement(
          'svg',
          M({ viewBox: '64 64 896 896' }, u),
          e.createElement('path', {
            d: 'M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+',
        S = Object.defineProperty,
        b = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        k = (u, c, l) => (c in u ? S(u, c, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (u[c] = l)),
        W = (u, c) => {
          for (var l in c || (c = {})) P.call(c, l) && k(u, l, c[l]);
          if (b) for (var l of b(c)) Q.call(c, l) && k(u, l, c[l]);
          return u;
        };
      const H = (u) =>
        e.createElement(
          'svg',
          W({ viewBox: '64 64 896 896' }, u),
          e.createElement('path', {
            d: 'M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          }),
        );
      var R =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=',
        O = n(80904),
        y = n(89471),
        o = (0, e.forwardRef)(function (u, c) {
          var l = (0, O.YB)(),
            F = (0, e.useRef)(!1),
            B = (0, e.useRef)(null);
          return (
            (0, e.useImperativeHandle)(c, function () {
              return B.current;
            }),
            e.createElement('input', {
              className: 'dumi-default-search-bar-input',
              onCompositionStart: function () {
                return (F.current = !0);
              },
              onCompositionEnd: function ($) {
                (F.current = !1), u.onChange($.currentTarget.value);
              },
              onFocus: u.onFocus,
              onBlur: u.onBlur,
              onKeyDown: function ($) {
                ['ArrowDown', 'ArrowUp'].includes($.key) && $.preventDefault(), $.key === 'Escape' && !F.current && $.currentTarget.blur();
              },
              onChange: function ($) {
                var te = $.target.value;
                setTimeout(function () {
                  F.current || u.onChange(te);
                }, 1);
              },
              placeholder: l.formatMessage({ id: 'header.search.placeholder' }),
              ref: B,
            })
          );
        }),
        g = function (c) {
          return (
            (0, e.useEffect)(
              function () {
                if (c.visible) document.body.style.overflow = 'hidden';
                else {
                  var l;
                  (document.body.style.overflow = ''), (l = c.onClose) === null || l === void 0 || l.call(c);
                }
              },
              [c.visible],
            ),
            c.visible
              ? e.createElement(
                  'div',
                  { className: 'dumi-default-search-modal' },
                  e.createElement('div', { className: 'dumi-default-search-modal-mask', onClick: c.onMaskClick }),
                  e.createElement('div', { className: 'dumi-default-search-modal-content' }, c.children),
                )
              : null
          );
        },
        L;
      function V(u, c) {
        return r(u) || t(u, c) || X(u, c) || J();
      }
      function J() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function X(u, c) {
        if (u) {
          if (typeof u == 'string') return K(u, c);
          var l = Object.prototype.toString.call(u).slice(8, -1);
          if ((l === 'Object' && u.constructor && (l = u.constructor.name), l === 'Map' || l === 'Set')) return Array.from(u);
          if (l === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return K(u, c);
        }
      }
      function K(u, c) {
        (c == null || c > u.length) && (c = u.length);
        for (var l = 0, F = new Array(c); l < c; l++) F[l] = u[l];
        return F;
      }
      function t(u, c) {
        var l = u == null ? null : (typeof Symbol != 'undefined' && u[Symbol.iterator]) || u['@@iterator'];
        if (l != null) {
          var F,
            B,
            _,
            $,
            te = [],
            ee = !0,
            ne = !1;
          try {
            if (((_ = (l = l.call(u)).next), c === 0)) {
              if (Object(l) !== l) return;
              ee = !1;
            } else for (; !(ee = (F = _.call(l)).done) && (te.push(F.value), te.length !== c); ee = !0);
          } catch (ce) {
            (ne = !0), (B = ce);
          } finally {
            try {
              if (!ee && l.return != null && (($ = l.return()), Object($) !== $)) return;
            } finally {
              if (ne) throw B;
            }
          }
          return te;
        }
      }
      function r(u) {
        if (Array.isArray(u)) return u;
      }
      var a = /(mac|iphone|ipod|ipad)/i.test(
          typeof navigator != 'undefined' ? ((L = navigator) === null || L === void 0 ? void 0 : L.platform) : '',
        ),
        G = function (c) {
          return ['TEXTAREA', 'INPUT'].includes(c.tagName) || c.contentEditable === 'true';
        },
        U = function () {
          var c = (0, e.useState)(!1),
            l = V(c, 2),
            F = l[0],
            B = l[1],
            _ = (0, e.useRef)(null),
            $ = (0, e.useRef)(null),
            te = (0, e.useState)('\u2318'),
            ee = V(te, 2),
            ne = ee[0],
            ce = ee[1],
            ae = (0, O.OO)(),
            se = ae.keywords,
            oe = ae.setKeywords,
            le = ae.result,
            ie = ae.loading,
            Me = (0, e.useState)(!1),
            fe = V(Me, 2),
            ge = fe[0],
            ue = fe[1];
          return (
            (0, e.useEffect)(function () {
              a || ce('Ctrl');
              var q = function (m) {
                if (
                  (((a ? m.metaKey : m.ctrlKey) && m.key === 'k') || (m.key === '/' && !G(m.target)))
                  && (m.preventDefault(), _.current)
                ) {
                  var s = _.current.getBoundingClientRect(),
                    A = s.top,
                    ye = s.bottom,
                    me = s.left,
                    Ae = s.right,
                    Ne = A >= 0 && me >= 0 && ye <= window.innerHeight && Ae <= window.innerWidth;
                  Ne
                    ? _.current.focus()
                    : (oe(''),
                      ue(!0),
                      setTimeout(function () {
                        var Le;
                        (Le = $.current) === null || Le === void 0 || Le.focus();
                      }));
                }
                m.key === 'Escape' && (m.preventDefault(), ue(!1));
              };
              return (
                document.addEventListener('keydown', q),
                function () {
                  return document.removeEventListener('keydown', q);
                }
              );
            }, []),
            e.createElement(
              'div',
              { className: 'dumi-default-search-bar' },
              e.createElement(H, { className: 'dumi-default-search-bar-svg' }),
              e.createElement(o, {
                onFocus: function () {
                  return B(!0);
                },
                onBlur: function () {
                  setTimeout(function () {
                    B(!1);
                  }, 1);
                },
                onChange: function (re) {
                  return oe(re);
                },
                ref: _,
              }),
              e.createElement('span', { className: 'dumi-default-search-shortcut' }, ne, ' K'),
              se.trim()
                && F
                && (le.length || !ie)
                && !ge
                && e.createElement(
                  'div',
                  { className: 'dumi-default-search-popover' },
                  e.createElement('section', null, e.createElement(y.Z, { data: le, loading: ie })),
                ),
              e.createElement(
                g,
                {
                  visible: ge,
                  onMaskClick: function () {
                    ue(!1);
                  },
                  onClose: function () {
                    return oe('');
                  },
                },
                e.createElement(
                  'div',
                  { style: { position: 'relative' } },
                  e.createElement(H, { className: 'dumi-default-search-bar-svg' }),
                  e.createElement(o, {
                    onFocus: function () {
                      return B(!0);
                    },
                    onBlur: function () {
                      setTimeout(function () {
                        B(!1);
                      }, 1);
                    },
                    onChange: function (re) {
                      return oe(re);
                    },
                    ref: $,
                  }),
                ),
                e.createElement(y.Z, {
                  data: le,
                  loading: ie,
                  onItemSelect: function () {
                    ue(!1);
                  },
                }),
                e.createElement(
                  'footer',
                  null,
                  e.createElement(
                    'ul',
                    { className: 'dumi-default-search-modal-commands' },
                    e.createElement(
                      'li',
                      { className: 'dumi-default-search-modal-commands-arrow' },
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(i, { width: '10px', height: '10px', fill: 'rgba(0, 0, 0, 0.45)' }),
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(T, { width: '10px', height: '10px', fill: 'rgba(0, 0, 0, 0.45)' }),
                      ),
                      e.createElement('span', { className: 'dumi-default-search-modal-commands-text' }, 'to navigate'),
                    ),
                    e.createElement(
                      'li',
                      null,
                      e.createElement('span', { className: 'dumi-default-search-modal-shortcut' }, 'esc'),
                      e.createElement('span', { className: 'dumi-default-search-modal-commands-text' }, 'to close'),
                    ),
                  ),
                ),
              ),
            )
          );
        },
        Y = U;
    },
    20406: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return O;
        },
      });
      var e = n(70079),
        I = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        z = (y, o, g) => (o in y ? I(y, o, { enumerable: !0, configurable: !0, writable: !0, value: g }) : (y[o] = g)),
        Z = (y, o) => {
          for (var g in o || (o = {})) D.call(o, g) && z(y, g, o[g]);
          if (p) for (var g of p(o)) x.call(o, g) && z(y, g, o[g]);
          return y;
        };
      const T = (y) =>
        e.createElement(
          'svg',
          Z({ viewBox: '0 0 1024 1024' }, y),
          e.createElement('path', {
            d: 'm885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          }),
        );
      var C =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=',
        d = n(22484),
        N = n(80904);
      function h(y, o) {
        return v(y) || i(y, o) || f(y, o) || w();
      }
      function w() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function f(y, o) {
        if (y) {
          if (typeof y == 'string') return M(y, o);
          var g = Object.prototype.toString.call(y).slice(8, -1);
          if ((g === 'Object' && y.constructor && (g = y.constructor.name), g === 'Map' || g === 'Set')) return Array.from(y);
          if (g === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return M(y, o);
        }
      }
      function M(y, o) {
        (o == null || o > y.length) && (o = y.length);
        for (var g = 0, L = new Array(o); g < o; g++) L[g] = y[g];
        return L;
      }
      function i(y, o) {
        var g = y == null ? null : (typeof Symbol != 'undefined' && y[Symbol.iterator]) || y['@@iterator'];
        if (g != null) {
          var L,
            V,
            J,
            X,
            K = [],
            t = !0,
            r = !1;
          try {
            if (((J = (g = g.call(y)).next), o === 0)) {
              if (Object(g) !== g) return;
              t = !1;
            } else for (; !(t = (L = J.call(g)).done) && (K.push(L.value), K.length !== o); t = !0);
          } catch (a) {
            (r = !0), (V = a);
          } finally {
            try {
              if (!t && g.return != null && ((X = g.return()), Object(X) !== X)) return;
            } finally {
              if (r) throw V;
            }
          }
          return K;
        }
      }
      function v(y) {
        if (Array.isArray(y)) return y;
      }
      var S = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
            }),
            e.createElement('path', {
              d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
            }),
            e.createElement('path', {
              d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
            }),
          );
        },
        b = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
            }),
          );
        },
        P = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
            }),
          );
        },
        Q = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
            }),
          );
        },
        k = { title: S, page: b, content: P, demo: Q },
        W = function (o) {
          return e.createElement(
            e.Fragment,
            null,
            o.texts.map(function (g, L) {
              return e.createElement(e.Fragment, { key: L }, g.highlighted ? e.createElement('mark', null, g.text) : g.text);
            }),
          );
        },
        H = function (o) {
          var g = (0, e.useCallback)(
              function () {
                var K = 0,
                  t = [];
                return (
                  o.forEach(function (r) {
                    r.title && t.push({ type: 'title', value: { title: r.title } }),
                      r.hints.forEach(function (a) {
                        t.push({ type: 'hint', activeIndex: K++, value: a });
                      });
                  }),
                  [t, K]
                );
              },
              [o],
            ),
            L = (0, e.useState)(g),
            V = h(L, 2),
            J = V[0],
            X = V[1];
          return (
            (0, e.useEffect)(
              function () {
                X(g);
              },
              [o],
            ),
            J
          );
        },
        R = function (o) {
          var g = H(o.data),
            L = h(g, 2),
            V = L[0],
            J = L[1],
            X = (0, e.useState)(-1),
            K = h(X, 2),
            t = K[0],
            r = K[1],
            a = (0, N.TH)(),
            G = a.pathname,
            U = function (u) {
              var c;
              (c = o.onItemSelect) === null || c === void 0 || c.call(o, u);
              var l = new URL(u == null ? void 0 : u.link, location.origin);
              (l == null ? void 0 : l.pathname) === G
                && !l.hash
                && setTimeout(function () {
                  (0, d.Z)(0, { maxDuration: 300 });
                }, 1);
            };
          return (
            (0, e.useEffect)(function () {
              var Y = function (c) {
                if (c.key === 'ArrowDown') r((t + 1) % J);
                else if (c.key === 'ArrowUp') r((t + J - 1) % J);
                else if (c.key === 'Enter' && t >= 0) {
                  var l = V.find(function (F) {
                    return F.type === 'hint' && F.activeIndex === t;
                  }).value;
                  N.m8.push(l.link), U == null || U(l), document.activeElement.blur();
                }
                ['Escape', 'Enter'].includes(c.key) && r(-1);
              };
              return (
                document.addEventListener('keydown', Y),
                function () {
                  return document.removeEventListener('keydown', Y);
                }
              );
            }),
            e.createElement(
              'div',
              {
                className: 'dumi-default-search-result',
                onMouseEnter: function () {
                  return r(-1);
                },
                onMouseDownCapture: function (u) {
                  return u.preventDefault();
                },
                onMouseUpCapture: function () {
                  document.activeElement.blur();
                },
              },
              o.data.length || o.loading
                ? e.createElement(
                    'dl',
                    null,
                    V.map(function (Y, u) {
                      return Y.type === 'title'
                        ? e.createElement('dt', { key: String(u) }, Y.value.title)
                        : e.createElement(
                            'dd',
                            { key: String(u) },
                            e.createElement(
                              N.rU,
                              {
                                to: Y.value.link,
                                'data-active': t === Y.activeIndex || void 0,
                                onClick: function () {
                                  return U == null ? void 0 : U(Y.value);
                                },
                              },
                              e.createElement(k[Y.value.type]),
                              e.createElement('h4', null, e.createElement(W, { texts: Y.value.highlightTitleTexts })),
                              e.createElement('p', null, e.createElement(W, { texts: Y.value.highlightTexts })),
                            ),
                          );
                    }),
                  )
                : e.createElement(
                    'div',
                    { className: 'dumi-default-search-empty' },
                    e.createElement(T, null),
                    e.createElement(N._H, { id: 'search.not.found' }),
                  ),
            )
          );
        },
        O = R;
    },
    99419: function (j, E, n) {
      'use strict';
      n.d(E, {
        Z: function () {
          return re;
        },
      });
      var e = n(70079),
        I = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        z = (m, s, A) => (s in m ? I(m, s, { enumerable: !0, configurable: !0, writable: !0, value: A }) : (m[s] = A)),
        Z = (m, s) => {
          for (var A in s || (s = {})) D.call(s, A) && z(m, A, s[A]);
          if (p) for (var A of p(s)) x.call(s, A) && z(m, A, s[A]);
          return m;
        };
      const T = (m) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, m),
          e.createElement('path', {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z',
          }),
        );
      var C =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjczNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTQ0YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzIgNzM2SDY2My45VjYwMi4yaDEwNGwxNS42LTEyMC43SDY2My45di03Ny4xYzAtMzUgOS43LTU4LjggNTkuOC01OC44aDYzLjl2LTEwOGMtMTEuMS0xLjUtNDktNC44LTkzLjItNC44LTkyLjIgMC0xNTUuMyA1Ni4zLTE1NS4zIDE1OS42djg5SDQzNC45djEyMC43aDEwNC4zVjg0OEgxNzZWMTc2aDY3MnY2NzJ6Ii8+PC9zdmc+',
        d = n(19444),
        N = Object.defineProperty,
        h = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        M = (m, s, A) => (s in m ? N(m, s, { enumerable: !0, configurable: !0, writable: !0, value: A }) : (m[s] = A)),
        i = (m, s) => {
          for (var A in s || (s = {})) w.call(s, A) && M(m, A, s[A]);
          if (h) for (var A of h(s)) f.call(s, A) && M(m, A, s[A]);
          return m;
        };
      const v = (m) =>
        e.createElement(
          'svg',
          i({ viewBox: '64 64 896 896' }, m),
          e.createElement('path', {
            d: 'M913.9 552.2 805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776 405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9 207.3-276.7 29.5 99.2-236.8 177.5z',
          }),
        );
      var S =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEzLjkgNTUyLjIgODA1IDE4MS40di0uMWMtNy42LTIyLjktMjUuNy0zNi41LTQ4LjMtMzYuNS0yMy40IDAtNDIuNSAxMy41LTQ5LjcgMzUuMmwtNzEuNCAyMTNIMzg4LjhsLTcxLjQtMjEzYy03LjItMjEuNy0yNi4zLTM1LjItNDkuNy0zNS4yLTIzLjEgMC00Mi41IDE0LjgtNDguNCAzNi42TDExMC41IDU1Mi4yYy00LjQgMTQuNyAxLjIgMzEuNCAxMy41IDQwLjdsMzY4LjUgMjc2LjRjMi42IDMuNiA2LjIgNi4zIDEwLjQgNy44bDguNiA2LjQgOC41LTYuNGM0LjktMS43IDktNC43IDExLjktOC45bDM2OC40LTI3NS40YzEyLjQtOS4yIDE4LTI1LjkgMTMuNi00MC42ek03NTEuNyAxOTMuNGMxLTEuOCAyLjktMS45IDMuNS0xLjkgMS4xIDAgMi41LjMgMy40IDNMODE4IDM5NC4zSDY4NC41bDY3LjItMjAwLjl6bS00ODcuNCAxYy45LTIuNiAyLjMtMi45IDMuNC0yLjkgMi43IDAgMi45LjEgMy40IDEuN2w2Ny4zIDIwMS4ySDIwNi41bDU3LjgtMjAwek0xNTguOCA1NTguN2wyOC4yLTk3LjMgMjAyLjQgMjcwLjItMjMwLjYtMTcyLjl6bTczLjktMTE2LjRoMTIyLjFsOTAuOCAyODQuMy0yMTIuOS0yODQuM3pNNTEyLjkgNzc2IDQwNS43IDQ0Mi4zSDYyMEw1MTIuOSA3NzZ6bTE1Ny45LTMzMy43aDExOS41TDU4MCA3MjMuMWw5MC44LTI4MC44em0tNDAuNyAyOTMuOSAyMDcuMy0yNzYuNyAyOS41IDk5LjItMjM2LjggMTc3LjV6Ii8+PC9zdmc+',
        b = Object.defineProperty,
        P = Object.getOwnPropertySymbols,
        Q = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        W = (m, s, A) => (s in m ? b(m, s, { enumerable: !0, configurable: !0, writable: !0, value: A }) : (m[s] = A)),
        H = (m, s) => {
          for (var A in s || (s = {})) Q.call(s, A) && W(m, A, s[A]);
          if (P) for (var A of P(s)) k.call(s, A) && W(m, A, s[A]);
          return m;
        };
      const R = (m) =>
        e.createElement(
          'svg',
          H({ viewBox: '64 64 896 896' }, m),
          e.createElement('path', {
            d: 'M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z',
          }),
        );
      var O =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ3LjcgMTEySDE3Ni4zYy0zNS41IDAtNjQuMyAyOC44LTY0LjMgNjQuM3Y2NzEuNGMwIDM1LjUgMjguOCA2NC4zIDY0LjMgNjQuM2g2NzEuNGMzNS41IDAgNjQuMy0yOC44IDY0LjMtNjQuM1YxNzYuM2MwLTM1LjUtMjguOC02NC4zLTY0LjMtNjQuM3ptMCA3MzZjLTQ0Ny44LS4xLTY3MS43LS4yLTY3MS43LS4zLjEtNDQ3LjguMi02NzEuNy4zLTY3MS43IDQ0Ny44LjEgNjcxLjcuMiA2NzEuNy4zLS4xIDQ0Ny44LS4yIDY3MS43LS4zIDY3MS43ek0yMzAuNiA0MTEuOWgxMTguN3YzODEuOEgyMzAuNnptNTkuNC01Mi4yYzM3LjkgMCA2OC44LTMwLjggNjguOC02OC44YTY4LjggNjguOCAwIDEgMC0xMzcuNiAwYy0uMSAzOCAzMC43IDY4LjggNjguOCA2OC44em0yNTIuMyAyNDUuMWMwLTQ5LjggOS41LTk4IDcxLjItOTggNjAuOCAwIDYxLjcgNTYuOSA2MS43IDEwMS4ydjE4NS43aDExOC42VjU4NC4zYzAtMTAyLjgtMjIuMi0xODEuOS0xNDIuMy0xODEuOS01Ny43IDAtOTYuNCAzMS43LTExMi4zIDYxLjdoLTEuNnYtNTIuMkg0MjMuN3YzODEuOGgxMTguNlY2MDQuOHoiLz48L3N2Zz4=',
        y = Object.defineProperty,
        o = Object.getOwnPropertySymbols,
        g = Object.prototype.hasOwnProperty,
        L = Object.prototype.propertyIsEnumerable,
        V = (m, s, A) => (s in m ? y(m, s, { enumerable: !0, configurable: !0, writable: !0, value: A }) : (m[s] = A)),
        J = (m, s) => {
          for (var A in s || (s = {})) g.call(s, A) && V(m, A, s[A]);
          if (o) for (var A of o(s)) L.call(s, A) && V(m, A, s[A]);
          return m;
        };
      const X = (m) =>
        e.createElement(
          'svg',
          J({ viewBox: '64 64 896 896' }, m),
          e.createElement('path', {
            d: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
          }),
        );
      var K =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTI4IDI1NC4zYy0zMC42IDEzLjItNjMuOSAyMi43LTk4LjIgMjYuNGExNzAuMSAxNzAuMSAwIDAgMCA3NS05NCAzMzYuNjQgMzM2LjY0IDAgMCAxLTEwOC4yIDQxLjJBMTcwLjEgMTcwLjEgMCAwIDAgNjcyIDE3NGMtOTQuNSAwLTE3MC41IDc2LjYtMTcwLjUgMTcwLjYgMCAxMy4yIDEuNiAyNi40IDQuMiAzOS4xLTE0MS41LTcuNC0yNjcuNy03NS0zNTEuNi0xNzguNWExNjkuMzIgMTY5LjMyIDAgMCAwLTIzLjIgODYuMWMwIDU5LjIgMzAuMSAxMTEuNCA3NiAxNDIuMWExNzIgMTcyIDAgMCAxLTc3LjEtMjEuN3YyLjFjMCA4Mi45IDU4LjYgMTUxLjYgMTM2LjcgMTY3LjRhMTgwLjYgMTgwLjYgMCAwIDEtNDQuOSA1LjhjLTExLjEgMC0yMS42LTEuMS0zMi4yLTIuNkMyMTEgNjUyIDI3My45IDcwMS4xIDM0OC44IDcwMi43Yy01OC42IDQ1LjktMTMyIDcyLjktMjExLjcgNzIuOS0xNC4zIDAtMjcuNS0uNS00MS4yLTIuMUMxNzEuNSA4MjIgMjYxLjIgODUwIDM1Ny44IDg1MCA2NzEuNCA4NTAgODQzIDU5MC4yIDg0MyAzNjQuN2MwLTcuNCAwLTE0LjgtLjUtMjIuMiAzMy4yLTI0LjMgNjIuMy01NC40IDg1LjUtODguMnoiLz48L3N2Zz4=',
        t = Object.defineProperty,
        r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        U = (m, s, A) => (s in m ? t(m, s, { enumerable: !0, configurable: !0, writable: !0, value: A }) : (m[s] = A)),
        Y = (m, s) => {
          for (var A in s || (s = {})) a.call(s, A) && U(m, A, s[A]);
          if (r) for (var A of r(s)) G.call(s, A) && U(m, A, s[A]);
          return m;
        };
      const u = (m) =>
        e.createElement(
          'svg',
          Y({ viewBox: '64 64 896 896' }, m),
          e.createElement('path', {
            d: 'M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z',
          }),
        );
      var c =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDU3LjMgNTQzYy02OC4xLTE3LjctMTQ1IDE2LjItMTc0LjYgNzYuMi0zMC4xIDYxLjItMSAxMjkuMSA2Ny44IDE1MS4zIDcxLjIgMjMgMTU1LjItMTIuMiAxODQuNC03OC4zIDI4LjctNjQuNi03LjItMTMxLTc3LjYtMTQ5LjJ6bS01MiAxNTYuMmMtMTMuOCAyMi4xLTQzLjUgMzEuNy02NS44IDIxLjYtMjItMTAtMjguNS0zNS43LTE0LjYtNTcuMiAxMy43LTIxLjQgNDIuMy0zMSA2NC40LTIxLjcgMjIuNCA5LjUgMjkuNiAzNSAxNiA1Ny4zem00NS41LTU4LjVjLTUgOC42LTE2LjEgMTIuNy0yNC43IDkuMS04LjUtMy41LTExLjItMTMuMS02LjQtMjEuNSA1LTguNCAxNS42LTEyLjQgMjQuMS05LjEgOC43IDMuMiAxMS44IDEyLjkgNyAyMS41em0zMzQuNS0xOTcuMmMxNSA0LjggMzEtMy40IDM1LjktMTguMyAxMS44LTM2LjYgNC40LTc4LjQtMjMuMi0xMDlhMTExLjM5IDExMS4zOSAwIDAgMC0xMDYtMzQuMyAyOC40NSAyOC40NSAwIDAgMC0yMS45IDMzLjggMjguMzkgMjguMzkgMCAwIDAgMzMuOCAyMS44YzE4LjQtMy45IDM4LjMgMS44IDUxLjkgMTYuN2E1NC4yIDU0LjIgMCAwIDEgMTEuMyA1My4zIDI4LjQ1IDI4LjQ1IDAgMCAwIDE4LjIgMzZ6bTk5LjgtMjA2Yy01Ni43LTYyLjktMTQwLjQtODYuOS0yMTcuNy03MC41YTMyLjk4IDMyLjk4IDAgMCAwLTI1LjQgMzkuMyAzMy4xMiAzMy4xMiAwIDAgMCAzOS4zIDI1LjVjNTUtMTEuNyAxMTQuNCA1LjQgMTU0LjggNTAuMSA0MC4zIDQ0LjcgNTEuMiAxMDUuNyAzNCAxNTkuMS01LjYgMTcuNCAzLjkgMzYgMjEuMyA0MS43IDE3LjQgNS42IDM2LTMuOSA0MS42LTIxLjJ2LS4xYzI0LjEtNzUuNCA4LjktMTYxLjEtNDcuOS0yMjMuOXpNNzI5IDQ5OWMtMTIuMi0zLjYtMjAuNS02LjEtMTQuMS0yMi4xIDEzLjgtMzQuNyAxNS4yLTY0LjcuMy04Ni0yOC00MC4xLTEwNC44LTM3LjktMTkyLjgtMS4xIDAgMC0yNy42IDEyLjEtMjAuNi05LjggMTMuNS00My41IDExLjUtNzkuOS05LjYtMTAxLTQ3LjctNDcuOC0xNzQuNiAxLjgtMjgzLjUgMTEwLjZDMTI3LjMgNDcxLjEgODAgNTU3LjUgODAgNjMyLjIgODAgNzc1LjEgMjYzLjIgODYyIDQ0Mi41IDg2MmMyMzUgMCAzOTEuMy0xMzYuNSAzOTEuMy0yNDUgMC02NS41LTU1LjItMTAyLjYtMTA0LjgtMTE4ek00NDMgODEwLjhjLTE0MyAxNC4xLTI2Ni41LTUwLjUtMjc1LjgtMTQ0LjUtOS4zLTkzLjkgOTkuMi0xODEuNSAyNDIuMi0xOTUuNiAxNDMtMTQuMiAyNjYuNSA1MC41IDI3NS44IDE0NC40QzY5NC40IDcwOSA1ODYgNzk2LjYgNDQzIDgxMC44eiIvPjwvc3ZnPg==',
        l = Object.defineProperty,
        F = Object.getOwnPropertySymbols,
        B = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        $ = (m, s, A) => (s in m ? l(m, s, { enumerable: !0, configurable: !0, writable: !0, value: A }) : (m[s] = A)),
        te = (m, s) => {
          for (var A in s || (s = {})) B.call(s, A) && $(m, A, s[A]);
          if (F) for (var A of F(s)) _.call(s, A) && $(m, A, s[A]);
          return m;
        };
      const ee = (m) =>
        e.createElement(
          'svg',
          te({ viewBox: '64 64 896 896' }, m),
          e.createElement('path', {
            d: 'M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z',
          }),
        );
      var ne =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMzcwLjZjLTkuOS0zOS40IDkuOS0xMDIuMiA3My40LTEyNC40bC02Ny45LTMuNnMtMjUuNy05MC0xNDMuNi05OGMtMTE3LjgtOC4xLTE5NC45LTMtMTk1LTMgLjEgMCA4Ny40IDU1LjYgNTIuNCAxNTQuNy0yNS42IDUyLjUtNjUuOCA5NS42LTEwOC44IDE0NC43LTEuMyAxLjMtMi41IDIuNi0zLjUgMy43QzMxOS40IDYwNSA5NiA4NjAgOTYgODYwYzI0NS45IDY0LjQgNDEwLjctNi4zIDUwOC4yLTkxLjEgMjAuNS0uMiAzNS45LS4zIDQ2LjMtLjMgMTM1LjggMCAyNTAuNi0xMTcuNiAyNDUuOS0yNDguNC0zLjItODkuOS0zMS45LTExMC4yLTQxLjgtMTQ5LjZ6bS0yMDQuMSAzMzRjLTEwLjYgMC0yNi4yLjEtNDYuOC4zbC0yMy42LjItMTcuOCAxNS41Yy00Ny4xIDQxLTEwNC40IDcxLjUtMTcxLjQgODcuNi01Mi41IDEyLjYtMTEwIDE2LjItMTcyLjcgOS42IDE4LTIwLjUgMzYuNS00MS42IDU1LjQtNjMuMSA5Mi0xMDQuNiAxNzMuOC0xOTcuNSAyMzYuOS0yNjguNWwxLjQtMS40IDEuMy0xLjVjNC4xLTQuNiAyMC42LTIzLjMgMjQuNy0yOC4xIDkuNy0xMS4xIDE3LjMtMTkuOSAyNC41LTI4LjYgMzAuNy0zNi43IDUyLjItNjcuOCA2OS0xMDIuMmwxLjYtMy4zIDEuMi0zLjRjMTMuNy0zOC44IDE1LjQtNzYuOSA2LjItMTEyLjggMjIuNS43IDQ2LjUgMS45IDcxLjcgMy42IDMzLjMgMi4zIDU1LjUgMTIuOSA3MS4xIDI5LjIgNS44IDYgMTAuMiAxMi41IDEzLjQgMTguNyAxIDIgMS43IDMuNiAyLjMgNWw1IDE3LjdjLTE1LjcgMzQuNS0xOS45IDczLjMtMTEuNCAxMDcuMiAzIDExLjggNi45IDIyLjQgMTIuMyAzNC40IDIuMSA0LjcgOS41IDIwLjEgMTEgMjMuMyAxMC4zIDIyLjcgMTUuNCA0MyAxNi43IDc4LjcgMy4zIDk0LjYtODIuNyAxODEuOS0xODIgMTgxLjl6Ii8+PC9zdmc+',
        ce = Object.defineProperty,
        ae = Object.getOwnPropertySymbols,
        se = Object.prototype.hasOwnProperty,
        oe = Object.prototype.propertyIsEnumerable,
        le = (m, s, A) => (s in m ? ce(m, s, { enumerable: !0, configurable: !0, writable: !0, value: A }) : (m[s] = A)),
        ie = (m, s) => {
          for (var A in s || (s = {})) se.call(s, A) && le(m, A, s[A]);
          if (ae) for (var A of ae(s)) oe.call(s, A) && le(m, A, s[A]);
          return m;
        };
      const Me = (m) =>
        e.createElement(
          'svg',
          ie({ viewBox: '64 64 896 896' }, m),
          e.createElement('path', {
            d: 'M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z',
          }),
        );
      var fe =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTY0LjcgMjMwLjFWODAzaDYwbDI1LjIgNzEuNEw3NTYuMyA4MDNoMTMxLjVWMjMwLjFINTY0Ljd6bTI0Ny43IDQ5N2gtNTkuOWwtNzUuMSA1MC40LTE3LjgtNTAuNGgtMThWMzA4LjNoMTcwLjd2NDE4Ljh6TTUyNi4xIDQ4Ni45SDM5My4zYzIuMS00NC45IDQuMy0xMDQuMyA2LjYtMTcyLjloMTMwLjlsLS4xLTguMWMwLS42LS4yLTE0LjctMi4zLTI5LjEtMi4xLTE1LTYuNi0zNC45LTIxLTM0LjlIMjg3LjhjNC40LTIwLjYgMTUuNy02OS43IDI5LjQtOTMuOGw2LjQtMTEuMi0xMi45LS43Yy0uOCAwLTE5LjYtLjktNDEuNCAxMC42LTM1LjcgMTktNTEuNyA1Ni40LTU4LjcgODQuNC0xOC40IDczLjEtNDQuNiAxMjMuOS01NS43IDE0NS42LTMuMyA2LjQtNS4zIDEwLjItNi4yIDEyLjgtMS44IDQuOS0uOCA5LjggMi44IDEzIDEwLjUgOS41IDM4LjItMi45IDM4LjUtMyAuNi0uMyAxLjMtLjYgMi4yLTEgMTMuOS02LjMgNTUuMS0yNSA2OS44LTg0LjVoNTYuN2MuNyAzMi4yIDMuMSAxMzguNCAyLjkgMTcyLjloLTE0MWwtMi4xIDEuNWMtMjMuMSAxNi45LTMwLjUgNjMuMi0zMC44IDY1LjJsLTEuNCA5LjJoMTY3Yy0xMi4zIDc4LjMtMjYuNSAxMTMuNC0zNCAxMjcuNC0zLjcgNy03LjMgMTQtMTAuNyAyMC44LTIxLjMgNDIuMi00My40IDg1LjgtMTI2LjMgMTUzLjYtMy42IDIuOC03IDgtNC44IDEzLjcgMi40IDYuMyA5LjMgOS4xIDI0LjYgOS4xIDUuNCAwIDExLjgtLjMgMTkuNC0xIDQ5LjktNC40IDEwMC44LTE4IDEzNS4xLTg3LjYgMTctMzUuMSAzMS43LTcxLjcgNDMuOS0xMDguOUw0OTcgODUwbDUtMTJjLjgtMS45IDE5LTQ2LjMgNS4xLTk1LjlsLS41LTEuOC0xMDguMS0xMjMtMjIgMTYuNmM2LjQtMjYuMSAxMC42LTQ5LjkgMTIuNS03MS4xaDE1OC43di04YzAtNDAuMS0xOC41LTYzLjktMTkuMi02NC45bC0yLjQtM3oiLz48L3N2Zz4=',
        ge = n(95568),
        ue = { github: d.r, weibo: u, twitter: X, gitlab: v, facebook: T, zhihu: Me, yuque: ee, linkedin: R },
        q = function (s) {
          var A = s.icon,
            ye = s.link,
            me = (0, ge.Z)(),
            Ae = (0, e.useMemo)(
              function () {
                return { Icon: ue[A], link: ye };
              },
              [A, ye],
            );
          return e.createElement(
            'a',
            {
              className: 'dumi-default-icon',
              'data-dumi-tooltip': me.formatMessage({ id: 'header.social.'.concat(A) }),
              'data-dumi-tooltip-bottom': !0,
              target: '_blank',
              href: Ae.link,
              rel: 'noreferrer',
            },
            e.createElement(Ae.Icon, null),
          );
        },
        re = q;
    },
    30011: function (j, E, n) {
      'use strict';
      n.d(E, {
        r: function () {
          return T;
        },
      });
      var e = n(70079),
        I = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        z = (d, N, h) => (N in d ? I(d, N, { enumerable: !0, configurable: !0, writable: !0, value: h }) : (d[N] = h)),
        Z = (d, N) => {
          for (var h in N || (N = {})) D.call(N, h) && z(d, h, N[h]);
          if (p) for (var h of p(N)) x.call(N, h) && z(d, h, N[h]);
          return d;
        };
      const T = (d) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, d),
          e.createElement('path', {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          }),
        );
      var C =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg==';
    },
    19444: function (j, E, n) {
      'use strict';
      n.d(E, {
        r: function () {
          return T;
        },
      });
      var e = n(70079),
        I = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        z = (d, N, h) => (N in d ? I(d, N, { enumerable: !0, configurable: !0, writable: !0, value: h }) : (d[N] = h)),
        Z = (d, N) => {
          for (var h in N || (N = {})) D.call(N, h) && z(d, h, N[h]);
          if (p) for (var h of p(N)) x.call(N, h) && z(d, h, N[h]);
          return d;
        };
      const T = (d) =>
        e.createElement(
          'svg',
          Z({ viewBox: '64 64 896 896' }, d),
          e.createElement('path', {
            d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
          }),
        );
      var C =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTExLjYgNzYuM0MyNjQuMyA3Ni4yIDY0IDI3Ni40IDY0IDUyMy41IDY0IDcxOC45IDE4OS4zIDg4NSAzNjMuOCA5NDZjMjMuNSA1LjkgMTkuOS0xMC44IDE5LjktMjIuMnYtNzcuNWMtMTM1LjcgMTUuOS0xNDEuMi03My45LTE1MC4zLTg4LjlDMjE1IDcyNiAxNzEuNSA3MTggMTg0LjUgNzAzYzMwLjktMTUuOSA2Mi40IDQgOTguOSA1Ny45IDI2LjQgMzkuMSA3Ny45IDMyLjUgMTA0IDI2IDUuNy0yMy41IDE3LjktNDQuNSAzNC43LTYwLjgtMTQwLjYtMjUuMi0xOTkuMi0xMTEtMTk5LjItMjEzIDAtNDkuNSAxNi4zLTk1IDQ4LjMtMTMxLjctMjAuNC02MC41IDEuOS0xMTIuMyA0LjktMTIwIDU4LjEtNS4yIDExOC41IDQxLjYgMTIzLjIgNDUuMyAzMy04LjkgNzAuNy0xMy42IDExMi45LTEzLjYgNDIuNCAwIDgwLjIgNC45IDExMy41IDEzLjkgMTEuMy04LjYgNjcuMy00OC44IDEyMS4zLTQzLjkgMi45IDcuNyAyNC43IDU4LjMgNS41IDExOCAzMi40IDM2LjggNDguOSA4Mi43IDQ4LjkgMTMyLjMgMCAxMDIuMi01OSAxODguMS0yMDAgMjEyLjlhMTI3LjUgMTI3LjUgMCAwIDEgMzguMSA5MXYxMTIuNWMuOCA5IDAgMTcuOSAxNSAxNy45IDE3Ny4xLTU5LjcgMzA0LjYtMjI3IDMwNC42LTQyNC4xIDAtMjQ3LjItMjAwLjQtNDQ3LjMtNDQ3LjUtNDQ3LjN6Ii8+PC9zdmc+';
    },
    45466: function (j, E, n) {
      var e = n(16487);
      function I(p) {
        if (Array.isArray(p)) return e(p);
      }
      (j.exports = I), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    44114: function (j) {
      function E(n) {
        if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n;
      }
      (j.exports = E), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    7122: function (j, E, n) {
      var e = n(72904),
        I = n(8228),
        p = n(75745);
      function D(x) {
        var z = I();
        return function () {
          var T = e(x),
            C;
          if (z) {
            var d = e(this).constructor;
            C = Reflect.construct(T, arguments, d);
          } else C = T.apply(this, arguments);
          return p(this, C);
        };
      }
      (j.exports = D), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    72904: function (j) {
      function E(n) {
        return (
          (j.exports = E =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (I) {
                  return I.__proto__ || Object.getPrototypeOf(I);
                }),
          (j.exports.__esModule = !0),
          (j.exports.default = j.exports),
          E(n)
        );
      }
      (j.exports = E), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    65523: function (j, E, n) {
      var e = n(37745);
      function I(p, D) {
        if (typeof D != 'function' && D !== null) throw new TypeError('Super expression must either be null or a function');
        (p.prototype = Object.create(D && D.prototype, { constructor: { value: p, writable: !0, configurable: !0 } })),
          Object.defineProperty(p, 'prototype', { writable: !1 }),
          D && e(p, D);
      }
      (j.exports = I), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    8228: function (j) {
      function E() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (n) {
          return !1;
        }
      }
      (j.exports = E), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    52748: function (j) {
      function E(n) {
        if ((typeof Symbol != 'undefined' && n[Symbol.iterator] != null) || n['@@iterator'] != null) return Array.from(n);
      }
      (j.exports = E), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    16207: function (j) {
      function E() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      (j.exports = E), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    75745: function (j, E, n) {
      var e = n(26851).default,
        I = n(44114);
      function p(D, x) {
        if (x && (e(x) === 'object' || typeof x == 'function')) return x;
        if (x !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
        return I(D);
      }
      (j.exports = p), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    37745: function (j) {
      function E(n, e) {
        return (
          (j.exports = E =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (p, D) {
                  return (p.__proto__ = D), p;
                }),
          (j.exports.__esModule = !0),
          (j.exports.default = j.exports),
          E(n, e)
        );
      }
      (j.exports = E), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    79664: function (j, E, n) {
      var e = n(45466),
        I = n(52748),
        p = n(91229),
        D = n(16207);
      function x(z) {
        return e(z) || I(z) || p(z) || D();
      }
      (j.exports = x), (j.exports.__esModule = !0), (j.exports.default = j.exports);
    },
    22484: function (j, E) {
      'use strict';
      var n = function (T, C, d, N) {
        function h(w) {
          return w instanceof d
            ? w
            : new d(function (f) {
                f(w);
              });
        }
        return new (d || (d = Promise))(function (w, f) {
          function M(S) {
            try {
              v(N.next(S));
            } catch (b) {
              f(b);
            }
          }
          function i(S) {
            try {
              v(N.throw(S));
            } catch (b) {
              f(b);
            }
          }
          function v(S) {
            S.done ? w(S.value) : h(S.value).then(M, i);
          }
          v((N = N.apply(T, C || [])).next());
        });
      };
      function e(T) {
        let C = 0,
          d = 0,
          N = T;
        do (C += N.offsetTop || 0), (d += N.offsetLeft || 0), (N = N.offsetParent);
        while (N);
        return { top: C, left: d };
      }
      class I {
        constructor(C) {
          this.element = C;
        }
        getHorizontalScroll() {
          return this.element.scrollLeft;
        }
        getVerticalScroll() {
          return this.element.scrollTop;
        }
        getMaxHorizontalScroll() {
          return this.element.scrollWidth - this.element.clientWidth;
        }
        getMaxVerticalScroll() {
          return this.element.scrollHeight - this.element.clientHeight;
        }
        getHorizontalElementScrollOffset(C, d) {
          return e(C).left - e(d).left;
        }
        getVerticalElementScrollOffset(C, d) {
          return e(C).top - e(d).top;
        }
        scrollTo(C, d) {
          (this.element.scrollLeft = C), (this.element.scrollTop = d);
        }
      }
      class p {
        constructor() {
          this.element = window;
        }
        getHorizontalScroll() {
          return window.scrollX || document.documentElement.scrollLeft;
        }
        getVerticalScroll() {
          return window.scrollY || document.documentElement.scrollTop;
        }
        getMaxHorizontalScroll() {
          return (
            Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.body.clientWidth,
              document.documentElement.clientWidth,
            ) - window.innerWidth
          );
        }
        getMaxVerticalScroll() {
          return (
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight,
            ) - window.innerHeight
          );
        }
        getHorizontalElementScrollOffset(C) {
          return (window.scrollX || document.documentElement.scrollLeft) + C.getBoundingClientRect().left;
        }
        getVerticalElementScrollOffset(C) {
          return (window.scrollY || document.documentElement.scrollTop) + C.getBoundingClientRect().top;
        }
        scrollTo(C, d) {
          window.scrollTo(C, d);
        }
      }
      const D = {
          elements: [],
          cancelMethods: [],
          add: (T, C) => {
            D.elements.push(T), D.cancelMethods.push(C);
          },
          remove: (T, C) => {
            const d = D.elements.indexOf(T);
            d > -1 && (C && D.cancelMethods[d](), D.elements.splice(d, 1), D.cancelMethods.splice(d, 1));
          },
        },
        x = typeof window != 'undefined',
        z = {
          cancelOnUserAction: !0,
          easing: (T) => --T * T * T + 1,
          elementToScroll: x ? window : null,
          horizontalOffset: 0,
          maxDuration: 3e3,
          minDuration: 250,
          speed: 500,
          verticalOffset: 0,
        };
      function Z(T, C = {}) {
        return n(this, void 0, void 0, function* () {
          if (x) {
            if (!window.Promise) throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
          } else
            return new Promise((o) => {
              o(!1);
            });
          let d,
            N,
            h,
            w = Object.assign(Object.assign({}, z), C);
          const f = w.elementToScroll === window,
            M = !!w.elementToScroll.nodeName;
          if (!f && !M) throw 'Element to scroll needs to be either window or DOM element.';
          const i = f ? document.documentElement : w.elementToScroll;
          getComputedStyle(i).getPropertyValue('scroll-behavior') === 'smooth'
            && console.warn(`${i.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);
          const S = f ? new p() : new I(w.elementToScroll);
          if (T instanceof Element) {
            if (((h = T), M && (!w.elementToScroll.contains(h) || w.elementToScroll.isSameNode(h))))
              throw 'options.elementToScroll has to be a parent of scrollToElement';
            (d = S.getHorizontalElementScrollOffset(h, w.elementToScroll)), (N = S.getVerticalElementScrollOffset(h, w.elementToScroll));
          } else if (typeof T == 'number') (d = S.getHorizontalScroll()), (N = T);
          else if (Array.isArray(T) && T.length === 2)
            (d = T[0] === null ? S.getHorizontalScroll() : T[0]), (N = T[1] === null ? S.getVerticalScroll() : T[1]);
          else
            throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;
          (d += w.horizontalOffset), (N += w.verticalOffset);
          const b = S.getMaxHorizontalScroll(),
            P = S.getHorizontalScroll();
          d > b && (d = b);
          const Q = d - P,
            k = S.getMaxVerticalScroll(),
            W = S.getVerticalScroll();
          N > k && (N = k);
          const H = N - W,
            R = Math.abs(Math.round((Q / 1e3) * w.speed)),
            O = Math.abs(Math.round((H / 1e3) * w.speed));
          let y = R > O ? R : O;
          return (
            y < w.minDuration ? (y = w.minDuration) : y > w.maxDuration && (y = w.maxDuration),
            new Promise((o, g) => {
              Q === 0 && H === 0 && o(!0), D.remove(S.element, !0);
              let L;
              const V = () => {
                r(), cancelAnimationFrame(L), o(!1);
              };
              D.add(S.element, V);
              const J = (U) => U.preventDefault(),
                X = w.cancelOnUserAction ? V : J,
                K = w.cancelOnUserAction ? { passive: !0 } : { passive: !1 },
                t = ['wheel', 'touchstart', 'keydown', 'mousedown'],
                r = () => {
                  t.forEach((U) => {
                    S.element.removeEventListener(U, X, K);
                  });
                };
              t.forEach((U) => {
                S.element.addEventListener(U, X, K);
              });
              const a = Date.now(),
                G = () => {
                  var U = Date.now() - a,
                    Y = U / y;
                  const u = Math.round(P + Q * w.easing(Y)),
                    c = Math.round(W + H * w.easing(Y));
                  U < y && (u !== d || c !== N)
                    ? (S.scrollTo(u, c), (L = requestAnimationFrame(G)))
                    : (S.scrollTo(d, N), cancelAnimationFrame(L), r(), D.remove(S.element, !1), o(!0));
                };
              L = requestAnimationFrame(G);
            })
          );
        });
      }
      E.Z = Z;
    },
  },
]);
