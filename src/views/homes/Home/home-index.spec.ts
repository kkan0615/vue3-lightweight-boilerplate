import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeIndex from './index.vue'
import i18n from '@/locales'

describe('Home Index.vue', () => {
  const wrapper = mount(HomeIndex, {
    global: {
      plugins: [i18n],
    },
  })

  it('normal imports as expected', async () => {
    const cmp = await import('./index.vue')
    expect(cmp).toBeDefined()
  })
  it('it should render', () => {
    expect(HomeIndex).toBeTruthy()
    // Logo are defined
    const logoImgEl = wrapper.find('img')
    expect(logoImgEl).toBeDefined()
  })
})
