import { h, reactive } from "vue";
import View from "./index.vue";

export class Text {
  wdith = "200px";
  height = "200px";
  backgroundColor = "rgb(0,211,211)";
  content = "hello-world";

  constructor() {
    return reactive(this);
  }
  render() {
    return h(View, { self: this });
  }
}
