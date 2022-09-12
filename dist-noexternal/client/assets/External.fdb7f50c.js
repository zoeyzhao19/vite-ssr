import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as defineComponent, f as createBlock, u as unref } from "./index.974385ca.js";
const _sfc_main$1 = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "Example external component content");
}
const ExampleExternalComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "External",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ExampleExternalComponent));
    };
  }
});
export {
  _sfc_main as default
};
