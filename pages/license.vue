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
      <h1 v-if="api.title.rendered">
        {{ api.title.rendered }}
      </h1>
    </div>
    <div 
      class="content mb-12"
      v-if="api.content.rendered"
      v-html="api.content.rendered"
    />
    <iframe src="/static/LICENSES.html" width="560" height="315" class="border-0 mb-12" title="File with licenses"></iframe>
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
    async asyncData ({ app , params, payload }) {

      if (payload && payload.data && payload.data.acf && payload.data.acf.page_title && payload.data.acf.page_image) {
        return { 
          api: payload 
        }
      } else {
        let data = await app.$wp.pages().slug(params.pages);

        if(data != '' && data.length == 1){
          removeEmpty(data[0]);
          data[0].head_tags_title = new Array();
          data[0].head_tags_link = new Array();
          data[0].head_tags_script = new Array();
          data[0].head_tags_meta = new Array();

          data[0].head_tags.forEach(
            function(item){
              switch(item['tag']){
                case 'title':
                  data[0].head_tags_title.push(item.content);
                  break;
                case 'link':
                  data[0].head_tags_link.push(item.attributes);
                  break;
                case 'script':
                  item.attributes.content = item.content;
                  data[0].head_tags_script.push(item.attributes);
                  break;
                case 'meta':
                  data[0].head_tags_meta.push(item.attributes);
                  break;
              }
            });

          return { 
            api: data[0],
          }
        } else {
          return { 
            api: {
              title: {
                rendered: ''
              },
              content: {
                rendered: ''
              }
            },
          }
        }
      }
    },
    head() {
      return {
        title: this.api.head_tags_title,
        meta: this.api.head_tags_meta,
        script: this.api.head_tags_script,
        link: this.api.head_tags_link,
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