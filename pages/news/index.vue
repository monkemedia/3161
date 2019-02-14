<template lang="pug">
  div#top
    header-main(:data="header")
    .main
      .container.sub-main
        .columns
          .column.is-8
            div(v-if="news.length > 0")
              news-list-item(:data="article" :key="article.id" v-for="article in news")
            p.no-matches(v-else) Oh no! Nothing matches "{{ $route.query.search }}"
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

    async fetch ({ store, query }) {
      const tag = query.tag
      const search = query.search

      return store.dispatch('news/fetchRecentData', 3)
        .then(() => {
          if (tag) {
            return store.dispatch('news/fetchTagData', tag)
          } else if (search) {
            return store.dispatch('news/fetchSearchData', search)
          }
          return store.dispatch('news/fetchData')
        })
    },

    mounted () {
      if (!process.client) return

      this.getPageData()
    },

    computed: {
      news () {
        return this.$store.getters['news/getData']
      }
    },

    methods: {
      getPageData () {
        const tag = this.$route.query.tag
        const search = this.$route.query.search

        return this.$store.dispatch('news/fetchRecentData', 3)
          .then(() => {
            if (tag) {
              return this.$store.dispatch('news/fetchTagData', tag)
            } else if (search) {
              return this.$store.dispatch('news/fetchSearchData', search)
            }
            return this.$store.dispatch('news/fetchData')
          })
      }
    },

    watch: {
      '$route' (to, from) {
        // react to route changes...
        this.getPageData()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/utilities/variables.scss';
  @import '../../node_modules/sass-rem/rem';

  .container {
    padding-top: 60px !important;
    padding-bottom: 60px;
  }

  .no-matches {
    font-size: rem(24px);
    font-weight: 700;
    color: $grey;
    text-align: center;
  }

</style>
