<template>
  <div class="w-full">
    <Banner/>
    <AboutConference/>
    <TopicsCovered/>
    <ConferenceNumbers/>
    <YoutubePlayer/>
    <KeynoteSpeakers/>
    <SwiperSpeakers/>
    <Timetable/>
  </div>
</template>

<script>

import AboutConference from '~/components/AboutConference.vue'
import CustomLink from '~/components/custom-link.vue'
import Banner from '../components/Banner.vue'
import TopicsCovered from '../components/TopicsCovered.vue'
import ConferenceNumbers from '../components/ConferenceNumbers.vue'
import YoutubePlayer from '../components/YoutubePlayer.vue'
import KeynoteSpeakers from '../components/KeynoteSpeakers.vue'
import SwiperSpeakers from '../components/SwiperSpeakers.vue'
import Timetable from '../components/Timetable.vue'

export default {
    name: "FrontPage",
    filters: {
        dateConvert: function (time) {
            if (!time)
                return "";
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
        dateStandardConvert: function (time) {
            if (!time)
                return "";
            return time.concat("2021-05-27T", time.slice(0, -3), "Z");
        },
    },
    
    async fetch({ app, store }) {
        await app.$wp
            .namespace("wuxt")
            .v1()
            .frontPage()
            .then(function (data) {
            store.commit("homepage/save", data);
        });
    },
    components: { AboutConference, CustomLink, CustomLink, Banner, TopicsCovered, ConferenceNumbers, YoutubePlayer, KeynoteSpeakers, SwiperSpeakers, Timetable }
}
</script>

<style lang="postcss" scoped></style>
