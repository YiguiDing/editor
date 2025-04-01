import { Renderable } from "../interface";
import { h, reactive } from "vue";
import View from "./index.vue";

export class Editor implements Renderable {
  wdith = "100%";
  height = "100%";
  backgroundColor = "rgb(255, 249, 231)";

  childs = new Array<Renderable>();

  constructor() {
    return reactive(this);
  }
  
  render() {
    return h(View, { self: this });
  }
}
