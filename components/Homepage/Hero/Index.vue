<template lang="pug">
  .container
    .columns
      .column
        section.hero
          responsive-background-image(
            @style="applyBackground"
            @blurValue="applyBlurValue")
            img(:src="`${data.hero.image.file}?h=100&q=5`")
            img(
              :src="`${data.hero.image.file}?h=400&q=80&fl=progressive`"
              :srcset="`${data.hero.image.file}?h=200&fl=progressive&q=50 800w, ${data.hero.image.file}?h=2000&q=80&fl=progressive 1200w`")
          .hero-body.has-text-centered
            .text-container
              h1.title.is-spaced
                | {{ data.hero.title }}
              h2.subtitle
                | {{ data.hero.subtitle }}
              nuxt-link.button(:to="data.hero.button.path")
                | {{ data.hero.button.title }}
                span.button-line
          .hero-bg(:style="{ backgroundImage: `url(${backgroundImg})`, filter: `blur(${blurValue})` }")
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

  .hero {
    height: 200px;
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    @include mq($from: tablet) {
      height: 400px;
    }

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
