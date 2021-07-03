<template>
    <TaskButton @toggle-task="toggleAddTask" :text="addTask ? 'Close' : 'Add'" :color="addTask ? '#e0094a' : '#32a852'"/>
    <NewTask @create-new-task="createTask" v-if="addTask"  v-show="addTask"/>
    <div>
   <ul class="list">
    <li :key= "task.id" v-for="task in tasks">  <Task @task-done="taskDone" :num="task.num" :name="task.name" :description="task.description" :id="task.id"/> </li>
  </ul>
  </div>

  <div v-if="tasks.length === 0">
      <h2>No Tasks!</h2>
  </div>
</template>

<script>
import Task from "./Task.vue";
import NewTask from "./NewTask.vue"
import TaskButton from "./Button.vue"
import db from './firebaseInit'
import firebase from "firebase/app"
import 'firebase/firestore'

export default {

    name: "Tasks",
    data(){
        return {
         tasks: [],

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
          
          this.tasks = this.tasks.filter((task) => task.id !== numId)

          db.collection("tasks").doc(numId).delete().then(() => {
            console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
            
        
        });
        

    },
      createTask(newTask){
        let newTaskRef = db.collection("tasks").doc();
        let newId = newTaskRef.id
        newTask.id = newId
        newTask.num = this.tasks.length + 1
        newTaskRef.set({
        uid: newTask.uid,
        id: newId,
        num: newTask.num,
        name: newTask.name,
        description: newTask.description,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
});
        
    this.tasks = [...this.tasks, newTask]
   
},
      toggleAddTask(){
          this.addTask = !this.addTask
      }
  },

  created(){
    let newUserId =  firebase.auth().currentUser.uid     
      db.collection("tasks").where("uid", "==", newUserId).orderBy("createdAt", "asc").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.tasks.push(doc.data());
        
    });
});


      
  },

  beforeUpdate(){
       let taskCounter = 1
            for (let task of this.tasks) {
                task.num = taskCounter
                taskCounter++
        }
  }

  
}
  
  
</script>


<style>

.list {
    list-style-type: none;
}

</style>