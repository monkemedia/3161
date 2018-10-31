<template lang="pug">
  div#top
    header-main(:data="contact")
    .main
      section
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

</template>

<script>
  import HeaderMain from '@/components/Headers/HeaderMain.vue'
  import ContactForm from '@/components/Contact/ContactForm.vue'

  export default {
    components: {
      HeaderMain,
      ContactForm
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
