<template>
  <div id="about" class="mb-36 pt-16">
    <div class="relative pt-12 container overflow-hidden">
      <!-- title container -->
      <div class="relative flex flex-col justify-start z-10">
        <!-- title shadow -->
        <div
          class="subtitleShadow text-white desktop:text-[90px] tablet:text-[75px] text-[60px] font-semibold leading-[85px] absolute desktop:top-[-54px] tablet:top-[-54px] top-[-45px] desktop:left-0 left-[-36px] z-[-1]"
        >
          <p class="shadowText uppercase">ABOUT THE</p>
          <p class="shadowText2 uppercase ml-[70px]">CONFERENCE</p>
        </div>

        <div class="flex items-center space-x-2 desktop:ml-[4.5rem]">
          <svg
            width="43"
            :height="isLargeScreen ? '40' : '26'"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40L31 -1.35505e-06L43 -1.87959e-06L12 40L0 40Z"
              fill="#39E8EA"
            />
          </svg>
          <h5 class="text-[14px] font-medium leading-snug mt-3">
            ABOUT THE <span class="text-[#39E8EA]">CONFERENCE - </span>
          </h5>
        </div>
        <h3
          class="desktop:ml-[7.5rem] ml-[2rem] desktop:text-[35px] tablet:text-[30px] text-[26px] font-medium max-w-[33rem] leading-[42px]"
        >
          {{ aboutData.title }}
        </h3>
      </div>
      <!-- desc -->
      <div class="container mt-[4rem]">
        <div class="desktop:ml-28">
          <p class="leading-[28px] font-light text-[#002738] max-w-2xl">
            {{ aboutData.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMediaQuery } from "@vueuse/core";

export default {
  name: "AboutConference",
  props: {
    aboutData: Object
  },
  setup() {
    const isLargeScreen = useMediaQuery("(min-width: 1248px)");

    return { isLargeScreen };
  }
};
</script>

<style scoped>
.subtitleShadow {
  -webkit-text-stroke: 0.5px #dddddd;
}
</style>
