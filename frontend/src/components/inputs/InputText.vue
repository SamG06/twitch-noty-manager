<template>
  <div>
    <label
      ><span class="label-text">{{ label }}</span>
      <input
        ref="input"
        v-model="text"
        :class="color"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :minlength="constraints.minLength"
        :maxlength="constraints.maxLength"
        @input="showErrorsTrue"
      />
    </label>
    <span v-if="errorText" class="error-text">{{ errorText }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";

const text = ref("");
const showErrors = ref(false);
const input = ref(null);

function showErrorsTrue() {
  showErrors.value = true;
}
const props = defineProps({
  label: {
    type: String,
    default: "label",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "placeholder",
  },
  color: {
    type: String,
    default: "input-dark",
  },
  labelMarginBottom: {
    type: String,
    default: "0px",
  },
  name: {
    type: String,
    required: true,
  },
  constraints: {
    type: Object,
    default: {},
  },
});

const errorText = computed(() => {
  if (!showErrors.value) return;

  const { minLength, maxLength } = props.constraints;

  if (text.value.length < minLength) {
    input.value.setCustomValidity("Invalid field.");
    const s = minLength > 1 ? "s" : "";
    return `Must be longer than ${minLength} character${s}`;
  }

  if (text.value.length > maxLength) {
    return `Must be shorter than ${maxLength}`;
  }
  input.value.setCustomValidity("");
  return "";
});

const emits = defineEmits(["input", "isValid"]);
</script>

<style scoped>
.error-text {
  color: rgb(251 106 106);
  align-self: flex-start;
  width: 100%;
  text-align: left;
  display: block;
  margin-top: 10px;
}

label {
  display: flex;
  flex-flow: column;
  text-align: left;
}

.label-text {
  color: white;
  font-size: 1em;
  color: #7c7c7c;
  margin-bottom: 10px;
}

input {
  height: 45px;
  font-size: 1em;
  outline: none;
  padding-left: 10px;
}

input:invalid {
  border: rgb(215 62 62) solid 2px;
}
</style>
