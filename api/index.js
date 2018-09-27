// import Cookie from 'js-cookie'
import cachios from 'cachios'

console.log('test', process.env.baseUrl)

const url = `${process.env.baseUrl}api/v1`

export default {
  contentful: {
    navigation: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/navigation`, {
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
        return cachios.get(`${url}/contentful/homepage`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            return res
          })
      }
    },

    pages: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/pages`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            return res
          })
      }
    },

    page: {
      fetchData: (slug) => {
        return cachios.get(`${url}/contentful/page/${slug}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            return res
          })
      }
    }
  }
}
