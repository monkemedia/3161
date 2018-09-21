<template lang="pug">
  .slot-wrapper
    slot
</template>

<script>
  export default {
    name: 'ResponsiveBackgroundImg',

    props: {

    },

    data () {
      return {
      }
    },

    mounted () {
      this.setCurrentSrc()
    },

    methods: {
      setCurrentSrc (value) {
        const img = this.$el.childNodes[0]
        this.$emit('style', img.currentSrc)
      }
    }
  }
</script>

<style scoped>
  img {
    display: none;
  }

</style>
