<template>
  <button class="app-button" @click="buttonSettings.buttonClickEvent">
    <i v-if="buttonSettings.icon">
    </i>
    <span>
        {{ buttonSettings.buttonText }}
      </span>
  </button>
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
