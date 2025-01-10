<script setup lang="ts">
import { App } from "./App";
import Editor from "../editor/Editor.vue";

const { app } = defineProps<{ app: App }>()
</script>

<template>
  <button type="button" @click="app.count++">count is {{ app.count }}</button>
  <Editor :editor="app.editor" />
</template>

<style scoped></style>
