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
    src: "@aceforth/nuxt-netlify",
    options: {
      mergeSecurityHeaders: true,
      headers: {
        '/static/*': [
          'Cache-Control: public, max-age=31557600',
        ],
        '/static/*.css': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/*.js': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/img/*': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/img/*.gif': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/img/*.png': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/img/*.jpg': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/img/*.jpeg': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/img/*.svg': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/fonts/*': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/fonts/*.webp': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/fonts/*.woff': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/fonts/*.woff2': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/fonts/*.eot': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/fonts/*.ttf': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/static/fonts/*.otf': [
          'Cache-Control: public, max-age=31557600'
        ],
        '/favicon.ico': [
          'Cache-Control: public, max-age=604800'
        ]
      }
    }
  },
  {
    src: "nuxt-netlify-http2-server-push",
    options: {
      resources: [
        { path: 'favicon.ico', as: 'image', crossorigin: 'anonymous' },
        { path: 'static/*.js', as: 'script', crossorigin: 'anonymous' },
        { path: 'static/*.css', as: 'style', crossorigin: 'anonymous' },
        { path: 'static/images/img/*.gif', as: 'image', crossorigin: 'anonymous' },
        { path: 'static/fonts/*.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
        { path: 'static/fonts/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      ]
    }
  },
  {
    src: '@nuxtjs/tailwindcss',
    options: {
      jit: true
    }
  },
  { 
    src: '@nuxtjs/markdownit',
    options:  {
      preset: 'default',
      linkify: true,
      breaks: true,
      injected: true,
      html: true
    }
  },
  { 
    src: '@aceforth/nuxt-optimized-images',
    options:  {
      inlineImageLimit: -1,
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
      optimizeImages: true,
      optimizeImagesInDev: false,
      defaultImageLoader: 'img-loader',
      mozjpeg: {
        quality: 85
      },
      optipng: false,
      pngquant: {
        speed: 7,
        quality: [0.65, 0.8]
      },
      webp: {
        quality: 85
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