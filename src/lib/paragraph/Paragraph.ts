import { reactive } from "vue";
import ParagraphView from "./Paragraph.vue";

export class Paragraph {
  wdith = "200px";
  height = "200px";
  backgroundColor = "rgb(0,211,211)";

  content = "hello-world";

  constructor() {
    return reactive(this)._constructor_();
  }
  _constructor_() {
    return this;
  }
  component() {
    return ParagraphView;
  }
  props() {
    return {
      paragraph: this,
    };
  }
}
