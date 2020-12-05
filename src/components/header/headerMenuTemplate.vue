<template>
  <div class="app-menu">
    <div class="app-menu__item"
         v-for="item in headerPanelMenu" :key="item.id">
        <headerMenuItem  :item="item"/>
    </div>
  </div>
</template>

<script>
import headerPanelMenu from '@/constants/headerMenu';
import headerMenuItem from '@/components/header/headerMenuItem.vue';

export default {
  name: 'HeaderMenuTemplate',
  components: {
    headerMenuItem,
  },
  data() {
    return {
      headerPanelMenu,
    };
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
