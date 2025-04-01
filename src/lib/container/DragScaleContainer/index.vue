<script setup lang="ts">
import { defineProps } from "vue";
import { DragScaleContainer } from "./index";
const { self } = defineProps<{ self: DragScaleContainer }>();
</script>

<template>
  <div class="parent" @mouseup="self.onMouseStop($event)">
    <div
      class="child"
      @wheel="self.onWheel($event)"
      @mousedown="self.onMouseStart($event)"
      @mousemove="self.onMouseMove($event)"
    >
      <component
        class="item"
        v-for="child in self.childs"
        :is="child.render()"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.parent {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: pink;
  .child {
    position: absolute;
    width: v-bind("self.width");
    height: v-bind("self.height");
    transform-origin: 0 0;
    transform: v-bind("self.transform");
    border: 0.1px solid black;
  }
  .item {
    position: absolute;
    background: #ff7675;
  }
}
</style>
