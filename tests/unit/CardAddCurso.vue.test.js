import { shallowMount } from '@vue/test-utils';
import CardAddCurso from '@/components/CardAddCurso.vue';

describe('CardAddCurso.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CardAddCurso, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
