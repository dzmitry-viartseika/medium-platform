<template lang="pug">
  button.app-button(@click="buttonSettings.buttonClickEvent")
    i(v-if="buttonSettings.icon")
    span {{ buttonSettings.buttonText }}
</template>

<script>
export default {
  name: 'ButtonTemplate',
  props: {
    buttonSettings: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";
</style>
