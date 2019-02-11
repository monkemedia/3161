<template lang="pug">
  .recent-posts
    h4.underline Recent Posts
    ul.recent-posts__items
      li.recent-posts__item(v-for="post in recentPosts")
        nuxt-link(:to="'/news/' + post.id")
          .media
            .media-left
              figure.is-64x64
                img(:src="post.image.fields.file.url + '?fit=thumb&h=64&w=64'" :alt="post.image.fields.title")
            .media-content
              h5 {{ post.title }}
              time {{ date }}
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
    },

    data () {
      return {
        date: moment(this.recentPosts).format('D MMM YYYY')
      }
    },

    computed: {
      recentPosts () {
        return this.$store.getters['news/getRecentData']
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
    margin: 30px 0 0;

    &__items {
      margin: 30px 0 0;
    }

    &__item {
      margin-bottom: 18px;
      border-bottom: 1px solid $grey-lighter;
      padding-bottom: 10px;

      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      }
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
