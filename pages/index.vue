<template lang="pug">
  div
    .container
      section.hero
        responsive-background-image(
          @style="applyBackground"
          @blurValue="applyBlurValue")
          img(:src="`${homepage.hero.fields.file.url}?h=100&q=5`")
          img(
            :src="`${homepage.hero.fields.file.url}?h=400&q=80&fl=progressive`"
            :srcset="`${homepage.hero.fields.file.url}?h=200&fl=progressive&q=50 800w, ${homepage.hero.fields.file.url}?h=2000&q=80&fl=progressive 1200w`")
        .hero-body
          .container
            h1.title
              | Hero title
            h2.subtitle
              | Hero subtitle
        .hero-bg(:style="{ backgroundImage: `url(${backgroundImg})`, filter: `blur(${blurValue})` }")
</template>

<script>
  import ResponsiveBackgroundImage from '@/components/ResponsiveBackgroundImage'

  export default {
    components: {
      ResponsiveBackgroundImage
    },

    data () {
      return {
        backgroundImg: '',
        blurValue: '10px'
      }
    },

    async fetch ({ store }) {
      return store.dispatch('homepage/fetchData')
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('homepage/fetchData')
    },

    computed: {
      homepage () {
        console.log('test', this.$store.getters['homepage/getData'])
        return this.$store.getters['homepage/getData']
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
  @import '../node_modules/sass-rem/rem';
  @import '../node_modules/sass-mq/mq';

  .hero {
    height: rem(200px);
    position: relative;
    overflow: hidden;

    @include mq($from: tablet) {
      height: rem(400px);
    }

    .hero-body {
      z-index: 1;
    }

    .hero-bg {
      background-size: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 0;
    }
  }

</style>
