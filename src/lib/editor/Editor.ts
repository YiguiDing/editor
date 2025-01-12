import { reactive } from "vue";
import { Paragraph } from "../paragraph/Paragraph";
export class Editor {
  wdith = "600px";
  height = "800px";
  backgroundColor = "rgb(211,211,211)";

  content = new Array<Paragraph>();

  constructor() {
    return reactive(this)._constructor_();
  }
  _constructor_() {
    this.content.push(new Paragraph());
    return this;
  }
}
