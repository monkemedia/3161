<template lang="pug">
  div(:class="{ 'side-bar-open': isMobileMenuActive }")
    SideBar
    nuxt
</template>

<script>
  import SideBar from '@/components/Navigation/SideBar'

  export default {
    name: 'DefaultLayout',

    components: {
      SideBar
    },

    computed: {
      isMobileMenuActive () {
        return this.$store.getters['navigation/isMobileMenuOpen']
      }
    }
  }
</script>

<style lang="scss">

</style>
