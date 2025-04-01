<script setup lang="ts">
import { defineProps } from "vue";
import { DragScaleContainer } from "./index";
const { self } = defineProps<{ self: DragScaleContainer }>();
</script>

<template>
  <div class="wrapper" @mouseup="self.onDragParnetStop($event)">
    {{ self }}
    <div
      class="parent"
      @wheel="self.onWheel($event)"
      @mousedown="self.onDragParnetStart($event)"
      @mousemove="self.onDragParnetMove($event)"
      @mouseup="self.onDragChildStop($event)"
    >
      <component
        class="child"
        v-for="child in self.childs"
        :is="child.render()"
        @mouseenter="self.onMouseEnterChild($event)"
        @mouseleave="self.onMouseLeaveChild($event)"
        @mousedown="self.onDragChildStart($event)"
        @mousemove="self.onDragChildMove($event)"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .parent {
    position: absolute;
    width: v-bind("self.width");
    height: v-bind("self.height");
    transform-origin: 0 0;
    transform: v-bind("self.transform");
  }
  .child {
    position: absolute;
  }
}
</style>
