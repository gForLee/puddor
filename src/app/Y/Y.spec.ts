import { createLocalVue, mount } from '@vue/test-utils';
import Y from './Y.vue';

const localVue = createLocalVue();

describe('Y.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(Y, {
      localVue,
    });

    expect(wrapper.text()).toBe('Y');
  });
});
