import { shallowMount, createLocalVue } from '@vue/test-utils';
import headerMenuTemplate from '@/components/header/headerMenuTemplate.vue';
import headerMenuItem from '@/components/header/headerMenuItem.vue';

import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({});

describe('headerMenuTemplate.vue', () => {
  it('renders information of headerMenu in the component', () => {
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
      mocks: {
        $store,
      },
    });

    expect(wrapper.findAllComponents(headerMenuItem).length).toBe(3);
  });
});
