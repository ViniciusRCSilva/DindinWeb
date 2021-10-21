import { shallowMount } from '@vue/test-utils';
import CardEditarCurso from '@/components/CardEditarCurso.vue';

describe('CardEditarCurso.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CardEditarCurso, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
