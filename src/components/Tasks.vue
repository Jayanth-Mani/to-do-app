<template>
   <ul>
    <li :key= "task.num" v-for="task in tasks">  <Task :num="task.num" :name="task.name" :description="task.description" /> </li>
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
}
</script>

<style>

</style>