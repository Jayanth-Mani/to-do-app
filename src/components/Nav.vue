<template>
<div>
  <header class="navbar">
    <strong id="title">Todo</strong>
    <span id="user">{{ user }}</span>
  </header>
  </div>
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
  background-color: #257679;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  height: 60px;

   
}

#user {
  font-size: 15px;
  float: right;
  margin-right: 40px;
  margin-top: 20px


}

#title {
text-align: center;
vertical-align: middle;
line-height: 60px; 
font-size: 30px;
}
</style>