<template>
  <div class="w-full">
    <PageSection id="heroBanner">
      <BlockBanner />
    </PageSection>

    <PageSection id="aboutConference">
      <EffectAppear>
        <AboutConference />
      </EffectAppear>
    </PageSection>

    <PageSection id="topicsCovered">
      <!-- <EffectAppear> -->
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
      <!-- </EffectAppear> -->
    </PageSection>

    <PageSection id="conferenceNumbers">
      <EffectAppear>
        <ConferenceNumbers />
      </EffectAppear>
    </PageSection>

    <PageSection id="videoPlayer">
      <EffectAppear>
        <YoutubePlayer />
      </EffectAppear>
    </PageSection>

    <PageSection id="speakersSwiper">
      <EffectAppear>
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
                'Walid Saad received his Ph.D from the University of Oslo in 2010. He is a Professor at the Department of Electrical and Computer Engineering at Virginia Tech.',
              fullDesc:
                'Walid Saad received his Ph.D from the University of Oslo in 2010. He is a Professor at the Department of Electrical and Computer Engineering at Virginia Tech, where he leads the Network sciEnce, Wireless, and Security (NEWS) laboratory. His research interests include wireless networks, machine learning, game theory, security, unmanned aerial vehicles, cyber-physical systems, and network science. He was the author/co-author of ten conference best paper awards. He is the recipient of the 2015 Fred W. Ellersick Prize from the IEEE Communications Society, and was a co-author of the 2019 and 2021 IEEE Communications Society Young Author Best Paper. Dr. Saad is a Fellow of the IEEE.'
            },
            {
              img: '/img/speakers/osvaldo-simeone-300x300.jpeg',
              name: 'Osvaldo Simeone',
              academicTitle: 'Professor',
              experience: `King's College London, UK`,
              shortDesc: `Osvaldo Simeone is a Professor of Information Engineering with the Centre for Telecommunications Research at the Department of Engineering of King's College London.`,
              fullDesc: `Osvaldo Simeone is a Professor of Information Engineering with the Centre for Telecommunications Research at the Department of Engineering of King's College London, where he directs the King's Communications, Learning and Information Processing lab. His research interests include information theory, machine learning, wireless communications, and neuromorphic computing. He currently serves in the editorial board of the IEEE Signal Processing Magazine and is the chair of the Signal Processing for Communications and Networking Technical Committee of the IEEE Signal Processing Society. He is a co-author of two monographs, two edited books published by Cambridge University Press, and more than 150 research journal papers. He is a Fellow of the IET and of the IEEE.`
            },
            {
              img: '/img/speakers/dmitry-lakontsev-300x300.jpeg',
              name: 'Dmitry Lakontsev',
              academicTitle: 'Professor',
              experience:
                'Skolkovo Institute of Science and Technology, Russia',
              shortDesc:
                'Dr. Dmitry Lakontsev is associate professor of the practice at Skolkovo Institute of Science and Technology (Skoltech), an expert in IT area, main specialization - wireless communications and IoT.',
              fullDesc:
                'Dr. Dmitry Lakontsev is associate professor of the practice at Skolkovo Institute of Science and Technology (Skoltech), an expert in IT area, main specialization - wireless communications and IoT. He is the director of the new Project center Next-generation wireless and IoT (CNGW) at Skoltech. The main scope of the center is 5G/6G R&D and wireless technology perspective studies. Skoltech has a private outdoor 5G pilot zone on the territory of Innovation center Skolkovo (more than 2 square km) and 5G Open RAN laboratory. The CNGW is one of the 7 sites hosting O-RAN PlugFest 2021 and is a member of O-RAN Alliance, TIP, and 3GPP. Skoltech is now developing full-stack software for O-DU and O-CU, and software and hardware for O-RU band 78/79. Dmitry is a highly qualified manager with both academic and industry backgrounds.'
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
            },
            {
              img: '/img/speakers/md-arifur-Rahman.webp',
              name: 'Md Arifur Rahman',
              academicTitle: 'R&D Expert',
              experience: 'IS-Wireless, Poland',
              shortDesc:
                'Md Arifur Rahman is a R&D Expert working in Is-Wireless, Poland. Focusing on solving the radio resource management (RRM) problems of future wireless networks.',
              fullDesc:
                'Md Arifur Rahman is a R&D Expert working in Is-Wireless, Poland. Focusing on solving the radio resource management (RRM) problems of future wireless networks. Currently, he is team leader of a H2020 project called MARSAL. He holds a PhD degree in Electrical Engineering from the University of Ulsan, South Korea in 2019. Before he joins in ISRD, he works as a postdoctoral researcher at CentraleSupelec, Campus of Rennes, France and contribute in a ANR funded Enhanced Physical Layer for Cellular IoT (EPHYL) project and develop radio resource management algorithm for multi-cell NB-IoT network scenario. He was a co-supervisor of Master students in the area of cooperative relaying in NOMA techniques with 2 years of experience during his PhD degree. His current research interests include cell-free mMIMO, cloud computing in 5G networks, multi-access edge computing, virtual radio access networks, AI application in wireless communications, digital twins, and emerging technologies in wireless communications.'
            },
            {
              img: '/img/speakers/sherif-sedkey.webp',
              name: 'Sherif Sedkey',
              academicTitle: 'VWware, Finland',
              experience: 'IS-Wireless, Poland',
              shortDesc:
                'Telco Cloud RAN Technical Specialist- EMEA at VMware. Based in Espoo Finland. I started my career in 2000 at Vodafone Egypt before joining Motorola and then Nokia Networks.',
              fullDesc:
                'Telco Cloud RAN Technical Specialist- EMEA at VMware. Based in Espoo Finland. I started my career in 2000 at Vodafone Egypt before joining Motorola and then Nokia Networks. I held several positions as RAN Architect, RAN solutions Pre-sales across Nordic, Europe, Middle East, Africa & South-East Asia. I hold a bachelor’s degree in Communication & Electronics Engineering and is currently doing a part-time master’s degree in Business technologies.'
            },
            {
              img: '/img/speakers/robert-gdowski.webp',
              name: 'Robert Gdowski',
              academicTitle: 'Senior researcher',
              experience: 'IS-Wireless, Poland',
              shortDesc:
                'Robert currently works in IS-Wireless as a Senior R&D Engineer dealing with Network Function Virtualization and Orchestration topics.',
              fullDesc:
                'Robert currently works in IS-Wireless as a Senior R&D Engineer dealing with Network Function Virtualization and Orchestration topics. Previously he worked as a researcher at Industrial Technology Research Institute (ITRI) in Taiwan, focusing on architectural convergence of MEC, NFV and MANO systems. Robert obtained his Ph.D. in Electrical Engineering from National Chiao Tung University. His research interests include System Virtualization, NFV, MANO, O-RAN RIC, MEC and distributed networks.'
            },
            {
              img: '/img/speakers/patrycja-sokalska-pomacho.webp',
              name: 'Patrycja Sokalska-Pomacho',
              academicTitle: 'Head of Sales',
              experience: 'Microsoft, Poland',
              shortDesc:
                'Head of Sales in Microsoft/Azure for Operators team responsible for CEE region. Over 20 years experience in international high-tech B2B companies including Nokia and Affirmed Networks.',
              fullDesc:
                'Head of Sales in Microsoft/Azure for Operators team responsible for CEE region. Over 20 years experience in international high-tech B2B companies including Nokia and Affirmed Networks with focus on Sales management, operations management, marketing, pricing strategies and global projects management.'
            },
            {
              img: '/img/speakers/jeremy-foy.webp',
              name: 'Jeremy Foy',
              academicTitle: '5G & Network Industry',
              experience: 'IBM Consulting, Hungary',
              shortDesc:
                'Jeremy is an experienced telecommunications expert with a unique blend of technical acumen and business leadership to help transform carrier outcomes.',
              fullDesc:
                'Jeremy is an experienced telecommunications expert with a unique blend of technical acumen and business leadership to help transform carrier outcomes. He leads Business Development for IBM Consulting’s 5G and Network Transformation Unit. As a thought leader, Jeremy partners with open-minded clients to help drive innovation to achieve greater success. Working for both Fortune-500 firms and start-ups, he started his career in business operations and network services. As 3G launched, Jeremy began working across the network including transmission, NOC management, services, and open- networking.'
            },
            {
              img: '/img/speakers/raimo-kantola.webp',
              name: 'Raimo Kantola',
              academicTitle: 'Professor',
              experience: 'Aalto University, Finland',
              shortDesc:
                'Raimo Kantola is a tenured professor of Networking Technology at Aalto, Department of Communications and Networking.',
              fullDesc:
                'Raimo Kantola is a tenured professor of Networking Technology at Aalto, Department of Communications and Networking. After years in telecom industry, he graduated with Doctor of Technology degree in 1995 and joined Helsinki University of Technology in 1996 to become a professor. He has been Principal Investigator in many research projects on Internet and mobile networking, including 5G. Prof. Kantola’s recent research has been in Software Defined Networking, Network and System Security, Trust and Green transformation.'
            },
            {
              img: '/img/speakers/ian-goetz.webp',
              name: 'Ian Goetz',
              academicTitle: 'Network Architect',
              experience: 'Dell Technologies, UK',
              shortDesc:
                'Ian is a Network Architect in the Dell Technologies, Telecom Systems Business.',
              fullDesc:
                'Ian is a Network Architect in the Dell Technologies, Telecom Systems Business. He has 34 years’ experience in the mobile communications industry across operator, vendor, consulting and research roles starting in BT Research Laboratories and followed by BT Cellnet, Tellabs, IBM, Motorola, Aircom International, Juniper Networks and now Dell Technologies. He is currently working with the Dell Technologies PLM and Engineering team as well as customers, on ORAN and Telco & Edge Cloud solutions and transformation in 5G.'
            },
            {
              img: '/img/speakers/john-vardakas.webp',
              name: 'John Vardakas',
              academicTitle: 'Senior Researcher',
              experience: 'IQUADRAT, Spain',
              shortDesc:
                'John S. Vardakas received the Dipl.-Eng. in Electrical Computer Engineering from the Democritus University of Thrace, Greece, in 2004 and his Ph.D from the Electrical Computer Engineering Dept., University of Patras, Greece in 2012.',
              fullDesc:
                'John S. Vardakas received the Dipl.-Eng. in Electrical Computer Engineering from the Democritus University of Thrace, Greece, in 2004 and his Ph.D from the Electrical Computer Engineering Dept., University of Patras, Greece in 2012. He has authored more than 40 journal articles and 70 conference articles, while he has participated in more than 15 competitive research programs. His research interests include performance analysis and simulation of communication networks and smart grids. He is a senior member of the IEEE and a member of the Technical Chamber of Greece.'
            },
            {
              img: '/img/speakers/tomasz-mach.webp',
              name: 'Tomasz Mach',
              academicTitle: 'Staff Engineer',
              experience: 'Samsung R&D Institute UK',
              shortDesc:
                'Tomasz holds a PhD in mobile communications from the University of Surrey UK with almost 20 years of experience in the industry.',
              fullDesc:
                'Tomasz holds a PhD in mobile communications from the University of Surrey UK with almost 20 years of experience in the industry. It includes 3G software development, 4G systems engineering, technical marketing, pre-sales and standards development including 3GPP, ETSI, 5GAA and O-RAN. Before joining Samsung R&D UK in 2015, he worked at Orange, Motorola, Nokia, Blackberry and Cisco. He contributed to EU funded 5G R&D projects and co-authored ‘5G System Design: Architectural and Functional Considerations and Long Term Research’ book, many patents, standards contributions and research papers.'
            },
            {
              img: '/img/speakers/wojciech-burakowski.webp',
              name: 'Wojciech Burakowski',
              academicTitle: 'Professor',
              experience: 'Warsaw University of Technology, Poland',
              shortDesc:
                'Wojciech Burakowski is Full Professor position at the Institute of Telecommunications, Warsaw University of Technology and at the National Institute of Telecommunications. He leads the AAI research group (aai.tele.pw.edu.pl). Since 1990 he has been involved in several COST and EU Framework Projects.',
              fullDesc:
                'He is a member of Telecommunication Section of the Polish Academy of Sciences. He was a chairman and a member of many technical programme committees of national and international conferences. He is the author or co-author of about 250 papers published in books, international and national journals and conference proceedings and about 80 technical reports. He supervised 16 Ph.D. dissertations. His research areas include networks techniques for the Internet, (ATM, IP QoS, Future Internet), heterogeneous networks (fixed and wireless), network architectures, clouds (including MEC), traffic control, simulation techniques, network mechanisms and algorithms, and recently designing wide area research networks for 5G.'
            },
            {
              img: '/img/speakers/janez-sterle.webp',
              name: 'Janez Sterle',
              academicTitle: 'Founder and the CEO',
              experience: 'INTERNET INSTITUTE, Slovenia',
              shortDesc:
                'Dr. Janez Sterle is Founder and the CEO of the INTERNET INSTITUTE.',
              fullDesc:
                'Dr. Janez Sterle is Founder and the CEO of the INTERNET INSTITUTE. His main area of technical work concerns network and services design, planning and implementation in production networks for 4G/5G systems, NATO and PPDR enabled tactical telecommunication system. He holds various U.S. patents in the field of mobile systems and he has an established track record of H2020 research and development and production-grade projects in various industrial sectors. He cooperates closely with the respective industries, practitioners, regulatory, and legislative bodies on strategic and technical levels.'
            },
            {
              img: '/img/speakers/viktor-melnyk.webp',
              name: 'Viktor Melnyk',
              academicTitle: 'Professor',
              experience: 'John Paul II Catholic University of Lublin, Poland',
              shortDesc:
                'Viktor Melnyk is a professor at the Institute of Mathematics, IT and Landscape Architecture, John Paul II Catholic University of Lublin.',
              fullDesc:
                'Viktor Melnyk is a professor at the Institute of Mathematics, IT and Landscape Architecture, John Paul II Catholic University of Lublin. He was awarded the academic degrees of Philosophy Doctor in 2004, and Doctor of Technical Sciences in 2013. He has scientific, academic and hands-on experience in the field of computer systems research and design, computer data protection, cryptographic processors design and implementation, wireless sensor network security. He contributed to IP Cores design methodology and high-performance reconfigurable computer systems design methodology.'
            },
            {
              img: '/img/speakers/lukasz-mendyk.webp',
              name: 'Łukasz Mendyk',
              academicTitle: '5G & Network Industry',
              experience: 'Comarch, Poland',
              shortDesc:
                'Łukasz specializes in solutions based on the concept of intent-driven fulfillment and orchestration.',
              fullDesc:
                'Łukasz specializes in solutions based on the concept of intent-driven fulfillment and orchestration, as well as on innovative concepts such as software-defined networking (SDN), network function virtualization (NFV) and end-to-end orchestrion of 5G networks with O-RAN and based on distributed cloud.'
            },
            {
              img: '/img/speakers/arturas-medeisis.webp',
              name: 'Arturas Medeisis',
              academicTitle: 'Professor',
              experience: 'Vilnius Gediminas Technical University, Lithuania',
              shortDesc:
                'Arturas Medeisis received his Ph.D. in Spectrum Management from the Kaunas University of Technology in 2000.',
              fullDesc:
                'Arturas Medeisis received his Ph.D. in Spectrum Management from the Kaunas University of Technology in 2000. Since then he has worked in various positions in academia, national and international regulatory bodies as well as the mobile industry. His main work focus is spectrum management policies and strategic planning of the development of radiocommunications services. In his previous position as Head of RAN at Telia Lithuania, he led the deployment at the end of 2020 of first in Lithuania 5G NR pilot network in the three biggest cities.'
            }
          ]"
        />
      </EffectAppear>
    </PageSection>

    <PageSection id="timetable">
      <EffectAppear>
        <BlockTimetable />
      </EffectAppear>
    </PageSection>

    <PageSection id="cta">
      <EffectAppear>
        <BlockCta />
      </EffectAppear>
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
import EffectAppear from "../components/effect-appear.vue";

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
    PageSection,
    EffectAppear
  }
};
</script>

<style lang="postcss" scoped></style>
