import Vuex from 'vuex'

import { userStore } from './modules/user-module.js'
import { reviewStore } from './modules/review-module.js'
import { stayStore } from './modules/stay-module.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    reviewStore,
    stayStore
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
