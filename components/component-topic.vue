<template>
  <div>
    <div
      class="border-b-[1px] border-b-[#EDF1F1]"
      :class="[
        isExpanded
          ? 'border-b-transparent'
          : isHovered
          ? 'border-b-transparent'
          : 'border-current'
      ]"
    >
      <div
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        :class="[
          isHovered
            ? 'bg-[#FFFFFF]'
            : isExpanded
            ? 'bg-[#FFFFFF]'
            : 'bg-[#F6F8F8]'
        ]"
        class="flex justify-between items-center mt-6 py-4 text-[#00212F] transition duration-500"
      >
        <div class="flex justify-start items-center mx-4 space-x-5 font-medium">
          <div
            :class="[
              isHovered
                ? 'text-[#39E8EA]'
                : isExpanded
                ? 'text-[#39E8EA]'
                : 'text-[#002738]'
            ]"
            class="py-2 px-3 rounded-full bg-[#FFFFFF] transition duration-500"
          >
            {{ indexZeroFill() }}
          </div>
          <div class="desktop:mx-6 mx-4">{{ topic.title }}</div>
        </div>
        <div v-if="!isExpanded">
          <svg
            @click="expand()"
            :class="[isHovered ? 'text-[#39E8EA]' : 'text-[#002738]']"
            class="mr-5 w-10 h-10  transition duration-500"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="stroke-current"
              cx="20"
              cy="20"
              r="19"
              stroke="#002738"
              stroke-width="2"
            />
            <rect
              class="fill-current"
              x="13"
              y="19"
              width="14"
              height="2"
              fill="#002738"
            />
            <rect
              class="fill-current"
              x="21"
              y="13"
              width="14"
              height="2"
              transform="rotate(90 21 13)"
              fill="#002738"
            />
          </svg>
        </div>
        <div v-else>
          <svg
            @click="expand()"
            class="mr-5 w-10 h-10"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="19" stroke="#39E8EA" stroke-width="2" />
            <rect x="13" y="19" width="14" height="2" fill="#39E8EA" />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="isExpanded" class="border-b-[1px] border-b-[#EDF1F1]">
      <div class="ml-[100px] py-5 font-light text-[#00212F]">
        {{ topic.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentTopic",
  props: {
    topic: Object,
    index: Number
  },
  data() {
    return {
      isExpanded: false,
      isHovered: false
    };
  },
  methods: {
    expand() {
      this.isExpanded = !this.isExpanded;
    },
    indexZeroFill() {
      if (this.index < 9) {
        return `0${this.index + 1}`;
      } else {
        return `${this.index + 1}`;
      }
    }
  }
};
</script>
