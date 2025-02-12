import { h, reactive } from "vue";
import TextView from "./Text.vue";

export class Text {
  wdith = "200px";
  height = "200px";
  backgroundColor = "rgb(0,211,211)";
  content = "hello-world";

  constructor() {
    return reactive(this).init();
  }
  init() {
    return this;
  }
  destory() {}
  render() {
    return h(TextView, { text: this });
  }
}
