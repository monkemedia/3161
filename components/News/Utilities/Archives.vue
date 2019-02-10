<template lang="pug">
  .archives
    h4.underline Archives
    ul.archives__list
      li.archives__list__item
        a September 2010
          span.count 11
      li.archives__list__item
        a August 2010
          span.count 11

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

  .archives {
    margin: 30px 0;

    &__list {
      margin: 30px 0;

      &__item {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }

        a {
          font-size: rem(14px);
          color: $body-color;
          padding: 5px 0 5px 20px;
          position: relative;
          width: 100%;
          display: flex;

          &:before {
            content: '\f0da';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            font-size: rem(11px);
            position: absolute;
            left: 0;
            top: 7px;
          }

          &.active,
          &:hover {
            color: $primary;

             &:before {
              color: $primary;
             }

             .count {
              background: $primary;
              color: $white;
             }
          }
        }

        .count {
          position: absolute;
          right: 0;
          background: $grey-lighter;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: rem(10px);
          top: 3px;
        }
      }
    }
  }
</style>
