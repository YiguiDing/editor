import { reactive } from "vue";
import { Content, Paragraph } from "../content";
export class Editor {
  wdith = "600px";
  height = "800px";
  backgroundColor = "rgb(211,211,211)";

  content = new Array<Content>();

  constructor() {
    return reactive(this)._constructor_();
  }
  _constructor_() {
    this.content.push(new Paragraph());
    return this;
  }
}
