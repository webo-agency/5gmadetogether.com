<template>
  <div class="w-full">
    <section class="py-24 tablet:py-48 px-4 phablet:px-4 text-center relative desktop:mx-16">
      <div class="absolute w-full h-full inset-0 z-auto bg-blue-200">
        <picture>
          <source
            :srcSet="require('~/assets/img/5GMadetogether_conference_big.jpg?webp')"
            type="image/webp"
          >
          <source
            :srcSet="require('~/assets/img/5GMadetogether_conference_big.jpg')"
            type="image/jpeg"
          >
          <img 
            class="absolute desktop:rounded w-full h-full inset-0 z-auto object-cover" 
            :src="require('~/assets/img/5GMadetogether_conference_big.jpg')" 
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
            <time datetime="2021-05-27T10:00Z" class="block text-white mb-8 text-base phone:text-base desktop:text-xl font-bold">{{ frontPageData.hero_time_title }}</time>
          </header>
          <div class="flex items-start justify-start flex-col tablet:flex-row flex-wrap">
            <a
              class="inline-block py-4 w-full phone:w-auto phone:px-14 tablet:px-8 mr-6 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow text-center mb-4 tablet:mb-0"
              :href="generalData.event_url"
            >{{ generalData.event_title }}</a>
          
            <a
              v-scroll-to="'#read-more'"
              class="inline-block py-4 px-0 tablet:px-8 mr-6 leading-none text-white underline"
              href="#read-more"
            >Read more</a>
          </div>
        </div>
      </div>
    </section>
        
    <section class="container pt-12 phablet:py-12" id="read-more">
      <div class="flex flex-wrap phablet:-mx-4">
        <div class="w-full desktop:w-1/2 phablet:px-4 mb-8 desktop:mb-0">
          <div class="flex flex-col h-full tablet:py-8 tablet:pr-8 rounded">
            <h2 class="text-3xl font-medium font-heading mb-14 flex flex-col flex-wrap phone:flex-row items-left uppercase">
              <svg
                class="mr-4"
                width="50px"
                viewBox="0 0 292 292"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-miterlimit="1.5"
              ><path
                fill="none"
                d="M0 0h291.667v291.667H0z"
              /><clipPath id="a"><path d="M0 0h291.667v291.667H0z" /></clipPath><g clip-path="url(#a)"><path
                d="M0 145.833h291.667"
                fill="none"
                stroke="#11C9D8"
                stroke-width="16.67"
              /></g></svg>About the conference
            </h2>
            <ul class="mb-7 text-gray-900 leading-relaxed list-disc ml-6">
              <li class="mb-2">How is the 5G network being developed around the world?</li>
              <li class="mb-2">Where does the process take place seamlessly, and where is it delayed?</li>
              <li class="mb-2">How secure can the 5G network become? Why is Open RAN the model of the future?</li>
              <li class="mb-2">Is the telecommunications market ready for the upcoming change?</li>
              <li class="mb-2">Finally, how could the 5G development decision-makers be persuaded to implement the open network model?</li>
            </ul>
            <p class="mb-8 text-gray-900 leading-relaxed">
              These are some of the questions to be answered by ICT companies’ experts from around the world during discussion panels and lectures hosted at the international „5G Made Together – creating future with open ecosystems” conference.
              <br>
              Participation in the conference is free of charge. Sign up now and listen to the insights of the world’s 5G leaders. Join the discussion!
            </p>
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
                  :src="require('~/assets/img/coference_5g_made_together_is-wireless_2021.jpeg')" 
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
        <div class="container">
          <h2 class="text-3xl text-white font-medium font-heading mb-14 flex flex-col flex-wrap phone:flex-row items-center uppercase z-50 relative">
            <svg
              class="mr-4"
              width="50px"
              viewBox="0 0 292 292"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-miterlimit="1.5"
            ><path
              fill="none"
              d="M0 0h291.667v291.667H0z"
            /><clipPath id="a"><path d="M0 0h291.667v291.667H0z" /></clipPath><g clip-path="url(#a)"><path
              d="M0 145.833h291.667"
              fill="none"
              stroke="#11C9D8"
              stroke-width="16.67"
            /></g></svg>{{ frontPageData.section_count_title }}
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
                class="text-highlight"
                ref="countDebate"
                v-view.once="viewDebateCount"
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
       
        <div class="absolute inset-0 overflow-hidden">
          <picture>
            <source
              :srcSet="require('~/assets/img/network_coference_5g_made_together_is-wireless_2021.jpg?webp')"
              type="image/webp"
            >
            <source
              :srcSet="require('~/assets/img/network_coference_5g_made_together_is-wireless_2021.jpg')"
              type="image/jpeg"
            >
            <img 
              class="absolute w-full object-cover h-full rounded"
              :src="require('~/assets/img/network_coference_5g_made_together_is-wireless_2021.jpg')" 
              alt=""
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
              :src="require('~/assets/img/YT_Player_1920x1080.jpg')" 
              class="w-full h-full object-cover"
              alt=""
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
        <div class="flex flex-wrap justify-center">

          <div v-for="(person, index) in frontPageData.section_panel_person" :key="index" 
            class="w-full tablet:w-1/2 desktop:w-1/3 p-8 mb-4 border-l-0 tablet:border-b-0"
            :class="'' +
              ' ' + (index < (frontPageData.section_panel_person.length - 1) ? 'border-b' : '') +
              ' ' + (index < (frontPageData.section_panel_person.length - 2) ? '' : 'tablet:border-b-0') +
              ' ' + (index < (frontPageData.section_panel_person.length - 3) ? '' : 'desktop:border-b-0') +
              ' ' + (index % 3 == 0 ? '' : 'tablet:border-l') +
              ' '
            "
          >
            <img class="w-32 mx-auto mb-4 rounded-full" :src="person.section_panel_person_avatar.url" alt="Lorcan Burke">
            <h3 class="text-xl mb-1 font-semibold font-heading">{{ person.section_panel_person_name }}</h3>
            <span class="block font-bold">{{ person.section_panel_person_office }}</span>
            <span class="block">{{ person.section_panel_person_company }}</span>
            <p class="mt-4 text-gray-900 leading-relaxed">
              {{ person.section_panel_person_description }}
            </p>
          </div>
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
            v-view.once
            class="animate-border flex flex-row flex-wrap border-b mb-2 pb-2 text-gray-900"
          >
            <span class="block time-dash flex-none"><time datetime="2021-05-27T10:00Z">10:00 AM</time></span>
            <span class="uppercase">Opening</span>
          </li>
          <li
            v-view.once
            class="animate-border flex flex-row flex-wrap tablet:flex-nowrap border-b mb-2 pb-2 text-gray-900"
          >
            <span class="block time-dash flex-none"><time>10:05 AM</time></span>
            <span class="block mb-1">Cyber security aspects in Open RAN - The Chancellery of the <strong>Prime Minister of Poland</strong>, <em class="font-bold whitespace-nowrap" itemprop="name">Robert Kośla</em>, Director of Department of Cybersecurity</span>
          </li>
          <li
            v-view.once
            class="animate-border flex flex-row flex-wrap border-b mb-2 pb-2 text-gray-900"
          >
            <span class="block time-dash flex-none"><time>10:20 AM</time></span>
            <span class="block mb-1 uppercase">Debate</span>
            <div class="ml-0 phablet:ml-28">
              <span class="block mb-2 phablet:mb-0">Participants:</span> 
              <ol class="list-disc ml-6 mb-4">
                <li class="mb-2 phablet:mb-0"><em class="font-bold whitespace-nowrap" itemprop="name">Franz Seiser</em>, Vice President, Access Disaggregation, Deutsche Telekom</li>
                <li class="mb-2 phablet:mb-0"><em class="font-bold whitespace-nowrap" itemprop="name">Zygmunt A. Lozinski</em>, Senior Technical Staff Member, Master Inventor, Quantum Ambassador, IBM</li>
                <li class="mb-2 phablet:mb-0"><em class="font-bold whitespace-nowrap" itemprop="name">Lorcan Burke</em>, Director RAN, VMware</li>
                <li class="mb-2 phablet:mb-0"><em class="font-bold whitespace-nowrap" itemprop="name">Sławomir Pietrzyk</em>, CEO, IS-Wireless</li>
              </ol>
              <span>
                Moderator: <em class="font-bold whitespace-nowrap" itemprop="name">Petar Popovski</em>, Aalborg University in Denmark<br>
              </span>
            </div>
          </li>
          <li
            v-view.once
            class="flex flex-row flex-wrap mb-2 pb-2 text-gray-900"
          >
            <span class="block time-dash flex-none"><time datetime="2021-05-27T11:00Z">11:00 AM</time></span>
            <span class="block mb-1 uppercase">Conference</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T11:00Z">11:00&nbsp;AM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T11:20Z">11.20&nbsp;AM</time></span>
            <span class="block mb-1">OpenRAN 2.0 - IS-Wireless - <em class="font-bold whitespace-nowrap" itemprop="name">Sławomir Pietrzyk</em>, CEO</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T11:20Z">11:20&nbsp;AM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T11:40Z">11.40&nbsp;AM</time></span>
            <span class="block mb-1">Open Networks & Vendor Diversification in the UK - Ofcom - <em class="font-bold whitespace-nowrap" itemprop="name">Simon Burley</em>, Principal, Emerging Technology</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T11:40Z">11:40&nbsp;AM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T12:00Z">12.00&nbsp;PM</time></span>
            <span class="block mb-1">Accelerating OpenRAN ecosystem - VMware - <em class="font-bold whitespace-nowrap" itemprop="name">Lorcan Burke</em>, Director RAN</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T12:00Z">12:00&nbsp;PM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T12:20Z">12.20&nbsp;PM</time></span>
            <span class="block mb-1">Radio heads ready for OpenRAN - Cablefree - <em class="font-bold whitespace-nowrap" itemprop="name">Stephen Patrick</em>, CEO</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T12:20Z">12:20&nbsp;PM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T12:40Z">12:40&nbsp;PM</time></span>
            <span class="block mb-1">OpenRAN ready servers - HPE</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T12:40Z">12:40&nbsp;PM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T13:00Z">1:00&nbsp;PM</time></span>
            <span class="block mb-1">Building next generation edge - Tambora Systems - <em class="font-bold whitespace-nowrap" itemprop="name">Anand Uppili</em>, CEO</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T13:00Z">1:00&nbsp;PM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T13:00Z">1:20&nbsp;PM</time></span>
            <span class="block mb-1">Telco Cloud - The importance of a horizontal platform - IBM - <em class="font-bold whitespace-nowrap" itemprop="name">Zygmunt A. Lozinski</em>, Senior Technical Staff Member, Master Inventor, Quantum Ambassador</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T13:20Z">1:20&nbsp;PM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T13:40Z">1:40&nbsp;PM</time></span>
            <span class="block mb-1">Digitalising Industry: 5G Network orchestration with O-RAN and Edge Computing for industry verticals - Comarch - <em class="font-bold whitespace-nowrap" itemprop="name">Łukasz Mendyk</em>, Senior Solution Manager</span>
          </li>
          <li class="flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900">
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T13:40Z">1:40&nbsp;PM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T14:00Z">2:00&nbsp;PM</time></span>
            <span class="block mb-1">The role of chipset in open ecosystems - Marvell - <em class="font-bold whitespace-nowrap" itemprop="name">John Schimpf</em>, Senior Director, Product Marketing</span>
          </li>
          <li 
            class="animate-border border-b flex flex-row flex-wrap tablet:flex-nowrap mb-2 pb-2 text-gray-900"
            v-view.once
          >
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T14:00Z">2:00&nbsp;PM</time>&nbsp;-&nbsp;<time datetime="2021-05-27T14:20Z">2:20&nbsp;PM</time></span>
            <span class="block mb-1">Telecommunication of the future - the VC perspective - Bitspiration Booster - <em class="font-bold whitespace-nowrap" itemprop="name">Wojciech Burkot</em>, CEO</span>
          </li>
          <li
            v-view.once
            class="flex flex-row flex-wrap mb-2 pb-2 text-gray-900"
          >
            <span class="block time-dash flex-none w-48"><time datetime="2021-05-27T15:00Z">2:30 PM</time></span>
            <span class="uppercase">Closing remarks</span>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>  
  export default {
    name: "FrontPage",
    async fetch ({ app, store }) {
  
      await app.$wp.namespace( 'wuxt' ).v1().frontPage().then(function(data){
         store.commit('homepage/save', data);
      }); 

    },
    computed: {
      frontPageData() {
        return this.$store.getters['homepage/getData']
      },
      generalData() {
        return this.$store.getters['general/getData']
      },
    },
    data: function() {
      return {
        iframeYoutubeSrc: '',
        liveURL: '',
      };
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