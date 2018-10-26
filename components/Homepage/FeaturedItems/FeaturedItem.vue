<template lang="pug">
  nuxt-link.item.image-link-overlay(to="test" v-scroll-reveal="{ delay: 250 * index }")
    .text
      p.title {{ data.title }}
    no-ssr
      figure
        progressive-background(
          :src="image"
          :placeholder="`${data.media.file}?h=100&q=5`"
          :blur="30")
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
      },

      index: {
        type: Number,
        required: true
      }
    },

    data () {
      return {
        image: ''
      }
    },

    created () {
      if (!process.client) {
        return
      }

      this.responsiveImage()
    },

    methods: {
      responsiveImage () {
        const wH = window.innerWidth

        if (wH >= 1200) {
          this.image = `${this.data.media.file}?h=400&q=80`
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

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    figure {
      width: 100%;
    }

    .text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      z-index: 10;

      .title {
        font-family: $family-secondary;
        font-size: rem(30px);
        width: 260px;
        line-height: .85;
        color: $white;
      }
    }
  }

</style>
