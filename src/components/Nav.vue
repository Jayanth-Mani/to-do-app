<template>
  <header class="navbar">
    To Do App
    <span id="user">{{ user }}</span>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      user: "Jay",
    };
  },
};
</script>

<style>
.navbar {
  margin: 0px;
  margin-bottom: 10px;
  background-color: #257679;
  font-size: 30px;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  height: 60px;
}

#user {
  font-size: 15px;
  margin-left: 40px;
}
</style>