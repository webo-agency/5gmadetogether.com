<template>
  <div
    class="group w-[195px] desktop:inline-block block px-6 py-[13px] text-[#002738] bg-[#39E8EA] rounded-full shadow-lg font-medium transition ease-out duration-200 hover:bg-[#02cbce]"
  >
    <span class="mr-[10px]">{{ title }}</span>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="inline group-hover:translate-x-[10px] transition ease-out duration-200"
    >
      <path
        class="fill-current"
        d="M11.25 3.75L10.3562 4.62063L15.0937 9.375H2.5V10.625H15.0937L10.3562 15.3581L11.25 16.25L17.5 10L11.25 3.75Z"
        fill="#ffffff"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "ButtonRegister",
  props: { title: String }
};
</script>

<style scoped>
svg:hover {
  color: #002738;
}
</style>
