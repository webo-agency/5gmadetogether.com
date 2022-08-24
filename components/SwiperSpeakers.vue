<template>
    <div class="w-full pb-40 overflow-hidden">
        <div class="container">
            <div class="h-full w-screen">
                <div class="relative swiper h-full" >
                    <div class="swiper-wrapper flex h-full mb-12" >
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <div class="swiper-slide w-1/6 max-w-[280px]">
                            <SpeakerProfile/>
                        </div>
                        <!-- Pusty div ktory zalatwia problemy ucinajacego ostatniego kafelka spowodowanego tym ze slideperview sa ustawione na auto -->
                        <div class="swiper-slide w-1/6 max-w-[120px]">
                            <div></div>
                        </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next cursor-pointer">
                        <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.5" fill="#39E8EA" fill-opacity="0.25" stroke="#39E8EA"/>
                            <path d="M20.75 14L19.8562 14.8706L24.5938 19.625H12V20.875H24.5938L19.8562 25.6081L20.75 26.5L27 20.25L20.75 14Z" fill="#39E8EA"/>
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
  Grid,
} from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/modules/grid/grid.min.css'
import SpeakerProfile from './SpeakerProfile.vue'

export default{
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
                    type: "progressbar",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                slidesPerView: "auto",
            },
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
}

</script>

<style lang="postcss" scoped>

.swiper-button-next {
    position: absolute;
    left: 87%;
    top: 25%;
    z-index: 10;
}


@media all and (min-width: 2200px) {
    .swiper-button-next{
        left:72%;
        top: 25%;
    }
}

.activebutton{
    @apply scale-110
}




</style>
