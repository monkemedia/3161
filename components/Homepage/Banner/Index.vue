<template lang="pug">
  .container
    .columns
      .column
        section.banner
          .banner-body
            .text-container
              p.title
                | {{ data.title }} //
              p.subtitle
                | {{ data.subtitle }}
              p.is-hidden-mobile {{ data.description }}
              nuxt-link.button.is-primary(:to="data.button.path")
                | {{ data.button.title }}
                span.button-line
          no-ssr
            progressive-background.banner-bg(
              v-if="backgroundImg"
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
        backgroundImg: null
      }
    },

    created () {
      if (process.client) {
        this.responsiveImage()
      }
    },

    methods: {
      responsiveImage () {
        const wH = window.innerWidth

        if (wH >= 1200) {
          this.backgroundImg = `${this.data.media.file}?h=2000&q=80`
        } else if (wH > 800 && wH < 1200) {
          this.backgroundImg = `${this.data.media.file}?h=200&q=50`
        } else {
          this.backgroundImg = false
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
    margin: 15px 0;

    @include mq($from: tablet) {
      height: 400px;
      margin: 0;
    }

    .banner-body {
      z-index: 1;
      flex-grow: 1;

      @include mq($from: tablet) {
        padding: 0 60px;
        flex-shrink: 0;
      }

      .text-container {
        width: 100%;
        display: inline-block;
        background-color: $text-container-bg;
        padding: 30px;

        @include mq($from: tablet) {
          max-width: 320px;
        }
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
      line-height: 1;
      @include ExtraBoldUppercase();
    }

    .subtitle {
      font-size: rem(35px);
      color: $white;
      line-height: 1;
      @include ExtraBoldUppercase();
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
