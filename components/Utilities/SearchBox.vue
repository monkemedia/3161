<template lang="pug">
  .search-bar
    .field
      .control
        input.input(placeholder="Search")
        button
          span.icon
            i.fas.fa-search
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/utilities/variables.scss';
  @import '../../node_modules/sass-rem/rem';
  @import '~assets/css/utilities/mixins.scss';

  .input {
    height: 38px;
    position: relative;
    padding-right: 45px;
    text-transform: uppercase;
  }

  button {
    background: transparent;
    padding: 0;
    border: 0;
    position: absolute;
    right: 0;
    height: 38px;
    width: 38px;
  }

</style>
