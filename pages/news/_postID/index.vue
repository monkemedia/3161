<template lang="pug">
  div#top
    header-news(:image="post.fields.image.fields" :title="post.fields.title")
    .main
      .container.sub-main
        .columns
          .column.is-8
            news-item(:data="post.fields")
            about-author
          .column.is-4
            side-bar
    footer-main
</template>

<script>
  import HeaderNews from '@/components/Headers/HeaderNews.vue'
  import NewsItem from '@/components/News/NewsItem.vue'
  import AboutAuthor from '@/components/News/Utilities/AboutAuthor.vue'
  import SideBar from '@/components/News/Utilities/SideBar.vue'
  import FooterMain from '@/components/Footers/FooterMain.vue'

  export default {
    components: {
      HeaderNews,
      NewsItem,
      AboutAuthor,
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

    async fetch ({ store, params }) {
      return store.dispatch('news/fetchRecentData', 3)
        .then(() => {
          return store.dispatch('newsPost/fetchData', params.postId)
        })
        .then(response => {
          const userId = response.fields.author

          return store.dispatch('author/fetchData', userId)
        })
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('news/fetchRecentData', 3)
        .then(() => {
          return this.$store.dispatch('newsPost/fetchData', this.$route.params.postId)
        })
        .then(response => {
          const userId = response.fields.author

          return this.$store.dispatch('author/fetchData', userId)
        })
    },

    computed: {
      post () {
        return this.$store.getters['newsPost/getData']
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
