<script setup lang="ts">
import type { Paragraph } from ".";
const { self } = defineProps<{ self: Paragraph }>();
</script>

<template>
  <div class="paragraph">
    <component v-for="node in self.childs" :is="node.render()" />
  </div>
</template>

<style lang="less" scoped>
.paragraph {
  width: 100%;
  height: fit-content;
  .content {
    line-height: 20px;
  }
}
</style>
