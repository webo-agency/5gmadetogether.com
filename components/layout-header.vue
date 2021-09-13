<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class="container"
  >
    <nav class="flex flex-wrap items-center justify-between pt-4 tablet:sticky top-0 z-50 bg-white">
      <div class="navbar-menu flex flex-wrap order-1 desktop:order-1 flex-row items-center">
        <span class="block mb-4">{{ generalData.header_text_before }}</span> <img
          v-for="(logo, index) in generalData.header_logo"
          :key="index"
          class="h-auto w-32 mx-4 mb-4 max-w-full"
          :src="`${logo.header_logo_image.sizes['post-thumbnail']}`"
          :title="`${logo.header_logo_image.title}`"
          :alt="`${logo.header_logo_image.alt}`"
          :height="`${logo.header_logo_image.sizes['post-thumbnail-height']}`"
          :width="`${logo.header_logo_image.sizes['post-thumbnail-width']}`"
        >
      </div>
      <div class="navbar-menu block order-4 desktop:order-3 lg:text-right w-full phone:w-auto mb-4 mx-auto phablet:mr-0 tablet:mx-0">
        <a 
          class="inline-block py-4 px-2 phone:px-8 leading-none text-white text-xs phone:text-base bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow my-4 desktop:my-0 w-full phone:w-48 tablet:w-auto text-center w-max-full" 
          :href="generalData.event_url"
        >
          {{ generalData.event_title }}
        </a>
      </div>
    </nav>
  </component>
</template>

<script>
export default {
  name: "LayoutHeader",
  props: {
    mainTag: {
      type: String,
      default: "header",
      required: false
    },
    mainClass: {
      type: String,
      default: "",
      required: false
    },
  },
  computed: {
    generalData() {
      return this.$store.getters['general/getData']
    },
  },
};
</script>

<style lang="postcss" scoped>

</style>
