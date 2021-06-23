<template>
  <button id="addTask" @click="toggleTask" :style="{background: color, align: center}">{{text}}  </button>
</template>

<script>
export default {
    name: "TaskButton",
    props:{
        text: String,
        color: String
    },
    methods: {
        toggleTask(){
            this.$emit('toggle-task')
        }
    },

    emits :[
        'toggle-task'
    ]
}
</script>

<style>
#addTask {
  margin: 40px;
  margin-top: 80px;
  height: 40px;
  width: 80px;
  color: white;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 12px;
  text-align: center;

}

#addTask:hover {
  color: white;
  border: 2px solid #fff;
  border-radius: 12px;
  background-color: white;
}
</style>