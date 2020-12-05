<template>
  <div class="app-menu__item-text" @click="goToRoute(item.route)">
    <template v-if="!item.display">
      <i :class="item.icon" v-if="item.icon"></i>
      <span>
      {{ item.name }}
    </span>
    </template>
    <template v-else>
        <infoProfileUser />
    </template>
  </div>
</template>

<script>
import infoProfileUser from '@/components/header/infoProfileUser.vue';

export default {
  name: 'headerMenuItem',
  components: {
    infoProfileUser,
  },
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

<style scoped lang="scss">
@import "../../assets/scss/variables";

</style>
