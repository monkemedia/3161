<template lang="pug">
  section.container
    h1 {{ page.title }}
</template>

<script>
  export default {
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
