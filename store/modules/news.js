import api from '~/api'

const state = () => ({
  data: null,
  recentData: null
})

const mutations = {
  SET_DATA (store, data) {
    store.data = data
  },

  SET_RECENT_DATA (store, data) {
    store.recentData = data
  }
}

const actions = {
  fetchData ({ commit }, data) {
    return api.contentful.news.fetchData(data)
      .then((response) => {
        commit('SET_DATA', response.data)
        return response.data
      })
      .catch()
  },

  fetchRecentData ({ commit }, data) {
    return api.contentful.news.fetchRecentData(data)
      .then((response) => {
        commit('SET_RECENT_DATA', response.data)
        return response.data
      })
      .catch()
  }
}

const getters = {
  getData (state) {
    return state.data
  },

  getRecentData (state) {
    return state.recentData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
