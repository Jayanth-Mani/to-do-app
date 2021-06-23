<template >
  <div class="card" v-if="currentTask">
    <div class="container">
      <h1>
        <b>{{ num + ": " + name }}</b>
      </h1>
      <p>{{ description }}</p>
      <button @click="finishTask(num)" class="button">Done</button>
    </div>
  </div>

  <div v-else>
    <h2>No tasks</h2>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    num: Number,
    name: String,
    description: String,
  },

  data() {
    return {
      currentTask: true,
    };
  },

  methods: {
    finishTask(numId) {
      this.$emit('task-done', numId)
    },
  },
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 60%;
  border-radius: 5px;
  background: #257679;
  color: white;
  margin: auto;
  margin-bottom: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 1);
}


.container {
  padding: 2px 16px;
}

.button {
  margin-left: 10px;
  background-color: #07075a;
  height: 40px;
  width: 60px;
  color: white;
  border: 2px solid #00fff5;
  border-radius: 12px;
}

.button:hover {
  margin-left: 10px;
  background-color: #00fff5;
  height: 40px;
  color: black;
  border: 2px solid #07075a;
  border-radius: 12px;
}
</style>