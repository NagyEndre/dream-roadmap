<script setup lang="ts">
import { ref } from "vue";
const dialogRef = ref();
const title = ref();

const emit = defineEmits(["submit-new-todo"]);
function showDialog() {
  dialogRef.value.showModal();
}

function onSubmit() {
  emit("submit-new-todo", title.value);
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
          <input
            placeholder="Specify title"
            :value="title"
            @input="(event) => (title = event.target.value)"
          />
        </label>
      </div>
      <div>
        <label> Effort: <input type="time" /> </label>
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
