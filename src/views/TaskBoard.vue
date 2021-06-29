<template>
  <div class="home">
    <Tasks />
  </div>
</template>

<script>
import Tasks from '../components/Tasks.vue'


export default {
  name: 'TaskBoard',
  components: {
    Tasks,
    
  }
}
</script>