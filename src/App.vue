<script setup lang="ts">
import UnscheduledTodos from "./components/UnscheduledTodos.vue";
</script>

<template>
  <div class="grid-container">
    <h1 class="grid-top header">Dream Realizer</h1>
    <UnscheduledTodos class="grid-left" />
    <div class="grid-right calendar-style">
      <h1>TODO: Calendar view</h1>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: royalblue;
  color: white;
  margin-top: 0;
  margin-bottom: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: 30vw 70vw;
  grid-template-rows: 10vh 90vh;
  grid-template-rows:
    "header header"
    "unscheduled calendar";
}

.grid-top {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 1;
}
.grid-left {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
.grid-right {
  grid-column-start: 2;
  grid-row-start: 2;
}

.calendar-style {
  background-color: gainsboro;
}
</style>
