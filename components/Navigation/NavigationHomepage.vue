<template lang="pug">
  nav.navbar.is-spaced(:class="stickyHeader")
    .container
      .navbar-brand
        burger-menu
        nuxt-link.navbar-item.logo(to="/")
          img.main-logo(:src="selectLogo()" alt="Dr James Griffith Hall Lodge No. 3161")
      .navbar-menu
        .navbar-end
          .navbar-item
            nuxt-link.navbar-link.animated-underline(v-for="nav in navigation" :key="nav.slug" :to="`/page/${nav.slug}`")
              | {{ nav.label }}
</template>

<script>
  import BurgerMenu from '@/components/Headers/BurgerMenu.vue'

  export default {
    name: 'NavigationHomepage',

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
  @import '../../node_modules/sass-mq/mq';

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
