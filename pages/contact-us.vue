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
                  form(@submit.prevent="submit")
                    .notification.is-danger(v-if="isSignInError") {{ isSignInError }}
                    .columns
                      .column
                        .field
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
                        .field
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
                        .field
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
                        .field
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
                        .field
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
                        .field
                          label.label Message #[sup *]
                          .control
                            textarea.textarea(
                              name="message"
                              id="message"
                              v-model="formData.message"
                              type="text"
                              data-vv-delay="600"
                              :class="{ 'is-danger': errors.has('message') }"
                              v-validate="'required|message'")
                            p(v-show="errors.has('message')" class="help is-danger" v-html="'Whoops! ' + errors.first('message')")
                    .columns
                      .column
                        .field.is-grouped.is-grouped-right
                          .control
                            button.button.is-primary.is-flip(:class="{ 'is-loading': isLoading }" type="submit")
                              span(data-text="Send message") Send message
            .column.is-4
              | test

</template>

<script>
  import HeaderMain from '@/components/Headers/HeaderMain.vue'
  import { Validator } from 'vee-validate'
  import VueScrollTo from 'vue-scrollto'
  import PhoneNumber from 'awesome-phonenumber'

  const phoneNumber = {
    getMessage: field => `${field} is not a valid phone number`,
    validate (value) {
      return new Promise(resolve => {
        console.log('HERE')
        let phone = new PhoneNumber(value)
        resolve({
          valid: phone.isValid()
        })
      })
    }
  }

  Validator.extend('phoneNumber', phoneNumber)

  export default {
    components: {
      HeaderMain
    },

    async fetch ({ store }) {
      return store.dispatch('contact/fetchData')
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
        isSignInError: false
      }
    },

    mounted () {
      if (!process.client) return

      return this.$store.dispatch('contact/fetchData')
    },

    computed: {
      contact () {
        return this.$store.getters['contact/getData']
      }
    },

    methods: {
      submit () {
        console.log('test here people')
        // Hide errors first
        this.isSignInError = false
        // Validate form first
        this.$validator.validateAll()
          .then(response => {
            if (!response) {
              this.isLoading = false
              VueScrollTo.scrollTo('.is-danger')
              return
            }
            this.isLoading = true
            console.log('response', response)
          })
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
