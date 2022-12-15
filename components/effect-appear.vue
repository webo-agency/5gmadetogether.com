<template>
  <div>
    <div
      v-if="secondEffect"
      ref="container"
      class="second-effect transition duration-700"
      :class="{ 'opacity-0 -translate-y-4': !visited }"
      :style="{ 'transition-delay': delay + 'ms' }"
    >
      <slot></slot>
    </div>
    <div
      v-else
      ref="container"
      class="first-effect transition duration-700"
      :class="{ 'opacity-0 translate-y-2.5': !visited }"
      :style="{ 'transition-delay': delay + 'ms' }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/composition-api";
import { useElementBounding, useWindowSize } from "@vueuse/core";

export default {
  name: "EffectAppear",
  props: {
    delay: {
      type: Number,
      default: 0
    },
    secondEffect: Boolean
  },
  setup() {
    const container = ref(null);
    const {
      x,
      y,
      top,
      right,
      bottom,
      left,
      width,
      height
    } = useElementBounding(container);
    const windowHeight = useWindowSize().height;
    const isVisible = computed(() => {
      return y.value < windowHeight.value - height.value * 0.25;
    });
    return {
      container,
      y,
      height,
      windowHeight,
      isVisible
    };
  },
  data() {
    return {
      visited: false
    };
  },
  watch: {
    isVisible(value) {
      if (value) {
        this.visited = true;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.checkAfterMount();
    });
  },
  methods: {
    checkAfterMount() {
      if (this.y < this.windowHeight) {
        this.visited = true;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@media only screen and (max-width: 767px) {
  .desktop-delay >>> {
    @apply !delay-[0s];
  }
}
</style>
