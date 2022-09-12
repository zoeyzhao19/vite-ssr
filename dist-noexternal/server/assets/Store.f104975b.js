import { _ as __ssr_vue_processAssetPath, a as _export_sfc } from "../entry-server.js";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { createStore } from "vuex";
import "node:path";
import "vue-router";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Store",
  __ssrInlineRender: true,
  setup(__props) {
    const store = createStore({
      state: {
        foo: "bar"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(_attrs)} data-v-5346064c>${ssrInterpolate(unref(store).state.foo)}</h1>`);
    };
  }
});
__ssr_vue_processAssetPath;
const Store_vue_vue_type_style_index_0_scoped_5346064c_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Store.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Store = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5346064c"]]);
export {
  Store as default
};
