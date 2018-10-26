module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:4000/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dr James Griffith Hall - Swansea Freemasonry',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:400,700,900|Playfair+Display:400,700,900|Satisfy' },
      { rel: 'stylesheet', src: 'animate.css/animate.min.css', lang: 'css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#4BAEE7' },
  /*
  ** Global CSS
  */
  css: [
    'bulma',
    // CSS file in the project
    '@/assets/css/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/vue-progressive-image',
      ssr: false
    },
    {
      src: '~/plugins/vue-scroll-reveal',
      ssr: false
    },
    {
      src: '~/plugins/vue-scroll-to',
      ssr: false
    },
    {
      src: '~/plugins/vue-vee-validate',
      ssr: true
    },
    {
      src: '~/plugins/vue-google-maps',
      ssr: true
    }
  ],
  modules: [
    '@nuxtjs/markdownit',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faChevronDown', 'faChevronUp']
        }
      ]
    }]
  ],

  markdownit: {
    injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    vendors: ['babel-polyfill'],

    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (!isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    }
  }
}

