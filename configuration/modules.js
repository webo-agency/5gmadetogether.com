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
    src: "cookie-universal-nuxt",
    // options: { alias: process.env.NAME }
  },
  {
    src: '@nuxtjs/toast',
    options: {
      position: 'bottom-right',
      register: [ // Register custom toasts
        {
          name: 'gdpr',
          message: '<span class="w-full mb-2 leading-tight text-xs">This website uses cookies to improve your experience. <br/> We\'ll assume you\'re ok with this, but you can opt-out if you wish.</span>',
          options: {
            type: '',
            theme: '',
            containerClass: 'gdpr',
            className: 'gdpr-inner',
            fitToScreen: true,
            position: 'bottom-right',
            singleton: true,
            action : [
              {
                  text : 'Read more',
                  href : '/privacy-policy',
              },
              {
                text : 'Accept',
                class: 'uppercase inline-block py-2 px-4 leading-none bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow',
                onClick : (e, toastObject) => {
                    this.$cookies.set('gdpr', {
                      path: '/',
                      maxAge: 60 * 60 * 24 * 7
                    });
                    toastObject.goAway(0);
                }
              },
            ]
          },
        }
      ]
    }
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
    src: '@nuxtjs/robots',
    options:  {
      UserAgent: '*',
      Allow: '/',
      Sitemap: `${process.env.DOMAIN}/sitemap.xml`
    }
  },
  {
    src: '@nuxtjs/sitemap',
    options:  {
      hostname: `${process.env.DOMAIN}`,
      filter({ routes }) {
          return routes.map(route => {
              // object containing [routeName]: [priority] pairs
              const priorities = {
                  index: 1,
                  about: 0.6,
              }
              
              // assign priority by route name or default (.5)
              return { 
                ...route, 
                priority: priorities[route.name] || 0.5,
                lastmod: new Date()
              }
          })
      },
      gzip: true
    }
  },
  { 
    src: 'nuxt-magpie',
    options: {
      baseUrl: `${process.env.API_URL}/wp-content`,
      path: '/files',
      extensions: ['jpg', 'jpeg', 'gif', 'png', 'webp', 'svg', 'xml'],
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