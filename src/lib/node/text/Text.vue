<script setup lang="ts">
import type { Text } from "./Text";
const { text } = defineProps<{ text: Text }>();
</script>

<template>
  <div class="text" contenteditable @change="(v) => console.log(v)">
    {{ text.content }}
  </div>
</template>

<style lang="less" scoped>
.text {
  width: fit-content;
  height: fit-content;
  color: red;
}
</style>
