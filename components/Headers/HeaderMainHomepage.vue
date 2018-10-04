<template lang="pug">
  header.hero
    .hero-head
      navigation-homepage
    .hero-body.has-text-centered
      .text-container
        h1.title.is-spaced(v-scroll-reveal="{ delay: 0 }")
          | {{ data.hero.title }}
        h2.subtitle(v-scroll-reveal="{ delay: 250 }")
          | {{ data.hero.subtitle }}
        nuxt-link.button.is-primary.is-auto(:to="data.hero.button.path" v-scroll-reveal="{ delay: 500 }")
          | {{ data.hero.button.title }}
          span.button-line
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
  import NavigationHomepage from '@/components/Navigation/NavigationHomepage.vue'

  export default {
    name: 'HeaderMainHomepage',

    components: {
      NavigationHomepage
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
      if (process.client) {
        const wH = window.innerWidth

        console.log(wH)

        // if (wH <= 800 || !this.data.hero.media.contentType === 'video/mp4') {
        window.addEventListener('resize', this.responsiveMedia)
        this.responsiveMedia()
        // } else {
        //   window.addEventListener('resize', this.isVideo)
        //   this.isVideo()
        // }
      }
    },

    methods: {
      responsiveMedia () {
        const wH = window.innerWidth
        const isVideo = this.data.hero.media.contentType === 'video/mp4'

        if (wH >= 1200) {
          if (isVideo) {
            this.video = this.data.hero.media.file
          } else {
            this.backgroundImg = `${this.data.hero.media.file}?h=2000&q=80`
          }
          this.mobile = false
        } else if (wH > 800 && wH < 1200) {
          if (isVideo) {
            this.video = this.data.hero.media.file
          } else {
            this.backgroundImg = `${this.data.hero.media.file}?h=200&q=50`
          }
          this.mobile = false
        } else {
          this.video = false
          this.backgroundImg = `${this.data.hero.media.mobile.file}?q=80`
          this.mobile = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/sass-rem/rem';
  @import '../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .hero {
    position: relative;
    width: 100vw;
    height: 100vh;
    justify-content: center;

    // @include mq($from: tablet) {
    //   height: 400px;
    // }

    .hero-body {
      z-index: 1;
      flex-grow: 0;

      .text-container {
        width: 100%;
        max-width: 400px;
        display: inline-block;
      }
    }

    .hero-bg {
      background-size: cover;
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: 0;
    }

    .hero-video-bg {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;

      video {
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }

    .title {
      font-size: rem(12px);
      color: $white;
      margin-bottom: 0;
      @include ExtraBold();
    }

    .subtitle {
      font-size: rem(50px);
      color: $white;
      line-height: 2;
      margin-bottom: 0;
      @include ExtraBold();

      @include mq($from: tablet) {
        font-size: rem(70px);
      }
    }

    .button {
      color: $white;
      margin: 0;
    }
  }
</style>
