<template>
  <div class="app-tab">
      <div class="app-tab__item" v-for="tab in tabList" :key="tab"
           :class="{'app-tab__item_active': activeTab === tab}"
           @click="setActiveTab(tab)"
      >
        {{ tab }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'tabTemplate',
  props: {
    tabList: {
      type: Array,
      default: () => [],
    },
    activeTab: {
      type: String,
      default: '',
    },
  },
  methods: {
    setActiveTab(tab) {
      this.$emit('setActiveTab', tab);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

  .app-tab {
    display: flex;

    &__item {
      padding: 5px;
      cursor: pointer;

     & + .app-tab__item {
        margin-left: 5px;
      }

      &_active {
        border-bottom: 1px solid $colorBtn;
        color: $colorBtn;
      }
    }
  }
</style>
