require('dotenv').config();

export default [
  {
    src: '@nuxtjs/dotenv', 
    options:  { 
      only: [
        'API_URL',
        'API_AFFIX',
        'CONTEXT'
      ]
    },
  },
  {
    src: "@nuxtjs/axios",
    // options: {}
  },
  {
    src: "nuxt-compress",
    options: {
      gzip: {
        cache: true
      },
      brotli: {
        threshold: 10240
      }
    }
  },
  {
    src: "@nuxtjs/pwa",
    options: {
      workbox: {},
      manifest: {
        display: 'browser'
      },
      // iconSrc: "~/assets/symbol.png",
      icon: {
        sizes: [512, 192, 380]
      },
    }
  },
  {
    src: '@nuxtjs/tailwindcss',
    options: {
      jit: false
    }
  },
  { 
    src: '@aceforth/nuxt-optimized-images',
    options:  {
      inlineImageLimit: 1000,
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
      optimizeImages: true,
      optimizeImagesInDev: false,
      defaultImageLoader: 'img-loader',
      mozjpeg: {
        quality: 70
      },
      optipng: false,
      pngquant: {
        speed: 7,
        quality: [0.65, 0.8]
      },
      webp: {
        quality: 70
      }
    }
  },
  {
    src: 'wp-nuxt', 
    options:  {
      discover: false,
      endpoint: `${process.env.API_URL}${process.env.API_AFFIX}`
    },
  },
  {
    src: 'vue-scrollto/nuxt', 
    options:  {
      duration: 300 
    },
  },
  {
    src: 'nuxt-spa-store-init'
  }
]