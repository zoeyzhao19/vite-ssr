import { _ as __ssr_vue_processAssetPath, a as _export_sfc } from "../entry-server.js";
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { B as Button } from "./button.11661f70.js";
import "node:path";
import "vue-router";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const url = import.meta.url;
    const msg = "About";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-2162764b>${ssrInterpolate(msg)}</h1><p class="import-meta-url" data-v-2162764b>${ssrInterpolate(unref(url))}</p>`);
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
      _push(`<!--]-->`);
    };
  }
});
__ssr_vue_processAssetPath;
const About_vue_vue_type_style_index_0_scoped_2162764b_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2162764b"]]);
export {
  About as default
};
