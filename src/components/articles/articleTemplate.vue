<template>
  <div class="app-article">
    <BannerTemplate :bannerInfo="bannerInfo"/>
  </div>
</template>

<script>
import articlesApi from '@/api/articles/articlesApi';
import BannerTemplate from '@/components/bannerTemplate.vue';

export default {
  name: 'articleTemplate',
  components: {
    BannerTemplate,
  },
  data() {
    return {
      item: {},
    };
  },
  computed: {
    bannerInfo() {
      return this.item;
    },
  },
  beforeMount() {
    console.log('wertey');
    const { slug } = this.$route.params;
    console.log('slug', slug);
    const limit = 10;
    const offset = 0;
    articlesApi.getAllGlobalArticles(limit, offset, slug).then((resp) => {
      console.log('wertey');
      this.item = resp.data;
    }).catch((e) => {
      console.error(e);
    });
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

</style>
