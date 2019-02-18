import cachios from 'cachios'

const contentfulUrl = `${process.env.baseUrl}/api/v1`
const restDbUrl = process.env.restDbUrl
const restDbHeaders = {
  headers: {
    'x-apikey': process.env.restDbApiKey
  }
}

export default {
  contentful: {
    navigation: {
      fetchData: () => {
        return cachios.get(`${contentfulUrl}/contentful/navigation`)
          .then(res => res)
      }
    },

    homepage: {
      fetchData: () => {
        return cachios.get(`${contentfulUrl}/contentful/homepage`)
          .then(res => res)
      }
    },

    location: {
      fetchData: () => {
        return cachios.get(`${contentfulUrl}/contentful/location`)
          .then(res => res)
      }
    },

    pages: {
      fetchData: () => {
        return cachios.get(`${contentfulUrl}/contentful/pages`)
          .then(res => res)
      }
    },

    page: {
      fetchData: (slug) => {
        return cachios.get(`${contentfulUrl}/contentful/page/${slug}`)
          .then(res => res)
      }
    },

    news: {
      fetchData: () => {
        return cachios.get(`${contentfulUrl}/contentful/news`)
          .then(res => res)
      },

      fetchRecentData: (limit) => {
        return cachios.get(`${contentfulUrl}/contentful/news?limit=${limit}`)
          .then(res => res)
      },

      fetchTagData: (tag) => {
        return cachios.get(`${contentfulUrl}/contentful/news?tag=${tag}`)
          .then(res => res)
      },

      fetchSearchData: (search) => {
        return cachios.get(`${contentfulUrl}/contentful/news?search=${search}`)
          .then(res => res)
      }
    },

    newsPost: {
      fetchData: (postId) => {
        return cachios.get(`${contentfulUrl}/contentful/news/${postId}`)
          .then(res => res)
      }
    },

    author: {
      fetchData: (postId) => {
        return cachios.get(`${contentfulUrl}/contentful/author/${postId}`)
          .then(res => res)
      }
    },

    contact: {
      fetchData: () => {
        return cachios.get(`${contentfulUrl}/contentful/contact`)
          .then(res => res)
      }
    }
  },

  restDb: {
    updateData: (data) => {
      console.log('DATA', data)
      const payload = {
        $inc: {
          postLikes: data.postLikes
        },
        postId: data.postId
      }
      return cachios.put(`${restDbUrl}/likes/${data.likesId}`, payload, restDbHeaders)
    }
  },

  contactForm: {
    postData: (data) => {
      return cachios.post(`${contentfulUrl}/contact-us`, data)
        .then(res => {
          return res
        })
    }
  }
}
