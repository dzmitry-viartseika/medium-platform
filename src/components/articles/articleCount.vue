<template>
  <div class="app-article-count" @click="handleLike">
    {{ favoritesCount }}
  </div>
</template>

<script>
export default {
  name: 'articleCount',
  props: {
    isfavorited: {
      type: Boolean,
      default: false,
    },
    favoritesCount: {
      type: Number,
      default: 0,
    },
  },
  beforeMount() {
    console.log('favoritesCount', this.favoritesCount);
  },
  computed: {
    favoritesCountOptimistic() {
      return this.favoritesCount;
    },
  },
  methods: {
    handleLike() {
      this.$emit('handleLike');
    },
  },
};
</script>

<style scoped>

</style>
