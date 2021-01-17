<template>
  <div class="app-user">
    <div class="app-user-profile">
      <div class="app-user-profile__img">
        <img :src="userProfile.image" alt="">
      </div>
      <div class="app-user-profile__username">
        {{ userProfile.username }}
      </div>
      <div class="app-user-profile__bio" v-if="userProfile.bio">
        {{ userProfile.bio }}
      </div>
      <div class="app-user-profile__edit">
        <ButtonTemplate :buttonSettings="buttonSettings" v-if="isVisibleEditButton" />
      </div>
    </div>
    <div class="app-user-tabs">
      <tabTemplate :tabList="tabList" :activeTab="activeTab" @setActiveTab="setActiveTab"/>
    </div>
    <div class="app-user-preview">
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
import ButtonTemplate from '@/components/elements/buttonTemplate.vue';

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
    ButtonTemplate,
  },
  computed: {
    buttonSettings() {
      return {
        icon: false,
        buttonText: 'Edit Profile Settings',
        buttonClickEvent: this.proceedTo,
        position: 'right',
      };
    },
    isVisibleEditButton() {
      return this.userInfo.username === this.userProfile.username;
    },
    userInfo() {
      return this.$store.getters.userInfo;
    },
  },
  beforeMount() {
    const { slug } = this.$route.params;
    profileApi.getUserProfile(slug).then((resp) => {
      this.userProfile = resp.data.profile;
      console.log('userProfile', this.userProfile);
    }).catch((e) => {
      console.error(e);
    });
  },
  methods: {
    proceedTo() {
      this.$router.push('/settings');
    },
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

.app-user {

  &-profile {
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

    &__edit {
      margin-top: 20px;
    }

    &__username {
      margin-top: 10px;
    }

    &__bio {
      margin-top: 5px;
    }
  }

  &-tabs {
    margin-top: 20px;
  }

  &-preview {
    margin-top: 20px;
  }
}
</style>
