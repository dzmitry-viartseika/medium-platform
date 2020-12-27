<template>
  <div class="app-main">
      <div class="app-main__left">
        <tabTemplate :tabList="tabList" :activeTab="activeTab" @setActiveTab="setActiveTab"/>
        <div class="app-main-preview">
          <myFeed v-if="activeTab === 'Your Feed'" :myArticles="myArticles"/>
          <globalFeeds :globalArticles="globalArticles"
                       @getAllGlobalArticles="getAllGlobalArticles"
                       v-else/>
        </div>
      </div>
      <div class="app-main__right">
        <tagsTemplate v-if="tagsList.length" :tagsList="tagsList" @clickEvent="clickEvent"/>
      </div>
  </div>
</template>

<script>

import tagsApi from '@/api/tags/tagsApi';
import tagsTemplate from '@/components/homePage/tagsTemplate.vue';
import tabTemplate from '@/components/homePage/tabTemplate.vue';
import myFeed from '@/components/homePage/myFeed.vue';
import globalFeeds from '@/components/homePage/globalFeeds.vue';
import articlesApi from '@/api/articles/articlesApi';

export default {
  name: 'HomePage',
  components: {
    tagsTemplate,
    tabTemplate,
    globalFeeds,
    myFeed,
  },
  data() {
    return {
      tagsList: [],
      tabList: ['Your Feed', 'Global Feed'],
      activeTab: 'Your Feed',
      globalArticles: {},
      myArticles: {},
    };
  },
  beforeMount() {
    tagsApi.getTagsList().then((resp) => {
      this.tagsList = resp.data.tags;
    }).catch((e) => {
      console.log(e);
    });
  },
  methods: {
    clickEvent(tag) {
      console.log('tag', tag);
    },
    setActiveTab(tab) {
      this.activeTab = tab;
      if (tab === 'Your Feed') {
        this.getMyArticles();
      } else {
        this.getAllGlobalArticles();
      }
    },
    getAllGlobalArticles(limit, offset) {
      this.globalArticles = [];
      articlesApi.getAllGlobalArticles(limit, offset).then((resp) => {
        this.globalArticles = resp.data;
      }).catch((e) => {
        console.error(e);
      });
    },
    getMyArticles(limit, offset) {
      articlesApi.getAllMyArticles(limit, offset).then((resp) => {
        this.myArticles = resp.data;
      }).catch((e) => {
        console.error(e);
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

  .app-main {
    display: grid;
    grid-template-areas:
    "left left left right";
    grid-gap: 1em;

    &-preview {
      margin-top: 20px;
    }

    &__left {
      grid-area: left;
    }

    &__right {
      grid-area: right;
    }
  }
</style>
