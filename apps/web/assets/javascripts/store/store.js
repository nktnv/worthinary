import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    tasks: []
  },
  getters: {
    getTasks: state => state.tasks
  },
  actions: {
    loadTasks(ctx) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      ctx.commit('loadTasks', tasks);
    },
    deleteTask({commit, state}, taskName) {
      let tasks = state.tasks.filter(task => task.name !== taskName);
      localStorage.tasks = JSON.stringify(tasks);
      commit('loadTasks', tasks);
    }
  },
  mutations: {
    loadTasks(state, payload) {
      state.tasks = payload;
    }
  }
})
