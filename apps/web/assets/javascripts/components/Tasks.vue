<template>
    <div class="container">
        <a v-for="task in tasks" class="box">
          <h1>{{ task.name }}</h1>
          <span class="tag is-light">{{  task.priority }}</span>
          <p>{{ task.description }}</p>
          <router-link to="/task/1">show</router-link>
          <button v-on:click="deleteTask(task.name)" class="button is-danger">Delete</button>
        </a>
    </div>
</template>

<script>
  export default {
    name: 'Tasks',
    data() {
      return {
        tasks: [
          {
            name: 'food',
            priority: 0,
            description: 'buy milk'
          },
          {
            name: 'car',
            priority: 3,
            description: 'repair door'
          }
        ]
      }
    },
    methods: {
      deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.name !== taskName);
      }
    }
  }
</script>
