module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:tailwind/recommended"
  ],
  plugins: [
    "vue"
  ],
  rules: {
    "vue/no-v-html": "off"
  }
}
