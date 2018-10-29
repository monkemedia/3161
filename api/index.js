// import Cookie from 'js-cookie'
import cachios from 'cachios'

const url = `${process.env.baseUrl}api/v1`

export default {
  contentful: {
    navigation: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/navigation`)
          .then(res => {
            return res
          })
      }
    },

    homepage: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/homepage`)
          .then(res => {
            return res
          })
      }
    },

    pages: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/pages`)
          .then(res => {
            return res
          })
      }
    },

    page: {
      fetchData: (slug) => {
        return cachios.get(`${url}/contentful/page/${slug}`)
          .then(res => {
            return res
          })
      }
    },

    contact: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/contact`)
          .then(res => {
            return res
          })
      }
    },

    meta: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/meta`)
          .then(res => {
            return res
          })
      }
    }
  },

  contactForm: {
    postData: (data) => {
      console.log('data', data)
      return cachios.post(`${url}/contact-us`, data)
        .then(res => {
          return res
        })
    }
  }
}
