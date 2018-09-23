<template lang="pug">
  section.hero
    responsive-background-image(
      @style="applyBackground"
      @blurValue="applyBlurValue")
      img(:src="`${homepage.hero.image.file}?h=100&q=5`")
      img(
        :src="`${homepage.hero.image.file}?h=400&q=80&fl=progressive`"
        :srcset="`${homepage.hero.image.file}?h=200&fl=progressive&q=50 800w, ${homepage.hero.image.file}?h=2000&q=80&fl=progressive 1200w`")
    .hero-body
      .container.has-text-centered
        .text-container
          h1.title.is-spaced
            | {{ homepage.hero.title }}
          h2.subtitle
            | {{ homepage.hero.subtitle }}
          nuxt-link.button(:to="homepage.hero.button.path")
            | {{ homepage.hero.button.title }}
            span.button-line
    .hero-bg(:style="{ backgroundImage: `url(${backgroundImg})`, filter: `blur(${blurValue})` }")
</template>

<script>
  import ResponsiveBackgroundImage from '@/components/Hero/ResponsiveBackgroundImage'

  export default {
    components: {
      ResponsiveBackgroundImage
    },

    props: {
      homepage: {
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

<style lang="scss">
  @import '../../node_modules/sass-rem/rem';
  @import '../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';

  .hero {
    height: rem(200px);
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    @include mq($from: tablet) {
      height: rem(400px);
    }

    .hero-body {
      z-index: 1;
      flex-grow: 0;

      .text-container {
        width: 100%;
        max-width: 300px;
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
    }

    .subtitle {
      font-size: rem(42px);
      color: $white;
      line-height: 0.8;
    }

    .button {
      color: $white;
      margin: 0;
    }
  }

</style>
