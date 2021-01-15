<template>
  <div class="app-profile">
    <div class="app-profile__img">
      <img :src="userProfile.image" alt="">
    </div>
    <div class="app-profile__username">
      {{ userProfile.username }}
    </div>
    <div class="app-profile__bio" v-if="userProfile.bio">
      {{ userProfile.bio }}
    </div>
    <button class="app-profile__button">
      Edit Profile Settings
    </button>
    <div class="app-profile-tabs">
      <tabTemplate :tabList="tabList" :activeTab="activeTab" @setActiveTab="setActiveTab"/>
    </div>
    <div class="app-main-preview">
      <loaderTemplate v-if="loader" />
      <myFeed v-if="activeTab === 'My Posts'" :myArticles="myArticles"/>
      <globalFeeds :globalArticles="globalArticles"
                   @getAllGlobalArticles="getAllGlobalArticles"
                   :loader.sync="loader"
                   v-else/>
    </div>
  </div>
</template>

<script>
import profileApi from '@/api/profile/profileApi';
import articlesApi from '@/api/articles/articlesApi';
import tabTemplate from '@/components/homePage/tabTemplate.vue';
import myFeed from '@/components/homePage/myFeed.vue';
import globalFeeds from '@/components/homePage/globalFeeds.vue';
import loaderTemplate from '@/components/elements/loaderTemplate.vue';

export default {
  name: 'userProfile',
  data() {
    return {
      userProfile: {},
      tabList: ['My Posts', 'Favorites Posts'],
      activeTab: 'My Posts',
      globalArticles: {},
      myArticles: {},
      loader: false,
    };
  },
  components: {
    tabTemplate,
    myFeed,
    globalFeeds,
    loaderTemplate,
  },
  beforeMount() {
    const { slug } = this.$route.params;
    profileApi.getUserProfile(slug).then((resp) => {
      this.userProfile = resp.data.profile;
    }).catch((e) => {
      console.error(e);
    });
  },
  methods: {
    getAllGlobalArticles() {
      const { slug } = this.$route.params;
      const limit = 10;
      const offset = 0;
      const author = slug;
      const tag = '';
      const slugs = '';
      articlesApi.getAllGlobalArticles(limit, offset, slugs, tag, author).then((resp) => {
        this.globalArticles = resp.data;
      }).catch((e) => {
        console.error(e);
      });
    },
    setActiveTab(tab) {
      this.activeTab = tab;
      if (tab === 'My Posts') {
        this.getMyArticles();
      } else {
        this.getAllGlobalArticles();
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

.app-profile {
  background: $borderColor;
  min-height: 400px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__img  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  &__username {
    margin-top: 10px;
  }

  &__bio {
    margin-top: 5px;
  }
}
</style>
