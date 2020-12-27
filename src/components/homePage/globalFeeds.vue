<template>
  <div class="app-global-feeds">
    <globalFeedItem :item="item" v-for="item in globalArticlesList" :key="item.createdAt"/>
    <paginationTemplate
      :total="total"
      :limit="limit"
      :currentPage="currentPage"
      :url="baseUrl"
      @update="getFeed"
    />
    currentPage={{ currentPage }}
  </div>
</template>

<script>
import { get } from 'lodash';
import globalFeedItem from '@/components/homePage/globalFeedItem.vue';
import paginationTemplate from '@/components/elements/paginationTemplate.vue';

export default {
  name: 'globalFeeds',
  components: {
    globalFeedItem,
    paginationTemplate,
  },
  props: {
    globalArticles: {
      type: [Object, Array],
      default: () => {},
    },
  },
  data() {
    return {
      limit: 10,
      url: '/tags/dragons',
    };
  },
  computed: {
    globalArticlesList() {
      return get(this.globalArticles, 'articles', []);
    },
    total() {
      return get(this.globalArticles, 'articlesCount', 0);
    },
    currentPage() {
      return +(this.$route.query.page || '1');
    },
    baseUrl() {
      console.log('this.$route', this.$route);
      return this.$route.path;
    },
  },
  methods: {
    getFeed(limit, offset) {
      this.$emit('getAllGlobalArticles', limit, offset);
    },
  },
};
</script>

<style scoped>

</style>
