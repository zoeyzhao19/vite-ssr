import { d as defineComponent, b as createVNode, e as createTextVNode } from "./index.974385ca.js";
const foo = "";
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      "class": "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
export {
  Foo
};
