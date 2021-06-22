<template>
   <ul>
    <li :key= "task.num" v-for="task in tasks">  <Task @task-done="taskDone" :num="task.num" :name="task.name" :description="task.description" /> </li>
  </ul>
</template>

<script>
import Task from "./Task.vue";

export default {

    name: "Tasks",
    data(){
        return {
         tasks: [
            {
                num: 0,
                name: "Test",
                description:"Trying this out"
            },

              {
                num: 1,
                name: "Test",
                description:"Trying this out"
            }
        
        ]
    }
},
components: {
   
    Task,
  },

  methods: {
      taskDone(numId){
          this.tasks = this.tasks.filter((task) => task.num !== numId)
      }
  }
}
</script>

<style>

</style>