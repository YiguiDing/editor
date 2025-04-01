<script setup lang="ts">
import { Editor } from ".";
const { self } = defineProps<{ self: Editor }>();
</script>

<template>
  <div class="editor">
    <div class="content">
      <component v-for="child in self.childs" :is="child.render()" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.editor {
  width: 100%;
  height: 100%;
  width: v-bind("self.wdith");
  height: v-bind("self.height");
  background-color: v-bind("self.backgroundColor");
  .content {
    width: 800px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    min-height: fit-content;
    margin: 0 auto;
    background-color: rgb(255, 249, 231);
  }
}
</style>
