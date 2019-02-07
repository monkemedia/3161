<template lang="pug">
  .container#content-block
    .columns
      .column.is-7.is-half-tablet-only
        figure
          no-ssr
            img(v-lazy="image")
      .column.is-5.is-half-tablet-only.mobile-padding
        .content-container.content-centered
          .text-container.has-text-centered-mobile
            h3.title {{ data.title }}
            p {{ data.description }}
            nuxt-link.button(:to="data.button.path")
              | {{ data.button.title }}
              span.button-line
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
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

        if (wH >= 1170) {
          this.image = `${this.data.media.file}?h=600&q=80`
        } else {
          this.image = `${this.data.media.file}?h=600&q=60`
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

  .container {
    @include mq($from: desktop) {
      margin-top: 0;
      margin-bottom: 0;
      padding: 120px 0;
    }
  }

  .content-container {
    width: 100%;

    .text-container {
      width: 100%;
      max-width: 300px;
      padding: 40px 10px;

      @include mq($from: desktop) {
        padding: 0;
      }
    }
  }

  .title {
    font-size: rem(14px);
    @include BoldUppercase();
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

  .order {
    order: 1;
  }

  .button {
    margin-bottom: 0;
  }

</style>
