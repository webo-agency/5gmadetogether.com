<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class="container mx-auto px-4"
  >
    <div class="container mx-auto px-4">
      <footer class="flex flex-wrap items-center justify-between p-4">
        <div class="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">
          © {{ this.copyrightDate }} IS-Wireless
        </div>
      </footer>
    </div>
  </component>
</template>
<script>
  export default {
    name: "LayoutFooter",
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
      }
    },
    data: function() {
      return {
        emoji: '_(^.^)_',
        copyrightDate: `© ${ new Date().getFullYear() < 2022 ? '2021' : '2021 ~ ' + new Date().getFullYear() }`
      };
    },
  };
</script>

<style lang="postcss">
</style>