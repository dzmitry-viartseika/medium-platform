<template>
  <div class="app-account">
    <h1 class="app-account__title">
      Sign In
    </h1>
    <div
      class="app-account__link"
      @click="goToRoute()"
    >
      Need an account?
    </div>
    <div class="app-account-field">
      <input
        v-model="user.email"
        class="app-input"
        type="email"
        placeholder="Email"
        :errorStatus="$validator.errors.has('email')"
        :class="{'error': $validator.errors.has('email')}"
      />
      <transition name="fade-el">
        <span
          v-if="$validator.errors.has('email')"
          class="app__validation"
        >{{ $validator.errors.first('email') }}</span>
      </transition>
    </div>
    <div class="app-account-field">
      <input
        v-model="user.password"
        class="app-input"
        type="password"
        placeholder="Password"
        :errorStatus="$validator.errors.has('password')"
        :class="{'error': $validator.errors.has('password')}"
      />
      <transition name="fade-el">
        <span
          v-if="$validator.errors.has('password')"
          class="app__validation"
        >{{ $validator.errors.first('password') }}</span>
      </transition>
    </div>
    <div
      class="app-account-btn"
      :class="position"
    >
      <ButtonTemplate :buttonSettings="buttonSettings"></ButtonTemplate>
    </div>
  </div>
</template>

<script>
import ButtonTemplate from '@/components/elements/buttonTemplate.vue';
import authApi from '@/api/auth/authApi';

export default {
  name: 'LoginPage',
  components: { ButtonTemplate },
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
      validationMessage: {
        status: false,
        text: '',
      },
    };
  },
  computed: {
    userInfo: {
      get() {
        return this.$store.getters.userInfo;
      },
      set(data) {
        this.$store.getters.userInfo = data;
      },
    },
    buttonSettings() {
      return {
        icon: false,
        buttonText: 'Sign in',
        buttonClickEvent: this.login,
        position: 'right',
      };
    },
    position() {
      if (this.buttonSettings.position === 'left') {
        return 'app-button_left';
      }
      if (this.buttonSettings.position === 'right') {
        return 'app-button_right';
      }
      return 'app-button_center';
    },
  },
  beforeMount() {
    this.$validator.attach({ name: 'email', rules: { required: true } });
    this.$validator.attach({ name: 'password', rules: { required: true } });
  },
  methods: {
    goToRoute() {
      this.$router.push('/signup');
    },
    login() {
      console.log('login');
      this.$validator.validateAll({
        password: this.user.password,
        email: this.user.email,
      }).then((result) => {
        if (result) {
          authApi.loginUser(this.user).then((resp) => {
            console.log('resp', resp);
            this.$store.dispatch('setUserInfo', resp.data);
            this.$router.push('/');
          }).catch((e) => {
            console.error(e);
            console.log('e.response.data.errors', e.response.data.errors);
            const text = e.response.data.errors;
            console.log('text', text);

            this.validationMessage = {
              status: true,
              text: ['email or password'],
            };
            console.log('validationMessage', this.validationMessage);
            setTimeout(() => {
              this.validationMessage = {
                status: false,
                text: '',
              };
            }, 3000);
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
  @import "./src/assets/scss/variables";

</style>
