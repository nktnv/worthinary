import Vue from 'vue'
import App from './App'
import {router} from './router'

new Vue({
  router,
  el: '#app-container',
  components: {
    App
  },
  render: h => h(App)
})
