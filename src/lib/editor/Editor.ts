import { reactive } from "vue";
export class Editor {
  wdith = "600px";
  height = "800px";
  backgroundColor = "rgb(211,211,211)";
  
  content = "hello-world";
  
  constructor() {
    return reactive(this)._constructor_();
  }
  _constructor_() {
    return this;
  }
}
