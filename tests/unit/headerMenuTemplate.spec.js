import { shallowMount } from '@vue/test-utils';
import headerMenuTemplate from '@/components/header/headerMenuTemplate.vue';
import headerMenuItem from '@/components/header/headerMenuItem.vue';

describe('headerMenuTemplate.vue', () => {
  it('renders information of headerMenu in the component', () => {
    window.items = [{}, {}, {}];
    const wrapper = shallowMount(headerMenuTemplate);
    expect(wrapper.findAllComponents(headerMenuItem))
      .toHaveLength(window.items.length);
  });
});
