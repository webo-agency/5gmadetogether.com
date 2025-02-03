import { join } from 'path'

export default {
  publicPath: '/static/',
  extractCSS: false,
  cssSourceMap: false,
  standalone: true,
  babel: {
    plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
  },
  extend(config) {
    config.externals = [
      {
        encoding: 'encoding',
      },
    ]

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })
  },
  postcss: {
    plugins: {
      tailwindcss: join(__dirname, '..', 'tailwind.config.js'),
      'postcss-import': {},
      'postcss-url': {},
      'postcss-nested': {},
      'postcss-responsive-type': {},
      'postcss-preset-env': {},
      cssnano: { preset: 'default' },
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
      removeComments: true,
    },
  },
  terser: {
    parallel: true,
    cache: false,
    sourceMap: false,
    extractComments: false,
  },
}
