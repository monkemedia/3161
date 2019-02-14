// import Cookie from 'js-cookie'
import cachios from 'cachios'

const url = `${process.env.baseUrl}api/v1`

export default {
  contentful: {
    navigation: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/navigation`)
          .then(res => res)
      }
    },

    homepage: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/homepage`)
          .then(res => res)
      }
    },

    location: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/location`)
          .then(res => res)
      }
    },

    pages: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/pages`)
          .then(res => res)
      }
    },

    page: {
      fetchData: (slug) => {
        return cachios.get(`${url}/contentful/page/${slug}`)
          .then(res => res)
      }
    },

    news: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/news`)
          .then(res => res)
      },

      fetchRecentData: (limit) => {
        return cachios.get(`${url}/contentful/news?limit=${limit}`)
          .then(res => res)
      },

      fetchTagData: (tag) => {
        return cachios.get(`${url}/contentful/news?tag=${tag}`)
          .then(res => res)
      },

      fetchSearchData: (search) => {
        return cachios.get(`${url}/contentful/news?search=${search}`)
          .then(res => res)
      }
    },

    newsPost: {
      fetchData: (postId) => {
        return cachios.get(`${url}/contentful/news/${postId}`)
          .then(res => res)
      }
    },

    author: {
      fetchData: (postId) => {
        return cachios.get(`${url}/contentful/author/${postId}`)
          .then(res => res)
      }
    },

    contact: {
      fetchData: () => {
        return cachios.get(`${url}/contentful/contact`)
          .then(res => res)
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
