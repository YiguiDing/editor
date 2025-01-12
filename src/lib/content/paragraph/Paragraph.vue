<script setup lang="ts">
import type { Paragraph } from "./Paragraph";
const { paragraph } = defineProps<{ paragraph: Paragraph }>();
</script>

<template>
  <div class="paragraph">
    <input v-model="paragraph.wdith" />
    <input v-model="paragraph.height" />
    <input v-model="paragraph.backgroundColor" />
    <div class="content">{{ paragraph.content }}</div>
  </div>
</template>

<style lang="less" scoped>
.paragraph {
  width: v-bind("paragraph.wdith");
  height: v-bind("paragraph.height");
  background-color: v-bind("paragraph.backgroundColor");
  .content {
    line-height: 20px;
  }
}
</style>
