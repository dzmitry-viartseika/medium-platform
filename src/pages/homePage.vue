<template lang="pug">
  h1 homepage
</template>

<script>
import authApi from '@/api/auth/authApi';

export default {
  name: 'HomePage',
  beforeMount() {
    console.log('getUserInfo');
    const jwtToken = localStorage.getItem('jwtToken');
    console.log('jwtToken', JSON.parse(jwtToken));
    if (jwtToken) {
      authApi.getUserInfo((resp) => {
        console.log('resp', resp.data);
      }).catch((e) => {
        console.error(e);
      });
    } else {
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>

</style>
