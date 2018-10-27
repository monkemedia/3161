<template lang="pug">
  div#top
    header-main(:data="page")
    .main
      .container.sub-main
        .centered-section-blurb
          .columns
            .column
              h1.title {{ page.title }}
              p {{ page.description }}
</template>

<script>
  import HeaderMain from '@/components/Headers/HeaderMain.vue'

  export default {
    components: {
      HeaderMain
    },

    async fetch ({ store, params }) {
      return store.dispatch('page/fetchData', params.slug)
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('page/fetchData', this.$route.params.slug)
    },

    computed: {
      page () {
        return this.$store.getters['page/getData']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/sass-rem/rem';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .container {
    padding-top: 60px !important;
    padding-bottom: 60px;
  }

  .title {
    font-size: rem(70px);
    margin-bottom: 20px;
    @include ExtraBoldUppercase();
  }
</style>
