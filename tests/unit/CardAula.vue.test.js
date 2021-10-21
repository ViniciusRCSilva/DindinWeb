import { shallowMount } from '@vue/test-utils';
import CardAula from '@/components/CardAula.vue';

describe('CardAula.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CardAula, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
