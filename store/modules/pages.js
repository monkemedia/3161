import api from '~/api'

const state = () => ({
  data: null
})

const mutations = {
  SET_DATA (store, data) {
    store.data = data
  }
}

const actions = {
  fetchData ({ commit }, data) {
    return api.contentful.pages.fetchData()
      .then((response) => {
        commit('SET_DATA', response.data.fields)
        return response.data.fields
      })
      .catch()
  }
}

const getters = {
  getData (state) {
    return state.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
