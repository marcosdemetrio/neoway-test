import { createStore } from 'vuex'
import { fetchArticles } from '@/services/api'

export default createStore({
  state: {
    articles: [],
    filteredArticles: []
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles
      state.filteredArticles = articles
    },
    SET_FILTERED_ARTICLES(state, filteredArticles) {
      state.filteredArticles = filteredArticles
    }
  },
  actions: {
    async fetchArticles({ commit }) {
      try {
        const articles = await fetchArticles()
        commit('SET_ARTICLES', articles)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      }
    },
    filterArticles({ commit, state }, searchTerm) {
      const search = searchTerm.trim().toLowerCase()

      const filteredArticles = state.articles.filter((article) => {
        const title = article.title?.toLowerCase() || ''
        const description = article.description?.toLowerCase() || ''
        const content = article.content?.toLowerCase() || ''

        return title.includes(search) || description.includes(search) || content.includes(search)
      })

      commit('SET_FILTERED_ARTICLES', filteredArticles)
    }
  },
  getters: {
    articles: (state) => state.filteredArticles
  }
})
