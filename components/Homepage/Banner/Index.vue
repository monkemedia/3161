<template lang="pug">
  section
    .container
      .columns.is-gapless-t-b
        .column.is-5
          no-ssr
            figure
              img(v-lazy="image")
        .column.is-7
          .columns.is-centered.content-centered
            .column.is-10
              .text-container
                h4.title.is-spaced
                  | {{ data.title }} //
                h5.subtitle
                  | {{ data.subtitle }}
                p.is-hidden-mobile {{ data.description }}
                nuxt-link.button.is-primary(:to="data.button.path")
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
        backgroundImg: null,
        image: ''
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
          this.image = `${this.data.media.file}?h=2000&q=80`
        } else {
          this.image = `${this.data.media.file}?h=200&q=50`
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

  section {
    background-color: #141414;
  }

  .title {
    font-size: rem(10px);
    color: $primary;
    margin-bottom: 10px;
    line-height: 1;
    @include ExtraBoldUppercase();
  }

  .subtitle {
    font-size: rem(35px);
    color: $white;
    line-height: 1;
    @include ExtraBoldUppercase();
    margin: 0 0 10px 0;
  }

  p {
    font-size: rem(12px);
    color: $grey-lighter;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .button {
    color: $white;
    margin: 0;
  }

</style>
