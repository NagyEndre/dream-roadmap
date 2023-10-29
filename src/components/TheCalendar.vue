<template>
  <div class="calendar-style">
    <table>
      <tr>
        <th v-for="date in dates">
          <DayHeader :date="date"></DayHeader>
        </th>
      </tr>
      <tr v-for="index in 30">
        <td v-for="day in dates"></td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import DayHeader from "./DayHeader.vue";

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
  background-color: var(--color-ternary-1);
  color: var(--color-contrast);
  margin: 0;
}

.week {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(30, 1fr);
}

table,
th,
td {
  border: 1px dashed var(--color-ternary);
  border-collapse: collapse;
}
table {
  width: 100%;
  height: 100%;
}
th {
  height: 2rem;
}
</style>
