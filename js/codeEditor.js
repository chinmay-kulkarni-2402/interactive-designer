!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["code-editor-component"] = t())
    : (e["code-editor-component"] = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var r = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              i,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return i;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 3))
    );
  })([
    function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      e.exports = function (e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e;
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = n.n(i),
        s = n(1),
        o = n.n(s),
        a = n(2),
        c = n.n(a),
        l = "undefined" != typeof window ? window : null,
        u = null === l,
        d = u ? void 0 : l.document,
        h = function () {
          return !1;
        },
        p = u
          ? "calc"
          : ["", "-webkit-", "-moz-", "-o-"]
              .filter(function (e) {
                var t = d.createElement("div");
                return (
                  (t.style.cssText = "width:" + e + "calc(9px)"),
                  !!t.style.length
                );
              })
              .shift() + "calc",
        f = function (e) {
          return "string" == typeof e || e instanceof String;
        },
        v = function (e) {
          if (f(e)) {
            var t = d.querySelector(e);
            if (!t)
              throw new Error("Selector " + e + " did not match a DOM element");
            return t;
          }
          return e;
        },
        m = function (e, t, n) {
          var i = e[t];
          return void 0 !== i ? i : n;
        },
        g = function (e, t, n, i) {
          if (t) {
            if ("end" === i) return 0;
            if ("center" === i) return e / 2;
          } else if (n) {
            if ("start" === i) return 0;
            if ("center" === i) return e / 2;
          }
          return e;
        },
        y = function (e, t) {
          var n = d.createElement("div");
          return (n.className = "gutter gutter-" + t), n;
        },
        b = function (e, t, n) {
          var i = {};
          return (
            f(t) ? (i[e] = t) : (i[e] = p + "(" + t + "% - " + n + "px)"), i
          );
        },
        C = function (e, t) {
          var n;
          return ((n = {})[e] = t + "px"), n;
        },
        E = function (e, t) {
          if ((void 0 === t && (t = {}), u)) return {};
          var n,
            i,
            r,
            s,
            o,
            a,
            c = e;
          Array.from && (c = Array.from(c));
          var p = v(c[0]).parentNode,
            f = getComputedStyle ? getComputedStyle(p) : null,
            E = f ? f.flexDirection : null,
            S =
              m(t, "sizes") ||
              c.map(function () {
                return 100 / c.length;
              }),
            w = m(t, "minSize", 100),
            O = Array.isArray(w)
              ? w
              : c.map(function () {
                  return w;
                }),
            z = m(t, "expandToMin", !1),
            P = m(t, "gutterSize", 10),
            j = m(t, "gutterAlign", "center"),
            x = m(t, "snapOffset", 30),
            k = m(t, "dragInterval", 1),
            L = m(t, "direction", "horizontal"),
            _ = m(
              t,
              "cursor",
              "horizontal" === L ? "col-resize" : "row-resize"
            ),
            T = m(t, "gutter", y),
            D = m(t, "elementStyle", b),
            B = m(t, "gutterStyle", C);
          function M(e, t, i, r) {
            var s = D(n, t, i, r);
            Object.keys(s).forEach(function (t) {
              e.style[t] = s[t];
            });
          }
          function R() {
            confirm.log("cndgbh")
            return a.map(function (e) {
              return e.size;
            });
          }
          function H(e) {
            return "touches" in e ? e.touches[0][i] : e[i];
          }
          function A(e) {
            var t = a[this.a],
              n = a[this.b],
              i = t.size + n.size;
            (t.size = (e / this.size) * i),
              (n.size = i - (e / this.size) * i),
              M(t.element, t.size, this._b, t.i),
              M(n.element, n.size, this._c, n.i);
          }
          function W(e) {
            var n,
              i = a[this.a],
              r = a[this.b];
            this.dragging &&
              ((n = H(e) - this.start + (this._b - this.dragOffset)),
              k > 1 && (n = Math.round(n / k) * k),
              n <= i.minSize + x + this._b
                ? (n = i.minSize + this._b)
                : n >= this.size - (r.minSize + x + this._c) &&
                  (n = this.size - (r.minSize + this._c)),
              A.call(this, n),
              m(t, "onDrag", h)(R()));
          }
          function U() {
            var e = a[this.a].element,
              t = a[this.b].element,
              i = e.getBoundingClientRect(),
              o = t.getBoundingClientRect();
            (this.size = i[n] + o[n] + this._b + this._c),
              (this.start = i[r]),
              (this.end = i[s]);
          }
          function $(e) {
            var t = (function (e) {
              if (!getComputedStyle) return null;
              var t = getComputedStyle(e);
              if (!t) return null;
              var n = e[o];
              return 0 === n
                ? null
                : (n -=
                    "horizontal" === L
                      ? parseFloat(t.paddingLeft) + parseFloat(t.paddingRight)
                      : parseFloat(t.paddingTop) + parseFloat(t.paddingBottom));
            })(p);
            if (null === t) return e;
            if (
              O.reduce(function (e, t) {
                return e + t;
              }, 0) > t
            )
              return e;
            var n = 0,
              i = [],
              r = e.map(function (r, s) {
                var o = (t * r) / 100,
                  a = g(P, 0 === s, s === e.length - 1, j),
                  c = O[s] + a;
                return o < c
                  ? ((n += c - o), i.push(0), c)
                  : (i.push(o - c), o);
              });
            return 0 === n
              ? e
              : r.map(function (e, r) {
                  var s = e;
                  if (n > 0 && i[r] - n > 0) {
                    var o = Math.min(n, i[r] - n);
                    (n -= o), (s = e - o);
                  }
                  return (s / t) * 100;
                });
          }
          function I() {
            var e = a[this.a].element,
              n = a[this.b].element;
            this.dragging && m(t, "onDragEnd", h)(R()),
              (this.dragging = !1),
              l.removeEventListener("mouseup", this.stop),
              l.removeEventListener("touchend", this.stop),
              l.removeEventListener("touchcancel", this.stop),
              l.removeEventListener("mousemove", this.move),
              l.removeEventListener("touchmove", this.move),
              (this.stop = null),
              (this.move = null),
              e.removeEventListener("selectstart", h),
              e.removeEventListener("dragstart", h),
              n.removeEventListener("selectstart", h),
              n.removeEventListener("dragstart", h),
              (e.style.userSelect = ""),
              (e.style.webkitUserSelect = ""),
              (e.style.MozUserSelect = ""),
              (e.style.pointerEvents = ""),
              (n.style.userSelect = ""),
              (n.style.webkitUserSelect = ""),
              (n.style.MozUserSelect = ""),
              (n.style.pointerEvents = ""),
              (this.gutter.style.cursor = ""),
              (this.parent.style.cursor = ""),
              (d.body.style.cursor = "");
          }
          function V(e) {
            if (!("button" in e) || 0 === e.button) {
              var n = a[this.a].element,
                i = a[this.b].element;
              this.dragging || m(t, "onDragStart", h)(R()),
                e.preventDefault(),
                (this.dragging = !0),
                (this.move = W.bind(this)),
                (this.stop = I.bind(this)),
                l.addEventListener("mouseup", this.stop),
                l.addEventListener("touchend", this.stop),
                l.addEventListener("touchcancel", this.stop),
                l.addEventListener("mousemove", this.move),
                l.addEventListener("touchmove", this.move),
                n.addEventListener("selectstart", h),
                n.addEventListener("dragstart", h),
                i.addEventListener("selectstart", h),
                i.addEventListener("dragstart", h),
                (n.style.userSelect = "none"),
                (n.style.webkitUserSelect = "none"),
                (n.style.MozUserSelect = "none"),
                (n.style.pointerEvents = "none"),
                (i.style.userSelect = "none"),
                (i.style.webkitUserSelect = "none"),
                (i.style.MozUserSelect = "none"),
                (i.style.pointerEvents = "none"),
                (this.gutter.style.cursor = _),
                (this.parent.style.cursor = _),
                (d.body.style.cursor = _),
                U.call(this),
                (this.dragOffset = H(e) - this.end);
            }
          }
          "horizontal" === L
            ? ((n = "width"),
              (i = "clientX"),
              (r = "left"),
              (s = "right"),
              (o = "clientWidth"))
            : "vertical" === L &&
              ((n = "height"),
              (i = "clientY"),
              (r = "top"),
              (s = "bottom"),
              (o = "clientHeight")),
            (S = $(S));
          var F = [];
          function N(e) {
            var t = e.i === F.length,
              n = t ? F[e.i - 1] : F[e.i];
            U.call(n);
            var i = t ? n.size - e.minSize - n._c : e.minSize + n._b;
            A.call(n, i);
          }
          return (
            (a = c.map(function (e, t) {
              var i,
                r = { element: v(e), size: S[t], minSize: O[t], i: t };
              if (
                t > 0 &&
                (((i = {
                  a: t - 1,
                  b: t,
                  dragging: !1,
                  direction: L,
                  parent: p,
                })._b = g(P, t - 1 == 0, !1, j)),
                (i._c = g(P, !1, t === c.length - 1, j)),
                "row-reverse" === E || "column-reverse" === E)
              ) {
                var s = i.a;
                (i.a = i.b), (i.b = s);
              }
              if (t > 0) {
                var o = T(t, L, r.element);
                !(function (e, t, i) {
                  var r = B(n, t, i);
                  Object.keys(r).forEach(function (t) {
                    e.style[t] = r[t];
                  });
                })(o, P, t),
                  (i._a = V.bind(i)),
                  o.addEventListener("mousedown", i._a),
                  o.addEventListener("touchstart", i._a),
                  p.insertBefore(o, r.element),
                  (i.gutter = o);
              }
              return (
                M(r.element, r.size, g(P, 0 === t, t === c.length - 1, j), t),
                t > 0 && F.push(i),
                r
              );
            })).forEach(function (e) {
              var t = e.element.getBoundingClientRect()[n];
              t < e.minSize && (z ? N(e) : (e.minSize = t));
            }),
            {
              setSizes: function (e) {
                var t = $(e);
                t.forEach(function (e, n) {
                  if (n > 0) {
                    var i = F[n - 1],
                      r = a[i.a],
                      s = a[i.b];
                    (r.size = t[n - 1]),
                      (s.size = e),
                      M(r.element, r.size, i._b, r.i),
                      M(s.element, s.size, i._c, s.i);
                  }
                });
              },
              getSizes: R,
              collapse: function (e) {
                N(a[e]);
              },
              destroy: function (e, t) {
                F.forEach(function (i) {
                  if (
                    (!0 !== t
                      ? i.parent.removeChild(i.gutter)
                      : (i.gutter.removeEventListener("mousedown", i._a),
                        i.gutter.removeEventListener("touchstart", i._a)),
                    !0 !== e)
                  ) {
                    var r = D(n, i.a.size, i._b);
                    Object.keys(r).forEach(function (e) {
                      (a[i.a].element.style[e] = ""),
                        (a[i.b].element.style[e] = "");
                    });
                  }
                });
              },
              parent: p,
              pairs: F,
            }
          );
        };
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      var w = (function () {
          function e(t, n) {
            o()(this, e),
              (this.editor = t),
              (this.$ = t.$),
              (this.pfx = t.getConfig("stylePrefix")),
              (this.opts = n),
              (this.canvas = this.findWithinEditor(
                ".".concat(this.pfx, "cv-canvas")
              )),
              (this.panelViews = n.appendTo
                ? this.$(n.appendTo)
                : this.findWithinEditor(
                    ".".concat(this.pfx, "pn-").concat(n.panelId)
                  )),
              (this.isShowing = !0);
          }
          return (
            c()(e, [
              {
                key: "findPanel",
                value: function () {
                  var e = this.editor.Panels,
                    t = this.opts.panelId;
                  return e.getPanel(t) || e.addPanel({ id: t });
                },
              },
              {
                key: "findWithinEditor",
                value: function (e) {
                  return this.$(e, this.editor.getEl());
                },
              },
              {
                key: "buildCodeEditor",
                value: function (e) {
                  var t = this.editor,
                    n = this.opts;
                  return t.CodeManager.createViewer(
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? S(Object(n), !0).forEach(function (t) {
                              r()(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : S(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    })(
                      {
                        codeName: "html" === e ? "htmlmixed" : "css",
                        theme: "hopscotch",
                        readOnly: 0,
                        autoBeautify: 1,
                        autoCloseTags: 1,
                        autoCloseBrackets: 1,
                        styleActiveLine: 1,
                        smartIndent: 1,
                      },
                      n.codeViewOptions
                    )
                  );
                },
              },
              {
                key: "buildSection",
                value: function (e, t) {
                  var n = this.$,
                    i = this.pfx,
                    r = this.opts,
                    s = n("<section></section>"),
                    o = "html" === e ? r.htmlBtnText : r.cssBtnText,
                    a =
                      r.cleanCssBtn && "css" === e
                        ? '<button class="cp-delete-'
                            .concat(e, " ")
                            .concat(i, 'btn-prim">')
                            .concat(r.cleanCssBtnText, "</button>")
                        : "";
                  s.append(
                    n(
                      '\n            <div class="codepanel-separator">\n                <div class="codepanel-label">'
                        .concat(
                          e,
                          '</div>\n                <div class="cp-btn-container">\n                    '
                        )
                        .concat(
                          a,
                          '\n                    <button class="cp-apply-'
                        )
                        .concat(e, " ")
                        .concat(i, 'btn-prim">')
                        .concat(
                          o,
                          "</button>\n                </div>\n            </div>"
                        )
                    )
                  );
                  var c = t.getElement();
                  return (
                    (c.style.height = "calc(100% - 30px)"),
                    s.append(c),
                    this.codePanel.append(s),
                    s.get(0)
                  );
                },
              },
              {
                key: "buildCodePanel",
                value: function () {
                  var e = this,
                    t = this.$,
                    n = this.editor,
                    i = this.opts.panelId ? this.findPanel() : 0;
                  (this.codePanel = t("<div></div>")),
                    this.codePanel.addClass("code-panel"),
                    (this.htmlCodeEditor = this.buildCodeEditor("html")),
                    (this.cssCodeEditor = this.buildCodeEditor("css"));
                  var r = [
                    this.buildSection("html", this.htmlCodeEditor),
                    this.buildSection("css", this.cssCodeEditor),
                  ];
                  i &&
                    !this.opts.appendTo &&
                    i
                      .set("appendContent", this.codePanel)
                      .trigger("change:appendContent"),
                    this.opts.appendTo &&
                      t(this.opts.appendTo).append(this.codePanel),
                    this.updateEditorContents(),
                    this.codePanel
                      .find(".cp-apply-html")
                      .on("click", this.updateHtml.bind(this)),
                    this.codePanel
                      .find(".cp-apply-css")
                      .on("click", this.updateCss.bind(this)),
                    this.opts.cleanCssBtn &&
                      this.codePanel
                        .find(".cp-delete-css")
                        .on("click", this.deleteSelectedCss.bind(this)),
                    E(r, {
                      direction: "vertical",
                      sizes: [50, 50],
                      minSize: 100,
                      gutterSize: 1,
                      onDragEnd: this.refreshEditors.bind(this),
                    }),
                    n.on("component:update", function (t) {
                      return e.updateEditorContents();
                    }),
                    n.on("stop:preview", function () {
                      e.isShowing &&
                        !e.opts.preserveWidth &&
                        e.canvas.css("width", e.opts.openState.cv);
                    });
                },
              },
              {
                key: "showCodePanel",
                value: function () {
                  (this.isShowing = !0),
                    this.updateEditorContents(),
                    this.codePanel.css("display", "block"),
                    setTimeout(this.refreshEditors.bind(this), 320),
                    this.opts.preserveWidth ||
                      (this.panelViews.css("width", this.opts.openState.pn),
                      this.canvas.css("width", this.opts.openState.cv));
                },
              },
              {
                key: "hideCodePanel",
                value: function () {
                  this.codePanel && this.codePanel.css("display", "none"),
                    (this.isShowing = !1),
                    this.opts.preserveWidth ||
                      (this.panelViews.css("width", this.opts.closedState.pn),
                      this.canvas.css("width", this.opts.closedState.cv));
                },
              },
              {
                key: "refreshEditors",
                value: function () {
                  this.htmlCodeEditor.refresh(), this.cssCodeEditor.refresh();
                },
              },
              {
                key: "updateHtml",
                value: function (e) {
                  null == e || e.preventDefault();
                  var t = this.editor,
                    n = this.component,
                    i = this.htmlCodeEditor.getContent().trim();
                  if (i && i !== this.previousHtmlCode) {
                    this.previousHtmlCode = i;
                    var r = "";
                    this.cssCodeEditor
                      .getContent()
                      .split("}\n")
                      .filter(function (e) {
                        return Boolean(e.trim());
                      })
                      .map(function (e) {
                        if (!/}$/.test(e)) return "".concat(e, "}");
                      })
                      .forEach(function (e) {
                        /^#/.test(e) && (r += e);
                      }),
                      (i += "<style>".concat(r, "</style>")),
                      "wrapper" === n.attributes.type
                        ? t.setComponents(i)
                        : t.select(n.replaceWith(i));
                  }
                },
              },
              {
                key: "updateCss",
                value: function (e) {
                  null == e || e.preventDefault();
                  var t = this.cssCodeEditor.getContent().trim();
                  t &&
                    t !== this.previousCssCode &&
                    ((this.previousCssCode = t), this.editor.Css.addRules(t));
                },
              },
              {
                key: "deleteSelectedCss",
                value: function (e) {
                  var t = this;
                  null == e || e.preventDefault(),
                    this.cssCodeEditor.editor
                      .getSelections()
                      .forEach(function (e) {
                        return t.parseRemove(e);
                      }),
                    this.cssCodeEditor.editor.deleteH();
                },
              },
              {
                key: "parseRemove",
                value: function (e) {
                  var t = this.editor;
                  t.Css.remove(this.getRules(t.Parser.parseCss(e)));
                },
              },
              {
                key: "getRules",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = this.editor,
                    i = n.Selectors;
                  return e.map(function (e) {
                    var r = i.get(e.selectors),
                      s = e.state,
                      o = e.selectorsAdd,
                      a = t.atRuleType,
                      c = t.atRuleParams;
                    return (
                      r && n.Css.get(r, s, c, { selectorsAdd: o, atRule: a })
                    );
                  });
                },
              },
              {
                key: "updateEditorContents",
                value: function () {
                  this.isShowing &&
                    ((this.component = this.editor.getSelected()),
                    this.component &&
                      (this.htmlCodeEditor.setContent(
                        this.getComponentHtml(this.component)
                      ),
                      this.cssCodeEditor.setContent(
                        this.editor.CodeManager.getCode(this.component, "css", {
                          cssc: this.editor.Css,
                        })
                      )));
                },
              },
              {
                key: "getComponentHtml",
                value: function (e) {
                  var t = this.pfx,
                    n = this.opts,
                    i = "",
                    r = e.getEl();
                  !n.clearData && r.classList.remove("".concat(t, "selected"));
                  var s = n.clearData
                    ? e.toHTML()
                    : "wrapper" === e.attributes.type
                    ? r.innerHTML
                    : r.outerHTML;
                  !n.clearData && r.classList.add("".concat(t, "selected")),
                    (i += s);
                  var o = n.editJs ? e.getScriptString() : "";
                  return (i += o ? "<script>".concat(o, "</script>") : "");
                },
              },
            ]),
            e
          );
        })(),
        O = function (e, t) {
          var n = e.Commands,
            i = null;
          n.add("open-code", {
            run: function (e) {
              !i && (i = new w(e, t)) && i.buildCodePanel(), i.showCodePanel();
            },
            stop: function (e) {
              i && i.hideCodePanel();
            },
          }),
            n.add("code-editor-object", function () {
              return i;
            }),
            n.add("code-editor-constructor", function () {
              return w;
            });
        };
      function z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = P(
            P(
              {},
              {
                panelId: "views-container",
                appendTo: "",
                openState: { cv: "65%", pn: "35%" },
                closedState: { cv: "85%", pn: "15%" },
                codeViewOptions: {},
                preserveWidth: !1,
                editJs: !1,
                clearData: !1,
                cleanCssBtn: !0,
                htmlBtnText: "Apply",
                cssBtnText: "Apply",
                cleanCssBtnText: "Delete",
              }
            ),
            t
          );
        O(e, n);
      };
    },
  ]);
});
