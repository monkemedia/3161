// import Cookie from 'js-cookie'
import cachios from 'cachios'
import { baseURL } from '~/config.js'

export default {
  contentful: {
    navigation: {
      fetchData: () => {
        return cachios.get(`${baseURL}/contentful/navigation`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            return res
          })
      }
    },

    homepage: {
      fetchData: () => {
        return cachios.get(`${baseURL}/contentful/homepage`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            console.log('res', res)
            return res
          })
      }
    },

    pages: {
      fetchData: () => {
        return cachios.get(`${baseURL}/contentful/pages`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    },

    page: {
      fetchData: (slug) => {
        return cachios.get(`${baseURL}/contentful/page/${slug}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    }
  }
}
