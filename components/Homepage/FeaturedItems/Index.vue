<template lang="pug">
  .container
    .columns
      .column.is-4.content-centered(v-for="item in data")
        featuredItem(:data="item")
</template>

<script>
  import FeaturedItem from '@/components/Homepage/FeaturedItems/FeaturedItem.vue'

  export default {
    components: {
      FeaturedItem
    },

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

</style>
