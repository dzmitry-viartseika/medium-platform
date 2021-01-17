<template>
  <div class="app-main">
      <div class="app-main__left">
        <loaderTemplate v-if="loader" />
        <tabTemplate :tabList="tabList" :activeTab="activeTab" @setActiveTab="setActiveTab"/>
        <div class="app-main-preview">
          <myFeed v-if="activeTab === 'Your Feed'" :myArticles="myArticles"/>
          <globalFeeds :globalArticles="globalArticles"
                       @getAllGlobalArticles="getAllGlobalArticles"
                       :loader.sync="loader"
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
import loaderTemplate from '@/components/elements/loaderTemplate.vue';

export default {
  name: 'HomePage',
  components: {
    tagsTemplate,
    tabTemplate,
    globalFeeds,
    myFeed,
    loaderTemplate,
  },
  data() {
    return {
      tagsList: [],
      tabList: ['Your Feed', 'Global Feed'],
      activeTab: 'Your Feed',
      globalArticles: {},
      myArticles: {},
      loader: false,
    };
  },
  beforeMount() {
    this.loader = true;
    tagsApi.getTagsList().then((resp) => {
      this.loader = false;
      this.tagsList = resp.data.tags;
    }).catch((e) => {
      this.loader = false;
      console.error(e);
    });
  },
  methods: {
    clickEvent(tag) {
      const limit = 10;
      const offset = 0;
      const { slug } = this.$route.params;
      if (this.tabList.length === 3) {
        this.tabList.pop();
      }
      articlesApi.getAllGlobalArticles(limit, offset, slug, tag).then((resp) => {
        const hashTag = `#${tag}`;
        this.tabList.push(hashTag);
        this.activeTab = hashTag;
        this.globalArticles = resp.data;
      }).catch((e) => {
        console.error(e);
      });
    },
    setActiveTab(tab) {
      if (this.tabList.length === 3) {
        this.tabList.pop();
      }
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
