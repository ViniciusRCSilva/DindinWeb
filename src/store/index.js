import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import curso from "./modules/curso"
import aula from "./modules/aula"

export default new Vuex.Store({
  modules: {
    curso,
    aula
  }
})
