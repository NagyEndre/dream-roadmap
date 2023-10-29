<template>
  <div class="day">
    <h4 class="day-header">Day {{ date }}</h4>
    <div class="half-an-hour" v-for="index in 30"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  date: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.day {
  background-color: var(--color-ternary-1);
  border: 1px dashed black;
  color: var(--color-secondary);
}
.day-header {
  border-bottom: solid 1px var(--color-secondary-2);
  margin-bottom: 0;
  padding-bottom: 2px;
}
.half-an-hour {
  border-bottom: 1px dashed var(--color-ternary-2);
  height: 3%;
}
</style>
