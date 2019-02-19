<template lang="pug">
  ul.user-actions
    li
      span.icon
        i.fas.fa-comments
      nuxt-link(:to="'/news/' + data.likes.postId + '#disqus_thread'")
        vue-disqus-count(:identifier="data.likes.postId")
    li
      button(@click="updateLike()" :class="{ 'is-liked' : isLiked, 'is-disabled': isSaving }")
        span.icon
          i.fas.fa-heart
        | {{ postLikes }} Likes
    //- li
    //-   span.icon
    //-     i.fas.fa-eye
    //-   | 3 Views
</template>

<script>
  import api from '~/api'

  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        isLiked: false,
        isSaving: false,
        postLikes: this.data.likes.postLikes
      }
    },

    mounted () {
      this.getLikesFromStorage()
    },

    methods: {
      getLikesFromStorage () {
        const postId = this.data.likes.postId
        const isLikedStorage = JSON.parse(localStorage.getItem('is_liked'))

        if (isLikedStorage) {
          isLikedStorage.map((like) => {
            console.log(like)
            if (postId === like) {
              this.isLiked = true
            } else {
              this.isLiked = false
            }
          })
        }
      },

      updateLike () {
        const postId = this.data.likes.postId
        const likesId = this.data.likes._id
        const isLikedStorage = JSON.parse(localStorage.getItem('is_liked'))
        const payload = {
          postId,
          likesId,
          postLikes: this.isLiked ? -1 : 1
        }

        this.isSaving = true

        if (this.isLiked) {
          // remove postId reference from array
          const index = isLikedStorage.indexOf(postId)
          isLikedStorage.splice(index, 1)
          localStorage.setItem('is_liked', JSON.stringify(isLikedStorage))
          this.isLiked = false
          this.postLikes -= 1
          api.restDb.updateData(payload)
            .catch(err => {
              console.log(err)
            })
        } else {
          if (isLikedStorage) {
            isLikedStorage.push(postId)
            localStorage.setItem('is_liked', JSON.stringify(isLikedStorage))
            this.isLiked = true
          } else {
            localStorage.setItem('is_liked', JSON.stringify([postId]))
            this.isLiked = true
          }
          this.postLikes += 1
          api.restDb.updateData(payload)
            .catch(err => {
              console.log(err)
            })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  // @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .user-actions {
    font-size: rem(11px);
    margin-top: 20px;
    color: $body-color;
    font-weight: 600;
    text-transform: uppercase;

    button {
      padding: 0;
      border: 0;
      background: transparent;
      font-size: rem(11px);
      color: $body-color;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
    }

    a {
      color: $body-color;
    }

    .icon {
      color: $primary;
    }

    .is-liked {
      .fas {
        color: $red;
      }
    }
  }

</style>
