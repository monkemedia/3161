<template lang="pug">
  ul.user-actions
    li
      span.icon
        i.fas.fa-comments
      | 3 Comments
    li
      span.icon
        i.fas.fa-heart
      | 70 Likes
    li
      span.icon
        i.fas.fa-eye
      | 3 Views
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

  .user-actions {
    font-size: rem(11px);
    margin-top: 20px;
    color: $body-color;
    font-weight: 600;
    text-transform: uppercase;

    .icon {
      color: $primary;
    }
  }

</style>
