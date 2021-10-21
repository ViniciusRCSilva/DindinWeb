import { shallowMount } from '@vue/test-utils';
import CardPainel from '@/components/CardPainel.vue';

describe('CardPainel.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CardPainel, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
