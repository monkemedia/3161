<template lang="pug">
  nav.navbar.is-spaced(:class="stickyHeader")
    .container
      .navbar-brand
        nuxt-link.navbar-item.is-hidden-mobile.is-hidden-tablet-only(to="/")
          img.main-logo(:src="selectLogo()" alt="Dr James Griffith Hall Lodge No. 3161")
        //- burger-menu
      .navbar-menu
        .navbar-end
          .navbar-item
            nuxt-link.navbar-link.animated-underline(v-for="nav in navigation" :key="nav.slug" :to="`/page/${nav.slug}`")
              | {{ nav.label }}
</template>

<script>
  // let lastScrollTop = 0

  export default {
    name: 'NavigationHomepage',

    data () {
      return {
        stickyHeader: false
      }
    },

    computed: {
      navigation () {
        return this.$store.getters['navigation/getData']
      }
    },

    mounted () {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
      }
    },

    methods: {
      getCurrentScroll () {
        return window.pageYOffset || document.documentElement.scrollTop
      },

      handleScroll () {
        const shrinkHeader = 0
        const scroll = this.getCurrentScroll()

        if (scroll > shrinkHeader) {
          this.stickyHeader = 'is-sticky-header'
        } else {
          this.stickyHeader = ''
        }
      },

      selectLogo () {
        return this.stickyHeader ? '/djgh-black-logo.png' : '/djgh-white-logo.png'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/utilities/variables.scss';
  @import '../../node_modules/sass-rem/rem';

  .navbar {
    position: absolute;
    top: 0;
    width: 100%;
    transition: all .5s ease;
    background-color: rgba(255, 255, 255, 0);

    &.is-sticky-header {
      background-color: rgba(255, 255, 255, .95);
      position: fixed;
      padding: 0 !important;
      border-bottom: 1px solid $grey-300;
    }
  }

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
      color: $white;

      .is-sticky-header & {
        color: $secondary;
      }
    }
  }

  .main-logo {
    height: 30px;
  }
</style>
