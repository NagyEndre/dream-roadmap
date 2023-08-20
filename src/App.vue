<script setup lang="ts">
import UnscheduledTodos from "./components/UnscheduledTodos.vue";
import TheCalendar from "./components/TheCalendar.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div class="grid-container">
    <TheHeader class="grid-top" />
    <UnscheduledTodos class="grid-left" />
    <TheCalendar class="grid-right calendar-style" />
  </div>
</template>

<style scoped>
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
