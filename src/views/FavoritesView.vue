<script>
import ArticleItem from '@/components/ArticleItem.vue'
import ArticleModal from '@/components/ArticleModal.vue'
import NoArticles from '@/components/NoArticles.vue'

export default {
  components: {
    ArticleItem,
    ArticleModal,
    NoArticles
  },
  data() {
    return {
      selectedArticle: null
    }
  },
  computed: {
    favoritedArticles() {
      return this.$store.getters.favoritedArticles
    }
  },
  methods: {
    openArticleDetail(article) {
      this.selectedArticle = article
    },
    closeArticleDetail() {
      this.selectedArticle = null
    }
  }
}
</script>

<template>
  <NoArticles v-if="favoritedArticles.length === 0">No favorited articles</NoArticles>
  <div v-else class="favorited-articles-list">
    <ArticleItem
      v-for="article in favoritedArticles"
      :key="article.url"
      :article="article"
      @click="openArticleDetail(article)"
    />
  </div>
  <ArticleModal v-if="selectedArticle" :article="selectedArticle" @close="closeArticleDetail" />
</template>

<style scoped>
.favorited-articles-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 768px) {
  .favorited-articles-list {
    grid-template-columns: 1fr;
  }
}
</style>
