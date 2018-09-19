// import Cookie from 'js-cookie'
import axios from 'axios'
import { baseURL } from '~/config.js'

export default {
  contentful: {
    navigation: {
      fetchData: () => {
        return axios({
          method: 'get',
          url: `${baseURL}/contentful/navigation`,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    },

    homepage: {
      fetchData: () => {
        return axios({
          method: 'get',
          url: `${baseURL}/contentful/homepage`,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    },

    pages: {
      fetchData: () => {
        return axios({
          method: 'get',
          url: `${baseURL}/contentful/pages`,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    },

    page: {
      fetchData: (slug) => {
        return axios({
          method: 'get',
          url: `${baseURL}/contentful/page/${slug}`,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    }
  }
}
