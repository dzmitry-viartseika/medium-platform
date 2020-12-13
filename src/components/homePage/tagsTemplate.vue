<template>
    <div class="app-tags">
      <div class="app-tags__item" v-for="tag in tagsList" :key="tag" @click="clickEvent(tag)">
        {{ tag }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'tagsTemplate',
  props: {
    tagsList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clickEvent(tag) {
      this.$emit('clickEvent', tag);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

  .app-tags {
    background: $borderColor;
    padding: 10px;
    border-radius: $borderRadius;
    display: flex;
    flex-wrap: wrap;
    max-width: 300px;

    &__item {
      background: $colorTags;
      padding: 5px;
      margin: 2px;
      cursor: pointer;
      transition: opacity .15s ease-in;

      &:hover {
        opacity: .8;
      }
    }
  }
</style>
