import Vue from 'vue'
import Vuex from 'vuex'

import { creditCard } from './views/credit-card-store'

Vue.use(Vuex)

const strict = process.env.NODE_ENV === 'development'
export default new Vuex.Store({
  strict,
  modules: {
    creditCard
  }
})
