import { Identifiable } from "./Identifiable";
import { Renderable } from "./Renderable";

// export interface EditorNode extends Identifiable, Renderable {}
export type EditorNode = Identifiable & Renderable
