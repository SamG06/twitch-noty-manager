<template>
  <div class="initial-setup-container">
    <img class="logo" src="../assets/twitch-noty-logo.svg" />
    <SetupKey v-if="route.path === '/setup'" />
    <UserSetup v-if="route.path === '/setup/user'" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import SetupKey from "../components/initial-setup/SetupKey.vue";
import UserSetup from "../components/initial-setup/UserSetup.vue";

const route = useRoute();
</script>

<style scoped>
.initial-setup-container {
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
}

.logo {
  margin-right: 30 px;
  width: 100%;
  max-width: 500px;
  transform: translateX(-10px);
  min-width: 300px;
  margin-bottom: 30px;
}
</style>
