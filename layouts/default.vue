<template>
  <div
    class="flex flex-col min-h-screen bg-backgroundDark min-w-container w-full font-body"
  >
    <LayoutNavbar
      :menu="[
        {
          title: 'About',
          url: 'http://localhost:3000/#about'
        },
        {
          title: 'Explore',
          url: 'http://localhost:3000/#explore'
        },
        {
          title: 'Speakers',
          url: 'http://localhost:3000/#speakers'
        },
        {
          title: 'Agenda',
          url: 'http://localhost:3000/#agenda'
        }
        // {
        //   title: 'Register now',
        //   url: 'http://localhost:3000/'
        // }
      ]"
    />
    <!-- To do te klasy tak byly przedtem-->
    <main>
      <nuxt />
    </main>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutNavbar from "../components/layout-navbar.vue";
import LayoutFooter from "../components/layout-footer.vue";
export default {
  name: "DefaultLayout",
  components: {
    LayoutNavbar,
    LayoutFooter
  },
  head: {},
  mounted() {
    const gdprCookie = this.$cookies.get("gdpr");
    if (!gdprCookie) {
      this.$toast.global.gdpr();
    }
  }
};
</script>
