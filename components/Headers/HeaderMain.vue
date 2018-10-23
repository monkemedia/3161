<template lang="pug">
  header
    navigation-main
    .hero
      .hero-body.has-text-centered
        .text-container
          h1.title.is-spaced(v-scroll-reveal="{ delay: 0 }")
            | {{ data.hero.title }}
      no-ssr
        progressive-background.hero-bg(
          :src="data.hero.media.file"
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
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/sass-rem/rem';
  @import '../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  header {
    background-color: $white;
  }

  .hero {
    height: 380px;
    justify-content: center;

    @include mq($from: tablet) {
      position: relative;
      width: 100vw;
    }

    .hero-body {
      z-index: 1;
      flex-grow: 0;

      .text-container {
        width: 100%;
        max-width: 600px;
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
      font-size: rem(30px);
      color: $white;
      margin-bottom: 0;
      @include ExtraBold();

      @include mq($from: tablet) {
        font-size: rem(50px);
      }
    }
  }
</style>
