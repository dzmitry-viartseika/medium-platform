import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from '@/pages/homePage.vue';
import signupPage from '@/pages/signupPage.vue';
import loginPage from '@/pages/loginPage.vue';
import settings from '@/pages/settings.vue';
import articlePage from '@/pages/articlePage.vue';
import articleEdit from '@/pages/articleEdit.vue';
import articleTemplate from '@/components/articles/articleTemplate.vue';
import userProfile from '@/components/profile/userProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: loginPage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: signupPage,
  },
  {
    path: '/',
    name: 'home',
    component: homePage,
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings,
  },
  {
    path: '/article',
    name: 'articlePage',
    component: articlePage,
  },
  {
    path: '/article/:slug',
    name: 'articleEdit',
    component: articleEdit,
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: articleTemplate,
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: userProfile,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
