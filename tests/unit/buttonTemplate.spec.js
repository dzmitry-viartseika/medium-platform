import { createLocalVue, shallowMount } from '@vue/test-utils';
import ButtonTemplate from '@/components/elements/buttonTemplate.vue';

const buttonSettings = {
  icon: false,
  buttonText: 'Sign in',
  buttonClickEvent: 'test',
  position: 'right',
};

describe('ButtonTemplate.vue', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(ButtonTemplate, {
      propsData: {
        buttonSettings,
      },
    });
    expect(wrapper.find('span').text()).toBe(buttonSettings.buttonText);
    const i = wrapper.find('i');
    expect(i.exists()).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
