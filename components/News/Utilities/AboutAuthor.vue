<template lang="pug">
   .card.about-author
    .card-content
      header.about-author__header
        h3.about-author__title About the author
      .media.about-author__content
        .media-left
          figure.image.is-96x96
            img(:src="data.image.file + '?h=96&q=80'" :alt="data.image.title")
        .media-content
          header
            h4.about-author__content__title {{ data.name }}
          article
            p {{ data.about }}
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
        date: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  // @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .about-author {
    &__header {
      margin-bottom: 20px;
    }

    &__title {
      font-size: rem(15px);
    }

    &__content {

      &__title {
        font-size: rem(13px);
      }
    }
  }

</style>
