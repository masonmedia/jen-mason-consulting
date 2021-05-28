// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/lazysizes.min.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lazysizes - v5.2.2 */
!function (e) {
  var t = function (u, D, f) {
    "use strict";

    var k, H;

    if (function () {
      var e;
      var t = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: true,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: true,
        ricTimeout: 0,
        throttleDelay: 125
      };
      H = u.lazySizesConfig || u.lazysizesConfig || {};

      for (e in t) {
        if (!(e in H)) {
          H[e] = t[e];
        }
      }
    }(), !D || !D.getElementsByClassName) {
      return {
        init: function init() {},
        cfg: H,
        noSupport: true
      };
    }

    var O = D.documentElement,
        a = u.HTMLPictureElement,
        P = "addEventListener",
        $ = "getAttribute",
        q = u[P].bind(u),
        I = u.setTimeout,
        U = u.requestAnimationFrame || I,
        l = u.requestIdleCallback,
        j = /^picture$/i,
        r = ["load", "error", "lazyincluded", "_lazyloaded"],
        i = {},
        G = Array.prototype.forEach,
        J = function J(e, t) {
      if (!i[t]) {
        i[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
      }

      return i[t].test(e[$]("class") || "") && i[t];
    },
        K = function K(e, t) {
      if (!J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
      }
    },
        Q = function Q(e, t) {
      var i;

      if (i = J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").replace(i, " "));
      }
    },
        V = function V(t, i, e) {
      var a = e ? P : "removeEventListener";

      if (e) {
        V(t, i);
      }

      r.forEach(function (e) {
        t[a](e, i);
      });
    },
        X = function X(e, t, i, a, r) {
      var n = D.createEvent("Event");

      if (!i) {
        i = {};
      }

      i.instance = k;
      n.initEvent(t, !a, !r);
      n.detail = i;
      e.dispatchEvent(n);
      return n;
    },
        Y = function Y(e, t) {
      var i;

      if (!a && (i = u.picturefill || H.pf)) {
        if (t && t.src && !e[$]("srcset")) {
          e.setAttribute("srcset", t.src);
        }

        i({
          reevaluate: true,
          elements: [e]
        });
      } else if (t && t.src) {
        e.src = t.src;
      }
    },
        Z = function Z(e, t) {
      return (getComputedStyle(e, null) || {})[t];
    },
        s = function s(e, t, i) {
      i = i || e.offsetWidth;

      while (i < H.minSize && t && !e._lazysizesWidth) {
        i = t.offsetWidth;
        t = t.parentNode;
      }

      return i;
    },
        ee = function () {
      var i, a;
      var t = [];
      var r = [];
      var n = t;

      var s = function s() {
        var e = n;
        n = t.length ? r : t;
        i = true;
        a = false;

        while (e.length) {
          e.shift()();
        }

        i = false;
      };

      var e = function e(_e, t) {
        if (i && !t) {
          _e.apply(this, arguments);
        } else {
          n.push(_e);

          if (!a) {
            a = true;
            (D.hidden ? I : U)(s);
          }
        }
      };

      e._lsFlush = s;
      return e;
    }(),
        te = function te(i, e) {
      return e ? function () {
        ee(i);
      } : function () {
        var e = this;
        var t = arguments;
        ee(function () {
          i.apply(e, t);
        });
      };
    },
        ie = function ie(e) {
      var i;
      var a = 0;
      var r = H.throttleDelay;
      var n = H.ricTimeout;

      var t = function t() {
        i = false;
        a = f.now();
        e();
      };

      var s = l && n > 49 ? function () {
        l(t, {
          timeout: n
        });

        if (n !== H.ricTimeout) {
          n = H.ricTimeout;
        }
      } : te(function () {
        I(t);
      }, true);
      return function (e) {
        var t;

        if (e = e === true) {
          n = 33;
        }

        if (i) {
          return;
        }

        i = true;
        t = r - (f.now() - a);

        if (t < 0) {
          t = 0;
        }

        if (e || t < 9) {
          s();
        } else {
          I(s, t);
        }
      };
    },
        ae = function ae(e) {
      var t, i;
      var a = 99;

      var r = function r() {
        t = null;
        e();
      };

      var n = function n() {
        var e = f.now() - i;

        if (e < a) {
          I(n, a - e);
        } else {
          (l || r)(r);
        }
      };

      return function () {
        i = f.now();

        if (!t) {
          t = I(n, a);
        }
      };
    },
        e = function () {
      var v, m, c, h, e;
      var y, z, g, p, C, b, A;
      var n = /^img$/i;
      var d = /^iframe$/i;
      var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
      var _ = 0;
      var w = 0;
      var N = 0;
      var M = -1;

      var x = function x(e) {
        N--;

        if (!e || N < 0 || !e.target) {
          N = 0;
        }
      };

      var W = function W(e) {
        if (A == null) {
          A = Z(D.body, "visibility") == "hidden";
        }

        return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden");
      };

      var S = function S(e, t) {
        var i;
        var a = e;
        var r = W(e);
        g -= t;
        b += t;
        p -= t;
        C += t;

        while (r && (a = a.offsetParent) && a != D.body && a != O) {
          r = (Z(a, "opacity") || 1) > 0;

          if (r && Z(a, "overflow") != "visible") {
            i = a.getBoundingClientRect();
            r = C > i.left && p < i.right && b > i.top - 1 && g < i.bottom + 1;
          }
        }

        return r;
      };

      var t = function t() {
        var e, t, i, a, r, n, s, l, o, u, f, c;
        var d = k.elements;

        if ((h = H.loadMode) && N < 8 && (e = d.length)) {
          t = 0;
          M++;

          for (; t < e; t++) {
            if (!d[t] || d[t]._lazyRace) {
              continue;
            }

            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
              R(d[t]);
              continue;
            }

            if (!(l = d[t][$]("data-expand")) || !(n = l * 1)) {
              n = w;
            }

            if (!u) {
              u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
              k._defEx = u;
              f = u * H.expFactor;
              c = H.hFac;
              A = null;

              if (w < f && N < 1 && M > 2 && h > 2 && !D.hidden) {
                w = f;
                M = 0;
              } else if (h > 1 && M > 1 && N < 6) {
                w = u;
              } else {
                w = _;
              }
            }

            if (o !== n) {
              y = innerWidth + n * c;
              z = innerHeight + n;
              s = n * -1;
              o = n;
            }

            i = d[t].getBoundingClientRect();

            if ((b = i.bottom) >= s && (g = i.top) <= z && (C = i.right) >= s * c && (p = i.left) <= y && (b || C || p || g) && (H.loadHidden || W(d[t])) && (m && N < 3 && !l && (h < 3 || M < 4) || S(d[t], n))) {
              R(d[t]);
              r = true;

              if (N > 9) {
                break;
              }
            } else if (!r && m && !a && N < 4 && M < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !l && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
              a = v[0] || d[t];
            }
          }

          if (a && !r) {
            R(a);
          }
        }
      };

      var i = ie(t);

      var B = function B(e) {
        var t = e.target;

        if (t._lazyCache) {
          delete t._lazyCache;
          return;
        }

        x(e);
        K(t, H.loadedClass);
        Q(t, H.loadingClass);
        V(t, L);
        X(t, "lazyloaded");
      };

      var a = te(B);

      var L = function L(e) {
        a({
          target: e.target
        });
      };

      var T = function T(t, i) {
        try {
          t.contentWindow.location.replace(i);
        } catch (e) {
          t.src = i;
        }
      };

      var F = function F(e) {
        var t;
        var i = e[$](H.srcsetAttr);

        if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
          e.setAttribute("media", t);
        }

        if (i) {
          e.setAttribute("srcset", i);
        }
      };

      var s = te(function (t, e, i, a, r) {
        var n, s, l, o, u, f;

        if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
          if (a) {
            if (i) {
              K(t, H.autosizesClass);
            } else {
              t.setAttribute("sizes", a);
            }
          }

          s = t[$](H.srcsetAttr);
          n = t[$](H.srcAttr);

          if (r) {
            l = t.parentNode;
            o = l && j.test(l.nodeName || "");
          }

          f = e.firesLoad || "src" in t && (s || n || o);
          u = {
            target: t
          };
          K(t, H.loadingClass);

          if (f) {
            clearTimeout(c);
            c = I(x, 2500);
            V(t, L, true);
          }

          if (o) {
            G.call(l.getElementsByTagName("source"), F);
          }

          if (s) {
            t.setAttribute("srcset", s);
          } else if (n && !o) {
            if (d.test(t.nodeName)) {
              T(t, n);
            } else {
              t.src = n;
            }
          }

          if (r && (s || o)) {
            Y(t, {
              src: n
            });
          }
        }

        if (t._lazyRace) {
          delete t._lazyRace;
        }

        Q(t, H.lazyClass);
        ee(function () {
          var e = t.complete && t.naturalWidth > 1;

          if (!f || e) {
            if (e) {
              K(t, "ls-is-cached");
            }

            B(u);
            t._lazyCache = true;
            I(function () {
              if ("_lazyCache" in t) {
                delete t._lazyCache;
              }
            }, 9);
          }

          if (t.loading == "lazy") {
            N--;
          }
        }, true);
      });

      var R = function R(e) {
        if (e._lazyRace) {
          return;
        }

        var t;
        var i = n.test(e.nodeName);
        var a = i && (e[$](H.sizesAttr) || e[$]("sizes"));
        var r = a == "auto";

        if ((r || !m) && i && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
          return;
        }

        t = X(e, "lazyunveilread").detail;

        if (r) {
          re.updateElem(e, true, e.offsetWidth);
        }

        e._lazyRace = true;
        N++;
        s(e, t, r, a, i);
      };

      var r = ae(function () {
        H.loadMode = 3;
        i();
      });

      var l = function l() {
        if (H.loadMode == 3) {
          H.loadMode = 2;
        }

        r();
      };

      var o = function o() {
        if (m) {
          return;
        }

        if (f.now() - e < 999) {
          I(o, 999);
          return;
        }

        m = true;
        H.loadMode = 3;
        i();
        q("scroll", l, true);
      };

      return {
        _: function _() {
          e = f.now();
          k.elements = D.getElementsByClassName(H.lazyClass);
          v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
          q("scroll", i, true);
          q("resize", i, true);
          q("pageshow", function (e) {
            if (e.persisted) {
              var t = D.querySelectorAll("." + H.loadingClass);

              if (t.length && t.forEach) {
                U(function () {
                  t.forEach(function (e) {
                    if (e.complete) {
                      R(e);
                    }
                  });
                });
              }
            }
          });

          if (u.MutationObserver) {
            new MutationObserver(i).observe(O, {
              childList: true,
              subtree: true,
              attributes: true
            });
          } else {
            O[P]("DOMNodeInserted", i, true);
            O[P]("DOMAttrModified", i, true);
            setInterval(i, 999);
          }

          q("hashchange", i, true);
          ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
            D[P](e, i, true);
          });

          if (/d$|^c/.test(D.readyState)) {
            o();
          } else {
            q("load", o);
            D[P]("DOMContentLoaded", i);
            I(o, 2e4);
          }

          if (k.elements.length) {
            t();

            ee._lsFlush();
          } else {
            i();
          }
        },
        checkElems: i,
        unveil: R,
        _aLSL: l
      };
    }(),
        re = function () {
      var i;
      var n = te(function (e, t, i, a) {
        var r, n, s;
        e._lazysizesWidth = a;
        a += "px";
        e.setAttribute("sizes", a);

        if (j.test(t.nodeName || "")) {
          r = t.getElementsByTagName("source");

          for (n = 0, s = r.length; n < s; n++) {
            r[n].setAttribute("sizes", a);
          }
        }

        if (!i.detail.dataAttr) {
          Y(e, i.detail);
        }
      });

      var a = function a(e, t, i) {
        var a;
        var r = e.parentNode;

        if (r) {
          i = s(e, r, i);
          a = X(e, "lazybeforesizes", {
            width: i,
            dataAttr: !!t
          });

          if (!a.defaultPrevented) {
            i = a.detail.width;

            if (i && i !== e._lazysizesWidth) {
              n(e, r, a, i);
            }
          }
        }
      };

      var e = function e() {
        var e;
        var t = i.length;

        if (t) {
          e = 0;

          for (; e < t; e++) {
            a(i[e]);
          }
        }
      };

      var t = ae(e);
      return {
        _: function _() {
          i = D.getElementsByClassName(H.autosizesClass);
          q("resize", t);
        },
        checkElems: t,
        updateElem: a
      };
    }(),
        t = function t() {
      if (!t.i && D.getElementsByClassName) {
        t.i = true;

        re._();

        e._();
      }
    };

    return I(function () {
      H.init && t();
    }), k = {
      cfg: H,
      autoSizer: re,
      loader: e,
      init: t,
      uP: Y,
      aC: K,
      rC: Q,
      hC: J,
      fire: X,
      gW: s,
      rAF: ee
    };
  }(e, e.document, Date);

  e.lazySizes = t, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t);
}("undefined" != typeof window ? window : {});
/*! lazysizes - v5.2.2 */

