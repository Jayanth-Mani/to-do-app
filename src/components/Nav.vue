<template>
<div>
  <header class="navbar">
    <router-link to="/" id="title">To-Do</router-link>

    <button class="signIn" @click="googleSignIn" v-if="loggedIn===false">  Sign In </button>
    <button class="signOut" @click="googleSignOut" v-if="loggedIn===true"> Sign Out </button>
    <span id="user">{{ userFullName }}</span>
    <router-link to="/tasks" v-if="loggedIn"> <button class="task-board">Task Board </button> </router-link>

  </header>
  </div>
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/auth'
export default {
  name: "Nav",
  data() {
    return {
      userFullName: "",
      loggedIn: false
    }
  },

  props: {user: String
  
  },
      

  methods: {
  googleSignIn(){
    const auth = firebase.auth()
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)

    firebase.auth().onAuthStateChanged(user => {
      if (user){
        const username = user.displayName
        this.loggedIn = true
        this.userFullName = username
      }
      else {
        return
      }
    })
  },

  googleSignOut(){
    const auth = firebase.auth()
    auth.signOut() 
    firebase.auth().onAuthStateChanged(() => {
        this.loggedIn = false
        const username = ''
        this.userFullName = username
        this.$router.push({ path: '/' })

    })

},

},

created(){
       firebase.auth().onAuthStateChanged(user => {
      if (user){
        const username = user.displayName
        this.loggedIn = true
        this.userFullName = username
      }
      else{
        this.userFullName = ''
      }
    })
  }

}


</script>

<style>
.navbar {
  margin: 0px;
  background-color: #257679;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  height: 70px;
  text-align: center;
  margin-bottom:10px;


   
}

#user {
  font-size: 15px;
  display:inline-block;
  margin-right: 40px;
  margin-top: 20px;
  color: white;


}

#title {
text-align: center;
vertical-align: middle;
font-size: 30px;
padding: 50px;
text-decoration: none;
color: white; 
text-decoration: inherit; 
  font-weight: bold;



}

.signIn {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 7%;
  border-radius: 10px;
display:inline-block;
  margin-right: 25px;
}


.signOut {
  background-color: #e0094a;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 8%;
  border-radius: 10px;
  display:inline-block;
  margin-right: 25px;
}

button:hover {
  opacity: 0.7;
}

.task-board {
  background-color: #0966e0;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 9%;
  border-radius: 10px;
  display:inline-block;
  margin-right: 25px;
}
</style>