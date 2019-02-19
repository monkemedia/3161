require('dotenv').config()

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL,
    restDbUrl: process.env.REST_DB_URL,
    restDbApiKey: process.env.REST_DB_API_KEY
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dr James Griffith Hall Lodge - Swansea Freemasonry',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Established back in 1918, Dr James Griffith Hall Lodge' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:400,700,900|Satisfy|Montserrat:400,600,700,800' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' },
      { rel: 'stylesheet', src: 'animate.css/animate.min.css', lang: 'css' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#4baee7' }
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
    // CSS file in the project
    '@/assets/css/main.scss'
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
      src: '~/plugins/vue-lazy-load',
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
    },
    {
      src: '~/plugins/vue-disqus',
      ssr: false
    },
    {
      src: '~/plugins/vue-disqus-count',
      ssr: false
    }
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
    '@nuxtjs/markdownit',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faChevronDown', 'faChevronUp', 'faAngleRight', 'faCaretDown']
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

