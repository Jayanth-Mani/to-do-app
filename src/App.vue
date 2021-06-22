<template>
  <Nav />
  <img alt="Vue logo" src="./assets/logo.png" />

  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Tasks/> 
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
// import Task from "./components/Task.vue";
import Tasks from "./components/Tasks.vue";
export default {
  name: "App",
  components: {
    Nav,
    HelloWorld,
    //Task,
    Tasks,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
