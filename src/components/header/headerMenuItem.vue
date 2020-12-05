<template>
  <div class="app-menu__item-text" @click="goToRoute(item.route)">
    {{ item.name }}
  </div>
</template>

<script>
export default {
  name: 'headerMenuItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    goToRoute(name) {
      this.$router.push(name);
    },
  },
};
</script>

<style scoped>

</style>
