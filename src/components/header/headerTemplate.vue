<template>
  <div class="app-header">
    <div class="app-header-logo">
      <div class="app-header-logo__text" click="goToRoute()">
        Conduit
      </div>
    </div>
    <div class="app-header-menu">
      <header-menu-template/>
    </div>
  </div>
</template>

<script>
import HeaderMenuTemplate from '@/components/header/headerMenuTemplate';

export default {
  name: 'HeaderTemplate',
  components: { HeaderMenuTemplate },
  computed: {
    checkHomeRoute() {
      return this.$route.name !== 'home';
    },
  },
  methods: {
    goToRoute() {
      if (this.checkHomeRoute) {
        this.$router.push('/');
      }
      return false;
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables";

  .app-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-items: center;

    &-logo {

      &__text {
        cursor: pointer;
        font-size: 30px;
        color: $colorBtn;
      }
    }
  }
</style>
