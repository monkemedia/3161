<template lang="pug">
  .navbar-burger(@click.prevent="toggleMobileMenu" v-on-clickaway="away" :class="{ 'is-active': isMobileMenuActive }")
    span
    span
    span
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway'

  export default {
    name: 'BurgerMenu',

    mixins: [
      clickaway
    ],

    methods: {
      toggleMobileMenu () {
        const htmlTag = document.getElementsByTagName('html')[0]

        if (this.$store.getters['navigation/isMobileMenuOpen']) {
          this.$store.commit('navigation/SET_MOBILE_MENU_TOGGLE', false)
          htmlTag.classList.remove('disable-overflow')
        } else {
          this.$store.commit('navigation/SET_MOBILE_MENU_TOGGLE', true)
          htmlTag.classList.add('disable-overflow')
        }
      },

      away () {
        const htmlTag = document.getElementsByTagName('html')[0]
        const navbar = document.getElementsByClassName('navbar')[0]

        console.log('navbar', navbar)

        this.$store.commit('navigation/SET_MOBILE_MENU_TOGGLE', false)
        htmlTag.classList.remove('disable-overflow')
        navbar.classList.add('is-fixed-top')
      }
    },

    computed: {
      isMobileMenuActive () {
        return this.$store.getters['navigation/isMobileMenuOpen']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/utilities/variables.scss';

  .navbar-burger {
    border: 0;
    background-color: transparent;
    margin: 0;
    position: absolute;
    right: 0;

    span {
      width: 22px;
      height: 2px;
      left: calc(50% - 11px);
      background-color: $white;

      &:nth-child(1) {
        top: calc(50% - 8px);
      }

      &:nth-child(3){
        top: calc(50% + 6px);
      }

      .is-sticky-header & {
        background-color: $secondary;
      }
    }

    &.is-active {
      span {
        &:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        &:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      }
    }
  }
</style>
