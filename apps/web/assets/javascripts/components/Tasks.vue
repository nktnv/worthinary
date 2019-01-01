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

  export default {
    name: 'Tasks',
    data() {
      return {
        tasks: []
      }
    },
    mounted() {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      EventBus.$on('delete-task', name => this.deleteTask(name));
    },
    watch: {
      tasks(data) {
        localStorage.tasks = JSON.stringify(data);
      }
    },
    methods: {
      deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.name !== taskName);
      }
    },
    components: {
      Task
    }
  }
</script>
