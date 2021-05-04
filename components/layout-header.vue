<template>
  <component
    :is="mainTag"
  >
    <div class="container flex flex-row flex-wrap justify-between">
      <nuxt-link
        class="flex-grow-0 flex-shrink py-2 homepage px-xs-0 py-xs-2 w-xs-auto nuxt-link-active"
        to="/"
      >
        
      </nuxt-link>

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
