<script setup lang="ts">
import { app } from "./state";
import Editor from "./lib/editor/Editor.vue";
</script>

<template>
  <button type="button" @click="app.count++">count is {{ app.count }}</button>
  <Editor :editor="app.editor" />
</template>

<style scoped></style>
