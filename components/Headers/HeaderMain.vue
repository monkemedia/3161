<template lang="pug">
  nav.navbar.is-spaced
    .container
      .navbar-brand
        nuxt-link.navbar-item.is-hidden-mobile.is-hidden-tablet-only(to="/admin")
          img.main-logo(src="/dr-james-griffith-hall-logo.png" alt="Dr James Griffith Hall Lodge No. 3161")
        //- burger-menu
      .navbar-menu
        .navbar-end
          .navbar-item
            nuxt-link.navbar-link.animated-underline(v-for="nav in navigation" :key="nav.slug" :to="`/page/${nav.slug}`")
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

<style lang="scss" scoped>
  @import '~assets/css/utilities/variables.scss';
  @import '../../node_modules/sass-rem/rem';

  .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-menu {
    .navbar-item {
      padding-right: 40px;
    }

    .navbar-link {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .main-logo {
    height: 20px;
  }
</style>
