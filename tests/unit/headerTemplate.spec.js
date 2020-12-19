import { shallowMount, createLocalVue } from '@vue/test-utils';
import headerTemplate from '@/components/header/headerTemplate.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();
const store = new Vuex.Store({});

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
      router,
      store,
      mocks: {
        $store,
      },
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.app-header-logo__text').text()).toBe('Conduit');
  });
});
