'use strict';
(self.webpackChunkhelux_docs = self.webpackChunkhelux_docs || []).push([
  [610],
  {
    24610: function (ae, h, g) {
      g.r(h),
        g.d(h, {
          Entry: function () {
            return G;
          },
          MarkUpdate: function () {
            return ee;
          },
          MarkUpdateH1: function () {
            return te;
          },
          MarkUpdateH2: function () {
            return re;
          },
          MarkUpdateH3: function () {
            return ne;
          },
          demoUtils: function () {
            return W;
          },
        });
      var u = g(70079);
      function j(e, t) {
        var r = e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
        if (r != null) {
          var n,
            o,
            a,
            c,
            i = [],
            l = !0,
            s = !1;
          try {
            if (((a = (r = r.call(e)).next), t === 0)) {
              if (Object(r) !== r) return;
              l = !1;
            } else for (; !(l = (n = a.call(r)).done) && (i.push(n.value), i.length !== t); l = !0);
          } catch (d) {
            (s = !0), (o = d);
          } finally {
            try {
              if (!l && r.return != null && ((c = r.return()), Object(c) !== c)) return;
            } finally {
              if (s) throw o;
            }
          }
          return i;
        }
      }
      function b(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t
            && (n = n.filter(function (o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (n) {
                M(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
              });
        }
        return e;
      }
      function M(e, t, r) {
        return (
          (t = U(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
        );
      }
      function v(e, t) {
        return P(e) || j(e, t) || x(e, t) || C();
      }
      function P(e) {
        if (Array.isArray(e)) return e;
      }
      function x(e, t) {
        if (e) {
          if (typeof e == 'string') return S(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e);
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t);
        }
      }
      function S(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function C() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function D(e, t) {
        if (typeof e != 'object' || e === null) return e;
        var r = e[Symbol.toPrimitive];
        if (r !== void 0) {
          var n = r.call(e, t || 'default');
          if (typeof n != 'object') return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (t === 'string' ? String : Number)(e);
      }
      function U(e) {
        var t = D(e, 'string');
        return typeof t == 'symbol' ? t : String(t);
      }
      var w = 0;
      function k() {
        return (w += 1), w;
      }
      function O(e) {
        var t = e || new Date(),
          r = t.toLocaleString(),
          n = ''.concat(t.getTime()).substring(10);
        return ''.concat(r, ' ').concat(n);
      }
      function T(e, t) {
        var r = Object.keys(e).map(function (n) {
          return e[n];
        });
        return r.concat(t || []);
      }
      function I() {}
      function _() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
        return Math.ceil(Math.random() * e);
      }
      function K() {
        for (
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8,
            t = '',
            r = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            n = 0;
          n < e;
          n++
        )
          t += r.charAt(Math.floor(Math.random() * r.length));
        return t;
      }
      var $ = function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2e3;
        return new Promise(function (r) {
          return setTimeout(r, t);
        });
      };
      function H(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        p.apply(void 0, [e, 'blue'].concat(r));
      }
      function p(e, t) {
        for (var r, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) o[a - 2] = arguments[a];
        (r = console).log.apply(r, ['%c '.concat(e), 'color:'.concat(t)].concat(o));
      }
      function R(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        p.apply(void 0, [e, 'red'].concat(r));
      }
      function E(e, t) {
        e.includes(t) || e.push(t);
      }
      function F() {
        var e = new Date(),
          t = e.toLocaleString(),
          r = t.split(' '),
          n = v(r, 2),
          o = n[1],
          a = e.getMilliseconds();
        return ''.concat(o, ' ').concat(a);
      }
      function L(e) {
        window.see || (window.see = {}), Object.assign(window.see, e);
      }
      function N() {
        return {
          loading: !1,
          a: { b: { c: 1 }, b1: { c1: 1 } },
          info: { name: 'helux', age: 1 },
          desc: 'awesome lib',
          extra: { mark: 'extra', toBeDrive: 0, prefixedMark: '', newName: '' },
          f: 1,
          g: 1,
        };
      }
      var W = Object.freeze({
        __proto__: null,
        getSeed: k,
        getLocaleTime: O,
        getAtionFns: T,
        noop: I,
        random: _,
        randomStr: K,
        delay: $,
        log: H,
        logColor: p,
        logRed: R,
        nodupPush: E,
        timemark: F,
        bindToWindow: L,
        dictFactory: N,
      });
      function B() {
        var e = u.useState({}),
          t = v(e, 2),
          r = t[1];
        return function () {
          return r({});
        };
      }
      function z(e) {
        var t = e.fns,
          r = t === void 0 ? [] : t,
          n = [];
        return (
          Array.isArray(r)
            ? (n = r)
            : Object.keys(r).forEach(function (o) {
                var a = r[o];
                (a.__fnName = o), n.push(a);
              }),
          n
        );
      }
      function G(e) {
        var t = e.buttonArea,
          r = t === void 0 ? '' : t,
          n = e.children,
          o = u.useState(!0),
          a = v(o, 2),
          c = a[0],
          i = a[1],
          l = B();
        return u.createElement(
          'div',
          null,
          u.createElement(
            'button',
            {
              onClick: function () {
                return i(!c);
              },
            },
            'switch show',
          ),
          u.createElement('button', { onClick: l }, 'force update'),
          z(e).map(function (s, d) {
            return u.createElement('button', { key: d, onClick: s }, s.__fnName || s.name);
          }),
          r,
          u.createElement('div', { className: 'box' }, c && n),
        );
      }
      var J = { border: '1px solid green', padding: '6px', margin: '6px' },
        Q = { fontSize: '12px', color: '#fff', padding: '3px' },
        V = { margin: '3px', backgroundColor: '#e0e0e0' },
        y = ['#0944d0', '#fc774b', '#1da187', '#fdc536', '#1789f5'],
        A = 0;
      function X(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          r = 0;
        t ? ((r = A % y.length), A++) : (r = e % y.length);
        var n = y[r];
        return n;
      }
      var Y = {
        time: 0,
        sn: 0,
        insKey: 0,
        getDeps: function () {
          return [];
        },
      };
      function Z(e) {
        var t = [];
        return Array.isArray(e) ? (t = e || []) : (t = [e]), t;
      }
      function q(e) {
        var t = Z(e),
          r = 0,
          n = '',
          o = t
            .map(function (i) {
              return i.insKey;
            })
            .join(','),
          a = [];
        t.forEach(function (i) {
          r += i.sn;
          var l = i.getDeps();
          l.forEach(function (s) {
            return E(a, s);
          });
        }),
          (n = a.join(' , '));
        var c = t.length > 1 ? '(sn sum '.concat(r, ')') : '(sn '.concat(r, ')');
        return { sn: r, depStr: n, snStr: c, insKeyStr: o };
      }
      function m(e) {
        var t = e.name,
          r = t === void 0 ? 'MarkUpdate' : t,
          n = e.info,
          o = n === void 0 ? Y : n,
          a = e.forceColor,
          c = q(o),
          i = c.sn,
          l = c.insKeyStr,
          s = c.depStr,
          d = c.snStr;
        return u.createElement(
          'div',
          { style: J },
          e.children,
          u.createElement(
            'div',
            { style: f(f({}, Q), {}, { backgroundColor: X(i, a) }) },
            '[',
            r,
            '] update at ',
            O(),
            ' ',
            d,
            ' (insKey ',
            l,
            ')',
          ),
          s && u.createElement('div', { style: { color: 'green' } }, ' deps is [ ', s, ' ]'),
        );
      }
      function ee(e) {
        return u.createElement(m, f({}, e), e.children);
      }
      function te(e) {
        return u.createElement(m, f({}, e), u.createElement('h1', null, e.children));
      }
      function re(e) {
        return u.createElement(m, f({}, e), u.createElement('h2', null, e.children));
      }
      function ne(e) {
        return u.createElement(m, f({}, e), u.createElement('h3', { style: V }, e.children));
      }
    },
  },
]);
