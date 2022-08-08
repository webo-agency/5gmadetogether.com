<template>
  <div class="flex flex-col min-h-screen bg-backgroundDark min-w-container w-full">
    <LayoutNavbar
    />
    <main class="relative flex flex-row flex-auto break-all bg-white phone:break-normal phone:break-words w-full">
      <nuxt />
    </main>
    <LayoutFooter
      main-class="mt-auto bg-white flex-0-auto bg-backgroundDark"
      main-tag="footer"
    />
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
