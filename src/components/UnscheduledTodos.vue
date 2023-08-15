<script setup lang="ts">
import { ref } from "vue";
import NewTodoDialog from "./NewTodoDialog.vue";
class Duration {
  constructor(public hours: number, public minutes: number) {}
}
class Todo {
  constructor(public title: string, public timeEffort?: Duration) {
    this.timeEffort = timeEffort || new Duration(0, 0);
  }
}
const todos: Todo[] = [
  new Todo("todo 1"),
  new Todo("todo 2", new Duration(1, 33)),
];

function openNewTodoDialog() {
  newTodoDialog.value.showDialog();
  // get form value
  const todo = new Todo("Dummy", new Duration(0, 0));
  addTodo(todo);
  // hide dialog
}

function addTodo(todo: Todo) {
  todos.push(todo);
}

const newTodoDialog = ref();

function onSubmit(payload) {
  console.log({ payload });
}
</script>

<template>
  <h1>Unscheduled todos</h1>
  <NewTodoDialog ref="newTodoDialog" @submit-new-todo="onSubmit" />
  <button @click="openNewTodoDialog">+</button>
  <ul>
    <li v-for="todo in todos">
      <h2>{{ todo.title }}</h2>
      <h3>{{ todo.timeEffort?.hours }}:{{ todo.timeEffort?.minutes }}</h3>
    </li>
  </ul>
</template>

<style scoped></style>
