<template>
  <div class="not-found-container">
    <h1>YOU'RE LOST</h1>
    <router-link to="/"> Click to be found</router-link>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
function home() {
  router.push("/");
}
</script>

<style scoped>
.not-found-container {
  height: 70vh;
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: center;
}
h1 {
  color: white;
  margin-bottom: 30px;
}
a {
  background: rgb(215, 83, 255);
  color: rgb(39, 6, 39);
  text-decoration: none;
  font-weight: 500;
  display: block;
  border-radius: 5px;
  padding: 10px;
}
</style>
