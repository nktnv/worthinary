import Vue from 'vue'
import App from './App'
import { router } from './router'
import store from './store/store'

new Vue({
  router,
  store,
  el: '#app-container',
  components: {
    App
  },
  render: h => h(App)
})

let tasks = [
  {
    id: 1,
    name: 'food',
    priority: 0,
    description: 'buy milk'
  },
  {
    id: 2,
    name: 'car',
    priority: 3,
    description: 'repair door'
  }
]
localStorage.tasks = JSON.stringify(tasks);
