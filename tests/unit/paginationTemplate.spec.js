import { createLocalVue, mount } from '@vue/test-utils';
import paginationTemplate from '@/components/elements/paginationTemplate.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('headerTemplate.vue', () => {
  test('snapshot', () => {
    const wrapper = mount(paginationTemplate, {
      router,
      propsData: {
        total: 500,
        limit: 10,
        currentPage: 10,
        url: '/',
      },
    });
    expect(wrapper.find('.app-pagination')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
