<template lang="pug">
  .columns
    .column.is-4(v-for="(item, index) in data")
      featuredItem(:data="item" :index="index")
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
