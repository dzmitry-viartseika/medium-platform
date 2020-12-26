import { createLocalVue, shallowMount } from '@vue/test-utils';
import infoProfileUser from '@/components/header/infoProfileUser.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({});

describe('infoProfileUser.vue', () => {
  it('renders information of infoProfileUser in the component', () => {
    const $store = {
      state: {
        userInfo: 1,
      },
      getters: {
        userInfo: () => ({}),
      },
    };
    const wrapper = shallowMount(infoProfileUser, {
      localVue,
      store,
      mocks: {
        $store,
      },
    });
    const div = wrapper.find('.app-info-profile');
    expect(div.exists()).toBe(true);
  });
});
