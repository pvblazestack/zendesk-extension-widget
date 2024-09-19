var contactsWidget = (function () {
  "use strict";
  function t() {}
  function e(t) {
    return t();
  }
  function n() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(e);
  }
  function i(t) {
    return "function" == typeof t;
  }
  function s(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function c(e, n, o) {
    e.$$.on_destroy.push(
      (function (e, ...n) {
        if (null == e) return t;
        const o = e.subscribe(...n);
        return o.unsubscribe ? () => o.unsubscribe() : o;
      })(n, o)
    );
  }
  function r(t, e) {
    t.appendChild(e);
  }
  function l(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function a(t) {
    t.parentNode.removeChild(t);
  }
  function u(t) {
    return document.createElement(t);
  }
  function f(t) {
    return document.createTextNode(t);
  }
  function d() {
    return f(" ");
  }
  function m(t, e, n, o) {
    return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
  }
  function g(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function p(t, e, n, o) {
    t.style.setProperty(e, n, o ? "important" : "");
  }
  let h;
  function w(t) {
    h = t;
  }
  function v() {
    if (!h) throw new Error("Function called outside component initialization");
    return h;
  }
  const $ = [],
    b = [],
    _ = [],
    k = [],
    y = Promise.resolve();
  let x = !1;
  function C(t) {
    _.push(t);
  }
  let E = !1;
  const I = new Set();
  function j() {
    if (!E) {
      E = !0;
      do {
        for (let t = 0; t < $.length; t += 1) {
          const e = $[t];
          w(e), A(e.$$);
        }
        for (w(null), $.length = 0; b.length; ) b.pop()();
        for (let t = 0; t < _.length; t += 1) {
          const e = _[t];
          I.has(e) || (I.add(e), e());
        }
        _.length = 0;
      } while ($.length);
      for (; k.length; ) k.pop()();
      (x = !1), (E = !1), I.clear();
    }
  }
  function A(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(C);
    }
  }
  const S = new Set();
  let W;
  function L(t, e) {
    t && t.i && (S.delete(t), t.i(e));
  }
  function z(t, e, n, o) {
    if (t && t.o) {
      if (S.has(t)) return;
      S.add(t),
        W.c.push(() => {
          S.delete(t), o && (n && t.d(1), o());
        }),
        t.o(e);
    }
  }
  function M(t) {
    t && t.c();
  }
  function O(t, n, s, c) {
    const { fragment: r, on_mount: l, on_destroy: a, after_update: u } = t.$$;
    r && r.m(n, s),
      c ||
        C(() => {
          const n = l.map(e).filter(i);
          a ? a.push(...n) : o(n), (t.$$.on_mount = []);
        }),
      u.forEach(C);
  }
  function N(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (o(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function q(t, e) {
    -1 === t.$$.dirty[0] &&
      ($.push(t), x || ((x = !0), y.then(j)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function T(e, i, s, c, r, l, u = [-1]) {
    const f = h;
    w(e);
    const d = (e.$$ = {
      fragment: null,
      ctx: null,
      props: l,
      update: t,
      not_equal: r,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(f ? f.$$.context : i.context || []),
      callbacks: n(),
      dirty: u,
      skip_bound: !1,
    });
    let m = !1;
    if (
      ((d.ctx = s
        ? s(e, i.props || {}, (t, n, ...o) => {
            const i = o.length ? o[0] : n;
            return (
              d.ctx &&
                r(d.ctx[t], (d.ctx[t] = i)) &&
                (!d.skip_bound && d.bound[t] && d.bound[t](i), m && q(e, t)),
              n
            );
          })
        : []),
      d.update(),
      (m = !0),
      o(d.before_update),
      (d.fragment = !!c && c(d.ctx)),
      i.target)
    ) {
      if (i.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(i.target);
        d.fragment && d.fragment.l(t), t.forEach(a);
      } else d.fragment && d.fragment.c();
      i.intro && L(e.$$.fragment),
        O(e, i.target, i.anchor, i.customElement),
        j();
    }
    w(f);
  }
  class B {
    $destroy() {
      N(this, 1), (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const H = [];
  function P(e, n = t) {
    let o;
    const i = [];
    function c(t) {
      if (s(e, t) && ((e = t), o)) {
        const t = !H.length;
        for (let t = 0; t < i.length; t += 1) {
          const n = i[t];
          n[1](), H.push(n, e);
        }
        if (t) {
          for (let t = 0; t < H.length; t += 2) H[t][0](H[t + 1]);
          H.length = 0;
        }
      }
    }
    return {
      set: c,
      update: function (t) {
        c(t(e));
      },
      subscribe: function (s, r = t) {
        const l = [s, r];
        return (
          i.push(l),
          1 === i.length && (o = n(c) || t),
          s(e),
          () => {
            const t = i.indexOf(l);
            -1 !== t && i.splice(t, 1), 0 === i.length && (o(), (o = null));
          }
        );
      },
    };
  }
  var Z = P(!1),
    F = P(!0);
  function U(t) {
    let e;
    return {
      c() {
        (e = u("div")),
          (e.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 21 21" width="21" height="21"><g transform="matrix(0.875,0,0,0.875,0,0)"><path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" fill="#ffffff" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path></g></svg>'),
          g(e, "class", "widget-contacts__icon svelte-44sttq");
      },
      m(t, n) {
        l(t, e, n);
      },
      d(t) {
        t && a(e);
      },
    };
  }
  function D(t) {
    let e;
    return {
      c() {
        (e = u("div")),
          (e.innerHTML =
            '<svg focused="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 26 26" width="26" height="26"><g transform="matrix(1.0833333333333333,0,0,1.0833333333333333,0,0)"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z" fill="#ffffff" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"></path></g></svg>'),
          g(e, "class", "widget-contacts__icon svelte-44sttq");
      },
      m(t, n) {
        l(t, e, n);
      },
      d(t) {
        t && a(e);
      },
    };
  }
  function G(e) {
    let n, o, i;
    function s(t, e) {
      return t[0] ? D : U;
    }
    let c = s(e),
      r = c(e);
    return {
      c() {
        (n = u("button")),
          r.c(),
          g(n, "class", "widget-contacts__button svelte-44sttq"),
          g(n, "type", "button"),
          g(n, "name", "Channel Menu"),
          g(n, "aria-label", "Channel Menu"),
          g(n, "aria-expanded", "true"),
          g(n, "aria-haspopup", "true");
      },
      m(t, s) {
        l(t, n, s), r.m(n, null), o || ((i = m(n, "click", e[1])), (o = !0));
      },
      p(t, [e]) {
        c !== (c = s(t)) && (r.d(1), (r = c(t)), r && (r.c(), r.m(n, null)));
      },
      i: t,
      o: t,
      d(t) {
        t && a(n), r.d(), (o = !1), i();
      },
    };
  }
  function J(t, e, n) {
    let o, i;
    return (
      c(t, Z, (t) => n(2, (o = t))),
      c(t, F, (t) => n(0, (i = t))),
      [
        i,
        function () {
          Z.set(!o), F.set(!i);
        },
      ]
    );
  }
  class K extends B {
    constructor(t) {
      super(), T(this, t, J, G, s, {});
    }
  }
  function Q(e) {
    let n,
      o,
      s,
      c,
      p,
      h,
      w,
      v,
      $,
      b,
      _,
      k,
      y,
      x = e[0].title + "";
    return {
      c() {
        (n = u("li")),
          (o = u("a")),
          (s = u("div")),
          (c = u("img")),
          (w = d()),
          (v = u("span")),
          ($ = f(x)),
          g(c, "class", "widget-contacts-menu__link-icon-svg svg-icon"),
          c.src !== (p = e[0].icon) && g(c, "src", p),
          g(c, "alt", (h = "Icons " + e[0].name)),
          g(s, "class", "widget-contacts-menu__link-icon svelte-l4td3o"),
          g(v, "class", "widget-contacts-menu__link-name svelte-l4td3o"),
          g(o, "class", "widget-contacts-menu__link svelte-l4td3o"),
          g(o, "href", (b = e[0].link)),
          g(o, "target", (_ = e[0].newWindow ? "_blank" : "_self")),
          g(o, "rel", "noopener"),
          g(o, "tabindex", "0"),
          g(o, "role", "option"),
          g(n, "class", "widget-contacts-menu__item svelte-l4td3o"),
          g(n, "role", "presentation");
      },
      m(t, a) {
        l(t, n, a),
          r(n, o),
          r(o, s),
          r(s, c),
          e[3](s),
          r(o, w),
          r(o, v),
          r(v, $),
          k ||
            ((y = m(o, "click", function () {
              i(e[0].onClick ? e[2](e[0].onClick) : "") &&
                (e[0].onClick ? e[2](e[0].onClick) : "").apply(this, arguments);
            })),
            (k = !0));
      },
      p(t, [n]) {
        (e = t),
          1 & n && c.src !== (p = e[0].icon) && g(c, "src", p),
          1 & n && h !== (h = "Icons " + e[0].name) && g(c, "alt", h),
          1 & n &&
            x !== (x = e[0].title + "") &&
            (function (t, e) {
              (e = "" + e), t.wholeText !== e && (t.data = e);
            })($, x),
          1 & n && b !== (b = e[0].link) && g(o, "href", b),
          1 & n &&
            _ !== (_ = e[0].newWindow ? "_blank" : "_self") &&
            g(o, "target", _);
      },
      i: t,
      o: t,
      d(t) {
        t && a(n), e[3](null), (k = !1), y();
      },
    };
  }
  function R(t, e, n) {
    let o, i;
    c(t, Z, (t) => n(4, (o = t))), c(t, F, (t) => n(5, (i = t)));
    let s,
      { menuItem: r } = e;
    var l;
    return (
      (l = async () => {
        const t = s.querySelector(".svg-icon"),
          e = t.getAttribute("src"),
          o = t.className ? t.className.split(" ")[0] : "";
        e.includes("svg") &&
          (async function () {
            const t = await fetch(e),
              i = await t.text();
            n(1, (s.innerHTML = i), s), s.querySelector("svg").classList.add(o);
          })();
      }),
      v().$$.on_mount.push(l),
      (t.$$set = (t) => {
        "menuItem" in t && n(0, (r = t.menuItem));
      }),
      [
        r,
        s,
        function (t) {
          t(), Z.set(!o), F.set(!i);
        },
        function (t) {
          b[t ? "unshift" : "push"](() => {
            (s = t), n(1, s);
          });
        },
      ]
    );
  }
  class V extends B {
    constructor(t) {
      super(), T(this, t, R, Q, s, { menuItem: 0 });
    }
  }
  function X(t, e, n) {
    const o = t.slice();
    return (o[4] = e[n]), o;
  }
  function Y(e) {
    let n,
      o,
      i =
        e[4].active &&
        (function (e) {
          let n, o;
          return (
            (n = new V({ props: { menuItem: e[4] } })),
            {
              c() {
                M(n.$$.fragment);
              },
              m(t, e) {
                O(n, t, e), (o = !0);
              },
              p: t,
              i(t) {
                o || (L(n.$$.fragment, t), (o = !0));
              },
              o(t) {
                z(n.$$.fragment, t), (o = !1);
              },
              d(t) {
                N(n, t);
              },
            }
          );
        })(e);
    return {
      c() {
        i && i.c(), (n = f(""));
      },
      m(t, e) {
        i && i.m(t, e), l(t, n, e), (o = !0);
      },
      p(t, e) {
        t[4].active && i.p(t, e);
      },
      i(t) {
        o || (L(i), (o = !0));
      },
      o(t) {
        z(i), (o = !1);
      },
      d(t) {
        i && i.d(t), t && a(n);
      },
    };
  }
  function tt(t) {
    let e,
      n,
      i,
      s,
      c,
      f,
      m,
      h,
      w = t[1].menuItems,
      v = [];
    for (let e = 0; e < w.length; e += 1) v[e] = Y(X(t, w, e));
    const $ = (t) =>
      z(v[t], 1, 1, () => {
        v[t] = null;
      });
    return {
      c() {
        (e = u("div")),
          (n = u("header")),
          (i = u("h2")),
          (i.textContent = `${t[1].title}`),
          (s = d()),
          (c = u("p")),
          (c.textContent = `${t[1].description}`),
          (f = d()),
          (m = u("ul"));
        for (let t = 0; t < v.length; t += 1) v[t].c();
        g(i, "class", "widget-contacts-menu__title svelte-1wugmya"),
          g(c, "class", "widget-contacts-menu__description svelte-1wugmya"),
          g(n, "class", "widget-contacts-menu__header svelte-1wugmya"),
          g(m, "class", "widget-contacts-menu__list svelte-1wugmya"),
          g(m, "aria-label", "Choose channel"),
          g(
            e,
            "class",
            "widget-contacts__menu widget-contacts-menu svelte-1wugmya"
          ),
          g(e, "role", "dialog"),
          p(e, "visibility", t[0] ? "visible" : "hidden");
      },
      m(t, o) {
        l(t, e, o), r(e, n), r(n, i), r(n, s), r(n, c), r(e, f), r(e, m);
        for (let t = 0; t < v.length; t += 1) v[t].m(m, null);
        h = !0;
      },
      p(t, [n]) {
        if (2 & n) {
          let e;
          for (w = t[1].menuItems, e = 0; e < w.length; e += 1) {
            const o = X(t, w, e);
            v[e]
              ? (v[e].p(o, n), L(v[e], 1))
              : ((v[e] = Y(o)), v[e].c(), L(v[e], 1), v[e].m(m, null));
          }
          for (W = { r: 0, c: [], p: W }, e = w.length; e < v.length; e += 1)
            $(e);
          W.r || o(W.c), (W = W.p);
        }
        (!h || 1 & n) && p(e, "visibility", t[0] ? "visible" : "hidden");
      },
      i(t) {
        if (!h) {
          for (let t = 0; t < w.length; t += 1) L(v[t]);
          h = !0;
        }
      },
      o(t) {
        v = v.filter(Boolean);
        for (let t = 0; t < v.length; t += 1) z(v[t]);
        h = !1;
      },
      d(t) {
        t && a(e),
          (function (t, e) {
            for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
          })(v, t);
      },
    };
  }
  function et(t, e) {
    let n = t.slice();
    return (
      void 0 === e ||
        e.forEach((t) => {
          n.forEach((e) => {
            if (t.name === e.name)
              for (let n in e)
                Object.prototype.hasOwnProperty.call(t, [n]) && (e[n] = t[n]);
          });
        }),
      n
    );
  }
  function nt(t, e, n) {
    let o;
    c(t, Z, (t) => n(0, (o = t)));
    let { defaultSettings: i } = e;
    const s = ((r = "customSettings"), v().$$.context.get(r));
    var r;
    const l = (function (t, e) {
      let n = {};
      for (let o in e)
        Object.prototype.hasOwnProperty.call(t, [o]) &&
          !Array.isArray(e[o]) &&
          (void 0 !== e[o] ? (n[o] = e[o]) : (n[o] = t[o])),
          Array.isArray(t[o]) && (n[o] = et(t[o], e[o]));
      return n;
    })(i, s);
    return (
      (t.$$set = (t) => {
        "defaultSettings" in t && n(2, (i = t.defaultSettings));
      }),
      [o, l, i]
    );
  }
  class ot extends B {
    constructor(t) {
      super(), T(this, t, nt, tt, s, { defaultSettings: 2 });
    }
  }
  function it(e) {
    let n, o, i, s, c;
    return (
      (o = new K({})),
      (s = new ot({ props: { defaultSettings: e[1] } })),
      {
        c() {
          (n = u("div")),
            M(o.$$.fragment),
            (i = d()),
            M(s.$$.fragment),
            g(n, "class", "widget-contacts svelte-1k7yf85"),
            p(
              n,
              "--brand-color",
              e[0].brandColor ? e[0].brandColor : e[1].brandColor
            );
        },
        m(t, e) {
          l(t, n, e), O(o, n, null), r(n, i), O(s, n, null), (c = !0);
        },
        p: t,
        i(t) {
          c || (L(o.$$.fragment, t), L(s.$$.fragment, t), (c = !0));
        },
        o(t) {
          z(o.$$.fragment, t), z(s.$$.fragment, t), (c = !1);
        },
        d(t) {
          t && a(n), N(o), N(s);
        },
      }
    );
  }
  function st(t, e, n) {
    let { title: o } = e,
      { description: i } = e,
      { menuItems: s } = e,
      { brandColor: c } = e;
    const r = { title: o, description: i, brandColor: c, menuItems: s };
    var l, a;
    (l = "customSettings"), (a = r), v().$$.context.set(l, a);
    const u = {
      title: "How can we help?",
      description: "Select a channel and let's talk.",
      brandColor: "#276fd0",
      menuItems: [
        {
          name: "chat",
          title: "Chat",
          icon: "chat.svg",
          link: "javascript:void(0);",
          onClick() {
            zE("webWidget", "show"),
              zE("webWidget", "open"),
              zE("webWidget:on", "close", function () {
                zE("webWidget", "hide");
              });
          },
          active: !1,
        },
        {
          name: "new-ticket",
          title: "New Ticket",
          icon: "new-ticket.svg",
          link: "javascript:void(0);",
          onClick: !1,
          active: !0,
          newWindow: !1,
        },
        {
          name: "call",
          title: "Call (US Number)",
          icon: "call.svg",
          link: "javascript:void(0);",
          onClick: !1,
          active: !0,
          newWindow: !1,
        },
        {
          name: "new-meeting",
          title: "Free Demo",
          icon: "new-meeting.svg",
          link: "javascript:void(0);",
          onClick: !1,
          active: !0,
          newWindow: !1,
        },
        {
          name: "web-site",
          title: "Web site",
          icon: "web-site.svg",
          link: "javascript:void(0);",
          onClick: !1,
          active: !0,
          newWindow: !1,
        },
      ],
    };
    return (
      (function () {
        let t;
        function e(e) {
          e.menuItems.forEach((e) => {
            "chat" === e.name && (t = e.active);
          });
        }
        if ((e(void 0 !== r.menuItems ? r : u), t)) {
          let t = setInterval(() => {
            "undefined" != typeof zE &&
              (zE("webWidget", "hide"), clearInterval(t)),
              console.log("Function search check zE");
          }, 500);
        }
      })(),
      (t.$$set = (t) => {
        "title" in t && n(2, (o = t.title)),
          "description" in t && n(3, (i = t.description)),
          "menuItems" in t && n(4, (s = t.menuItems)),
          "brandColor" in t && n(5, (c = t.brandColor));
      }),
      [r, u, o, i, s, c]
    );
  }
  class ct extends B {
    constructor(t) {
      super(),
        T(this, t, st, it, s, {
          title: 2,
          description: 3,
          menuItems: 4,
          brandColor: 5,
        });
    }
  }
  return function (t) {
    return new ct({ target: document.body, props: t });
  };
})();
