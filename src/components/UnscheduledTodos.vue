<script setup lang="ts">
import { Ref, ref } from "vue";
import NewTodoDialog from "./NewTodoDialog.vue";
import TodoItem from "./TodoItem.vue";
import { Todo } from "../models/Todo";

const todos: Ref<Todo[]> = ref([]);
todos.value.push(new Todo("car"));
todos.value.push(new Todo("eye"));
todos.value.push(new Todo("tea"));

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

function deleteTodo(title: string) {
  const index = todos.value.findIndex((todo) => todo.title === title);
  todos.value.splice(index, 1);
}
</script>

<template>
  <div>
    <h2>Unscheduled todos</h2>
    <button @click="openNewTodoDialog">+</button>
    <NewTodoDialog
      ref="newTodoDialog"
      default-effort="00:30"
      @submit-new-todo="onSubmit"
    />
    <ul>
      <li v-for="todo in todos">
        <TodoItem
          :title="todo.title"
          :timeEffort="todo.timeEffort"
          @delete-todo="deleteTodo"
        />
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  list-style-type: decimal;
}
</style>
