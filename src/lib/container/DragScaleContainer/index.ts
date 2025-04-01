import { h, reactive, StyleValue, VNode } from "vue";
import { EditorNode, Renderable } from "../../interface";
import View from "./index.vue";
import { nanoid } from "nanoid";

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
    this.scale = Math.min(Math.max(0.1, this.scale), 10); // 缩放范围0.1-10倍
    // 调整位移保持中心点
    this.offsetX = e.clientX - mouseX * this.scale - rect.left;
    this.offsetY = e.clientY - mouseY * this.scale - rect.top;
    //
    this.update();
  }
  isDragingParent = false;
  isDragingChild = false;
  isMouseInChild = false;
  childStyle = new Map<string, StyleValue>();

  onMouseEnterChild(e: MouseEvent) {
    this.isMouseInChild = true;
  }
  onMouseLeaveChild(e: MouseEvent) {
    this.isMouseInChild = false;
  }

  onDragParnetStart(e: MouseEvent) {
    if (this.isMouseInChild) return;
    this.isDragingParent = true;
  }
  onDragParnetMove(e: MouseEvent) {
    if (!this.isDragingParent) return;
    this.offsetX += e.movementX;
    this.offsetY += e.movementY;
    this.update();
  }
  onDragParnetStop(e: MouseEvent) {
    this.isDragingParent = false;
  }

  onDragChildStart(e: MouseEvent) {
    if (!this.isMouseInChild) return;
    this.isDragingChild = true;
  }
  onDragChildStop(e: MouseEvent) {
    this.isDragingChild = false;
  }
  onDragChildMove(e: MouseEvent) {
    if (!this.isDragingChild) return;
    const deltaX = e.movementX / this.scale;
    const deltaY = e.movementY / this.scale;
    const element = e.target as HTMLDivElement;
    const react = element.getBoundingClientRect();
    const left = (parseFloat(element.style.left) || 0) + deltaX;
    const top = (parseFloat(element.style.top) || 0) + deltaY;
    element.style.left = left + "px";
    element.style.top = top + "px";
  }
  findStyle(child: EditorNode) {}
  update() {
    this.transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
  }
  render(): VNode {
    return h(View, { self: this });
  }
}
