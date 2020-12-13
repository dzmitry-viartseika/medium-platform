import { shallowMount, createLocalVue } from '@vue/test-utils';
import infoProfileUser from '@/components/header/headerTemplate.vue';
import Vuex from 'vuex';

describe('infoProfileUser.vue', () => {
  it('renders information of headerTemplate in the component', () => {
    // const localValue = createLocalVue();
    // localValue.use(Vuex);
    // const store = new Vuex.Store(createLocalVue(createStore));
    const wrapperHeaderMenu = shallowMount(infoProfileUser);
    const div = wrapperHeaderMenu.find('.app-info-profile');
    expect(div.exists()).toBe(true);
  });
});
