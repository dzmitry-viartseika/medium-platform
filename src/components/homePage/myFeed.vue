<template>
  <div class="app-feeds">
    <template v-if="!myArticles.length">
      No articles are here... yet.
    </template>
    <template v-else>
      <globalFeedItem :item="item" v-for="item in myArticles" :key="item.createdAt"/>
    </template>
  </div>
</template>

<script>
import globalFeedItem from '@/components/homePage/globalFeedItem.vue';

export default {
  name: 'myFeed',
  props: {
    myArticles: {
      type: [Object, Array],
      default: () => {},
    },
  },
  components: {
    globalFeedItem,
  },
  beforeMount() {
    console.log('myArticles', this.myArticles.length);
  },
};
</script>

<style scoped>

</style>
