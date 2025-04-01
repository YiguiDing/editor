import { VNode } from "vue";

export interface Renderable {
  render(): VNode;
}
