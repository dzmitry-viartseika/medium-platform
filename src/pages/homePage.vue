<template>
  <h1>
    homepage wertey
  </h1>
</template>

<script>
import authApi from '@/api/auth/authApi';

export default {
  name: 'HomePage',
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
  beforeMount() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      console.log('12');
      authApi.getUserInfo().then((resp) => {
        const { user } = resp.data;
        console.log('user', user);
        this.userInfo = user;
      }).catch((e) => {
        console.error(e);
      });
    } else {
      console.log('123333');
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>

</style>
