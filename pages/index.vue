<template lang="pug">
  div.homepage#top(ref="homepage" v-cloak)
    header-homepage(:data="homepage")
    .main
      content-blocks(:data="homepage.contentBlocks")
      banner.is-hidden-mobile.is-hidden-tablet-only(:data="homepage.banner")
      .container.sub-main
        featured-items(:data="homepage.featuredItems")
        content-asset(:data="homepage")
        location-map
    footer-main
    back-to-top
</template>

<script>
  import HeaderHomepage from '@/components/Headers/HeaderHomepage.vue'
  import ContentBlocks from '@/components/Homepage/ContentBlocks/Index.vue'
  import Banner from '@/components/Homepage/Banner/Index.vue'
  import FeaturedItems from '@/components/Homepage/FeaturedItems/Index.vue'
  import ContentAsset from '@/components/Homepage/ContentAsset/Index.vue'
  import LocationMap from '@/components/Utilities/LocationMap.vue'
  import BackToTop from '@/components/Utilities/BackToTop.vue'
  import FooterMain from '@/components/Footers/FooterMain.vue'

  export default {
    components: {
      HeaderHomepage,
      ContentBlocks,
      Banner,
      FeaturedItems,
      ContentAsset,
      LocationMap,
      BackToTop,
      FooterMain
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

</style>
