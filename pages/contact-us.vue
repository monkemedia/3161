<template lang="pug">
  div#top
    header-main(:data="contact")
    .main
      .container.sub-main
        .columns
          .column.is-8
            .columns
              .column
                h2.title {{ contact.title }}
                p {{ contact.description }}
            .columns
              .column
                contact-form(:data="contact")
          .column.is-4
            span(v-html="$md.render(meta.address)")
    footer-main
</template>

<script>
  import HeaderMain from '@/components/Headers/HeaderMain.vue'
  import ContactForm from '@/components/Contact/ContactForm.vue'
  import FooterMain from '@/components/Footers/FooterMain.vue'

  export default {
    components: {
      HeaderMain,
      ContactForm,
      FooterMain
    },

    async fetch ({ store }) {
      return store.dispatch('contact/fetchData')
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('contact/fetchData')
    },

    computed: {
      contact () {
        return this.$store.getters['contact/getData']
      },

      meta () {
        return this.$store.getters['meta/getData']
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
