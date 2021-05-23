<template>
  <div class="flex flex-col min-h-screen bg-backgroundDark min-w-container w-full">
    <LayoutHeader
      main-class="flex-0-auto"
      main-tag="header"
      dark-theme
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
    head: {},
    mounted() {
      const gdprCookie = this.$cookies.get('gdpr');
      if(!gdprCookie){
        this.$toast.show({
          title: 'Toast with actions',
          message: 'Cookies are used to improve experience',
          primary: { label: 'Accept', action: () => this.$cookies.set('gdpr', true) },
          timeout: false,
          containerClasses: ['z-40', 'fixed', 'inset-0', 'flex', 'flex-col-reverse', 'items-end', 'justify-center', 'px-4', 'py-6', 'pointer-events-none', 'sm:p-6', 'sm:items-end', 'sm:justify-end'],
        });
      }
    },
  };
</script>
