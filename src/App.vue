<template>
  <Nav />

 
  <Tasks/> 
</template>

<script>

import Nav from "./components/Nav.vue";
import Tasks from "./components/Tasks.vue";
export default {
  name: "App",
  components: {
    Nav,
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

#logo {
  align-self: center;
}
</style>
