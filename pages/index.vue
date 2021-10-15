<template>
  <div class="w-full">
    <section class="py-24 tablet:py-20 px-4 phablet:px-4 text-center relative desktop:mx-16">
      <div class="absolute w-full h-full inset-0 z-auto bg-blue-950">
        <nuxt-picture
          :src="frontPageData.hero_background.url"
          class="block overflow-hidden absolute desktop:rounded h-full inset-0 z-auto object-cover banner" 
          :alt="frontPageData.hero_background.alt"
          :title="frontPageData.hero_background.title"
          sizes="sm:768px md:1247px lg:1552px"
          quality="60"
          :modifiers="{ format: 'webp' }"
        />
      </div>

      <div class="w-full tablet:px-24 desktop:px-36 mr-auto">
        <div class="relative max-w-xl z-10 ml-0 text-left">
          <header class="font-body">
            <div
              class="text-5xl mt-8 mb-32 leading-tight font-semibold font-heading text-white"
              v-html="require('~/assets/logo/5g-made-together.svg?include')"
            />
            
            <h1 class="mb-6 px-10 py-6 tracking-wide text-blue-950 font-bold text-3xl bg-primarySecond phone:text-base text-center phablet:text-left tablet:text-4xl">
              {{ frontPageData.hero_title }} <span class="block font-normal text-base text-center phablet:text-left uppercase phone:text-2xl tablet:text-4xl">{{ frontPageData.hero_subtitle }}</span>
            </h1>
            <time
              datetime="2021-05-27T10:00Z"
              class="block font-normal text-primarySecond mx-8 mb-8 text-base text-center phablet:text-left phone:text-base desktop:text-2xl"
            >{{ frontPageData.hero_time_title }}</time>
          </header>
          <div class="mx-8 flex items-start justify-start flex-col phablet:flex-row flex-wrap">
            <a
              class="hidden text-base font-body py-4 w-full phone:w-auto phone:px-14 phone:mx-auto phablet:px-8 phablet:mr-6 phablet:ml-0 leading-none text-blue-950 bg-primarySecond hover:bg-primaryDark font-semibold rounded shadow text-center mb-4 tablet:mb-0"
              :href="generalData.event_url"
            >{{ generalData.event_title }}</a>
          
            <a
              v-scroll-to="'#read-more'"
              class="inline-block text-base font-body py-2 mx-auto phablet:ml-0 leading-none text-primarySecond font-medium border-b-2 border-primarySecond hover:text-primaryDark" 
              
              :href="frontPageData.link_read_more"
            >{{ frontPageData.link_read_more_title }}</a>
          </div>
        </div>
      </div>
    </section>
        
    <section
      id="read-more"
      class="container pt-12 phablet:py-12"
    >
      <div class="flex flex-wrap phablet:-mx-4">
        <div class="w-full desktop:w-1/2 phablet:px-4 mb-8 desktop:mb-0">
          <div class="flex flex-col h-full tablet:py-8 tablet:pr-8 rounded">
            <div
              class="content"
              v-html="frontPageData.content.rendered"
            />
          </div>
        </div>
        <div class="desktop:w-1/2 phablet:px-4">
          <div class="flex flex-wrap phablet:-m-2">
            <div class="phablet:p-2">
              <nuxt-picture
                class="phablet:rounded shadow h-auto object-cover"
                :src="frontPageData.page_image_additionall.url"
                :title="frontPageData.page_image_additionall.title"
                :alt="frontPageData.page_image_additionall.alt"
                :width="frontPageData.page_image_additionall.width" 
                :height="frontPageData.page_image_additionall.height"
                quality="70"
                :modifiers="{ format: 'webp' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="desktop:mx-16 py-8">
      <div class="py-24 text-left relative">
        <div class="container title">
          <h2 class=" text-white z-50 relative">
            {{ frontPageData.section_count_title }}
          </h2>
        </div>

        <div class="container flex flex-wrap relative z-50">
          <div class="desktop:w-1/3 desktop:pr-4 mb-6 relative">
            <h3 class="text-highlight text-xl my-3 font-semibold font-heading phone:text-4xl">
              <count-to
                ref="countMinute"
                v-view.once="viewMinutCount"
                :start-val="0"
                :end-val="parseInt(frontPageData.section_count_block_first.block_first_count)"
                :duration="3000"
                :autoplay="false"
                :suffix="' ' + frontPageData.section_count_block_first.block_first_count_prefix"
              />
            </h3>
            <p class="text-white leading-relaxed">
              {{ frontPageData.section_count_block_first.block_first_description }}
            </p>
          </div>
          
          <div class="desktop:w-1/3 desktop:px-4 mb-6 relative">
            <h3 class="text-highlight text-xl my-3 font-semibold font-heading phone:text-4xl">
              <count-to
                ref="countPrelegent"
                v-view.once="viewPrelegentCount"
                :start-val="0"
                :end-val="parseInt(frontPageData.section_count_block_second.block_second_count)"
                :duration="3000"
                :autoplay="false"
                :suffix="' ' + frontPageData.section_count_block_second.block_second_count_prefix"
              /> 
            </h3>
            <p class="text-white leading-relaxed">
              {{ frontPageData.section_count_block_second.block_second_description }}
            </p>
          </div>

          <div class="desktop:w-1/3 desktop:pl-4 mb-6 relative">
            <h3 class="text-highlight text-xl my-3 font-semibold font-heading phone:text-4xl">
              <count-to
                ref="countDebate"
                v-view.once="viewDebateCount"
                class="text-highlight"
                :start-val="0"
                :end-val="parseInt(frontPageData.section_count_block_third.block_third_count)"
                :duration="3000"
                :autoplay="false"
                :suffix="' ' + frontPageData.section_count_block_third.block_third_count_prefix"
              />
            </h3>
            <p class="text-white leading-relaxed">
              {{ frontPageData.section_count_block_third.block_third_description }}
            </p>
          </div>
        </div>
       
        <div class="absolute inset-0 overflow-hidden overlay">
          <nuxt-picture
            class="flex absolute w-full object-cover h-full rounded banner"
            :src="frontPageData.section_count_background.url"
            :alt="frontPageData.section_count_background.alt"
            :title="frontPageData.section_count_background.title"
            :width="frontPageData.section_count_background.width"
            :height="frontPageData.section_count_background.height"
            sizes="sm:1552px md:1552px lg:1552px"
            quality="100"
            format="webp"
            :modifiers="{ format: 'webp' }"
          />
        </div>
      </div>
    </section>

    <section class="container py-12 text-center">
      <div class="">
        <h2 class="text-3xl font-medium font-heading mb-8 flex flex-row items-center uppercase z-50 relative w-full text-center justify-center">
          {{ frontPageData.section_live_title }}
        </h2>
        <div class="flex mx-auto shadow-2xl mb-12 relative">
          <a
            v-show="!iframeYoutubeSrc"
            :href="frontPageData.section_live_link"
            class="absolute inset-0 z-50 "
          >
            <img
              :src="frontPageData.section_live_thumbnail" 
              class="w-full h-full object-cover"
              alt="Youtube"
            >
            <svg
              height="80px"
              class="absolute inset-0 m-auto z-60 pointer-events-none"
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
          </a>
          <LazyYoutube 
            :src="frontPageData.section_live_link" 
            iframe-class="mx-auto w-full h-full rounded z-0"
            max-width="100%"
            aspect-ratio="16:9"
            thumbnail-quality="maxres"
            :custom-title="frontPageData.section_live_title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </section>
      
    <section class="desktop:mx-16 bg-gray-100 relative py-8 text-center rounded">
      <div class="container flex flex-wrap justify-around">
        <h2 class="text-3xl font-medium font-heading my-8 flex flex-row items-center uppercase z-50 relative w-full text-center justify-center">
          {{ frontPageData.section_panel }}
        </h2>
        <div class="w-full block flex-wrap justify-center">
          <client-only>
            <div
              v-swiper="swiperOptionsObject"
              class="swiper-container"
              :loadtheme="false"
            >
              <div class="swiper-wrapper">
                <div
                  v-for="(person, index) in frontPageData.section_panel_person"
                  :key="index" 
                  class="swiper-slide p-8 mb-4 border-l-0 tablet:border-b-0 border-less-height"
                  :class="String.prototype.concat('',
                                                  ' ', (index < (frontPageData.section_panel_person.length - 1) ? 'border-b' : ''),
                                                  ' ', (index < (frontPageData.section_panel_person.length - 2) ? '' : 'tablet:border-b-0'),
                                                  ' ', (index < (frontPageData.section_panel_person.length - 3) ? '' : 'desktop:border-b-0'),
                                                  ' ', ((index % 3 == 0 || index == 0 || index == 13 || index == 12 || index == 14) ? 'tablet:border-l' : ''),
                                                  ' ', ((index == 8 || index == 11 || index == 12) ? '' : 'tablet:border-r'),
                                                  ' ')
                  "
                >
                  <nuxt-picture
                    class="block overflow-hidden w-32 mx-auto mb-4 rounded-full" 
                    :src="person.section_panel_person_avatar.sizes.medium" 
                    :width="person.section_panel_person_avatar.sizes['medium-width']" 
                    :height="person.section_panel_person_avatar.sizes['medium-height']" 
                    :alt="person.section_panel_person_avatar.alt" 
                    :title="person.section_panel_person_avatar.title"
                    sizes="sm:128px md:256px lg:256px"
                    quality="60"
                    :modifiers="{ format: 'webp' }"
                  />
                  <h3 class="text-xl mb-1 font-semibold font-heading">
                    {{ person.section_panel_person_name }}
                  </h3>
                  <span class="block font-bold">{{ person.section_panel_person_office }}</span>
                  <span class="block">{{ person.section_panel_person_company }}</span>
                  <read-more>
                    <p class="mt-4 text-gray-900 leading-relaxed">
                      {{ person.section_panel_person_description }}
                    </p>
                  </read-more>
                </div>
              </div>
            </div>
            <div class="w-full flex items-center justify-center">
              <div
                class="swiper-pagination block"
              />
            </div>
            <div
              tabindex="0"
              class="swiper-button-prev"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
              >
                <path
                  d="M3.05891 14.0065L15.2265 1.83892C15.6471 1.41821 15.6471 0.736143 15.2265 0.315436C14.8057 -0.105145 14.1237 -0.105145 13.703 0.315436L0.773687 13.2447C0.353107 13.6654 0.353107 14.3475 0.773687 14.7682L13.703 27.6975C14.131 28.1109 14.8131 28.099 15.2265 27.671C15.6297 27.2534 15.6297 26.5915 15.2265 26.174L3.05891 14.0065Z"
                  fill="#9F9FA1"
                />
              </svg>
            </div>
            <div
              tabindex="0"
              class="swiper-button-next"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
              >
                <path
                  d="M12.9411 14.0065L0.77354 1.83892C0.352896 1.41821 0.352896 0.736143 0.77354 0.315436C1.19431 -0.105145 1.87632 -0.105145 2.29703 0.315436L15.2263 13.2447C15.6469 13.6654 15.6469 14.3475 15.2263 14.7682L2.29703 27.6975C1.86899 28.1109 1.18692 28.099 0.77354 27.671C0.37032 27.2534 0.37032 26.5915 0.77354 26.174L12.9411 14.0065Z"
                  fill="#9F9FA1"
                />
              </svg>
            </div>
          </client-only>
        </div>
      </div>
    </section>

    <section
      id="agenda"
      class="container py-12"
    >
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-medium font-heading mb-8 flex flex-row items-center uppercase z-50 relative w-full text-center justify-center">
          {{ frontPageData.section_agenda_title }}
        </h2>

        <ol>
          <li
            v-for="(appointment, index) in frontPageData.section_agenda_appointment"
            :key="index"
            v-view.once
            class="flex flex-row flex-wrap mb-2 pb-2 text-gray-900"
            :class="String.prototype.concat('',
                                            ' ',(appointment.section_agenda_appointment_border && index < frontPageData.section_agenda_appointment.length-1 ? 'animate-border border-b' : ''),
                                            ' ',(!appointment.section_agenda_appointment_title ? 'tablet:flex-nowrap' : ''),
                                            ' ')
            "
          >
            <span
              v-if="appointment.section_agenda_appointment_time != '' && !appointment.section_agenda_appointment_time_end"
              class="block time-dash flex-none uppercase"
            ><time :datetime="appointment.section_agenda_appointment_time | dateStandardConvert">{{ appointment.section_agenda_appointment_time | dateConvert }}</time></span>
            <span
              v-if="appointment.section_agenda_appointment_time != '' && appointment.section_agenda_appointment_time_end"
              class="block time-dash flex-none w-48 uppercase"
            ><time :datetime="appointment.section_agenda_appointment_time | dateStandardConvert">{{ appointment.section_agenda_appointment_time | dateConvert }}</time>&nbsp;-&nbsp;<time :datetime="appointment.section_agenda_appointment_time_end | dateStandardConvert">{{ appointment.section_agenda_appointment_time_end | dateConvert }}</time></span>
            <span
              v-if="appointment.section_agenda_appointment_title != ''"
              class="block mb-1 uppercase"
            >{{ appointment.section_agenda_appointment_title }}</span>
            <span 
              v-if="appointment.section_agenda_appointment_topic != ''" 
              class="block mb-1 agenda-content" 
              :class="appointment.section_agenda_appointment_title ? 'ml-0 phablet:ml-28' : ''"
              v-html="appointment.section_agenda_appointment_topic"
            />
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>  
  export default {
    name: "FrontPage",
    filters: {
      dateConvert: function (time) {
        if (!time) return ''
        
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }

        time[3] = ' '; //remove seconds

        return time.join ('');
      },
      dateStandardConvert: function (time) {
        if (!time) return ''
        return time.concat('2021-05-27T',time.slice(0, -3),'Z');
      }
    },
    data: function() {
      return {
        swiperIndex: 0,
        swiperCount: 0,
        iframeYoutubeSrc: '',
        liveURL: '',
        swiperOptionsObject: {
          spaceBetween: 0,
          direction: 'horizontal',
          pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          loop: false,
          scrollbar: false,
          breakpoints: {  
            '320': {
              slidesPerView: 1,
              slidesPerGroup: 1,
              slidesPerColumn: 1,
              slidesPerColumnFill : 'column',
            },
            '1024': {
              slidesPerView: 3,
              slidesPerGroup: 3,
              slidesPerColumn: 2,
              slidesPerColumnFill: 'row',
            },
          },
        },
      };
    },
    async fetch ({ app, store }) {
  
      await app.$wp.namespace( 'wuxt' ).v1().frontPage().then(function(data){
         store.commit('homepage/save', data);
      }); 

    },
    head() {
      return {
        title: this.frontPageData.head_tags_title,
        meta: this.frontPageData.head_tags_meta,
        script: this.frontPageData.head_tags_script,
        link: this.frontPageData.head_tags_link,
      }
    },
    computed: {
      frontPageData() {
        return this.$store.getters['homepage/getData']
      },
      generalData() {
        return this.$store.getters['general/getData']
      },
    },
    created() {
      this.liveURL = this.frontPageData.section_live_embed;
    },
    methods: {
      updateLiveURL (){
        return this.liveURL;
      },
      youtubeUpdateSrc (){
        this.iframeYoutubeSrc = this.liveURL;
      },
      viewMinutCount (e){
        if(e.type == 'enter'){
           this.$refs.countMinute.start();
        }

        if(e.type == 'exit'){
           this.$refs.countMinute.reset();
        }
      },
      viewPrelegentCount (e){
        if(e.type == 'enter'){
           this.$refs.countPrelegent.start();
        }

        if(e.type == 'exit'){
           this.$refs.countPrelegent.reset();
        }
      },
      viewDebateCount (e){
        if(e.type == 'enter'){
           this.$refs.countDebate.start();
        }

        if(e.type == 'exit'){
           this.$refs.countDebate.reset();
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>

</style>