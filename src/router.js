import { createRouter, createWebHashHistory } from 'vue-router'

import home from './views/home-page.vue'
import loginSignup from './views/login-signup.vue'
import userDetails from './views/user-details.vue'
import stayDetails from './views/stay-details.vue'
import stayExplore from './views/stay-explore.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/explore',
    name: 'explore',
    component: stayExplore
  },

  {
    path: '/login',
    name: 'loginSignup',
    component: loginSignup
  },
  {
    path: '/user/:id',
    name: 'user-details',
    component: userDetails
  },
  {
    path: '/stay/:stayId',
    name: 'stay',
    component: stayDetails
  },
]


export const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.NODE_ENV)
  // base: process.env.BASE_URL,
})

