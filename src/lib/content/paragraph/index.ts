import { Renderable } from "../../interface";
import { h, reactive } from "vue";
import View from "./index.vue";

export class Paragraph implements Renderable {
  wdith = "200px";
  height = "200px";
  backgroundColor = "rgb(0,211,211)";
  childs = new Array<Renderable>();
  constructor() {
    return reactive(this);
  }
  render() {
    return h(View, { self: this });
  }
}
