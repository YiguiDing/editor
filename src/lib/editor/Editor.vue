<script setup lang="ts">
import { Editor } from "./Editor";
const { editor } = defineProps<{ editor: Editor }>();
</script>

<template>
  <div class="editor">
    <div class="content">
      <component v-for="node in editor.content" :is="node.render()" />
    </div>
  </div>
</template>

<style lang="less">
.editor {
  width: 100%;
  height: 100%;
  // background-color: v-bind("editor.backgroundColor");
  .content {
    width: 800px;
    height: 100%;
    max-width: 100%;
    min-height: fit-content;
    margin: 0 auto;
    background-color: rgb(255, 249, 231);
  }
}
</style>
