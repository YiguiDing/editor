<script setup lang="ts">
import { Editor } from "./Editor";
const { editor } = defineProps<{ editor: Editor }>();
</script>

<template>
  <div class="editor">
    <input v-model="editor.wdith" />
    <input v-model="editor.height" />
    <input v-model="editor.backgroundColor" />
    <div class="content">{{ editor.content }}</div>
  </div>
</template>

<style lang="less">
.editor {
  width: v-bind("editor.wdith");
  height: v-bind("editor.height");
  background-color: v-bind("editor.backgroundColor");
  .content {
    line-height: 20px;
  }
}
</style>
