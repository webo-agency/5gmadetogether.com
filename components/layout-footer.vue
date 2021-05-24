<template>
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <cta-block />

    <section class="relative py-8 px-4 text-center desktop:mx-16 bg-gray-100 rounded-b">
      <div class="container flex flex-wrap justify-around">
        <div
          v-for="entry in generalData.footer_contact"
          :key="entry.person.footer_contact_email_link"
          class="my-2"
        >
          <strong>{{ entry.person.footer_contact_email_title }} </strong> <a :href="'mailto:' + entry.person.footer_contact_email_link">{{ entry.person.footer_contact_email_link_title }}</a>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-between justify-between p-4">
        <div class="text-xs w-auto lg:w-auto lg:mr-6 text-center">
          {{ generalData.copyright | insertActualDate }}
        </div>
        <div class="flex text-xs">
          <nuxt-link class="uppercase" to="/license">License</nuxt-link>
          <span class="block mx-2">|</span>
          <nuxt-link class="uppercase" to="/privacy-policy">Privacy Policy</nuxt-link>
        </div>
      </div>
    </div>
  </component>
</template>
<script>
  export default {
    name: "LayoutFooter",
    filters: {
      insertActualDate: function (value) {
        if (!value) return ''
        return value.replace(/%s/g, new Date().getFullYear() < 2022 ? '2021' : '2021 ~ ' + new Date().getFullYear());
      }
    },
    props: {
      mainTag: {
        type: String,
        default: "footer",
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