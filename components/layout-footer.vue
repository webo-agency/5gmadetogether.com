<template>
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <cta-block />

    <section class="relative py-8 px-4 text-center desktop:mx-16 bg-gray-100 rounded-b">
      <div class="container flex flex-wrap justify-around">

        <div class="my-2" v-for="entry in generalData.footer_contact" :key="entry.person.footer_contact_email_link">
          <strong>{{ entry.person.footer_contact_email_title }} </strong> <a :href="'mailto:' + entry.person.footer_contact_email_link">{{ entry.person.footer_contact_email_link_title }}</a>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center justify-between p-4">
        <div class="text-xs w-full lg:w-auto lg:mr-6 text-center">
          {{ generalData.copyright | insertActualDate }}
        </div>
      </div>
    </div>
  </component>
</template>
<script>
  export default {
    name: "LayoutFooter",
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
    filters: {
      insertActualDate: function (value) {
        if (!value) return ''
        return value.replace(/%s/g, new Date().getFullYear() < 2022 ? '2021' : '2021 ~ ' + new Date().getFullYear());
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