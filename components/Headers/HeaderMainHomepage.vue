<template lang="pug">
  header.hero
    .hero-head
      navigation-homepage
    .hero-body.has-text-centered
      .text-container
        h1.title.is-spaced
          | {{ data.hero.title }}
        h2.subtitle
          | {{ data.hero.subtitle }}
        nuxt-link.button(:to="data.hero.button.path")
          | {{ data.hero.button.title }}
          span.button-line
    no-ssr
      progressive-background.hero-bg(
        :src="backgroundImg"
        :placeholder="`${data.hero.image.file}?h=100&q=5`"
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
        backgroundImg: ''
      }
    },

    created () {
      if (process.client) {
        this.responsiveImage()
      }
    },

    methods: {
      applyBackground (value) {
        this.backgroundImg = value
      },

      applyBlurValue () {
        this.blurValue = 0
      },

      responsiveImage () {
        const wH = window.innerWidth

        if (wH >= 1200) {
          this.backgroundImg = `${this.data.hero.image.file}?h=2000&q=80`
        } else if (wH > 800 && wH < 1200) {
          this.backgroundImg = `${this.data.hero.image.file}?h=200&q=50`
        } else {
          this.backgroundImg = `${this.data.hero.image.file}?h=100&q=5`
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
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 0;
    }

    .title {
      font-size: rem(12px);
      color: $white;
      margin-bottom: 0;
      @include ExtraBold();
    }

    .subtitle {
      font-size: rem(70px);
      color: $white;
      line-height: 2;
      @include ExtraBold();
    }

    .button {
      color: $white;
      margin: 0;
    }
  }
</style>
