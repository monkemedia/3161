<template lang="pug, md">
  .container
    .columns
      .column
        .centered-section-blurb
          h3.title
            | {{ data.title }}
          span(v-html="$md.render(data.description)")
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .centered-section-blurb {
    padding: 40px 0;
  }

  .title {
    font-size: rem(40px);
    margin-bottom: 20px;
    @include ExtraBoldUppercase();
  }

  .subtitle {
    font-size: rem(35px);
    color: $white;
    @include ExtraBold();
    margin: 0;
  }

  p {
    font-size: rem(13px);
    color: $grey-light;
    line-height: 1.6;
  }

  .button {
    color: $white;
    margin: 0;
  }

</style>
