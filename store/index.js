import Vuex from 'vuex'
import navigation from './modules/navigation.js'
import homepage from './modules/homepage.js'
import location from './modules/location.js'
import pages from './modules/pages.js'
import page from './modules/page.js'
import contact from './modules/contact.js'

export default () => {
  return new Vuex.Store({
    modules: {
      navigation,
      homepage,
      location,
      pages,
      page,
      contact
    },
    actions: {
      async nuxtServerInit ({ dispatch }, context) {
        return dispatch('navigation/fetchData', context)
      }
    }
  })
}
