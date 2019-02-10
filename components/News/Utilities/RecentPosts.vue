<template lang="pug">
  .recent-posts
    h4.underline Recent Posts
    ul.recent-posts__items
      li.recent-posts__item
        .media
          .media-left
            figure.is-64x64
              img(src="https://bulma.io/images/placeholders/64x64.png")
          .media-content
            h5 Title here peope
            time here
</template>

<script>
  export default {
    props: {
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

  .recent-posts {
    margin: 30px 0;

    &__items {
      margin: 30px 0;
    }

    &__item {
      margin-bottom: 30px 0;
    }

    h5 {
      font-size: rem(12px);
    }

    time {
      font-size: rem(11px);
      color: $grey-700;
      font-weight: 600;
    }
  }
</style>
