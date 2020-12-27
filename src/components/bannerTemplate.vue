<template>
  <div class="app-banner">
      <h1 class="app-banner__title">Medium Clone</h1>
    <h2 class="app-banner__subtitle">A place to share knowledge</h2>
  </div>
</template>

<script>
export default {
  name: 'BannerTemplate',
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

.app-banner {
  background: $colorBtn;
  min-height: 300px;
  padding: 20px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &__title {
    font-size: $mainTitle;
    margin-bottom: 15px;
  }

  &__subtitle {
    font-size: $mainSubtitle;
  }
}
</style>
