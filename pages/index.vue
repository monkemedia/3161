<template lang="pug">
  div
    .container
      section.hero(:style="{ backgroundImage: `url(${backgroundImg})` }")
        responsive-background-image(@style="applyBackground")
          img(:src="`${homepage.hero.fields.file.url}?h=400`" :srcset="`${homepage.hero.fields.file.url}?h=200&q=50 800w, ${homepage.hero.fields.file.url}?h=400&q=80 1200w`")
        .hero-body
          .container
            h1.title
              | Hero title
            h2.subtitle
              | Hero subtitle
</template>

<script>
  import ResponsiveBackgroundImage from '@/components/ResponsiveBackgroundImage'

  export default {
    components: {
      ResponsiveBackgroundImage
    },

    data () {
      return {
        backgroundImg: ''
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
      }
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/sass-rem/rem';
  @import '../node_modules/sass-mq/mq';

  .hero {
    background-size: cover;
    height: rem(200px);

    @include mq($from: tablet) {
      height: rem(400px);
    }
  }

</style>
