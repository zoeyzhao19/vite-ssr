import { defineComponent, createVNode } from "vue";
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
