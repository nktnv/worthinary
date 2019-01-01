<template>
  <div class="container">
    <form>
      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" placeholder="Name" :value="task.name" readonly>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" placeholder="Priority" :value="task.priority" readonly>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea is-large" placeholder="Description" rows="5" :value="task.description" readonly></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'TaskDetails',
    data() {
      return {
        task: {}
      }
    },
    mounted() {
        this.task = JSON.parse(localStorage.getItem('tasks')).find(x => x.name === this.$route.params.name);
    }
  }
</script>
