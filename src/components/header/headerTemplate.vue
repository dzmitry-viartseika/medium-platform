<template>
  <div class="app-header">
    <div class="app-header-logo">
      <div class="app-header-logo__text" @click="goToRoute()">
        Conduit
      </div>
    </div>
    <div class="app-header-menu">
      <header-menu-template/>
    </div>
  </div>
</template>

<script>
import HeaderMenuTemplate from '@/components/header/headerMenuTemplate.vue';
import authApi from '@/api/auth/authApi';

export default {
  name: 'HeaderTemplate',
  components: { HeaderMenuTemplate },
  computed: {
    checkHomeRoute() {
      return this.$route.name !== 'home';
    },
    userInfo: {
      get() {
        return this.$store.getters.userInfo;
      },
      set(data) {
        this.$store.dispatch('setUserInfo', data);
      },
    },
  },
  beforeMount() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      authApi.getUserInfo().then((resp) => {
        const { user } = resp.data;
        this.userInfo = user;
      }).catch((e) => {
        console.error(e);
      });
    } else {
      this.$router.push('/login');
    }
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
