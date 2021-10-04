<template>
  <div class="w-full">
    <section class="py-24 tablet:py-48 px-4 phablet:px-4 text-center relative desktop:mx-16">
      <div class="absolute w-full h-full inset-0 z-auto bg-blue-200">
        <picture>
          <source 
            :srcSet="frontPageData.hero_background.url.slice(0, -4).concat('.webp')"
            type="image/webp"
          >
          <source
            :srcSet="frontPageData.hero_background.url"
            type="image/jpeg"
          >
          <img 
            class="absolute desktop:rounded w-full h-full inset-0 z-auto object-cover" 
            :srcset="frontPageData.hero_background.url" 
            alt=""
          >
        </picture>
      </div>

      <div class="w-full tablet:px-24 desktop:px-48 mr-auto">
        <div class="relative max-w-2xl z-10 ml-0 text-left">
          <header>
            <div
              class="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading text-white"
              v-html="require('~/assets/logo/5g-made-together.svg?include')"
            />
            
            <h1 class="mb-10 text-white leading-relaxed font-light uppercase text-xs phone:text-base tablet:text-2xl">
              {{ frontPageData.hero_title }} <span class="block font-medium text-base phone:text-2xl tablet:text-4xl">{{ frontPageData.hero_subtitle }}</span>
            </h1>
            <time
              datetime="2021-05-27T10:00Z"
              class="block text-white mb-8 text-base phone:text-base desktop:text-xl font-bold"
            >{{ frontPageData.hero_time_title }}</time>
          </header>
          <div class="flex items-start justify-start flex-col tablet:flex-row flex-wrap">
            <a
              class="inline-block py-4 w-full phone:w-auto phone:px-14 tablet:px-8 mr-6 leading-none text-white bg-primaryNormal hover:bg-primaryDark font-semibold rounded shadow text-center mb-4 tablet:mb-0"
              :href="generalData.event_url"
            >{{ generalData.event_title }}</a>
          
            <a
              v-scroll-to="'#read-more'"
              class="inline-block py-4 px-0 tablet:px-8 mr-6 leading-none text-white underline"
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
              <picture>
                <source
                  :srcSet="require('~/assets/img/coference_5g_made_together_is-wireless_2021.jpeg?webp')"
                  type="image/webp"
                >
                <source
                  :srcSet="require('~/assets/img/coference_5g_made_together_is-wireless_2021.jpeg')"
                  type="image/jpeg"
                >
                <img 
                  class="phablet:rounded shadow h-auto object-cover"
                  :srcset="require('~/assets/img/coference_5g_made_together_is-wireless_2021.jpeg')" 
                  alt=""
                >
              </picture>
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
          <picture>
            <source
              :srcSet="frontPageData.section_count_background.url.slice(0, -4).concat('.webp')"
              type="image/webp"
            >
            <source
              :srcSet="frontPageData.section_count_background.url"
              type="image/jpeg"
            >
            <img 
              class="absolute w-full object-cover h-full rounded"
              :srcset="frontPageData.section_count_background.url"
              :alt="frontPageData.section_count_background.alt"
              :title="frontPageData.section_count_background.title"
              :width="frontPageData.section_count_background.width"
              :height="frontPageData.section_count_background.height"
            >
          </picture>
        </div>
      </div>
    </section>

    <section class="container py-12 text-center">
      <div class="">
        <h2 class="text-3xl font-medium font-heading mb-8 flex flex-row items-center uppercase z-50 relative w-full text-center justify-center">
          {{ frontPageData.section_live_title }}
        </h2>
        <div class="mx-auto aspect-w-16 aspect-h-9 shadow-2xl mb-12">
          <a
            v-show="!iframeYoutubeSrc"
            :href="frontPageData.section_live_link"
            class="absolute inset-0 z-50"
          >
            <img
              :src="frontPageData.section_live_thumbnail" 
              class="w-full h-full object-cover"
              alt="Youtube"
            >
          </a>
          <iframe
            v-view="youtubeUpdateSrc"
            class="mx-auto w-full h-full rounded"
            width="100%"
            height="100%"
            :src="iframeYoutubeSrc"
            title="YouTube video player"
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
                  <img
                    class="w-32 mx-auto mb-4 rounded-full" 
                    :src="person.section_panel_person_avatar.sizes.medium" 
                    :width="person.section_panel_person_avatar.sizes['medium-width']" 
                    :height="person.section_panel_person_avatar.sizes['medium-height']" 
                    :alt="person.section_panel_person_avatar.alt" 
                    :title="person.section_panel_person_avatar.title"
                  >
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

              <div class="swiper-pagination" />

              <div class="swiper-button-prev" />
              <div class="swiper-button-next" />
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
  import { directive } from "~/package/vue-awesome-swiper/dist/vue-awesome-swiper.js";

  export default {
    name: "FrontPage",
    directives: {
      swiper: directive,
    },
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
        iframeYoutubeSrc: '',
        liveURL: '',
        swiperOptionsObject: {
          spaceBetween: 0,
          direction: 'horizontal',
          pagination: true,
          loop: false,
          navigation: true,
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