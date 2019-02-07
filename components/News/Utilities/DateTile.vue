<template lang="pug">
  .date-tile
    .date-tile__day-month
      .date-tile__day {{ date.day }}
      .date-tile__month {{ date.month }}
    .date-tile__year
      | {{ date.year }}
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      data: {
        type: String,
        required: true
      }
    },

    data () {
      return {
        date: ''
      }
    },

    mounted () {
      this.date = {
        day: moment(this.data).format('D'),
        month: moment(this.data).format('MMM'),
        year: moment(this.data).format('YYYY')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  // @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .date-tile {
    background: $primary;
    width: 65px;
    height: 80px;
    padding: 3px;
    text-align: center;

    &__day-month {
      background: $white;
      display: inline-block;
      padding: 10px 4px;
      width: 100%;
      height: 48px;
    }

    &__day {
      font-size: rem(16px);
      font-weight: 700;
      line-height: 1;
    }

    &__month {
      font-size: rem(12px);
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1;
    }

    &__year {
      font-size: rem(12px);
      font-weight: 700;
      color: $white;
      padding: 6px 4px;
    }
  }

</style>
