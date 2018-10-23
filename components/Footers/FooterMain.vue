<template lang="pug">
  footer
    .container
      .columns
        .column
          .footer-text
            | Test people
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

    .footer-text {
      padding: 80px 0;
    }
  }
</style>
