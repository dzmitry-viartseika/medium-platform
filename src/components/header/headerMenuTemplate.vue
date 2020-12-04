<template lang="pug">
  .app-menu
    .app-menu__item(v-for="item in headerPanelMenu")
      .app-menu__item-text(@click="goToRoute(item.route)")  {{ item.name }}
</template>

<script>
import headerPanelMenu from '@/constants/headerMenu';

export default {
  name: 'HeaderMenuTemplate',
  data() {
    return {
      headerPanelMenu,
    };
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

.app-menu {
  display: flex;

  &__item {
    cursor: pointer;
    transition: opacity .15s ease-in;

    &:hover {
      opacity: .8;
    }

    & + .app-menu__item {
      margin-left: 10px;
    }
  }
}

</style>
