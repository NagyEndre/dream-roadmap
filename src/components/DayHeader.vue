<template>
  <h4 class="day-header">Day {{ date }}</h4>
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
.day-header {
  color: var(--color-secondary);
  border-bottom: solid 1px var(--color-secondary-2);
  margin-top: 0.5rem;
  margin-bottom: 2px;
  padding-bottom: 2px;
}
</style>
