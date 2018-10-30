<template lang="pug">
  div
    .success-container.is-success(v-if="isSuccess")
      h3.title Your message has been sent!
      p {{ formData.first_name }} we will contact you as soon as possible.
    form(@submit.prevent="submit" v-else)
      .notification.is-danger.is-error.has-text-centered(v-if="isSignInError") {{ isSignInError }}
      .columns
        .column
          .field(:class="{ 'is-error': errors.has('reason') }")
            label.label Select a reason for your message #[sup *]
            .control.is-expanded
              .select.is-fullwidth.is-multiple
                .select-icon
                  fa.icon(:icon="['fas', 'caret-down']")
                select(
                name="reason"
                id="reason"
                v-model="formData.reason"
                data-vv-delay="600"
                :class="{ 'is-danger': errors.has('reason') }"
                v-validate="'required'")
                  option(disabled value="") Select a reason for your message
                  option(v-for="reason in reasons" :value="reason.code") {{ reason.label }}
              p(v-show="errors.has('reason')" class="help is-danger" v-html="'Whoops! ' + errors.first('reason')")
      .columns
        .column.is-6
          .field(:class="{ 'is-error': errors.has('firstName') }")
            label.label First name #[sup *]
            .control
              input.input(
                name="firstName"
                id="firstName"
                v-model="formData.first_name"
                type="text"
                data-vv-delay="600"
                :class="{ 'is-danger': errors.has('firstName') }"
                v-validate="'required'")
              p(v-show="errors.has('firstName')" class="help is-danger" v-html=" 'Whoops! ' + errors.first('firstName')")
        .column.is-6
          .field(:class="{ 'is-error': errors.has('lastName') }")
            label.label Last name #[sup *]
            .control
              input.input(
                name="lastName"
                id="lastName"
                v-model="formData.last_name"
                type="text"
                data-vv-delay="600"
                :class="{ 'is-danger': errors.has('lastName') }"
                v-validate="'required'")
              p(v-show="errors.has('lastName')" class="help is-danger" v-html="'Whoops! ' +  errors.first('lastName')")
      .columns
        .column.is-6
          .field(:class="{ 'is-error': errors.has('email') }")
            label.label Email #[sup *]
            .control
              input.input(
                name="email"
                id="email"
                v-model="formData.email"
                type="email"
                data-vv-delay="600"
                :class="{ 'is-danger': errors.has('email') }"
                v-validate="'required|email'")
              p(v-show="errors.has('email')" class="help is-danger" v-html="'Whoops! ' + errors.first('email')")
        .column.is-6
          .field(:class="{ 'is-error': errors.has('phoneNumber') }")
            label.label Phone number
            .control
              input.input(
                name="phoneNumber"
                id="phoneNumber"
                v-model="formData.phone_number"
                type="telephone"
                data-vv-delay="600"
                :class="{ 'is-danger': errors.has('phoneNumber') }"
                v-validate="'phoneNumber'")
              p(v-show="errors.has('phoneNumber')" class="help is-danger" v-html="'Whoops! ' + errors.first('phoneNumber')")
      .columns
        .column
          .field(:class="{ 'is-error': errors.has('message') }")
            label.label Message #[sup *]
            .control
              textarea.textarea(
                name="message"
                id="message"
                v-model="formData.message"
                type="text"
                data-vv-delay="600"
                :class="{ 'is-danger': errors.has('message') }"
                v-validate="'required'")
              p(v-show="errors.has('message')" class="help is-danger" v-html="'Whoops! ' + errors.first('message')")
      .columns
        .column
          .field.is-grouped.is-grouped-right
            button.button.is-primary.is-flip(:class="{ 'is-loading': isLoading }" type="submit")
              span(data-text="Send message") Send message
</template>

<script>
  import { Validator } from 'vee-validate'
  import VueScrollTo from 'vue-scrollto'
  import PhoneNumber from 'awesome-phonenumber'
  import api from '~/api'

  const phoneNumber = {
    getMessage: field => `${field} is not a valid phone number`,
    validate (value) {
      return new Promise(resolve => {
        let phone = new PhoneNumber(value, 'GB')
        resolve({
          valid: phone.isValid()
        })
      })
    }
  }

  Validator.extend('phoneNumber', phoneNumber)

  export default {
    name: 'FooterMain',

    props: {
      data: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        formData: {
          reason: '',
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          message: ''
        },
        reasons: [
          {
            label: 'Interested in joining masonry',
            code: 'one'
          },
          {
            label: 'Interested in joining Dr JG Hall Lodge',
            code: 'two'
          }
        ],
        isLoading: false,
        isSuccess: false,
        isSignInError: false
      }
    },

    methods: {
      error (err) {
        this.isSignInError = err.message
        this.isLoading = false
        setTimeout(() => {
          VueScrollTo.scrollTo('.is-error', { offset: -90 })
        }, 50)
      },

      submit () {
        // Hide errors first
        this.isSignInError = false
        // Validate form first
        this.$validator.validateAll()
          .then(response => {
            if (!response) {
              this.error({
                error: response
              })
              return
            }
            this.isLoading = true

            return api.contactForm.postData(this.formData)
              .then(res => {
                this.isLoading = false
                if (res.status === 200) {
                  this.isSuccess = true
                  setTimeout(() => {
                    VueScrollTo.scrollTo('.is-success', { offset: -90 })
                  }, 50)
                  return
                }

                this.error({
                  message: 'Something went wrong'
                })
              })
              .catch(err => {
                this.error(err.response.data)
              })
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../node_modules/sass-rem/rem';
  @import '../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .success-container {
    background: $grey-300;
    text-align: center;
    padding: 50px;

    .title {
      font-size: rem(22px);
      @include ExtraBoldUppercase();
    }

    p {
      font-size: rem(13px);
    }
  }
</style>
