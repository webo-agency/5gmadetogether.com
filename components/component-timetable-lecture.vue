<template>
  <div class="flex desktop:flex-nowrap flex-wrap desktop:space-x-12">
    <div class="flex items-start shrink-0 desktop:space-x-5">
      <svg
        class="group-hover:text-[#39E8EA] transition duration-300"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="fill-current"
          d="M17.4996 29.3996C10.9196 29.3996 5.59961 24.0796 5.59961 17.4996C5.59961 10.9196 10.9196 5.59961 17.4996 5.59961C24.0796 5.59961 29.3996 10.9196 29.3996 17.4996C29.3996 24.0796 24.0796 29.3996 17.4996 29.3996ZM17.4996 6.99961C11.6896 6.99961 6.99961 11.6896 6.99961 17.4996C6.99961 23.3096 11.6896 27.9996 17.4996 27.9996C23.3096 27.9996 27.9996 23.3096 27.9996 17.4996C27.9996 11.6896 23.3096 6.99961 17.4996 6.99961Z"
          fill="#00212F"
        />
        <path
          class="fill-current"
          d="M21.2098 23.5902L16.7998 19.1802V11.2002H18.1998V18.6202L22.1898 22.6102L21.2098 23.5902Z"
          fill="#00212F"
        />
      </svg>
      <div
        class="group-hover:text-[#39E8EA] transition duration-300 font-medium mt-[6px] ml-[10px]"
      >
        {{ item.time }}
      </div>
    </div>

    <div
      class="flex flex-col jusitfy-center space-y-2 ml-[45px] dektop:text-[16px] text-[14px] w-[420px]"
    >
      <div
        class="group-hover:text-[#39E8EA] transition duration-300 font-medium text-[16px] mt-[5px] dektop:pb-4 pb-3"
      >
        {{ item.title.toUpperCase() }}
      </div>
      <ul>
        <li
          v-for="(lecturer, index) in item.lecturers"
          :key="lecturers"
          class="font-medium"
        >
          {{ lecturer.name }}
          <span class="font-normal">
            {{ lecturer.company }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimetableLecture",
  props: {
    item: Object
  }
};
</script>

<style scoped></style>
