<template>
  <MainForm
    marginSpacing="25px"
    :inputs="inputs"
    formName="First Time Access"
    buttonActiveText="Start Setup Process"
    buttonInactiveText="Waiting for key..."
    @ready="formReady"
  />
</template>

<script setup>
import { useRouter } from "vue-router";
import MainForm from "../form/MainForm.vue";

const router = useRouter();
const inputs = [
  {
    label: "Setup Key",
    type: "password",
    placeholder: "Enter Setup Key",
    name: "setupKey",
    constraints: {
      minLength: 50,
    },
  },
];

function formReady(form) {
  const formData = new FormData(form);

  router.push("/setup/user");
}
</script>

<style scoped></style>
