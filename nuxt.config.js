export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr:false,
  target: 'server',
  head: {
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins:[
  ], 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  //server-middleware
  serverMiddleware: [
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-compress',
  ],
//https://www.npmjs.com/package/nuxt-compress
'nuxt-compress': {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  'nuxt-ssr-cache'
  ],
 
  //https://www.npmjs.com/package/nuxt-ssr-cache
  cache: {
   useHostPrefix: false,
    pages: [
        /^\/$/
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  babel: {
  }
  },
}