!function (e) {
  var t = function (u, D, f) {
    "use strict";

    var k, H;

    if (function () {
      var e;
      var t = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: true,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: true,
        ricTimeout: 0,
        throttleDelay: 125
      };
      H = u.lazySizesConfig || u.lazysizesConfig || {};

      for (e in t) {
        if (!(e in H)) {
          H[e] = t[e];
        }
      }
    }(), !D || !D.getElementsByClassName) {
      return {
        init: function init() {},
        cfg: H,
        noSupport: true
      };
    }

    var O = D.documentElement,
        a = u.HTMLPictureElement,
        P = "addEventListener",
        $ = "getAttribute",
        q = u[P].bind(u),
        I = u.setTimeout,
        U = u.requestAnimationFrame || I,
        l = u.requestIdleCallback,
        j = /^picture$/i,
        r = ["load", "error", "lazyincluded", "_lazyloaded"],
        i = {},
        G = Array.prototype.forEach,
        J = function J(e, t) {
      if (!i[t]) {
        i[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
      }

      return i[t].test(e[$]("class") || "") && i[t];
    },
        K = function K(e, t) {
      if (!J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
      }
    },
        Q = function Q(e, t) {
      var i;

      if (i = J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").replace(i, " "));
      }
    },
        V = function V(t, i, e) {
      var a = e ? P : "removeEventListener";

      if (e) {
        V(t, i);
      }

      r.forEach(function (e) {
        t[a](e, i);
      });
    },
        X = function X(e, t, i, a, r) {
      var n = D.createEvent("Event");

      if (!i) {
        i = {};
      }

      i.instance = k;
      n.initEvent(t, !a, !r);
      n.detail = i;
      e.dispatchEvent(n);
      return n;
    },
        Y = function Y(e, t) {
      var i;

      if (!a && (i = u.picturefill || H.pf)) {
        if (t && t.src && !e[$]("srcset")) {
          e.setAttribute("srcset", t.src);
        }

        i({
          reevaluate: true,
          elements: [e]
        });
      } else if (t && t.src) {
        e.src = t.src;
      }
    },
        Z = function Z(e, t) {
      return (getComputedStyle(e, null) || {})[t];
    },
        s = function s(e, t, i) {
      i = i || e.offsetWidth;

      while (i < H.minSize && t && !e._lazysizesWidth) {
        i = t.offsetWidth;
        t = t.parentNode;
      }

      return i;
    },
        ee = function () {
      var i, a;
      var t = [];
      var r = [];
      var n = t;

      var s = function s() {
        var e = n;
        n = t.length ? r : t;
        i = true;
        a = false;

        while (e.length) {
          e.shift()();
        }

        i = false;
      };

      var e = function e(_e2, t) {
        if (i && !t) {
          _e2.apply(this, arguments);
        } else {
          n.push(_e2);

          if (!a) {
            a = true;
            (D.hidden ? I : U)(s);
          }
        }
      };

      e._lsFlush = s;
      return e;
    }(),
        te = function te(i, e) {
      return e ? function () {
        ee(i);
      } : function () {
        var e = this;
        var t = arguments;
        ee(function () {
          i.apply(e, t);
        });
      };
    },
        ie = function ie(e) {
      var i;
      var a = 0;
      var r = H.throttleDelay;
      var n = H.ricTimeout;

      var t = function t() {
        i = false;
        a = f.now();
        e();
      };

      var s = l && n > 49 ? function () {
        l(t, {
          timeout: n
        });

        if (n !== H.ricTimeout) {
          n = H.ricTimeout;
        }
      } : te(function () {
        I(t);
      }, true);
      return function (e) {
        var t;

        if (e = e === true) {
          n = 33;
        }

        if (i) {
          return;
        }

        i = true;
        t = r - (f.now() - a);

        if (t < 0) {
          t = 0;
        }

        if (e || t < 9) {
          s();
        } else {
          I(s, t);
        }
      };
    },
        ae = function ae(e) {
      var t, i;
      var a = 99;

      var r = function r() {
        t = null;
        e();
      };

      var n = function n() {
        var e = f.now() - i;

        if (e < a) {
          I(n, a - e);
        } else {
          (l || r)(r);
        }
      };

      return function () {
        i = f.now();

        if (!t) {
          t = I(n, a);
        }
      };
    },
        e = function () {
      var v, m, c, h, e;
      var y, z, g, p, C, b, A;
      var n = /^img$/i;
      var d = /^iframe$/i;
      var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
      var _ = 0;
      var w = 0;
      var N = 0;
      var M = -1;

      var x = function x(e) {
        N--;

        if (!e || N < 0 || !e.target) {
          N = 0;
        }
      };

      var W = function W(e) {
        if (A == null) {
          A = Z(D.body, "visibility") == "hidden";
        }

        return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden");
      };

      var S = function S(e, t) {
        var i;
        var a = e;
        var r = W(e);
        g -= t;
        b += t;
        p -= t;
        C += t;

        while (r && (a = a.offsetParent) && a != D.body && a != O) {
          r = (Z(a, "opacity") || 1) > 0;

          if (r && Z(a, "overflow") != "visible") {
            i = a.getBoundingClientRect();
            r = C > i.left && p < i.right && b > i.top - 1 && g < i.bottom + 1;
          }
        }

        return r;
      };

      var t = function t() {
        var e, t, i, a, r, n, s, l, o, u, f, c;
        var d = k.elements;

        if ((h = H.loadMode) && N < 8 && (e = d.length)) {
          t = 0;
          M++;

          for (; t < e; t++) {
            if (!d[t] || d[t]._lazyRace) {
              continue;
            }

            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
              R(d[t]);
              continue;
            }

            if (!(l = d[t][$]("data-expand")) || !(n = l * 1)) {
              n = w;
            }

            if (!u) {
              u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
              k._defEx = u;
              f = u * H.expFactor;
              c = H.hFac;
              A = null;

              if (w < f && N < 1 && M > 2 && h > 2 && !D.hidden) {
                w = f;
                M = 0;
              } else if (h > 1 && M > 1 && N < 6) {
                w = u;
              } else {
                w = _;
              }
            }

            if (o !== n) {
              y = innerWidth + n * c;
              z = innerHeight + n;
              s = n * -1;
              o = n;
            }

            i = d[t].getBoundingClientRect();

            if ((b = i.bottom) >= s && (g = i.top) <= z && (C = i.right) >= s * c && (p = i.left) <= y && (b || C || p || g) && (H.loadHidden || W(d[t])) && (m && N < 3 && !l && (h < 3 || M < 4) || S(d[t], n))) {
              R(d[t]);
              r = true;

              if (N > 9) {
                break;
              }
            } else if (!r && m && !a && N < 4 && M < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !l && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
              a = v[0] || d[t];
            }
          }

          if (a && !r) {
            R(a);
          }
        }
      };

      var i = ie(t);

      var B = function B(e) {
        var t = e.target;

        if (t._lazyCache) {
          delete t._lazyCache;
          return;
        }

        x(e);
        K(t, H.loadedClass);
        Q(t, H.loadingClass);
        V(t, L);
        X(t, "lazyloaded");
      };

      var a = te(B);

      var L = function L(e) {
        a({
          target: e.target
        });
      };

      var T = function T(t, i) {
        try {
          t.contentWindow.location.replace(i);
        } catch (e) {
          t.src = i;
        }
      };

      var F = function F(e) {
        var t;
        var i = e[$](H.srcsetAttr);

        if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
          e.setAttribute("media", t);
        }

        if (i) {
          e.setAttribute("srcset", i);
        }
      };

      var s = te(function (t, e, i, a, r) {
        var n, s, l, o, u, f;

        if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
          if (a) {
            if (i) {
              K(t, H.autosizesClass);
            } else {
              t.setAttribute("sizes", a);
            }
          }

          s = t[$](H.srcsetAttr);
          n = t[$](H.srcAttr);

          if (r) {
            l = t.parentNode;
            o = l && j.test(l.nodeName || "");
          }

          f = e.firesLoad || "src" in t && (s || n || o);
          u = {
            target: t
          };
          K(t, H.loadingClass);

          if (f) {
            clearTimeout(c);
            c = I(x, 2500);
            V(t, L, true);
          }

          if (o) {
            G.call(l.getElementsByTagName("source"), F);
          }

          if (s) {
            t.setAttribute("srcset", s);
          } else if (n && !o) {
            if (d.test(t.nodeName)) {
              T(t, n);
            } else {
              t.src = n;
            }
          }

          if (r && (s || o)) {
            Y(t, {
              src: n
            });
          }
        }

        if (t._lazyRace) {
          delete t._lazyRace;
        }

        Q(t, H.lazyClass);
        ee(function () {
          var e = t.complete && t.naturalWidth > 1;

          if (!f || e) {
            if (e) {
              K(t, "ls-is-cached");
            }

            B(u);
            t._lazyCache = true;
            I(function () {
              if ("_lazyCache" in t) {
                delete t._lazyCache;
              }
            }, 9);
          }

          if (t.loading == "lazy") {
            N--;
          }
        }, true);
      });

      var R = function R(e) {
        if (e._lazyRace) {
          return;
        }

        var t;
        var i = n.test(e.nodeName);
        var a = i && (e[$](H.sizesAttr) || e[$]("sizes"));
        var r = a == "auto";

        if ((r || !m) && i && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
          return;
        }

        t = X(e, "lazyunveilread").detail;

        if (r) {
          re.updateElem(e, true, e.offsetWidth);
        }

        e._lazyRace = true;
        N++;
        s(e, t, r, a, i);
      };

      var r = ae(function () {
        H.loadMode = 3;
        i();
      });

      var l = function l() {
        if (H.loadMode == 3) {
          H.loadMode = 2;
        }

        r();
      };

      var o = function o() {
        if (m) {
          return;
        }

        if (f.now() - e < 999) {
          I(o, 999);
          return;
        }

        m = true;
        H.loadMode = 3;
        i();
        q("scroll", l, true);
      };

      return {
        _: function _() {
          e = f.now();
          k.elements = D.getElementsByClassName(H.lazyClass);
          v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
          q("scroll", i, true);
          q("resize", i, true);
          q("pageshow", function (e) {
            if (e.persisted) {
              var t = D.querySelectorAll("." + H.loadingClass);

              if (t.length && t.forEach) {
                U(function () {
                  t.forEach(function (e) {
                    if (e.complete) {
                      R(e);
                    }
                  });
                });
              }
            }
          });

          if (u.MutationObserver) {
            new MutationObserver(i).observe(O, {
              childList: true,
              subtree: true,
              attributes: true
            });
          } else {
            O[P]("DOMNodeInserted", i, true);
            O[P]("DOMAttrModified", i, true);
            setInterval(i, 999);
          }

          q("hashchange", i, true);
          ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
            D[P](e, i, true);
          });

          if (/d$|^c/.test(D.readyState)) {
            o();
          } else {
            q("load", o);
            D[P]("DOMContentLoaded", i);
            I(o, 2e4);
          }

          if (k.elements.length) {
            t();

            ee._lsFlush();
          } else {
            i();
          }
        },
        checkElems: i,
        unveil: R,
        _aLSL: l
      };
    }(),
        re = function () {
      var i;
      var n = te(function (e, t, i, a) {
        var r, n, s;
        e._lazysizesWidth = a;
        a += "px";
        e.setAttribute("sizes", a);

        if (j.test(t.nodeName || "")) {
          r = t.getElementsByTagName("source");

          for (n = 0, s = r.length; n < s; n++) {
            r[n].setAttribute("sizes", a);
          }
        }

        if (!i.detail.dataAttr) {
          Y(e, i.detail);
        }
      });

      var a = function a(e, t, i) {
        var a;
        var r = e.parentNode;

        if (r) {
          i = s(e, r, i);
          a = X(e, "lazybeforesizes", {
            width: i,
            dataAttr: !!t
          });

          if (!a.defaultPrevented) {
            i = a.detail.width;

            if (i && i !== e._lazysizesWidth) {
              n(e, r, a, i);
            }
          }
        }
      };

      var e = function e() {
        var e;
        var t = i.length;

        if (t) {
          e = 0;

          for (; e < t; e++) {
            a(i[e]);
          }
        }
      };

      var t = ae(e);
      return {
        _: function _() {
          i = D.getElementsByClassName(H.autosizesClass);
          q("resize", t);
        },
        checkElems: t,
        updateElem: a
      };
    }(),
        t = function t() {
      if (!t.i && D.getElementsByClassName) {
        t.i = true;

        re._();

        e._();
      }
    };

    return I(function () {
      H.init && t();
    }), k = {
      cfg: H,
      autoSizer: re,
      loader: e,
      init: t,
      uP: Y,
      aC: K,
      rC: Q,
      hC: J,
      fire: X,
      gW: s,
      rAF: ee
    };
  }(e, e.document, Date);

  e.lazySizes = t, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t);
}("undefined" != typeof window ? window : {});
/*! lazysizes - v5.2.2 */

