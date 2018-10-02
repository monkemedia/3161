<template lang="pug">
  .container
    .columns
      .column
        section.banner
          .banner-body
            .text-container
              h1.title
                | {{ data.title }} //
              h2.subtitle
                | {{ data.subtitle }}
              p {{ data.description }}
              nuxt-link.button.is-primary(:to="data.button.path")
                | {{ data.button.title }}
                span.button-line
          no-ssr
            progressive-background.banner-bg(
              :src="backgroundImg"
              :placeholder="`${data.media.file}?h=100&q=5`"
              :blur="30")
</template>

<script>
  export default {
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
          this.backgroundImg = `${this.data.media.file}?h=2000&q=80`
        } else if (wH > 800 && wH < 1200) {
          this.backgroundImg = `${this.data.media.file}?h=200&q=50`
        } else {
          this.backgroundImg = `${this.data.media.file}?h=100&q=5`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  $text-container-bg: #363333;

  .banner {
    height: 200px;
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;

    @include mq($from: tablet) {
      height: 400px;
    }

    .banner-body {
      z-index: 1;
      flex-grow: 0;
      flex-grow: 1;
      flex-shrink: 0;
      padding: 0 60px;

      .text-container {
        width: 100%;
        max-width: 320px;
        display: inline-block;
        background-color: $text-container-bg;
        padding: 30px;
      }
    }

    .banner-bg {
      background-size: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 0;
    }

    .title {
      font-size: rem(10px);
      color: $primary;
      margin-bottom: 10px;
      @include ExtraBoldUppercase();
    }

    .subtitle {
      font-size: rem(35px);
      color: $white;
      @include ExtraBold();
      margin: 0 0 10px 0;
    }

    p {
      font-size: rem(12px);
      color: $grey-lighter;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .button {
      color: $white;
      margin: 0;
    }
  }

</style>
