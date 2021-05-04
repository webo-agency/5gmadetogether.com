<template>
  <component
    :is="mainTag"
  >
    <div class="container mx-auto px-4"> 
      <nav class="flex flex-wrap items-center justify-between py-4 md:sticky top-0 z-50 bg-white">
        <div class="navbar-menu flex flex-wrap order-1 lg:order-1 flex-row items-center">
          Organizator <img class="h-12 mx-4" src="~/assets/img/ISW_-_logo_kolor.png" alt="">

          <img class="hidden h-12 mx-4" src="~/assets/img/CP_logo_kolor_3.png" alt="">
          <img class="hidden h-12 mx-4" src="~/assets/img/PTI.png" alt="">

        </div>
        <div class="navbar-menu block order-4 lg:order-3 lg:text-right"><a class="inline-block py-4 px-8 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow my-4 lg:my-0" href="https://5gmadetogether.konfeo.com/pl/groups">Zarejestruj się</a></div>
      </nav>
    </div>
  </component>
</template>

<script>
export default {
  name: "LayoutHeader",
  props: {
    mainTag: {
      type: String,
      default: "",
      required: false
    },
    mainClass: {
      type: String,
      default: "",
      required: false
    },
  },
  data() {
    return {
      isTop: true,
      isGoingUp: false,
      menuVisible: false,
      sections: [],
      scrollPosition: 0
    };
  },
  watch: {
    '$route' (to, from) {
      if(to.path !== from.path){
        this.sections = [];
      }
    }
  },
  mounted() {
    // window.addEventListener("scroll", this.onScroll, { passive: true });
    this.$root.$on("next-section", data => {
      if (!(data.id in this.sections) && data.id != '') {
        this.$refs[`#${data.id}`][0].$el.click();
      }
    });

    this.$root.$on("section", data => {
      if (!(data.id in this.sections) && data.id != '') {
        this.sections.push(data);
      }
    });
  },
  beforeDestroy: function() {
    this.sections = [];
    // clearTimeout(this.timeout);
    // window.removeEventListener("scroll", this.onScroll, { passive: true });
  },
  methods: {
    showMenu: function() {
      this.$data.menuVisible = !this.$data.menuVisible;
    },
    onScroll() {
      clearTimeout(this.timeout);
      this.timeout = window.setTimeout(
        function() {
          this.isTop = !(window.scrollY > 0);
        }.bind(this),
        500
      );
      this.isGoingUp = window.scrollY > this.scrollPosition;
      this.scrollPosition = window.scrollY;
    },
    onItemChanged() {
      this.$data.menuVisible = false;
    },
  }
};
</script>

<style lang="postcss" scoped>

</style>
