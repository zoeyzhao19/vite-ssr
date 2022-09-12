import { d as defineComponent, b as createVNode } from "./index.974385ca.js";
const button = "";
const Button = defineComponent({
  setup() {
    return () => {
      return createVNode(
        "div",
        {
          class: "btn"
        },
        "dynamicBtn"
      );
    };
  }
});
export {
  Button as B
};
