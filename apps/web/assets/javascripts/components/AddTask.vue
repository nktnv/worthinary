<template>
  <div class="container">
    <form>
      <label class="label is-large">New task</label>
      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" placeholder="Name" v-model="task.name">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" placeholder="Priority" v-model="task.priority">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea is-large" placeholder="Description" rows="5" v-model="task.description"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-success is-large" v-on:click="saveTask(task)">
            <span>Save</span>
          </a>
        </p>
        <p class="control">
          <router-link class="button is-large is-danger" to="/tasks">
            Cancel
          </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddTask',
    data() {
      return {
        task: {}
      }
    },
    methods: {
      saveTask(task) {
        if(task.name) {
          this.createTask(task);
          this.$router.push({ name: 'task-details', params: { name: this.task.name } });
        }
      },
      createTask(task) {
        let taskList = undefined
        try {
         taskList = JSON.parse(localStorage.getItem('tasks'));
         if(!Array.isArray(taskList)) taskList = [];
        } catch(e) {
          taskList = []
        }
        taskList.push(task);
        localStorage.tasks = JSON.stringify(taskList);
      }
    }
  }
</script>
