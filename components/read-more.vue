<template>
  <component :is="mainTag" :class="mainClass" class="relative overflow-hidden">
    <div class="w-full" :class="open ? 'h-auto' : 'h-32'">
      <slot />
      <div
        v-show="open"
        class="uppercase text-xs mt-2 cursor-pointer text-highlight"
        @click="open = !open"
      >
        Hide
      </div>
    </div>
    <div
      class="more-show absolute h-32 top-auto w-full z-10 flex items-end justify-center bottom-0 text-xs uppercase pb-1 cursor-pointer text-highlight"
      :class="open ? 'hidden' : ''"
      @click="open = !open"
    >
      Read more
    </div>
  </component>
</template>
<script>
export default {
  name: 'CTABlock',
  props: {
    mainTag: {
      type: String,
      default: 'section',
      required: false,
    },
    mainClass: {
      type: String,
      default: '',
      required: false,
    },
  },
  data: function () {
    return {
      open: false,
    }
  },
}
</script>

<style lang="postcss">
.more-show:before {
  content: '';
  @apply absolute;
  @apply uppercase;
  @apply cursor-pointer;
  background-image: linear-gradient(
    theme('colors.transparent'),
    theme('colors.gray.100') 80%,
    theme('colors.gray.100')
  );
  font-size: 12px;
  @apply bottom-0;
  @apply w-full;
  @apply h-full;
  z-index: -1;
}
</style>
