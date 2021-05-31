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
    <ol class="content">
      <li                   
        v-for="(presentation, index) in libraryData.embed_presentation"
        :key="index" 
        class="mb-12"
      >
        <h2>{{ presentation.embed_presentation_title }}</h2>
        <p>{{ presentation.embed_presentation_description }}</p>
        <div class="relative aspect-w-16 aspect-h-9">
          <iframe 
            :src="presentation.embed_presentation_url" 
            width="427" 
            height="356"
            :title="presentation.embed_presentation_title"
            class="absolute inset-0 w-full h-full"
            allowfullscreen>
          </iframe>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  const removeEmpty = obj => {
    Object.keys(obj).forEach(key => {
      if (
        key == '' ||
        obj[key] == null ||
        typeof obj[key] == 'undefined' ||
        (Array.isArray(obj[key]) && !obj[key].length) ||
        obj[key] == '' ||
        obj[key] == []
      ) { delete obj[key] } // delete
      else if (obj[key] && typeof obj[key] === "object") removeEmpty(obj[key]); // recurse
    });
  };

  export default {
    async fetch ({ app , store }) {

      await app.$wp.pages().slug('library').then(function(data){
        store.commit('library/save', data[0]);
      });

    },
    computed: {
      libraryData() {
        return this.$store.getters['library/getData']
      },
    },
    head() {
      return {
        title: this.libraryData.head_tags_title,
        meta: this.libraryData.head_tags_meta,
        script: this.libraryData.head_tags_script,
        link: this.libraryData.head_tags_link,
      }
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

  .content.content >>> p{
      @apply mb-8;
  }
</style>