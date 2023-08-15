<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["defaultEffort"]);
const emit = defineEmits(["submit-new-todo"]);

const dialogRef = ref();
const title = ref();
const duration = ref(props.defaultEffort);

function showDialog() {
  dialogRef.value.showModal();
}

function onSubmit() {
  emit("submit-new-todo", { title: title.value, effort: duration.value });
  dialogRef.value.close();
}

defineExpose({ showDialog });
</script>

<template>
  <dialog ref="dialogRef">
    <form>
      <div>
        <label>
          Title:
          <input placeholder="Specify title" v-model="title" />
        </label>
      </div>
      <div>
        <label>
          Effort:
          <input type="time" v-model="duration" />
        </label>
      </div>
      <div>
        <button formmethod="dialog" value="NoReturnValue">Cancel</button>
        <button type="button" @click="onSubmit" value="MyReturnValue">
          Create
        </button>
      </div>
    </form>
  </dialog>
</template>
