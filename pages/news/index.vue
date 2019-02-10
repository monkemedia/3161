<template lang="pug">
  div#top
    header-main(:data="header")
    .main
      .container.sub-main
        .columns
          .column.is-8
            news-list-item(:data="article" :key="article.id" v-for="article in news")
          .column.is-4
            side-bar
    footer-main
</template>

<script>
  import HeaderMain from '@/components/Headers/HeaderMain.vue'
  import NewsListItem from '@/components/News/NewsListItem.vue'
  import SideBar from '@/components/News/Utilities/SideBar.vue'
  import FooterMain from '@/components/Footers/FooterMain.vue'

  export default {
    components: {
      HeaderMain,
      NewsListItem,
      SideBar,
      FooterMain
    },

    data () {
      return {
        header: {
          title: 'Latest News',
          blurb: 'Updates from our blog',
          hero: {
            media: {
              file: 'Hero.jpg'
            }
          }
        }
      }
    },

    async fetch ({ store }) {
      return store.dispatch('news/fetchData')
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('news/fetchData')
    },

    computed: {
      news () {
        return this.$store.getters['news/getData']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 60px !important;
    padding-bottom: 60px;
  }

</style>
