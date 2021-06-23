<template>
    <NewTask @create-new-task="createTask"/>
    <div>
   <ul class="list">
    <li :key= "task.num" v-for="task in tasks">  <Task @task-done="taskDone" :num="task.num" :name="task.name" :description="task.description" /> </li>
  </ul>
  </div>

  <div  v-if="tasks.length === 0">
      <h2>No Tasks!</h2>
  </div>
</template>

<script>
import Task from "./Task.vue";
import NewTask from "./NewTask.vue"


export default {

    name: "Tasks",
    data(){
        return {
         tasks: [
            {
                num: 1,
                name: "Test",
                description:"Trying this out"
            },

              {
                num: 2,
                name: "Nice",
                description:"Trying this out"
            }
        
        ]
    }
},
components: {
   
    Task,
    NewTask
  },

  methods: {
      taskDone(numId){
          this.tasks = this.tasks.filter((task) => task.num !== numId)
      },
      createTask(newTask){
        this.tasks = [...this.tasks, newTask]
      }
  },
}
  
</script>

<style>
.list {
    list-style-type: none;

}
</style>