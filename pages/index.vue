<template lang="pug">
  div
    header-main-homepage(:data="homepage")
    .main
      content-blocks(:data="homepage.contentBlocks")
      banner(:data="homepage.banner")
      section
        .container.sub-main
          featured-items(:data="homepage.featuredItems")
          content-asset(:data="homepage")

</template>

<script>
  import HeaderMainHomepage from '@/components/Headers/HeaderMainHomepage.vue'
  import ContentBlocks from '@/components/Homepage/ContentBlocks/Index.vue'
  import Banner from '@/components/Homepage/Banner/Index.vue'
  import FeaturedItems from '@/components/Homepage/FeaturedItems/Index.vue'
  import ContentAsset from '@/components/Homepage/ContentAsset/Index.vue'

  export default {
    components: {
      HeaderMainHomepage,
      ContentBlocks,
      Banner,
      FeaturedItems,
      ContentAsset
    },

    async fetch ({ store }) {
      return store.dispatch('homepage/fetchData')
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('homepage/fetchData')
    },

    computed: {
      homepage () {
        return this.$store.getters['homepage/getData']
      }
    }
  }
</script>

<style lang="scss" scoped>
  // @import '../node_modules/sass-rem/rem';
  // @import '../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  // @import '~assets/css/utilities/mixins.scss';

  .sub-main {
    background-color: $grey-lighter;
    padding: 15px;
  }
</style>
