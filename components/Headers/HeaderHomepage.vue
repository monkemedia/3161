<template lang="pug">
  header.hero
    .hero-head
      navigation-main
    .hero-body.has-text-centered
      .text-container
        p.title.is-spaced(v-scroll-reveal="{ delay: 0 }")
          | {{ data.hero.title }}
        p.subtitle(v-scroll-reveal="{ delay: 250 }")
          | {{ data.hero.subtitle }}
        nuxt-link.button.is-primary.is-auto(:to="data.hero.button.path" v-scroll-reveal="{ delay: 500 }")
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

        if (wH >= 1216) {
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
  @import '../../node_modules/sass-rem/rem';
  @import '../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .hero {
    justify-content: center;
    margin-top: 52px;

    @include mq($from: tablet) {
      position: relative;
      width: 100vw;
      height: 100vh;
      min-height: 550px;
      margin-top: 0;
    }

    .hero-body,
    .hero-foot {
      z-index: 1;
      flex-grow: 0;

      .text-container {
        width: 100%;
        max-width: 400px;
        display: inline-block;
        border: 6px solid $white;
        padding: 50px;
      }
    }

    .hero-body {
      padding: 15px;
    }

    .scroll-to {
      font-size: rem(12px);
      @include ExtraBold();
      position: absolute;
      bottom: 10px;
      z-index: 1;
      text-align: center;
      width: 114px;
      left: 50%;
      margin-left: -57px;
      color: $white;

      .icon {
        animation: bounceArrow 2s infinite;
        width: 10px;
        height: 10px;
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
    }

    .subtitle {
      font-family: $family-tertiary;
      font-size: rem(50px);
      color: $white;
      line-height: 2;
      margin-bottom: 0;

      @include mq($from: tablet) {
        font-size: rem(80px);
      }
    }

    .button {
      color: $white;
      margin: 0;
    }
  }
</style>
