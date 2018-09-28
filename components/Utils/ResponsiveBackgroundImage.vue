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

        this.$emit('style', lowQualityImage)

        console.log('MONKEY')

        img.onload = () => {
          console.log('image loaded')
          this.$emit('style', highQualityImage)
          this.$emit('blurValue')
        }

        img.src = highQualityImage

        // if (img.complete) img.onload()
      }
    }
  }
</script>

<style scoped>
  img {
    display: none;
  }

</style>
