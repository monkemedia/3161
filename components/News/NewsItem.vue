<template lang="pug">
  .card
    .card-image
      figure.image.is-16by9
        img(:src="data.image.fields.file.url + '?h=360&q=80'" :alt="data.image.fields.title")
    .card-content
      .media
        .media-left
          date-tile(:data="data.date")
          user-actions
        .media-content
          header
            h3 {{ data.summary}}
          article
            div(v-html="$md.render(data.description)")
      .tags
        span.tag.is-white.tag-label TAGS
        span.tag(v-for="tag in data.tags")
          nuxt-link(:to="`/news?tag=${tag}`") {{ tag }}

</template>

<script>
  import DateTile from '@/components/News/Utilities/DateTile.vue'
  import UserActions from '@/components/News/Utilities/UserActions.vue'

  export default {
    components: {
      DateTile,
      UserActions
    },

    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/sass-rem/rem';
  // @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  header {
    position: relative;
    background: $primary;
    padding: 20px;
    margin-top: -50px;
    margin-right: -24px;
    margin-bottom: 20px;

    h3 {
      color: $white;
      font-weight: 600;
      font-size: rem(18px);
      text-transform: uppercase;
    }
  }

  article {
    p {
      font-size: rem(13px);
      font-weight: 600;
    }
  }

  .card {
    margin-bottom: 30px;
  }

  .media-left {
    margin-right: rem(30px);
    width: 120px;
  }

  .tags {
    margin: 30px 0 0;

    .tag {
      font-weight: 600;
      font-size: rem(12px);
      color: $grey-700;
      padding: 14px 22px;
    }

    .tag-label {
      color: $secondary;
      padding-left: 0;
    }
  }

</style>
