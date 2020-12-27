import { shallowMount, createLocalVue, render } from '@vue/test-utils';
import headerMenuTemplate from '@/components/header/headerMenuTemplate.vue';

import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({});

describe('headerMenuTemplate.vue', () => {
  test('snapshot', () => {
    const $store = {
      state: {
        userInfo: 1,
      },
      getters: {
        userInfo: () => ({}),
      },
    };
    const wrapper = shallowMount(headerMenuTemplate, {
      localVue,
      store,
      render,
      mocks: {
        $store,
      },
    });
    expect(wrapper.find('.app-menu')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
