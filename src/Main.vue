<script setup lang="ts">
import { Editor } from "./lib/editor/Editor";
const editor = new Editor();
</script>

<template>
  <component :is="editor.render()" />
</template>
