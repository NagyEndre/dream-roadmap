<template>
  <div class="grid-container">
    <TheHeader class="grid-top" />
    <UnscheduledTodos class="grid-left" />
    <Calendar class="grid-right" />
  </div>
</template>

<script setup lang="ts">
import UnscheduledTodos from "./components/UnscheduledTodos.vue";
import Calendar from "./components/Calendar.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<style scoped>
.grid-container {
  background-color: var(--color-ternary-1);
  display: grid;
  grid-template-columns: 30vw 70vw;
  grid-template-rows: 5vh 95vh;
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
</style>
