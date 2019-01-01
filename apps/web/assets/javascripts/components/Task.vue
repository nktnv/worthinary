<template>
  <a class="box">
    <h1>{{ taskData.name }}</h1>
    <span class="tag is-light">{{ taskData.priority }}</span>
    <p>{{ taskData.description }}</p>
    <router-link :to="{ name: 'task-details', params: { name: taskData.name} }" class="button is-info">Show</router-link>
    <button v-on:click="deleteTask(taskData.name)" class="button is-danger">Delete</button>
  </a>
</template>

<script>
  import { EventBus } from '../event-bus.js';

  export default {
    name: 'Task',
    props: {
      taskData: {
        type: Object,
        required: true
      }
    },
    data() {
      return {}
    },
    methods: {
      deleteTask(taskName) {
        EventBus.$emit('delete-task', taskName);
      }
    }
  }
</script>
