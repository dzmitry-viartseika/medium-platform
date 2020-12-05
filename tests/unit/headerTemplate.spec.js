import { shallowMount } from '@vue/test-utils';
import headerTemplate from '@/components/header/headerTemplate.vue';
import HeaderMenuTemplate from '@/components/header/headerMenuTemplate.vue';

describe('headerTemplate.vue', () => {
  it('renders information of headerTemplate in the component', () => {
    const wrapper = shallowMount(headerTemplate);
    expect(wrapper.find('.app-header-logo__text').text()).toBe('Conduit');
    const wrapperHeaderMenu = shallowMount(HeaderMenuTemplate);
    const div = wrapperHeaderMenu.find('.app-menu');
    expect(div.exists()).toBe(true);
  });
});
