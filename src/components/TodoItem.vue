<template>
  <h2>
    <span>{{ props.title }}</span> <span>{{ props.timeEffort }}</span>
    <button @click="deleteTodo(props.title)">Delete</button>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  timeEffort: String,
});

const emit = defineEmits<{
  (e: "delete-todo", title: string): void;
}>();

function deleteTodo(title: string) {
  emit("delete-todo", title);
}
</script>
