<script>
import ArticleItem from '../components/ArticleItem.vue'
import ArticleModal from '../components/ArticleModal.vue'
import NoArticles from '../components/NoArticles.vue'
import LoadingIndicator from '../components/LoadingIndicator.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ArticleItem,
    ArticleModal,
    NoArticles,
    LoadingIndicator
  },
  computed: {
    ...mapGetters(['articles']),
    filteredArticles() {
      return this.articles
    }
  },
  data() {
    return {
      showModal: false,
      selectedArticle: null,
      hasFiltered: false,
      loading: false
    }
  },
  created() {
    this.fetchArticles()
  },
  watch: {
    filteredArticles() {
      this.hasFiltered = true
    }
  },
  methods: {
    ...mapActions(['fetchArticles']),
    openArticleDetail(article) {
      this.selectedArticle = article
      this.showModal = true
    },
    async fetchArticles() {
      this.loading = true
      await this.$store.dispatch('fetchArticles')
      this.loading = false
    }
  }
}
</script>

<template>
  <NoArticles v-if="hasFiltered && filteredArticles.length === 0">No articles found</NoArticles>
  <div v-else class="article-list">
    <ArticleItem
      v-for="article in filteredArticles"
      :key="article.url"
      :article="article"
      :aria-label="article.title"
      @open-detail="openArticleDetail"
    />
  </div>
  <LoadingIndicator v-if="loading & !articles.length" />
  <ArticleModal v-if="showModal" :article="selectedArticle" @close="showModal = false" />
</template>

<style scoped>
.article-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 768px) {
  .article-list {
    grid-template-columns: 1fr;
  }
}
</style>
