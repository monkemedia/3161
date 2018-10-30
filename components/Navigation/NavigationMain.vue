<template lang="pug">
  div
    nav.navbar.is-spaced(:class="stickyHeader")
      .container
        .navbar-brand
          nuxt-link.navbar-item.logo(to="/")
            img.main-logo.is-hidden-mobile(src="/logo-white.svg" :alt="meta.siteTitle" v-if="!isSticky && isHomepage")
            img.main-logo.is-hidden-mobile(src="/logo.svg" :alt="meta.siteTitle" v-else)
            img.main-logo.is-hidden-tablet(src="/logo-mobile.svg" :alt="meta.siteTitle")
          burger-menu
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
        stickyHeader: false,
        isSticky: false,
        isHomepage: false
      }
    },

    computed: {
      navigation () {
        return this.$store.getters['navigation/getData']
      },

      meta () {
        return this.$store.getters['meta/getData']
      }
    },

    mounted () {
      if (!process.browser) {
        return false
      }

      this.isHomepage = !!this.$parent.$parent.$refs['homepage']

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
          this.isSticky = true
        } else {
          this.stickyHeader = ''
          this.isSticky = false
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
    background-color: $white;

    .homepage & {
      position: absolute;
      background-color: rgba(255, 255, 255, 1);

      @include mq($from: tablet) {
        background-color: rgba(255, 255, 255, 0);
      }
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
      position: absolute;
      left: 50%;
      margin-left: -13.9px;
      top: 11px;
      padding: 0;

      @include mq($from: tablet) {
        position: relative;
        left: auto;
        margin-left: auto;
        top: auto;
        margin-left: 20px;
        padding: 0 0.75rem;
      }

      img {
        height: auto;
        max-width: 100%;

        @include mq($from: tablet) {
          max-height: 26px;
        }
      }
    }
  }

  .navbar-menu {
    .navbar-item {
      // padding-right: 40px;
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