!function (e) {
  var t = function (u, D, f) {
    "use strict";

    var k, H;

    if (function () {
      var e;
      var t = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: true,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: true,
        ricTimeout: 0,
        throttleDelay: 125
      };
      H = u.lazySizesConfig || u.lazysizesConfig || {};

      for (e in t) {
        if (!(e in H)) {
          H[e] = t[e];
        }
      }
    }(), !D || !D.getElementsByClassName) {
      return {
        init: function init() {},
        cfg: H,
        noSupport: true
      };
    }

    var O = D.documentElement,
        a = u.HTMLPictureElement,
        P = "addEventListener",
        $ = "getAttribute",
        q = u[P].bind(u),
        I = u.setTimeout,
        U = u.requestAnimationFrame || I,
        l = u.requestIdleCallback,
        j = /^picture$/i,
        r = ["load", "error", "lazyincluded", "_lazyloaded"],
        i = {},
        G = Array.prototype.forEach,
        J = function J(e, t) {
      if (!i[t]) {
        i[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
      }

      return i[t].test(e[$]("class") || "") && i[t];
    },
        K = function K(e, t) {
      if (!J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").trim() + " " + t);
      }
    },
        Q = function Q(e, t) {
      var i;

      if (i = J(e, t)) {
        e.setAttribute("class", (e[$]("class") || "").replace(i, " "));
      }
    },
        V = function V(t, i, e) {
      var a = e ? P : "removeEventListener";

      if (e) {
        V(t, i);
      }

      r.forEach(function (e) {
        t[a](e, i);
      });
    },
        X = function X(e, t, i, a, r) {
      var n = D.createEvent("Event");

      if (!i) {
        i = {};
      }

      i.instance = k;
      n.initEvent(t, !a, !r);
      n.detail = i;
      e.dispatchEvent(n);
      return n;
    },
        Y = function Y(e, t) {
      var i;

      if (!a && (i = u.picturefill || H.pf)) {
        if (t && t.src && !e[$]("srcset")) {
          e.setAttribute("srcset", t.src);
        }

        i({
          reevaluate: true,
          elements: [e]
        });
      } else if (t && t.src) {
        e.src = t.src;
      }
    },
        Z = function Z(e, t) {
      return (getComputedStyle(e, null) || {})[t];
    },
        s = function s(e, t, i) {
      i = i || e.offsetWidth;

      while (i < H.minSize && t && !e._lazysizesWidth) {
        i = t.offsetWidth;
        t = t.parentNode;
      }

      return i;
    },
        ee = function () {
      var i, a;
      var t = [];
      var r = [];
      var n = t;

      var s = function s() {
        var e = n;
        n = t.length ? r : t;
        i = true;
        a = false;

        while (e.length) {
          e.shift()();
        }

        i = false;
      };

      var e = function e(_e3, t) {
        if (i && !t) {
          _e3.apply(this, arguments);
        } else {
          n.push(_e3);

          if (!a) {
            a = true;
            (D.hidden ? I : U)(s);
          }
        }
      };

      e._lsFlush = s;
      return e;
    }(),
        te = function te(i, e) {
      return e ? function () {
        ee(i);
      } : function () {
        var e = this;
        var t = arguments;
        ee(function () {
          i.apply(e, t);
        });
      };
    },
        ie = function ie(e) {
      var i;
      var a = 0;
      var r = H.throttleDelay;
      var n = H.ricTimeout;

      var t = function t() {
        i = false;
        a = f.now();
        e();
      };

      var s = l && n > 49 ? function () {
        l(t, {
          timeout: n
        });

        if (n !== H.ricTimeout) {
          n = H.ricTimeout;
        }
      } : te(function () {
        I(t);
      }, true);
      return function (e) {
        var t;

        if (e = e === true) {
          n = 33;
        }

        if (i) {
          return;
        }

        i = true;
        t = r - (f.now() - a);

        if (t < 0) {
          t = 0;
        }

        if (e || t < 9) {
          s();
        } else {
          I(s, t);
        }
      };
    },
        ae = function ae(e) {
      var t, i;
      var a = 99;

      var r = function r() {
        t = null;
        e();
      };

      var n = function n() {
        var e = f.now() - i;

        if (e < a) {
          I(n, a - e);
        } else {
          (l || r)(r);
        }
      };

      return function () {
        i = f.now();

        if (!t) {
          t = I(n, a);
        }
      };
    },
        e = function () {
      var v, m, c, h, e;
      var y, z, g, p, C, b, A;
      var n = /^img$/i;
      var d = /^iframe$/i;
      var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
      var _ = 0;
      var w = 0;
      var N = 0;
      var M = -1;

      var x = function x(e) {
        N--;

        if (!e || N < 0 || !e.target) {
          N = 0;
        }
      };

      var W = function W(e) {
        if (A == null) {
          A = Z(D.body, "visibility") == "hidden";
        }

        return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden");
      };

      var S = function S(e, t) {
        var i;
        var a = e;
        var r = W(e);
        g -= t;
        b += t;
        p -= t;
        C += t;

        while (r && (a = a.offsetParent) && a != D.body && a != O) {
          r = (Z(a, "opacity") || 1) > 0;

          if (r && Z(a, "overflow") != "visible") {
            i = a.getBoundingClientRect();
            r = C > i.left && p < i.right && b > i.top - 1 && g < i.bottom + 1;
          }
        }

        return r;
      };

      var t = function t() {
        var e, t, i, a, r, n, s, l, o, u, f, c;
        var d = k.elements;

        if ((h = H.loadMode) && N < 8 && (e = d.length)) {
          t = 0;
          M++;

          for (; t < e; t++) {
            if (!d[t] || d[t]._lazyRace) {
              continue;
            }

            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) {
              R(d[t]);
              continue;
            }

            if (!(l = d[t][$]("data-expand")) || !(n = l * 1)) {
              n = w;
            }

            if (!u) {
              u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
              k._defEx = u;
              f = u * H.expFactor;
              c = H.hFac;
              A = null;

              if (w < f && N < 1 && M > 2 && h > 2 && !D.hidden) {
                w = f;
                M = 0;
              } else if (h > 1 && M > 1 && N < 6) {
                w = u;
              } else {
                w = _;
              }
            }

            if (o !== n) {
              y = innerWidth + n * c;
              z = innerHeight + n;
              s = n * -1;
              o = n;
            }

            i = d[t].getBoundingClientRect();

            if ((b = i.bottom) >= s && (g = i.top) <= z && (C = i.right) >= s * c && (p = i.left) <= y && (b || C || p || g) && (H.loadHidden || W(d[t])) && (m && N < 3 && !l && (h < 3 || M < 4) || S(d[t], n))) {
              R(d[t]);
              r = true;

              if (N > 9) {
                break;
              }
            } else if (!r && m && !a && N < 4 && M < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !l && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) {
              a = v[0] || d[t];
            }
          }

          if (a && !r) {
            R(a);
          }
        }
      };

      var i = ie(t);

      var B = function B(e) {
        var t = e.target;

        if (t._lazyCache) {
          delete t._lazyCache;
          return;
        }

        x(e);
        K(t, H.loadedClass);
        Q(t, H.loadingClass);
        V(t, L);
        X(t, "lazyloaded");
      };

      var a = te(B);

      var L = function L(e) {
        a({
          target: e.target
        });
      };

      var T = function T(t, i) {
        try {
          t.contentWindow.location.replace(i);
        } catch (e) {
          t.src = i;
        }
      };

      var F = function F(e) {
        var t;
        var i = e[$](H.srcsetAttr);

        if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) {
          e.setAttribute("media", t);
        }

        if (i) {
          e.setAttribute("srcset", i);
        }
      };

      var s = te(function (t, e, i, a, r) {
        var n, s, l, o, u, f;

        if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
          if (a) {
            if (i) {
              K(t, H.autosizesClass);
            } else {
              t.setAttribute("sizes", a);
            }
          }

          s = t[$](H.srcsetAttr);
          n = t[$](H.srcAttr);

          if (r) {
            l = t.parentNode;
            o = l && j.test(l.nodeName || "");
          }

          f = e.firesLoad || "src" in t && (s || n || o);
          u = {
            target: t
          };
          K(t, H.loadingClass);

          if (f) {
            clearTimeout(c);
            c = I(x, 2500);
            V(t, L, true);
          }

          if (o) {
            G.call(l.getElementsByTagName("source"), F);
          }

          if (s) {
            t.setAttribute("srcset", s);
          } else if (n && !o) {
            if (d.test(t.nodeName)) {
              T(t, n);
            } else {
              t.src = n;
            }
          }

          if (r && (s || o)) {
            Y(t, {
              src: n
            });
          }
        }

        if (t._lazyRace) {
          delete t._lazyRace;
        }

        Q(t, H.lazyClass);
        ee(function () {
          var e = t.complete && t.naturalWidth > 1;

          if (!f || e) {
            if (e) {
              K(t, "ls-is-cached");
            }

            B(u);
            t._lazyCache = true;
            I(function () {
              if ("_lazyCache" in t) {
                delete t._lazyCache;
              }
            }, 9);
          }

          if (t.loading == "lazy") {
            N--;
          }
        }, true);
      });

      var R = function R(e) {
        if (e._lazyRace) {
          return;
        }

        var t;
        var i = n.test(e.nodeName);
        var a = i && (e[$](H.sizesAttr) || e[$]("sizes"));
        var r = a == "auto";

        if ((r || !m) && i && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) {
          return;
        }

        t = X(e, "lazyunveilread").detail;

        if (r) {
          re.updateElem(e, true, e.offsetWidth);
        }

        e._lazyRace = true;
        N++;
        s(e, t, r, a, i);
      };

      var r = ae(function () {
        H.loadMode = 3;
        i();
      });

      var l = function l() {
        if (H.loadMode == 3) {
          H.loadMode = 2;
        }

        r();
      };

      var o = function o() {
        if (m) {
          return;
        }

        if (f.now() - e < 999) {
          I(o, 999);
          return;
        }

        m = true;
        H.loadMode = 3;
        i();
        q("scroll", l, true);
      };

      return {
        _: function _() {
          e = f.now();
          k.elements = D.getElementsByClassName(H.lazyClass);
          v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
          q("scroll", i, true);
          q("resize", i, true);
          q("pageshow", function (e) {
            if (e.persisted) {
              var t = D.querySelectorAll("." + H.loadingClass);

              if (t.length && t.forEach) {
                U(function () {
                  t.forEach(function (e) {
                    if (e.complete) {
                      R(e);
                    }
                  });
                });
              }
            }
          });

          if (u.MutationObserver) {
            new MutationObserver(i).observe(O, {
              childList: true,
              subtree: true,
              attributes: true
            });
          } else {
            O[P]("DOMNodeInserted", i, true);
            O[P]("DOMAttrModified", i, true);
            setInterval(i, 999);
          }

          q("hashchange", i, true);
          ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
            D[P](e, i, true);
          });

          if (/d$|^c/.test(D.readyState)) {
            o();
          } else {
            q("load", o);
            D[P]("DOMContentLoaded", i);
            I(o, 2e4);
          }

          if (k.elements.length) {
            t();

            ee._lsFlush();
          } else {
            i();
          }
        },
        checkElems: i,
        unveil: R,
        _aLSL: l
      };
    }(),
        re = function () {
      var i;
      var n = te(function (e, t, i, a) {
        var r, n, s;
        e._lazysizesWidth = a;
        a += "px";
        e.setAttribute("sizes", a);

        if (j.test(t.nodeName || "")) {
          r = t.getElementsByTagName("source");

          for (n = 0, s = r.length; n < s; n++) {
            r[n].setAttribute("sizes", a);
          }
        }

        if (!i.detail.dataAttr) {
          Y(e, i.detail);
        }
      });

      var a = function a(e, t, i) {
        var a;
        var r = e.parentNode;

        if (r) {
          i = s(e, r, i);
          a = X(e, "lazybeforesizes", {
            width: i,
            dataAttr: !!t
          });

          if (!a.defaultPrevented) {
            i = a.detail.width;

            if (i && i !== e._lazysizesWidth) {
              n(e, r, a, i);
            }
          }
        }
      };

      var e = function e() {
        var e;
        var t = i.length;

        if (t) {
          e = 0;

          for (; e < t; e++) {
            a(i[e]);
          }
        }
      };

      var t = ae(e);
      return {
        _: function _() {
          i = D.getElementsByClassName(H.autosizesClass);
          q("resize", t);
        },
        checkElems: t,
        updateElem: a
      };
    }(),
        t = function t() {
      if (!t.i && D.getElementsByClassName) {
        t.i = true;

        re._();

        e._();
      }
    };

    return I(function () {
      H.init && t();
    }), k = {
      cfg: H,
      autoSizer: re,
      loader: e,
      init: t,
      uP: Y,
      aC: K,
      rC: Q,
      hC: J,
      fire: X,
      gW: s,
      rAF: ee
    };
  }(e, e.document, Date);

  e.lazySizes = t, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t);
}("undefined" != typeof window ? window : {});
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53385" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/lazysizes.min.js"], null)
//# sourceMappingURL=/lazysizes.min.3153444d.js.map