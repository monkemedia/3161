<template lang="pug">
  div
    header-main(:data="page")
    h1 test {{ page.title }}
</template>

<script>
  import HeaderMain from '@/components/Headers/HeaderMain.vue'

  export default {
    components: {
      HeaderMain
    },

    async fetch ({ store, params }) {
      return store.dispatch('page/fetchData', params.slug)
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('page/fetchData', this.$route.params.slug)
    },

    computed: {
      page () {
        return this.$store.getters['page/getData']
      }
    }
  }
</script>

<style lang="scss">

</style>
