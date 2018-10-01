<template lang="pug">
  .container
    .columns.is-gapless
      .column.is-6.content-centered.content-container
        .content
          p.title {{ data[0].title }}
          p {{ data[0].description }}
          nuxt-link.button.is-flip(:to="data[0].button.path")
            span(:data-text="data[0].button.title") {{ data[0].button.title }}
      .column.is-6
        figure.image
          img(
            :src="`${data[0].image.file}?h=400&q=80&fl=progressive`"
            :srcset="`${data[0].image.file}?h=200&fl=progressive&q=50 800w, ${data[0].image.file}?h=2000&q=80&fl=progressive 1200w`")
    .columns.is-gapless
      .column.is-6
        figure.image
          img(
            :src="`${data[1].image.file}?h=400&q=80&fl=progressive`"
            :srcset="`${data[1].image.file}?h=200&fl=progressive&q=50 800w, ${data[1].image.file}?h=2000&q=80&fl=progressive 1200w`")
      .column.is-6.content-centered.content-container
        .content
          p.title {{ data[1].title }}
          p {{ data[1].description }}
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        required: true
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
