<template>
  <div class="w-full">
    <PageSection id="heroBanner">
      <BlockBanner />
    </PageSection>

    <PageSection id="aboutConference">
      <AboutConference />
    </PageSection>

    <PageSection id="topicsCovered">
      <TopicsCovered
        :topicsData="[
          {
            title: 'Wireless network management',
            description:
              'e.g. RAN Disaggregation, Micro-service Oriented Architecture, Telemetry Aggregation and Processing, Multi-agent Management, Big Data Analytics, Zero-touch Service Management, etc.'
          },
          {
            title: 'ML/AI for future wireless networks',
            description:
              'e.g. Swarm Intelligence, Event Prediction, Distributed Learning, Federated Learning, Meta-learning, etc'
          },
          {
            title: 'Emerging technologies',
            description:
              'e.g. Cell-free, Large Scale mMIMO, THz transmission, Optical-wireless, HW acceleration, Molecular Communication and Internet of Nano-Things, Large Dimensional Networks, etc.'
          },
          {
            title: 'Edge and cloud RAN enablers ',
            description:
              'e.g. Multi-cloud Orchestration, Telco-compatible Virtualization, MEC, etc.'
          },
          {
            title: 'Energy efficiency',
            description:
              'e.g. Energy harvesting, SWIPT, Green Communication, etc.'
          },
          {
            title: 'Security',
            description:
              'Security at the Edge, Quantum Communication, Blockchain, DLT, etc.'
          },
          {
            title: 'Use-cases',
            description:
              'e.g. Zero-touch Network, Internet of Everything, O-RAN use-cases, etc.'
          },
          {
            title:
              'Distributed Network Management Orchestration for Next-Generation Sustainability.',
            description: '5G Made Together'
          }
        ]"
      />
    </PageSection>

    <PageSection id="conferenceNumbers">
      <ConferenceNumbers />
    </PageSection>

    <PageSection id="videoPlayer">
      <YoutubePlayer />
    </PageSection>

    <PageSection id="speakersSwiper">
      <KeynoteSpeakers />
      <SwiperSpeakers
        :speakersData="[
          {
            // img: 'wp-content-uploads-2021-09-pedro-merino-300x300.jpg',
            img: '/img/speakers/pedro-merino-300x300.jpg',
            // img:
            //   '../assets/img/speakers/wp-content-uploads-2021-09-pedro-merino-300x300.jpg',
            name: 'Pedro Merino',
            academicTitle: 'Professor',
            experience: 'University of Malaga, Spain',
            shortDesc:
              'Dr. Pedro Merino is professor at the University of Malaga (UMA). His research interests are new-generation Internet, 5G/6G networks and automated methods for software reliability.',
            fullDesc:
              'Dr. Pedro Merino is professor at the University of Malaga (UMA). His research interests are new-generation Internet, 5G/6G networks and automated methods for software reliability. He has led more than 30 national and international research projects, most of them in collaboration with industry. He leads a 4G/5G outdoor testbed at Malaga city. Pedro Merino was the chair of the ERCIM WG on Formal Methods for Industrial Critical Systems, and member of the Executive Committee of ERCIM. He represents University of Malaga in Networld2020 ETP and 5G Industrial  Association. Pedro Merino is coordinator of EuWirelss project, technical manager of 5GENESIS project and Director of ITIS Software institute at University of Malaga.'
          },
          {
            img: '/img/speakers/ana-g-armada-300x300.jpg',
            name: 'Ana García Armada',
            academicTitle: 'Professor',
            experience: 'University Carlos III of Madrid, Spain',
            shortDesc:
              'Ana Garcia Armada is a Professor at University Carlos III of Madrid (UC3M), Spain. She has published more than 150 referred papers about wireless communications and she holds four patents.',
            fullDesc:
              'Ana Garcia Armada is a Professor at University Carlos III of Madrid (UC3M), Spain. She has published more than 150 referred papers about wireless communications and she holds four patents. She serves on the editorial board of IEEE Trans. on Communications and IEEE Open Journal of the Communications Society. She is Member at Large of the Board of Governors and Director of Online Content of the IEEE Communications Society (ComSoc). She has received awards from UC3M, third place Bell Labs Prize 2014, and outstanding service award from the IEEE ComSoc Signal Processing and Communications Electronics technical committee and from the IEEE ComSoc Women in Communications Engineering standing committee.'
          },
          {
            img: '/img/speakers/sofie-pollin-300x300.jpeg',
            name: 'Sofie Pollin',
            academicTitle: 'Professor',
            experience: 'KU Leuven, Belgium',
            shortDesc:
              'Sofie Pollin is professor at KU Leuven focusing on wireless communication systems. Before that, she worked at imec and UC Berkeley.',
            fullDesc:
              'Sofie Pollin is professor at KU Leuven focusing on wireless communication systems. Before that, she worked at imec and UC Berkeley. Her research centers around wireless networks that require networks that are ever more dense, heterogeneous, battery powered and spectrum constrained. She pioneered a 5G testbed for distributed Massive MIMO at KU Leuven, and is now leading the way towards 6G tests in multiple large EU projects.'
          },
          {
            img: '/img/speakers/walid-saad-300x300.jpeg',
            name: 'Walid Saad',
            academicTitle: 'Professor',
            experience: 'Virginia Tech, USA',
            shortDesc:
              'Walid Saad received his Ph.D from the University of Oslo in 2010.',
            fullDesc:
              'Walid Saad received his Ph.D from the University of Oslo in 2010. He is a Professor at the Department of Electrical and Computer Engineering at Virginia Tech, where he leads the Network sciEnce, Wireless, and Security (NEWS) laboratory. His research interests include wireless networks, machine learning, game theory, security, unmanned aerial vehicles, cyber-physical systems, and network science. He was the author/co-author of ten conference best paper awards. He is the recipient of the 2015 Fred W. Ellersick Prize from the IEEE Communications Society, and was a co-author of the 2019 and 2021 IEEE Communications Society Young Author Best Paper. Dr. Saad is a Fellow of the IEEE.'
          },
          {
            img: '/img/speakers/osvaldo-simeone-300x300.jpeg',
            name: 'Osvaldo Simeone',
            academicTitle: 'Professor',
            experience: `King's College London, UK`,
            shortDesc: `Osvaldo Simeone is a Professor of Information Engineering with the Centre for Telecommunications Research at the Department of Engineering of King's College London, where he directs the King's Communications, Learning and Information Processing lab.`,
            fullDesc: `Osvaldo Simeone is a Professor of Information Engineering with the Centre for Telecommunications Research at the Department of Engineering of King's College London, where he directs the King's Communications, Learning and Information Processing lab. His research interests include information theory, machine learning, wireless communications, and neuromorphic computing. He currently serves in the editorial board of the IEEE Signal Processing Magazine and is the chair of the Signal Processing for Communications and Networking Technical Committee of the IEEE Signal Processing Society. He is a co-author of two monographs, two edited books published by Cambridge University Press, and more than 150 research journal papers. He is a Fellow of the IET and of the IEEE.`
          },
          {
            img: '/img/speakers/dmitry-lakontsev-300x300.jpeg',
            name: 'Dmitry Lakontsev',
            academicTitle: 'Professor',
            experience: 'Skolkovo Institute of Science and Technology, Russia',
            shortDesc:
              'Dr. Dmitry Lakontsev is associate professor of the practice at Skolkovo Institute of Science and Technology (Skoltech), an expert in IT area, main specialization - wireless communications and IoT.',
            fullDesc:
              'Dr. Dmitry Lakontsev is associate professor of the practice at Skolkovo Institute of Science and Technology (Skoltech), an expert in IT area, main specialization - wireless communications and IoT. He is the director of the new Project center Next-generation wireless and IoT (CNGW) at Skoltech. The main scope of the center is 5G/6G R&D and wireless technology perspective studies. Skoltech has a private outdoor 5G pilot zone on the territory of Innovation center Skolkovo (more than 2 square km) and 5G Open RAN laboratory. The CNGW is one of the 7 sites hosting O-RAN PlugFest 2021 and is a member of O-RAN Alliance, TIP, and 3GPP. Skoltech is now developing full-stack software for O-DU and O-CU, and software and hardware for O-RU band 78/79. Dmitry is a highly qualified manager with both academic and industry backgrounds, with extensive experience in building high-tech R&D teams, research commercialization, and technology transfer.'
          },
          {
            img: '/img/speakers/adam-flizikowski-300x300.jpeg',
            name: 'Adam Flizikowski',
            academicTitle: 'Head of R&D',
            experience: 'IS-Wireless, Poland',
            shortDesc:
              'Adam Flizikowski holds the position of R&D expert within the company and leads the R&D team.',
            fullDesc:
              'Adam Flizikowski holds the position of R&D expert within the company and leads the R&D team. He has 20 years of commercial experience in wireless systems (incl. LTE, WiMAX, and recently also 5G) and especially topics of RRM techniques (admission, congestion). He is leading the research team of ISRD, he also manages the ECSEL JU project called BRAINE (AI/ML supported micro edge DC) where he deals with workload prediction/placement. He holds MSc from telecommunications and currently pursues his PhD on admission control in future wireless systems. He is author (and co-author) of more than 70 papers from different topics around wireless communications, cyber security and adaptive multimedia systems.'
          }
        ]"
      />
    </PageSection>

    <PageSection id="timetable">
      <BlockTimetable />
    </PageSection>

    <PageSection id="cta">
      <BlockCta />
    </PageSection>
  </div>
