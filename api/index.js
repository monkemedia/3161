// import Cookie from 'js-cookie'
import axios from 'axios'
import { baseURL } from '~/config.js'

export default {
  contentful: {
    homepage: {
      fetchData: (data) => {
        return axios({
          method: 'get',
          url: `${baseURL}/contentful/homepage`,
          data,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    }
  }
}
