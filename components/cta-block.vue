<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class="relative py-24 px-4 text-center desktop:mx-16"
  >
    <div class="container relative w-full mx-auto z-50">
      <h2 class="text-white text-5xl leading-tight font-semibold font-heading mb-4">
        {{ generalData.cta_title }}
      </h2>
      <a
        class="text-white uppercase inline-block py-4 px-8 leading-none bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow"
        :href="generalData.event_url"
      >{{ generalData.cta_button.cta_button_title }}</a>
    </div>

    <div class="absolute desktop:rounded-t w-full h-full inset-0 z-0 bg-blue-200">
      <picture>
        <source
          :srcSet="generalData.cta_background.url"
          type="image/jpeg"
        >
        <img 
          class="absolute desktop:rounded-t w-full h-full inset-0 z-auto object-cover" 
          :src="generalData.cta_background.url" 
          :alt="generalData.cta_background.alt"
          :title="generalData.cta_background.title"
          :width="generalData.cta_background.width"
          :height="generalData.cta_background.height"
        >
      </picture>
    </div>
  </component>
</template>
<script>
  export default {
    name: "CTABlock",
    props: {
      mainTag: {
        type: String,
        default: "section",
        required: false
      },
      mainClass: {
        type: String,
        default: "",
        required: false
      }
    },
    computed: {
      generalData() {
        return this.$store.getters['general/getData']
      },
    },
  };
</script>

<style lang="postcss">

</style>