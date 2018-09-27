<template lang="pug">
  .container
    .columns
      .column
        section.banner
          responsive-background-image(
            @style="applyBackground"
            @blurValue="applyBlurValue")
            img(:src="`${data.image.file}?h=100&q=5`")
            img(
              :src="`${data.image.file}?h=400&q=80&fl=progressive`"
              :srcset="`${data.image.file}?h=200&fl=progressive&q=50 800w, ${data.image.file}?h=2000&q=80&fl=progressive 1200w`")
          .banner-body
            .text-container
              h1.title
                | {{ data.title }} //
              h2.subtitle
                | {{ data.subtitle }}
              p {{ data.description }}
              nuxt-link.button(:to="data.button.path")
                | {{ data.button.title }}
                span.button-line
          .banner-bg(:style="{ backgroundImage: `url(${backgroundImg})`, filter: `blur(${blurValue})` }")
</template>

<script>
  import ResponsiveBackgroundImage from '@/components/Utils/ResponsiveBackgroundImage'

  export default {
    components: {
      ResponsiveBackgroundImage
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
        blurValue: '10px'
      }
    },

    methods: {
      applyBackground (value) {
        this.backgroundImg = value
      },

      applyBlurValue () {
        this.blurValue = 0
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
      font-size: rem(12px);
      color: $primary;
      margin-bottom: 0;
      @include ExtraBoldUppercase();
    }

    .subtitle {
      font-size: rem(35px);
      color: $white;
      @include ExtraBold();
      margin: 0;
    }

    p {
      font-size: rem(13px);
      color: $grey-lighter;
      line-height: 1.6;
    }

    .button {
      color: $white;
      margin: 0;
    }
  }

</style>
