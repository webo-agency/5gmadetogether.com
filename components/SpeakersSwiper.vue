<template>
    <div class="w-full pb-60 overflow-hidden">
            <div class="container">
                <div class="h-full w-screen">
                    <div class="relative swiper h-full">
                        <div class="swiper-wrapper flex h-full">
                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div @mouseover="isHovered = true" @mouseleave="isHovered = false" class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    :class="{activebutton: isHovered}"
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Mark.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg @mouseover="isHovered = true" @mouseleave="isHovered = false" 
                                    :class="[isHovered ? 'text-[#39E8EA]' : 'text-[#002738]']" 
                                    class="mt-4 w-8 h-8  transition duration-500" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" class="stroke-current"/>
                                        <rect x="13" y="19" width="14" height="2" class="fill-current"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" class="fill-current"/>
                                    </svg>
                                </div>

                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Filipe.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
                                </div>


                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Katherine.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
                                </div>


                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Marta.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
                                </div>


                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Robert.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
                                </div>


                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Katherine.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
                                </div>


                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Katherine.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
                                </div>


                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Katherine.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
                                </div>


                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Katherine.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
                                </div>


                                <div class="swiper-slide w-1/6 max-w-[280px]">
                                    <div class="overflow-hidden w-auto h-auto">
                                    <nuxt-picture
                                    class="relative block transition-all duration-500 hover:scale-[110%] after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
                                    :src="'/img/Katherine.png'"
                                    width="282px"
                                    height="350px"
                                    />
                                    </div>
                                    <div class="mt-4 font-semibold text-base">Professor</div>
                                    <div class=" font-normal text-base">University of Oslo, Norway</div>
                                    <div class="border my-5"></div>
                                    <div class="max-w-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
                                    <svg class="mt-4 w-8 h-8" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="#002738"/>
                                        <rect x="13" y="19" width="14" height="2" fill="#002738"/>
                                        <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" fill="#002738"/>
                                    </svg>
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

export default{
    data(){
        return{
                isHovered: false,
                swiperOptionsObject: {
                modules: [Pagination, Mousewheel, Navigation, Autoplay, Grid],
                spaceBetween: 16,
                direction: "horizontal",
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 1,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                loop: true,
                scrollbar: true,
                slidesPerView: "auto",
            },
        }
    },
    mounted() {
        this.$data.swiper = new Swiper(".swiper", this.swiperOptionsObject);
    },
    methods:{

    },

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

.test{
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0,0,0);
}

.activebutton{
    @apply scale-110
}

</style>
