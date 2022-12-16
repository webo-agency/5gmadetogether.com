<template>
  <li
    class="flex desktop:flex-row flex-col justify-between desktop:items-center py-8 gap-12 border-b-[#E8E8E8] border-b-[1px] hover:border-b-[#39E8EA] transition duration-500"
  >
    <div class="relative flex items-start ml-8 space-x-2">
      <div class="mt-3">
        <!-- Counter component -->
        <slot></slot>
      </div>
      <div class="absolute scale-50 -top-4 -left-10 ">
        <svg
          width="43"
          height="40"
          viewBox="0 0 43 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40L31 -1.35505e-06L43 -1.87959e-06L12 40L0 40Z"
            fill="#39E8EA"
          />
        </svg>
      </div>
      <div class="font-medium uppercase">{{ counter.unit }}</div>
    </div>
    <div class="desktop:max-w-xl font-light">
      {{ counter.desc }}
    </div>
  </li>
</template>

<script>
export default {
  name: "ComponentCounter",
  props: { counter: Object }
};
</script>

<style scoped></style>
