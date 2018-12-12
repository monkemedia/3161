export default {
  head () {
    return {
      title: this.pageMeta.title,
      meta: [{
        name: 'description',
        content: this.pageMeta.description
      }]
    }
  }
}
