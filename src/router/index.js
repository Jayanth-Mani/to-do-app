import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskBoard from '../views/TaskBoard.vue'
import About from "../views/About.vue"
import firebase from 'firebase/app'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'TaskBoard',
    component: TaskBoard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) =>{
  if (to.matched.some(record => record.meta.requiresAuth)){
    // if not logged in
    if(!firebase.auth().currentUser){
      // go home
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else{
      next();
    }
  } else{
    next()
  }
})
export default router
