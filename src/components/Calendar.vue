<template>
  <GridLayout
    v-model:layout="layout"
    class="grid"
    :colNum="7"
    :vertical-compact="false"
    :maxRows="12"
    :rowHeight="50"
  >
    <GridItem
      class="item"
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :max-w="1"
      >The item number {{ item.i }}
    </GridItem>
  </GridLayout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { GridLayout, GridItem } from "vue3-grid-layout-next";

const layout = ref([
  { x: 0, y: 0, w: 1, h: 1, i: "0" },
  { x: 2, y: 0, w: 1, h: 2, i: "1" },
]);
</script>

<style>
.layout {
  background-color: black;
}
.item {
  background-color: red;
}
.grid::before {
  content: "";
  position: absolute;
  left: 0px;
  background-size: calc(calc(100% - 5px) / 7) 60px;
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
  height: calc(100% - 9px);
  width: calc(100% - 5px);
  background-repeat: repeat;
  margin: 5px;
}
</style>
