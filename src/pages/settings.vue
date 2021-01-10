<template>
  <div class="app-settings">
    <div class="app__wrapper">
      <div class="app-field">
        <input class="app-input" v-model="userInfo.image"
               type="text"
               placeholder="URL of profile picture">
      </div>
      <div class="app-field">
        <input class="app-input" v-model="userInfo.username"
               type="text"
               placeholder="Username">
      </div>
      <div class="app-field">
        <textarea class="app-textarea" v-model="userInfo.bio"
                  type="text"
                  placeholder="Short bio about you"></textarea>
      </div>
      <div class="app-field">
        <input class="app-input" v-model="userInfo.email"
               type="email"
               placeholder="Email">
      </div>
      <div class="app-field" v-if="false">
        <input class="app-input" v-model="userInfo.password"
               type="password"
               placeholder="Password">
      </div>
      <div class="app-settings-btn" :class="position">
        <ButtonTemplate :buttonSettings="buttonSettings"></ButtonTemplate>
      </div>
      <ButtonTemplate :buttonSettings="buttonSettingsLogOut"></ButtonTemplate>
    </div>
  </div>
</template>

<script>
import ButtonTemplate from '@/components/elements/buttonTemplate.vue';
import authApi from '@/api/auth/authApi';

export default {
  name: 'settings',
  components: {
    ButtonTemplate,
  },
  computed: {
    position() {
      if (this.buttonSettings.position === 'left') {
        return 'app-button_left';
      }
      if (this.buttonSettings.position === 'right') {
        return 'app-button_right';
      }
      return 'app-button_center';
    },
    userInfo: {
      get() {
        return this.$store.getters.userInfo;
      },
      set(data) {
        this.$store.dispatch('setUserInfo', data);
      },
    },
    buttonSettings() {
      return {
        icon: false,
        buttonText: 'Update Settings',
        buttonClickEvent: this.updateUser,
        position: 'right',
      };
    },
    buttonSettingsLogOut() {
      return {
        icon: false,
        buttonText: 'Logout',
        buttonClickEvent: this.logOut,
        position: 'left',
      };
    },
  },
  methods: {
    updateUser() {
      authApi.updateUser(this.userInfo).then((resp) => {
        const { user } = resp.data;
        this.userInfo = user;
      }).catch((e) => {
        console.log('e', e.response.data.errors.username);
      });
    },
    logOut() {
      localStorage.removeItem('jwtToken');
      this.userInfo = {};
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";
  .app-settings {

    &-btn {
      padding-bottom: 15px;
      border-bottom: 1px solid $borderColor;
      margin-bottom: 15px;
    }
  }
</style>
