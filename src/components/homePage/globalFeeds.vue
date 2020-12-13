<template>
  <div class="app-global-feeds">
    <globalFeedItem :item="item" v-for="item in globalArticlesList" :key="item.description"/>
  </div>
</template>

<script>
import { get } from 'lodash';
import globalFeedItem from '@/components/homePage/globalFeedItem.vue';

export default {
  name: 'globalFeeds',
  components: {
    globalFeedItem,
  },
  props: {
    globalArticles: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    globalArticlesList() {
      return get(this.globalArticles, 'articles', []);
    },
  },
};
</script>

<style scoped>

</style>
