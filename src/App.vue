<template>
  <body>
  <Nav v-bind:user="user" @change-heading='changeName'  />
  <Tasks/> 
  </body>

  <Footer/>
</template>

<script>

import Nav from "./components/Nav.vue";
import Tasks from "./components/Tasks.vue";
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    Nav,
    Tasks,
    Footer

  },

  data(){
    return{
      user: 'Test'
    } 
  },

  methods: {
    changeName(username){
      this.user = username
    }
  }
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

body {
   clear: both;
   margin-bottom: 100px;

}

</style>
