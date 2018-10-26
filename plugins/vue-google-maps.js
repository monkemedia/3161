import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDD7S0Yj99gMA8qnUXexM0lkPWDEa2sAxI',
    libraries: 'places'
  }
})
