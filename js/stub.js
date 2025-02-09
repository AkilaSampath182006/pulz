!(function () {
  "use strict";
  function e(t) {
    return (e =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(t);
  }
  function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      (a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        Object.defineProperty(e, a.key, a);
    }
  }
  var n = "stub",
    a = "loading",
    r = "hidden",
    o = "not ready",
    i = "tcfeuv2",
    s = "usnat",
    c = function (e) {
      return Array.isArray
        ? Array.isArray(e)
        : "[object Array]" === {}.toString.call(e);
    },
    u = function t(n, a, r, o) {
      var i,
        s = n || {},
        u = a || {};
      return (
        r
          ? (i = s)
          : ((i = c(s) ? [] : {}),
            Object.keys(s).forEach(function (e) {
              i[e] = s[e];
            })),
        o
          ? Object.keys(u).forEach(function (n) {
              "object" !== e(u[n]) ||
              null === u[n] ||
              u[n] instanceof HTMLElement
                ? (i[n] = u[n])
                : ("object" !== e(i[n]) && (i[n] = c(u[n]) ? [] : {}),
                  (i[n] = t(i[n], u[n], r, !0)));
            })
          : Object.keys(u).forEach(function (e) {
              i[e] = u[e];
            }),
        i
      );
    },
    p = function (e, t) {
      return u(e, t, !1, !0);
    },
    l = (function () {
      function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
        var i = {
          cmpId: t,
          cmpStatus: a,
          cmpDisplayStatus: r,
          supportedAPIs: [],
          supportedAPIs_1_1: [],
          sectionList: [],
          applicableSections: [],
          gppVersion: n || "1.0",
          signalStatus: o,
          gppString: "",
          gppUpdatedSectionIds: {},
          parsedSections: {},
        };
        (this.data = i), (this.fireEvent = function () {});
      }
      var n, i, s;
      return (
        (n = e),
        (i = [
          {
            key: "setFireEvent",
            value: function (e) {
              this.fireEvent = e;
            },
          },
          {
            key: "updateData",
            value: function (e) {
              this.data = p(this.data, e);
            },
          },
          {
            key: "getModelStructure",
            value: function (e) {
              return "1.1" === e
                ? [
                    "gppVersion",
                    "cmpStatus",
                    "cmpDisplayStatus",
                    "signalStatus",
                    "supportedAPIs",
                    "cmpId",
                    "sectionList",
                    "applicableSections",
                    "gppString",
                    "parsedSections",
                  ]
                : [
                    "gppVersion",
                    "cmpStatus",
                    "cmpDisplayStatus",
                    "supportedAPIs",
                    "cmpId",
                  ];
            },
          },
          {
            key: "getItemValue",
            value: function (e, t) {
              switch (t) {
                case "sectionList":
                  return Object.keys(this.data.gppUpdatedSectionIds).map(
                    Number
                  );
                case "supportedAPIs":
                  return this.data[
                    "1.1" === e ? "supportedAPIs_1_1" : "supportedAPIs"
                  ];
                default:
                  return this.data[t];
              }
            },
          },
          {
            key: "getPingData",
            value: function (e) {
              var t = this,
                n = this.getModelStructure(e.toString()),
                a = {};
              return (
                n.forEach(function (n) {
                  a[n] = t.getItemValue(e, n);
                }),
                a
              );
            },
          },
        ]) && t(n.prototype, i),
        s && t(n, s),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        e
      );
    })(),
    d = [2024, 0, 31, 8],
    f = function () {
      return Date.UTC.apply(window, d) <= Date.now() ? 1.1 : 1;
    },
    v = function (e) {
      return (function (e) {
        var t = e.store,
          a = e.cmpId,
          r = void 0 === a ? 0 : a,
          o = e.supportedAPIs,
          i = void 0 === o ? [] : o,
          s = "1.0",
          c = new l(r, s);
        return function () {
          for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
            a[r] = arguments[r];
          var o = a[0],
            u = a[1],
            p = a[2],
            l = a[3],
            d = void 0 === l ? s : l;
          if (Number(d) === Number(s) && "string" == typeof o)
            switch (o) {
              case "ping":
                return (
                  c.updateData({ cmpStatus: n, supportedAPIs: i }),
                  c.getPingData(d)
                );
              case "addEventListener":
                var f = 0,
                  v = !1;
                return (
                  "function" == typeof u &&
                    ((v = !0),
                    (f = ++t.lastId),
                    t.events.push({
                      id: f,
                      callback: u,
                      parameter: p,
                      version: d,
                    })),
                  { eventName: "listenerRegistered", listenerId: f, data: v }
                );
              case "removeEventListener":
                for (var g = !1, y = 0; y < t.events.length; ++y)
                  if (t.events[y].id === p) {
                    t.events.splice(y, 1), (g = !0);
                    break;
                  }
                return { eventName: "listenerRemoved", listenerId: p, data: g };
              case "hasSection":
              case "getSection":
              case "getField":
              case "getGPPData":
                return null;
              default:
                t.queue.push(a);
            }
        };
      })({ store: e, cmpId: 123, supportedAPIs: [i, s] });
    },
    g = function (e) {
      return (function (e) {
        var t = e.store,
          a = e.cmpId,
          r = void 0 === a ? 0 : a,
          o = e.supportedAPIs,
          i = void 0 === o ? [] : o,
          s = "1.1",
          c = new l(r, s);
        c.updateData({ cmpStatus: n, supportedAPIs: i });
        var u = function (e) {
          try {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              n[a - 1] = arguments[a];
            e.apply(void 0, n);
          } catch (e) {}
        };
        return function () {
          for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          var r = n[0],
            o = n[1],
            i = n[2],
            p = n[3],
            l = void 0 === p ? s : p;
          if (
            Number(l) === Number(s) &&
            "string" == typeof r &&
            "function" == typeof o
          )
            switch (r) {
              case "ping":
                u(o, c.getPingData(l), !0);
                break;
              case "addEventListener":
                var d = ++t.lastId;
                t.events.push({ id: d, callback: o, version: l });
                var f = {
                  eventName: "listenerRegistered",
                  listenerId: d,
                  data: !0,
                  pingData: c.getPingData(l),
                };
                t.events.forEach(function (e) {
                  u(e.callback, f, !0);
                });
                break;
              case "removeEventListener":
                for (var v = !1, g = 0; g < t.events.length; ++g)
                  if (t.events[g].id === i) {
                    t.events.splice(g, 1), (v = !0);
                    break;
                  }
                u(o, v, !0);
                var y = {
                  eventName: "listenerRemoved",
                  listenerId: i,
                  data: v,
                  pingData: c.getPingData(l),
                };
                t.events.forEach(function (e) {
                  u(e.callback, y, !0);
                });
                break;
              case "hasSection":
              case "getSection":
              case "getField":
                u(o, null, "string" == typeof i);
                break;
              default:
                t.queue.push(n);
            }
          else "function" == typeof o && o(null, !1);
        };
      })({
        store: e,
        cmpId: 123,
        supportedAPIs: [
          "".concat(2, ":").concat(i),
          "".concat(7, ":").concat(s),
        ],
      });
    };
  !(function (t) {
    var n,
      a,
      r = "__gppLocator",
      o = window,
      i = o;
    var s = function () {
      return a.apply(void 0, arguments);
    };
    for (s.queue = [], s.lastId = 0, s.events = [], a = t(s); i; ) {
      try {
        if (i.frames.__gppLocator) {
          n = i;
          break;
        }
      } catch (e) {}
      if (i === o.top) break;
      i = i.parent;
    }
    n ||
      (!(function e() {
        var t = o.document,
          n = !!o.frames.__gppLocator;
        if (!n)
          if (t.body) {
            var a = t.createElement("iframe");
            (a.style.cssText = "display:none"),
              a.setAttribute("aria-hidden", "true"),
              a.setAttribute("title", "GPP Locator"),
              (a.name = r),
              t.body.appendChild(a);
          } else setTimeout(e, 5);
        return !n;
      })(),
      (o.__gpp = s),
      o.addEventListener(
        "message",
        function (t) {
          var n = "string" == typeof t.data,
            a = {};
          if (n)
            try {
              a = JSON.parse(t.data);
            } catch (e) {}
          else a = t.data;
          var r = "object" === e(a) ? a.__gppCall : null;
          r &&
            window.__gpp(
              r.command,
              function (e, a) {
                var o = {
                  __gppReturn: { returnValue: e, success: a, callId: r.callId },
                };
                t &&
                  t.source &&
                  t.source.postMessage &&
                  t.source.postMessage(n ? JSON.stringify(o) : o, "*");
              },
              r.parameter,
              r.version
            );
        },
        !1
      ));
  })(function (e) {
    var t = v(e),
      n = g(e);
    return function () {
      var e,
        a,
        r,
        o,
        i =
          arguments.length >= 4
            ? arguments.length <= 3
              ? void 0
              : arguments[3]
            : null;
      return (
        (i =
          null !==
            (e =
              null !== (a = i) && void 0 !== a
                ? a
                : null === (r = window._iub) ||
                  void 0 === r ||
                  null === (o = r.csConfiguration) ||
                  void 0 === o
                ? void 0
                : o.gppVersion) && void 0 !== e
            ? e
            : f()),
        1 === Number(i)
          ? t.apply(void 0, arguments)
          : n.apply(void 0, arguments)
      );
    };
  });
})();
