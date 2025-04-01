<script setup lang="ts">
import { Text } from "./index";
const { self } = defineProps<{ self: Text }>();
</script>

<template>
  <div class="text" contenteditable @change="(v) => console.log(v)">
    {{ self.content }}
  </div>
</template>

<style lang="less" scoped>
.text {
  width: fit-content;
  height: fit-content;
  // color: red;
}
</style>
