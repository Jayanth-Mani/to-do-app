<template>
  <div class="main-container">
  <Nav class="nav"/>
  <body>
  <router-view class="content"/>
  </body>
  <Footer class="footer"/>
  </div>
</template>


<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    Nav,
    Footer
  },
  
  
};
</script>

<style>
body {
display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   height: 100vh;
}




  
.footer {
height: 50px;

}

.main-container {
 min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 100px; /* height of your footer */
}

.content {
  flex: 1;
}
.nav{
  position: fixed;
}

</style>
