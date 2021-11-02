<template>
  <button
    type="button"
    :disabled="disabled"
    :class="colorScheme"
    @click="emit('click')"
  >
    {{ disabled ? inactiveText : activeText }}
  </button>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const props = defineProps({
  text: {
    type: String,
    default: "Button",
  },
  width: {
    type: String,
    default: "100%",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  colorScheme: {
    type: String,
    default: "button-green",
  },
  inactiveText: {
    type: String,
    default: "Button Inactive",
  },
  activeText: {
    type: String,
    default: "Button Active",
  },
});

const emit = defineEmits(["click"]);
</script>

<style scoped>
button {
  height: 35px;
  padding: 5px;
  font-size: 1em;
  font-weight: 500;
}
</style>
