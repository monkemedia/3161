<template lang="pug">
  .slot-wrapper
    slot
</template>

<script>
  export default {
    name: 'ResponsiveBackgroundImg',

    data () {
      return {
      }
    },

    mounted () {
      this.setCurrentSrc()
    },

    methods: {
      setCurrentSrc () {
        const lowQualityImage = this.$el.childNodes[0].src
        const highQualityImage = this.$el.childNodes[1].currentSrc
        let img = new Image()

        img.src = highQualityImage

        this.$emit('style', lowQualityImage)

        img.onload = () => {
          console.log('HIGH')
          this.$emit('style', highQualityImage)
          this.$emit('blurValue')
        }
      }
    }
  }
</script>

<style scoped>
  img {
    display: none;
  }

</style>
