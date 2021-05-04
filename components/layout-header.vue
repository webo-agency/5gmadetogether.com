<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class="container mx-auto px-4"
  >
    <nav class="flex flex-wrap items-center justify-between py-4 md:sticky top-0 z-50 bg-white">
      <div class="navbar-menu flex flex-wrap order-1 lg:order-1 flex-row items-center">
        Organizer <img class="h-12 mx-4" src="~/assets/img/ISW_-_logo_kolor.png?inline" alt="">

        <!-- <img class="hidden h-12 mx-4" src="~/assets/img/CP_logo_kolor_3.png" alt=""> -->
        <!-- <img class="hidden h-12 mx-4" src="~/assets/img/PTI.png" alt=""> -->

      </div>
      <div class="navbar-menu block order-4 lg:order-3 lg:text-right">
        <a 
          class="inline-block text-gray-400 leading-none text-white underscore font-semibold mx-8 my-4 lg:my-0 underline" 
          v-scroll-to="'#agenda'" href="#agenda"
        >
          Agenda
        </a>
        <a 
          class="inline-block py-4 px-8 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow my-4 lg:my-0" 
          href="https://www.tickettailor.com/events/iswireless/518782"
        >
          Register
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
      default: "",
      required: false
    },
    mainClass: {
      type: String,
      default: "",
      required: false
    },
  },
};
</script>

<style lang="postcss" scoped>

</style>
