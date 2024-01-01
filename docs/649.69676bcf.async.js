!(function () {
  'use strict';
  var xf = Object.defineProperty,
    Uf = Object.defineProperties;
  var Vf = Object.getOwnPropertyDescriptors;
  var vt = Object.getOwnPropertySymbols;
  var uo = Object.prototype.hasOwnProperty,
    io = Object.prototype.propertyIsEnumerable;
  var ao = (L, N, C) => (N in L ? xf(L, N, { enumerable: !0, configurable: !0, writable: !0, value: C }) : (L[N] = C)),
    b = (L, N) => {
      for (var C in N || (N = {})) uo.call(N, C) && ao(L, C, N[C]);
      if (vt) for (var C of vt(N)) io.call(N, C) && ao(L, C, N[C]);
      return L;
    },
    V = (L, N) => Uf(L, Vf(N));
  var fo = (L, N) => {
    var C = {};
    for (var T in L) uo.call(L, T) && N.indexOf(T) < 0 && (C[T] = L[T]);
    if (L != null && vt) for (var T of vt(L)) N.indexOf(T) < 0 && io.call(L, T) && (C[T] = L[T]);
    return C;
  };
  var lo = (L, N, C) =>
    new Promise((T, $) => {
      var ye = (Y) => {
          try {
            he(C.next(Y));
          } catch (X) {
            $(X);
          }
        },
        Ge = (Y) => {
          try {
            he(C.throw(Y));
          } catch (X) {
            $(X);
          }
        },
        he = (Y) => (Y.done ? T(Y.value) : Promise.resolve(Y.value).then(ye, Ge));
      he((C = C.apply(L, N)).next());
    });
  (self.webpackChunkhelux_docs = self.webpackChunkhelux_docs || []).push([
    [649],
    {
      73649: function (L, N, C) {
        C.r(N),
          C.d(N, {
            $: function () {
              return sf;
            },
            EVENT_NAME: function () {
              return Cf;
            },
            LIMU_VER: function () {
              return Nf;
            },
            RECORD_LOADING: function () {
              return Of;
            },
            VER: function () {
              return Lf;
            },
            action: function () {
              return ef;
            },
            addMiddleware: function () {
              return wf;
            },
            addPlugin: function () {
              return kf;
            },
            atom: function () {
              return Ti;
            },
            atomx: function () {
              return bi;
            },
            block: function () {
              return nf;
            },
            createShared: function () {
              return Ri;
            },
            defineDeriveFnItem: function () {
              return Ci;
            },
            defineDeriveTask: function () {
              return ki;
            },
            derive: function () {
              return Fi;
            },
            deriveDict: function () {
              return wi;
            },
            dynamicBlock: function () {
              return rf;
            },
            emit: function () {
              return yf;
            },
            flush: function () {
              return Ef;
            },
            getActionLoading: function () {
              return Tf;
            },
            getAtom: function () {
              return Ff;
            },
            getDeriveLoading: function () {
              return bf;
            },
            getMutateLoading: function () {
              return Rf;
            },
            getRawState: function () {
              return If;
            },
            getSnap: function () {
              return Mf;
            },
            init: function () {
              return gf;
            },
            isAtom: function () {
              return vf;
            },
            isDerivedAtom: function () {
              return Sf;
            },
            isDiff: function () {
              return Df;
            },
            model: function () {
              return df;
            },
            modelFactory: function () {
              return pf;
            },
            mutate: function () {
              return of;
            },
            mutateDict: function () {
              return cf;
            },
            on: function () {
              return hf;
            },
            produce: function () {
              return _f;
            },
            reactiveDesc: function () {
              return mf;
            },
            runDerive: function () {
              return Oi;
            },
            runDeriveTask: function () {
              return Li;
            },
            runMutate: function () {
              return af;
            },
            runMutateTask: function () {
              return uf;
            },
            shallowCompare: function () {
              return Kf;
            },
            share: function () {
              return Ii;
            },
            sharex: function () {
              return Mi;
            },
            signal: function () {
              return tf;
            },
            storeSrv: function () {
              return Af;
            },
            sync: function () {
              return ff;
            },
            syncer: function () {
              return lf;
            },
            useActionLoading: function () {
              return Wi;
            },
            useAtom: function () {
              return Pi;
            },
            useAtomX: function () {
              return xi;
            },
            useDerived: function () {
              return Vi;
            },
            useEffect: function () {
              return Xi;
            },
            useGlobalForceUpdate: function () {
              return qi;
            },
            useGlobalId: function () {
              return Gi;
            },
            useLayoutEffect: function () {
              return zi;
            },
            useLocalForceUpdate: function () {
              return Qi;
            },
            useMutable: function () {
              return ji;
            },
            useMutateLoading: function () {
              return $i;
            },
            useObject: function () {
              return Zi;
            },
            useOnEvent: function () {
              return Hi;
            },
            useReactive: function () {
              return Ui;
            },
            useService: function () {
              return Bi;
            },
            useStable: function () {
              return Ji;
            },
            useWatch: function () {
              return Yi;
            },
            watch: function () {
              return Ni;
            },
          });
        function T(e, t) {
          e.includes(t) || e.push(t);
        }
        function $(e, t) {
          const n = e.indexOf(t);
          n >= 0 && e.splice(n, 1);
        }
        function ye(e) {
          return Array.from(new Set(e));
        }
        function Ge(e, t) {
          let n = !1;
          for (const r of e)
            if (t.includes(r)) {
              n = !0;
              break;
            }
          return n;
        }
        function he(e, t) {
          let n = '';
          const r = e.length;
          for (let s = 0; s < r; s++) {
            const o = e[s];
            if (t.startsWith(o)) {
              n = o;
              break;
            }
          }
          return n;
        }
        function Y(e, t) {
          if (!e) return [];
          const n = e(t);
          return Array.isArray(n) ? n : [n];
        }
        var X = (function () {
            if (typeof globalThis != 'undefined') return globalThis;
            if (typeof global != 'undefined') return global;
            if (typeof window != 'undefined') return window;
            if (this !== void 0) return this;
            throw new Error('no globalThis');
          })(),
          Fn = !1;
        function F(...e) {}
        var po = F;
        function yo(...e) {
          return e;
        }
        function ge(...e) {
          return [];
        }
        function Yf(...e) {}
        var ho = Object.prototype.toString,
          go = '[object Map]';
        function Gf() {
          return !(typeof window != 'undefined' && window.document);
        }
        function St(e) {
          return ho.call(e) === go;
        }
        function wn(e) {
          return e === Number.MAX_SAFE_INTEGER;
        }
        function se() {
          return !(!Fn && X.name !== 'previewFrame' && !X.BrowserFS);
        }
        function H(e) {
          return e && typeof e == 'object' && !Array.isArray(e);
        }
        function kn(e) {
          return e && typeof e == 'object';
        }
        function w(e) {
          return typeof e == 'function';
        }
        function Bf(e) {
          return Fn ? Object.prototype.toString.call(e) === '[object AsyncFunction]' : !0;
        }
        function At(e) {
          return typeof e == 'symbol';
        }
        function Kt(e) {
          if (!e) return !1;
          const t = typeof e;
          return (t === 'object' || t === 'function') && w(e.then);
        }
        function Hf(e) {
          try {
            return e.test, !1;
          } catch (t) {
            return !0;
          }
        }
        function Ke() {
          return typeof Proxy == 'function';
        }
        function oe(e, t) {
          var i;
          const {
            throwErr: n = !1,
            prefixLabel: r = '',
            suffixLabel: s = ', see details in console.',
            logErr: o = !0,
            alertErr: c,
          } = t || {};
          let a = e,
            u = !1;
          if (
            (e instanceof Error && ((u = !0), (a = e.message)),
            (c != null ? c : se()) && e && ((i = X.alert) == null || i.call(X, `${r}${a}${s}`)),
            o && console.error(e),
            n)
          )
            throw u ? e : new Error(String(e));
        }
        function me(e, t = 0) {
          t === 0 ? (console.error(e), se() && console.trace(e)) : t === 1 ? console.error(e) : console.warn(e);
        }
        function De(e) {
          return wn(e) ? 1 : e + 1;
        }
        var mo = !!Reflect,
          Eo = Object.prototype.hasOwnProperty;
        function vo(e, t) {
          return mo ? Reflect.has(e, t) : Eo.call(e, t);
        }
        function _e(e, t, n) {
          let r = e[t];
          return r || (r = e[t] = n), r;
        }
        function Re(e, t, n) {
          let r = e.get(t);
          return r || (e.set(t, n), (r = n)), r;
        }
        function Cn(e, t) {
          let n = '';
          for (const r in e)
            if (t.startsWith(r)) {
              n = r;
              break;
            }
          return n;
        }
        function On(e, t) {
          const n = e.get(t);
          if (n !== void 0) return n;
          const r = e.get(Number(t) || t);
          return r !== void 0 ? r : void 0;
        }
        function ce(e, t) {
          let n,
            r = e;
          return (
            t.forEach((s) => {
              (n = St(r) ? On(r, s) : r[s]), (r = n);
            }),
            n
          );
        }
        function Ln(e, t, n) {
          let r = e;
          const s = t.length - 1;
          t.forEach((o, c) => {
            const a = St(r);
            if (c === s) return void (a ? r.set(o, n) : (r[o] = n));
            r = a ? On(r, o) : r[o];
          });
        }
        function So() {
          return me('changing shared state is invalid'), !0;
        }
        function jf(e) {
          return e;
        }
        function Dt(e, t) {
          return `${t}/${e}`;
        }
        function _t(e) {
          return e && Ke();
        }
        var Ao = Object.defineProperty,
          Rt = {};
        ((e, t) => {
          for (var n in t) Ao(e, n, { get: t[n], enumerable: !0 });
        })(Rt, {
          useEffect: () => Ro,
          useEffectLogic: () => bt,
          useForceUpdate: () => Nn,
          useLayoutEffect: () => _o,
          useObject: () => bo,
          useObjectLogic: () => xn,
          useStable: () => Pn,
        });
        var Ko = 0,
          Be = new Map(),
          Tt = 0;
        function Do(e, t) {
          const n = () => {
            const r = t();
            return () => {
              Be.delete(e), r && r();
            };
          };
          if (
            ((function (r) {
              Tt || (Tt = r);
            })(e),
            (function (r) {
              const s = Be.get(r);
              s ? (s.count += 1) : Be.set(r, { count: 1 });
            })(e),
            Tt % 2 != 0)
          )
            return n();
          {
            const r = (function (s) {
              return Be.get(s);
            })(e);
            if (r && r.count > 1) return n();
          }
        }
        function bt(e, t, n) {
          const { useState: r, useLayoutEffect: s, useEffect: o } = e.react,
            { isLayout: c, deps: a } = n,
            [u] = r(() => ++Ko);
          (c ? s : o)(() => Do(u, t), a);
        }
        function _o(e, t, n) {
          bt(e, t, { isLayout: !0, deps: n });
        }
        function Ro(e, t, n) {
          bt(e, t, { deps: n });
        }
        function Nn(e) {
          const [, t] = e.react.useState({});
          return () => t({});
        }
        function To(e) {
          const { data: t } = e.current;
          w(t)
            ? (e.current.wrap = (...n) => e.current.data(...n))
            : H(t)
            ? (e.current.wrap = (function (n, r) {
                if (!Ke()) {
                  const o = {};
                  return (
                    Object.keys(n).forEach((c) => {
                      const a = n[c];
                      w(a)
                        ? (o[c] = (...u) => r.current.data[c](...u))
                        : Object.defineProperty(o, c, {
                            get: () => r.current.data[c],
                            set(u) {
                              r.current.data[c] = u;
                            },
                          });
                    }),
                    o
                  );
                }
                const s = {};
                return new Proxy(n, {
                  get(o, c) {
                    const a = o[c];
                    return w(a) ? _e(s, c, (...u) => r.current.data[c](...u)) : a;
                  },
                });
              })(t, e))
            : (e.current.wrap = t);
        }
        function Pn(e, t) {
          const { useRef: n, useMemo: r } = e.react,
            s = n({ data: t, wrap: {}, inited: !1 });
          return (s.current.data = r(() => t, [t])), s.current.inited || (To(s), (s.current.inited = !0)), s.current.wrap;
        }
        function xn(e, t, n, r) {
          const { useState: s, useRef: o, useEffect: c } = e.react,
            [a] = s(t),
            u = Nn(e),
            i = o({ state: null, unmount: !1, shouldCopy: !0 }),
            l = Pn(e, {
              setState(f) {
                const d = i.current;
                if (d.unmount) return;
                let y;
                const { state: m } = d;
                n
                  ? ((y = n(f, d.state || a)), r && y ? ((d.state = y), (d.shouldCopy = !1)) : (d.shouldCopy = !0))
                  : ((y = (w(f) ? f(m) : f) || {}), (d.shouldCopy = !0)),
                  Object.assign(a, y || {}),
                  u();
              },
              getLatestState() {
                const f = i.current;
                return f.shouldCopy && ((f.state = b({}, a)), (f.shouldCopy = !1)), f.state;
              },
            });
          return (
            c(() => {
              const f = i.current;
              return (
                (f.unmount = !1),
                () => {
                  f.unmount = !0;
                }
              );
            }, [i]),
            [a, l.setState, l]
          );
        }
        function bo(e, t) {
          return xn(e, t);
        }
        function Io(e) {
          const t = {},
            n = { react: e },
            r = Rt;
          return (
            Object.keys(Rt).forEach((s) => {
              t[s] = r[s].bind(null, n);
            }),
            t
          );
        }
        var j = C(18636),
          Mo = Object.defineProperty,
          Fo = (e, t) => {
            for (var n in t) Mo(e, n, { get: t[n], enumerable: !0 });
          },
          Un = {};
        Fo(Un, {
          $: () => hi,
          EVENT_NAME: () => It,
          LIMU_VER: () => wo,
          RECORD_LOADING: () => Mt,
          VER: () => Vn,
          action: () => ps,
          addMiddleware: () => Zo,
          addPlugin: () => tc,
          atom: () => Wu,
          atomx: () => Xu,
          block: () => li,
          createShared: () => yi,
          currentDraftRoot: () => Fc,
          defineDeriveFnItem: () => yu,
          defineDeriveTask: () => pu,
          derive: () => ms,
          deriveDict: () => du,
          dynamicBlock: () => eo,
          emit: () => oc,
          flush: () => on,
          getActionLoading: () => Iu,
          getAtom: () => Xn,
          getDeriveLoading: () => Ha,
          getMutateLoading: () => Tu,
          getRawState: () => dc,
          getSnap: () => pc,
          init: () => Jo,
          isAtom: () => Ie,
          isDerivedAtom: () => ae,
          isDiff: () => pi,
          mutate: () => Ks,
          mutateDict: () => Sn,
          on: () => cc,
          produce: () => j.Uy,
          reactiveDesc: () => Cr,
          runDerive: () => Va,
          runDeriveTask: () => Ya,
          runMutate: () => Ss,
          runMutateTask: () => As,
          shallowCompare: () => di,
          share: () => Tn,
          sharex: () => $u,
          signal: () => to,
          storeSrv: () => Cu,
          sync: () => zu,
          syncer: () => Ju,
          useActionLoading: () => Mu,
          useAtom: () => Ds,
          useAtomX: () => _s,
          useDerived: () => Kn,
          useGlobalForceUpdate: () => Is,
          useGlobalId: () => Ru,
          useLocalForceUpdate: () => ks,
          useMutable: () => Cs,
          useMutateLoading: () => bu,
          useOnEvent: () => Fu,
          useReactive: () => Os,
          useService: () => ku,
          useWatch: () => Lu,
          watch: () => su,
        });
        var Vn = '3.6.3',
          wo = j.TT,
          It = { ON_DATA_CHANGED: 'ON_DATA_CHANGED', ON_SHARE_CREATED: 'ON_SHARE_CREATED', ON_ERROR_OCCURED: 'ON_ERROR_OCCURED' },
          Mt = { NO: 'no', PRIVATE: 'private', GLOBAL: 'global' },
          Yn = 0,
          Gn = Symbol,
          ko = typeof Gn == 'function';
        function Q(e) {
          return ko ? Gn(e) : ((Yn += 1), `__HELUX_SYMBOL_${Yn}__`);
        }
        var Co = '__proto__',
          Oo = Ke(),
          Lo = Q('HeluxUndefined'),
          Bn = Q('HeluxMutateFnItem'),
          He = Q('HeluxFnKey'),
          je = Q('HeluxSharedKey'),
          Hn = Q('HeluxReactiveMeta'),
          Ft = Q('HeluxIsBlock'),
          Te = Q('HeluxIsAtom'),
          $e = Q('HeluxIsDerivedAtom'),
          We = [je, Te, $e, Ft],
          Xe = 'SingleMutate',
          No = 'HeluxGlobalLoading',
          Po = 6,
          xo = !0,
          jn = 2e3,
          Uo = 20,
          be = '1',
          wt = '2',
          ze = 1,
          Je = 2,
          $n = 3,
          Ee = '|',
          Ze = { TASK: 'task', MAY_TRANSFER: 'may_transfer' },
          q = { STATIC: 'static', HOOK: 'hook' },
          J = {
            USER_STATE: 'user_state',
            GLOGAL_EMPTY: 'global_empty',
            GLOGAL_LOADING: 'global_loading',
            PRIVATE_LOADING: 'private_loading',
          },
          Vo = 'derive',
          Wn = 'watch',
          Qe = 'Object',
          Yo = 'Map',
          Go = 'Array',
          Bo = 'Other',
          G = { SET_STATE: 'SetState', MUTATE: 'Mutate', ACTION: 'Action', REACTIVE: 'Reactive', LOADING: 'Loading', SYNC: 'Sync' };
        function Ie(e) {
          var t;
          return e && (t = e[Te]) != null ? t : !1;
        }
        function ae(e) {
          return (e && e[$e]) || !1;
        }
        function Xn(e) {
          return Ie(e) || ae(e) ? e.val : e;
        }
        function Ho() {
          return {
            keySeed: { static: 0, hook: 0, Reactive: 0, Mutate: 0 },
            runningFnKey: '',
            runningSharedKey: 0,
            isIgnore: !1,
            depKeys: [],
            GID_INSKEYS_MAP: new Map(),
            FNKEY_STATIC_CTX_MAP: new Map(),
            FNKEY_HOOK_CTX_MAP: new Map(),
            DEPKEY_FNKEYS_MAP: new Map(),
            UNMOUNT_INFO_MAP: new Map(),
            DEPKEY_COMPUTING_FNKEYS_MAP: new Map(),
          };
        }
        function jo() {
          return {
            keySeed: 0,
            keyPrefix: 0,
            initCount: 0,
            mountedCount: 0,
            latest: { val: null, stateOrResult: null, sharedKey: 0, depKey: '', keyPath: [], isDerivedResult: !1, isDerivedAtom: !1 },
            runningKey: '',
            isDynamic: !1,
            KEY_CTX_MAP: new Map(),
            KEY_DYNAMIC_CTX_MAP: new Map(),
          };
        }
        function $o() {
          return { keySeed: 0, UNMOUNT_INFO_MAP: new Map() };
        }
        function Wo() {
          return {
            keySeed: 0,
            SHARED_KEY_STATE_MAP: new Map(),
            STATE_SHARED_KEY_MAP: new Map(),
            INTERMAL_MAP: new Map(),
            COMPARE_MAP: new Map(),
            isStateChanged: !1,
          };
        }
        function zn() {
          const e = {};
          return {
            on: (t, n) => {
              _e(e, t, []).push(n);
            },
            emit: (t, ...n) => {
              (e[t] || []).slice().forEach((s) => s(...n));
            },
            off: (t, n) => {
              const r = e[t] || [],
                s = r.findIndex((o) => o === n);
              s >= 0 && r.splice(s, 1);
            },
            canEmit: (t) => e[t],
          };
        }
        function Jn() {
          const e = {
            VER: Vn,
            LIMU_VER: j.TT,
            rootState: {},
            setState: (t, n) => {
              const r = e.ctx.mod[t];
              if (!r) throw new Error(`moduleName ${t} not found`);
              r.setState(n);
            },
            ctx: {
              bus: zn(),
              userBus: zn(),
              mod: {},
              middlewares: [],
              plugins: [],
              sharedScope: Wo(),
              fnScope: Ho(),
              insScope: $o(),
              blockScope: jo(),
              markAtomMap: new Map(),
              renderSN: 0,
              globalLoading: null,
              globalLoadingInternal: null,
              globalEmpty: null,
              globalEmptyInternal: null,
              isRootRender: !0,
            },
            legacyRoot: {},
          };
          return e;
        }
        var qe = {},
          Zn = !1,
          Qn = null,
          qn = !1;
        function x() {
          return qe.ctx || {};
        }
        function Xo() {
          return qe;
        }
        function er(e) {
          (qe = e.ROOT), (Qn = e.api), (Zn = e.inited);
        }
        function zo() {
          return { ROOT: qe, inited: Zn, API: Qn };
        }
        function Jo(e) {
          if (qn) return !1;
          qn = !0;
          const { isRootRender: t = !0 } = e;
          return (x().isRootRender = t), !0;
        }
        function Zo(e) {
          const { middlewares: t } = x();
          t.push(e);
        }
        function Qo(e, t, n, r) {
          const { middlewares: s } = x();
          if (!s.length) return;
          const o = {},
            { sharedKey: c, moduleName: a, forAtom: u } = e,
            l = { forAtom: u, draftRoot: t, draft: n, sharedKey: c, moduleName: a, setData: (f, d) => (o[f] = d), data: o, idx: 0, sn: r };
          s.forEach((f, d) => {
            f(V(b({}, l), { idx: d }));
          });
        }
        var { ON_DATA_CHANGED: kt, ON_SHARE_CREATED: tr, ON_ERROR_OCCURED: qo } = It,
          ec = [J.GLOGAL_LOADING, J.PRIVATE_LOADING];
        function tc(e) {
          const { plugins: t, bus: n } = x();
          t.push(e);
          const r = { on: (s, o) => n.on(s, o), onStateChanged: (s) => n.on(kt, s) };
          e.install(r);
        }
        function nc(e, t) {
          const { bus: n } = x();
          if (n.canEmit(kt)) {
            const { from: r, desc: s } = t,
              { sharedKey: o, moduleName: c, snap: a, usefulName: u, stateType: i } = e;
            let l;
            ec.includes(i) ? (l = `${u}/setState`) : (l = `${u}@${r || 'Api'}/${s}`),
              n.emit(kt, { snap: a, sharedKey: o, moduleName: c, type: l });
          }
        }
        function rc(e) {
          const { bus: t } = x();
          if (t.canEmit(tr)) {
            const { snap: n, sharedKey: r, moduleName: s, usefulName: o } = e,
              c = `${o}@FactoryApi/createShared`;
            t.emit(tr, { snap: n, sharedKey: r, moduleName: s, type: c });
          }
        }
        function nr(e, t, n) {
          const { bus: r } = x();
          if (!r.canEmit(t)) return !1;
          const { sharedKey: s, moduleName: o } = e;
          return r.emit(t, { moduleName: o, sharedKey: s, data: n }), !0;
        }
        function rr(e, t) {
          nr(e, qo, { err: t }) || (console.warn('found uncaught error, sugguest add a plugin to handle this error'), console.error(t));
        }
        function sc() {
          const { userBus: e } = x();
          return e;
        }
        function oc(e, ...t) {
          const { userBus: n } = x();
          n.emit(e, ...t);
        }
        function cc(e, t) {
          const { userBus: n } = x();
          return n.on(e, t), () => n.off(e, t);
        }
        function ac(e, t) {
          return (e.__proto__ = t), e;
        }
        function uc(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
          return e;
        }
        var Ct = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? ac : uc);
        function ic(e) {
          const t = Object.create(null);
          return Ct(t, b({}, Object.prototype)), e && Object.assign(t, e), t;
        }
        function sr(e) {
          if (w(e)) return;
          const t = Object.create(null);
          return Ct(t, Object.prototype), Ct(e, t), e;
        }
        function or(e, t, n) {
          return (e[t] = n), !0;
        }
        function cr(e, t) {
          return e[t];
        }
        function Me(e, t) {
          const { set: n = or, get: r = cr, obj: s = {} } = t || {};
          return (
            Object.keys(e).forEach((o) => {
              Object.defineProperty(s, o, {
                enumerable: !0,
                configurable: !1,
                set: function (c) {
                  return n(e, o, c);
                },
                get: function () {
                  return r(e, o);
                },
              });
            }),
            s
          );
        }
        function ue(e, t) {
          const { set: n = or, get: r = cr } = t || {};
          if (Ke())
            return new Proxy(e, {
              set(c, a, u) {
                return n(c, a, u);
              },
              get(c, a) {
                return r(c, a);
              },
            });
          const s = ic();
          return Me(s, { obj: s, set: n, get: r });
        }
        var Fe = x();
        function et(e) {
          const n = x()[e];
          return (Fe[e] = n), n;
        }
        function Z() {
          return Fe.blockScope || et('blockScope');
        }
        function P() {
          return Fe.fnScope || et('fnScope');
        }
        function ee() {
          return Fe.sharedScope || et('sharedScope');
        }
        function ar() {
          return Fe.insScope || et('insScope');
        }
        function ur() {
          const { INTERMAL_MAP: e } = ee();
          return e;
        }
        function fc(e, t) {
          if (!e || !se() || !t) return;
          const { INTERMAL_MAP: n, SHARED_KEY_STATE_MAP: r, STATE_SHARED_KEY_MAP: s } = ee();
          let o = [],
            c = !1;
          if (
            (n.forEach((a) => {
              a.moduleName === e && a.loc === t && a.stateType === J.USER_STATE && o.push(a.sharedKey);
            }),
            o.length > 1)
          ) {
            const a = o[0],
              u = n.get(a);
            n.delete(a), u && (r.delete(u.sharedKey), s.delete(u.rawState));
          }
          return c;
        }
        function we(e) {
          return ur().get(e);
        }
        function U(e) {
          const t = te(e);
          return we(t);
        }
        function lc(e, t) {
          const n = ur(),
            r = te(e);
          n.set(r, t);
        }
        function dc(e) {
          return U(e).rawState;
        }
        function pc(e, t = !0) {
          const n = U(e);
          return t ? n.prevSnap : n.snap;
        }
        function te(e) {
          return (e && (e[je] || ee().STATE_SHARED_KEY_MAP.get(e))) || 0;
        }
        function yc(e) {
          const t = ee(),
            { STATE_SHARED_KEY_MAP: n } = t,
            r = De(t.keySeed);
          return n.set(e, r), (t.keySeed = r), r;
        }
        function hc(e, t) {
          const { SHARED_KEY_STATE_MAP: n, STATE_SHARED_KEY_MAP: r } = ee();
          n.set(e, t), r.set(t, e);
        }
        function gc(e) {
          return ee().SHARED_KEY_STATE_MAP.get(e);
        }
        function mc(e, t) {
          const { rootState: n, ctx: r } = Xo(),
            { moduleName: s, usefulName: o } = t,
            c = n[o],
            a = U(c);
          if (s && a && a.loc !== t.loc) {
            const u = `
loc1:${a.loc} 
loc2:${t.loc}`;
            return me(
              `only-dev-mode tip: moduleName ${s} duplicate! this does not effect helux but the duplicated module will be ignored by devtool`
                + u,
            );
          }
          (n[o] = e), (r.mod[o] = U(e));
        }
        var Ec = { innerSetState: F };
        function ir(e, t) {
          const { rawState: n, forAtom: r } = e,
            s = new Map(),
            o = {},
            c = {},
            a = [],
            u = b({}, n);
          let i = u;
          return (
            r && (i = n.val),
            V(b(b({ ver: 0, sn: 0, reactive: n, reactiveRoot: n, sync: F, syncer: F, snap: u, prevSnap: u, rawStateVal: i }, e), t), {
              insCtxMap: s,
              key2InsKeys: o,
              id2InsKeys: c,
              recordId(l, f) {
                if (!l) return;
                const d = _e(c, l, []);
                T(d, f);
              },
              delId(l, f) {
                l && $(c[l] || [], f);
              },
              recordDep(l, f) {
                const d = _e(o, l, []);
                T(d, f);
              },
              delDep(l, f) {
                $(o[l] || [], f);
              },
              mapInsCtx(l, f) {
                s.set(f, l);
              },
              delInsCtx(l) {
                s.delete(l);
              },
              extra: {},
              loadingInternal: Ec,
              level1ArrKeys: a,
            })
          );
        }
        var vc = { Mutate: '', Reactive: 'r', [q.STATIC]: 's', [q.HOOK]: 'h' };
        function Sc() {
          const e = ar(),
            t = De(e.keySeed);
          return (e.keySeed = t), t;
        }
        function Ac() {
          const e = Z(),
            { keySeed: t, keyPrefix: n } = e,
            r = De(t);
          e.keySeed = r;
          let s = n;
          return wn(t) && ((s = De(n)), (e.keyPrefix = s)), `${s}_${r}`;
        }
        function Kc() {
          const e = x(),
            t = e.renderSN,
            n = t === Number.MAX_VALUE ? 1 : t + 1;
          return (e.renderSN = n), n;
        }
        function Ot(e) {
          const t = vc[e],
            r = P().keySeed,
            s = De(r[e]);
          return (r[e] = s), `${t}${s}`;
        }
        function Dc() {
          return Ot('Reactive');
        }
        var { MAY_TRANSFER: _c } = Ze,
          { SET_STATE: Rc, REACTIVE: Tc } = G,
          bc = () => ({ isReplaced: !1, replacedValue: null }),
          Ic = () => {},
          Mc = Nt({ isFake: !0 });
        function fr(e, t, n = F) {
          const { desc: r = '', onRead: s, from: o = Tc, depKeys: c = [], isTop: a = !1, expired: u = !1, insKey: i = 0 } = t;
          return {
            draft: e,
            finish: n,
            modified: !1,
            expired: u,
            sharedKey: 0,
            moduleName: '',
            hasFlushTask: !1,
            nextTickFlush: F,
            data: [],
            isTop: a,
            key: '',
            fnKey: '',
            depKeys: c,
            writeKeys: [],
            desc: r,
            onRead: s,
            from: o,
            insKey: i,
          };
        }
        function Lt(e) {
          const {
            ids: t = [],
            globalIds: n = [],
            isReactive: r = !1,
            from: s = Rc,
            enableDep: o = !1,
            handleCbReturn: c = !0,
            sn: a = Kc(),
            isFirstCall: u = !1,
            desc: i = '',
            onRead: l,
          } = e;
          return {
            fnKey: '',
            depKeys: [],
            forcedDepKeys: [],
            triggerReasons: [],
            ids: t,
            globalIds: n,
            readKeys: {},
            writeKeys: {},
            arrKeyDict: {},
            writeKeyPathInfo: {},
            handleCbReturn: c,
            draftVal: null,
            from: s,
            isReactive: r,
            enableDep: o,
            sn: a,
            isFirstCall: u,
            desc: i,
            onRead: l,
          };
        }
        function ke(e, t, n) {
          const { isChanged: r = !0, parentKeyPath: s = [], op: o = 'set', parentType: c = 'Object' } = n,
            a = s.slice();
          return (
            a.push(e),
            {
              isChanged: r,
              isCustom: !1,
              op: o,
              immutBase: !1,
              key: e,
              value: t,
              proxyValue: t,
              parentType: c,
              keyPath: s,
              fullKeyPath: a,
              isBuiltInFnKey: !1,
              replaceValue: F,
              getReplaced: bc,
            }
          );
        }
        function Nt(e) {
          const f = e || {},
            {
              desc: t = '',
              fn: n = F,
              task: r = Ic,
              depKeys: s = [],
              writeKeys: o = [],
              deps: c = ge,
              isFake: a = !1,
              onlyDeps: u = !1,
            } = f,
            i = fo(f, ['desc', 'fn', 'task', 'depKeys', 'writeKeys', 'deps', 'isFake', 'onlyDeps']);
          return b(
            {
              fn: n,
              task: r,
              deps: c,
              oriDesc: '',
              onlyDeps: u,
              desc: t,
              depKeys: s,
              writeKeys: o,
              checkDeadCycle: void 0,
              watchKey: '',
              isFake: a,
              enabled: !0,
            },
            i,
          );
        }
        function lr() {
          const e = {
            fnKey: '',
            fn: F,
            subFnInfo: Mc,
            checkDeadCycle: !0,
            isFirstLevel: !0,
            isExpired: !1,
            task: F,
            deps: ge,
            status: { loading: !1, err: null, ok: !0 },
            forAtom: !1,
            remainRunCount: 0,
            showLoading: !1,
            nextLevelFnKeys: [],
            prevLevelFnKeys: [],
            mountStatus: ze,
            depKeys: [],
            depSharedKeys: [],
            result: {},
            fnType: 'watch',
            returnUpstreamResult: !1,
            scopeType: 'static',
            renderStatus: be,
            proxyResult: {},
            updater: F,
            createTime: Date.now(),
            shouldReplaceResult: !1,
            isAsync: !1,
            isAsyncTransfer: !1,
            isSimpleWatch: !1,
            isRunning: !1,
            dcErrorInfo: { err: null, tipFn: F },
            asyncType: _c,
            subscribe: (t) => {
              t();
            },
            extra: {},
            setLoading: (t, n = null) => {
              const r = !t && !n;
              e.status = { loading: t, err: n, ok: r };
            },
            renderInfo: { time: 0, insKey: 0, sn: 0, getDeps: () => e.depKeys.slice() },
          };
          return e;
        }
        var dr = { draftRoot: { val: null }, isFake: !0, isAtom: !0 },
          pr = Lt({}),
          Ce = fr(!0, { expired: !0 }),
          $f = Nt(),
          yr = ir({ rawState: {}, forAtom: !1, usefulName: '' }, {}),
          hr = lr(),
          tt = dr,
          Pt = pr,
          gr = '',
          xt = new Map(),
          Ut = new Map(),
          Vt = new Map(),
          Yt = F,
          Gt = [],
          Bt = '';
        function Fc() {
          return tt;
        }
        var Oe = { current: () => Bt, set: (e) => (Bt = e), del: () => (Bt = '') },
          Ht = { current: () => Yt, set: (e) => (Yt = e), del: () => (Yt = F) },
          Le = { current: (e) => Ut.get(e) || 'SetState', set: (e, t) => Ut.set(e, t), del: (e) => Ut.delete(e) },
          Ne = { current: () => Gt, set: (e) => (Gt = e), del: () => (Gt = []) },
          ne = { current: () => Vt.get(gr) || Ce, markUsing: (e) => (gr = e), set: (e, t) => Vt.set(e, t), del: (e) => Vt.delete(e) },
          jt = { current: (e) => xt.get(e), set: (e, t) => xt.set(e, t), del: (e) => xt.delete(e) },
          nt = {
            current: () => tt,
            set: (e, t) => {
              Object.assign(tt, { draftRoot: e, isAtom: t, isFake: !1 });
            },
            del: () => (tt = dr),
          },
          $t = { current: () => Pt, set: (e) => (Pt = e), del: () => (Pt = pr) };
        function Wt(e) {
          const { FNKEY_STATIC_CTX_MAP: t, FNKEY_HOOK_CTX_MAP: n } = P();
          return e[0] === 's' ? t : n;
        }
        function wc(e, t) {
          const { DEPKEY_COMPUTING_FNKEYS_MAP: n } = P();
          Re(n, e, []).push(t);
        }
        function kc(e, t) {
          const { DEPKEY_COMPUTING_FNKEYS_MAP: n } = P(),
            r = n.get(e);
          r && $(r, t);
        }
        function Cc(e) {
          const { DEPKEY_FNKEYS_MAP: t } = P(),
            { depKeys: n, fnKey: r } = e;
          n.forEach((s) => {
            const o = t.get(s) || [];
            $(o, r);
          });
        }
        function mr(e, t) {
          const { FNKEY_STATIC_CTX_MAP: n } = P(),
            { fnKey: r, prevLevelFnKeys: s } = e;
          s.forEach((o) => {
            var a;
            const c = (a = n.get(o)) == null ? void 0 : a.nextLevelFnKeys;
            c && (t ? T(c, r) : $(c, r));
          });
        }
        function Oc() {
          const { FNKEY_HOOK_CTX_MAP: e } = P();
          se()
            && e.forEach((t) => {
              t.isExpired = !0;
            });
        }
        function Er(e, t, n) {
          const r = n || Ot(t);
          return w(e) ? (e[He] = r) : (sr(e), (e.__proto__[He] = r)), r;
        }
        function vr(e) {
          return w(e) ? e[He] || '' : (H(e) && e.__proto__[He]) || '';
        }
        function ie(e) {
          return Wt(e).get(e);
        }
        function Xt(e) {
          return Wt(e).get(e) || hr;
        }
        function Pe(e) {
          const t = vr(e);
          return ie(t) || null;
        }
        function rt() {
          const { runningFnKey: e, depKeys: t, runningSharedKey: n, isIgnore: r } = P();
          return { fnCtx: e ? ie(e) : null, depKeys: t, isIgnore: r, runningSharedKey: n };
        }
        function Lc() {
          return P().runningFnKey;
        }
        var { USER_STATE: Nc } = J;
        function Pc(e, t = 8) {
          let n = '';
          if (se() && e)
            try {
              throw new Error('loc');
            } catch (r) {
              const s = r.stack.split(`
`),
                o = s[1] || '';
              o.includes('webpack-internal') || o.includes('/node_modules/')
                ? (n = s.slice(0, 16).join(' -> '))
                : (n = s
                    .map((a) => a.substring(0, a.indexOf('(')).trim())
                    .slice(4, t)
                    .join(' -> '));
            }
          return n;
        }
        function Sr(e) {
          const [t, n] = e.split('/'),
            r = n.split(Ee);
          return { sharedKey: Number(t), keyPath: r, depKey: e };
        }
        function Ar(e) {
          const { sharedKey: t, forAtom: n } = e,
            r = n ? '/val' : '',
            s = n ? ['val'] : [];
          return { depKey: `${t}${r}`, keyPath: s, sharedKey: t };
        }
        function B(e, t) {
          try {
            return Dt(e.join(Ee), t);
          } catch (n) {
            return console.warn('found Symbol key in your path :', e), `${t}`;
          }
        }
        function xc(e, t) {
          const { snap: n, prevSnap: r, stateType: s } = e;
          if (Nc !== s) return !0;
          const { keyPath: o } = Sr(t);
          try {
            const c = ce(n, o),
              a = ce(r, o);
            return c !== a;
          } catch (c) {
            return !0;
          }
        }
        function Uc(e, t) {
          return Ke()
            ? (0, j.OA)(e, { onOperate: t, compareVer: !0 })
            : ue(e, {
                get(n, r) {
                  const s = n[r],
                    o = ke(r, s, { isChanged: !1, parentKeyPath: [] });
                  return t(o), s;
                },
              });
        }
        function Vc(e, t) {
          if (t !== void 0) {
            if (e) return { val: t };
            if (H(t)) return t;
          }
        }
        function Yc(e, t, n) {
          const r = w(t) ? t(n) : t;
          return Vc(e, r);
        }
        function st(e, t) {
          let { value: n } = e;
          if (t) {
            t(e);
            const { replacedValue: r, isReplaced: s } = e.getReplaced();
            s && (n = r);
          }
          return n;
        }
        function Kr(e) {
          return [Go, Yo].includes(e);
        }
        function Gc(e) {
          return Array.isArray(e) || St(e);
        }
        var { isObject: fe, getDataType: Dr } = j.limuUtils;
        function _r(e, t) {
          if (e === t) return e;
          const r = t.substring(e.length + 1).split(Ee);
          return `${e}${Ee}${r[0]}`;
        }
        function Bc(e, t) {
          he(e, t) || T(e, t);
        }
        var zt = new Map();
        function Rr(e, t) {
          let n = !1;
          const { depKey: r, keyPath: s, sharedKey: o } = e,
            { stopDepInfo: c, level1ArrKeys: a, recordCb: u } = t,
            i = zt.get(r);
          if (i) return u(i), !0;
          const { keys: l, isArrDict: f, depth: d, arrKeyStopDcit: y, stopArrDep: m } = c,
            p = he(a, r),
            g = s.length > d;
          if (g || p) {
            let S = '',
              D = d;
            return (
              p && ((D = d + 1), y[p] === !1 || (m && (g ? (S = B(s.slice(0, D), o)) : (S = _r(p, r))))),
              S || (S = B(s.slice(0, D), o)),
              p || zt.set(r, S),
              u(S),
              !0
            );
          }
          const E = String(o);
          for (const S of l) {
            if (!r.startsWith(S) || S === E) continue;
            const D = f[S],
              I = D ? _r(S, r) : S;
            D || zt.set(r, I), u(I), (n = !0);
            break;
          }
          return n;
        }
        function Jt(e, t) {
          const n = Z(),
            { runningKey: r } = n;
          if (r) {
            const { KEY_DYNAMIC_CTX_MAP: s, KEY_CTX_MAP: o, isDynamic: c } = n,
              u = (c ? s : o).get(r);
            if (u) {
              const { results: i, depKeys: l } = u;
              t ? T(i, t) : e.forEach((f) => T(l, f));
            }
          }
        }
        function ot(e, t) {
          const n = ee(),
            { COMPARE_MAP: r } = n;
          let s = r.get(t);
          return s !== void 0
            ? s
            : e.sharedKeyStr === t
            ? n.isStateChanged
            : ((s = xc(e, t)), r.set(t, s), s && (n.isStateChanged = !0), s);
        }
        function Tr(e, t, n) {
          if (t.includes(n) && ot(e, n)) return !0;
          let r = !1;
          for (const s of t) s.startsWith(n) && ot(e, s) && (r = !0);
          return r;
        }
        function Hc() {
          const e = ee();
          e.COMPARE_MAP.clear(), (e.isStateChanged = !1);
        }
        function Zt(e = !0) {
          const t = P();
          t.isIgnore = e;
        }
        function ve(e, t) {
          const { fnCtx: n, depKeys: r, isIgnore: s } = rt(),
            o = t.specificCtx || n;
          if (!o) {
            Ht.current()(e);
            return;
          }
          const { DEPKEY_FNKEYS_MAP: c } = P(),
            { belongCtx: a, sharedKey: u } = t;
          if ((u && T(o.depSharedKeys, u), n && a)) {
            (n.isFirstLevel = !1), a.isAsync && (n.isAsync = !0);
            const l = a.fnKey;
            T(o.prevLevelFnKeys, l), T(a.nextLevelFnKeys, n.fnKey);
          }
          const { fnKey: i } = o;
          e.forEach((l) => {
            if (Co === l || s) return;
            n && T(r, l);
            const f = Re(c, l, []);
            T(f, i);
          });
        }
        function Qt(e) {
          e && e.depKeys.forEach((t) => ve([t], { specificCtx: e }));
        }
        function br(e) {
          const { FNKEY_HOOK_CTX_MAP: t, UNMOUNT_INFO_MAP: n } = P(),
            { fnKey: r } = e;
          t.set(r, e), mr(e, !0);
          let s = n.get(r);
          s ? (s.c = 2) : ((s = { c: 1, t: Date.now(), prev: 0 }), n.set(r, s));
          const { c: o } = s;
          if (o === 2) {
            const c = ie(r);
            Qt(c);
          }
        }
        function Ir(e) {
          let t = '';
          return (
            e.depSharedKeys.forEach((n) => {
              var s;
              const r = ((s = we(n)) == null ? void 0 : s.ver) || 0;
              t += `${r}_`;
            }),
            t
          );
        }
        function jc(e, t, n) {
          const { DEPKEY_FNKEYS_MAP: r } = P(),
            s = r.get(t) || [],
            o = [],
            c = [];
          return (
            s.forEach((a) => {
              const u = ie(a);
              if (u && Tr(e, u.depKeys, t)) {
                u.isFirstLevel && o.push(a), u.isAsync && c.push(a);
                const i = n[a];
                n[a] = i === void 0 ? 1 : i + 1;
              }
            }),
            { firstLevelFnKeys: o, asyncFnKeys: c }
          );
        }
        function qt(e) {
          Cc(e), mr(e);
        }
        function $c() {
          const { FNKEY_HOOK_CTX_MAP: e } = P();
          if (e.size >= Uo) {
            const t = Date.now();
            e.forEach((n) => {
              const { mountStatus: r, createTime: s, fnKey: o } = n;
              [ze, $n].includes(r) && t - s > jn && (qt(n), e.delete(o));
            });
          }
        }
        function en(e, t, n, r, s, o = !1, c = !1) {
          const a = Z();
          a.latest = { sharedKey: e, val: t, stateOrResult: n, depKey: r, keyPath: s, isDerivedResult: o, isDerivedAtom: c };
        }
        function Wc() {
          return Z().latest;
        }
        function Mr(e) {
          const { KEY_DYNAMIC_CTX_MAP: t, KEY_CTX_MAP: n } = Z();
          return e ? t : n;
        }
        function Fr() {
          return me('changing shared state is invalid'), !0;
        }
        function ct(e, t, n, r, s) {
          return r === Te ? (e ? t : !1) : r === je ? n : s;
        }
        function tn(e, t, n) {
          e.replaceValue(ct(e.keyPath.length === 0, t, n, e.key, e.value));
        }
        function Xc(e) {
          let t = {};
          const { rawState: n, sharedKey: r, forAtom: s, onRead: o, isPrimitive: c, stopDepth: a } = e,
            u = (l, f) => {
              const d = B(l, r);
              ve([d], { sharedKey: r }), Jt([d]), en(r, f, t, d, l);
            };
          if (Oo)
            t = (0, j.OA)(n, {
              customKeys: We,
              onOperate: (l) => {
                const { isBuiltInFnKey: f, isCustom: d } = l;
                if (d) return tn(l, s, r);
                if (!f) {
                  const { fullKeyPath: y } = l,
                    m = st(l, o);
                  u(y, m);
                }
              },
              compareVer: !0,
            });
          else {
            const l = (f, d, y) =>
              Me(f, {
                set: Fr,
                get: (m, p) => {
                  const g = m[p];
                  if (We.includes(p)) return ct(d === 1, s, r, p, g);
                  const E = ke(p, g, { isChanged: !1, parentKeyPath: y });
                  if (d < a && fe(g)) return l(g, d + 1, E.fullKeyPath);
                  const S = st(E, o);
                  return u(E.fullKeyPath, S), S;
                },
              });
            t = l(n, 1, []);
          }
          let i = t;
          return s && (c ? (i = n.val) : (i = ue(n, { set: Fr, get: (l, f) => t.val[f] }))), hc(r, t), { sharedRoot: t, sharedState: i };
        }
        var wr = null;
        function nn() {
          return wr;
        }
        function zc(e, t) {
          const n = x();
          let r = n.globalEmpty;
          if (!r) {
            const { state: s } = t({ apiCtx: e, rawState: {}, forGlobal: !0, stateType: J.GLOGAL_EMPTY }),
              o = U(s);
            (n.globalEmpty = s), (n.globalEmptyInternal = o);
          }
          return (wr = r), r;
        }
        function rn(e) {
          const { GID_INSKEYS_MAP: t } = P();
          return Re(t, e, []);
        }
        function Jc() {
          return x().globalEmptyInternal;
        }
        function kr(e, t) {
          if (!e) return;
          const n = rn(e);
          T(n, t);
        }
        function Zc(e, t) {
          if (!e) return;
          const n = rn(e);
          $(n, t);
        }
        var { REACTIVE: Qc } = G,
          xe = new Map(),
          at = new Map(),
          sn = new Map();
        function qc(e) {
          return !!(e && !e.expired && e.modified);
        }
        function ea(e) {
          const { sharedKey: t } = e;
          (e.expired = !0), ne.del(e.key);
          const n = Le.current(t);
          Le.del(t);
          const r = sn.get(t);
          return r && (r.forEach((s) => at.delete(s)), (r.length = 0)), e.finish(null, { desc: n });
        }
        function ta(e, t) {
          const n = sn.get(e);
          n && ($(n, t), at.delete(t));
        }
        function Cr(e, t) {
          const n = te(e);
          return t && Le.set(n, t), n;
        }
        function on(e, t) {
          const n = te(e);
          Ue(n, t);
        }
        function na() {
          const e = ne.current();
          e.isTop && Ue(e.sharedKey, e.desc);
        }
        function Ue(e, t) {
          const n = xe.get(e);
          qc(n) && (t && Le.set(e, t), ea(n));
        }
        function ra(e) {
          const t = xe.get(e) || Ce;
          t.expired = !0;
        }
        function sa(e, t) {
          const n = xe.get(e) || Ce;
          (n.modified = !0), n.nextTickFlush(t);
        }
        function Or(e, t) {
          const { from: n = Qc, onRead: r } = t,
            { finish: s, draftRoot: o } = e.setStateFactory({ isReactive: !0, from: n, handleCbReturn: !1, enableDep: !0, onRead: r }),
            c = fr(o, t, s);
          return (
            (c.key = Dc()),
            (c.sharedKey = e.sharedKey),
            (c.nextTickFlush = (a) => {
              const { expired: u, hasFlushTask: i } = c;
              u || (c.data = [a]),
                i
                  || ((c.hasFlushTask = !0),
                  Promise.resolve().then(() => {
                    const [l] = c.data;
                    Ue(e.sharedKey, l);
                  }));
            }),
            c
          );
        }
        function Lr(e, t, n) {
          const { sharedKey: r } = e,
            { insKey: s = 0 } = t;
          let o = xe.get(r) || Ce,
            c = o;
          if (
            (o.expired
              && ((o = Or(e, { isTop: !0 })), xe.set(r, o), ne.set(o.key, o), ne.markUsing(o.key), (o.fnKey = Oe.current()), (c = o)),
            s && ((c = at.get(s) || Ce), c.expired))
          ) {
            (c = Or(e, t)), at.set(s, c);
            const u = Re(sn, r, []);
            T(u, s);
          }
          const { draft: a } = c;
          return { val: n ? a.val : a, meta: c };
        }
        function cn(e, t) {
          let n = {},
            r = {};
          const { rawState: s, deep: o, forAtom: c, isPrimitive: a, sharedKey: u } = e;
          if (_t(o)) {
            const i = { [je]: u, [Te]: c },
              l = (d, y, m) => {
                const { val: p } = Lr(e, t, d);
                return (p[y] = m), !0;
              },
              f = (d, y, m) => {
                const p = m[y];
                if (p !== void 0) return p;
                const { val: g, meta: E } = Lr(e, t, d);
                return Hn === y ? E : g[y];
              };
            if (((n = new Proxy(s, { set: (d, y, m) => l(!1, y, m), get: (d, y) => f(!1, y, i) })), (r = n), c)) {
              const d = V(b({}, i), { [Te]: !1 });
              r = a ? s.val : new Proxy(s.val, { set: (y, m, p) => l(!0, m, p), get: (y, m) => f(!0, m, d) });
            }
          } else (n = s), (r = s.val);
          return { draftRoot: n, draft: r };
        }
        function oa(e) {
          const { UNMOUNT_INFO_MAP: t } = ar(),
            { insKey: n, readMap: r, internal: s } = e;
          s.mapInsCtx(e, n);
          let o = t.get(n);
          o ? ((o.c = 2), (o.prev = n - 1)) : ((o = { c: 1, t: Date.now(), prev: 0 }), t.set(n, o));
          const { c } = o;
          c === 2
            && Object.keys(r).forEach((a) => {
              s.recordDep(a, n);
            });
        }
        function Nr(e) {
          const { readMap: t, insKey: n, internal: r } = e;
          Object.keys(t).forEach((s) => r.delDep(s, n)), r.delInsCtx(n);
        }
        function ca(e) {
          const { canCollect: t, isFirstRender: n, currentDepKeys: r } = e;
          if (!t) {
            n && (e.depKeys = r.slice());
            return;
          }
          e.depKeys = r.slice();
        }
        function aa(e) {
          const { canCollect: t } = e;
          t && ((e.readMap = {}), (e.delReadMap = {}), (e.depKeys = e.currentDepKeys.slice()), (e.currentDepKeys.length = 0));
        }
        function Pr(e, t, n) {
          if (!e.canCollect) return;
          const { parentType: r, rawVal: s } = n,
            o = Gc(s);
          o && Bc(e.internal.level1ArrKeys, t.depKey), e.recordDep(t, r, o);
        }
        function an(e, t) {
          const { depKeys: n, currentDepKeys: r, fixedDepKeys: s } = e;
          return (t ? r : n).concat(s);
        }
        function ua(e) {
          if (!e) return;
          const { updater: t, mountStatus: n, createTime: r } = e;
          if (n === ze) {
            Date.now() - r > jn ? Nr(e) : (e.needEFUpdate = !0);
            return;
          }
          t();
        }
        function xr(e) {
          const { internal: t, isReactive: n, insKey: r } = e,
            { rawState: s, isDeep: o, sharedKey: c, onRead: a, forAtom: u } = t;
          if (o) {
            const i = (l) => {
              const { isBuiltInFnKey: f, key: d } = l;
              if (f) return;
              if (At(d)) return tn(l, u, c);
              const { fullKeyPath: y, keyPath: m, parentType: p } = l,
                g = st(l, a),
                S = { depKey: B(y, c), keyPath: y, parentKeyPath: m, sharedKey: c };
              Pr(e, S, { parentType: p, rawVal: g });
            };
            if (n) {
              const { draft: l, draftRoot: f } = cn(t, { onRead: i, insKey: r });
              (e.proxyState = f), (e.proxyStateVal = l);
            } else e.proxyState = (0, j.OA)(s, { onOperate: i, compareVer: !0 });
          } else
            e.proxyState = ue(s, {
              set: () => (me('changing shared state is invalid'), !0),
              get: (i, l) => {
                const f = i[l];
                if (At(l)) return ct(!0, u, c, l, f);
                const d = st(ke(l, f, { isChanged: !1, parentKeyPath: [] }), a),
                  y = Dt(l, c),
                  m = fe(i) ? Qe : Bo;
                return Pr(e, { depKey: y, keyPath: [l], sharedKey: c }, { parentType: m, rawVal: d }), d;
              },
            });
        }
        function ia(e) {
          var k;
          const {
              updater: t,
              sharedState: n,
              id: r = '',
              globalId: s = '',
              collectType: o = 'every',
              deps: c,
              pure: a = !0,
              arrDep: u = !0,
              isReactive: i = !1,
            } = e,
            l = u && (k = e.arrIndexDep) != null ? k : !0,
            f = U(n);
          if (!f) throw new Error('ERR_OBJ_NOT_SHARED: input object is not a result returned by share api');
          const d = Sc(),
            { rawState: y, isDeep: m, ver: p, ruleConf: g, level1ArrKeys: E, forAtom: S, sharedKey: D, sharedKeyStr: I, snap: R } = f,
            { stopDepInfo: A } = g,
            _ = {
              readMap: {},
              delReadMap: {},
              pure: a,
              depKeys: [],
              fixedDepKeys: [],
              currentDepKeys: [],
              isDeep: m,
              isReactive: i,
              insKey: d,
              internal: f,
              rawState: y,
              sharedState: n,
              sharedKey: D,
              proxyState: {},
              proxyStateVal: {},
              updater: t,
              mountStatus: ze,
              renderStatus: be,
              needEFUpdate: !1,
              createTime: Date.now(),
              rootVal: null,
              ver: p,
              id: r,
              globalId: s,
              collectType: o,
              canCollect: o !== 'no',
              isFirstRender: !0,
              subscribe: (v) => {
                v();
              },
              extra: {},
              getDeps: () => an(_, !0),
              renderInfo: {
                setDraft: f.insSetDraft,
                time: Date.now(),
                sn: 0,
                snap: R,
                insKey: d,
                getDeps: () => an(_, !0),
                getPrevDeps: () => an(_, !1),
              },
              recordDep: (v, M, K) => {
                let h = v.depKey;
                Rr(v, {
                  stopDepInfo: A,
                  level1ArrKeys: E,
                  recordCb: (Ye) => {
                    h = Ye;
                  },
                });
                const { renderStatus: O, fixedDepKeys: W } = _;
                if (O === wt) return;
                const { readMap: z, insKey: Pf, currentDepKeys: Mn, delReadMap: so } = _;
                ve([h], {}), Lc() && ($(Mn, h), T(_.fixedDepKeys, h));
                const oo = () => {
                  (z[h] = 1), f.recordDep(h, Pf), W.includes(h) || T(Mn, h);
                };
                if (!z[h] && !so[h]) {
                  const { parentKeyPath: Ye } = v;
                  if (a && M === Qe && Ye) {
                    const Et = Ye.length ? B(Ye, D) : I;
                    z[Et] && (delete z[Et], (so[Et] = 1), $(Mn, Et));
                  }
                  const co = Kr(M);
                  if (co) {
                    l && oo();
                    return;
                  }
                  (!K || (!co && u)) && oo();
                }
              },
            };
          if ((s && kr(s, d), xr(_), f.mapInsCtx(_, d), f.recordId(r, d), w(c))) {
            const v = S ? _.proxyState.val : _.proxyState,
              M = Y(c, v),
              K = _.getDeps().slice();
            M.includes(v) && K.push(f.rootValKey), (_.fixedDepKeys = K);
          }
          return _;
        }
        function Ur(e) {
          const { result: t, forAtom: n } = e;
          e.proxyResult = ue(t, {
            set: () => (me('changing derived result is invalid'), !1),
            get: (r, s) => ($e === s ? n : (be === e.renderStatus && Qt(e), t[s])),
          });
        }
        function fa(e) {
          const { proxyState: t, internal: n, renderInfo: r, canCollect: s, isReactive: o } = e,
            { sharedKey: c, sharedKeyStr: a, insSetState: u, forAtom: i } = n;
          (r.snap = n.snap), (r.time = Date.now());
          const l = i ? t.val : t;
          return (
            e.isFirstRender && ((e.rootVal = l), jt.set(e.rootVal, e)),
            !i && s && e.recordDep({ depKey: a, keyPath: [], sharedKey: c }, Qe),
            [o ? t : l, u, r]
          );
        }
        function la(e, t) {
          if (t && !Ie(e)) throw new Error('useAtom only accept atom');
        }
        function da(e) {
          const {
            ver: t,
            internal: { ver: n },
          } = e;
          t !== n && ((e.ver = n), xr(e));
        }
        function pa(e) {
          e.mountStatus = Je;
          const { id: t, globalId: n, insKey: r } = e;
          e.internal.recordId(t, r), kr(n, r), oa(e);
        }
        function ya(e) {
          e.mountStatus = $n;
          const { id: t, globalId: n, insKey: r, sharedKey: s } = e;
          e.internal.delId(t, r), Zc(n, r), Nr(e), ta(s, r);
        }
        function ha(e, t) {
          const n = U(t).sharedKey;
          return e.internal.sharedKey !== n;
        }
        function ut(e, t, n, r) {
          if (x().isRootRender)
            try {
              const s = r || n;
              e.react.useSyncExternalStore(t, n, s);
            } catch (s) {
              console.error(s);
            }
        }
        var ga = null;
        function Vr(e, t, n) {
          const { hookImpl: r, react: s } = e,
            o = r.useForceUpdate(),
            c = s.useRef({ ctx: ga });
          let a = c.current.ctx;
          return (!a || ha(a, t)) && ((a = ia(b({ updater: o, sharedState: t }, n))), (c.current.ctx = a)), a;
        }
        function Yr(e, t) {
          e.react.useEffect(
            () => (
              (t.isFirstRender = !1),
              jt.del(t.rootVal),
              t.collectType === 'first' && (t.canCollect = !1),
              t.needEFUpdate && ((t.needEFUpdate = !1), t.updater()),
              pa(t),
              () => {
                ya(t);
              }
            ),
            [t],
          );
        }
        function ma(e, t, n, r) {
          (n.renderStatus = be),
            aa(n),
            ut(e, n.subscribe, () => U(t).snap),
            e.react.useEffect(() => {
              (n.renderStatus = wt), (n.isFirstRender = !1), ca(n);
            });
        }
        function un(e, t, n = {}) {
          const r = Vr(e, t, n);
          return ut(e, r.subscribe, () => U(t).snap), Yr(e, r), r;
        }
        function it(e, t, n = {}) {
          const { forAtom: r } = n;
          la(t, r);
          const s = Vr(e, t, n);
          return ma(e, t, s, n), Yr(e, s), da(s), { tuple: fa(s), insCtx: s };
        }
        function Gr(e, t) {
          const { forAtom: n, label: r, strict: s = !1 } = t || {};
          let o;
          if ((typeof e == 'number' ? (o = we(e)) : (o = U(e)), !o && e)) {
            const a = e[Hn];
            o = we(a == null ? void 0 : a.sharedKey);
          }
          let c = r ? `[[${r}]] err:` : 'err:';
          if (!o)
            if (s) oe(`${c} not a valid shared or atom`, { throwErr: !0 });
            else return null;
          return (
            n !== void 0
              && (n && !o.forAtom && oe(`${c} expect a shared but recived a atom`, { throwErr: !0 }),
              !n && o.forAtom && oe(`${c} expect a atom but recived a shared`, { throwErr: !0 })),
            o
          );
        }
        function le(e, t) {
          return Gr(e, V(b({}, t || {}), { strict: !0 }));
        }
        var { MUTATE: Ea, LOADING: va } = G,
          { GLOGAL_LOADING: Sa, PRIVATE_LOADING: Aa } = J,
          { PRIVATE: Ka, GLOBAL: Da } = Mt,
          Br = {},
          _a = {},
          Ra = { time: 0, sn: 0, getDeps: ge, getPrevDeps: ge, insKey: 0, setDraft: F },
          Ta = [de(Br, _a, Ea), F, Ra];
        function ba(e, t) {
          const { internal: n, apiCtx: r } = t,
            { mutateFnDict: s, moduleName: o } = n,
            c = {};
          Object.keys(s).forEach((i) => {
            c[i] = { loading: !1, err: null, ok: !0 };
          });
          const a = o ? `${o}@Loading` : '';
          return e({ apiCtx: r, rawState: c, isLoading: !0, stateType: Aa }, { moduleName: a }).state;
        }
        var Hr = null;
        function Ia() {
          return Hr;
        }
        function jr() {
          return x().globalLoadingInternal;
        }
        function Ma(e, t) {
          const n = x();
          let r = n.globalLoading;
          if (!r) {
            const { state: s } = t({ apiCtx: e, rawState: {}, stateType: Sa }, { moduleName: No }),
              o = U(s);
            (n.globalLoadingInternal = o), (n.globalLoading = s);
          }
          return (Hr = r), r;
        }
        function fn(e, t) {
          let n = t;
          return At(t) && (n = t.toString()), `${e}>${n}`;
        }
        function $r(e, t, n) {
          if (!t) return;
          const { loadingInternal: r } = e;
          r.innerSetState(
            (s) => {
              s[t] = n;
            },
            { from: va },
          ),
            n.err && (nr(e, It.ON_ERROR_OCCURED, { err: n.err }), console.error(n.err));
        }
        function de(e, t, n) {
          let r = e[n];
          return (
            r
              || ((r = ue(t, {
                get(s, o) {
                  const c = fn(n, o);
                  return s[c] || { loading: !1, ok: !0, err: null };
                },
              })),
              (e[n] = r)),
            r
          );
        }
        function ft(e, t) {
          const { internal: n, from: r } = t,
            { stateType: s, recordLoading: o } = n,
            c = J.USER_STATE === s;
          let a = de(Br, {}, r),
            u = {};
          if (c)
            if (Ka === o)
              (u = n.extra.loadingProxy),
                u || ((u = ba(e, t)), (n.extra.loadingProxy = u), (n.loadingInternal = U(u))),
                (a = de(n.extra, u, r));
            else if (Da === o) {
              const i = jr();
              (u = Ia()), (n.loadingInternal = i), (a = de(i.extra, u, r));
            } else u = nn();
          else (u = n.sharedState), (a = de(n.extra, u, r));
          return { loadingState: a, loadingProxy: u };
        }
        function Wr(e, t) {
          if (!fe(t)) return e;
          const n = Object.keys(t);
          if (!n.length) return e;
          const r = t[n[0]];
          return r.__sharedKey ? V(b({}, e), { internal: le(r.__sharedKey) }) : e;
        }
        function Xr(e, t) {
          const { internal: n, from: r, apiCtx: s } = t,
            { stateType: o } = n,
            c = J.USER_STATE === o;
          let a = () => Ta;
          return (
            c
              && (a = (u) => {
                const i = Wr(t, u),
                  l = ft(e, i).loadingProxy,
                  {
                    insCtx: { proxyState: f, internal: d, extra: y, renderInfo: m },
                  } = it(s, l);
                return [de(y, f, r), d.setState, m];
              }),
            {
              useLoading: a,
              getLoading: (u) => {
                const i = Wr(t, u);
                return ft(e, i).loadingState;
              },
            }
          );
        }
        function lt(e) {
          const t = lr();
          return Object.assign(t, e || {});
        }
        function Se() {
          const e = P(),
            { runningFnKey: t } = e;
          if (!t) return [];
          const n = ie(t);
          let r = [];
          if (n) {
            const { depKeys: s } = e,
              { depKeys: o } = n,
              c = {};
            s.forEach((u) => (c[u] = 1)),
              s.forEach((u) => {
                const i = Cn(c, u);
                i && i !== u && delete c[i];
              }),
              Object.keys(c).forEach((u) => T(o, u)),
              (r = o.slice());
          }
          return (e.runningFnKey = ''), (e.depKeys = []), (e.runningSharedKey = 0), r;
        }
        function zr(e, t) {
          const n = P();
          (n.runningFnKey = e), (n.runningSharedKey = t), (n.isIgnore = !1);
        }
        function Jr(e, t) {
          const { specificProps: n, fnCtxBase: r } = t,
            { scopeType: s } = n,
            o = Er(e, s),
            c = b({ fn: e, fnKey: o }, n),
            a = r ? Object.assign(r, c) : lt(c);
          return Wt(s).set(o, a), a;
        }
        function ln(e) {
          var s;
          const { FNKEY_HOOK_CTX_MAP: t, UNMOUNT_INFO_MAP: n } = P(),
            { fnKey: r } = e;
          qt(e), (e.extra.deferedWatch = null), t.delete(r), ((s = n.get(r)) == null ? void 0 : s.c) === 2 && n.delete(r), $c();
        }
        function Zr(e) {
          const { DEPKEY_COMPUTING_FNKEYS_MAP: t } = P(),
            { prevLevelFnKeys: n, depKeys: r } = e;
          let s = !1;
          for (const o of r) {
            const c = t.get(o) || [];
            if (Ge(c, n)) {
              s = !0;
              break;
            }
          }
          return s;
        }
        function Fa(e, t = !0, n = Ee) {
          return e.map((r) => {
            const [s, o] = r.split('/'),
              c = o.split(Ee);
            return `${t ? `${we(Number(s)).usefulName}/` : ''}${c.join(n)}`;
          });
        }
        var dt = new Map(),
          pt = { WATCH: '1', MUTATE: '2' },
          wa = { [pt.WATCH]: 'watch', [pt.MUTATE]: 'mutate fn or task' };
        function ka(e = 0) {
          return { sn: e, descs: [], errs: [], timer: null, cycle: [] };
        }
        function Qr(e, t, n) {
          const r = new Error(`DEAD_CYCLE: module(${e}) found mutate fn(${n}) in these dead cycle fns [${t.join(',')}]`);
          return (r.cause = 'DeadCycle'), (r.data = t), r;
        }
        function Ca(e) {
          dt.delete(e);
        }
        function Oa(e, t, n, r) {
          const s = wa[r],
            { desc: o, task: c, fn: a, isFake: u } = t.subFnInfo,
            i = o ? `(${o})` : '',
            l = `DEAD_CYCLE: found reactive object in ${s}${i} cb is changing module(${e.usefulName})'s some of these dep keys(${Fa(
              n,
              !1,
              '.',
            )}), it will cause a infinity loop call!`,
            f = u ? t.fn : c || a;
          return {
            err: new Error(`[only-dev-mode alert] ${l}`),
            tipFn: () =>
              console.error(
                ` ${l} open the stack to find the below fn: 
`,
                f,
              ),
          };
        }
        function La(e, t, n) {
          if (e && n) {
            const { usefulName: r } = e,
              s = Re(dt, r, ka(t));
            s.sn !== t && ((s.descs = []), (s.errs = []));
            const { descs: o } = s;
            if (o.length > 1 && o[0] === n) {
              const c = o.slice();
              throw ((s.cycle = c), (o.length = 0), Qr(r, c, n));
            }
            T(o, n);
          }
        }
        function dn(e, t) {
          t.tipFn(), oe(t.err, { logErr: !1, throwErr: !1, alertErr: e.alertDeadCycleErr });
        }
        function pe(e, t, n) {
          const { depKeys: r, subFnInfo: s } = t;
          let o = t.depKeys,
            c = n;
          r.length > n.length && ((o = n), (c = r));
          let a = !1;
          if (Ge(o, c)) {
            const u = s.desc ? pt.MUTATE : pt.WATCH,
              i = Oa(e, t, n, u);
            dn(e, i), (t.dcErrorInfo = i), (a = !0);
          }
          return a;
        }
        function Na(e, t) {
          const n = dt.get(e);
          return !n || !n.cycle.includes(t) ? { isIn: !1, cycle: [] } : { isIn: !0, cycle: n.cycle };
        }
        function Pa(e, t, n = !0) {
          const r = dt.get(e);
          if (!r) return;
          const { timer: s, errs: o } = r;
          o.push(t),
            s && clearTimeout(s),
            (r.timer = setTimeout(() => {
              let c = null;
              for (const a of o) c ? a.data.length > c.data.length && (c = a) : (c = a);
              c && oe(c, { alertErr: n }), (o.length = 0);
            }, 0));
        }
        function pn(e, t = 0) {
          const n = ie(e);
          n && (n.showLoading && (n.setLoading(!0), n.updater()), t && (n.remainRunCount += t));
        }
        var { MAY_TRANSFER: xa } = Ze;
        function Ua(e, t) {
          const { isFirstCall: n = !1, triggerReasons: r = [], sn: s = 0, from: o, internal: c = yr, desc: a, fromFnKey: u } = t;
          if (e.dcErrorInfo.err) {
            dn(c, e.dcErrorInfo);
            return;
          }
          if (e.fnKey === u) {
            pe(c, e, e.depKeys);
            return;
          }
          if (e.isSimpleWatch || !e.checkDeadCycle) return e.fn({ isFirstCall: n, triggerReasons: r, sn: s });
          if ((G.MUTATE === o && La(c, s, a), e.isRunning && pe(c, e, t.depKeys || []))) return;
          const i = ne.current();
          if (
            (i.fnKey === e.fnKey && pe(c, e, i.writeKeys))
            || (Ue(i.sharedKey, i.desc), e.isRunning === !0 && i.isTop && pe(c, e, i.writeKeys))
          )
            return;
          (e.isRunning = !0), Oe.set(e.fnKey);
          const f = e.fn({ isFirstCall: n, triggerReasons: r, sn: s });
          Oe.del();
          const d = ne.current();
          if (
            !(d.isTop && d.fnKey === e.fnKey && pe(c, e, d.writeKeys))
            && !(f && f.task && d.from === G.MUTATE && pe(c, e, e.subFnInfo.writeKeys))
          )
            return (e.isRunning = !1), f;
        }
        function Ve(e, t = {}) {
          const {
              isFirstCall: n = !1,
              forceFn: r = !1,
              forceTask: s = !1,
              throwErr: o = !1,
              triggerReasons: c = [],
              sn: a = 0,
              err: u,
              unbox: i = !1,
              internal: l = yr,
            } = t,
            f = ie(e),
            d = (K = null) => {
              if (K && o) throw K;
              const h = f || hr;
              return i ? [h.result.val, K] : [h.result, K];
            };
          if (!f) return d(new Error(`not a valid watch or derive cb for key ${e}`));
          if (f.fnType === Wn) return Ua(f, t);
          const { isAsync: y, fn: m, task: p, isAsyncTransfer: g, forAtom: E, result: S, depKeys: D } = f;
          f.remainRunCount > 0 && (f.remainRunCount -= 1);
          const I = (K) => {
              const h = E ? { val: K } : K;
              !f.returnUpstreamResult && h && Object.assign(f.result, h), (f.shouldReplaceResult = !0);
            },
            R = () => {
              (f.renderInfo.sn = a), f.updater();
            },
            A = (K) => {
              const { data: h, err: O = null } = K;
              O
                ? f.setLoading(!1, O)
                : (I(h), n ? y && f.status.loading && !Zr(f) && f.setLoading(!1, O) : f.remainRunCount === 0 && f.setLoading(!1, O)),
                R(),
                f.nextLevelFnKeys.forEach((W) => {
                  Ve(W, { isFirstCall: n, sn: a, triggerReasons: c, err: O });
                });
            },
            _ = E ? S.val : S,
            k = Y(f.deps),
            v = { isFirstCall: n, prevResult: _, triggerReasons: c, input: k, sn: a };
          if (!y || r || (y && !p)) {
            const K = m(v);
            return A({ data: K }), d();
          }
          if ((y && n && f.nextLevelFnKeys.forEach((K) => pn(K, 0)), g)) return A({ err: u }), d();
          if (f.asyncType === xa) {
            const K = m(v);
            return A({ data: K }), d();
          }
          if (p) {
            let K = po;
            return (
              n ? (D.forEach((h) => wc(h, e)), (K = () => D.forEach((h) => kc(h, e)))) : s && f.nextLevelFnKeys.forEach((h) => pn(h)),
              Promise.resolve(() => {
                const h = p(v);
                return Kt(h) ? h : (oe('ERR_NON_FN: derive task arg should be async function!', { throwErr: o }), null);
              })
                .then((h) => h())
                .then((h) => (K(), A({ data: h }), d()))
                .catch((h) => {
                  if ((K(), A({ err: h }), o)) throw h;
                  return rr(l, h), d(h);
                })
            );
          }
          return d(u);
        }
        function yt(e, t) {
          const n = Pe(e);
          if (!n) throw new Error('[Helux]: not a derived result');
          return Ve(n.fnKey, b({}, t || {}));
        }
        function Va(e, t) {
          return yt(e, { forceFn: !0, throwErr: t });
        }
        function Ya(e, t) {
          return Promise.resolve(yt(e, { forceTask: !0, throwErr: t }));
        }
        function Ga(e, t) {
          return yt(e, { forceFn: !0, throwErr: t, unbox: !0 });
        }
        function Ba(e, t) {
          return Promise.resolve(yt(e, { forceTask: !0, throwErr: t, unbox: !0 }));
        }
        function Ha(e) {
          const t = Pe(e);
          return t ? t.status : { loading: !1, err: null, ok: !0 };
        }
        function yn(e, t, n) {
          const r = e.get(t);
          r && ((r.renderInfo.sn = n), ua(r));
        }
        function ja(e) {
          const { mutateCtx: t, internal: n } = e,
            { ids: r, globalIds: s, depKeys: o, triggerReasons: c, isFirstCall: a, from: u, sn: i, desc: l, fnKey: f } = t,
            { key2InsKeys: d, id2InsKeys: y, insCtxMap: m, rootValKey: p } = n;
          let g = [],
            E = [],
            S = [],
            D = [];
          const I = {};
          if (a) {
            const A = Se();
            Ne.set(A);
          }
          const R = (A) => {
            if (!ot(n, A)) return;
            const _ = d[A] || [],
              k = [];
            for (const K of _) {
              if (g.includes(K)) continue;
              const h = m.get(K);
              if (!h) continue;
              const O = h.getDeps();
              if (O[0] === p) {
                ot(n, p) && k.push(K);
                continue;
              }
              Tr(n, O, A) && k.push(K);
            }
            g = g.concat(k);
            const { firstLevelFnKeys: v, asyncFnKeys: M } = jc(n, A, I);
            (S = S.concat(v)), (D = D.concat(M));
          };
          if (
            (o.forEach((A) => R(A)),
            o.includes(p) || R(p),
            Hc(),
            r.forEach((A) => {
              g = g.concat(y[A] || []);
            }),
            s.forEach((A) => {
              rn(A).forEach((_) => T(E, _));
            }),
            (g = ye(g)),
            (S = ye(S)),
            (D = ye(D)),
            D.forEach((A) => pn(A, I[A])),
            S.forEach((A) => Ve(A, { depKeys: o, sn: i, from: u, triggerReasons: c, internal: n, desc: l, isFirstCall: a, fromFnKey: f })),
            g.forEach((A) => yn(m, A, i)),
            E.length)
          ) {
            const A = Jc().insCtxMap;
            E.forEach((_) => yn(A, _, i));
          }
        }
        function $a(e) {
          const { state: t, internal: n, mutateCtx: r } = e,
            { rawState: s, isDeep: o, ver: c, snap: a } = n;
          o ? ((n.prevSnap = c === 0 ? b({}, a) : a), (n.snap = t), Object.assign(s, t)) : (n.snap = b({}, s)),
            (n.ver += 1),
            (n.sn = r.sn),
            ja(e);
        }
        var { MUTATE: Wa } = G;
        function qr(e, t) {
          const { writeKey: n, ids: r, internal: s, opParams: o } = t,
            { snap: c } = s,
            { fullKeyPath: a, value: u } = o;
          Object.keys(e).forEach((i) => {
            n.startsWith(i) && ce(c, a) !== u && e[i].forEach((l) => T(r, l));
          });
        }
        function es(e, t) {
          const { isChanged: n, fullKeyPath: r, keyPath: s, parentType: o, value: c } = e,
            { internal: a, mutateCtx: u } = t,
            { arrKeyDict: i, isReactive: l, readKeys: f } = u,
            { sharedKey: d } = a,
            y = Kr(o),
            m = ne.current();
          if (e.op === 'get') {
            y && (i[B(s, d)] = 1);
            const h = B(r, d);
            (f[h] = 1),
              u.enableDep
                && (u.onRead && u.onRead(e),
                m.onRead ? m.onRead(e) : (rt().fnCtx && ve([h], { sharedKey: d }), l && (Jt([h]), en(d, c, a.sharedState, h, r))));
            return;
          }
          if (!n) return;
          const { moduleName: p, ruleConf: g, level1ArrKeys: E } = a,
            { writeKeyPathInfo: S, ids: D, globalIds: I, writeKeys: R } = u,
            A = B(r, d);
          if ((m.key && (m.isTop ? T(m.writeKeys, A) : m.from === Wa && T(Xt(m.fnKey).subFnInfo.writeKeys || [], A)), y)) {
            const h = B(s, d);
            (S[h] = { sharedKey: d, moduleName: p, keyPath: s }), (R[h] = 1);
          }
          const { hasIds: _, hasGlobalIds: k, stopDepInfo: v } = g;
          S[A] = { sharedKey: d, moduleName: p, keyPath: r };
          const M = Cn(i, A);
          M && (R[M] = 1),
            Rr(
              { sharedKey: d, keyPath: r, depKey: A },
              {
                stopDepInfo: v,
                level1ArrKeys: E,
                recordCb: (h) => {
                  R[h] = 1;
                },
              },
            ) || (R[A] = 1),
            _ && qr(g.idsDict, { ids: D, writeKey: A, internal: a, opParams: e }),
            k && qr(g.globalIdsDict, { ids: I, writeKey: A, internal: a, opParams: e }),
            l ? sa(d, m.desc) : ra(d);
        }
        function ts(e, t) {
          Object.keys(t).forEach((n) => {
            e[n] = t[n];
          });
        }
        function ht(e, t) {
          if (!t) return e;
          Zt(!0);
          const n = e.val;
          return Zt(!1), n;
        }
        function ns(e) {
          const { partial: t, forAtom: n, draftRoot: r, draftNode: s } = e;
          if (!t) return;
          if (!n) {
            fe(t) && ts(s, t);
            return;
          }
          const o = t.val;
          if (fe(s)) {
            fe(o) ? ts(s, o) : console.warn('dict atom deny to handle a non-dict returned value!');
            return;
          }
          r.val = o;
        }
        function Xa(e, t) {
          const { internal: n, mutateCtx: r } = e,
            s = ht(t, n.forAtom),
            { from: o, sn: c, desc: a } = r;
          n.before({ from: o, draftRoot: t, draft: s, desc: a, sn: c }), Qo(n, t, s, c);
        }
        function rs(e, t, n, r) {
          const { mutateCtx: s, internal: o } = e,
            { writeKeys: c, writeKeyPathInfo: a, handleCbReturn: u } = s,
            { forAtom: i } = o;
          u && ns({ partial: r, forAtom: i, draftRoot: t, draftNode: n }),
            Xa(e, t),
            (s.depKeys = Object.keys(c)),
            nt.del(),
            $t.del(),
            (e.state = (0, j._x)(t)),
            e.state !== o.rawState && ((s.triggerReasons = Object.values(a)), $a(e), nc(o, s));
        }
        function ss(e, t) {
          const { ids: n, globalIds: r, from: s, desc: o, fnKey: c } = t;
          n && n.forEach((a) => T(e.ids, a)),
            r && r.forEach((a) => T(e.globalIds, a)),
            s && (e.from = s),
            o && (e.desc = o),
            c && (e.fnKey = c);
        }
        function za(e) {
          const { internal: t, setFactoryOpts: n } = e,
            { forAtom: r, rawState: s } = t,
            o = Lt(n),
            c = (0, j.P2)(s, {
              customKeys: We,
              onOperate: (u) => {
                if (u.isCustom) return tn(u, r, t.sharedKey);
                es(u, { internal: t, mutateCtx: o });
              },
            });
          nt.set(c, r), $t.set(o);
          const a = ht(c, r);
          return (
            r && (o.readKeys = {}),
            {
              draftRoot: c,
              draftNode: a,
              finishMutate(u, i = {}) {
                ss(o, i), rs({ state: {}, mutateCtx: o, internal: t }, c, a, u);
              },
            }
          );
        }
        function Ja(e) {
          return sr(e), yc(e);
        }
        function Za(e) {
          if (!e) return {};
          const { desc: t, ids: n, globalIds: r } = e;
          return { desc: t, ids: n, globalIds: r };
        }
        function Qa(e) {
          const { forAtom: t = !1 } = e;
          let n = e.rawState;
          const r = w(n);
          let s = !1;
          if (t) (n = r ? { val: n() } : { val: n }), (s = !n.val || !kn(n.val));
          else {
            if (((n = r ? n() : n), !H(n))) throw new Error('ERR_NON_OBJ: pass an non-object to createShared!');
            if (te(n)) throw new Error('ERR_ALREADY_SHARED: pass a shared object to createShared!');
          }
          return { isPrimitive: s, rawState: n };
        }
        function os(e, t, n) {
          let r = null,
            s = t || '';
          if (w(e) && e !== F)
            r = {
              [Bn]: 1,
              fn: e,
              deps: ge,
              oriDesc: s,
              onlyDeps: !1,
              desc: s,
              depKeys: [],
              writeKeys: [],
              checkDeadCycle: void 0,
              watchKey: '',
              isFake: !1,
              enabled: !0,
            };
          else if (H(e)) {
            const { fn: o, desc: c, deps: a, task: u, immediate: i, checkDeadCycle: l, onlyDeps: f = !1 } = e,
              d = t || c || '',
              y = w(o) ? o : void 0,
              m = w(u) ? u : void 0,
              p = w(a) ? a : ge;
            (o || u)
              && (r = {
                [Bn]: 1,
                checkDeadCycle: l,
                fn: y,
                watchKey: '',
                desc: d,
                oriDesc: d,
                deps: p,
                task: m,
                onlyDeps: f,
                immediate: i,
                depKeys: [],
                writeKeys: [],
                isFake: !1,
                enabled: !0,
              });
          }
          if (r && n) {
            const { oriDesc: o } = r;
            (!o || n[o]) && (r.desc = Ot(G.MUTATE));
          }
          return r;
        }
        function cs(e, t, n = !0) {
          const r = {},
            s = t || {};
          if (!e) return r;
          const o = (c, a) => {
            const u = os(c, a, s);
            u && ((u.enabled = n), (r[u.desc] = u), (s[u.desc] = u));
          };
          if (Array.isArray(e))
            if (e.length === 1) {
              const c = e[0],
                a = (H(c) ? c.desc : '') || Xe;
              o(e[0], a);
            } else e.forEach((c) => o(c));
          else
            w(e)
              ? o(e, Xe)
              : H(e)
                && Object.keys(e).forEach((c) => {
                  o(e[c], c);
                });
          return r;
        }
        function qa(e, t = {}) {
          var k, v, M, K, h;
          const { forAtom: n = !1, forGlobal: r = !1, stateType: s = J.USER_STATE } = e,
            { rawState: o, isPrimitive: c } = Qa(e),
            a = Ja(o),
            u = t.moduleName || '',
            i = (k = t.alertDeadCycleErr) != null ? k : se(),
            l = (v = t.deep) != null ? v : !0,
            f = (M = t.checkDeadCycle) != null ? M : !0,
            d = (K = t.enableMutate) != null ? K : !0,
            y = t.recordLoading || Mt.PRIVATE,
            m = t.rules || [],
            p = t.before || F,
            g = t.mutate || F,
            E = (h = t.stopArrDep) != null ? h : !0,
            S = t.stopDepth || Po,
            D = `${a}`,
            I = n ? `${a}/val` : D,
            R = u || D,
            A = Pc(u),
            _ = cs(g, {}, d);
          return {
            isDestroyed: !1,
            alertDeadCycleErr: i,
            checkDeadCycle: f,
            rawState: o,
            sharedKey: a,
            sharedKeyStr: D,
            rootValKey: I,
            moduleName: u,
            usefulName: R,
            forAtom: n,
            forGlobal: r,
            loc: A,
            deep: l,
            rules: m,
            before: p,
            mutate: g,
            mutateFnDict: _,
            onRead: null,
            enableMutate: d,
            stateType: s,
            recordLoading: y,
            stopArrDep: E,
            stopDepth: S,
            isPrimitive: c,
          };
        }
        function eu(e) {
          const { rawState: t, sharedKey: n, rootValKey: r, deep: s, rules: o, stopDepth: c, stopArrDep: a, forAtom: u } = e,
            i = {},
            l = {},
            f = { keys: [], isArrDict: {}, arrKeyStopDcit: {}, depth: c, stopArrDep: a },
            d = {},
            y = _t(s);
          o.forEach((g) => {
            const E = [],
              { when: S, ids: D = [], globalIds: I = [], stopDep: R } = g;
            let A;
            if (y) {
              let K = '';
              A = (0, j.OA)(t, {
                onOperate: ({ fullKeyPath: h, value: O, isBuiltInFnKey: W }) => {
                  if (W) return;
                  const z = B(h, n);
                  K && z.includes(K) && E.pop(), E.push(z), (d[z] = Array.isArray(O)), (K = z);
                },
              });
            } else
              A = ue(t, {
                set: So,
                get: (K, h) => {
                  const O = B([h], n);
                  E.push(O);
                  const W = K[h];
                  return (d[O] = Array.isArray(W)), W;
                },
              });
            const _ = u ? A.val : A,
              k = Y(S, _),
              v = (K, h, O) => {
                const W = _e(K, O, []);
                h.forEach((z) => T(W, z));
              },
              M = (K) => {
                v(i, D, K), v(l, I, K);
                let h;
                d[K] ? ((h = R != null ? R : xo), (f.arrKeyStopDcit[K] = h), (f.isArrDict[K] = d[K])) : (h = R != null ? R : !1),
                  h && T(f.keys, K);
              };
            E.forEach(M), k.includes(_) && M(r);
          });
          const m = Object.keys(i).length > 0,
            p = Object.keys(l).length > 0;
          return { hasIds: m, idsDict: i, hasGlobalIds: p, globalIdsDict: l, stopDepInfo: f };
        }
        function tu(e) {
          const { out: t = !0, desc: n = Xe, strict: r = !1 } = {};
          return typeof e == 'string' ? { out: t, desc: e, strict: r } : b({ out: t, desc: n, strict: r }, e);
        }
        function as(e) {
          var r;
          let t = F,
            n = !1;
          return w(e) ? (t = e) : H(e) && ((t = e.deps || F), (n = (r = e.immediate) != null ? r : !1)), { immediate: n, deps: t };
        }
        function nu(e) {
          return e ? (typeof e == 'boolean' ? { enableStatus: e } : H(e) ? e : {}) : {};
        }
        function ru(e) {
          Array.isArray(e)
            && e.forEach((t) => {
              const n = jt.current(t),
                r = U(t) || (n == null ? void 0 : n.internal);
              if (r) {
                const { depKey: s, sharedKey: o } = Ar(r);
                ve([s], { sharedKey: o });
              }
              n && n.recordDep(Ar(r));
            });
        }
        function gt(e, t) {
          const { scopeType: n, fnCtxBase: r, immediate: s, deps: o = F, label: c = 'watch', sharedState: a, isSimpleWatch: u } = t;
          if (!w(e)) throw new Error(`ERR_NON_FN: pass an non-function to ${c}!`);
          const i = Jr(e, { specificProps: { scopeType: n, fnType: Wn, isSimpleWatch: u }, fnCtxBase: r });
          zr(i.fnKey, te(a));
          const l = o() || [];
          return ru(l), s && e({ isFirstCall: !0 }), Se(), i;
        }
        function su(e, t) {
          const { deps: n, immediate: r } = as(t),
            s = gt(e, { scopeType: q.STATIC, deps: n, immediate: r });
          return { run: (o) => Ve(s.fnKey, { throwErr: o }), unwatch: () => qt(s) };
        }
        var us = () => {},
          hn = new Map();
        function is(e, t) {
          const { forAtom: n, rawState: r } = e;
          return n ? Y(t.deps, r.val) : Y(t.deps, r);
        }
        function ou(e) {
          var t;
          return (t = hn.get(e)) != null ? t : !1;
        }
        function gn(e, t) {
          const { sn: n, getArgs: r = F, from: s, throwErr: o, isFirstCall: c, fnItem: a, mergeReturn: u } = t,
            { desc: i = '', depKeys: l, task: f = us } = a,
            d = U(e),
            { sharedKey: y } = d,
            m = { desc: i, sn: n, from: s },
            p = fn(s, i),
            { draft: g, draftRoot: E } = cn(d, { depKeys: l, desc: i, from: s }),
            S = (h) => {
              Ue(y, h);
            },
            D = (h) => {
              S(i);
              const { finish: O } = d.setStateFactory(m);
              return O(h);
            },
            I = G.MUTATE === s ? is(d, a) : [],
            R = { isFirstCall: c, desc: i, setState: D, input: I, draft: g, draftRoot: E, flush: S },
            A = r(R) || [R],
            _ = hn.get(f),
            k = _ === void 0,
            v = (h, O, W) => {
              (k || _) && $r(d, p, { loading: h, err: O, ok: W });
            };
          v(!0, null, !1);
          const M = (h) => {
              if ((Ne.del(), v(!1, h, !1), o)) throw h;
              return { snap: d.snap, err: h, result: null };
            },
            K = (h) => (u && h && D(h), v(!1, null, !0), S(i), { snap: d.snap, err: null, result: h });
          try {
            const h = f(...A),
              O = Kt(h);
            return hn.set(f, O), O ? Promise.resolve(h).then(K).catch(M) : K(h);
          } catch (h) {
            return M(h);
          }
        }
        function fs(e, t) {
          const { sn: n, getArgs: r = F, from: s, throwErr: o, isFirstCall: c = !1, fnItem: a } = t,
            { desc: u = '', watchKey: i, fn: l = us } = a,
            f = G.MUTATE === s;
          f && Oe.set(i);
          const d = U(e),
            { setStateFactory: y, forAtom: m, sharedState: p } = d,
            E = { desc: u, sn: n, from: s, isFirstCall: c, enableDep: f && c },
            S = (v) => {
              const { finish: M } = y(E);
              return M(v);
            },
            D = ht(p, m),
            I = f ? is(d, a) : [],
            { draftNode: R, draftRoot: A, finish: _ } = y(E),
            k = r({ isFirstCall: c, draft: R, draftRoot: A, setState: S, desc: u, input: I }) || [
              R,
              { input: I, state: D, draftRoot: A, isFirstCall: c },
            ];
          try {
            const v = Xt(a.watchKey);
            if (v.dcErrorInfo.err) return dn(d, v.dcErrorInfo), { snap: d.snap, err: null, result: null };
            const M = l(...k);
            return _(M, { fnKey: v.fnKey }), ls(d, a, c), { snap: d.snap, err: null, result: null };
          } catch (v) {
            if ((ls(d, a, c), o)) throw v;
            return { snap: d.snap, err: v, result: null };
          }
        }
        function ls(e, t, n) {
          n && !t.onlyDeps && (rt().fnCtx ? (t.depKeys = Se()) : (t.depKeys = Ne.current()), Ne.del());
          const r = ne.current();
          r.isTop && r.fnKey === t.watchKey && pe(e, Xt(t.watchKey), r.writeKeys), Oe.del();
        }
        function cu(e, t) {
          var r;
          na(), Ne.del(), Zt(!1);
          const n = rt().fnCtx;
          n && ((n.subFnInfo = t), (n.checkDeadCycle = (r = t.checkDeadCycle) != null ? r : e.checkDeadCycle), (t.watchKey = n.fnKey)),
            t.onlyDeps && (t.depKeys = Se());
        }
        function mn(e) {
          const { target: t, dict: n } = e,
            r = Object.keys(n);
          if (!r.length) return;
          const s = U(t),
            { mutateFnDict: o, usefulName: c, forAtom: a, sharedState: u } = s,
            i = (l) => rr(s, l);
          r.forEach((l) => {
            const f = o[l];
            gt(
              ({ sn: d, isFirstCall: y }) => {
                if ((y && cu(s, f), !s.enableMutate)) return;
                const { desc: m, fn: p, task: g, immediate: E } = f,
                  S = Na(c, m);
                try {
                  if (S.isIn) throw Qr(c, S.cycle, m);
                  const D = { sn: d, throwErr: !0, isFirstCall: y, fnItem: f, from: G.MUTATE };
                  if ((p && (y || !g) && fs(t, D), g)) {
                    y && (f.depKeys = Se());
                    const I = y && (E != null ? E : !p);
                    (!y || I) && gn(t, D).catch(i);
                  }
                  return f;
                } catch (D) {
                  D.cause === 'DeadCycle' && Pa(c, D, s.alertDeadCycleErr), i(D);
                }
              },
              { deps: () => (f.deps ? f.deps(ht(u, a)) || [] : []), sharedState: t, scopeType: q.STATIC, immediate: !0 },
            );
          });
        }
        var { ACTION: ds } = G;
        function au(e, t) {
          const { label: n, throwErr: r, desc: s = '', task: o, mergeReturn: c = !0 } = t,
            a = le(e, { label: n }),
            { forAtom: u } = a,
            i = (l, f) => {
              const d = f != null ? f : r,
                y = Nt({ desc: s, task: o, depKeys: [] }),
                m = (p, g) => (p.__action ? p.__action(g) : p(g));
              return gn(e, {
                fnItem: y,
                from: ds,
                mergeReturn: c,
                throwErr: d,
                getArgs: ({ draft: p, draftRoot: g, setState: E, desc: S, flush: D }) => [
                  {
                    draft: p,
                    draftRoot: g,
                    setState: E,
                    desc: S,
                    payload: l,
                    flush: D,
                    merge: (R) => {
                      ns({ partial: R, forAtom: u, draftRoot: g, draftNode: p });
                    },
                    dispatch: m,
                  },
                ],
              });
            };
          return (
            $r(a, fn(ds, s), { loading: !1, ok: !0, err: null }),
            (i.__sharedKey = a.sharedKey),
            (i.__fnName = s),
            (i.__task = o),
            (o.__action = i),
            i
          );
        }
        function ps(e) {
          return (t) =>
            (n, r = '', s) =>
              au(e, { task: n, desc: r, label: 'action', mergeReturn: t, throwErr: s });
        }
        var { TASK: ys } = Ze,
          { STATIC: uu, HOOK: iu } = q;
        function hs(e, t, n) {
          if (!n && (!H(t) || Kt(t))) throw new Error('ERR_NON_OBJ: derive,deriveAsync expect result to be a plain object');
          const { isAsync: r, isAsyncTransfer: s } = e;
          if (r && !s) {
            const o = vr(t),
              c = te(t);
            if ((o && e.fnKey !== o) || c)
              throw new Error(
                'ERR_INVALID_CALL: derive,deriveAsync can not transfer another derived result or shared state, it will cause wrong result',
              );
          }
        }
        function fu(e, t) {
          const n = ue(e.result, {
            set: () => (me('changing derived result is invalid'), !1),
            get: (r, s) => {
              if (s === $e) return t;
              const o = r[s];
              return ve(e.depKeys, { belongCtx: e }), Jt(e.depKeys, n), en(0, o, n, '', [s], !0, t), o;
            },
          });
          return (e.proxyResult = n), n;
        }
        function gs(e, t) {
          var r;
          const n = Pe(t.result);
          n
            && ((e.depKeys = ye(e.depKeys.concat(n.depKeys))),
            T(n.nextLevelFnKeys, e.fnKey),
            T(e.prevLevelFnKeys, n.fnKey),
            (e.isFirstLevel = !1),
            (r = t.isUpstream) == null || r.call(t));
        }
        function lu(e) {
          var I, R;
          const {
            scopeType: t = uu,
            fnCtxBase: n,
            isAsyncTransfer: r = !1,
            asyncType: s = ys,
            returnUpstreamResult: o,
            runAsync: c = !0,
            forAtom: a = !1,
            immediate: u,
          } = e;
          if (!w(e.fn)) throw new Error('ERR_NON_FN: derive need fn arg!');
          const { fn: i = F, deps: l = F, task: f } = e,
            d = (A) => {
              const _ = Y(l);
              return A.isFirstCall && _.forEach((k) => gs(p, { result: k })), i(V(b({}, A), { input: _ }));
            },
            y = (I = e.isAsync) != null ? I : w(f),
            m = (R = e.showLoading) != null ? R : y,
            p = Jr(d, {
              specificProps: {
                forAtom: a,
                scopeType: t,
                fnType: Vo,
                task: f,
                deps: l,
                isAsync: y,
                asyncType: s,
                isAsyncTransfer: r,
                showLoading: m,
              },
              fnCtxBase: n,
            });
          zr(p.fnKey, 0);
          let g = d({ isFirstCall: !0, prevResult: null, triggerReasons: [] });
          Se();
          const E = Pe(g);
          a && !E && (g = { val: g, z__is_atom_result__: !0 });
          const S = p.fnKey;
          hs(p, g),
            gs(p, {
              result: g,
              isUpstream: () => {
                p.returnUpstreamResult = o != null ? o : !y;
              },
            }),
            Qt(p),
            p.returnUpstreamResult || Er(g, t, S);
          const D = c && s === ys && (u != null ? u : !e.fn);
          return (
            f
              && D
              && Ve(S, { isFirstCall: !0, sn: p.renderInfo.sn + 1 })
                .then((A) => {
                  hs(p, A[0], a);
                })
                .catch((A) => oe(A)),
            (p.result = g),
            t === iu && Zr(p) && p.setLoading(!0),
            p.returnUpstreamResult ? (p.proxyResult = g) : fu(p, a),
            p
          );
        }
        function En(e, t) {
          const n = w(e) ? { fn: e } : e || {};
          return lu(b(b({}, t || {}), n));
        }
        function ms(e) {
          return En(e, { forAtom: !0 }).proxyResult;
        }
        function du(e) {
          return En(e).proxyResult;
        }
        function pu(e) {
          return (t) => V(b({}, t), { deps: e });
        }
        function yu(e) {
          return e;
        }
        var mt = (e) => [e.snap, e.err];
        function vn(e) {
          const { target: t, desc: n = '', forTask: r = !1 } = e,
            { mutateFnDict: s, snap: o } = U(t),
            c = n || Xe,
            a = s[c];
          if (!a) return { snap: o, err: new Error(`mutate fn ${c} not defined`), result: null };
          if (r && !a.task) return { snap: o, err: new Error(`mutate task ${c} not defined`), result: null };
          const u = { sn: 0, fnItem: a, from: G.MUTATE };
          return r ? gn(t, u) : fs(t, u);
        }
        function Es(e, t, n, r) {
          return {
            run: () => {
              const s = vn({ target: e, desc: t });
              return mt(s);
            },
            runTask: () => Promise.resolve(vn({ target: e, desc: t, forTask: !0 })).then(mt),
            desc: t,
            oriDesc: n,
            getSnap: () => r.snap,
            snap: r.snap,
            __sharedKey: r.sharedKey,
          };
        }
        function hu(e) {
          const { target: t, fnItem: n, label: r } = e,
            s = le(t, { label: r }),
            o = os(n, '', s.mutateFnDict);
          if (!o) throw new Error('not a fn or fnItem { fn }');
          (s.mutateFnDict[o.desc] = o), (o.enabled = s.enableMutate);
          const c = { [o.desc]: o };
          return s.enableMutate && mn({ target: t, dict: c }), Es(t, o.desc, o.oriDesc, s);
        }
        function gu(e) {
          const { target: t, fnDict: n, label: r } = e,
            s = le(t, { label: r }),
            o = cs(n, s.mutateFnDict, s.enableMutate);
          s.enableMutate && mn({ target: t, dict: o });
          const c = {};
          return (
            Object.keys(o).forEach((a) => {
              c[a] = Es(t, a, a, s);
            }),
            c
          );
        }
        function mu(e, t) {
          const { label: n, descOrOptions: r, forTask: s = !1 } = t,
            { desc: o, strict: c } = tu(r);
          return o
            ? Gr(e, { label: n, strict: c })
              ? { ok: !0, desc: o, forTask: s, err: null }
              : { ok: !1, desc: o, forTask: s, err: new Error('not a valid atom or shared result') }
            : { ok: !1, desc: o, forTask: s, err: new Error('miss desc') };
        }
        function vs(e, t) {
          const { ok: n, desc: r, forTask: s, err: o } = mu(e, t);
          if (!n) return s ? Promise.resolve([e, o]) : [e, o];
          const c = vn({ target: e, desc: r, forTask: s });
          return s ? Promise.resolve(c).then(mt) : mt(c);
        }
        function Ss(e, t) {
          return vs(e, { descOrOptions: t, label: 'runMutate' });
        }
        function As(e, t) {
          return vs(e, { descOrOptions: t, label: 'runMutateTask', forTask: !0 });
        }
        function Ks(e) {
          return (t) => hu({ target: e, fnItem: t, label: 'mutate' });
        }
        function Sn(e) {
          return (t) => gu({ target: e, fnDict: t, label: 'mutateDict' });
        }
        function Ds(e, t, n = {}) {
          const { tuple: r } = it(e, t, n);
          return r;
        }
        function _s(e, t, n = {}) {
          const { tuple: r } = it(e, t, n),
            [s, o, c] = r;
          return V(b({}, c), { state: s, setState: o });
        }
        var Eu = 'ERR_NOT_DERIVED_RESULT: useDerived only accept derived result',
          vu = 'ERR_NOT_ATOM_RESULT: useDerivedAtom only accept derived atom';
        function Su(e, t, n) {
          return e.isExpired ? ((e.isExpired = !1), !0) : w(n) ? !1 : n !== t;
        }
        function Au(e) {
          ln(e), (e.depKeys.length = 0), (e.prevLevelFnKeys.length = 0), (e.renderInfo.sn += 1);
        }
        function Ku(e, t) {
          const { result: n, forAtom: r, showLoading: s } = t,
            { fnCtx: o, input: c, deriveFn: a } = e;
          let u = !1;
          if (a)
            if (Su(o, c, n)) (u = !0), Au(o);
            else return;
          e.input = n;
          const i = Pe(n);
          if (!i) throw new Error(Eu);
          if (r && !ae(n)) throw new Error(vu);
          (e.deriveFn = () => i.result),
            En(
              {
                fn: () => i.result,
                deps: () => [],
                task: () =>
                  lo(this, null, function* () {
                    return i.result;
                  }),
              },
              {
                isAsync: i.isAsync,
                scopeType: q.HOOK,
                fnCtxBase: o,
                isAsyncTransfer: !0,
                runAsync: !1,
                returnUpstreamResult: !0,
                forAtom: r,
                asyncType: Ze.MAY_TRANSFER,
                showLoading: s,
              },
            ),
            Ur(o),
            u && o.updater();
        }
        function Rs(e, t) {
          const { result: n, forAtom: r } = t,
            { hookImpl: s, react: o } = e,
            c = s.useForceUpdate(),
            { current: a } = o.useRef({ input: n, deriveFn: null, fnCtx: null });
          a.fnCtx || (a.fnCtx = lt({ updater: c, scopeType: q.HOOK, forAtom: r }));
          const u = a.fnCtx;
          return (u.renderStatus = be), Ku(a, t), u;
        }
        function Du(e, t) {
          t.shouldReplaceResult && (Ur(t), (t.shouldReplaceResult = !1)),
            ut(e, t.subscribe, () => Ir(t)),
            e.react.useEffect(() => {
              t.renderStatus = wt;
            });
        }
        function Ts(e, t) {
          e.react.useEffect(
            () => (
              (t.mountStatus = Je),
              br(t),
              () => {
                ln(t);
              }
            ),
            [t],
          );
        }
        function An(e, t) {
          const n = Rs(e, t);
          return ut(e, n.subscribe, () => Ir(n)), Ts(e, n), n;
        }
        function _u(e, t) {
          const n = Rs(e, t);
          return Du(e, n), Ts(e, n), n;
        }
        function Kn(e, t, n) {
          const r = _u(e, b({ result: t }, n || {})),
            { proxyResult: s, status: o, renderInfo: c } = r;
          return [ae(t) ? s.val : s, o, c];
        }
        function bs(e, t, n) {
          if (t === null) return n;
          if (!w(t)) return null;
          const { sharedState: r, forAtom: s } = e,
            o = s ? r.val : r,
            c = {};
          Ht.set((u) => (c[u[0]] = 1));
          const a = Y(t, o);
          return Ht.del(), a.includes(o) ? e.key2InsKeys : c;
        }
        function Is(e, t, n) {
          const r = le(t),
            [s] = e.react.useState(() => bs(r, n, null));
          return (o) => {
            const { insCtxMap: c, key2InsKeys: a } = r,
              u = bs(r, o, a) || s || a,
              i = {};
            if (
              (Object.keys(u).forEach((f) => {
                (a[f] || []).forEach((y) => (i[y] = 1));
              }),
              Object.keys(i).length)
            ) {
              r.sn += 1;
              const f = r.sn;
              Object.keys(i).forEach((d) => {
                yn(c, Number(d), f);
              });
            }
          };
        }
        function Ru(e, t) {
          Rn(e);
          const n = nn();
          return un(e, n, { collectType: 'no', globalId: t }).renderInfo;
        }
        var { ACTION: Ms, MUTATE: Fs } = G;
        function Dn(e, t) {
          Rn(e);
          const { target: n, from: r = 'Mutate' } = t || {};
          let s = jr();
          n && (s = le(n));
          const { loadingProxy: o, loadingState: c } = ft(re, { apiCtx: e, internal: s, from: r });
          return { loadingProxy: o, loadingState: c, internal: s, from: r };
        }
        function ws(e, t) {
          const { loadingProxy: n, internal: r, from: s } = Dn(e, t),
            { proxyState: o, extra: c, renderInfo: a } = un(e, n);
          return [de(c, o, s), r.setState, a];
        }
        function Tu(e, t) {
          const { loadingProxy: n } = Dn(e, { target: t, from: Fs });
          return n;
        }
        function bu(e, t) {
          return ws(e, { target: t, from: Fs });
        }
        function Iu(e, t) {
          const { loadingProxy: n } = Dn(e, { target: t, from: Ms });
          return n;
        }
        function Mu(e, t) {
          return ws(e, { target: t, from: Ms });
        }
        function ks(e) {
          return e.hookImpl.useForceUpdate();
        }
        function Cs(e, t) {
          const n = (r, s) => {
            let o = null;
            if (w(r)) {
              const c = (0, j.P2)(s),
                a = r(c);
              (o = (0, j._x)(c)), H(a) && Object.assign(o, a);
            } else H(r) && (o = b(b({}, s), r));
            return o;
          };
          return e.hookImpl.useObjectLogic(t, n, !0);
        }
        function Fu(e, t, n) {
          e.react.useEffect(() => {
            const r = sc();
            return r.on(t, n), () => r.off(t, n);
          }, []);
        }
        function Os(e, t, n = {}) {
          const r = Ie(t),
            { insCtx: s } = it(e, t, V(b({}, n), { forAtom: r, isReactive: !0 }));
          return [s.proxyStateVal, s.proxyState, s.renderInfo];
        }
        function wu(e, t, n) {
          const r = H(n) ? n : {};
          e.react.useEffect(() => {
            const { srvRef: s } = r;
            w(s) && s(t);
          }, []);
        }
        function ku(e, t, n) {
          const r = e.hookImpl.useStable(t);
          return wu(e, r, n), r;
        }
        function Cu(e) {
          return (t) => (e.current = t);
        }
        var { HOOK: Ls } = q;
        function Ns(e, t) {
          e(() => {
            var n, r;
            return (
              (t.mountStatus = Je),
              br(t),
              (r = (n = t.extra).deferedWatch) == null || r.call(n),
              () => {
                ln(t);
              }
            );
          }, [t]);
        }
        function Ou(e, t, n) {
          const { useState: r, useEffect: s } = e.react,
            [o] = r(() => lt());
          if (o.fn === F) {
            const { manualDepKeys: c = [] } = n;
            gt(t, {
              scopeType: Ls,
              fnCtxBase: o,
              deps: () =>
                c.map((u) => {
                  const { sharedKey: i, keyPath: l } = Sr(u),
                    f = gc(i);
                  return ce(f, l);
                }),
              isSimpleWatch: !0,
            });
          }
          Ns(s, o);
        }
        function Lu(e, t, n) {
          const { useRef: r, useState: s, useMemo: o, useEffect: c } = e.react,
            a = r({ fn: t, wrap: null }),
            [u] = s(() => lt());
          if (((a.current.fn = o(() => t, [t])), !a.current.wrap)) {
            const { deps: i, immediate: l } = as(n);
            (a.current.wrap = (f) => {
              u.mountStatus === Je ? a.current.fn(f) : (u.extra.deferedWatch = () => a.current.fn(f));
            }),
              gt(a.current.wrap, { scopeType: Ls, fnCtxBase: u, deps: i, immediate: l, label: 'useWatch' });
          }
          Ns(c, u);
        }
        function Nu(e) {
          const { internal: t, setFactoryOpts: n } = e,
            { rawState: r, forAtom: s, stopDepth: o, sharedKey: c } = t,
            a = Lt(n),
            u = b({}, r),
            i = (y, m, p, g) => {
              const E = ke(m, p, { parentType: Dr(y), parentKeyPath: g });
              es(E, { internal: t, mutateCtx: a }), Ln(u, E.fullKeyPath, p);
            },
            l = (y, m, p) =>
              Me(y, {
                set: (g, E, S) => (i(g, E, S, p), !0),
                get: (g, E) => {
                  const S = g[E];
                  if (We.includes(E)) return ct(m === 1, s, c, E, S);
                  const D = ke(E, S, { isChanged: !1, parentKeyPath: p, op: 'get', parentType: Dr(g) });
                  return m < o && fe(S) ? l(S, m + 1, D.fullKeyPath) : ce(u, D.fullKeyPath);
                },
              }),
            f = l(u, 1, []);
          nt.set(f, s), $t.set(a);
          const d = s ? f.val : f;
          return {
            draftRoot: f,
            draftNode: d,
            finishMutate(y, m = {}) {
              ss(a, m);
              const p = b({ state: {}, mutateCtx: a }, e);
              rs(p, f, d, y);
            },
          };
        }
        function Pu(e) {
          let t = e;
          if (e) {
            e.persist && e.persist();
            const { currentTarget: n } = e;
            n && e.type
              ? n.tagName === 'INPUT' && n.type === 'checkbox'
                ? (t = n.checked)
                : (t = n.value)
              : e.nativeEvent && e.target && (t = e.target.value);
          }
          return t;
        }
        function xu(e) {
          let t = [];
          return {
            target: Uc(e, ({ fullKeyPath: r }) => {
              t = r;
            }),
            getPath: () => t,
          };
        }
        function Ps(e, t, n) {
          return (s) => {
            let o = Pu(s);
            e(
              (c) => {
                const { isAtom: a, draftRoot: u } = nt.current(),
                  i = { draft: c, draftRoot: u, path: t, isAtom: a, UNDEFINED: Lo },
                  l = n == null ? void 0 : n(o, i);
                Ln(u, t, l !== void 0 ? l : o);
              },
              { from: G.SYNC },
            );
          };
        }
        function _n(e, t) {
          const { sharedKey: n, innerSetState: r } = t;
          let s = B(e, n),
            o = xs.get(s);
          return o || ((o = Ps(r, e)), xs.set(s, o)), o;
        }
        var xs = new Map();
        function Us(e) {
          const { forAtom: t, rawState: n } = e;
          return t ? (kn(n.val) ? Me(n.val, { get: (r, s) => _n(['val', s], e) }) : _n(['val'], e)) : Me(n, { get: (r, s) => _n([s], e) });
        }
        var Vs = new Map();
        function Ys(e) {
          const { forAtom: t, sharedKey: n, innerSetState: r, rawState: s } = e,
            o = xu(s);
          return (c, a) => {
            let u = [];
            if (Array.isArray(c)) u = t ? ['val', ...c] : c;
            else {
              const { target: f, getPath: d } = o;
              c(t ? f.val : f), (u = d());
            }
            let i = B(u, n);
            a && (i += `${a.toString()}`);
            let l = Vs.get(i);
            return l || ((l = Ps(r, u, a)), Vs.set(i, l)), l;
          };
        }
        function Uu(e, t) {
          const { deep: n, forAtom: r, sharedKey: s } = t,
            o = eu(t),
            c = _t(n),
            a = (g = {}) => {
              const E = { internal: p, setFactoryOpts: g },
                { finishMutate: S, draftRoot: D, draftNode: I } = c ? za(E) : Nu(E);
              return {
                finish: (R, A = {}) => {
                  const _ = p.snap;
                  if (R === _) return _;
                  const k = Yc(r, R, I);
                  return S(k, A), p.snap;
                },
                draftRoot: D,
                draftNode: I,
              };
            },
            u = (g = {}) => a(g),
            i = (g, E = {}) => a().finish(g, E),
            l = (g, E) => {
              const [S, D, I] = E;
              return on(e, Le.current(s)), a({ handleCbReturn: S, enableDep: D }).finish(g, Za(I));
            },
            p = ir(t, {
              sharedState: e,
              setState: (g, E) => l(g, [!0, !0, E]),
              setDraft: (g, E) => l(g, [!1, !0, E]),
              insSetState: (g, E) => l(g, [!0, !1, E]),
              insSetDraft: (g, E) => l(g, [!1, !1, E]),
              setStateFactory: u,
              innerSetState: i,
              ruleConf: o,
              isDeep: c,
            });
          return (p.sync = Ys(p)), (p.syncer = Us(p)), lc(e, p), p;
        }
        function Vu(e, t) {
          const n = qa(e, t),
            { sharedRoot: r, sharedState: s } = Xc(n),
            o = Uu(r, n);
          mc(r, n), Oc(), mn({ target: r, dict: n.mutateFnDict });
          const { draft: c, draftRoot: a } = cn(o, { isTop: !0 });
          return (
            (o.reactive = c),
            (o.reactiveRoot = a),
            fc(n.moduleName, o.loc),
            Ca(o.usefulName),
            rc(o),
            { sharedRoot: r, sharedState: s, internal: o, parsedOptions: n }
          );
        }
        var { USER_STATE: Gs } = J,
          { MUTATE: Yu, ACTION: Bs } = G;
        function Rn(e, t) {
          Gs === (t || Gs) && !nn() && (zc(e, re), Ma(e, re));
        }
        function Hs(e, t) {
          const { createFn: n, ldAction: r, actionDict: s, actionCreator: o, internal: c, apiCtx: a, forTp: u = !1 } = e;
          ft(n, { internal: c, from: Bs, apiCtx: a });
          const i = {},
            l = {};
          return (
            Object.keys(s).forEach((f) => {
              const d = s[f],
                y = u ? d.__task : d,
                m = o(!1)(y, f, t);
              (m.__fnName = f), (l[f] = m);
              const p = (...g) => {
                const E = m(...g);
                return ou(y) ? Promise.resolve(E).then((S) => S.result) : E.result;
              };
              (p.__fnName = f), (i[f] = p);
            }),
            {
              actions: i,
              eActions: l,
              getLoading: () => r.getLoading(i),
              useLoading: () => r.useLoading(i)[0],
              useLoadingInfo: () => r.useLoading(i),
            }
          );
        }
        function js(e) {
          const { state: t, ldMutate: n, mutateFnDict: r } = e,
            s = Sn(t)(r);
          return {
            witnessDict: s,
            getLoading: () => n.getLoading(s),
            useLoading: () => n.useLoading(s)[0],
            useLoadingInfo: () => n.useLoading(s),
          };
        }
        function Gu(e) {
          const { apiCtx: t, ldMutate: n, inital: r, mutateFnDict: s } = e,
            [o, , c] = Tn(t, r),
            a = js({ state: o, ldMutate: n, mutateFnDict: s });
          return b(
            {
              derivedState: o,
              useDerivedState: (i) => {
                const [l, , f] = c.useState(i);
                return [l, f];
              },
            },
            a,
          );
        }
        function Bu(e) {
          const { apiCtx: t, deriveFnDict: n, throwErr: r } = e,
            s = {},
            o = {};
          return (
            Object.keys(n).forEach((a) => {
              const u = ms(n[a]);
              (s[a] = u),
                (o[a] = {
                  runDerive: (i) => Ga(u, i != null ? i : r),
                  runDeriveTask: (i) => Ba(u, i != null ? i : r),
                  useDerived: (i) => Kn(t, u, i)[0],
                  useDerivedInfo: (i) => Kn(t, u, i),
                });
            }),
            { result: new Proxy(s, { get: (a, u) => s[u].val }), helper: o }
          );
        }
        function Hu(e, t) {
          if (((t.enableMutate = e), e)) {
            const { mutateFnDict: n } = t,
              r = {};
            Object.keys(n).forEach((s) => {
              const o = n[s];
              o.enabled || ((o.enabled = !0), (r[s] = o));
            }),
              Sn(t.sharedState)(r);
          }
        }
        function ju(e) {
          const {
            moduleName: t,
            deep: n,
            recordLoading: r,
            stopDepth: s,
            stopArrDep: o,
            alertDeadCycleErr: c,
            checkDeadCycle: a,
            enableMutate: u,
          } = e;
          return {
            moduleName: t,
            deep: n,
            recordLoading: r,
            stopDepth: s,
            stopArrDep: o,
            alertDeadCycleErr: c,
            checkDeadCycle: a,
            enableMutate: u,
          };
        }
        function re(e, t) {
          const { stateType: n, apiCtx: r } = e;
          Rn(r, n);
          const { sharedRoot: s, sharedState: o, internal: c } = Vu(e, t),
            {
              syncer: a,
              sync: u,
              forAtom: i,
              setState: l,
              setDraft: f,
              sharedKey: d,
              sharedKeyStr: y,
              rootValKey: m,
              reactive: p,
              reactiveRoot: g,
            } = c,
            E = ps(s),
            S = E(),
            D = { internal: c, from: Yu, apiCtx: r },
            I = re,
            R = Xr(I, V(b({}, D), { from: Bs })),
            A = Xr(I, D),
            _ = { createFn: I, internal: c, apiCtx: r },
            k = V(b({}, _), { ldAction: R, actionCreator: E });
          return {
            state: s,
            stateVal: o,
            setState: l,
            setDraft: f,
            setEnableMutate: (v) => Hu(v, c),
            getOptions: () => ju(c),
            setOnReadHook: (v) => (c.onRead = v),
            defineActions: (v) => (M) => Hs(V(b({}, k), { actionDict: M }), v),
            defineTpActions: (v) => (M) => Hs(V(b({}, k), { actionDict: M, forTp: !0 }), v),
            defineMutateDerive: (v) => (M) => Gu(V(b({}, _), { ldMutate: A, inital: v, mutateFnDict: M })),
            defineMutateSelf: () => (v) => js({ ldMutate: A, state: s, mutateFnDict: v }),
            defineFullDerive: (v) => (M) => Bu({ apiCtx: r, deriveFnDict: M, throwErr: v }),
            mutate: Ks(s),
            runMutate: (v) => Ss(s, v),
            runMutateTask: (v) => As(s, v),
            action: E,
            call: (v, M, K, h) => S(v, K, h)(M),
            useState: (v) => Ds(r, s, v),
            useStateX: (v) => _s(r, s, v),
            useForceUpdate: (v) => Is(r, s, v),
            useLocalState: (v) => Cs(r, v),
            useLocalForceUpdate: () => ks(r),
            getMutateLoading: A.getLoading,
            useMutateLoading: A.useLoading,
            getActionLoading: R.getLoading,
            useActionLoading: R.useLoading,
            sync: u,
            syncer: a,
            sharedKey: d,
            sharedKeyStr: y,
            rootValKey: m,
            reactive: p,
            reactiveRoot: g,
            reactiveDesc: (v) => Cr(s, v),
            useReactive: (v) => Os(r, s, v),
            flush: (v) => on(s, v),
            isAtom: i,
          };
        }
        function Tn(e, t, n) {
          const r = re({ apiCtx: e, rawState: t }, n);
          return [r.state, r.setState, r];
        }
        function $u(e, t, n) {
          return re({ apiCtx: e, rawState: t }, n);
        }
        function Wu(e, t, n) {
          const r = re({ apiCtx: e, rawState: t, forAtom: !0 }, n);
          return [r.state, r.setState, r];
        }
        function Xu(e, t, n) {
          return re({ apiCtx: e, rawState: t, forAtom: !0 }, n);
        }
        function $s(e, t) {
          const { label: n, isSyncer: r } = t,
            s = le(e, { label: n });
          return (r ? Us : Ys)(s);
        }
        function zu(e) {
          return $s(e, { label: 'sync' });
        }
        function Ju(e) {
          return $s(e, { label: 'syncer', isSyncer: !0 });
        }
        var Zu = 100,
          Qu = 5e3;
        function qu(e, t) {
          return {
            key: e,
            results: [],
            depKeys: [],
            enableStatus: t,
            collected: !1,
            mounted: !1,
            renderAtomOnce: !1,
            time: 0,
            status: { loading: !1, err: null, ok: !0 },
          };
        }
        function ei(e, t = !1) {
          const n = Z();
          e && (n.initCount += 1);
          const r = Ac(),
            s = qu(r, t);
          return Mr(e).set(r, s), s;
        }
        function ti(e) {
          const t = Z();
          (e.mounted = !0), (e.time = Date.now()), (t.mountedCount += 1);
        }
        function ni(e, t) {
          const n = Z(),
            r = Mr(t);
          if ((r.delete(e), t && r.size === Zu && n.initCount - n.mountedCount > 2)) {
            (n.initCount = 0), (n.mountedCount = 0);
            const s = Date.now();
            r.forEach((o, c) => {
              !o.mounted && s - o.time > Qu && r.delete(c);
            });
          }
        }
        function ri(e, t) {
          const n = Z();
          (n.runningKey = e.key), (n.isDynamic = t);
        }
        function si(e) {
          const t = Z();
          (t.runningKey = ''), (t.isDynamic = !1), (e.collected = !0);
        }
        function oi(e, t, n) {
          Ou(e, n, { manualDepKeys: t.depKeys });
        }
        function Ws(e, t, n) {
          let r = { loading: !1, err: null, ok: !0 };
          return (
            oi(e, t, n),
            t.results.forEach((s) => {
              const o = An(e, { result: s, forAtom: ae(s), showLoading: t.enableStatus });
              o.status.ok || (r = o.status);
            }),
            r
          );
        }
        function Xs(e, t, n) {
          e.react.useEffect(
            () => (
              t.mounted || ti(t),
              () => {
                ni(t.key, n);
              }
            ),
            [t],
          );
        }
        var Ae = () => !0,
          ci = (e) => e;
        function ai(e) {
          const t = [];
          for (let n = 1; n <= e.length; n++) t.push(e.slice(0, n));
          return t;
        }
        function bn(e, t, n, r, s) {
          const o = t;
          return (o.displayName = n), r ? e.react.memo(o, s) : o;
        }
        function zs(e, t) {
          const { sharedState: n, depKey: r, keyPath: s, compare: o, sharedKey: c, format: a = ci } = t;
          return bn(
            e,
            function () {
              const i = un(e, n, { arrDep: !0 });
              i.isFirstRender
                && (s.length >= 2
                  ? ai(s).forEach((d) => {
                      i.recordDep({ sharedKey: c, depKey: B(d, c), keyPath: d, parentKeyPath: d.slice(0, d.length - 1) }, Qe);
                    })
                  : i.recordDep({ sharedKey: c, depKey: r, keyPath: s }));
              const l = ce(i.internal.rawState, s);
              return a(l);
            },
            'HeluxSignal',
            !0,
            o,
          );
        }
        function In(e, t, n) {
          return bn(
            e,
            function () {
              return An(e, { result: t, forAtom: !0 }).proxyResult.val;
            },
            'HeluxDerivedAtomSignal',
            !0,
            n,
          );
        }
        function ui(e, t, n, r) {
          return bn(
            e,
            function () {
              return An(e, { result: t, forAtom: !1 }), ce(t, n);
            },
            'HeluxDerivedSignal',
            !0,
            r,
          );
        }
        function Js(e, t) {
          const { isDynamic: n, cb: r, props: s, ref: o } = t,
            { collected: c, status: a } = e;
          c || ri(e, n);
          const i = r(s, { props: s, status: a, read: yo, ref: o }) || '';
          return c || si(e), i;
        }
        function Zs(e, t, n) {
          const r = ae(n);
          if (t.renderAtomOnce && !r)
            throw new Error('block cb once returned derived atom but not keep to return it in new render period!');
          if (r) {
            t.renderAtomOnce = !0;
            const s = In(e, n);
            return e.react.createElement(s, { status: { loading: !1, err: null, ok: !0 } });
          }
          return Xn(n);
        }
        function Qs(e, t, n, r) {
          const { memo: s = !0, compare: o } = r || {},
            { key: c } = t,
            { react: a } = e,
            u = a.forwardRef || F,
            i = n();
          let l = u(i);
          se()
            && ((i.displayName = 'HeluxKeyedBlockForHMR'),
            (l = u((d, y) => (y && vo(y, 'current') && (t.ref = y), a.createElement(i, V(b({}, d), { key: c }))))));
          const f = s ? a.memo(l, o) : l;
          return (f.displayName = 'HeluxBlock'), (f[Ft] = !0), f;
        }
        function ii(e, t) {
          const { cb: n, isDynamic: r, apiCtx: s, blockCtx: o } = e,
            { useForceUpdate: c } = s.hookImpl,
            a = r ? Xs : F;
          return Qs(
            s,
            o,
            () => (u, i) => {
              const l = o.ref || i,
                f = Js(o, { isDynamic: r, cb: n, props: u, ref: l }),
                d = c();
              return Ws(s, o, d), a(s, o, r), Zs(s, o, f);
            },
            t,
          );
        }
        function fi(e, t) {
          const { cb: n, isDynamic: r, apiCtx: s, blockCtx: o } = e,
            c = r ? Xs : F,
            { useForceUpdate: a } = s.hookImpl,
            { useEffect: u } = s.react;
          return Qs(
            s,
            o,
            () => (i, l) => {
              const f = o.ref || l,
                d = Js(o, { isDynamic: r, cb: n, props: i, ref: f }),
                y = a(),
                m = Ws(s, o, y);
              c(s, o, r);
              const p = o.status.loading,
                g = m.loading;
              return (
                u(() => {
                  p !== g && y();
                }, [p, g]),
                (o.status = m),
                Zs(s, o, d)
              );
            },
            t,
          );
        }
        function qs(e, t) {
          const n = nu(t),
            { enableStatus: r } = n,
            s = V(b({}, e), { blockCtx: ei(e.isDynamic, r) });
          return r ? fi(s, n) : ii(s, n);
        }
        function li(e, t, n) {
          return qs({ apiCtx: e, isDynamic: !1, cb: t }, n);
        }
        function eo(e, t, n) {
          return qs({ apiCtx: e, isDynamic: !0, cb: t }, n);
        }
        function to(e, t, n) {
          const { react: r } = e;
          if (t && t[Ft]) return r.createElement(t);
          if (w(t)) {
            const f = eo(e, t, { compare: Ae });
            return r.createElement(f);
          }
          if (ae(t)) {
            const f = In(e, t, Ae);
            return r.createElement(f);
          }
          if (Ie(t)) {
            const f = te(t),
              d = Dt('val', f),
              m = zs(e, { sharedKey: f, sharedState: t, depKey: d, keyPath: ['val'], compare: Ae });
            return r.createElement(m);
          }
          const s = Wc(),
            { sharedKey: o, val: c, stateOrResult: a, depKey: u, keyPath: i, isDerivedResult: l } = s;
          if (t === c && a) {
            if (s.isDerivedAtom) {
              const d = In(e, a, Ae);
              return r.createElement(d);
            }
            if (l) {
              const d = ui(e, a, i, Ae);
              return r.createElement(d);
            }
            const f = zs(e, { sharedKey: o, sharedState: a, depKey: u, keyPath: i, compare: Ae, format: n });
            return r.createElement(f);
          }
          return t;
        }
        var { shallowCompare: di, isDiff: pi } = j.limuUtils,
          yi = Tn,
          hi = to;
        function no(e, t, n) {
          return t(e, n);
        }
        function gi(e, t) {
          return no(e, t);
        }
        function mi(e, t) {
          return { build: (n) => no(e, t, n) };
        }
        var Ei = [
          'atom',
          'atomx',
          'share',
          'sharex',
          'getMutateLoading',
          'getActionLoading',
          '$',
          'signal',
          'block',
          'blockStatus',
          'dynamicBlock',
          'dynamicBlockStatus',
        ];
        function vi(e) {
          return e.startsWith('use') || Ei.includes(e);
        }
        function Si(e) {
          return Object.assign({ useSyncExternalStore: F }, e);
        }
        function Ai(e, t) {
          const n = Io(e),
            r = b({}, n),
            s = { react: Si(e), hookImpl: n, act: t };
          t
            && (n.useForceUpdate = () => {
              const [, a] = e.useState({});
              return () => t(() => a({}));
            });
          const o = Un;
          return (
            Object.keys(o).forEach((a) => {
              const u = o[a];
              vi(a) ? (r[a] = u.bind(null, s)) : (r[a] = u);
            }),
            Object.assign({ model: (a) => gi(r, a), modelFactory: (a) => mi(r, a) }, r)
          );
        }
        function Ki(e) {
          const { inited: t, API: n } = zo();
          if (t) return n;
          const { heluxCtxKey: r, standalone: s, transfer: o, reactLib: c, act: a } = e,
            u = X[r],
            i = (l, f) => {
              const d = f || Jn(),
                y = Ai(c, a);
              return er({ ROOT: d, inited: !0, api: y }), (X[l] = d), y;
            };
          if (!u) return i(r);
          if (s) return i(`${String(r)}_${Date.now()}`);
          if (o) {
            const l = Jn();
            er({ ROOT: l, inited: !0 }), o(u, l);
          }
          return i(r, u);
        }
        var Di = C(70079),
          _i = C.t(Di, 2),
          ro = Ki({ heluxCtxKey: '__HELUX__', reactLib: _i }),
          Ri = ro.share,
          {
            atom: Ti,
            atomx: bi,
            share: Ii,
            sharex: Mi,
            derive: Fi,
            deriveDict: wi,
            defineDeriveTask: ki,
            defineDeriveFnItem: Ci,
            runDerive: Oi,
            runDeriveTask: Li,
            watch: Ni,
            useAtom: Pi,
            useAtomX: xi,
            useReactive: Ui,
            useDerived: Vi,
            useWatch: Yi,
            useGlobalId: Gi,
            useService: Bi,
            useOnEvent: Hi,
            useMutable: ji,
            useMutateLoading: $i,
            useActionLoading: Wi,
            useEffect: Xi,
            useLayoutEffect: zi,
            useStable: Ji,
            useObject: Zi,
            useLocalForceUpdate: Qi,
            useGlobalForceUpdate: qi,
            action: ef,
            signal: tf,
            block: nf,
            dynamicBlock: rf,
            $: sf,
            mutate: of,
            mutateDict: cf,
            runMutate: af,
            runMutateTask: uf,
            sync: ff,
            syncer: lf,
            model: df,
            modelFactory: pf,
            emit: yf,
            on: hf,
            init: gf,
            reactiveDesc: mf,
            flush: Ef,
            isAtom: vf,
            isDerivedAtom: Sf,
            storeSrv: Af,
            shallowCompare: Kf,
            isDiff: Df,
            produce: _f,
            getMutateLoading: Rf,
            getActionLoading: Tf,
            getDeriveLoading: bf,
            getRawState: If,
            getSnap: Mf,
            getAtom: Ff,
            addMiddleware: wf,
            addPlugin: kf,
            EVENT_NAME: Cf,
            RECORD_LOADING: Of,
            VER: Lf,
            LIMU_VER: Nf,
          } = ro;
      },
    },
  ]);
})();
