<template>
  <h1>
    homepage
    {{ tagsList }}
  </h1>
</template>

<script>

import tagsApi from '@/api/tags/tags/tagsApi';

export default {
  name: 'HomePage',
  data() {
    return {
      tagsList: [],
    };
  },
  beforeMount() {
    console.log('123');
    tagsApi.getTagsList((resp) => {
      console.log('wer');
      console.log('resp', resp);
      this.tagsList = resp.data.tags;
    }).catch((e) => {
      console.log(e);
    });
  },
};
</script>

<style scoped>

</style>
