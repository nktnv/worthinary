import Vue from 'vue'
import VueRouter from 'vue-router'

import Tasks from './components/Tasks'
import Task from './components/Task'
import App from './App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Tasks
  },
  {
    path: '/tasks',
    component: Tasks
  },
  {
    path: '/tasks/:id',
    component: Task
  },
  {
    path: '*',
    component: App
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})