<template>
  <div id="app">
    <img class="menu" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="mt-6 name1">
      <div class="name1-name2">
        <div class="name1-name2-name3">9999999</div>
        <div class="name1-name2-name3">8888</div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="scss">
@import "./app.scss";
</style>
