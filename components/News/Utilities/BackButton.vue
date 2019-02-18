<template lang="pug">
  nuxt-link.back-button(to="/news")
    | Back
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  // @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .back-button {
    padding-left: 15px;
    font-size: rem(13px);
    position: relative;

    &:hover {
      text-decoration: underline;
    }

    &:before {
      content: '\f053';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: rem(9px);
      position: absolute;
      left: 0;
      top: 2px;
    }
  }

</style>
