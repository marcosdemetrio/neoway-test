import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import store from '@/store'
import { fetchArticles } from '@/services/api'
import router from '@/router'

vi.mock('@/services/api', () => ({
  fetchArticles: vi.fn()
}))

const mockArticles = [
  {
    title: 'Article 1',
    description: 'Description 1',
    url: 'url1',
    author: 'Author 1',
    publishedAt: '2024-07-26T00:00:00Z',
    content: 'Content for article 1',
    urlToImage: 'image1.jpg'
  },
  {
    title: 'Article 2',
    description: 'Description 2',
    url: 'url2',
    author: 'Author 2',
    publishedAt: '2024-07-27T00:00:00Z',
    content: 'Content for article 2',
    urlToImage: 'image2.jpg'
  }
]

fetchArticles.mockResolvedValue(mockArticles)

describe('App.vue', () => {
  let wrapper

  beforeEach(async () => {
    wrapper = mount(App, {
      global: {
        plugins: [store, router]
      }
    })
    await store.dispatch('fetchArticles')
    await router.isReady()
    await wrapper.vm.$nextTick()
  })

  it('fetch and render articles', async () => {
    mockArticles.forEach((article) => {
      const articleItem = wrapper.find(`[aria-label="${article.title}"]`)
      expect(articleItem.text()).toContain(article.title)
      expect(articleItem.text()).toContain(article.description)
    })
  })

  it('open article details', async () => {
    const firstArticleItem = wrapper.find(`[aria-label="${mockArticles[0].title}"]`)
    await firstArticleItem.trigger('click')
    await wrapper.vm.$nextTick()

    const articleModal = wrapper.findComponent({ name: 'ArticleModal' })
    expect(articleModal.exists()).toBe(true)

    const articleDetail = wrapper.findComponent({ name: 'ArticleDetail' })
    expect(articleDetail.exists()).toBe(true)

    const articleDetailText = articleDetail.text()
    expect(articleDetailText).toContain(mockArticles[0].title)
    expect(articleDetailText).toContain(`By ${mockArticles[0].author}`)

    const formattedDate = new Date(mockArticles[0].publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    expect(articleDetailText).toContain(formattedDate)

    expect(articleDetailText).toContain(mockArticles[0].content)

    const articleLink = articleDetail.find('a').attributes('href')
    expect(articleLink).toBe(mockArticles[0].url)
  })

  it('close article details', async () => {
    const firstArticleItem = wrapper.find(`[aria-label="${mockArticles[0].title}"]`)
    await firstArticleItem.trigger('click')
    await wrapper.vm.$nextTick()

    const articleModal = wrapper.findComponent({ name: 'ArticleModal' })
    const closeButton = articleModal.find('[aria-label="Close"]')
    await closeButton.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent({ name: 'ArticleModal' }).exists()).toBe(false)
  })

  it('filter articles', async () => {
    const searchInput = wrapper.find('[aria-label="Filter articles"]')
    await searchInput.setValue('Article 1')
    await searchInput.trigger('input')
    await wrapper.vm.$nextTick()

    const filteredArticles = wrapper.findAll('[aria-label="Article 1"]')
    expect(filteredArticles.length).toBe(1)
    expect(filteredArticles[0].text()).toContain('Article 1')
  })
})
