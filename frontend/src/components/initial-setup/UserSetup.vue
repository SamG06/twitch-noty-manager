<template>
  <MainForm
    marginSpacing="25px"
    :inputs="inputs"
    formName="Setup User Account"
    buttonActiveText="Create User Account"
    buttonInactiveText="Waiting for account info..."
    @ready="formReady"
  />
</template>

<script setup>
import MainForm from "../form/MainForm.vue";

// add constraint for passwords to match
const passwordConstraints = {
  minLength: 10,
};

const inputs = [
  {
    label: "Username",
    type: "text",
    placeholder: "Enter Username",
    name: "username",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter Password",
    name: "password1",
    constraints: passwordConstraints,
  },
  {
    label: "Re-enter Password",
    type: "password",
    placeholder: "Enter password again",
    name: "password2",
    constraints: passwordConstraints,
  },
];

function formReady(form) {
  const formData = new FormData(form);

  for (var pair of formData.entries()) {
    console.log(pair[0] + " " + pair[1]);
  }
}
</script>

<style scoped></style>
