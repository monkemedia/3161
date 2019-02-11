<template lang="pug">
  header
    navigation-main
    .hero.has-overlay
      .overlay
      .hero-body.has-text-centered
        .text-container
          h1.title--large.is-spaced
            | {{ title }}
          h2.title--small.is-spaced
            | Updates from our news items
      no-ssr
        progressive-background.hero-background(
          :src="`${image.file.url}?q=60`"
          :placeholder="`${image.file.url}?h=100&q=5`"
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
      image: {
        type: Object,
        required: true
      },

      title: {
        type: String,
        required: true
      }
    },

    data () {
      return {
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
    height: 240px;
    justify-content: center;
    margin-top: 52px;

    @include mq($from: desktop) {
      height: 380px;
      position: relative;
      width: 100vw;
      margin-top: 84px;
    }
  }
</style>
