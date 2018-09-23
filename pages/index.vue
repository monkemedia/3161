<template lang="pug">
  div
    hero(:homepage="homepage")
    .container
      .columns
        .column.is-4
          .featured-items
            .card
              .card-image
                figure.image.is-4by3
                  img(src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image")
              .card-content
                .card-content__inner
                  .media
                    .media-left
                      figure.image.is-48x48
                        img(src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image")
                    .media-content
                      p.title.is-4 John Smith
                      p.subtitle.is-6 @johnsmith

                  .content
                    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        .column.is-4
          .card
            .card-image
              figure.image.is-4by3
                img(src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image")
            .card-content
              .media
                .media-left
                  figure.image.is-48x48
                    img(src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image")
                .media-content
                  p.title.is-4 John Smith
                  p.subtitle.is-6 @johnsmith

              .content
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        .column.is-4
          .card
            .card-image
              figure.image.is-4by3
                img(src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image")
            .card-content
              .media
                .media-left
                  figure.image.is-48x48
                    img(src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image")
                .media-content
                  p.title.is-4 John Smith
                  p.subtitle.is-6 @johnsmith

              .content
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
</template>

<script>
  import Hero from '@/components/Hero'

  export default {
    components: {
      Hero
    },

    async fetch ({ store }) {
      return store.dispatch('homepage/fetchData')
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('homepage/fetchData')
    },

    computed: {
      homepage () {
        console.log('test', this.$store.getters['homepage/getData'])
        return this.$store.getters['homepage/getData']
      }
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/sass-rem/rem';
  @import '../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';

  .featured-items {
    .card {
      background-color: transparent;
      box-shadow: none;

      .card-content {
        margin-top: -20px;
        padding: 0;
        position: relative;

        .card-content__inner {
          margin: 0 1.5rem;
          padding: 1.5rem;
          background-color: $white;
        }
      }
    }
  }

</style>
