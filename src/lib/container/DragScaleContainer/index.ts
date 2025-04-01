import { h, reactive, VNode } from "vue";
import { Renderable } from "../../interface";
import View from "./index.vue";

export class DragScaleContainer implements Renderable {
  childs = new Array<Renderable>();
  width = "100%";
  height = "100%";
  offsetX = 0;
  offsetY = 0;
  scale = 1;
  transform = "";
  constructor() {
    return reactive(this);
  }
  onMounted() {}
  onWheel(e: WheelEvent) {
    e.preventDefault();
    // @ts-ignore
    const rect: DOMRect = e.target?.parentElement?.getBoundingClientRect();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    // 计算缩放中心点
    const mouseX = (e.clientX - rect.left - this.offsetX) / this.scale;
    const mouseY = (e.clientY - rect.top - this.offsetY) / this.scale;
    // 缩放
    this.scale *= delta;
    this.scale = Math.min(Math.max(0.1, this.scale), 5); // 缩放范围0.5-5倍
    // 调整位移保持中心点
    this.offsetX = e.clientX - mouseX * this.scale - rect.left;
    this.offsetY = e.clientY - mouseY * this.scale - rect.top;
    //
    this.update();
  }
  isDraging = false;
  onMouseStart(e: MouseEvent) {
    this.isDraging = true;
  }
  onMouseMove(e: MouseEvent) {
    if (!this.isDraging) return;
    this.offsetX += e.movementX;
    this.offsetY += e.movementY;
    this.update();
  }
  onMouseStop(e: MouseEvent) {
    this.isDraging = false;
  }
  update() {
    this.transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
  }
  render(): VNode {
    return h(View, { self: this });
  }
}
