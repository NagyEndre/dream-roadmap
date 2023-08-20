<template>
  <div class="calendar-style">
    <h1>TODO: Calendar</h1>
    <div>
      <div class="week">
        <Day v-for="index in props.dayCountToDisplay" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Day from "./Day.vue";
const props = defineProps({
  dayCountToDisplay: {
    type: Number,
    required: true,
  },
});

// const today = "01.01.2023";
</script>

<style scoped>
.calendar-style {
  background-color: gainsboro;
  margin: 0;
}

.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>
