import Vuex from 'vuex'
import homepage from './modules/homepage.js'

export default () => {
  return new Vuex.Store({
    modules: {
      homepage
    },
    actions: {
      async nuxtServerInit ({ dispatch }, context) {
      }
    }
  })
}
