import { B as Button } from "./button.0db75302.js";
import { d as defineComponent, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, b as createVNode, w as withCtx, F as Fragment, o as openBlock, e as createTextVNode, _ as _export_sfc } from "./index.974385ca.js";
const _hoisted_1 = { class: "import-meta-url" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("CommonButton");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  setup(__props) {
    var _a;
    const url = (_a = document.querySelector(".import-meta-url")) == null ? void 0 : _a.textContent;
    const msg = "About";
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, toDisplayString(msg)),
        createBaseVNode("p", _hoisted_1, toDisplayString(unref(url)), 1),
        createVNode(unref(Button), null, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const About_vue_vue_type_style_index_0_scoped_2162764b_lang = "";
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2162764b"]]);
export {
  About as default
};
