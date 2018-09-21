<template lang="pug">
  nav.navbar
    .container
      .navbar-brand
        nuxt-link.navbar-item.is-hidden-mobile.is-hidden-tablet-only(to="/admin")
          img.main-logo(src="/dr-james-griffith-hall-logo.png" alt="Dr James Griffith Hall Lodge No. 3161")
        //- burger-menu
      .navbar-menu
        .navbar-end
          nuxt-link.navbar-item(v-for="nav in navigation" :key="nav.slug" :to="`/page/${nav.slug}`")
            | {{ nav.label }}
</template>

<script>
  export default {
    name: 'HeaderMain',

    computed: {
      navigation () {
        return this.$store.getters['navigation/getData']
      }
    }
  }
</script>

<style scoped>
  /*// @import '~assets/css/utilities/variables.sass'

  // .navbar
  //   background $white
  //   border-bottom 1px solid #eee

  //   .navbar-brand
  //     align-items center
  //     padding 1rem 2rem
  //     height 60px

  //     .navbar-item
  //       .main-logo
  //         height 30px
  //         max-height 100%*/
</style>
