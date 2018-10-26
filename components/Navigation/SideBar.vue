<template lang="pug">
  .side-bar
    ul
      li(v-for="nav in navigation")
        nuxt-link(:to="`/page/${nav.slug}`") {{ nav.label }}
      li
        nuxt-link(to="/contact-us") Contact us
</template>

<script>
  export default {
    name: 'SideBar',

    computed: {
      navigation () {
        return this.$store.getters['navigation/getData']
      }
    }
  }
</script>

<style lang="scss">
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

    .side-bar-open & {
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
