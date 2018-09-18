<template lang="pug">
  nav.navbar
    .container
      .navbar-brand
        nuxt-link.navbar-item.is-hidden-mobile.is-hidden-tablet-only(to="/admin")
          p logo here
          //- img.main-logo(src="/static/devil-panties-main-logo.png" srcset="/static/devil-panties-main-logo.png 1x, /static/devil-panties-main-logo@x2.png 2x" alt="Devil Panties")
        //- burger-menu
      .navbar-menu
        .navbar-start
          a.navbar-item(v-for="nav in navigation")
            | {{ nav.label }}
        .navbar-end
          .navbar-item#user-login-desktop
            //- my-account
</template>

<script>
  export default {
    name: 'HeaderMain',

    data () {
      return {
        navigation: [
          {
            label: 'About Freemasonry',
            path: ''
          },
          {
            label: 'Become a Freemason',
            path: ''
          },
          {
            label: 'About JG Hall Lodge',
            path: ''
          },
          {
            label: 'Calender',
            path: ''
          },
          {
            label: 'Contact us',
            path: ''
          }
        ]
      }
    }
  }
</script>

<style scoped>
  /*// @import '~assets/css/utilities/variables.sass'

  // .navbar
  //   background $white
  //   border-bottom 1px solid #eee

  //   .navbar-brand
  //     align-items center
  //     padding 1rem 2rem
  //     height 60px

  //     .navbar-item
  //       .main-logo
  //         height 30px
  //         max-height 100%*/
</style>
