import { d as defineComponent, g as defineAsyncComponent, r as reactive, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createVNode, u as unref, w as withCtx, F as Fragment, h as __vitePreload, o as openBlock, p as pushScopeId, i as popScopeId, e as createTextVNode, _ as _export_sfc } from "./index.974385ca.js";
import { B as Button } from "./button.0db75302.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const _imports_0 = "/test/assets/vue.5532db34.svg";
const foo = { msg: "hi" };
const msg = "[success] from conventional virtual file";
const _withScopeId = (n) => (pushScopeId("data-v-b2c3077c"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Home", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1));
const _hoisted_3 = { class: "virtual" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "inter" }, "this will be styled with a font-face", -1));
const _hoisted_5 = { class: "import-meta-url" };
const _hoisted_6 = { class: "protocol" };
const _hoisted_7 = { class: "nested-virtual" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("CommonButton");
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode(" encrypted message: "),
  /* @__PURE__ */ createBaseVNode("p", { class: "encrypted-msg" })
], -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    var _a;
    const ImportType = load("ImportType");
    const Foo = defineAsyncComponent(
      () => __vitePreload(() => import("./Foo.1a28d9a5.js"), true ? ["assets/Foo.1a28d9a5.js","assets/Foo.3d90de19.css","assets/index.974385ca.js","assets/index.5177a91a.css"] : void 0).then((mod) => mod.Foo)
    );
    function load(file) {
      return defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../components/ImportType.vue": () => __vitePreload(() => import("./ImportType.6bfefbf2.js"), true ? ["assets/ImportType.6bfefbf2.js","assets/index.974385ca.js","assets/index.5177a91a.css"] : void 0) }), `../components/${file}.vue`));
    }
    const url = (_a = document.querySelector(".import-meta-url")) == null ? void 0 : _a.textContent;
    const protocol = url ? new URL(url).protocol : void 0;
    const state = reactive({
      count: 0,
      protocol,
      url
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => state.count++)
        }, "count is: " + toDisplayString(state.count), 1),
        createVNode(unref(Foo)),
        createBaseVNode("p", _hoisted_3, "msg from virtual module: " + toDisplayString(unref(foo).msg), 1),
        _hoisted_4,
        createBaseVNode("p", _hoisted_5, toDisplayString(state.url), 1),
        createBaseVNode("p", _hoisted_6, toDisplayString(state.protocol), 1),
        createBaseVNode("p", _hoisted_7, "msg from nested virtual module: " + toDisplayString(unref(msg)), 1),
        createVNode(unref(Button), null, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        }),
        _hoisted_9,
        createVNode(unref(ImportType))
      ], 64);
    };
  }
});
const Home_vue_vue_type_style_index_0_scoped_b2c3077c_lang = "";
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2c3077c"]]);
export {
  Home as default
};
