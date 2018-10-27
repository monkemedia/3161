<template lang="pug">
  .container#content-block
    .columns.is-gapless(v-for="(item, index) in data" )
      .column.is-6.mobile-padding(:class="{ 'order':  index === 1}")
        .content-container.content-centered
          .text-container.has-text-centered-mobile
            p.title(v-scroll-reveal="{ delay: 0 }") {{ item.title }}
            p(v-scroll-reveal="{ delay: 250 }") {{ item.description }}
            nuxt-link.button(:to="item.button.path" v-scroll-reveal="{ delay: 500 }")
              | {{ item.button.title }}
              span.button-line
      .column.is-6
        figure.image(v-scroll-reveal="{ distance: '0px' }")
          no-ssr
            progressive-img(
              :src="index === 0 ? imageOne : imageTwo"
              :placeholder="`${item.media.file}?h=100&q=5`"
              :blur="30")
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        required: true
      }
    },

    data () {
      return {
        imageOne: '',
        imageTwo: ''
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
          this.imageOne = `${this.data[0].media.file}?h=2000&q=80`
          this.imageTwo = `${this.data[1].media.file}?h=2000&q=80`
        } else if (wH > 800 && wH < 1200) {
          this.imageOne = `${this.data[0].media.file}?h=200&q=50`
          this.imageTwo = `${this.data[1].media.file}?h=200&q=50`
        } else {
          this.imageOne = `${this.data[0].media.file}?h=400&q=80`
          this.imageTwo = `${this.data[1].media.file}?h=400&q=80`
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

  #content-block {
    margin-top: 15px;
  }

  .content-container {
    background-color: $grey-lighter;
    width: 100%;
    height: 100%;

    .text-container {
      width: 100%;
      max-width: 300px;
      padding: 40px 10px;

      @include mq($from: tablet) {
        padding: 0;
      }
    }
  }

  .title {
    font-size: rem(36px);
    width: 260px;
    line-height: .85;
    @include ExtraBoldUppercase();
  }

  .is-gapless {
    margin-bottom: 0 !important;
  }

  .mobile-padding,
  .columns.is-gapless > .column.mobile-padding {
    padding: 15px !important;

    @include mq($from: tablet) {
      padding: 0 !important;
    }
  }

  p {
    font-size: rem(13px);
  }

  .order {
    order: 1;
  }

</style>
