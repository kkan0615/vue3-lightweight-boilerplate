import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HomeIndex from './index.vue'
import i18n from '@/locales'
import { createHead } from '@vueuse/head'

describe('Home Index.vue', () => {
  const head = createHead()

  const wrapper = shallowMount(HomeIndex, {
    global: {
      plugins: [i18n, head],
    },
  })

  it('normal imports as expected', async () => {
    const cmp = await import('./index.vue')
    expect(cmp).toBeDefined()
  })
  it('it should render', () => {
    expect(HomeIndex).toBeTruthy()
    // Logo are defined
    const logoImgEl = wrapper.find('img[alt="logo"]')
    expect(logoImgEl).toBeDefined()
  })
})
