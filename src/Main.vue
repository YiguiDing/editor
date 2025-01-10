<script setup lang="ts">
import App from "./lib/app/App.vue";
import { app } from "./state";
</script>

<template>
  <App :app="app" />
</template>
