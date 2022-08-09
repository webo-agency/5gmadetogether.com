<template>
    <section class="flex items-end min-h-[880px] px-4 phablet:px-4 text-center bg-no-repeat bg-cover" style="background-image: url(/img/banner.png)">
      <div class=" w-full mb-8 z-10 text-left ">
          <header class="max-w-3xl ml-52 mb-6 text-left">
            <h1
              class="px-10 py-8 tracking-wide leading-tight text-white font-medium text-[50px] min-w-full bg-[#002738] ">
              Open RAN for Beyond 5G Wireless Networks:
              <span class="font-hairline text-[50px] text-center">CHALLENGES AND VISIONS</span>
            </h1>
          <div class="px-10 mt-4">
            <span class="text-[#002738] font-medium">Online conference</span>
            <time
              datetime="2021-05-27T10:00Z"
              class="block font-semibold text-[#002738] text-[20px] text-left">
              October 14th, 2021 | 9:00 AM - 3:00 PM CEST
            </time>
            <div class="flex justify-start items-center mt-8 space-x-16">
              <CustomLink>
                  <button class="px-6 py-[13px] bg-[#39E8EA] rounded-lg shadow-lg font-medium">Register now
                  <svg class="inline ml-4" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.25 0.75L8.35625 1.62063L13.0938 6.375L0.5 6.375V7.625L13.0938 7.625L8.35625 12.3581L9.25 13.25L15.5 7L9.25 0.75Z" fill="#002738"/>
                  </svg>
                </button>
              </CustomLink>
              <CustomLink :title="'Read more'" class="pr-4 border-b-[2px] border-b-[#002738] font-medium"/>
            </div>
          </div>
          </header>
      </div>
    </section>
</template>