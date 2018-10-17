<template lang="pug">
  nav.navbar.is-spaced(:class="stickyHeader")
    .container
      .navbar-brand
        burger-menu
        nuxt-link.navbar-item.logo(to="/")
          img.main-logo(:src="logo" alt="Dr James Griffith Hall Lodge No. 3161")
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
        logo: '/djgh-white-logo.png'
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
      this.selectLogo()
    },

    methods: {
      getCurrentScroll () {
        return window.pageYOffset || document.documentElement.scrollTop
      },

      selectLogo () {
        this.$parent.$parent.$refs.homepage && !this.stickyHeader ? this.logo = '/djgh-white-logo.png' : this.logo = '/djgh-black-logo.png'
      },

      handleScroll () {
        const shrinkHeader = 0
        const scroll = this.getCurrentScroll()

        if (scroll > shrinkHeader) {
          this.stickyHeader = 'is-sticky-header'
        } else {
          this.stickyHeader = ''
        }

        this.selectLogo()
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
      background-color: rgba(255, 255, 255, 0);
    }

    &.is-sticky-header {
      background-color: rgba(255, 255, 255, 1);
      position: fixed;
      padding: 0 !important;
      // border-bottom: 1px solid $grey-300;
    }
  }

  .navbar-brand {
    padding: 0;

    @include mq($from: tablet) {
      padding: 0 20px;
    }

    .logo {
      position: absolute;
      left: 50%;
      margin-left: -52px;
      padding-top: 12px;
      padding-bottom: 12px;
      width: 104px;

      @include mq($from: tablet) {
        position: relative;
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

      .homepage & {
        color: $white;

        &.is-active,
        &:hover {
          color: $white;
        }
      }

      .is-sticky-header & {
        color: $secondary;
      }
    }

    .is-sticky-header & {
      .homepage & {
        .navbar-link {
          &.is-active,
          &:hover {
            color: $secondary;
          }
        }
      }
    }
  }

  .main-logo {
    height: 30px;
  }
</style>
