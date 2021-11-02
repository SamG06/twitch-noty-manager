<template>
  <router-view></router-view>
</template>

<script setup></script>

<style>
html {
  background: #131313;
  min-width: 300px;
}

* {
  box-sizing: border-box;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 100%;
}

.button-green {
  background-color: #82ea9f;
  color: #084619;
}

button:disabled,
button[disabled] {
  background-color: #9e9e9e;
  color: #444444;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

input {
  border: none;
  padding: 5px;
  border-radius: 5px;
}

.input-dark {
  background-color: #464646;
  color: #eaeaea;
}

.input-dark::placeholder {
  color: #eaeaea;
}

fieldset {
  border: 0;
}
</style>
