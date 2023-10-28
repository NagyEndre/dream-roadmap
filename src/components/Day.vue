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
  background-color: var(--color-primary-1);
  border: 1px dashed black;
  color: var(--color-secondary);
}
</style>
