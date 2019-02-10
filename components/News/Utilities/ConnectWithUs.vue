<template lang="pug">
  .connect-with-us
    h4.underline Connect with us
    .connect-with-us__social-media
      .connect-with-us__item.connect-with-us__item--facebook
        span.icon
          i.fab.fa-facebook-f.fa-inverse
        .connect-with-us__count
          | 2333
      .connect-with-us__item.connect-with-us__item--facebook
        span.icon
          i.fab.fa-facebook-f.fa-inverse
        .connect-with-us__count
          | 2333

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

  .connect-with-us {
    margin: 30px 0;

    &__social-media {
      display: flex;
      flex-flow: row nowrap;
      margin: 30px 0;
    }

    &__item {
      width: 50%;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      display: flex;
      padding: 10px 15px;

      &--facebook {
        background: $facebook-blue;

        .icon {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          font-size: rem(12px);
          margin-bottom: 10px;
        }
      }
    }

    &__count {
      font-size: rem(10px);
      color: $white;
    }
  }
</style>
