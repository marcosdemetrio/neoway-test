import { createStore } from 'vuex'
import { fetchArticles } from '@/services/api'

function removeAccents(string) {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default createStore({
  state: {
    articles: [],
    filteredArticles: [],
    favoritedArticles: []
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles
      state.filteredArticles = articles
    },
    SET_FILTERED_ARTICLES(state, filteredArticles) {
      state.filteredArticles = filteredArticles
    },
    ADD_FAVORITE_ARTICLE(state, article) {
      state.favoritedArticles.push(article)
    },
    REMOVE_FAVORITE_ARTICLE(state, articleUrl) {
      state.favoritedArticles = state.favoritedArticles.filter(
        (article) => article.url !== articleUrl
      )
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
      const search = removeAccents(searchTerm.trim().toLowerCase())

      const filteredArticles = state.articles.filter((article) => {
        const title = removeAccents(article.title?.toLowerCase() || '')
        const description = removeAccents(article.description?.toLowerCase() || '')
        const content = removeAccents(article.content?.toLowerCase() || '')

        return title.includes(search) || description.includes(search) || content.includes(search)
      })

      commit('SET_FILTERED_ARTICLES', filteredArticles)
    },
    addFavoriteArticle({ commit }, article) {
      commit('ADD_FAVORITE_ARTICLE', article)
    },
    removeFavoriteArticle({ commit }, articleUrl) {
      commit('REMOVE_FAVORITE_ARTICLE', articleUrl)
    }
  },
  getters: {
    articles: (state) => state.filteredArticles,
    favoritedArticles: (state) => state.favoritedArticles
  }
})
