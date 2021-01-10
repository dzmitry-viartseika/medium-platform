<template>
  <div class="app-article">
    <BannerTemplate :bannerInfo="bannerInfo"/>
    <div class="app-article__content">
      <h2>
        {{ bannerTitle }}
      </h2>
      <div class="tags">
        <div class="tags__item" v-for="item in bannerSlugList" :key="item">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="app-article__sign">
      <span class="app-article__sign-text" @click="proceedTo('login')">Sign in</span>
      or
      <span class="app-article__sign-text" @click="proceedTo('signup')">sign up</span>
      to add comments on this article
    </div>
  </div>
</template>

<script>
import articlesApi from '@/api/articles/articlesApi';
import BannerTemplate from '@/components/bannerTemplate.vue';
import { get } from 'lodash';

export default {
  name: 'articleTemplate',
  components: {
    BannerTemplate,
  },
  data() {
    return {
      item: {},
    };
  },
  computed: {
    bannerInfo() {
      return this.item;
    },
    bannerTitle() {
      console.log('this.item', this.item);
      return get(this.bannerInfo, 'article.title', '');
    },
    bannerSlugList() {
      return get(this.bannerInfo, 'article.tagList', []);
    },
  },
  methods: {
    proceedTo(route) {
      this.$router.push({
        name: route,
      });
    },
  },
  beforeMount() {
    const { slug } = this.$route.params;
    const limit = 10;
    const offset = 0;
    articlesApi.getAllGlobalArticles(limit, offset, slug).then((resp) => {
      this.item = resp.data;
    }).catch((e) => {
      console.error(e);
    });
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

.app-article {

  &__sign {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-text {
      color: $colorBtn;
      font-weight: bold;
      margin: 0 3px;
    }
  }

  &__content {
    padding: 30px 0;

    border-bottom: 1px solid $borderColor;

    h2 {
      margin-bottom: 30px;
    }

    .tags {
      display: flex;

      &__item {
        padding: 3px;
        border-radius: 10px;
        color: $colorTags;
        min-width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        border: 1px solid $borderColor;
        font-weight: bold;

        & + .tags__item {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
