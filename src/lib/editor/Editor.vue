<script setup lang="ts">
import { Editor } from "./Editor";
const { editor } = defineProps<{ editor: Editor }>();
</script>

<template>
  <div class="editor">
    <div class="content">
      <component
        v-for="item in editor.content"
        :is="item.component()"
        v-bind="item.props()"
      />
    </div>
  </div>
</template>

<style lang="less">
.editor {
  width: v-bind("editor.wdith");
  height: v-bind("editor.height");
  background-color: v-bind("editor.backgroundColor");
  .content {
    width: 100%;
    height: fit-content;
  }
}
</style>
