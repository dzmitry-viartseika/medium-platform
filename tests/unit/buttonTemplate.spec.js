import { shallowMount } from '@vue/test-utils';
import ButtonTemplate from '@/components/elements/buttonTemplate.vue';

describe('ButtonTemplate.vue', () => {
  it('renders information of row in the component', () => {
    const buttonSettings = {
      icon: false,
      buttonText: 'Sign in',
      buttonClickEvent: 'test',
      position: 'right',
    };
    const wrapper = shallowMount(ButtonTemplate, {
      propsData: {
        buttonSettings,
      },
    });
    expect(wrapper.find('span').text()).toBe(buttonSettings.buttonText);
    const i = wrapper.find('i');
    expect(i.exists()).toBe(false);
  });
});