</template>

<script>
import AboutConference from "~/components/block-about-conference.vue";
import BlockBanner from "../components/block-banner.vue";
import TopicsCovered from "../components/block-topics-covered.vue";
import ConferenceNumbers from "../components/block-conference-numbers.vue";
import YoutubePlayer from "../components/block-video-player.vue";
import KeynoteSpeakers from "../components/block-keynote-speakers.vue";
import SwiperSpeakers from "../components/block-swiper-speakers.vue";
import BlockTimetable from "../components/block-timetable.vue";
import BlockCta from "../components/block-cta.vue";
import PageSection from "~/components/page-section.vue";

export default {
  name: "FrontPage",
  filters: {
    dateConvert: function(time) {
      if (!time) return "";
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      time[3] = " "; //remove seconds
      return time.join("");
    },
    dateStandardConvert: function(time) {
      if (!time) return "";
      return time.concat("2021-05-27T", time.slice(0, -3), "Z");
    }
  },

  async fetch({ app, store }) {
    await app.$wp
      .namespace("wuxt")
      .v1()
      .frontPage()
      .then(function(data) {
        store.commit("homepage/save", data);
      });
  },
  components: {
    AboutConference,
    BlockBanner,
    TopicsCovered,
    ConferenceNumbers,
    YoutubePlayer,
    KeynoteSpeakers,
    SwiperSpeakers,
    BlockTimetable,
    BlockCta,
    PageSection
  }
};
</script>

<style lang="postcss" scoped></style>
