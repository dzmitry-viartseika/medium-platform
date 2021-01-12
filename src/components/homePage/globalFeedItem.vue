<template>
  <div class="app-preview">
      <div class="app-preview-header">
        <div class="app-preview-header__img">
          <img :src="image" alt="photo">
        </div>
        <div class="app-preview-header__info">
          <div class="app-preview-header__info-username">
            {{ username }}
          </div>
          <div class="app-preview-header__info-date">
            {{ createdDate }}
          </div>
        </div>
        <div class="app-preview-header__follow">
         <articleCount :isfavorited="isfavorited"
                       :favoritesCount="favoritesCount"
                       @handleLike="handleLike"/>
        </div>
      </div>
      <div class="app-preview-content">
        <div class="app-preview-content__title">
          {{ title }}
        </div>
        <div class="app-preview-content__text">
          {{ description }}
        </div>
      </div>
    <div class="app-preview-footer">
      <div class="app-preview-footer__btn" @click="readMoreArticle(slug)">Read more</div>
      <div class="app-preview-footer__tags">
        <div class="app-preview-footer__tags-item" v-for="tag in tags" :key="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from 'lodash';
import articleCount from '@/components/articles/articleCount.vue';
import articlesApi from '@/api/articles/articlesApi';
import moment from 'moment';

export default {
  name: 'globalFeedItem',
  components: {
    articleCount,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    slug() {
      return get(this.item, 'slug', '');
    },
    image() {
      return get(this.item, 'author.image', '');
    },
    username() {
      return get(this.item, 'author.username', '');
    },
    createdAt() {
      return get(this.item, 'createdAt', '');
    },
    createdDate() {
      return moment(this.createdAt).format('LL');
    },
    title() {
      return get(this.item, 'title', '');
    },
    description() {
      return get(this.item, 'description', '');
    },
    favoritesCount: {
      get() {
        return get(this.item, 'favoritesCount', 0);
      },
      set(data) {
        this.item.favoritesCount = data;
      },
    },
    isfavorited: {
      get() {
        return get(this.item, 'favorited', 0);
      },
      set(data) {
        this.item.favorited = data;
      },
    },
    tags() {
      return get(this.item, 'tagList', []);
    },
  },
  methods: {
    readMoreArticle(slug) {
      this.$router.push({ path: `/article/${slug}` });
    },
    handleLike() {
      if (this.isfavorited) {
        if (this.favoritesCount < 0) {
          this.favoritesCount = 0;
        } else {
          this.favoritesCount -= 1;
          articlesApi.removeFromFavorite(this.slug);
        }
      } else {
        this.favoritesCount += 1;
        articlesApi.addToFavorite(this.slug);
      }
      this.isfavorited = !this.isfavorited;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

.app-preview {
  margin-bottom: 20px;
  border-bottom: 1px solid $colorTags;
  padding-bottom: 20px;

  &-header {
    display: flex;

    &__img {

      img {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    &__info {
      margin-left: 20px;

      &-date {
        font-size: $font-size-sm;
      }

      &-username {
        font-size: $font-size-base;
        color: $colorBtn;
        cursor: pointer;
        transition: opacity .15s ease-in;
        margin-bottom: 2px;

        &:hover {
          opacity: .8;
        }
      }
    }

    &__follow {
      width: 50px;
      display: flex;
      margin-left: auto;
    }
  }

  &-content {
    padding-top: 15px;
    padding-bottom: 15px;

    &__title {
      font: $font-size-lg $font-global-bold;
      margin-bottom: 5px;
    }

    &__text {
      font-size: $font-size-sm;
      color: $borderColor;
    }
  }

  &-footer {
    display: flex;
    justify-content: space-between;

    &__tags {
      display: flex;

      &-item {
        padding: 3px;
        background: $colorTags;
        color: $color-white;

        & + .app-preview-footer__tags-item {
          margin-left: 5px;
          border-radius: $borderRadiusSmall;
        }
      }
    }
  }
}
</style>
