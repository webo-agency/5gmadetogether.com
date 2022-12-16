<template>
  <ul class="countersContainer flex flex-col tablet:mx-[90px]">
    <ComponentCounter :counter="countersData[0]">
      <count-to
        ref="countMinute"
        v-view.once="viewMinutCount"
        :start-val="0"
        :end-val="300"
        :duration="3000"
        :autoplay="true"
        :prefix="'+'"
        class="block desktop:text-[68px] tablet:text-[55px] text-[45px] font-medium leading-[30px]"
      />
    </ComponentCounter>
    <ComponentCounter :counter="countersData[1]">
      <count-to
        ref="countPrelegent"
        v-view.once="viewPrelegentCount"
        :start-val="0"
        :end-val="30"
        :duration="3000"
        :autoplay="true"
        class="desktop:text-[68px] tablet:text-[55px] text-[45px] font-medium leading-[30px]"
      />
    </ComponentCounter>
    <ComponentCounter :counter="countersData[2]">
      <count-to
        ref="countDebate"
        v-view.once="viewDebateCount"
        :start-val="0"
        :end-val="1"
        :duration="3000"
        :autoplay="true"
        class="desktop:text-[68px] tablet:text-[55px] text-[45px] font-medium leading-[30px]"
      />
    </ComponentCounter>
  </ul>
</template>

<script>
import countTo from "vue-count-to";
import ComponentCounter from "./component-counter.vue";

export default {
  name: "CountersList",
  components: { countTo, ComponentCounter },
  props: {
    countersData: Array
  },
  methods: {
    viewMinutCount(e) {
      if (e.type == "enter") {
        this.$refs.countMinute.start();
        console.log("minute counter enter");
      }
      if (e.type == "exit") {
        this.$refs.countMinute.reset();
        console.log("minute counter exit");
      }
    },
    viewPrelegentCount(e) {
      if (e.type == "enter") {
        this.$refs.countPrelegent.start();
      }
      if (e.type == "exit") {
        this.$refs.countPrelegent.reset();
      }
    },
    viewDebateCount(e) {
      if (e.type == "enter") {
        this.$refs.countDebate.start();
      }
      if (e.type == "exit") {
        this.$refs.countDebate.reset();
      }
    }
  }
};
</script>

<style scoped></style>
