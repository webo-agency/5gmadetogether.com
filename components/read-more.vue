<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class="relative overflow-hidden"
  >
    <div 
      class="h-24 w-full"
      :class="open ? 'h-auto' : 'h-24'"
    >
      <slot></slot>
      <div 
        v-show="open"
        class="underline"
        v-on:click="open = !open"
      >Hide</div>
    </div>
    <div 
      class="more-show top-auto w-full z-10 flex items-end justify-center bottom-0 text-xs uppercase pb-1"
      :class="open ? 'hidden' : 'absolute h-24'" 
      v-on:click="open = !open"
    >Read more</div>
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
    data: function() {
      return {
        open: false
      }
    },
  };
</script>

<style lang="postcss">
  .more-show:before{
      content: '';
      @apply absolute;
      @apply uppercase;
      @apply cursor-pointer;
      background: rgb(229, 231, 235);
      box-shadow: 0 0 9px 9px rgb(229 231 235);
      font-size: 12px;
      width: 90%;
      bottom: 0;
      height: 25px;
      z-index: -1;
  }
</style>