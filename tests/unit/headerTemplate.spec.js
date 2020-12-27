import { shallowMount, createLocalVue } from '@vue/test-utils';
import headerTemplate from '@/components/header/headerTemplate.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({});
localVue.use(VueRouter);
const router = new VueRouter();

describe('headerTemplate.vue', () => {
  test('snapshot', () => {
    const $store = {
      state: {
        userInfo: 1,
      },
      getters: {
        userInfo: () => ({}),
      },
    };
    const wrapper = shallowMount(headerTemplate, {
      localVue,
      store,
      router,
      mocks: {
        $store,
      },
    });
    wrapper.setData({ userPhoto: true });
    expect(wrapper.find('.app-info-profile__photo')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.app-header-logo__text').text()).toBe('Conduit');
  });
});
