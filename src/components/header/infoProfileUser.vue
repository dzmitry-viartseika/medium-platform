<template>
  <div>
    <div class="app-info-profile">
      <template v-if="userPhoto">
        <img :src="userPhoto" alt="" class="app-info-profile__photo">
      </template>
      <template v-else>
        <div class="app-info-profile__circle"></div>
      </template>
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
  .app-info-profile {
    display: flex;
    align-items: center;
    cursor: default;

    img {
      max-width: 30px;
      height: auto;
      object-fit: cover;
    }

    &__circle {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      background: $colorBtn;
    }
  }
</style>
