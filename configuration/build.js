import { join } from 'path'

export default {
  extractCSS: true,
  cssSourceMap: false,
  publicPath: "/static/",
  babel: {
    plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
  },
  
  /*
    ** Run ESLINT on save
    */
  extend(config, { isDev , isClient }) {
  //   if (isClient && isDev) {
  //     config.devtool = 'inline-source-map';
  //   } else {
  //     config.devtool = false;
  //   }

  //   config.node = {
  //     fs: "empty"
  //   };

  //   if (isClient && !isDev) {
  //     config.optimization.splitChunks.maxSize = 250000
  //   }

  //   if (isDev) {
  //     config.module.rules.push({
  //       enforce: "pre",
  //       test: /\.(js|vue)$/,
  //       loader: "eslint-loader",
  //       exclude: /(node_modules)/
  //     });
  //   }

  //   config.module.rules.push({
  //     test: /\.(postcss)$/,
  //     use: [
  //       'css-loader',
  //       {
  //         loader: 'postcss-loader'
  //       }
  //     ]
  //   });

  //   // if (isDev) {
  //   //   config.devtool = isClient ? "eval-source-map" : "inline-source-map";
  //   // }

  //   const vueRule = config.module.rules.find(rule => rule.test.test(".vue"));
  //   vueRule.use = [
  //     {
  //       loader: vueRule.loader,
  //       options: vueRule.options
  //     },
  //     {
  //       loader: "vue-svg-inline-loader",
  //       options: {
  //         /* ... */
  //       }
  //     }
  //   ];
  //   delete vueRule.loader;
  //   delete vueRule.options;
  },
  postcss: {
    plugins: {
      tailwindcss: join(__dirname, '..', 'tailwind.config.js'),
      'postcss-import': {},
      'postcss-url': {},
      'postcss-nested': {},
      'postcss-responsive-type': {},
      'postcss-preset-env': {},
      'cssnano': { preset: 'default' }
    },
  },
  html: {
    minify: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true,
      removeComments: true
    }
  },
  terser: {
    parallel: true,
    cache: false,
    sourceMap: false,
    extractComments: {
      filename: 'LICENSES',
      banner: () => {
        return false;
      },
    },
    terserOptions: { 
      output: {
        comments: /^\**!|@preserve|@license|@cc_on/,
      }
    }
  }
}