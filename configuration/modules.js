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
    src:  'nuxt-rfg-icon', 
    options: { 
      rfg: {
        "design": {
          "ios": {
            "pictureAspect": "backgroundAndMargin",
            "backgroundColor": "#ffffff",
            "margin": "28%",
            "assets": {
              "ios6AndPriorIcons": true,
              "ios7AndLaterIcons": true,
              "precomposedIcons": true,
              "declareOnlyDefaultIcon": true
            },
            "appName": "5GMadeTogether"
          },
          "desktopBrowser": {
            "design": "background",
            "backgroundColor": "#ffffff",
            "backgroundRadius": 0.45,
            "imageScale": 0.8
          },
          "windows": {
            "pictureAspect": "whiteSilhouette",
            "backgroundColor": "#223168",
            "onConflict": "override",
            "assets": {
              "windows80Ie10Tile": true,
              "windows10Ie11EdgeTiles": {
                "small": true,
                "medium": true,
                "big": true,
                "rectangle": true
              }
            },
            "appName": "5GMadeTogether"
          },
          "androidChrome": {
            "pictureAspect": "backgroundAndMargin",
            "margin": "25%",
            "backgroundColor": "#ffffff",
            "themeColor": "#ffffff",
            "manifest": {
              "name": "5GMadeTogether",
              "display": "minimal-ui",
              "orientation": "notSet",
              "onConflict": "override",
              "declared": true
            },
            "assets": {
              "legacyIcon": false,
              "lowResolutionIcons": false
            }
          },
          "safariPinnedTab": {
            "pictureAspect": "blackAndWhite",
            "threshold": 26.875,
            "themeColor": "#223168"
          }
        },
        "settings": {
          "compression": 2,
          "scalingAlgorithm": "Lanczos",
          "errorOnImageTooSmall": false,
          "readmeFile": false,
          "htmlCodeFile": false,
          "usePathAsIs": false
        }
      }
    }
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
        display: 'minimal-ui'
      },
      icon: {
        source: "~/assets/symbol.png",
        sizes: [512, 192, 380]
      },
    }
  },
  {
    src: '@nuxtjs/gtm',
    options: {}
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
    src: 'nuxt-magpie',
    options: {
      baseUrl: process.env.API_URL,
      path: '/_images',
      extensions: ['jpg', 'jpeg', 'gif', 'png', 'webp', 'svg'],
    }
  },
  {
    src: 'wp-nuxt', 
    options:  {
      discover: true,
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