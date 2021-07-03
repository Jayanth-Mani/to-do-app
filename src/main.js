import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app";
import './components/firebaseInit'

let app;
firebase.auth().onAuthStateChanged(() =>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})

