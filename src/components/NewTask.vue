<template>
<div @toggle-task="$emit(toggle-task)">
  <div class="forms">
    <input class="form" v-model="name" placeholder="Task Name">
    <input class="form" v-model="description" placeholder="Description">
    </div>
    <button @click="createNewTask" id="button">Submit</button>
    </div>
   
</template>

<script>
 import firebase from "firebase/app"

export default {
  components: {  },
    name: "NewTask",
    data(){
        return{
            uid: '',
            id: '',
            num:'',
            name: '',
            description: '', 
            createdAt: '',
            toggleAddTask: true

        }
    },
  
    methods: {
        createNewTask() {
         
            if (!this.name) {
                alert("Please enter a task name")
                return
            }

            let newTask = {
                uid: firebase.auth().currentUser.uid,
                id : "blank",
                num: 0,
                name: this.name,
                description: this.description,
                createdAt: 'blank'
            }
            this.$emit("create-new-task", newTask)
            this.uid = ''
            this.id = ''
            this.num=''
            this.name=''
            this.description=''
            this.createdAt="v"

        },

       
    },

    emits: ['create-new-task', 'toggle-task']
}


</script>

<style>
.form {
    margin: 5px;
    text-align: center;
    font-size: 15px;
    width: 250px;
    height: 30px;
    border-radius: 10px;
    border-color: #00fff5;
}

.forms {
    margin-bottom: 20px;
}
#button {
      transition-duration: 0.4s;
    background-color: #4CAF50; 
    font-size: 16px;
    text-align: center;
    border-radius: 12px;
    width: 25%;
    padding: 10px;
    border-color: white;
      cursor: pointer;


}

#button:hover {
  background-color: white; 
  color: #4CAF50 ;
}
</style>