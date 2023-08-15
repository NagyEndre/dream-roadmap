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

function deleteTodo(toBeRemoved: Todo) {
  const index = todos.value.findIndex(
    (todo) => todo.title === toBeRemoved.title
  );
  todos.value.splice(index, 1);
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
      <h2>
        <span>{{ todo.title }}</span> <span>{{ todo.timeEffort }}</span>
        <button @click="deleteTodo(todo)">Delete</button>
      </h2>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: decimal;
}

button {
  background-color: royalblue;
  color: white;
}
</style>
