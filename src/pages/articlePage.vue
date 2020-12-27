<template>
  <div class="app-article">
    <div class="app__wrapper">
      <div class="app-field">
        <input class="app-input" v-model="article.title"
               type="text"
               placeholder="Article title">
      </div>
      <div class="app-field">
        <input class="app-input" v-model="article.description"
               type="text"
               placeholder="What's this article about?">
      </div>
      <div class="app-field">
        <textarea class="app-textarea" v-model="article.body"
                  type="text"
                  placeholder="Write your article(in markdown)"></textarea>
      </div>
      <div class="app-field">
        <input class="app-input" v-model="article.tagList"
               type="text"
               placeholder="Enter tags">
      </div>
      <div class="app-settings-btn" :class="position">
        <ButtonTemplate :buttonSettings="buttonSettings"></ButtonTemplate>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonTemplate from '@/components/elements/buttonTemplate.vue';
import articlesApi from '@/api/articles/articlesApi';

export default {
  name: 'articlePage',
  components: {
    ButtonTemplate,
  },
  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: '',
      },
    };
  },
  computed: {
    position() {
      if (this.buttonSettings.position === 'left') {
        return 'app-button_left';
      }
      if (this.buttonSettings.position === 'right') {
        return 'app-button_right';
      }
      return 'app-button_center';
    },
    buttonSettings() {
      return {
        icon: false,
        buttonText: 'Public Article',
        buttonClickEvent: this.publishArticle,
        position: 'right',
      };
    },
  },
  methods: {
    publishArticle() {
      this.article.tagList = this.article.tagList.split(' ');
      articlesApi.createArticle(this.article).then()
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

</style>
