<script setup lang="ts">
import { DragScaleContainer } from "./lib/container/DragScaleContainer";
import { Paragraph } from "./lib/content/paragraph";
import { Text } from "./lib/content/text";
import { Editor } from "./lib/editor";

const editor = new Editor();
const container = new DragScaleContainer();
const paragraph = new Paragraph();
const text = new Text();

editor.childs.push(container);
container.childs.push(paragraph);
paragraph.childs.push(text);
</script>

<template>
  <component :is="editor.render()" />
</template>
