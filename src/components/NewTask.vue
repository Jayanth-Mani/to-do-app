<template>
  <div class="forms">
    <input class="form" v-model="num" placeholder="Task Number">
    <input class="form" v-model="name" placeholder="Task Name">
    <input class="form" v-model="description" placeholder="Description">
    </div>
    <button @click="createNewTask" id="button">Submit</button>
    
</template>

<script>
export default {
    name: "NewTask",
    data(){
        return{
            num:'',
            name: '',
            description: '', 

        }
    },

    methods: {
        createNewTask() {
            if (!this.num){
                alert("Please enter task number")
                return
            }
            else if (!this.name) {
                alert("Please enter a task name")
                return
            }

            const newTask = {
                num: parseInt(this.num),
                name: this.name,
                description: this.description
            }
            this.$emit("create-new-task", newTask)
            this.num=''
            this.name=''
            this.description=''

        }
    },

    emits: ['create-new-task']
}


</script>

<style>
.form {
    margin: 5px;
    text-align: center;
    font-size: 15px;
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

}

#button:hover {
  background-color: white; /* Green */
  color: #4CAF50 ;
}
</style>