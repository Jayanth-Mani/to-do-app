<template>
    <TaskButton @toggle-task="toggleAddTask" :text="addTask ? 'Close' : 'Add'" :color="addTask ? '#e0094a' : '#32a852'"/>
    <NewTask @create-new-task="createTask" v-if="addTask"  v-show="addTask"/>
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
import TaskButton from "./Button.vue"

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
        
        ],

        addTask: false,
    }
},
components: {
   
    Task,
    NewTask,
    TaskButton,
  },

  methods: {
      taskDone(numId){
          this.tasks = this.tasks.filter((task) => task.num !== numId)
      },
      createTask(newTask){
          newTask.num = this.tasks.length + 1
        this.tasks = [...this.tasks, newTask]
      },
      toggleAddTask(){
          this.addTask = !this.addTask
      }
  },
}
  
</script>

<style>
.list {
    list-style-type: none;

}
</style>