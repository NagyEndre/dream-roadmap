<template>
  <div class="calendar-style">
    <h1>TODO: Calendar</h1>
    <div>
      <div class="week">
        <Day v-for="date in dates" :date="date"></Day>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Day from "./Day.vue";

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getWeekDates(): Days[] {
  const date = new Date();
  const dates = new Array<Days>(7);
  const today = date.getDate();
  const day = (date.getDay() + 6) % 7;

  dates[day] = today;

  for (let index = 0; index < dates.length; index++) {
    if (index !== day) {
      dates[index] = today + (index - day);
    }
  }

  return dates;
}

const dates = getWeekDates();
</script>

<style scoped>
.calendar-style {
  background-color: var(--color-primary-2);
  margin: 0;
}

.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>
