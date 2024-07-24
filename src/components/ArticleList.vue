<script>
import ArticleItem from './ArticleItem.vue'
import ArticleModal from './ArticleModal.vue'
import NoArticles from './NoArticles.vue'
import LoadingIndicator from './LoadingIndicator.vue'
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
  <div class="article-list">
    <LoadingIndicator v-if="loading" />
    <ArticleItem
      v-for="article in filteredArticles"
      :key="article.url"
      :article="article"
      @open-detail="openArticleDetail"
    />
    <NoArticles v-if="hasFiltered && filteredArticles.length === 0" />
  </div>
  <ArticleModal v-if="showModal" :article="selectedArticle" @close="showModal = false" />
</template>

<style scoped>
.article-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
