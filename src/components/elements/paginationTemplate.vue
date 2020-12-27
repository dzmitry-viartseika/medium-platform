<template>
  <ul class="app-pagination">
    <li v-for="page in pages" :key="page" class="app-pagination__item"
    :class="{'app-pagination__item_active': currentPage === page}"
    >
      <router-link :to="{path: url, query: {page: page}}" tag="div">
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'paginationTemplate',
  props: {
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  watch: {
    currentPage() {
      this.$emit('update', 10, this.currentPage);
    },
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit);
      return [...Array(pagesCount).keys()].map((el) => el + 1);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

.app-pagination {
  display: flex;
  list-style-type: none;

  &__item {
    padding: 5px;
    cursor: pointer;
    border: 1px solid $colorBtn;
    transition: opacity .15s ease-in;
    margin: 3px;

    &_active {
      background: $colorBtn;
      color: $color-white;
    }

    &:hover {
      opacity: .8;
    }
  }
}
</style>
