<template lang="pug">
  header.hero
    .hero-head
      navigation-main
    .hero-body.has-text-centered
      .text-container
        h1.title--small.is-spaced
          | {{ data.hero.title }}
        p.title--large
          | {{ data.hero.subtitle }}
        nuxt-link.button.is-primary.is-auto(:to="data.hero.button.path")
          | {{ data.hero.button.title }}
          span.button-line
    a.scroll-to.is-hidden-mobile(href="#" v-scroll-to="'#content-block'")
      .text Scroll to navigate
      br
      span.icon
        fa.icon(:icon="['fas', 'chevron-down']")
    .hero-video-bg(v-if="!!video && !mobile")
      video(autoplay muted loop)
        source(:src="video" type="video/mp4")
    no-ssr(v-else)
      progressive-background.hero-bg(
        :src="backgroundImg"
        :placeholder="`${data.hero.media.file}?h=100&q=5`"
        :blur="30")
</template>

<script>
  import NavigationMain from '@/components/Navigation/NavigationMain.vue'

  export default {
    name: 'HeaderMainHomepage',

    components: {
      NavigationMain
    },

    props: {
      data: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        backgroundImg: '',
        mobile: false,
        video: false
      }
    },

    created () {
      if (!process.client) {
        return
      }

      window.addEventListener('resize', this.responsiveMedia)
      this.responsiveMedia()
    },

    methods: {
      responsiveMedia () {
        const wH = window.innerWidth
        const isVideo = this.data.hero.media.contentType === 'video/mp4'

        if (wH >= 720) {
          if (isVideo) {
            this.video = this.data.hero.media.file
          } else {
            this.backgroundImg = `${this.data.hero.media.file}?h=2000&q=80`
          }
          this.mobile = false
        } else {
          this.video = false
          this.backgroundImg = `${this.data.hero.media.mobile.file}?q=60`
          this.mobile = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
