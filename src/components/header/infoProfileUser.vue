<template>
  <div>
    <div class="app-info-profile">
      <img :src="userPhoto" alt="" class="app-info-profile__photo">
      <div class="app-info-profile__firstname">
        {{ userFirstname }}
      </div>
    </div>
  </div>
</template>

<script>

import { get } from 'lodash';

export default {
  name: 'infoProfileUser',
  computed: {
    userInfo: {
      get() {
        return this.$store.getters.userInfo;
      },
      set(data) {
        this.$store.dispatch('setUserInfo', data);
      },
    },
    userPhoto() {
      return get(this.userInfo, 'image', '');
    },
    userFirstname() {
      return get(this.userInfo, 'username', '');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

</style>
