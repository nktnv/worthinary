<template>
    <div class="container">
      <div class="section">
        <router-link to="/tasks/add" class="button is-success is-large">Add new task</router-link>
      </div>
      <Task
        v-for="task in tasks"
        :key="task.name"
        :taskData="task"
      />
    </div>
</template>

<script>
  import Task from './Task'
  import { EventBus } from '../event-bus.js';
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Tasks',
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        tasks: 'getTasks'
      })
    },
    created() {
      this.$store.dispatch('loadTasks');
    },
    mounted() {
      EventBus.$on('delete-task', name => this.deleteTask(name));
    },
    methods: {
      ...mapActions(['deleteTask'])
    },
    components: {
      Task
    }
  }
</script>
