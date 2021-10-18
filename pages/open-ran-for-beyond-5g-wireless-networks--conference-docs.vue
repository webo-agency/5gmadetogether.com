<template>
  <div
    class="container flex flex-col w-full"
  >
    <a
      href="/"
      class="mb-12 w-52"
      v-html="require('~/assets/logo/5g-made-together-black.svg?include')"
    />
    <div class="title">
      <h1>
        {{ libraryData.title.rendered }}
      </h1>
    </div>
    <div 
      class="content mb-12"
      v-html="libraryData.content.rendered"
    />
    <ol class="content flex flex-wrap tablet:-mx-4">
      <li                   
        v-for="(presentation, index) in libraryData.embed_presentation"
        :key="index" 
        class="mb-12 w-full tablet:w-1/2 desktop:w-1/3 tablet:px-4"
      >
        <div class="relative aspect-w-16 aspect-h-9 mb-2">
          <iframe 
            :src="presentation.embed_presentation_url" 
            width="427" 
            height="356"
            :title="presentation.embed_presentation_title"
            class="absolute inset-0 w-full h-full"
            allowfullscreen 
          />
        </div>
        <h2>{{ presentation.embed_presentation_title }}</h2>
        <p>{{ presentation.embed_presentation_description }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    async fetch ({ app , store }) {

      await app.$wp.pages().id(352).then(function(data){
        store.commit('library/save', data);
      });

    },
    head() {
      return {
        title: this.libraryData.head_tags_title,
        meta: this.libraryData.head_tags_meta,
        script: this.libraryData.head_tags_script,
        link: this.libraryData.head_tags_link,
      }
    },
    computed: {
      libraryData() {
        return this.$store.getters['library/getData']
      },
    }
  };
</script>

<style lang="postcss" scoped>
  .title.title h1{
    @apply text-4xl;
    @apply mb-4;
  }

  .content.content >>> h2{
      @apply text-xl;
      @apply mb-2;
  }

  .content.content >>> h2:before{
    @apply hidden;
  }
  
  .content.content >>> p{
      @apply mb-8;
  }
</style>