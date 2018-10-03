<template lang="pug">
  .container
    .columns.is-gapless
      .column.is-6.content-centered.content-container
        .content
          p.title(v-scroll-reveal="{ delay: 0 }") {{ data[0].title }}
          p(v-scroll-reveal="{ delay: 250 }") {{ data[0].description }}
          nuxt-link.button(:to="data[0].button.path" v-scroll-reveal="{ delay: 500 }")
            | {{ data[0].button.title }}
            span.button-line
      .column.is-6
        figure.image(v-scroll-reveal="{ distance: '0px' }")
          no-ssr
            progressive-img(
              :src="imageOne"
              :placeholder="`${data[0].media.file}?h=100&q=5`"
              :blur="30")
    .columns.is-gapless
      .column.is-6
        figure.image(v-scroll-reveal="{ distance: '0px' }")
          no-ssr
            progressive-img(
              :src="imageTwo"
              :placeholder="`${data[1].media.file}?h=100&q=5`"
              :blur="30")
      .column.is-6.content-centered.content-container
        .content
          p.title(v-scroll-reveal="{ delay: 0 }") {{ data[1].title }}
          p(v-scroll-reveal="{ delay: 250 }") {{ data[1].description }}
          nuxt-link.button(:to="data[1].button.path" v-scroll-reveal="{ delay: 500 }")
            | {{ data[1].button.title }}
            span.button-line
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
      if (process.client) {
        this.responsiveImage()
      }
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
  // @import '../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .content-container {
    background-color: $grey-lighter;

    .content {
      width: 100%;
      max-width: 300px;
    }
  }

  .title {
    @include ExtraBoldUppercase();
    font-size: rem(36px);
    width: 260px;
    line-height: .85;
  }

  .is-gapless {
    margin-bottom: 0 !important;
  }

  p {
    font-size: rem(13px);
  }

</style>
