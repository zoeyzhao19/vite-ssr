import { _ as __ssr_vue_processAssetPath, a as _export_sfc } from "../entry-server.js";
import { defineComponent, defineAsyncComponent, reactive, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { B as Button } from "./button.11661f70.js";
import "node:path";
import "vue-router";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const _imports_0 = "" + __ssr_vue_processAssetPath("assets/vue.5532db34.svg");
const foo = { msg: "hi" };
const msg = "[success] from conventional virtual file";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const ImportType = load("ImportType");
    const Foo = defineAsyncComponent(
      () => import("./Foo.da687e9e.js").then((mod) => mod.Foo)
    );
    function load(file) {
      return defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../components/ImportType.vue": () => import("./ImportType.41bc7dcb.js") }), `../components/${file}.vue`));
    }
    const url = import.meta.url;
    const protocol = url ? new URL(url).protocol : void 0;
    const state = reactive({
      count: 0,
      protocol,
      url
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-b2c3077c>Home</h1><p data-v-b2c3077c><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-b2c3077c></p><button data-v-b2c3077c>count is: ${ssrInterpolate(state.count)}</button>`);
      _push(ssrRenderComponent(unref(Foo), null, null, _parent));
      _push(`<p class="virtual" data-v-b2c3077c>msg from virtual module: ${ssrInterpolate(unref(foo).msg)}</p><p class="inter" data-v-b2c3077c>this will be styled with a font-face</p><p class="import-meta-url" data-v-b2c3077c>${ssrInterpolate(state.url)}</p><p class="protocol" data-v-b2c3077c>${ssrInterpolate(state.protocol)}</p><p class="nested-virtual" data-v-b2c3077c>msg from nested virtual module: ${ssrInterpolate(unref(msg))}</p>`);
      _push(ssrRenderComponent(unref(Button), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CommonButton`);
          } else {
            return [
              createTextVNode("CommonButton")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-b2c3077c> encrypted message: <p class="encrypted-msg" data-v-b2c3077c></p></div>`);
      _push(ssrRenderComponent(unref(ImportType), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
__ssr_vue_processAssetPath;
const Home_vue_vue_type_style_index_0_scoped_b2c3077c_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2c3077c"]]);
export {
  Home as default
};
