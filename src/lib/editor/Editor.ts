import { h, reactive } from "vue";
import EditorView from "./Editor.vue";
import { Node, Paragraph } from "../node";

export class Editor {
  wdith = "600px";
  height = "800px";
  backgroundColor = "rgb(255, 249, 231)";

  content = new Array<Node>();

  constructor() {
    return reactive(this).init();
  }
  init() {
    this.content.push(new Paragraph());
    return this;
  }
  destory() {}
  render() {
    return h(EditorView, { editor: this });
  }
}
