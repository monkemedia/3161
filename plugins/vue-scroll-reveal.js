import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal)

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  delay: 300,
  duration: 500,
  scale: 1,
  distance: '10px',
  mobile: false,
  reset: false,
  interval: 800
})
