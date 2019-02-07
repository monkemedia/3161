<template lang="pug">
  .card
    .card-image
      figure.image.is-16by9
        img(src="https://bulma.io/images/placeholders/640x360.png" alt="Placeholder image")
    .card-content
      .media
        .media-left
          date-tile(:data="data.date")
        .media-content
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
</template>

<script>
  import DateTile from '@/components/News/Utilities/DateTile.vue'

  export default {
    components: {
      DateTile
    },

    props: {
      data: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
      }
    },

    created () {
    },

    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  // @import '../../../node_modules/sass-rem/rem';
  // @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

</style>
