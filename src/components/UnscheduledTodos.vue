<script setup lang="ts">
import { Ref, ref } from "vue";
import NewTodoDialog from "./NewTodoDialog.vue";
import { Todo } from "../models/Todo";

const todos: Ref<Todo[]> = ref([]);
const newTodoDialog = ref();

function openNewTodoDialog() {
  newTodoDialog.value.showDialog();
}

function onSubmit(payload: { title: string; effort: string }) {
  addTodo(new Todo(payload.title, payload.effort));
}

function addTodo(todo: Todo) {
  todos.value.push(todo);
}
</script>

<template>
  <h1>Unscheduled todos</h1>
  <NewTodoDialog
    ref="newTodoDialog"
    default-effort="00:30"
    @submit-new-todo="onSubmit"
  />
  <button @click="openNewTodoDialog">+</button>
  <ul>
    <li v-for="todo in todos">
      <h2>{{ todo.title }}</h2>
      <h3>{{ todo.timeEffort }}</h3>
    </li>
  </ul>
</template>

<style scoped></style>
../models/Todo
