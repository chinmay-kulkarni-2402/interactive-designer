
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports["image-editor-component"] = e())
    : (t["image-editor-component"] = e());
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this,
  () =>
    (() => {
      "use strict";
      var t = {
          d: (e, o) => {
            for (var n in o)
              t.o(o, n) &&
                !t.o(e, n) &&
                Object.defineProperty(e, n, { enumerable: !0, get: o[n] });
          },
          o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
          r: (t) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          },
        },
        e = {};
      t.r(e), t.d(e, { default: () => i });
      var o =
          (void 0 && (void 0).__assign) ||
          function () {
            return (
              (o =
                Object.assign ||
                function (t) {
                  for (var e, o = 1, n = arguments.length; o < n; o++)
                    for (var i in (e = arguments[o]))
                      Object.prototype.hasOwnProperty.call(e, i) &&
                        (t[i] = e[i]);
                  return t;
                }),
              o.apply(this, arguments)
            );
          },
        n =
          (void 0 && (void 0).__spreadArray) ||
          function (t, e, o) {
            if (o || 2 === arguments.length)
              for (var n, i = 0, r = e.length; i < r; i++)
                (!n && i in e) ||
                  (n || (n = Array.prototype.slice.call(e, 0, i)),
                  (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
          };
      const i = function (t, e) {
        void 0 === e && (e = {});
        var i = o(
            {
              config: {},
              constructor: "",
              labelImageEditor: "Image Editor",
              labelApply: "Apply",
              height: "650px",
              width: "100%",
              commandId: "tui-image-editor",
              toolbarIcon:
                '<svg viewBox="0 0 24 24">\n                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z">\n                    </path>\n                  </svg>',
              hideHeader: !0,
              addToAssets: !0,
              upload: !1,
              onApplyButton: function () {},
              onApply: null,
              script: [
                "https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js",
                "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js",
                "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js",
              ],
              style: [
                "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css",
                "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css",
              ],
            },
            e
          ),
          r = i.script,
          a = i.style,
          d = i.height,
          l = i.width,
          s = i.hideHeader,
          c = i.onApply,
          p = i.upload,
          u = i.addToAssets,
          g = i.commandId,
          f = "undefined" != typeof window,
          m = function () {
            var t;
            return (
              i.constructor ||
              (f &&
                (null ===
                  (t =
                    null === window || void 0 === window
                      ? void 0
                      : window.tui) || void 0 === t
                  ? void 0
                  : t.ImageEditor))
            );
          },
          h = m();
        if (!h && (null == r ? void 0 : r.length) && f) {
          var v = document.head,
            y = Array.isArray(r) ? n([], r, !0) : [r],
            b = Array.isArray(a) ? n([], a, !0) : [a],
            w = function (t) {
              if (t.length) {
                var e = document.createElement("link");
                (e.href = t.shift()),
                  (e.rel = "stylesheet"),
                  v.appendChild(e),
                  w(t);
              }
            },
            T = function (t) {
              if (t.length) {
                var e = document.createElement("script");
                (e.src = t.shift()),
                  (e.onerror = e.onload = T.bind(null, t)),
                  v.appendChild(e);
              } else h = m();
            };
          w(b), T(y);
        }
        i.toolbarIcon &&
          t.Components.addType("image", {
            extendFn: ["initToolbar"],
            model: {
              initToolbar: function () {
                var t = this.get("toolbar");
                (null == t
                  ? void 0
                  : t.some(function (t) {
                      return t.command === g;
                    })) ||
                  (null == t || t.unshift({ command: g, label: i.toolbarIcon }),
                  this.set("toolbar", t));
              },
            },
          });
        var A = { level: "error", ns: g };
        t.Commands.add(g, {
          run: function (t, e, o) {
            var n = this;
            if ((void 0 === o && (o = {}), !h))
              return (
                t.log("TOAST UI Image editor not found", A), t.stopCommand(g)
              );
            var r = o.target || t.getSelected();
            if (!r) return t.log("Target not available", A), t.stopCommand(g);
            var a = this.createContent(),
              d = i.labelImageEditor,
              l = a.children[1];
            t.Modal.open({ title: d, content: a }).onceClose(function () {
              return t.stopCommand(g);
            });
            var s = this.getEditorConfig(r.get("src"));
            (this.imageEditor = new h(a.children[0], s)),
              t.getModel().setEditing(!0),
              (l.onclick = function () {
                return n.applyChanges(r);
              }),
              i.onApplyButton(l);
          },
          stop: function (t) {
            var e;
            null === (e = this.imageEditor) || void 0 === e || e.destroy(),
              t.getModel().setEditing(0);
          },
          getEditorConfig: function (t) {
            var e = o({}, i.config);
            return (
              e.includeUI || (e.includeUI = {}),
              (e.includeUI = o(o({ theme: {} }, e.includeUI), {
                loadImage: { path: t, name: "1" },
                uiSize: { height: d, width: l },
              })),
              s && (e.includeUI.theme["header.display"] = "none"),
              e
            );
          },
          createContent: function () {
            var t = document.createElement("div");
            return (
              (t.style.position = "relative"),
              (t.innerHTML =
                '\n        <div></div>\n        <button class="tui-image-editor__apply-btn" style="\n          position: absolute;\n          top: 0; right: 0;\n          margin: 10px;\n          background-color: #fff;\n          font-size: 1rem;\n          border-radius: 3px;\n          border: none;\n          padding: 10px 20px;\n          cursor: pointer\n        ">\n          '.concat(
                  i.labelApply,
                  "\n        </botton>\n      "
                )),
              t
            );
          },
          applyChanges: function (t) {
            var e = this,
              o = this.imageEditor;
            c
              ? c(o, t)
              : "CROPPER" === o.getDrawingMode()
              ? o.crop(o.getCropzoneRect()).then(function () {
                  e.uploadImage(o, t);
                })
              : this.uploadImage(o, t);
          },
          uploadImage: function (e, o) {
            var n = this,
              i = t.Assets,
              r = e.toDataURL();
            if (p) {
              var a = this.dataUrlToBlob(r);
              i.FileUploader().uploadFile(
                { dataTransfer: { files: [a] } },
                function (t) {
                  var e = t && t.data && t.data[0],
                    i = e && ("string" == typeof e ? e : e.src);
                  i && n.applyToTarget(i, o);
                }
              );
            } else
              u &&
                i.add({ src: r, name: (o.get("src") || "").split("/").pop() }),
                this.applyToTarget(r, o);
          },
          applyToTarget: function (e, o) {
            o.set("src", e), t.Modal.close();
          },
          dataUrlToBlob: function (t) {
            for (
              var e = t.split(","),
                o = window.atob(e[1]),
                n = e[0].split(":")[1].split(";")[0],
                i = new ArrayBuffer(o.length),
                r = new Uint8Array(i),
                a = 0;
              a < o.length;
              a++
            )
              r[a] = o.charCodeAt(a);
            return new Blob([i], { type: n });
          },
        });
      };
      return e;
    })()
);
