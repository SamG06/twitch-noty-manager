<template>
  <form ref="form" @submit.prevent>
    <fieldset>
      <legend :style="{ marginBottom: '10px' }">{{ formName }}</legend>

      <InputText
        v-for="(input, index) in inputs"
        :key="input.label"
        :type="input.type"
        :placeholder="input.placeholder"
        :label="input.label"
        :name="input.name"
        :constraints="input.constraints"
        :style="{ marginTop: index === 0 ? '0px' : marginSpacing }"
        class="input-text"
        @isValid=""
      />
    </fieldset>

    <FormButton
      :activeText="buttonActiveText"
      :inactiveText="buttonInactiveText"
      :style="{ marginTop: marginSpacing }"
      :disabled="false"
      @click="emit('ready', form)"
    />
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import FormButton from "../buttons/FormButton.vue";
import InputText from "../inputs/InputText.vue";

const buttonReady = ref(false);
const form = ref(null);

const props = defineProps({
  formName: {
    type: String,
    default: "Form Name",
  },
  marginSpacing: {
    type: String,
    default: "0px",
  },
  inputs: {
    type: Array,
    required: true,
  },
  buttonInactiveText: {
    type: String,
    default: "Button Inactive",
  },
  buttonActiveText: {
    type: String,
    default: "Button Active",
  },
});

const emit = defineEmits(["ready"]);
</script>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  max-width: 550px;
  background: #101010;
  padding: 40px;
  border-radius: 5px;
  position: relative;
}

.form-name {
  background: #181818;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3px;
  font-size: 0.9em;
  color: #7c7c7c;
}

input {
  background: red !important;
}

.input-text::first-child {
  margin-top: 0px !important;
}

legend {
  display: flex;
  flex-flow: column;
  text-align: left;
  color: white;
  font-size: 1.2em;
  font-weight: 500;
}
</style>
