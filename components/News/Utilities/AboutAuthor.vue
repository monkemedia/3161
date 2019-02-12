<template lang="pug">
   .card
    .card-image
      figure.image.is-16by9
        //- img(:src="data.image.fields.file.url + '?h=360&q=80'" :alt="data.image.fields.title")
    .card-content
      .media
        .media-left
          //- date-tile(:data="data.date")
          //- user-actions
        .media-content
          //- header
          //-   h3 {{ data.summary}}
          //- article
          //-   div(v-html="$md.render(data.description)")
</template>

<script>
  export default {
    props: {
      // data: {
      //   type: String,
      //   required: true
      // }
    },

    data () {
      return {
        date: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  // @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

</style>
