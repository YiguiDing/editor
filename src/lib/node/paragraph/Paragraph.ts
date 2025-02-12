import { h, reactive } from "vue";
import ParagraphView from "./Paragraph.vue";
import type { Node } from "..";
import { Text } from "../text/Text";

export class Paragraph {
  wdith = "200px";
  height = "200px";
  backgroundColor = "rgb(0,211,211)";

  content = new Array<Node>();

  constructor() {
    return reactive(this).init();
  }
  init() {
    this.content.push(new Text());
    return this;
  }
  destory() {}
  render() {
    return h(ParagraphView, { paragraph: this });
  }
}
