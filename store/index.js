import Vuex from 'vuex'
import navigation from './modules/navigation.js'
import homepage from './modules/homepage.js'
import pages from './modules/pages.js'
import page from './modules/page.js'

export default () => {
  return new Vuex.Store({
    modules: {
      navigation,
      homepage,
      pages,
      page
    },
    actions: {
      async nuxtServerInit ({ dispatch }, context) {
        return dispatch('navigation/fetchData', context)
      }
    }
  })
}
