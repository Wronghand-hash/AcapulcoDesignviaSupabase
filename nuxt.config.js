import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Limited Custom Handmade Merchendise',
    title: 'Acapulco',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Acapulco Design makes handmade custom merchendise',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.ico',
      },
    ],
  },
  bridge: {
    nitro: false,
  },
  target: 'static',
  loading: '~/components/loading.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
    'nuxt-gsap-module',
    ['@nuxtjs/svg'],
    'nuxt-compress',
  ],

  gsap: {
    extraPlugins: {
      // scrollTo: true,
      easel: true,
      scrollTrigger: true,
    },
  },

  modules: [
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    [
      'nuxt-supabase',
      {
        supabaseUrl: 'https://wbdticjizbqlkikhitkt.supabase.co',
        supabaseKey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTYyODgyOSwiZXhwIjoxOTU3MjA0ODI5fQ.skEudlMwoIMGAnVXW18IJMCZj9rbFKcYjG-Fqt0Ke9k',
      },
    ],
    '@nuxtjs/i18n',
    [
      'nuxt-lazy-load',
      {
        // These are the default values
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        directiveOnly: false,
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',
      },
    ],
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
    [
      'nuxt-imagemin',
      {
        optipng: { optimizationLevel: 5 },
        gifsicle: { optimizationLevel: 2 },
      },
    ],
  ],
  // publicRuntimeConfig: {
  //   supabaseUrl:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTYyODgyOSwiZXhwIjoxOTU3MjA0ODI5fQ.skEudlMwoIMGAnVXW18IJMCZj9rbFKcYjG-Fqt0Ke9k',
  //   supabaseKey: 'https://wbdticjizbqlkikhitkt.supabase.co',
  // },
  // supabase: {
  //   supabaseKey: 'https://wbdticjizbqlkikhitkt.supabase.co',
  //   supabaseUrl:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTYyODgyOSwiZXhwIjoxOTU3MjA0ODI5fQ.skEudlMwoIMGAnVXW18IJMCZj9rbFKcYjG-Fqt0Ke9k',
  //   supabaseOptions: {},
  //   auth: {
  //     onAuthStateChangeMutation: 'setUser',
  //     // onAuthStateChangeAction: 'onAuthStateChange'
  //   },
  // },
  i18n: {
    vueI18nLoader: true,
    baseUrl: 'https://acapulcodesign.onrender.com',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
      alwaysRedirect: true,
    },
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'fa',
        iso: 'fa-FA',
      },
      {
        code: 'en',
        iso: 'en-US',
      },
    ],

    build: {
      extend(config, ctx) {
        config.module.rules.push({
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        })
      },
    },
  },
  speedkit: {
    disableNuxtImage: true,

    detection: {
      performance: true,
      browserSupport: true,
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
      lighthouseDetectionByUserAgent: false,
    },

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Components and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%',
    },
  },
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],

    treeShake: true,
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en',
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
})
