<template lang="pug">
  footer.footer
    .content.has-text-centered
      p
        <strong>Lodge3161.com</strong> by <strong><a href="https://monkemedia.co.uk">monkemedia.co.uk</a></strong>. The source code is licensed
        <strong><a href="http://opensource.org/licenses/mit-license.php">MIT</a></strong>.
    no-ssr
      cookie-law
</template>

<script>
  import CookieLaw from 'vue-cookie-law'

  export default {
    name: 'FooterMain',

    components: {
      CookieLaw
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/sass-rem/rem';
  @import '../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  footer {
    background-color: $grey;
    position: relative;
    background-image: url('/footer-bg.jpg');
    background-size: cover;

    .content {
      p, strong, a {
        color: $white;
        font-size: rem(11px);
      }
    }
  }
</style>
