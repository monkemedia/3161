<template lang="pug">
  nav.navbar.is-spaced(:class="stickyHeader")
    .container
      .navbar-brand
        burger-menu
        nuxt-link.navbar-item.logo(to="/")
          img.main-logo(src="/logo.svg" alt="Dr James Griffith Hall Lodge No. 3161")
      .navbar-menu
        .navbar-end
          .navbar-item
            nuxt-link.navbar-link.animated-underline(v-for="nav in navigation" :key="nav.slug" :to="`/page/${nav.slug}`")
              | {{ nav.label }}
            nuxt-link.navbar-link.animated-underline(to="/contact-us")
              | Contact us
</template>

<script>
  import BurgerMenu from '@/components/Headers/BurgerMenu.vue'
  import _ from 'lodash'

  export default {
    name: 'NavigationMain',

    components: {
      BurgerMenu
    },

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
      if (!process.browser) {
        return false
      }

      window.addEventListener('scroll', _.debounce(() => {
        this.handleScroll()
      }))
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/utilities/variables.scss';
  @import '../../node_modules/sass-rem/rem';
  @import '../../node_modules/sass-mq/mq';

  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    transition: all .5s ease;
    background-color: $grey-dark;

    .homepage & {
      position: absolute;
      background-color: rgba(255, 255, 255, 0);
    }

    &.is-sticky-header {
      background-color: $white;
      position: fixed;

      .navbar-link {
        color: $secondary;
      }
      // border-bottom: 1px solid $grey-300;
    }
  }

  .navbar-brand {
    padding: 0;

    .logo {
      position: fixed;
      left: 50%;
      margin-left: -52px;
      padding-top: 0;
      padding-bottom: 0;

      .is-sticky-header &{
        top: 0;
      }

      @include mq($from: tablet) {
        margin-left: 0;
        left: 0;

        img {
          width: 100px;
          height: auto;
          max-width: 100%;
        }
      }
    }
  }

  .navbar-menu {
    .navbar-item {
      padding-right: 40px;
    }

    .navbar-link {
      padding-left: 0;
      padding-right: 0;
      margin: 0 20px;
    }
  }

  .main-logo {
    height: 30px;
  }
</style>
