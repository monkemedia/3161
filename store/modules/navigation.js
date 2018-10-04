import api from '~/api'

const state = () => ({
  data: null,
  mobileMenuOpen: false
})

const mutations = {
  SET_DATA (store, data) {
    store.data = data
  },

  SET_MOBILE_MENU_TOGGLE (state, payload) {
    state.mobileMenuOpen = payload
  }
}

const actions = {
  fetchData ({ commit }) {
    return api.contentful.navigation.fetchData()
      .then((response) => {
        commit('SET_DATA', response.data)
        return response.data
      })
      .catch()
  }
}

const getters = {
  getData (state) {
    return state.data
  },

  isMobileMenuOpen: (state) => {
    return state.mobileMenuOpen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
