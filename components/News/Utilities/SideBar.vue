<template lang="pug">
  aside.side-bar
    search-box
    recent-posts
</template>

<script>
  import SearchBox from '@/components/Utilities/SearchBox'
  import RecentPosts from '@/components/News/Utilities/RecentPosts'

  export default {
    components: {
      SearchBox,
      RecentPosts
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  // @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .side-bar {
    border: 4px solid $grey-lighter;
    padding: 40px 20px;
  }

</style>
