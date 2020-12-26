<template>
  <div class="app-menu">
    <template v-if="typeof userInfo === 'object'">
      <template v-if="!Object.keys(userInfo).length">
        <div class="app-menu__item"
             v-for="item in headerPanelMenu" :key="item.id">
          <headerMenuItem  :item="item"/>
        </div>
      </template>
      <template v-else>
        <div class="app-menu__item"
             v-for="item in headerPanelMenuLogged" :key="item.id">
          <headerMenuItem  :item="item"/>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import headerPanelMenu from '@/constants/headerMenu';
import headerMenuItem from '@/components/header/headerMenuItem.vue';
import headerPanelMenuLogged from '@/constants/headerMenuLogged';

export default {
  name: 'HeaderMenuTemplate',
  components: {
    headerMenuItem,
  },
  data() {
    return {
      headerPanelMenu,
      headerPanelMenuLogged,
    };
  },
  computed: {
    userInfo: {
      get() {
        return this.$store.getters.userInfo;
      },
      set(data) {
        this.$store.dispatch('setUserInfo', data);
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

.app-menu {
  display: flex;
  align-items: center;

  &__item {
    cursor: pointer;
    transition: opacity .15s ease-in;

    &:hover {
      opacity: .8;
    }
  }
}
</style>
