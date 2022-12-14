<template>
  <div class="w-full pb-40 overflow-hidden">
    <div class="container">
      <div class="h-full w-screen">
        <div class="relative swiper h-full">
          <ul class="swiper-wrapper flex h-full mb-16">
            <li
              class="swiper-slide w-[250px] desktop:h-[670px]"
              v-for="(speaker, index) in speakersData"
              :key="index"
            >
              <SpeakerProfile :speaker="speaker" />
            </li>
            <!-- Pusty div ktory zalatwia problemy ucinajacego ostatniego kafelka spowodowanego tym ze slideperview sa ustawione na auto -->
            <div class="swiper-slide min-w-[10px] max-w-[280px] invisible">
              <div></div>
            </div>
          </ul>
          <div class="swiper-pagination"></div>
          <div
            class="swiper-button-prev cursor-pointer absolute left-[20px] top-[28%] z-[1]"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="rotate-180"
            >
              <circle
                cx="20"
                cy="20"
                r="19.5"
                fill="#39E8EA"
                fill-opacity="0.25"
                stroke="#39E8EA"
              />
              <path
                d="M20.75 14L19.8562 14.8706L24.5938 19.625H12V20.875H24.5938L19.8562 25.6081L20.75 26.5L27 20.25L20.75 14Z"
                fill="#39E8EA"
              />
            </svg>
          </div>
          <div
            class="swiper-button-next cursor-pointer absolute tablet:right-[130px] right-[50px] top-[28%] z-[1]"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="19.5"
                fill="#39E8EA"
                fill-opacity="0.25"
                stroke="#39E8EA"
              />
              <path
                d="M20.75 14L19.8562 14.8706L24.5938 19.625H12V20.875H24.5938L19.8562 25.6081L20.75 26.5L27 20.25L20.75 14Z"
                fill="#39E8EA"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Swiper,
  Pagination,
  Mousewheel,
  Navigation,
  Autoplay,
  Grid
} from "swiper";

import "swiper/swiper.min.css";
import "swiper/modules/grid/grid.min.css";
import SpeakerProfile from "./component-speaker-profile.vue";

export default {
  name: "SwiperSpeakers",
  props: {
    speakersData: Array
  },
  data() {
    return {
      isHovered: false,
      profileDefault: true,
      swiperOptionsObject: {
        modules: [Pagination, Mousewheel, Navigation, Autoplay, Grid],
        spaceBetween: 16,
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: "auto",
        breakpoints: {
          320: {
            slidesPerGroup: 1
          },
          480: {
            slidesPerGroup: 2
          },
          768: {
            slidesPerGroup: 3
          },
          1248: {
            slidesPerGroup: 4
          }
        }
      }
    };
  },

  mounted() {
    this.$data.swiper = new Swiper(".swiper", this.swiperOptionsObject);
  },
  methods: {
    toggleProfile() {
      this.profileDefault = !this.profileDefault;
    }
  },
  components: { SpeakerProfile }
};
</script>

<style lang="postcss" scoped>
.swiper-slide {
  width: 250px !important;
  height: 670px !important;
}
.swiper-button-disabled {
  opacity: 0 !important;
}
.swiper-button-prev {
  opacity: 1;
  transition: all 0.3s ease-out;
}

.activebutton {
  @apply scale-110;
}
</style>
