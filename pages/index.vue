<template lang="pug">
  section.container
</template>

<script>
  export default {
    async fetch ({ store }) {
      return store.dispatch('homepage/fetchData')
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('homepage/fetchData')
    }
  }
</script>

<style lang="scss">

</style>
