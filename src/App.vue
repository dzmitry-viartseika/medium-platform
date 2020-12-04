<template lang="pug">
  .app
    .app__container
      header-template
      router-view
</template>

<script>

import HeaderTemplate from '@/components/header/headerTemplate';

export default {
  name: 'App',
  components: { HeaderTemplate },
};
</script>

<style lang="scss">
@import 'assets/scss/style';

@font-face {
  font-family: 'Ubuntu';
  font-display: swap;
  src: url('./assets/fonts/ubuntu/ubuntu.woff') format('woff');
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu-medium';
  src: url('./assets/fonts/ubuntu/ubuntumedium.woff') format('woff');
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu-bold';
  src: url('./assets/fonts/ubuntu/ubuntubold.woff') format('woff');
  font-style: normal;
}
</style>

<script>
import HeaderTemplate from "@/components/header/headerTemplate";
export default {
  components: {HeaderTemplate}
}
</script>
