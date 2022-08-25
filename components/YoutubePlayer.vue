<template>
    <section class="container py-12 text-center">
        <div @click.once="handleClick('playVideo', 'youtubeLazyVideo')" class="relative flex justify-center items-center mx-auto shadow-2xl mb-12">

            <img
              v-show="playerActive"
              :src="'/img/test.png'"
              class="absolute z-30 w-full h-full top-0 right-0 object-cover"
              alt="Youtube"
            />

        <div v-if="playerActive" class="absolute right-0 -top-16 z-30 bg-[#F7F9F9] w-[484px] desktop:h-[180px]">
            <!-- To do watch to live -->
            <div class="relative flex flex-col items-start justify-center h-[180px] ml-16">
                <div class="flex items-center space-x-2">
                    <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 40L31 -1.35505e-06L43 -1.87959e-06L12 40L0 40Z" fill="#39E8EA"/>
                    </svg>
                    <h5 class="text-[12px] font-medium leading-snug mt-3">Explore <span class="text-[#39E8EA]">- </span> </h5>
                </div>
                    <h3 class="ml-[3.1rem] text-[35px] font-medium leading-snug">Watch live here</h3>
            </div>
        </div>
        <button v-if="playVisible" class="absolute z-30">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="47.5" stroke="white" stroke-width="5"/>
                <path d="M35.6089 25.0737L78.7825 49.9999L35.6089 74.9262L35.6089 25.0737Z" fill="white"/>
            </svg>
        </button>


        <LazyYoutube
            ref="youtubeLazyVideo"
            :src="youtubeLink"
            iframe-class="mx-auto w-full h-full rounded z-0"
            max-width="100%"
            aspect-ratio="16:9"
            thumbnail-quality="maxres"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            >
          <template #button>
            <div></div>
          </template>
        </LazyYoutube>
        </div>
    </section>
</template>


<script>
export default{
    data(){
        return{
            youtubeLink: 'www.youtube.com/watch?v=aE8WrVYhLms',
            playVisible: true,
            playerActive: true,
        }
    },
    methods:{
        handleClick(event, ref) {
            this.$refs[ref][event]();
            this.playVisible = !this.playVisible;
            this.playerActive = !this.playerActive;
    },
    }
}
</script>