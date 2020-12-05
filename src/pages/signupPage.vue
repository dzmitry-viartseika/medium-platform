<template>
  <div class="app-account">
    <h1 class="app-account__title">Sign Up</h1>
    <div class="app-account__link" @click="goToRoute()">Have an account?</div>
    <div class="app-account-field"><input class="app-input" type="text" placeholder="Username" v-model="user.username" :errorStatus="$validator.errors.has('username')" :class="{'error': $validator.errors.has('username')}" />
      <transition name="fade-el"><span class="app__validation" v-if="$validator.errors.has('username')">{{ $validator.errors.first('username') }}</span></transition>
      <transition name="fade-el"><span class="app__validation" v-if="validationMessage.status &amp;&amp; validationMessage.username !== ''">{{ validationMessage.username }}</span></transition>
    </div>
    <div class="app-account-field"><input class="app-input" type="text" placeholder="Login" v-model="user.email" :errorStatus="$validator.errors.has('email')" :class="{'error': $validator.errors.has('email')}" />
      <transition name="fade-el"><span class="app__validation" v-if="$validator.errors.has('email')">{{ $validator.errors.first('email') }}</span></transition>
      <transition name="fade-el"><span class="app__validation" v-if="validationMessage.status &amp;&amp; validationMessage.email !== ''">{{ validationMessage.email }}</span></transition>
    </div>
    <div class="app-account-field"><input class="app-input" type="password" placeholder="Password" v-model="user.password" :errorStatus="$validator.errors.has('password')" :class="{'error': $validator.errors.has('password')}" />
      <transition name="fade-el"><span class="app__validation" v-if="$validator.errors.has('password')">{{ $validator.errors.first('password') }}</span></transition>
      <transition name="fade-el"><span class="app__validation" v-if="validationMessage.status &amp;&amp; validationMessage.password !== ''">{{ validationMessage.password }}</span></transition>
    </div>
    <div class="app-account-btn" :class="position">
      <button-template :buttonSettings="buttonSettings"></button-template>
    </div>
  </div>
</template>

<script>
import ButtonTemplate from '@/components/elements/buttonTemplate';
import authApi from '@/api/auth/authApi';

export default {
  name: 'SignupPage',
  components: {
    ButtonTemplate,
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
      validationMessage: {
        status: false,
        email: '',
        password: '',
        username: '',
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
        buttonText: 'Sign up',
        buttonClickEvent: this.signUp,
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
    this.$validator.attach({ name: 'username', rules: { required: true } });
    this.$validator.attach({ name: 'email', rules: { required: true } });
    this.$validator.attach({ name: 'password', rules: { required: true } });
  },
  methods: {
    goToRoute() {
      this.$router.push('/login');
    },
    signUp() {
      this.$validator.validateAll({
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
      }).then((result) => {
        if (result) {
          authApi.createNewUser(this.user).then((resp) => {
            this.$store.dispatch('setUserInfo', resp.data);
            localStorage.setItem('jwtToken', JSON.stringify(resp.data.user.token));
            this.$router.push('/');
          }).catch((e) => {
            console.error(e);
            const { email = '' } = e.response.data.errors;
            const { password = '' } = e.response.data.errors;
            const { username = '' } = e.response.data.errors;
            this.validationMessage = {
              status: true,
              email: email[0],
              password: password[0],
              username: username[0],
            };
            setTimeout(() => {
              this.validationMessage = {
                status: false,
                email: '',
                password: '',
                username: '',
              };
            }, 3000);
          });
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
