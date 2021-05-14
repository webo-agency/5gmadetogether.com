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
              Creating future with <span class="block font-medium text-base phone:text-2xl tablet:text-4xl">open ecosystems</span>
            </h1>
            <time datetime="2021-05-27T10:00Z" class="block text-white mb-8 text-base phone:text-base desktop:text-xl font-bold">May 27th, 2021 | 10 am CET</time>
          </header>
          <div class="flex items-start justify-start flex-col tablet:flex-row flex-wrap">
            <a
              class="inline-block py-4 w-full phone:w-auto phone:px-14 tablet:px-8 mr-6 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow text-center mb-4 tablet:mb-0"
              href="https://www.tickettailor.com/events/iswireless/518782"
            >Register</a>
          
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
            /></g></svg>Conference in numbers
          </h2>
        </div>

        <div class="container flex flex-wrap relative z-50">

          <div class="desktop:w-1/3 desktop:pr-4 mb-6 relative">
            <h3 class="text-highlight text-xl my-3 font-semibold font-heading phone:text-4xl">
              <count-to
                ref="countMinute"
                v-view.once="viewMinutCount"
                :start-val="0"
                :end-val="300"
                :duration="3000"
                :autoplay="false"
                suffix=" Minutes"
              />
            </h3>
            <p class="text-white leading-relaxed">
              The debate and presentations about each part of the value chain: security, virtualisation, OSS/BSS, chipsets and radio units. Additionally MNO, VC and regulators perspective
            </p>
          </div>
          
          <div class="desktop:w-1/3 desktop:px-4 mb-6 relative">
            <h3 class="text-highlight text-xl my-3 font-semibold font-heading phone:text-4xl">
              <count-to
                ref="countPrelegent"
                v-view.once="viewPrelegentCount"
                :start-val="0"
                :end-val="12"
                :duration="3000"
                :autoplay="false"
                suffix=" Speakers"
              /> 
            </h3>
            <p class="text-white leading-relaxed">
              Top figures from companies leading the telecommunication revolution. It includes HPE, IBM, CableFree, VMware, Comarch, Tambora and more. Please check the agenda for the full information.
            </p>
          </div>

          <div class="desktop:w-1/3 desktop:pl-4 mb-6 relative">
            <h3 class="text-highlight text-xl my-3 font-semibold font-heading phone:text-4xl">
              <count-to
                class="text-highlight"
                ref="countDebate"
                v-view.once="viewDebateCount"
                :start-val="0"
                :end-val="1"
                :duration="3000"
                :autoplay="false"
                suffix=" Debate"
              />
            </h3>
            <p class="text-white leading-relaxed">
              Meet top experts in the Open RAN area and check what they think about the networks of the future. They will share perspectives of such companies like: Deutsche Telekom, IBM, Marvell, VMware and IS-Wireless.
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
          Watch live here
        </h2>
        <div class="mx-auto aspect-w-16 aspect-h-9 shadow-2xl mb-12">
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
          Speakers at 5G Made Together Conference
        </h2>
        <div class="flex flex-wrap">

          <div class="w-full tablet:w-1/2 desktop:w-1/3 p-8 mb-4 mx-auto border-b tablet:border-b-0">
            <img class="w-32 mx-auto mb-4 rounded-full" :src="require('~/assets/people/Lorcan_Burke.jpg')"  alt="Lorcan Burke">
            <h3 class="text-xl mb-1 font-semibold font-heading">Lorcan Burke</h3>
            <span>Director RAN, VMware</span>
            <p class="mt-4 text-gray-900 leading-relaxed">
              Advisor to many institutions inc. SFI CONNECT research centre on future networks, ESB, Dublin City, Sligo County Council, HSE, Telecom Infra Project. Formerly Chief Commercial Officer at Taoglas Digital Strategy. Was a Founder of ThinkSmarter Analytics, Cisco’s Global CTO for Mobility, Founder of Adaptive Mobile Security, Ericsson CTO for Vodafone, General and Venture Partner for a Swiss VC and held many operational positions at Nortel.
            </p>
          </div>
                    
          <div class="w-full tablet:w-1/2 desktop:w-1/3 mb-4 p-8 tablet:border-l border-b tablet:border-b-0">
            <img class="w-32 mx-auto mb-4 rounded-full" :src="require('~/assets/people/Franz_Seiser.jpg')" alt="Franz Seiser">
            <h3 class="text-xl mb-1 font-semibold font-heading">Franz Seiser</h3>
            <span>Vice President Access Disaggregation Deutsche Telekom AG</span>
            <p class="mt-4 text-gray-900 leading-relaxed">
              Franz in his role is in charge to drive the development and implementation of innovative, flexible and efficient network architectures for DT; he has a very strong focus on open RAN, leading DT’s efforts to develop it towards a competitive deployable solution. Prior to this role, Franz held various management positions in the area of mobile core network, infrastructure cloud and mobile network architecture in DT headquarters.
            </p>
          </div>

          <div class="w-full tablet:w-1/2 desktop:w-1/3 p-8 mb-4 desktop:border-l border-b tablet:border-b-0">
            <img class="w-32 mx-auto mb-4 rounded-full" :src="require('~/assets/people/Stephen_Patrick.jpg')" alt="Stephen Patrick">
            <h3 class="text-xl mb-1 font-semibold font-heading">Stephen Patrick</h3>
            <span>Stephen Patrick is CEO & founder of CableFree: Wireless Excellence.</span>
            <p class="mt-4 text-gray-900 leading-relaxed">
              After studying at Cambridge University, Stephen gained wide-ranging experience in wireless technology and design consultancy. Having founded the company in 1996, Stephen has become well known as pioneer of high capacity wireless communication technology, with several "world first" achievements within the industry. Stephen has co-authored several published academic papers in collaborative academic-industrial projects. CableFree products include 4G & 5G radios and wireless backhaul infrastructure and are deployed in over 85 countries worldwide.
            </p>
          </div>

          <div class="w-full tablet:w-1/2 desktop:w-1/3 p-8 mb-4 tablet:border-l desktop:border-l-0 border-b tablet:border-b-0">
            <img class="w-32 mx-auto mb-4 rounded-full" :src="require('~/assets/people/Simon_Burley.jpg')" alt="Simon Burley">
            <h3 class="text-xl mb-1 font-semibold font-heading">Simon Burley</h3>
            <span>Principal, Emerging Technology</span>
            <p class="mt-4 text-gray-900 leading-relaxed">
              Simon is a new member of the Emerging Technology team within Ofcom, the UK’s independent regulator for communications services. With a career spanning over 20 years working for RAN infrastructure providers and a mobile operator, Simon’s expertise covers the architectural vision, design and deployment of all leading radio access technologies. He now leads the technology workstreams on vendor diversification within Ofcom which includes the SmartRAN Open Network Interoperability Centre (SONIC) - a joint programme of work with the Digital Catapult  
            </p>
          </div>

          <div class="w-full tablet:w-1/2 desktop:w-1/3 mb-4 p-8 desktop:border-l border-b tablet:border-b-0">
            <img class="w-32 mx-auto mb-4 rounded-full" :src="require('~/assets/people/John_Schimpf.jpg')" alt="John Schimpf">
            <h3 class="text-xl mb-1 font-semibold font-heading">John Schimpf</h3>
            <span>John Schimpf is Senior Director, Product Marketing, Wireless Solutions in Marvell’s Processor Business Group.</span>
            <p class="mt-4 text-gray-900 leading-relaxed">
              John is responsible for product management, product marketing and customer and partner relationships for Marvell’s portfolio of LTE and 5G RAN solutions. John joined Marvell by way of the acquisition of Cavium, Inc. Prior to joining Cavium, John held a similar position at Wavesat, Inc., a developer of 4G wireless baseband processors for mobile devices. Over a 25 year career, John has held product management, product marketing and business development positions in semiconductor IP, fabless chip and systems companies, including Silicon Graphics, 3DLabs and Virage Logic. John has a B.S. in Mechanical Engineering from the University of Maine.
            </p>
          </div>

          <div class="w-full tablet:w-1/2 desktop:w-1/3 mb-4 p-8 tablet:border-l">
            <img class="w-32 mx-auto mb-4 rounded-full" :src="require('~/assets/people/Lukasz_Mendyk.jpg')" alt="Łukasz Mendyk">
            <h3 class="text-xl mb-1 font-semibold font-heading">Łukasz Mendyk</h3>
            <span>Senior Solution Manager, Comarch</span>
            <p class="mt-4 text-gray-900 leading-relaxed">
              Łukasz specializes in solutions based on the concept of intent-driven fulfillment and orchestration, as well as on innovative concepts such as software-defined networking (SDN), network function virtualization (NFV) and end-to-end orchestrion of 5G networks with O-RAN and based on distributed cloud
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
          Agenda
        </h2>

        <ol>
          <li
            v-view.once
            class="animate-border flex flex-row flex-wrap border-b mb-2 pb-2 text-gray-900 view-in"
          >
            <time datetime="2021-05-27T10:00Z" class="time-dash">10:00 AM</time>
            <span class="uppercase">Opening</span>
          </li>
          <li
            v-view.once
            class="animate-border flex flex-row flex-wrap tablet:flex-nowrap border-b mb-2 pb-2 text-gray-900 view-in"
          >
            <time class="time-dash">10:05 AM</time>
            <span class="block mb-1">Cyber security aspects in Open RAN - The Chancellery of the <strong>Prime Minister of Poland</strong>, <em class="font-bold whitespace-nowrap" itemprop="name">Robert Kośla</em>, Director of Department of Cybersecurity</span>
          </li>
          <li
            v-view.once
            class="animate-border flex flex-row flex-wrap border-b mb-2 pb-2 text-gray-900 view-in"
          >
            <time class="time-dash">10:10 AM</time>
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
            class="animate-border flex flex-row flex-wrap border-b mb-2 pb-2 text-gray-900 view-in"
          >
            <time datetime="2021-05-27T11:00Z" class="time-dash">11:00 AM</time>
            <span class="block mb-1 uppercase">Conference</span>
            <div class="ml-0 phablet:ml-28">
              <ol class="list-disc ml-6">
                <li class="mb-2 phablet:mb-0">
                  Open Networks & Vendor Diversification in the UK - Ofcom - <em class="font-bold whitespace-nowrap" itemprop="name">Simon Burley</em>, Principal, Emerging Technology
                </li>
                <li class="mb-2 phablet:mb-0">
                  Accelerating OpenRAN ecosystem - VMware - <em class="font-bold whitespace-nowrap" itemprop="name">Lorcan Burke</em>, Director RAN
                </li>
                <li class="mb-2 phablet:mb-0">
                  Telco Cloud - The importance of a horizontal platform - IBM - <em class="font-bold whitespace-nowrap" itemprop="name">Zygmunt A. Lozinski</em>, Senior Technical Staff Member, Master Inventor, Quantum Ambassador
                </li>
                <li class="mb-2 phablet:mb-0">
                  The role of chipset in open ecosystems - Marvell - <em class="font-bold whitespace-nowrap" itemprop="name">John Schimpf</em>, Senior Director, Product Marketing
                </li>
                <li class="mb-2 phablet:mb-0">
                  Building next generation edge - Tambora Systems - <em class="font-bold whitespace-nowrap" itemprop="name">Anand Uppili</em>, CEO
                </li>
                <li class="mb-2 phablet:mb-0">
                  OpenRAN 2.0 - IS-Wireless - <em class="font-bold whitespace-nowrap" itemprop="name">Sławomir Pietrzyk</em>, CEO
                </li>
                <li class="mb-2 phablet:mb-0">
                  Radio heads ready for OpenRAN - Cablefree - <em class="font-bold whitespace-nowrap" itemprop="name">Stephen Patrick</em>, CEO
                </li>
                <li class="mb-2 phablet:mb-0">
                  Telecommunication of the future - the VC perspective - Bitspiration Booster - <em class="font-bold whitespace-nowrap" itemprop="name">Wojciech Burkot</em>, CEO
                </li>
                <li class="mb-2 phablet:mb-0">
                  Digitalising Industry: 5G Network orchestration with O-RAN and Edge Computing for industry verticals - Comarch - <em class="font-bold whitespace-nowrap" itemprop="name">Łukasz Mendyk</em>, Senior Solution Manager
                </li>                  
                <li class="mb-2 phablet:mb-0">
                  OpenRAN ready servers - HPE
                </li>
                <li class="mb-2 phablet:mb-0">
                  Security in OpenRAN - to be announced soon
                </li>
                <li>
                  Infrastructure is a king - to be announced soon
                </li>
                <li class="mb-2 phablet:mb-0">
                  Private networks regulations - European regulator - to be announced soon
                </li>
              </ol>
            </div>
          </li>
          <li
            v-view.once
            class="flex flex-row flex-wrap mb-2 pb-2 text-gray-900"
          >
            <time datetime="2021-05-27T15:00Z" class="time-dash">3:00 PM</time>
            <span class="uppercase">Closing remarks</span>
          </li>
        </ol>
      </div>
    </section>

    <section class="relative py-24 px-4 text-center desktop:mx-16">
      <div class="container relative w-full mx-auto z-50">
        <h2 class="text-white text-5xl leading-tight font-semibold font-heading mb-4">
          Join the conference
        </h2>
        <a
          class="text-white inline-block py-4 px-8 leading-none bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow"
          href="https://www.tickettailor.com/events/iswireless/518782"
        >REGISTER</a>
      </div>

      <div class="absolute desktop:rounded-t w-full h-full inset-0 z-0 bg-blue-200">
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
            class="absolute desktop:rounded-t w-full h-full inset-0 z-auto object-cover" 
            :src="require('~/assets/img/5GMadetogether_conference_big.jpg')" 
            alt=""
          >
        </picture>
      </div>
    </section>

    <section class="relative py-8 px-4 text-center desktop:mx-16 bg-gray-100 rounded-b">
      <div class="container flex flex-wrap justify-around">
        <div class="my-2">
          <strong>Contact organisers:</strong> <a href="mailto:r.sanecki@is-wireless.com">r.sanecki@is-wireless.com</a>
        </div>
        <div class="my-2">
          <strong>Press contact:</strong> <a href="mailto:media@is-wireless.com"> media@is-wireless.com</a>
        </div>
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