import { useSSRContext, defineComponent, createVNode, createTextVNode } from "vue";
const foo = "";
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      "class": "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
const __moduleId = "src/components/Foo.tsx";
ssrRegisterHelper(Foo, __moduleId);
export {
  Foo
};
