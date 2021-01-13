<template>
  <div class="app-profile">
    <div class="app-profile__img">
      <img :src="userProfile.image" alt="">
    </div>
    <div class="app-profile__username">
      {{ userProfile.username }}
    </div>
    <div class="app-profile__bio" v-if="userProfile.bio">
      {{ userProfile.bio }}
    </div>
    <button class="app-profile__button">
      Edit Profile Settings
    </button>
  </div>
</template>

<script>
import profileApi from '@/api/profile/profileApi';

export default {
  name: 'userProfile',
  data() {
    return {
      userProfile: {},
    };
  },
  beforeMount() {
    const { slug } = this.$route.params;
    console.log('slug', slug);
    profileApi.getUserProfile(slug).then((resp) => {
      console.log('data', resp.data);
      this.userProfile = resp.data.profile;
    }).catch((e) => {
      console.error(e);
    });
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

.app-profile {
  background: $borderColor;
  min-height: 400px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__img  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  &__username {
    margin-top: 10px;
  }

  &__bio {
    margin-top: 5px;
  }
}
</style>
