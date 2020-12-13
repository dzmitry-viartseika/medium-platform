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
        <div class="app-preview-header__follow"></div>
      </div>
  </div>
</template>

<script>
import { get } from 'lodash';
import moment from 'moment';

export default {
  name: 'globalFeedItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
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
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

.app-preview {

  &-header {

    &__img {

      img {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
}
</style>
