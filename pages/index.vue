<template lang="pug">
  div
    hero(:data="homepage")
    content-blocks(:data="homepage.contentBlocks")
    banner(:data="homepage.banner")
    content-asset(:data="homepage")

</template>

<script>
  import Hero from '@/components/Homepage/Hero'
  import ContentBlocks from '@/components/Homepage/ContentBlocks'
  import Banner from '@/components/Homepage/Banner'
  import ContentAsset from '@/components/Homepage/ContentAsset'

  export default {
    components: {
      Hero,
      ContentBlocks,
      Banner,
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

</style>
