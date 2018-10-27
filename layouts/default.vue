<template lang="pug">
  div
    SideBar
    nuxt
</template>

<script>
  import SideBar from '@/components/Navigation/SideBar'

  export default {
    name: 'DefaultLayout',

    components: {
      SideBar
    }
  }
</script>

<style lang="scss">

</style>
