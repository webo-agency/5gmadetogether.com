<template>
  <div v-if="profileDefault">
    <div
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      class="relative overflow-hidden w-auto h-auto"
    >
      <nuxt-picture
        :class="{ activebutton: isHovered }"
        class="relative imgSwiper block transition-all duration-500  after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/10 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
        :src="`${speaker.img}`"
        width="282px"
        height="350px"
        :alt="speaker.name"
        loading="lazy"
      />
      <div
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        class="absolute flex bottom-1 left-2 z-40"
      >
        <svg
          class="absolute -top-1"
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20L15.5 -6.77527e-07L21.5 -9.39795e-07L6 20L0 20Z"
            fill="#39E8EA"
          />
        </svg>
        <div class="ml-6 text-[#FFFFFF] uppercase">
          {{ speaker.name }}
        </div>
      </div>
    </div>
    <div class="mt-4 font-semibold text-base mx-2">
      {{ speaker.academicTitle }}
    </div>
    <div class=" font-light text-base mx-2 h-[50px]">
      {{ speaker.experience }}
    </div>
    <div class="border-b-[1px] my-5"></div>
    <div
      class="max-w-xs text-left text-[14px] font-light leading-[25px] mx-2 h-[160px]"
    >
      {{ speaker.shortDesc }}
    </div>

    <!-- + button -->
    <svg
      @click="toggleProfile()"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      :class="[isHovered ? 'text-[#39E8EA]' : 'text-[#002738]']"
      class="mt-4 w-8 h-8 transition duration-500 absolute bottom-[-47px] left-0 cursor-pointer"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" class="stroke-current" />
      <rect x="13" y="19" width="14" height="2" class="fill-current" />
      <rect
        x="21"
        y="13"
        width="14"
        height="2"
        transform="rotate(90 21 13)"
        class="fill-current"
      />
    </svg>
  </div>

  <!-- full desc without img -->
  <div v-else clas>
    <div class="py-6 px-2 bg-[#F7F9F9] h-[623px] overflow-y-auto relative">
      <svg
        class="absolute"
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20L15.5 -6.77527e-07L21.5 -9.39795e-07L6 20L0 20Z"
          fill="#39E8EA"
        />
      </svg>
      <div class="ml-6 text-xl font-medium">{{ speaker.name }}</div>
      <div class="mt-4 font-semibold text-base">
        {{ speaker.academicTitle }}
      </div>
      <div class="font-light text-base">{{ speaker.experience }}.</div>
      <div class="my-5 border-b-[1px]"></div>
      <div class="text-[13px] leadinng-[25px]">
        {{ speaker.fullDesc }}
      </div>
    </div>
    <svg
      @click="toggleProfile()"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      :class="[isHovered ? 'text-[#39E8EA]' : 'text-[#002738]']"
      class="mt-4 w-8 h-8 transition duration-500 absolute bottom-[-47px] left-0 cursor-pointer"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" class="stroke-current" />
      <rect x="13" y="19" width="14" height="2" class="fill-current" />
    </svg>
  </div>
</template>

<script>
import { stringify } from "querystring";

export default {
  name: "SpeakerProfile",
  props: {
    speaker: Object
  },
  data() {
    return {
      isHovered: false,
      profileDefault: true
    };
  },
  methods: {
    toggleProfile() {
      this.profileDefault = !this.profileDefault;
    }
  }
};
</script>

<style lang="postcss" scoped>
.activebutton {
  @apply scale-110;
}
</style>
