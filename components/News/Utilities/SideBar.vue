<template lang="pug">
  aside.side-bar
    search-box
    recent-posts
    connect-with-us
    archives
</template>

<script>
  import SearchBox from '@/components/Utilities/SearchBox'
  import RecentPosts from '@/components/News/Utilities/RecentPosts'
  import ConnectWithUs from '@/components/News/Utilities/ConnectWithUs'
  import Archives from '@/components/News/Utilities/Archives'

  export default {
    components: {
      SearchBox,
      RecentPosts,
      ConnectWithUs,
      Archives
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
