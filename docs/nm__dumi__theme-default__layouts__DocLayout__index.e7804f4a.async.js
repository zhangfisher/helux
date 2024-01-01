'use strict';
(self.webpackChunkhelux_docs = self.webpackChunkhelux_docs || []).push([
  [255],
  {
    15346: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = e(80904),
        s = e(70079),
        r = e(35250),
        h = [
          'https://tnfe.gtimg.com/image/harzqyxcgz_1651755973579.png',
          'https://tnfe.gtimg.com/image/p40w0k40pt_1651755965504.png',
          'https://tnfe.gtimg.com/image/fxy2nbeh43_1651755969439.png',
          'https://tnfe.gtimg.com/image/bxzj46o32k_1651755962175.png',
          'https://tnfe.gtimg.com/image/ngex07gcez_1651755956158.png',
          'https://tnfe.gtimg.com/image/harzqyxcgz_1651755973579.png',
        ],
        E = h[0];
      function f(o) {
        return h[o] || h[0];
      }
      var m = function () {
          var d,
            g = (0, t.eL)(),
            _ = g.frontmatter;
          return !((d = _.features) === null || d === void 0) && d.length
            ? (0, r.jsx)('div', {
                className: 'dumi-default-features',
                'data-cols':
                  [3, 2].find(function (a) {
                    return _.features.length % a === 0;
                  }) || 3,
                children: _.features.map(function (a, b) {
                  var k = a.title,
                    L = a.description,
                    v = a.emoji,
                    p = a.link,
                    u;
                  p
                    && (u = /^(\w+:)\/\/|^(mailto|tel):/.test(p)
                      ? (0, r.jsx)('a', { href: p, target: '_blank', rel: 'noreferrer', children: k })
                      : (0, r.jsx)(t.rU, { to: p, children: k }));
                  var c = {
                    boxShadow: '1px 2px 2px 1px rgba(0, 0, 255, .2)',
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    padding: '24px 24px',
                    boxSizing: 'border-box',
                    height: '270px',
                  };
                  return (0,
                  r.jsxs)('div', { className: 'dumi-default-features-item', style: c, children: [(0, r.jsx)('div', { style: { textAlign: 'center' }, children: (0, r.jsx)('img', { src: f(b), style: { width: '88px', height: '88px' } }) }), (0, r.jsx)('span', { style: { color: '#645ab7' }, children: k && (0, r.jsx)('h2', { children: u || k }) }), (0, r.jsxs)('span', { style: { color: 'gray' }, children: [' ', L && (0, r.jsx)('p', { dangerouslySetInnerHTML: { __html: L } })] })] }, k);
                }),
              })
            : null;
        },
        l = m;
    },
    72686: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = e(35250),
        s = function () {
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)('div', {
              className: 'dumi-default-footer',
              children: [
                'Copyright \xA9 ',
                new Date().getFullYear(),
                ' Tencent PCG TNTWeb.',
                (0, t.jsxs)('div', {
                  children: [
                    'Author:',
                    (0, t.jsx)('a', {
                      style: { paddingLeft: '6px' },
                      href: 'https://github.com/fantasticsoul',
                      target: '__blink',
                      children: 'fantasticsoul',
                    }),
                    ', Welcome to follow my open source project:',
                    (0, t.jsx)('a', {
                      style: { paddingLeft: '6px' },
                      href: 'https://github.com/heluxjs/helux',
                      target: '__blink',
                      children: 'helux',
                    }),
                    (0, t.jsx)('a', {
                      style: { paddingLeft: '6px' },
                      href: 'https://github.com/Tencent/hel',
                      target: '__blink',
                      children: 'hel-micro',
                    }),
                    (0, t.jsx)('a', {
                      style: { paddingLeft: '6px' },
                      href: 'https://github.com/tnfe/limu',
                      target: '__blink',
                      children: 'limu',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        r = s;
    },
    94743: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = e(80904),
        s = e(35250),
        r = function (l) {
          return (0, s.jsxs)('div', {
            children: [
              (0, s.jsxs)('div', {
                className: 'blinkTitle',
                children: ['React developing. ', (0, s.jsx)('span', { style: { fontWeight: 800 }, children: 'Redefined.' })],
              }),
              (0, s.jsxs)('h1', {
                className: 'dumi-default-hero-title',
                style: { color: '#645ab7' },
                children: [
                  (0, s.jsx)('img', { src: 'https://tnfe.gtimg.com/image/dlykfuw8ai_1703851692543.png', style: { paddingRight: '30px' } }),
                  l.children,
                ],
              }),
            ],
          });
        },
        h = r,
        E = function () {
          var l,
            o = (0, t.eL)(),
            d = o.frontmatter;
          return 'hero' in d
            ? (0, s.jsxs)('div', {
                className: 'dumi-default-hero',
                children: [
                  d.hero.title && (0, s.jsx)(h, { children: d.hero.title }),
                  d.hero.description && (0, s.jsx)('p', { dangerouslySetInnerHTML: { __html: d.hero.description } }),
                  !!(!((l = d.hero.actions) === null || l === void 0) && l.length)
                    && (0, s.jsx)('div', {
                      className: 'dumi-default-hero-actions',
                      children: d.hero.actions.map(function (g) {
                        var _ = g.text,
                          a = g.link;
                        return /^(\w+:)\/\/|^(mailto|tel):/.test(a)
                          ? (0, s.jsx)('a', { href: a, target: '_blank', rel: 'noreferrer', children: _ }, _)
                          : (0, s.jsx)(t.rU, { to: a, children: _ }, _);
                      }),
                    }),
                ],
              })
            : null;
        },
        f = E;
    },
    10473: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return L;
        },
      });
      var t = e(39114),
        s = e.n(t),
        r = e(70125),
        h = e.n(r),
        E = e(30011),
        f = e(19444),
        m = e(80904),
        l = e(70079),
        o = e(35250),
        d = function () {
          return (0, o.jsx)(o.Fragment, {});
        },
        g = d,
        _ = function (p) {
          var u = p.data,
            c = (0, m.TH)(),
            M = c.pathname,
            N = (0, l.useState)(function () {
              var y;
              return (y = u.children) === null || y === void 0
                ? void 0
                : y.some(function (T) {
                    var P = T.activePath || T.link;
                    return P && M.startsWith(P);
                  });
            }),
            I = h()(N, 2),
            S = I[0],
            Z = I[1],
            D =
              u.children
              && (0, o.jsx)('button', {
                className: 'dumi-default-navbar-collapse-btn',
                type: 'button',
                onClick: function (T) {
                  T.stopPropagation(),
                    Z(function (P) {
                      return !P;
                    });
                },
                'data-collapsed': S || void 0,
                children: (0, o.jsx)(E.r, {}),
              }),
            C =
              u.children
              && (0, o.jsx)('ul', {
                className: 'dumi-default-navbar-dropdown',
                'data-collapsed': S || void 0,
                children: (0, o.jsx)(b, { data: u.children }),
              }),
            x = u.activePath || u.link,
            j = x && M.startsWith(x) ? { className: 'active' } : {};
          return u.link
            ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(m.rU, s()(s()({ to: u.link }, j), {}, { children: u.title })), D, C] })
            : (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(
                    'span',
                    s()(
                      s()(
                        {
                          onClick: function (T) {
                            T.stopPropagation(),
                              Z(function (P) {
                                return !P;
                              });
                          },
                        },
                        j,
                      ),
                      {},
                      { children: u.title },
                    ),
                  ),
                  D,
                  C,
                ],
              });
        };
      function a(v) {
        return v.title === 'GitHub'
          ? (0, o.jsxs)('span', { children: [v.title, ' ', (0, o.jsx)(f.r, { style: { width: '18px', verticalAlign: 'top' } })] })
          : v.title;
      }
      var b = function (p) {
          var u = p.data;
          return (0, o.jsx)(o.Fragment, {
            children: u.map(function (c) {
              return (0,
              o.jsx)('li', { children: c.link && /^(\w+:)\/\/|^(mailto|tel):/.test(c.link) ? (0, o.jsx)('a', { href: c.link, target: '_blank', rel: 'noreferrer', children: a(c) }) : (0, o.jsx)(_, { data: c }) }, c.activePath || c.link || c.title);
            }),
          });
        },
        k = function () {
          var p = (0, m.OK)();
          return (0, o.jsxs)('ul', { className: 'dumi-default-navbar', children: [(0, o.jsx)(b, { data: p }), (0, o.jsx)(g, {})] });
        },
        L = k;
    },
    33731: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return E;
        },
      });
      var t = e(80904),
        s = e(87482),
        r = e(35250),
        h = function () {
          var m = (0, t.TH)(),
            l = m.pathname,
            o = (0, t.eL)(),
            d = (0, t.tx)();
          return d
            ? (0, r.jsx)('div', {
                className: 'dumi-default-sidebar smallScBar',
                children: d.map(function (g, _) {
                  return (0, r.jsxs)(
                    'dl',
                    {
                      className: 'dumi-default-sidebar-group',
                      children: [
                        g.title && (0, r.jsx)('dt', { children: g.title }),
                        g.children.map(function (a) {
                          return (0,
                          r.jsxs)('dd', { children: [(0, r.jsx)(t.OL, { to: a.link, title: a.title, end: !0, children: a.title }), a.link === l && o.frontmatter.toc === 'menu' && (0, r.jsx)(s.Z, {})] }, a.link);
                        }),
                      ],
                    },
                    String(_),
                  );
                }),
              })
            : null;
        },
        E = h;
    },
    87482: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = e(39114),
        s = e.n(t),
        r = e(70125),
        h = e.n(r),
        E = e(41226),
        f = e(80904),
        m = e(70079),
        l = e(35250),
        o = function () {
          var _ = (0, f.TH)(),
            a = _.pathname,
            b = _.search,
            k = _.hash,
            L = (0, f.eL)(),
            v = (0, f.zh)(),
            p = (0, f.WF)(),
            u = p.loading,
            c = (0, m.useRef)(0),
            M = (0, m.useState)([]),
            N = h()(M, 2),
            I = N[0],
            S = N[1],
            Z = m.useMemo(
              function () {
                var D = L.toc;
                return (
                  v && (D = v.toc),
                  D.filter(function (C) {
                    var x = C.depth;
                    return x > 1 && x < 4;
                  })
                );
              },
              [L, v],
            );
          return (
            (0, m.useEffect)(
              function () {
                if (!u) {
                  var D = Z.map(function (C) {
                    var x = C.id;
                    return { current: document.getElementById(x) };
                  });
                  S(D);
                }
              },
              [a, b, u, Z],
            ),
            I.length
              ? (0, l.jsx)(E.i, {
                  sectionRefs: I,
                  children: function (C) {
                    var x = C.currentElementIndexInViewport;
                    return (
                      x > -1 && (c.current = x),
                      (0, l.jsx)('ul', {
                        className: 'dumi-default-toc',
                        children: Z.filter(function (j) {
                          var y = j.depth;
                          return y > 1 && y < 4;
                        }).map(function (j, y) {
                          var T = ''.concat(b, '#').concat(encodeURIComponent(j.id)),
                            P = x > -1 ? x : c.current;
                          return (0, l.jsx)(
                            'li',
                            {
                              'data-depth': j.depth,
                              children: (0, l.jsx)(
                                f.rU,
                                s()(
                                  s()(
                                    {
                                      to: T,
                                      onClickCapture: function () {
                                        decodeURIComponent(k).slice(1) === j.id && f.m8.replace(''.concat(a).concat(b));
                                      },
                                      title: j.title,
                                    },
                                    P === y ? { className: 'active' } : {},
                                  ),
                                  {},
                                  { children: j.title },
                                ),
                              ),
                            },
                            j.id,
                          );
                        }),
                      })
                    );
                  },
                })
              : null
          );
        },
        d = o;
    },
    70736: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(32800);
    },
    44044: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(29684);
    },
    66803: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(35750);
    },
    34395: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(71314);
    },
    26415: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(6391);
    },
    17353: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(27883);
    },
    32776: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(66265);
    },
    65989: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(51669);
    },
    22224: function (i, n, e) {
      e.d(n, {
        ZP: function () {
          return t.ZP;
        },
      });
      var t = e(25995);
    },
    89471: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(20406);
    },
    27618: function (i, n, e) {
      e.d(n, {
        Z: function () {
          return t.Z;
        },
      });
      var t = e(99419);
    },
  },
]);
