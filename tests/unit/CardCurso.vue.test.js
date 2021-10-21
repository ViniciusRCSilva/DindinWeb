import { shallowMount } from '@vue/test-utils';
import CardCurso from '@/components/CardCurso.vue';

describe('CardCurso.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CardCurso, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
