<template lang="pug">
  footer.footer
    .content.has-text-centered
      p
        <strong>Lodge3161</strong> by <a href="https://monkemedia.co.uk">monkemedia.co.uk</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
</template>

<script>
  export default {
    name: 'FooterMain'
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
      p, strong {
        color: $white;
      }
    }
  }
</style>
