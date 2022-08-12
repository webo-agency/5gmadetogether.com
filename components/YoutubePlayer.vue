<template>
    <section class="container py-12 text-center">
        <div @click.once="handleClick('playVideo', 'youtubeLazyVideo')" class="flex justify-center items-center mx-auto shadow-2xl mb-12 relative">
        <button v-if="playVisible" class="absolute z-50">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="47.5" stroke="white" stroke-width="5"/>
                <path d="M35.6089 25.0737L78.7825 49.9999L35.6089 74.9262L35.6089 25.0737Z" fill="white"/>
            </svg>
        </button>
          <!-- <a
            v-show="!iframeYoutubeSrc"
            :href="frontPageData.section_live_link"
            class="absolute inset-0 z-40"
          >
            <img
              :src="frontPageData.section_live_thumbnail"
              class="w-full h-full object-cover"
              alt="Youtube"
            />
            <svg
              height="80px"
              class="absolute inset-0 m-auto z-40 pointer-events-none"
              viewBox="0 -77 512.00213 512"
              width="100px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                fill="#f00"
              />
              <path
                d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
                fill="#fff"
              />
            </svg>
          </a> -->
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
            playVisible: true
        }
    },
    methods:{
        handleClick(event, ref) {
            this.$refs[ref][event]();
            this.playVisible = !this.playVisible;
    },
    }
}
</script>