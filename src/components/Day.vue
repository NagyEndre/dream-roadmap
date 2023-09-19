<template>
  <div class="day">Day {{ date }}</div>
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
  background-color: cadetblue;
  border: 1px dashed black;
}
</style>
