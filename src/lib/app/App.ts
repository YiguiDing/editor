import { reactive } from "vue";
import { Editor } from "../editor/Editor";

export class App {
  count = 0;
  editor = new Editor();
  constructor() {
    return reactive(this)._constructor_();
  }
  _constructor_() {
    return this;
  }
}
