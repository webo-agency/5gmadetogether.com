import Vue from 'vue';
import VueAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

import { Swiper as SwiperClass, Pagination, Navigation, Autoplay } from "swiper/swiper.esm";

// import style
import "swiper/swiper-bundle.min.css"

SwiperClass.use([Pagination, Navigation, Autoplay])
Vue.use(VueAwesomeSwiper(SwiperClass))

const { directive } = VueAwesomeSwiper(SwiperClass)
Vue.directive("swiper", directive)