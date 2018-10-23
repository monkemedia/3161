<template lang="pug">
  a.back-to-top.is-hidden-mobile(v-scroll-to="'#top'" :class="{ 'is-active': backToTopActive }")
    span.back-to-top__icon
      fa(:icon="['fas', 'chevron-up']")
    .text
      | Back <br> to top
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'BackToTop',

    data () {
      return {
        backToTopActive: false
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
        const scroll = this.getCurrentScroll()

        if (scroll > 300) {
          this.backToTopActive = true
        } else {
          this.backToTopActive = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/utilities/variables.scss';
  @import '../../node_modules/sass-rem/rem';
  @import '~assets/css/utilities/mixins.scss';

  .back-to-top {
    position: fixed;
    right: 15px;
    width: 50px;
    height: 50px;
    bottom: 15px;
    background-color: $secondary;
    color: $white;
    font-size: rem(9px);
    @include ExtraBoldUppercase();
    text-align: center;
    line-height: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    display: flex;
    opacity: 0;
    visibility: hidden;
    transition: all .25s cubic-bezier(.4,.01,.1,1);

    &:hover,
    &:focus {
      background-color: $primary;
    }

    &.is-active {
      opacity: 1;
      visibility: visible;
    }

    .back-to-top__icon {
      margin-bottom: 2px;
    }
  }
</style>
