<template>
  <div class="unscheduled-todos">
    <h2>Unscheduled todos</h2>
    <button class="create-todo-button" @click="openNewTodoDialog">+</button>
    <NewTodoDialog
      ref="newTodoDialog"
      default-effort="00:30"
      @submit-new-todo="onSubmit"
    />
    <draggable v-model="todos" tag="ul">
      <template #item="{ element: todo }">
        <li>
          <TodoItem
            :title="todo.title"
            :timeEffort="todo.timeEffort"
            @delete-todo="deleteTodo"
          />
        </li>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import NewTodoDialog from "./NewTodoDialog.vue";
import TodoItem from "./TodoItem.vue";
import { Todo } from "../models/Todo";
import draggable from "vuedraggable";

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

<style scoped>
ul {
  list-style-type: decimal;
}
.unscheduled-todos {
  background-color: var(--color-ternary);
  border-radius: 0rem 1rem 1rem 0;
  box-shadow: inset -5px 5px 15px -5px var(--color-contrast);
}
.create-todo-button {
  background-color: var(--color-highlight);
}
</style>
