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

    location: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/location`)
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

    news: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/news`)
          .then(res => {
            return res
          })
      },

      fetchRecentData: (limit) => {
        return cachios.get(`${url}/contentful/news?limit=${limit}`)
          .then(res => {
            return res
          })
      }
    },

    newsPost: {
      fetchData: (postId) => {
        return cachios.get(`${url}/contentful/news/${postId}`)
          .then(res => {
            return res
          })
      }
    },

    author: {
      fetchData: (postId) => {
        return cachios.get(`${url}/contentful/author/${postId}`)
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
    }
  },

  contactForm: {
    postData: (data) => {
      return cachios.post(`${url}/contact-us`, data)
        .then(res => {
          return res
        })
    }
  }
}
