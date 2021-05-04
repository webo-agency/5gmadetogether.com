<template>
  <div class="w-full">
    <section class="py-48 px-4 text-center relative lg:mx-16">
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
            class="absolute lg:rounded w-full h-full inset-0 z-auto object-cover" 
            :src="require('~/assets/img/5GMadetogether_conference_big.jpg')" 
            alt=""
          >
        </picture>
      </div>

      <div class="w-full md:px-12 lg:px-48 mr-auto">
        <div class="relative max-w-2xl z-10 ml-0 text-left">
          <header>
            <div
              class="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading text-white"
              v-html="require('~/assets/logo/5g-made-together.svg?include')"
            />
            
            <h1 class="mb-8 text-white leading-relaxed font-light uppercase text-2xl">
              Creating future with <span class="block font-medium text-4xl">open ecosystems</span>
            </h1>
          </header>
          <div class="flex flex-row flex-wrap">
            <a
              class="inline-block py-4 px-8 mr-6 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow"
              href="https://5gmadetogether.konfeo.com/pl/groups"
            >Register</a>
            <a
              v-scroll-to="'#read-more'"
              class="inline-block py-4 px-8 mr-6 leading-none text-white underline"
              href="#read-more"
            >Read more</a>
          </div>
        </div>
      </div>
    </section>
        
    <div class="container mx-auto px-4">
      <section
        id="read-more"
        class="py-12 px-4"
      >
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div class="flex flex-col h-full tablet:p-8 rounded">
              <h2 class="text-xl md:text-xl lg:text-3xl font-medium font-heading mb-14 flex flex-row items-center uppercase">
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
              <p class="mb-8 text-gray-400 leading-relaxed">
                How is the 5G network being developed around the world? Where does the process take place seamlessly, and where is it delayed? How secure can the 5G network become? Why is Open RAN the model of the future? Is the telecommunications market ready for the upcoming change? Finally, how could the 5G development decision-makers be persuaded to implement the open network model? These are some of the questions to be answered by ICT companies’ experts from around the world during discussion panels and lectures hosted at the international „5G Made Together – creating future with open ecosystems” conference.
                Participation in the conference is free of charge. Sign up now and listen to the insights of the world’s 5G leaders. Join the discussion!
              </p>
            </div>
          </div>
          <div class="lg:w-1/2 px-4">
            <div class="flex flex-wrap -m-2">
              <div class="p-2">
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
                    class="rounded shadow h-auto object-cover"
                    :src="require('~/assets/img/coference_5g_made_together_is-wireless_2021.jpeg')" 
                    alt=""
                  >
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="py-24 px-4 text-center relative lg:mx-16">
      <section class="py-8 px-4">
        <h2 class="text-3xl text-white font-medium font-heading mb-14 flex flex-row items-center uppercase z-50 relative">
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
          /></g></svg>Conference in numbers
        </h2>

        <div class="flex flex-wrap -mx-4 -mb-6 relative z-50">

          <div class="lg:w-1/3 px-4 mb-6 relative">
            <h3 class="text-white text-xl my-3 font-semibold font-heading text-4xl">
              <count-to
                ref="countMinute"
                v-view="viewMinutCount"
                :start-val="0"
                :end-val="260"
                :duration="3000"
                :autoplay="false"
                suffix=" Minutes"
              />
            </h3>
            <p class="text-white leading-relaxed">
              The debate and presentations about each part of the value chain: security, virtualisation, OSS/BSS, chipsets and radio units. Additionally MNO, VC and regulators perspective
            </p>
          </div>
          
          <div class="lg:w-1/3 px-4 mb-6 relative">
            <h3 class="text-white text-xl my-3 font-semibold font-heading text-4xl">
              <count-to
                ref="countPrelegent"
                v-view="viewPrelegentCount"
                :start-val="0"
                :end-val="11"
                :duration="3000"
                :autoplay="false"
                suffix=" Speakers"
              /> 
            </h3>
            <p class="text-white leading-relaxed">
              Top figures from companies leading in the telecommunication revolution. It includes Deutsche Telekom, VMware, Marvel, and many more. Please check the agenda for the full information.
            </p>
          </div>

          <div class="lg:w-1/3 px-4 mb-6 relative">
            <h3 class="text-white text-xl my-3 font-semibold font-heading text-4xl">
              <count-to
                ref="countDebate"
                v-view="viewDebateCount"
                :start-val="0"
                :end-val="1"
                :duration="3000"
                :autoplay="false"
                suffix=" Debate"
              />
            </h3>
            <p class="text-white leading-relaxed">
              Possibility to listen to what key players in the OpenRAN area think about the future and challenges of the networks of the future.
            </p>
          </div>
        </div>

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
            class="absolute w-full h-full opacity-20 object-cover inset-0"
            :src="require('~/assets/img/5GMadetogether_conference_big.jpg')" 
            alt=""
          >
        </picture>
      </section>
    </div>
    
    <div class="container mx-auto px-4">
      <section class="py-12 px-4 text-center">
        <h2 class="text-4xl mb-8 font-semibold font-heading">
          Watch live here
        </h2>
        <div class="mx-auto aspect-w-16 aspect-h-9">
          <a
            v-show="!iframeYoutubeSrc"
            href="https://www.youtube.com/watch?v=K-CbHfv7EqA"
            class="absolute inset-0 z-50"
          >
            <img
              src="http://img.youtube.com/vi/K-CbHfv7EqA/maxresdefault.jpg"
              class="w-full h-full object-cover"
              alt=""
            >
          </a>
          <iframe
            v-view="youtubeUpdateSrc"
            class="mx-auto w-full h-full"
            width="100%"
            height="100%"
            :src="iframeYoutubeSrc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </section>
        
      <section
        id="agenda"
        class="py-12 px-4"
      >
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl text-center mb-6 font-semibold font-heading">
            Agenda
          </h2>

          <ol>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              <time class="time-dash">10:00</time><span>Opening</span>
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              <time class="time-dash">10:10</time><span>Debate<br>
                Discussion moderator:<br>
                Participants:
              </span>
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              <time class="time-dash">11:00</time><span>"OpenRAN equals open ecosystem" – IS-Wireless (<em itemprop="name">Aleksandra Chećko</em>, <em itemprop="name">Artur Chmielewski</em>)</span>
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              VMware
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              Carrier grade OpenRAN - Deutsche Telekom
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              Security
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              Telco Cloud
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              Orchestration in 5G
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              Radio heads ready for OpenRAN
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              The role of chipset in open ecosystems
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              Infrastructure is a king
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              Private networks regulations
            </li>
          </ol>
        </div>
      </section>
        
      <section class="pt-8 px-4 text-center hidden">
        <div class="max-w-2xl mx-auto mb-8">
          <h2 class="text-4xl leading-tight mb-6 font-semibold font-heading">
            Organizatorzy i patroni
          </h2>
          <p class="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>
        <div class="flex flex-wrap -mx-8">
          <div class="w-1/2 md:w-1/6 px-8 mb-8 flex items-center justify-center">
            <img
              src="~/assets/img/ISW_-_logo_kolor.png"
              alt=""
            >
          </div>
          <div class="w-1/2 md:w-1/6 px-8 mb-8 flex items-center justify-center">
            <img
              src="~/assets/img/CP_logo_kolor_3.png"
              alt=""
            >
          </div>
          <div class="w-1/2 md:w-1/6 px-8 mb-8 flex items-center justify-center">
            <img
              src="~/assets/img/PTI.png"
              alt=""
            >
          </div>
          <div class="w-1/2 md:w-1/6 px-8 mb-8 flex items-center justify-center">
            <img
              src="~/assets/img/isb-tech.png"
              alt=""
            >
          </div>
          <div class="w-1/2 md:w-1/6 px-8 mb-8 flex items-center justify-center">
            <img
              src="~/assets/img/narodowe-centrum-badan-i-rozwoju.png"
              alt=""
            >
          </div>
          <div class="w-1/2 md:w-1/6 px-8 mb-8 flex items-center justify-center">
            <img
              src="~/assets/img/telix-pl.png"
              alt=""
            >
          </div>
        </div>
      </section>
    </div>
    
    <section class="relative py-12 px-4 text-center lg:mx-16">
      <div class="relative w-full max-w-2xl mx-auto z-50">
        <h2 class="text-white text-5xl leading-tight font-semibold font-heading mb-4">
          Join the conference
        </h2>
        <a
          class="text-white inline-block py-4 px-8 leading-none bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow"
          href="https://www.tickettailor.com/events/iswireless/518782"
        >REGISTER</a>
      </div>

      <div class="absolute lg:rounded w-full h-full inset-0 z-0 bg-blue-200">
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
            class="absolute lg:rounded w-full h-full inset-0 z-auto object-cover" 
            :src="require('~/assets/img/5GMadetogether_conference_big.jpg')" 
            alt=""
          >
        </picture>
      </div>
    </section>
  </div>
</template>

<script>  
  export default {
    data: function() {
      return {
        iframeYoutubeSrc: '',
        liveURL: 'https://www.youtube.com/embed/K-CbHfv7EqA?controls=0',
      };
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