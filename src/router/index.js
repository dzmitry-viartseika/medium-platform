import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from '@/pages/homePage';
import signupPage from '@/pages/signupPage';
import loginPage from '@/pages/loginPage';

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
