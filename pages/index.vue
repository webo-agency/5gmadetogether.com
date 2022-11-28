<template>
  <div class="w-full">
    <PageSection id="heroBanner">
      <Banner />
    </PageSection>

    <PageSection id="aboutConference">
      <AboutConference />
    </PageSection>

    <PageSection id="topicsCovered">
      <TopicsCovered />
    </PageSection>

    <PageSection id="conferenceNumbers">
      <ConferenceNumbers />
    </PageSection>

    <PageSection id="videoPlayer">
      <YoutubePlayer />
    </PageSection>

    <PageSection id="speakersSwiper">
      <KeynoteSpeakers />
      <SwiperSpeakers />
    </PageSection>

    <PageSection id="timetable">
      <Timetable />
    </PageSection>

    <PageSection id="cta">
      <Cta />
    </PageSection>
  </div>
</template>

<script>
import AboutConference from "~/components/block-about-conference.vue";
import CustomLink from "~/components/custom-link.vue";
import Banner from "../components/block-banner.vue";
import TopicsCovered from "../components/block-topics-covered.vue";
import ConferenceNumbers from "../components/block-conference-numbers.vue";
import YoutubePlayer from "../components/block-video-player.vue";
import KeynoteSpeakers from "../components/block-keynote-speakers.vue";
import SwiperSpeakers from "../components/block-swiper-speakers.vue";
import Timetable from "../components/block-timetable.vue";
import Cta from "../components/component-cta.vue";
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
    CustomLink,
    Banner,
    TopicsCovered,
    ConferenceNumbers,
    YoutubePlayer,
    KeynoteSpeakers,
    SwiperSpeakers,
    Timetable,
    Cta,
    PageSection
  }
};
</script>

<style lang="postcss" scoped></style>
