<template>
  <div class="app-feeds">
    <template v-if="!globalArticlesList.length">
      No articles are here... yet.
    </template>
  </div>
</template>

<script>
import { get } from 'lodash';

export default {
  name: 'myFeed',
  props: {
    myArticles: {
      type: [Object, Array],
      default: () => {},
    },
  },
  computed: {
    globalArticlesList() {
      return get(this.myArticles, 'articles', []);
    },
  },
};
</script>

<style scoped>

</style>
