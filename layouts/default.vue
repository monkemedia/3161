<template lang="pug">
  div
    header-main
    .main
      nuxt
</template>

<script>
  import headerMain from '@/components/Headers/HeaderMain'

  export default {
    name: 'DefaultLayout',

    components: {
      headerMain
    }
  }
</script>

<style lang="scss">

</style>
