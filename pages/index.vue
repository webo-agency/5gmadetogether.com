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
            
            <h1 class="mb-10 text-white leading-relaxed font-light uppercase text-2xl">
              Creating future with <span class="block font-medium text-4xl">open ecosystems</span>
            </h1>
            <time datetime="2021-05-27T10:00Z" class="block text-white mb-8 text-xl font-bold">May 27th, 2021 | 10 am CET</time>
          </header>
          <div class="flex flex-row flex-wrap">
            <a
              class="inline-block py-4 px-8 mr-6 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow"
              href="https://www.tickettailor.com/events/iswireless/518782"
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
              <ul class="mb-8 text-gray-400 leading-relaxed list-disc ml-4">
                <li>How is the 5G network being developed around the world?</li>
                <li>Where does the process take place seamlessly, and where is it delayed?</li>
                <li>How secure can the 5G network become? Why is Open RAN the model of the future?</li>
                <li>Is the telecommunications market ready for the upcoming change?</li>
                <li>Finally, how could the 5G development decision-makers be persuaded to implement the open network model?</li>
              </ul>
              <p class="mb-8 text-gray-400 leading-relaxed">
                These are some of the questions to be answered by ICT companies’ experts from around the world during discussion panels and lectures hosted at the international „5G Made Together – creating future with open ecosystems” conference.
                <br>
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
    <div class="py-24 px-4 text-left relative lg:mx-16">
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
              Top figures from companies leading in the telecommunication revolution. It includes leading MNOs, VMware, Marvel, and many more. Please check the agenda for the full information.
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
              class="absolute w-full object-cover h-full"
              :src="require('~/assets/img/network_coference_5g_made_together_is-wireless_2021.jpg')" 
              alt=""
            >
          </picture>
        </div>
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
            href="https://www.youtube.com/channel/UCazzOCF3mycmFp-6vKt9Myg"
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
              <time class="time-dash">10:00</time>
              <span>Opening</span>
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              <time class="time-dash">10:10</time>
              <span>Debate<br>
                Participants: Marvel, IBM, VMware, EU telecommunications regulator, IS-Wireless<br>
                Moderator: <em itemprop="name">Petar Popovski</em>, Aalborg University in Denmark<br>
              </span>
            </li>
            <li
              v-view.once
              class="animate-border flex flex-row border-b mb-2 pb-2 text-gray-900"
            >
              <time class="time-dash">11:00</time>
              <span>Conference<br>
                <ol class="list-disc ml-6">
                  <li>
                    Deutsche Telekom
                  </li>
                  <li>
                    OpenRAN 2.0 - IS-Wireless - <em itemprop="name">Sławomir Pietrzyk</em>, CEO
                  </li>
                  <li>
                    Radio heads ready for OpenRAN - Cablefree - <em itemprop="name">Stephen Patrick</em>, CEO
                  </li>
                  <li>
                    The role of chipset in open ecosystems - Marvel - <em itemprop="name">John Schimpf</em>, Senior Director, Product Marketing
                  </li>
                  <li>
                    Telecommunication of the future - the VC perspective - Bitspiration Booster - <em itemprop="name">Wojciech Burkot</em>, CEO
                  </li>
                  <li>
                    Accelerating OpenRAN ecosystem - VMware - <em itemprop="name">Lorcan Burke</em>, Director RAN
                  </li>
                  <li>
                    Building next generation edge - Tambora Systems - <em itemprop="name">Anand Uppili</em>, CEO
                  </li>
                  <li>
                    Telco Cloud - The importance of a horizontal platform - IBM - <em itemprop="name">Zygmunt A. Lozinski</em>, Senior Technical Staff Member, Master Inventor, Quantum Ambassador
                  </li>
                  <li>
                    OpenRAN ready servers - HPE
                  </li>
                  <li>
                    Orchestration in 5G - Comarch
                  </li>
                  <li>
                    Security in OpenRAN - to be announced soon
                  </li>
                  <li>
                    Carrier grade OpenRAN - MNO - to be announced soon
                  </li>
                  <li>
                    Infrastructure is a king - to be announced soon
                  </li>
                  <li>
                    Private networks regulations - European regulator - to be announced soon
                  </li>
                </ol>
              </span>
            </li>
          </ol>
        </div>
      </section>
        
      <!-- <section class="pt-8 px-4 text-center hidden">
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
      </section> -->
    </div>

    <section class="relative py-24 px-4 text-center lg:mx-16">
      <div class="relative w-full max-w-2xl mx-auto z-50">
        <h2 class="text-white text-5xl leading-tight font-semibold font-heading mb-4">
          Join the conference
        </h2>
        <a
          class="text-white inline-block py-4 px-8 leading-none bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow"
          href="https://www.tickettailor.com/events/iswireless/518782"
        >REGISTER</a>
      </div>

      <div class="absolute lg:rounded-t w-full h-full inset-0 z-0 bg-blue-200">
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
            class="absolute lg:rounded-t w-full h-full inset-0 z-auto object-cover" 
            :src="require('~/assets/img/5GMadetogether_conference_big.jpg')" 
            alt=""
          >
        </picture>
      </div>
    </section>

    <section class="relative py-8 px-4 text-center lg:mx-16 bg-gray-100 flex flex-wrap justify-around rounded-b">
      <div class="block my-2">
        <strong>Contact organisers:</strong> <a href="mailto:r.sanecki@is-wireless.com">r.sanecki@is-wireless.com</a>
      </div>
      <div class="block my-2">
        <strong>Press contact:</strong> <a href="mailto:media@is-wireless.com"> media@is-wireless.com</a>
      </div>
    </section>
  </div>
</template>

<script>  
  export default {
    data: function() {
      return {
        iframeYoutubeSrc: '',
        liveURL: 'https://www.youtube.com/embed/zFb9grZxnXE',
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