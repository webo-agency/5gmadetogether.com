import { join } from 'path'

export default {
  extractCSS: true,
  cssSourceMap: false,
  babel: {
    plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
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