<template lang="pug">
  .side-bar(:class="{ 'side-bar--open': isMobileMenuActive }")
    ul
      li(v-for="nav in navigation")
        nuxt-link(:to="`/page/${nav.slug}`") {{ nav.label }}
      li
        nuxt-link(to="/news") News
      li
        nuxt-link(to="/contact-us") Contact us
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'SideBar',

    created () {
      if (!process.client) {
        return
      }

      window.addEventListener('resize', _.debounce(this.closeSidebar))
    },

    computed: {
      navigation () {
        return this.$store.getters['navigation/getData']
      },

      isMobileMenuActive () {
        return this.$store.getters['navigation/isMobileMenuOpen']
      }
    },

    methods: {
      closeSidebar () {
        this.$store.commit('navigation/SET_MOBILE_MENU_TOGGLE', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/sass-mq/mq';
  @import '../../node_modules/sass-rem/rem';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  $transition-amount: 100%;

  .side-bar {
    position: fixed;
    top: 52px;
    left: 0;
    z-index: 100;
    visibility: hidden;
    width: $transition-amount;
    height: 100%;
    transition: all 0.5s;
    transform: translateX(-$transition-amount);
    background: $white;

    &.side-bar--open {
      transform: translateX(0);
      visibility: visible;
    }

    ul li {
      border-bottom: 1px solid $grey-lighter;
      a {
        padding: 20px;
        width: 100%;
        display: inline-flex;
        font-size: rem(12px);
        color: $secondary;
        @include ExtraBoldUppercase()
      }
    }
  }

  // .side-bar-open {
  //   &:after {
  //     position: fixed;
  //     top: 0;
  //     right: 0;
  //     width: 100%;
  //     height: 100%;
  //     background: rgba(0,0,0,0.2);
  //     content: '';
  //     z-index: 40;
  //   }
  // }
</style>
