<template>
  <div class="flex flex-col min-h-screen bg-backgroundDark min-w-container w-full">
    <LayoutNavbar/>
    <!-- To do te klasy tak byly przedtem-->
    <main class="relative flex flex-row flex-auto break-all bg-white phone:break-normal phone:break-words w-full">
      <nuxt />
    </main>
    <LayoutFooter/>
  </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
    head: {},
    mounted() {       
      const gdprCookie = this.$cookies.get('gdpr');
      if(!gdprCookie){
        this.$toast.global.gdpr();
      }
    },
  };
</script>
