import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  delay: 250,
  duration: 500,
  opacity: 0,
  scale: 1,
  distance: '30px',
  origin: 'bottom',
  mobile: false,
  reset: false
})
