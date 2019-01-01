import Vue from 'vue'
import VueRouter from 'vue-router'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tasks/add',
    component: AddTask
  },
  {
    path: '/tasks',
    component: Tasks
  },
  {
    path: '/tasks/:name',
    component: TaskDetails,
    name: 'task-details',
    props: true
  },
  {
    path: '*',
    component: Tasks
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
