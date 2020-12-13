import { shallowMount } from '@vue/test-utils';
import ButtonTemplate from '@/components/elements/buttonTemplate.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ButtonTemplate.vue', () => {
  it('render ButtonTemplate component', () => {
    const buttonSettings = {
      icon: false,
      buttonText: 'Sign in',
      buttonClickEvent: 'test',
      position: 'right',
    };
    const onClick = jest.fn();
    const wrapper = shallowMount(ButtonTemplate, {
      propsData: {
        buttonSettings,
        onClick,
      },
    });
    expect(wrapper.find('span').text()).toBe(buttonSettings.buttonText);
    const i = wrapper.find('i');
    expect(i.exists()).toBe(false);
  });
});
