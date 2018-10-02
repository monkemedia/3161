<template lang="pug">
  nuxt-link(to="test")
    figure
      no-ssr
        progressive-img(
          :src="image"
          :placeholder="`${data.media.file}?h=100&q=5`"
          :blur="30")
    p.title {{ data.title }}
</template>

<script>
  import FeaturedItem from '@/components/Homepage/FeaturedItems/FeaturedItem.vue'

  export default {
    components: {
      FeaturedItem
    },

    props: {
      data: {
        type: Object,
        required: true
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
          this.image = `${this.data.media.file}?h=200&q=80`
        } else if (wH > 800 && wH < 1200) {
          this.image = `${this.data.media.file}?h=200&q=50`
        } else {
          this.image = `${this.data.media.file}?h=400&q=80`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  // @import '../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .title {
    @include ExtraBoldUppercase();
    font-size: rem(36px);
    width: 260px;
    line-height: .85;
  }

</style>
